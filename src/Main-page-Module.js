/* eslint-disable func-names */
/* eslint-disable no-underscore-dangle */
const navCreator = (function () {
  const _createLogo = () => {
    const logoContainer = document.createElement('div')
    logoContainer.setAttribute('class', 'logo')
    logoContainer.setAttribute('id', 'logoContainer')

    const span = document.createElement('span')
    span.textContent = 'Todo List'

    logoContainer.appendChild(span)

    return logoContainer
  }

  const _createCloseNavContainer = () => {
    const closeNavContainer = document.createElement('div')
    closeNavContainer.setAttribute('id', 'closeNavContainer')

    const closeNavButton = document.createElement('button')
    closeNavButton.setAttribute('id', 'closeNavButton')

    const closeNavIcon = document.createElement('i')
    closeNavIcon.setAttribute('class', 'fas fa-chevron-left')

    closeNavButton.appendChild(closeNavIcon)
    closeNavContainer.appendChild(closeNavButton)

    return closeNavContainer
  }

  const _createNewProjectButtonContainer = () => {
    const newProjectButtonContainer = document.createElement('div')
    newProjectButtonContainer.setAttribute('id', 'newProjectButtonContainer')

    const newProjectButton = document.createElement('button')
    newProjectButton.setAttribute('class', 'button')
    newProjectButton.setAttribute('id', 'newProjectButton')

    const plusIcon = document.createElement('i')
    plusIcon.setAttribute('class', 'fas fa-plus-circle')

    newProjectButton.textContent = ' New Project'
    newProjectButton.prepend(plusIcon)

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

    a.textContent = ' Thiago Porto'
    a.prepend(i)

    p.appendChild(a)
    foot.appendChild(p)

    return foot
  }

  const createNav = () => {
    const nav = document.createElement('nav')

    const closeNavContainer = _createCloseNavContainer()
    const logoContainer = _createLogo()
    const newProjectButtonContainer = _createNewProjectButtonContainer()
    const projectsListContainer = _createProjectsListContainer()
    const foot = _createFooter()

    nav.appendChild(closeNavContainer)
    nav.appendChild(logoContainer)
    nav.appendChild(newProjectButtonContainer)
    nav.appendChild(projectsListContainer)
    nav.appendChild(foot)

    return nav
  }

  return { createNav }
})()

const mainCreator = (function () {
  const _createUserNameContainer = () => {
    const userNameContainer = document.createElement('div')
    userNameContainer.setAttribute(
      'class',
      'projectContainer userNameContainer'
    )

    const userIcon = document.createElement('i')
    userIcon.setAttribute('class', 'fas fa-task fa-user-circle')

    const span = document.createElement('span')
    span.setAttribute('id', 'userName')

    userNameContainer.appendChild(userIcon)
    userNameContainer.appendChild(span)

    return userNameContainer
  }

  const _createOpenNavContainer = () => {
    const openNavContainer = document.createElement('div')
    openNavContainer.setAttribute('id', 'openNavContainer')

    const openNavButton = document.createElement('button')
    openNavButton.setAttribute('id', 'openNavButton')

    const openNavIcon = document.createElement('i')
    openNavIcon.setAttribute('class', 'fas fa-bars')

    openNavButton.appendChild(openNavIcon)
    openNavContainer.appendChild(openNavButton)

    return openNavContainer
  }

  const _createNewTodoButtonContainer = () => {
    const newTodoButtonContainer = document.createElement('div')
    newTodoButtonContainer.setAttribute('id', 'newTodoButtonContainer')

    const newTodoButton = document.createElement('button')
    newTodoButton.setAttribute('class', 'button newTodoButton')

    const span = document.createElement('span')
    span.setAttribute('class', 'plusSpan')
    span.textContent = '+'

    newTodoButton.appendChild(span)
    newTodoButtonContainer.appendChild(newTodoButton)

    return newTodoButtonContainer
  }

  const _createProjectTitleContainer = () => {
    const projectTitleContainer = document.createElement('div')
    projectTitleContainer.setAttribute(
      'class',
      'projectTitleContainer projectContainer'
    )

    const h2 = document.createElement('h2')
    h2.setAttribute('id', 'projectTitle')

    projectTitleContainer.appendChild(h2)

    return projectTitleContainer
  }

  const _createProjectTodosContainer = () => {
    const projectTodosContainer = document.createElement('div')
    projectTodosContainer.setAttribute(
      'class',
      'projectTodosContainer projectContainer'
    )

    const todosList = document.createElement('ul')
    todosList.setAttribute('class', 'todosList')

    projectTodosContainer.appendChild(todosList)

    return projectTodosContainer
  }

  const createMain = () => {
    const main = document.createElement('main')
    const userNameContainer = _createUserNameContainer()
    const openNavContainer = _createOpenNavContainer()
    const newTodoButton = _createNewTodoButtonContainer()
    const projectTitleContainer = _createProjectTitleContainer()
    const projectTodosContainer = _createProjectTodosContainer()

    main.appendChild(userNameContainer)
    main.appendChild(openNavContainer)
    main.appendChild(newTodoButton)
    main.appendChild(projectTitleContainer)
    main.appendChild(projectTodosContainer)

    return main
  }

  return { createMain }
})()

