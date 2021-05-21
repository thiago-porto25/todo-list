import { loginPageRenderer } from './Login-page-Module'
import { navDomHandler, mainDomHandler, modalDomHandler, appPageRenderer } from './Main-page-Module'



const prevent = (function() {
  const Refresh = event => {
    event.preventDefault()
  }

  return { Refresh }
})()



const _localStorageUserObj = JSON.parse(localStorage.getItem('user'))

let userObj = localStorage.getItem('user') !== null ? _localStorageUserObj : {}



const variablesForControl = (function() {
  let pageInitiated = false

  const setCurrentlyDisplayedProject = () => {
    const project = document.querySelector('.projectsClicked')
    return project
  }
  const resetDeleteTaskId = () => {
    const allTasks = document.querySelectorAll('.todosListItem')
    let counter = 0

    allTasks.forEach(task => {
      task.setAttribute('data-deletetodo', counter)
      ++counter
    })
  }
  const resetDeleteProjectId = () => {
    const allProjects = document.querySelectorAll('.projectsListItem')
    let counter = 0

    allProjects.forEach(project => {
      project.setAttribute('data-deleteproject', counter)
      ++counter
    })
  }

  return { pageInitiated, setCurrentlyDisplayedProject, resetDeleteTaskId, resetDeleteProjectId }
})()



const localStorageHandler = (function() {
  const update = () => {
    localStorage.setItem('user', JSON.stringify(userObj))
  }

  return { update }
})()



const TaskFactory = (title, dueDate, notes) => {
  const task = {
    title,
    dueDate,
    notes,
    isDone: false
  }
  return { ...task }
}



const ProjectFactory = (name) => {
  const project = {
    name,
    isDisplayed: false,
    todos: []
  }
  return { ...project }
}



const init = (function () {
  const renderDefaultAppPage = () => {
    const nameInput = document.querySelector('#inputUserFirstName')
    const userName = nameInput.value

    loginPageRenderer.deleteLoginPage()
    appPageRenderer.initialRender()

    navDomHandler.createProjectListItem('Default', '0')
    navDomHandler.addClickedStyle('0')
    mainDomHandler.setProjectTitleOnPage('Default')
    mainDomHandler.setUserNameOnPage(userName)
    mainDomHandler.createTodosListItem('My first Todo ', '0')

    userObj.name = userName
    userObj.projects = [ 
      { 
        name: 'Default',
        isDisplayed: true,
        todos: [{
          title: 'My first Todo',
          dueDate: undefined,
          notes: 'Yay! I must start creating todos.',
          isDone: false
        }]
      }
    ]

    localStorageHandler.update()

    variablesForControl.pageInitiated = true
  }
  const renderCustomAppPage = () => {
    const userName = userObj.name

    appPageRenderer.initialRender()

    mainDomHandler.setUserNameOnPage(userName)
    userObj.projects.forEach(project => {
      const id = userObj.projects.indexOf(project)
      const name = project.name

      navDomHandler.createProjectListItem(name, id)
    })
    navDomHandler.addClickedStyle('0')
    mainDomHandler.setProjectTitleOnPage(userObj.projects[0].name)

    userObj.projects[0].todos.forEach(todo => {
      console.log(userObj.projects[0].todos)
      const title = todo.title
      const id = userObj.projects[0].todos.indexOf(todo)

      mainDomHandler.createTodosListItem(title, id)
    })

    variablesForControl.pageInitiated = true

    if(userObj.projects[0].todos[0] === undefined) mainDomHandler.createEmptyTodosText()
  }

  return { renderDefaultAppPage, renderCustomAppPage }
})()



const changesHandler = (function() {
  const displayNewProject = (id, lastProjectId) => {
    mainDomHandler.removeAllTodosListItems()
    mainDomHandler.removeProjectTitleOnPage()
    const project = userObj.projects[id]
    const lastProject = userObj.projects[lastProjectId]

    mainDomHandler.setProjectTitleOnPage(project.name)

    if(project.todos[0] === undefined) mainDomHandler.createEmptyTodosText()

    else {
      if(lastProject.todos[0] === undefined) mainDomHandler.removeEmptyTodosText()
      project.todos.forEach(todo => {
        mainDomHandler.createTodosListItem(todo.title, project.todos.indexOf(todo))
      })
    }
  }

  return { displayNewProject }
})()



