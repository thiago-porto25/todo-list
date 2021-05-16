const { info } = require("node:console")

const navCreator = (function() {
  const _createLogo = () => {
    const logoContainer = document.createElement('div')
    logoContainer.setAttribute('class', 'logo')
    logoContainer.setAttribute('id', 'logoContainer')

    const span = document.createElement('span')
    span.textContent = 'Todo List'

    logoContainer.appendChild(span)

    return logoContainer
  }

  const _createNewProjectButtonContainer = () => {
    const newProjectButtonContainer = document.createElement('div')
    newProjectButtonContainer.setAttribute('id', 'newProjectButtonContainer')

    const newProjectButton = document.createElement('button')
    newProjectButton.setAttribute('class', 'button')
    newProjectButton.setAttribute('id', 'newProjectButton')

    const plusIcon = document.createElement('i')
    plusIcon.setAttribute('class', 'fas fa-plus-circle')

    newProjectButton.appendChild(plusIcon)
    newProjectButton.textContent = 'New Project'

    newProjectButtonContainer.appendChild(newProjectButton)

    return newProjectButtonContainer
  }

  const _createProjectsListContainer = () => {
    const projectsListContainer = document.createElement('div')
    projectsListContainer.setAttribute('id', 'projectsListContainer')

    const h1 = document.createElement('h1')
    h1.textContent = 'Projects'

    const ul = document.createElement('ul')
    ul.setAttribute('id', 'projectsList')

    projectsListContainer.appendChild(h1)
    projectsListContainer.appendChild(ul)

    return projectsListContainer
  }

  const _createFooter = () => {
    const foot = document.createElement('div')
    foot.setAttribute('id', 'foot')

    const p = document.createElement('p')
    p.textContent = 'Created by '

    const a = document.createElement('a')
    a.setAttribute('href', 'https://github.com/thiago-porto25')

    const i = document.createElement('i')
    i.setAttribute('class', 'fab fa-github')

    a.appendChild(i)
    a.textContent = 'Thiago Porto'

    p.appendChild(a)
    foot.appendChild(p)

    return foot
  }

  const createProjectListItem = (name, id) => {
    const listItem = document.createElement('li')
    listItem.setAttribute('class', 'projectsListItem')
    listItem.setAttribute('data-deleteProject', id)

    const para = document.createElement('p')
    para.textContent = name

    const deleteIcon = document.createElement('i')
    deleteIcon.setAttribute('class', 'fas fa-task fa-project-delete fa-trash-alt')

    listItem.appendChild(para)
    listItem.appendChild(deleteIcon)

    return listItem
  }

  const createNav = () => {
    const appPage = document.querySelector('#appPage')

    const nav = document.createElement('nav')

    const logoContainer = _createLogo()
    const newProjectButtonContainer = _createNewProjectButtonContainer()
    const projectsListContainer = _createProjectsListContainer()
    const foot = _createFooter()

    nav.appendChild(logoContainer)
    nav.appendChild(newProjectButtonContainer)
    nav.appendChild(projectsListContainer)
    nav.appendChild(foot)

    appPage.appendChild(nav)
  }

  return {
    createNav,
    createProjectListItem
  }
})()





