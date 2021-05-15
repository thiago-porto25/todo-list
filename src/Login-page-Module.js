const loginPageHandler = (function() {
  const _createLogo = () => {
    const bigLogoContainer = document.createElement('div')
    bigLogoContainer.setAttribute('id', 'bigLogoContainer')
    bigLogoContainer.setAttribute('class', 'logo')

    const span = document.createElement('span')
    span.textContent = 'Todo List'

    bigLogoContainer.appendChild(span)

    return bigLogoContainer
  }

  const _createLoginForm = () => {
    const loginForm = document.createElement('form')
    loginForm.setAttribute('id', 'loginForm')

    const headerLogin = document.createElement('div')
    headerLogin.setAttribute('class', 'headerLogin')

    const header = document.createElement('header')
    header.textContent = 'Log in Todo List'

    const loginContainer = document.createElement('div')
    loginContainer.setAttribute('class', 'loginContainer')

    const input = document.createElement('input')
    input.setAttribute('type', 'text')
    input.setAttribute('required', '')
    input.setAttribute('class', 'inputText')

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

  const initialRender = () => {
    const loginPage = document.createElement('div')
    loginPage.setAttribute('id', 'loginPage')

    const body = document.querySelector('body')

    const bigLogoContainer = _createLogo()

    const loginForm = _createLoginForm()

    loginPage.appendChild(bigLogoContainer)
    loginPage.appendChild(loginForm)

    body.appendChild(loginPage)
    console.log(body)
  }

  return { initialRender }
})()

export { loginPageHandler }