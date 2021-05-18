const loginPageCreator = (function() {
  const createLogo = () => {
    const bigLogoContainer = document.createElement('div')
    bigLogoContainer.setAttribute('id', 'bigLogoContainer')
    bigLogoContainer.setAttribute('class', 'logo')

    const span = document.createElement('span')
    span.textContent = 'Todo List'

    bigLogoContainer.appendChild(span)

    return bigLogoContainer
  }

  const createLoginForm = () => {
    const loginForm = document.createElement('form')
    loginForm.setAttribute('id', 'loginForm')

    const headerLogin = document.createElement('div')
    headerLogin.setAttribute('class', 'headerLogin')

    const header = document.createElement('header')
    header.textContent = 'Log in to Todo List'

    const loginContainer = document.createElement('div')
    loginContainer.setAttribute('class', 'loginContainer')

    const input = document.createElement('input')
    input.setAttribute('type', 'text')
    input.setAttribute('required', '')
    input.setAttribute('maxlength', '10')
    input.setAttribute('class', 'inputText')
    input.setAttribute('id', 'inputUserFirstName')

    const span = document.createElement('span')
    span.setAttribute('class', 'floating-label')
    span.setAttribute('maxlength', '30')
    span.textContent = 'First Name'

    const button = document.createElement('button')
    button.setAttribute('class', 'button loginButton')
    button.textContent = 'Login'

    loginContainer.appendChild(input)
    loginContainer.appendChild(span)

    headerLogin.appendChild(header)

    loginForm.appendChild(headerLogin)
    loginForm.appendChild(loginContainer)
    loginForm.appendChild(button)

    return loginForm
  }

  return { createLogo, createLoginForm }
})()

const loginPageRenderer = (function() {
  const initialRender = () => {
    const loginPage = document.createElement('div')
    loginPage.setAttribute('id', 'loginPage')

    const body = document.querySelector('body')

    const bigLogoContainer = loginPageCreator.createLogo()

    const loginForm = loginPageCreator.createLoginForm()

    loginPage.appendChild(bigLogoContainer)
    loginPage.appendChild(loginForm)

    body.appendChild(loginPage)
  }
  const deleteLoginPage = () => {
    const loginPage = document.querySelector('#loginPage')
    loginPage.remove()
  }

  return { initialRender, deleteLoginPage }
})()

export { loginPageRenderer }