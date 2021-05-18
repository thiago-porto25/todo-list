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



const localStorageHandler = (function() {
  const update = () => {
    localStorage.setItem('user', JSON.stringify(userObj))
  }

  return { update }
})()



const todoFactory = 1



const projectFactory = 1



const init = (function () {
  const renderDefaultAppPage = () => {
    const nameInput = document.querySelector('#inputUserFirstName')
    const userName = nameInput.value

    loginPageRenderer.deleteLoginPage()
    appPageRenderer.initialRender()

    navDomHandler.createProjectListItem('Default', '0')
    mainDomHandler.setProjectTitleOnPage('Default')
    mainDomHandler.setUserNameOnPage(userName)
    mainDomHandler.createTodosListItem('My first Todo ', '0')

    userObj.name = userName
    userObj.projects = [ 
      { 
        name: 'Default',
        projectId: 0, 
        todos: [{
          title: 'My first Todo',
          todoId: 0,
          dueDate: undefined,
          notes: 'Yay! I must start creating todos.'
        }]
      }
    ]

    localStorageHandler.update()
  }
  const renderCustomAppPage = () => {
    const userName = userObj.name

    appPageRenderer.initialRender()

    mainDomHandler.setUserNameOnPage(userName)
    userObj.projects.forEach(project => {
      const id = project.projectId
      const name = project.name

      navDomHandler.createProjectListItem(name, id)
    })
    mainDomHandler.setProjectTitleOnPage(userObj.projects[0].name)

    userObj.projects[0].todos.forEach(todo => {
      const title = todo.title
      const id = todo.todoId

      mainDomHandler.createTodosListItem(title, id)
    })
  }

  return { renderDefaultAppPage, renderCustomAppPage }
})()




const eventsHandler = (function(){
  const addListenerLogin = () => {
    const _loginForm = document.querySelector('#loginForm')
    _loginForm.addEventListener('submit', prevent.Refresh)
    _loginForm.addEventListener('submit', init.renderDefaultAppPage)
  }
  const addListenerNewTask = () => {
    const newTodoButton = document.querySelector('.newTodoButton')
    newTodoButton.addEventListener('click', modalDomHandler.displayNewTaskModal)
  }
  const addListenerNewProject = () => {
    const newProjectButton = document.querySelector('#newProjectButton')
    newProjectButton.addEventListener('click', modalDomHandler.displayNewProjectModal)
  }

  return { addListenerLogin, addListenerNewTask, addListenerNewProject }
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
  eventsHandler.addListenerNewTask()
  eventsHandler.addListenerNewProject()
})()