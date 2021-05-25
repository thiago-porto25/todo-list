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

  let isNotNew = true

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

  return { pageInitiated, isNotNew, setCurrentlyDisplayedProject, resetDeleteTaskId, resetDeleteProjectId }
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
    
    if(userObj.projects[0] === undefined){
      mainDomHandler.renderNoProjectsText()
      variablesForControl.pageInitiated = true
    }
    else {
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
  
      if(userObj.projects[0].todos[0] === undefined) mainDomHandler.renderEmptyTodosText()
    }
  }

  return { renderDefaultAppPage, renderCustomAppPage }
})()



const changesHandler = (function() {
  const displayNewProject = (id) => {
    mainDomHandler.unrenderNoProjectsText()
    mainDomHandler.unrenderEmptyTodosText()
    mainDomHandler.removeAllTodosListItems()
    mainDomHandler.removeProjectTitleOnPage()
    const project = userObj.projects[id]

    mainDomHandler.setProjectTitleOnPage(project.name)

    if(project.todos[0] === undefined) mainDomHandler.renderEmptyTodosText()

    else {
      project.todos.forEach(todo => {
        mainDomHandler.createTodosListItem(todo.title, project.todos.indexOf(todo))
      })
    }
  }
  const displayNextProject = (deletedId) => {
    if(deletedId != 0) {
      const nextProjectId = deletedId - 1
      navDomHandler.addClickedStyle(nextProjectId)
      userObj.projects[nextProjectId].isDisplayed = true
      displayNewProject(nextProjectId)
    }

    if(deletedId == 0 && userObj.projects[0] != undefined) {
      navDomHandler.addClickedStyle(deletedId)
      userObj.projects[deletedId].isDisplayed = true
      displayNewProject(deletedId)
    }

    if (deletedId == 0 && userObj.projects[0] == undefined) {
      mainDomHandler.renderNoProjectsText()
      mainDomHandler.unrenderEmptyTodosText()
      mainDomHandler.setProjectTitleOnPage('')
    }
  }

  return { displayNewProject, displayNextProject }
})()



