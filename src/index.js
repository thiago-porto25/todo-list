import { loginPageRenderer } from './Login-page-Module'
import { navDomHandler, mainDomHandler, modalDomHandler, appPageRenderer } from './Main-page-Module'



const prevent = (function() {
  const Refresh = event => {
    event.preventDefault()
  }

  return { Refresh }
})()



const userObj = {}



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
          notes: undefined
        }]
      }
    ]

    console.log(userObj)
  }
  return { renderDefaultAppPage }
})()



const loginHandler = (function() {
  const _loginLogic = () => {
    let gameStorage = false

    if(!gameStorage) {
      loginPageRenderer.initialRender()
      const _loginForm = document.querySelector('#loginForm')
      _loginForm.addEventListener('submit', prevent.Refresh)
      _loginForm.addEventListener('submit', init.renderDefaultAppPage)
    }
  }

  _loginLogic()
})()