const mainCreator = (function() {
  const _createUserNameContainer = () => {
    const userNameContainer = document.createElement('div')
    userNameContainer.setAttribute('class', 'projectContainer userNameContainer')

    const userIcon = document.createElement('i')
    userIcon.setAttribute('class', 'fas fa-task fa-user-circle')

    const span = document.createElement('span')
    span.setAttribute('id', 'userName')

    userNameContainer.appendChild(userIcon)
    userNameContainer.appendChild(span)

    return userNameContainer
  }

  const _createProjectTitleContainer = () => {
    const projectTitleContainer = document.createElement('div')
    projectTitleContainer.setAttribute('class', 'projectTitleContainer projectContainer')

    const h2 = document.createElement('h2')
    h2.setAttribute('id', 'projectTitle')
    
    const editIcon = document.createElement('i')
    editIcon.setAttribute('class', 'fas fa-pen')

    projectTitleContainer.appendChild(h2)
    projectTitleContainer.appendChild(editIcon)

    return projectTitleContainer
  }

  const _createProjectTodosContainer = () => {
    const projectTodosContainer = document.createElement('div')
    projectTodosContainer.setAttribute('class', 'projectTodosContainer projectContainer')

    const todosList = document.createElement('ul')
    todosList.setAttribute('class', 'todosList')

    projectTodosContainer.appendChild(todosList)

    return projectTodosContainer
  }

  const createTodosListItem = (title, id) => {
    const todosListItem = document.createElement('li')
    todosListItem.setAttribute('class', 'todosListItem')
    todosListItem.setAttribute('data-deleteTodo', id)

    const label = document.createElement('label')
    label.setAttribute('class', 'container')

    const checkbox = document.createElement('input')
    checkbox.setAttribute('type', 'checkbox')

    const checkmark = document.createElement('span')
    checkmark.setAttribute('class', 'checkmark')

    label.appendChild(checkbox)
    label.appendChild(checkmark)
    todosListItem.appendChild(label)

    const todoTitle = document.createElement('span')
    todoTitle.setAttribute('class', 'todoTitle')
    todoTitle.textContent = title

    todosListItem.appendChild(todoTitle)

    const buttonsContainer = document.createElement('div')
    buttonsContainer.setAttribute('class', 'buttonsContainer')

    const infoButton = document.createElement('button')
    infoButton.setAttribute('class', 'button taskButton')
    infoButton.setAttribute('id', 'editTodo')
    const infoIcon = document.createElement('i')
    infoIcon.setAttribute('class', 'fas fa-task fa-info-circle')

    const deleteButton = document.createElement('button')
    deleteButton.setAttribute('class', 'button taskButton')
    deleteButton.setAttribute('id', 'deleteTodo')
    const deleteIcon = document.createElement('i')
    deleteIcon.setAttribute('class', 'fas fa-task fa-trash-alt')

    infoButton.appendChild(infoIcon)
    buttonsContainer.appendChild(infoButton)

    deleteButton.appendChild(deleteIcon)
    buttonsContainer.appendChild(deleteButton)

    todosListItem.appendChild(buttonsContainer)

    return todosListItem
  }

  const createMain = () => {
    const appPage = document.querySelector('#appPage')

    const main = document.createElement('main')
    const userNameContainer = _createUserNameContainer()
    const projectTitleContainer = _createProjectTitleContainer()
    const projectTodosContainer = _createProjectTodosContainer()

    main.appendChild(userNameContainer)
    main.appendChild(projectTitleContainer)
    main.appendChild(projectTodosContainer)

    appPage.appendChild(main)
  }

  return {
    createTodosListItem,
    createMain
  }
})()