const eventsHandler = (function(){
  const addListenerCloseNewTask = () => {
    const closeBtn = document.querySelector('.modalNewTask .close')
    closeBtn.addEventListener('click', modalDomHandler.removeNewTaskModal)
  }
  const addListenerCloseNewProject = () => {
    const closeBtn = document.querySelector('.modalNewProject .close')
    closeBtn.addEventListener('click', modalDomHandler.removeNewProjectModal)
  }
  const addListenerCloseDeleteCreatedProject = () => {
    const closeBtn = document.querySelector('#deleteTask .close')
    const cancelBtn = document.querySelector('#cancelDeleteTaskButton')
    closeBtn.addEventListener('click', modalDomHandler.removeDeleteProjectModalCreated)
    cancelBtn.addEventListener('click', modalDomHandler.removeDeleteProjectModalCreated)
  }
  const addListenerCloseDeleteOnStartProject = () => {
    const closeBtn = document.querySelector('#deleteProject .close')
    const cancelBtn = document.querySelector('#cancelDeleteProjectButton')
    closeBtn.addEventListener('click', modalDomHandler.removeDeleteProjectModalOnStart)
    cancelBtn.addEventListener('click', modalDomHandler.removeDeleteProjectModalOnStart)
  }
  const addListenerToDeleteCreatedTask = (taskId, projectId) => {
    const taskElem = document.querySelector(`[data-deletetodo = '${taskId}']`)
    const deleteButton = taskElem.querySelector('.deleteTodo')
    deleteButton.addEventListener('click', () => {
      userObj.projects[projectId].todos.splice(taskId, 1)

      taskElem.remove()

      localStorageHandler.update()

      variablesForControl.resetDeleteTaskId()

      if (userObj.projects[projectId].todos[0] === undefined) {
        mainDomHandler.renderEmptyTodosText()
      }
    })
  }
  const addListenerToDeleteCreatedProject = (elem) => {
    const deleteButton = elem.lastChild
    let id

    deleteButton.addEventListener('click', (e) => {
      modalDomHandler.displayDeleteProjectModalCreated()
      addListenerCloseDeleteCreatedProject()

      id = e.target.parentElement.getAttribute('data-deleteproject')

      const confirmDeleteButton = document.querySelector('#finalDeleteProjectButtonCreated')
    
      confirmDeleteButton.addEventListener('click', () => {
        modalDomHandler.removeDeleteProjectModalCreated()

        navDomHandler.removeProjectListItem(id)

        if(userObj.projects[id].isDisplayed){
          mainDomHandler.removeProjectTitleOnPage()
          mainDomHandler.removeAllTodosListItems()
          mainDomHandler.renderEmptyTodosText()
        }

        userObj.projects.splice(id, 1)
      
        localStorageHandler.update()
        variablesForControl.resetDeleteProjectId()
        changesHandler.displayNextProject(id)
      })
    })
  }
  const addListenerToNavigateCreatedProject = (elem) => {
    elem.addEventListener('click', (e) => {
      const projectId = elem.getAttribute('data-deleteproject')
      if(e.target !== elem) return

      const projectClass = elem.getAttribute('class')

      if(projectClass === 'projectsListItem projectsClicked') return

      const allProjects = document.querySelectorAll('.projectsListItem')
      allProjects.forEach(projectItem => projectItem.setAttribute('class', 'projectsListItem'))
      userObj.projects.forEach(projectArr => projectArr.isDisplayed = false)

      navDomHandler.addClickedStyle(projectId)
      userObj.projects[projectId].isDisplayed = true

      changesHandler.displayNewProject(projectId)
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

      mainDomHandler.unrenderEmptyTodosText()

      const taskId = userObj.projects[currentProjectId].todos.push(newTask) - 1

      mainDomHandler.createTodosListItem(title, taskId)

      addListenerToDeleteCreatedTask(taskId, currentProjectId)

      localStorageHandler.update()

      modalDomHandler.removeNewTaskModal()
    })
  }
  const addListenerNewTask = () => {
    const newTodoButton = document.querySelector('.newTodoButton')
    newTodoButton.addEventListener('click', modalDomHandler.displayNewTaskModal)
    const newTaskModal = document.querySelector('.modalNewTask')
    addListenerSubmitNewTask()
    addListenerCloseNewTask()
  }
  const addListenerSubmitNewProject = () => {
    const form = document.querySelector('.modalNewProject')

    form.addEventListener('submit', prevent.Refresh)
    form.addEventListener('submit', () => {
      const projectName = form.querySelector('input').value

      const newProject = ProjectFactory(projectName)

      const projectId = userObj.projects.push(newProject) - 1

      const elem = navDomHandler.createProjectListItem(projectName, projectId)

      if(projectId == 0) {
        userObj.projects[projectId].isDisplayed = true
      }

      localStorageHandler.update()

      modalDomHandler.removeNewProjectModal()

      addListenerToDeleteCreatedProject(elem)
      addListenerToNavigateCreatedProject(elem)
    })
  }
  const addListenerNewProject = () => {
    const newProjectButton = document.querySelector('#newProjectButton')
    newProjectButton.addEventListener('click', modalDomHandler.displayNewProjectModal)
    addListenerSubmitNewProject()
    addListenerCloseNewProject()
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
            mainDomHandler.renderEmptyTodosText()
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
        modalDomHandler.displayDeleteProjectModalOnStart()
        addListenerCloseDeleteOnStartProject()

        const projectListItem = e.target.parentElement

        deleteId = projectListItem.getAttribute('data-deleteproject')

        const confirmDeleteButton = document.querySelector('#finalDeleteProjectButtonOnStart')

        confirmDeleteButton.addEventListener('click', () => {
          modalDomHandler.removeDeleteProjectModalOnStart()
    
          navDomHandler.removeProjectListItem(deleteId)
    
          if(userObj.projects[deleteId].isDisplayed){
            mainDomHandler.removeProjectTitleOnPage()
            mainDomHandler.removeAllTodosListItems()
            mainDomHandler.renderEmptyTodosText()
          }
    
          userObj.projects.splice(deleteId, 1)
          
          localStorageHandler.update()
          variablesForControl.resetDeleteProjectId()
          changesHandler.displayNextProject(deleteId)

          deleteId = undefined
        })
      })
    })
  }
  const addListenerNavigateProjectsOnStart = () => {
    const projectList = document.querySelectorAll('.projectsListItem')
    projectList.forEach(project => {
      project.addEventListener('click', e => {
        if(e.target !== project) return

        const checkIfDisplayed = project.getAttribute('class')

        if(checkIfDisplayed === 'projectsListItem projectsClicked') return

        const clickedProjectId = e.target.getAttribute('data-deleteproject')

        const allProjects = document.querySelectorAll('.projectsListItem')

        allProjects.forEach(projectItem => projectItem.setAttribute('class', 'projectsListItem'))

        userObj.projects.forEach(projectArr => projectArr.isDisplayed = false)

        e.target.setAttribute('class', 'projectsListItem projectsClicked')
        console.log(userObj.projects[clickedProjectId].isDisplayed)
        userObj.projects[clickedProjectId].isDisplayed = true

        changesHandler.displayNewProject(clickedProjectId)
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