const modalsCreator = (function () {
  const _createModalNewProject = () => {
    const modalNewProject = document.createElement('form')
    modalNewProject.setAttribute('class', 'modalTemplate modalNewProject')

    const closeBtn = document.createElement('span')
    closeBtn.setAttribute('class', 'close')
    closeBtn.innerHTML = '&times;'

    const header = document.createElement('header')
    header.textContent = 'New Project'

    const projectName = document.createElement('input')
    projectName.setAttribute('class', 'modalInput')
    projectName.setAttribute('placeholder', "Project's Name")
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
    const modalNewTask = document.createElement('div')
    modalNewTask.setAttribute('class', 'modalTemplate modalNewTask')

    const closeBtn = document.createElement('span')
    closeBtn.setAttribute('class', 'close')
    closeBtn.innerHTML = '&times;'

    const form = document.createElement('form')
    form.setAttribute('id', 'newTaskModalForm')

    const taskTitleContainer = document.createElement('div')
    taskTitleContainer.setAttribute('id', 'taskTitleContainer')

    const titleInput = document.createElement('input')
    titleInput.setAttribute('class', 'modalInput newTaskInput')
    titleInput.setAttribute('maxlength', '35')
    titleInput.setAttribute('type', 'text')
    titleInput.setAttribute('placeholder', 'I want to...')
    titleInput.setAttribute('required', '')

    taskTitleContainer.appendChild(titleInput)

    const dueDateContainer = document.createElement('div')
    dueDateContainer.setAttribute('id', 'dueDateContainer')

    const labelDate = document.createElement('label')
    labelDate.setAttribute('class', 'templateLabelNewTask')
    labelDate.setAttribute('for', 'date')
    labelDate.textContent = 'Due date'

    const dateBreak = document.createElement('br')

    const dateInput = document.createElement('input')
    dateInput.setAttribute('class', 'modalInput')
    dateInput.setAttribute('type', 'date')
    dateInput.setAttribute('name', 'date')

    dueDateContainer.appendChild(labelDate)
    dueDateContainer.appendChild(dateBreak)
    dueDateContainer.appendChild(dateInput)

    const notesContainer = document.createElement('div')
    notesContainer.setAttribute('id', 'notesContainer')

    const labelNotes = document.createElement('label')
    labelNotes.setAttribute('class', 'templateLabelNewTask')
    labelNotes.setAttribute('for', 'notes')
    labelNotes.textContent = 'Notes'

    const notesBreak = document.createElement('br')

    const textareaNotes = document.createElement('textarea')
    textareaNotes.setAttribute('class', 'modalInput')
    textareaNotes.setAttribute('maxlength', '150')
    textareaNotes.setAttribute('name', 'notes')
    textareaNotes.setAttribute('rows', '1')
    textareaNotes.setAttribute('placeholder', 'Insert you notes here...')

    notesContainer.appendChild(labelNotes)
    notesContainer.appendChild(notesBreak)
    notesContainer.appendChild(textareaNotes)

    const addTaskButtonContainer = document.createElement('div')
    addTaskButtonContainer.setAttribute('id', 'addTaskButtonContainer')

    const addTaskButton = document.createElement('button')
    addTaskButton.setAttribute('class', 'button addTaskButton')
    addTaskButton.textContent = 'Create new Todo'

    addTaskButtonContainer.appendChild(addTaskButton)

    form.appendChild(taskTitleContainer)
    form.appendChild(dueDateContainer)
    form.appendChild(notesContainer)
    form.appendChild(addTaskButtonContainer)

    modalNewTask.appendChild(closeBtn)
    modalNewTask.appendChild(form)

    return modalNewTask
  }

  const createModalTaskInfoOnStart = () => {
    const modalTaskInfo = document.createElement('div')
    modalTaskInfo.setAttribute('class', 'modalTemplate modalTaskInfo')
    modalTaskInfo.setAttribute('id', 'modalTaskInfoOnStart')

    const form = document.createElement('form')
    form.setAttribute('id', 'infoContainer')
    form.setAttribute('class', 'taskInfoFormOnStart')

    const closeBtn = document.createElement('span')
    closeBtn.setAttribute('class', 'close')
    closeBtn.innerHTML = '&times;'

    const infoTitle = document.createElement('textarea')
    infoTitle.setAttribute('class', 'modalInput newTaskInput infoTitleOnStart')
    infoTitle.setAttribute('id', 'infoTitle')
    infoTitle.setAttribute('required', '')

    const labelDate = document.createElement('label')
    labelDate.setAttribute('class', 'templateLabelNewTask')
    labelDate.textContent = 'Due Date'

    const infoDate = document.createElement('input')
    infoDate.setAttribute('class', 'modalInput infoDateOnStart')
    infoDate.setAttribute('type', 'date')

    const labelNotes = document.createElement('label')
    labelNotes.setAttribute('class', 'templateLabelNewTask')
    labelNotes.textContent = 'Notes'

    const infoNotes = document.createElement('textarea')
    infoNotes.setAttribute('class', 'modalInput notesInfoOnStart')
    infoNotes.setAttribute('id', 'notesInfo')
    infoNotes.setAttribute('maxlength', '150')
    infoNotes.setAttribute('rows', '3')
    infoNotes.setAttribute('placeholder', 'Insert you notes here...')

    const saveEditButtonContainer = document.createElement('div')
    saveEditButtonContainer.setAttribute('id', 'saveEditButtonContainer')

    const saveEditButton = document.createElement('button')
    saveEditButton.setAttribute('class', 'button addTaskButton saveEditButton')
    saveEditButton.setAttribute('id', 'saveEditButtonOnStart')
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

  const createModalTaskInfoCreated = () => {
    const modalTaskInfo = document.createElement('div')
    modalTaskInfo.setAttribute('class', 'modalTemplate modalTaskInfo')
    modalTaskInfo.setAttribute('id', 'modalTaskInfoCreated')

    const form = document.createElement('form')
    form.setAttribute('id', 'infoContainer')
    form.setAttribute('class', 'taskInfoFormCreated')

    const closeBtn = document.createElement('span')
    closeBtn.setAttribute('class', 'close')
    closeBtn.innerHTML = '&times;'

    const infoTitle = document.createElement('textarea')
    infoTitle.setAttribute('class', 'modalInput newTaskInput infoTitleCreated')
    infoTitle.setAttribute('id', 'infoTitle')
    infoTitle.setAttribute('required', '')

    const labelDate = document.createElement('label')
    labelDate.setAttribute('class', 'templateLabelNewTask')
    labelDate.textContent = 'Due Date'

    const infoDate = document.createElement('input')
    infoDate.setAttribute('class', 'modalInput infoDateCreated')
    infoDate.setAttribute('type', 'date')

    const labelNotes = document.createElement('label')
    labelNotes.setAttribute('class', 'templateLabelNewTask')
    labelNotes.textContent = 'Notes'

    const infoNotes = document.createElement('textarea')
    infoNotes.setAttribute('class', 'modalInput notesInfoCreated')
    infoNotes.setAttribute('id', 'notesInfo')
    infoNotes.setAttribute('maxlength', '150')
    infoNotes.setAttribute('rows', '3')
    infoNotes.setAttribute('placeholder', 'Insert you notes here...')

    const saveEditButtonContainer = document.createElement('div')
    saveEditButtonContainer.setAttribute('id', 'saveEditButtonContainer')

    const saveEditButton = document.createElement('button')
    saveEditButton.setAttribute('class', 'button addTaskButton saveEditButton')
    saveEditButton.setAttribute('id', 'saveEditButtonCreated')
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

  const createModalDeleteProjectOnStart = () => {
    const deleteProject = document.createElement('div')
    deleteProject.setAttribute('class', 'modalTemplate modalDelete')
    deleteProject.setAttribute('id', 'deleteProject')

    const closeBtn = document.createElement('span')
    closeBtn.setAttribute('class', 'close')
    closeBtn.innerHTML = '&times;'

    const para = document.createElement('p')
    para.textContent = 'Are you sure you want to delete this Project?'

    const buttonsContainer = document.createElement('div')
    buttonsContainer.setAttribute('id', 'deleteAndCancelContainer')

    const deleteButton = document.createElement('button')
    deleteButton.setAttribute('class', 'button cancelAndDelete')
    deleteButton.setAttribute('id', 'finalDeleteProjectButtonOnStart')
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

  const createModalDeleteProjectCreated = () => {
    const deleteTask = document.createElement('div')
    deleteTask.setAttribute('class', 'modalTemplate modalDelete')
    deleteTask.setAttribute('id', 'deleteTask')

    const closeBtn = document.createElement('span')
    closeBtn.setAttribute('class', 'close')
    closeBtn.innerHTML = '&times;'

    const para = document.createElement('p')
    para.textContent = 'Are you sure you want to delete this Project?'

    const buttonsContainer = document.createElement('div')
    buttonsContainer.setAttribute('id', 'deleteAndCancelContainer')

    const deleteButton = document.createElement('button')
    deleteButton.setAttribute('class', 'button cancelAndDelete')
    deleteButton.setAttribute('id', 'finalDeleteProjectButtonCreated')
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

  const _createNoProjectsAlertModal = () => {
    const alertDiv = document.createElement('div')
    alertDiv.setAttribute('class', 'modalTemplate alertModal')

    const span = document.createElement('span')
    span.setAttribute('class', 'alertText')
    span.textContent = 'You need to create a Project First!'

    alertDiv.appendChild(span)

    return alertDiv
  }

  const createModal = () => {
    const modal = document.createElement('div')
    modal.setAttribute('class', 'modal')

    const newProject = _createModalNewProject()
    const newTask = _createModalNewTask()
    const alertMessage = _createNoProjectsAlertModal()

    modal.appendChild(newProject)
    modal.appendChild(newTask)
    modal.appendChild(alertMessage)

    return modal
  }

  return {
    createModal,
    createModalDeleteProjectOnStart,
    createModalDeleteProjectCreated,
    createModalTaskInfoOnStart,
    createModalTaskInfoCreated,
  }
})()

const navDomHandler = (function () {
  const createProjectListItem = (name, id) => {
    const listItem = document.createElement('li')
    listItem.setAttribute('class', 'projectsListItem')
    listItem.setAttribute('data-deleteproject', id)

    const para = document.createElement('span')
    para.setAttribute('class', 'projectNamePara')
    para.textContent = name

    const deleteIcon = document.createElement('i')
    deleteIcon.setAttribute(
      'class',
      'fas fa-task fa-project-delete fa-trash-alt'
    )

    listItem.appendChild(para)
    listItem.appendChild(deleteIcon)

    const projectsList = document.querySelector('#projectsList')
    projectsList.appendChild(listItem)

    return listItem
  }
  const removeProjectListItem = id => {
    const projectDeleted = document.querySelector(
      `[data-deleteproject = '${id}']`
    )

    projectDeleted.remove()
  }
  const addClickedStyle = id => {
    const projectClicked = document.querySelector(
      `[data-deleteproject='${id}']`
    )
    projectClicked.setAttribute('class', 'projectsListItem projectsClicked')
  }

  return {
    createProjectListItem,
    removeProjectListItem,
    addClickedStyle,
  }
})()

const mainDomHandler = (function () {
  const setUserNameOnPage = user => {
    const userName = document.querySelector('#userName')
    userName.textContent = user
  }

  const setProjectTitleOnPage = title => {
    const projectTitle = document.querySelector('#projectTitle')
    projectTitle.textContent = title
  }

  const removeProjectTitleOnPage = () => {
    const projectTitle = document.querySelector('#projectTitle')
    projectTitle.textContent = ''
  }

  const createTodosListItem = (title, id) => {
    const todosList = document.querySelector('.todosList')

    const todosListItem = document.createElement('li')
    todosListItem.setAttribute('class', 'todosListItem')
    todosListItem.setAttribute('data-deleteTodo', id)

    const label = document.createElement('label')
    label.setAttribute('class', 'container')

    const checkbox = document.createElement('input')
    checkbox.setAttribute('type', 'checkbox')
    checkbox.setAttribute('class', 'taskCheckbox')

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
    const infoIcon = document.createElement('i')
    infoIcon.setAttribute('class', 'editTodo fas fa-task fa-info-circle')

    const deleteButton = document.createElement('button')
    deleteButton.setAttribute('class', 'button taskButton')
    const deleteIcon = document.createElement('i')
    deleteIcon.setAttribute('class', 'deleteTodo fas fa-task fa-trash-alt')

    infoButton.appendChild(infoIcon)
    buttonsContainer.appendChild(infoButton)

    deleteButton.appendChild(deleteIcon)
    buttonsContainer.appendChild(deleteButton)

    todosListItem.appendChild(buttonsContainer)

    todosList.appendChild(todosListItem)

    return todosListItem
  }

  const removeAllTodosListItems = () => {
    const todosList = document.querySelectorAll('.todosListItem')

    todosList.forEach(todo => todo.remove())
  }

  const addDoneStyling = todoListItem => {
    const checkbox = todoListItem.querySelector('.taskCheckbox')
    const title = todoListItem.querySelector('.todoTitle')

    checkbox.checked = true
    title.setAttribute('class', 'todoTitle done')
  }

  const createEmptyTodosText = () => {
    const textContainer = document.createElement('div')
    textContainer.setAttribute('class', 'textContainer emptyTodos')

    const text = document.createElement('p')
    text.textContent = 'It seems that you have no Todos!'

    textContainer.appendChild(text)

    const projectTodosContainer = document.querySelector(
      '.projectTodosContainer'
    )

    projectTodosContainer.appendChild(textContainer)
  }

  const unrenderEmptyTodosText = () => {
    const textContainer = document.querySelector('.emptyTodos')
    textContainer.style.display = 'none'
  }

  const renderEmptyTodosText = () => {
    const textContainer = document.querySelector('.emptyTodos')
    textContainer.style.display = 'flex'
  }

  const createNoProjectsText = () => {
    const noProjectsTextContainer = document.createElement('div')
    noProjectsTextContainer.setAttribute('class', 'textContainer noProjects')

    const text = document.createElement('p')
    text.textContent = 'It seems that you have no Projects!'

    noProjectsTextContainer.appendChild(text)

    const projectTodosContainer = document.querySelector(
      '.projectTodosContainer'
    )

    projectTodosContainer.appendChild(noProjectsTextContainer)
  }

  const unrenderNoProjectsText = () => {
    const textContainer = document.querySelector('.noProjects')
    textContainer.style.display = 'none'
  }

  const renderNoProjectsText = () => {
    const textContainer = document.querySelector('.noProjects')
    textContainer.style.display = 'flex'
  }

  return {
    setUserNameOnPage,
    setProjectTitleOnPage,
    createTodosListItem,
    removeProjectTitleOnPage,
    removeAllTodosListItems,
    createEmptyTodosText,
    unrenderEmptyTodosText,
    renderEmptyTodosText,
    createNoProjectsText,
    unrenderNoProjectsText,
    renderNoProjectsText,
    addDoneStyling,
  }
})()

const modalDomHandler = (function () {
  const createModals = () => {
    modalsCreator.createModal()
  }
  const _displayModal = () => {
    const modal = document.querySelector('.modal')
    modal.style.display = 'flex'
  }
  const _removeModal = () => {
    const modal = document.querySelector('.modal')
    modal.style.display = 'none'
  }
  const displayNewProjectModal = () => {
    const newProjectModal = document.querySelector('.modalNewProject')
    _displayModal()
    newProjectModal.style.display = 'flex'
  }
  const removeNewProjectModal = () => {
    const newProjectModal = document.querySelector('.modalNewProject')
    const name = newProjectModal.querySelector('input')

    _removeModal()

    name.value = ''
    newProjectModal.style.display = 'none'
  }
  const displayNewTaskModal = () => {
    const newTaskModal = document.querySelector('.modalNewTask')
    _displayModal()
    newTaskModal.style.display = 'flex'
  }
  const removeNewTaskModal = () => {
    const newTaskModal = document.querySelector('.modalNewTask')
    const title = newTaskModal.querySelector('#taskTitleContainer input')
    const dueDate = newTaskModal.querySelector('#dueDateContainer input')
    const notes = newTaskModal.querySelector('#notesContainer textarea')

    _removeModal()

    title.value = ''
    dueDate.value = ''
    notes.value = ''
    newTaskModal.style.display = 'none'
  }
  const displayDeleteProjectModalOnStart = () => {
    const modal = document.querySelector('.modal')
    const deleteProjectModal = modalsCreator.createModalDeleteProjectOnStart()

    _displayModal()

    modal.appendChild(deleteProjectModal)
    deleteProjectModal.style.display = 'flex'
  }
  const removeDeleteProjectModalOnStart = () => {
    const deleteProjectModal = document.querySelector('#deleteProject')
    _removeModal()
    deleteProjectModal.remove()
  }
  const displayDeleteProjectModalCreated = () => {
    const modal = document.querySelector('.modal')
    const deleteTaskModal = modalsCreator.createModalDeleteProjectCreated()

    _displayModal()

    modal.appendChild(deleteTaskModal)
    deleteTaskModal.style.display = 'flex'
  }
  const removeDeleteProjectModalCreated = () => {
    const deleteTaskModal = document.querySelector('#deleteTask')
    _removeModal()
    deleteTaskModal.remove()
  }
  const displayTaskInfoModalOnStart = () => {
    const modal = document.querySelector('.modal')
    const taskInfoModal = modalsCreator.createModalTaskInfoOnStart()

    _displayModal()

    modal.appendChild(taskInfoModal)
    taskInfoModal.style.display = 'flex'
  }
  const removeTaskInfoModalOnStart = () => {
    const taskInfoModal = document.querySelector('#modalTaskInfoOnStart')
    _removeModal()
    taskInfoModal.remove()
  }
  const displayTaskInfoModalCreated = () => {
    const modal = document.querySelector('.modal')
    const taskInfoModal = modalsCreator.createModalTaskInfoCreated()

    _displayModal()

    modal.appendChild(taskInfoModal)
    taskInfoModal.style.display = 'flex'
  }
  const removeTaskInfoModalCreated = () => {
    const taskInfoModal = document.querySelector('#modalTaskInfoCreated')
    _removeModal()
    taskInfoModal.remove()
  }
  const displayNoProjectsAlertModal = () => {
    const alertModal = document.querySelector('.alertModal')
    _displayModal()
    alertModal.style.display = 'flex'
  }
  const removeNoProjectsAlertModal = () => {
    const alertModal = document.querySelector('.alertModal')
    _removeModal()
    alertModal.style.display = 'none'
  }

  return {
    createModals,
    displayNewProjectModal,
    displayNewTaskModal,
    displayDeleteProjectModalOnStart,
    displayDeleteProjectModalCreated,
    displayTaskInfoModalOnStart,
    displayTaskInfoModalCreated,
    displayNoProjectsAlertModal,
    removeNewProjectModal,
    removeNewTaskModal,
    removeDeleteProjectModalOnStart,
    removeDeleteProjectModalCreated,
    removeTaskInfoModalOnStart,
    removeTaskInfoModalCreated,
    removeNoProjectsAlertModal,
  }
})()

const appPageRenderer = (function () {
  const initialRender = () => {
    const body = document.querySelector('body')

    const appPage = document.createElement('div')
    appPage.setAttribute('id', 'appPage')

    const nav = navCreator.createNav()
    const main = mainCreator.createMain()
    const modal = modalsCreator.createModal()

    appPage.appendChild(nav)
    appPage.appendChild(main)
    appPage.appendChild(modal)

    body.appendChild(appPage)
    mainDomHandler.createEmptyTodosText()
    mainDomHandler.createNoProjectsText()
  }

  return { initialRender }
})()

export { navDomHandler, mainDomHandler, modalDomHandler, appPageRenderer }