const modalsCreator = (function() {
  const _createModalNewProject = () => {
    const modalNewProject = document.createElement('div')
    modalNewProject.setAttribute('class', 'modalTemplate modalNewProject')

    const closeBtn = document.createElement('span')
    closeBtn.setAttribute('class', 'close')
    closeBtn.textContent = '&times;'

    const header = document.createElement('header')
    header.textContent = 'New Project'

    const projectName = document.createElement('input')
    projectName.setAttribute('class', 'modalInput')
    projectName.setAttribute('placeholder', 'Project\'s Name')
    projectName.setAttribute('required', '')
    projectName.setAttribute('maxlength', '20')

    const submitButton = document.createElement('button')
    submitButton.setAttribute('class', 'button submitProjectButton')
    submitButton.textContent = 'Create'

    modalNewProject.appendChild(closeBtn)
    modalNewProject.appendChild(header)
    modalNewProject.appendChild(projectName)
    modalNewProject.appendChild(submitButton)

    return modalNewProject
  }

  const _createModalNewTask = () => {
    const closeBtn = document.createElement('span')
    closeBtn.setAttribute('class', 'close')
    closeBtn.textContent = '&times;'
  }

  const _createModalTaskInfo = () => {
    const modalTaskInfo = document.createElement('div')
    modalTaskInfo.setAttribute('class', 'modalTemplate modalTaskInfo')

    const form = document.createElement('form')
    form.setAttribute('id', 'infoContainer')

    const closeBtn = document.createElement('span')
    closeBtn.setAttribute('class', 'close')
    closeBtn.textContent = '&times;'

    const infoTitle = document.createElement('textarea')
    infoTitle.setAttribute('class', 'modalInput newTaskInput')
    infoTitle.setAttribute('id', 'infoTitle')
    infoTitle.setAttribute('required', '')

    const labelDate = document.createElement('label') 
    labelDate.setAttribute('class', 'templateLabelNewTask')
    labelDate.textContent = 'Due Date'
    
    const infoDate = document.createElement('input')
    infoDate.setAttribute('class', 'modalInput')
    infoDate.setAttribute('type', 'date')

    const labelNotes = document.createElement('label')
    labelNotes.setAttribute('class', 'templateLabelNewTask')
    labelNotes.textContent = 'Notes'

    const infoNotes = document.createElement('textarea')
    infoNotes.setAttribute('class', 'modalInput')
    infoNotes.setAttribute('id', 'notesInfo')
    infoNotes.setAttribute('maxlength', '150')
    infoNotes.setAttribute('rows', '3')
    infoNotes.setAttribute('placeholder', 'Insert you notes here...')

    const saveEditButtonContainer = document.createElement('div')
    saveEditButtonContainer.setAttribute('id', 'saveEditButtonContainer')

    const saveEditButton = document.createElement('button')
    saveEditButton.setAttribute('class', 'button addTaskButton saveEditButton')
    saveEditButton.textContent = 'Save changes'

    saveEditButtonContainer.appendChild(saveEditButton)

    form.appendChild(closeBtn)
    form.appendChild(infoTitle)
    form.appendChild(labelDate)
    form.appendChild(infoDate)
    form.appendChild(labelNotes)
    form.appendChild(infoNotes)
    form.appendChild(saveEditButtonContainer)

    modalTaskInfo.appendChild(form)

    return modalTaskInfo
  }

  const _createModalDeleteProject = () => {
    const deleteProject = document.createElement('div')
    deleteProject.setAttribute('class', 'modalTemplate modalDelete')
    deleteProject.setAttribute('id', 'deleteProject')

    const closeBtn = document.createElement('span')
    closeBtn.setAttribute('class', 'close')
    closeBtn.textContent = '&times;'

    const para = document.createElement('p')
    para.textContent = 'Are you sure you want to delete this Project?'

    const buttonsContainer = document.createElement('div')
    buttonsContainer.setAttribute('id', 'deleteAndCancelContainer')

    const deleteButton = document.createElement('button')
    deleteButton.setAttribute('class', 'button cancelAndDelete')
    deleteButton.setAttribute('id', 'finalDeleteProjectButton')
    deleteButton.textContent = 'Delete'

    const cancelButton = document.createElement('button')
    cancelButton.setAttribute('class', 'button cancelAndDelete')
    cancelButton.setAttribute('id', 'cancelDeleteProjectButton')
    cancelButton.textContent = 'Cancel'

    buttonsContainer.appendChild(deleteButton)
    buttonsContainer.appendChild(cancelButton)

    deleteProject.appendChild(closeBtn)
    deleteProject.appendChild(para)
    deleteProject.appendChild(buttonsContainer)

    return deleteProject
  }

  const _createModalDeleteTask = () => {
    const deleteTask = document.createElement('div')
    deleteTask.setAttribute('class', 'modalTemplate modalDelete')
    deleteTask.setAttribute('id', 'deleteTask')

    const closeBtn = document.createElement('span')
    closeBtn.setAttribute('class', 'close')
    closeBtn.textContent = '&times;'

    const para = document.createElement('p')
    para.textContent = 'Are you sure you want to delete this Task?'

    const buttonsContainer = document.createElement('div')
    buttonsContainer.setAttribute('id', 'deleteAndCancelContainer')

    const deleteButton = document.createElement('button')
    deleteButton.setAttribute('class', 'button cancelAndDelete')
    deleteButton.setAttribute('id', 'finalDeleteTaskButton')
    deleteButton.textContent = 'Delete'

    const cancelButton = document.createElement('button')
    cancelButton.setAttribute('class', 'button cancelAndDelete')
    cancelButton.setAttribute('id', 'cancelDeleteTaskButton')
    cancelButton.textContent = 'Cancel'

    buttonsContainer.appendChild(deleteButton)
    buttonsContainer.appendChild(cancelButton)

    deleteTask.appendChild(closeBtn)
    deleteTask.appendChild(para)
    deleteTask.appendChild(buttonsContainer)

    return deleteTask
  }

  const createModal = () => {

  }

})()





const appPageHandler = (function(){
  const setUserNameOnMain = (user) => {
    const userName = document.querySelector('#userName')
    userName.textContent = user
  }


  const setProjectNameOnMain = (title) => {
    const projectTitle = document.querySelector('#projectTitle')
    projectTitle.textContent = title
  }

})()