const eventsHandler = (function(){
  const addListenerToDeleteCreatedTask = (taskElem, projectId) => {
    const taskId = taskElem.getAttribute('data-deletetodo')
    const deleteButton = taskElem.querySelector('.deleteTodo')
    deleteButton.addEventListener('click', () => {
      userObj.projects[projectId].todos.splice(taskId, 1)

      taskElem.remove()

      localStorageHandler.update()

      variablesForControl.resetDeleteTaskId()

      if (userObj.projects[projectId].todos[0] === undefined) {
        mainDomHandler.createEmptyTodosText()
      }
    })
  }
  const addListenerSubmitNewTask = () => {
    const form = document.querySelector('#newTaskModalForm')
    
    form.addEventListener('submit', prevent.Refresh)

    form.addEventListener('submit', () => {
      const title = document.querySelector('#taskTitleContainer input').value
      const dueDate = document.querySelector('#dueDateContainer input').value
      const notes = document.querySelector('#notesContainer textarea').value

      const newTask = TaskFactory(title, dueDate, notes)

      const currentProject = variablesForControl.setCurrentlyDisplayedProject()
      const currentProjectId = currentProject.getAttribute('data-deleteproject')

      if(userObj.projects[currentProjectId].todos[0] === undefined) {
        mainDomHandler.removeEmptyTodosText()
      }

      const taskId = userObj.projects[currentProjectId].todos.push(newTask) - 1

      const createdTask = mainDomHandler.createTodosListItem(title, taskId)

      addListenerToDeleteCreatedTask(createdTask, currentProjectId)

      localStorageHandler.update()

      modalDomHandler.removeNewTaskModal()
    })
  }
  const addListenerNewTask = () => {
    const newTodoButton = document.querySelector('.newTodoButton')
    newTodoButton.addEventListener('click', modalDomHandler.displayNewTaskModal)
    addListenerSubmitNewTask()
  }
  const addListenerSubmitNewProject = () => {
    const form = document.querySelector('.modalNewProject')

    form.addEventListener('submit', prevent.Refresh)
    form.addEventListener('submit', () => {
      const projectName = form.querySelector('input').value

      const newProject = ProjectFactory(projectName)

      const projectId = userObj.projects.push(newProject) - 1

      navDomHandler.createProjectListItem(projectName, projectId)

      localStorageHandler.update()

      modalDomHandler.removeNewProjectModal()
    })
  }
  const addListenerNewProject = () => {
    const newProjectButton = document.querySelector('#newProjectButton')
    newProjectButton.addEventListener('click', modalDomHandler.displayNewProjectModal)
    addListenerSubmitNewProject()
  }
  const addListenerDeleteTaskOnStart = () => {
    const deleteTaskButtons = document.querySelectorAll('.deleteTodo')

    deleteTaskButtons.forEach(button => {
      button.addEventListener('click', e => {
        if(button === e.target) {
          const currentProject = variablesForControl.setCurrentlyDisplayedProject()
          const currentProjectId = currentProject.getAttribute('data-deleteproject')
          const taskId = e.target.parentElement.parentElement.parentElement.getAttribute('data-deletetodo')
          const taskDomElement = e.target.parentElement.parentElement.parentElement

          taskDomElement.remove()
          userObj.projects[currentProjectId].todos.splice(taskId, 1)

          localStorageHandler.update()
          variablesForControl.resetDeleteTaskId()

          if (userObj.projects[currentProjectId].todos[0] === undefined) {
            mainDomHandler.createEmptyTodosText()
          }
        }
      })
    })
  }
  const addListenerDeleteProjectOnStart = () => {
    const projects = document.querySelectorAll('.projectsListItem')
    let deleteId

    projects.forEach(project => {
      const deleteButton = project.lastChild

      deleteButton.addEventListener('click', (e) => {
        modalDomHandler.displayDeleteProjectModal()

        const projectListItem = e.target.parentElement

        deleteId = projectListItem.getAttribute('data-deleteproject')
      })
    })
    const confirmDeleteButton = document.querySelector('#finalDeleteProjectButton')

    confirmDeleteButton.addEventListener('click', () => {
      modalDomHandler.removeDeleteProjectModal()

      navDomHandler.removeProjectListItem(deleteId)

      if(userObj.projects[deleteId].isDisplayed){
        mainDomHandler.removeProjectTitleOnPage()
        mainDomHandler.removeAllTodosListItems()
        mainDomHandler.createEmptyTodosText()
      }

      userObj.projects.splice(deleteId, 1)
      
      localStorageHandler.update()
      variablesForControl.resetDeleteProjectId()

      deleteId = undefined
    })
  }
  const addListenerNavigateProjectsOnStart = () => {
    const projectList = document.querySelectorAll('.projectsListItem')
    projectList.forEach(project => {
      project.addEventListener('click', e => {
        if(e.target !== project) return

        const checkIfDisplayed = project.getAttribute('class')

        if(checkIfDisplayed === 'projectsListItem projectsClicked') return

        const displayedProject = document.querySelector('.projectsClicked')
        const displayedProjectId = displayedProject.getAttribute('data-deleteproject')

        const clickedProjectId = e.target.getAttribute('data-deleteproject')

        displayedProject.setAttribute('class', 'projectsListItem')
        userObj.projects[displayedProjectId].isDisplayed = false

        navDomHandler.addClickedStyle(clickedProjectId)
        userObj.projects[clickedProjectId].isDisplayed = true

        changesHandler.displayNewProject(clickedProjectId, displayedProjectId)
        addListenerDeleteTaskOnStart()
      })
    })
  }
  const addListenerLogin = () => {
    const _loginForm = document.querySelector('#loginForm')
    _loginForm.addEventListener('submit', prevent.Refresh)
    _loginForm.addEventListener('submit', () => {
      init.renderDefaultAppPage()
      addListenerNewTask()
      addListenerNewProject()
      addListenerDeleteProjectOnStart()
      addListenerDeleteTaskOnStart()
      addListenerNavigateProjectsOnStart()
    })
  }
  

  return {
    addListenerLogin,
    addListenerNewTask,
    addListenerNewProject,
    addListenerDeleteProjectOnStart,
    addListenerSubmitNewTask,
    addListenerDeleteTaskOnStart,
    addListenerNavigateProjectsOnStart
  }
})()




const loginHandler = (function() {
  const _loginLogic = () => {
    if (userObj.name === undefined) {
      loginPageRenderer.initialRender()
      eventsHandler.addListenerLogin()
    }

    else {
      init.renderCustomAppPage()
    }
  }

  _loginLogic()

  if (variablesForControl.pageInitiated) {
    eventsHandler.addListenerNewTask()
    eventsHandler.addListenerNewProject()
    eventsHandler.addListenerDeleteProjectOnStart()
    eventsHandler.addListenerDeleteTaskOnStart()
    eventsHandler.addListenerNavigateProjectsOnStart()
  }
  
  
})()