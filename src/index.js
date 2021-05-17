import { loginPageRenderer } from './Login-page-Module'
import { navDomHandler, mainDomHandler, modalDomHandler, appPageRenderer } from './Main-page-Module'

const init = (function(){
  appPageRenderer.initialRender()

  navDomHandler.createProjectListItem('Default', '0')
  mainDomHandler.setProjectTitleOnPage('Default')

  mainDomHandler.setUserNameOnPage('Thiago')

  mainDomHandler.createTodosListItem('My first ', '0')
})()

