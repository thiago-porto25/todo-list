import { loginPageRenderer } from './Login-page-Module'
import { navDomHandler, mainDomHandler, modalDomHandler, appPageRenderer } from './Main-page-Module'



const prevent = (function() {
  const Refresh = event => {
    event.preventDefault()
  }

  return { Refresh }
})()



const _localStorageUserObj = JSON.parse(localStorage.getItem('user'))
console.log(_localStorageUserObj)

let userObj = localStorage.getItem('user') !== null ? _localStorageUserObj : {}
console.log(userObj)



const variablesForControl = (function() {
  let pageInitiated = false

  const setCurrentlyDisplayedProject = () => {
    const project = document.querySelector('.projectsClicked')
    return project
  }

  return { pageInitiated, setCurrentlyDisplayedProject }
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
    notes
  }
  return { ...task }
}



const ProjectFactory = (name) => {
  const project = {
    name,
    todos: []
  }
  return { project }
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
        todos: [{
          title: 'My first Todo',
          dueDate: undefined,
          notes: 'Yay! I must start creating todos.'
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
  }

  return { renderDefaultAppPage, renderCustomAppPage }
})()




const eventsHandler = (function(){
  const addListenerSubmitNewTask = () => {
    const form = document.querySelector('#newTaskModalForm')
    console.log(form)
    form.addEventListener('submit', prevent.Refresh)
    form.addEventListener('submit', () => {
      const title = document.querySelector('#taskTitleContainer input').value
      const dueDate = document.querySelector('#dueDateContainer input').value
      const notes = document.querySelector('#notesContainer textarea').value

      const newTask = TaskFactory(title, dueDate, notes)

      const currentProject = variablesForControl.setCurrentlyDisplayedProject()
      const currentProjectId = currentProject.getAttribute('data-deleteproject')
      const taskId = userObj.projects[currentProjectId].todos.push(newTask) - 1

      mainDomHandler.createTodosListItem(title, taskId)

      localStorageHandler.update()

      modalDomHandler.removeNewTaskModal()
    })
  }
  const addListenerNewTask = () => {
    const newTodoButton = document.querySelector('.newTodoButton')
    newTodoButton.addEventListener('click', modalDomHandler.displayNewTaskModal)
    addListenerSubmitNewTask()
  }
  const addListenerNewProject = () => {
    const newProjectButton = document.querySelector('#newProjectButton')
    newProjectButton.addEventListener('click', modalDomHandler.displayNewProjectModal)
  }
  const addListenerDeleteProject = () => {
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

      mainDomHandler.removeProjectTitleOnPage()
      mainDomHandler.removeAllTodosListItems()
      mainDomHandler.createEmptyTodosText()

      userObj.projects.splice(deleteId, 1)
      localStorageHandler.update()

      deleteId = undefined
      console.log(userObj)
    })
  }
  const addListenerLogin = () => {
    const _loginForm = document.querySelector('#loginForm')
    _loginForm.addEventListener('submit', prevent.Refresh)
    _loginForm.addEventListener('submit', () => {
      init.renderDefaultAppPage()
      addListenerNewTask()
      addListenerNewProject()
      addListenerDeleteProject()
    })
  }
  

  return {
    addListenerLogin,
    addListenerNewTask,
    addListenerNewProject,
    addListenerDeleteProject,
    addListenerSubmitNewTask
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
    eventsHandler.addListenerDeleteProject()
  }
  
  
})()