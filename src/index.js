/* eslint-disable max-len */
/* eslint-disable no-param-reassign */
/* eslint-disable eqeqeq */
/* eslint-disable no-plusplus */
/* eslint-disable no-underscore-dangle */
/* eslint-disable func-names */

import loginPageRenderer from './Login-page-Module';
import {
  navDomHandler,
  mainDomHandler,
  modalDomHandler,
  appPageRenderer,
} from './Main-page-Module';

const prevent = (function () {
  const Refresh = (event) => {
    event.preventDefault();
  };

  return { Refresh };
}());

const localStorageUserObj = JSON.parse(localStorage.getItem('user'));

const userObj = localStorage.getItem('user') !== null ? localStorageUserObj : {};

const variablesForControl = (function () {
  const pageInitiated = false;

  const isNotNew = true;

  const setCurrentlyDisplayedProject = () => {
    const project = document.querySelector('.projectsClicked');
    return project;
  };
  const resetDeleteTaskId = () => {
    const allTasks = document.querySelectorAll('.todosListItem');
    let counter = 0;

    allTasks.forEach((task) => {
      task.setAttribute('data-deletetodo', counter);
      ++counter;
    });
  };
  const resetDeleteProjectId = () => {
    const allProjects = document.querySelectorAll('.projectsListItem');
    let counter = 0;

    allProjects.forEach((project) => {
      project.setAttribute('data-deleteproject', counter);
      ++counter;
    });
  };

  return {
    pageInitiated,
    isNotNew,
    setCurrentlyDisplayedProject,
    resetDeleteTaskId,
    resetDeleteProjectId,
  };
}());

const localStorageHandler = (function () {
  const update = () => {
    localStorage.setItem('user', JSON.stringify(userObj));
  };

  return { update };
}());

const TaskFactory = (title, dueDate, notes) => {
  const task = {
    title,
    dueDate,
    notes,
    isDone: false,
  };
  return { ...task };
};

const ProjectFactory = (name) => {
  const project = {
    name,
    isDisplayed: false,
    todos: [],
  };
  return { ...project };
};

const init = (function () {
  const renderDefaultAppPage = () => {
    const nameInput = document.querySelector('#inputUserFirstName');
    const userName = nameInput.value;

    loginPageRenderer.deleteLoginPage();
    appPageRenderer.initialRender();

    navDomHandler.createProjectListItem('Default', '0');
    navDomHandler.addClickedStyle('0');
    mainDomHandler.setProjectTitleOnPage('Default');
    mainDomHandler.setUserNameOnPage(userName);
    mainDomHandler.createTodosListItem('My first Todo ', '0');

    userObj.name = userName;
    userObj.projects = [
      {
        name: 'Default',
        isDisplayed: true,
        todos: [{
          title: 'My first Todo',
          dueDate: undefined,
          notes: 'Yay! I must start creating todos.',
          isDone: false,
        }],
      },
    ];

    localStorageHandler.update();

    variablesForControl.pageInitiated = true;
  };
  const renderCustomAppPage = () => {
    const userName = userObj.name;

    appPageRenderer.initialRender();

    mainDomHandler.setUserNameOnPage(userName);

    if (userObj.projects[0] === undefined) {
      mainDomHandler.renderNoProjectsText();
      variablesForControl.pageInitiated = true;
    } else {
      userObj.projects.forEach((project) => {
        const id = userObj.projects.indexOf(project);
        const { name } = project;

        navDomHandler.createProjectListItem(name, id);
      });
      navDomHandler.addClickedStyle('0');
      userObj.projects[0].isDisplayed = true;
      mainDomHandler.setProjectTitleOnPage(userObj.projects[0].name);

      userObj.projects[0].todos.forEach((todo) => {
        const { title } = todo;
        const id = userObj.projects[0].todos.indexOf(todo);

        const todoListItem = mainDomHandler.createTodosListItem(title, id);

        if (todo.isDone === true) mainDomHandler.addDoneStyling(todoListItem);
      });

      variablesForControl.pageInitiated = true;

      if (userObj.projects[0].todos[0] === undefined) mainDomHandler.renderEmptyTodosText();
    }
  };

  return { renderDefaultAppPage, renderCustomAppPage };
}());

const changesHandler = (function () {
  const displayNewProject = (id) => {
    mainDomHandler.unrenderNoProjectsText();
    mainDomHandler.unrenderEmptyTodosText();
    mainDomHandler.removeAllTodosListItems();
    mainDomHandler.removeProjectTitleOnPage();
    const project = userObj.projects[id];

    mainDomHandler.setProjectTitleOnPage(project.name);

    if (project.todos[0] === undefined) mainDomHandler.renderEmptyTodosText();

    else {
      project.todos.forEach((todo) => {
        const todoListItem = mainDomHandler
          .createTodosListItem(todo.title, project.todos.indexOf(todo));
        if (todo.isDone === true) mainDomHandler.addDoneStyling(todoListItem);
      });
    }
  };
  const displayNextProject = (deletedId) => {
    if (deletedId != 0) {
      const nextProjectId = deletedId - 1;
      navDomHandler.addClickedStyle(nextProjectId);
      userObj.projects[nextProjectId].isDisplayed = true;
      displayNewProject(nextProjectId);
    }

    if (deletedId == 0 && userObj.projects[0] !== undefined) {
      navDomHandler.addClickedStyle(deletedId);
      userObj.projects[deletedId].isDisplayed = true;
      displayNewProject(deletedId);
    }

    if (deletedId == 0 && userObj.projects[0] === undefined) {
      mainDomHandler.renderNoProjectsText();
      mainDomHandler.unrenderEmptyTodosText();
      mainDomHandler.setProjectTitleOnPage('');
    }
  };
  const changeTaskTitle = (id, newTitle) => {
    const task = document.querySelector(`[data-deletetodo='${id}']`);
    const taskTitle = task.querySelector('.todoTitle');

    taskTitle.textContent = newTitle;
  };

  return { displayNewProject, displayNextProject, changeTaskTitle };
}());

const eventsHandler = (function () {
  const addListenerTaskDoneOnStart = () => {
    const checkboxes = document.querySelectorAll('.taskCheckbox');
    checkboxes.forEach((checkbox) => checkbox.addEventListener('click', () => {
      const currentProject = variablesForControl.setCurrentlyDisplayedProject();
      const currentProjectId = currentProject.getAttribute('data-deleteproject');
      const taskListItem = checkbox.parentElement.parentElement;
      const TaskListItemId = taskListItem.getAttribute('data-deletetodo');
      const taskTitle = taskListItem.querySelector('.todoTitle');

      if (checkbox.checked === true) {
        taskTitle.setAttribute('class', 'todoTitle done');
        userObj.projects[currentProjectId].todos[TaskListItemId].isDone = true;
      } else if (checkbox.checked === false) {
        taskTitle.setAttribute('class', 'todoTitle');
        userObj.projects[currentProjectId].todos[TaskListItemId].isDone = false;
      }
      localStorageHandler.update();
    }));
  };
  const addListenerTaskDoneCreated = (taskId) => {
    const taskListItem = document.querySelector(`[data-deletetodo='${taskId}']`);
    const checkbox = taskListItem.querySelector('.taskCheckbox');

    checkbox.addEventListener('click', (e) => {
      const currentProject = variablesForControl.setCurrentlyDisplayedProject();
      const currentProjectId = currentProject.getAttribute('data-deleteproject');
      const currentTask = e.target.parentElement.parentElement;
      const currentTaskId = currentTask.getAttribute('data-deletetodo');
      const currentTaskTitle = currentTask.querySelector('.todoTitle');

      if (checkbox.checked === true) {
        currentTaskTitle.setAttribute('class', 'todoTitle done');
        userObj.projects[currentProjectId].todos[currentTaskId].isDone = true;
      } else if (checkbox.checked === false) {
        currentTaskTitle.setAttribute('class', 'todoTitle');
        userObj.projects[currentProjectId].todos[currentTaskId].isDone = false;
      }
      localStorageHandler.update();
    });
  };
  const addListenerCloseNewTask = () => {
    const closeBtn = document.querySelector('.modalNewTask .close');
    closeBtn.addEventListener('click', modalDomHandler.removeNewTaskModal);
  };
  const addListenerCloseNewProject = () => {
    const closeBtn = document.querySelector('.modalNewProject .close');
    closeBtn.addEventListener('click', modalDomHandler.removeNewProjectModal);
  };
  const addListenerCloseDeleteCreatedProject = () => {
    const closeBtn = document.querySelector('#deleteTask .close');
    const cancelBtn = document.querySelector('#cancelDeleteTaskButton');
    closeBtn.addEventListener('click', modalDomHandler.removeDeleteProjectModalCreated);
    cancelBtn.addEventListener('click', modalDomHandler.removeDeleteProjectModalCreated);
  };
  const addListenerCloseDeleteOnStartProject = () => {
    const closeBtn = document.querySelector('#deleteProject .close');
    const cancelBtn = document.querySelector('#cancelDeleteProjectButton');
    closeBtn.addEventListener('click', modalDomHandler.removeDeleteProjectModalOnStart);
    cancelBtn.addEventListener('click', modalDomHandler.removeDeleteProjectModalOnStart);
  };
  const addListenerCloseTaskInfoCreated = () => {
    const closeBtn = document.querySelector('#modalTaskInfoCreated .close');
    closeBtn.addEventListener('click', modalDomHandler.removeTaskInfoModalCreated);
  };
  const addListenerCloseTaskInfoOnStart = () => {
    const closeBtn = document.querySelector('#modalTaskInfoOnStart .close');
    closeBtn.addEventListener('click', modalDomHandler.removeTaskInfoModalOnStart);
  };
  const addListenerToDeleteCreatedTask = (taskId) => {
    const taskElem = document.querySelector(`[data-deletetodo = '${taskId}']`);
    const deleteButton = taskElem.querySelector('.deleteTodo');
    deleteButton.addEventListener('click', (e) => {
      const project = variablesForControl.setCurrentlyDisplayedProject();
      const projectId = project.getAttribute('data-deleteproject');
      const currentTask = e.target.parentElement.parentElement.parentElement;
      const currentTaskId = currentTask.getAttribute('data-deletetodo');

      userObj.projects[projectId].todos.splice(currentTaskId, 1);

      currentTask.remove();

      localStorageHandler.update();

      variablesForControl.resetDeleteTaskId();

      if (userObj.projects[projectId].todos[0] === undefined) {
        mainDomHandler.renderEmptyTodosText();
      }
    });
  };
  const addListenerTaskInfoOnStart = () => {
    const editBtns = document.querySelectorAll('.editTodo');
    editBtns.forEach((editBtn) => editBtn.addEventListener('click', (e) => {
      const clickedProject = variablesForControl.setCurrentlyDisplayedProject();
      const projectId = clickedProject.getAttribute('data-deleteproject');
      const currentTaskId = e.target.parentElement.parentElement.parentElement.getAttribute('data-deletetodo');
      modalDomHandler.displayTaskInfoModalOnStart();
      addListenerCloseTaskInfoOnStart();

      const titleInput = document.querySelector('.infoTitleOnStart');
      const dateInput = document.querySelector('.infoDateOnStart');
      const notesInput = document.querySelector('.notesInfoOnStart');

      titleInput.value = userObj.projects[projectId].todos[currentTaskId].title;
      dateInput.value = userObj.projects[projectId].todos[currentTaskId].dueDate;
      notesInput.value = userObj.projects[projectId].todos[currentTaskId].notes;

      const form = document.querySelector('.taskInfoFormOnStart');
      form.addEventListener('submit', prevent.Refresh);
      form.addEventListener('submit', () => {
        userObj.projects[projectId].todos[currentTaskId].title = document.querySelector('.infoTitleOnStart').value;
        userObj.projects[projectId].todos[currentTaskId].dueDate = document.querySelector('.infoDateOnStart').value;
        userObj.projects[projectId].todos[currentTaskId].notes = document.querySelector('.notesInfoOnStart').value;

        modalDomHandler.removeTaskInfoModalOnStart();

        changesHandler.changeTaskTitle(currentTaskId, userObj.projects[projectId].todos[currentTaskId].title);

        localStorageHandler.update();
      });
    }));
  };
  const addListenerTaskInfoCreated = (taskId) => {
    const createdTask = document.querySelector(`[data-deletetodo='${taskId}']`);
    const editBtn = createdTask.querySelector('.editTodo');

    editBtn.addEventListener('click', (e) => {
      const project = variablesForControl.setCurrentlyDisplayedProject();
      const projectId = project.getAttribute('data-deleteproject');
      const currentTaskId = e.target.parentElement.parentElement.parentElement.getAttribute('data-deletetodo');
      modalDomHandler.displayTaskInfoModalCreated();
      addListenerCloseTaskInfoCreated();
      const titleInput = document.querySelector('.infoTitleCreated');
      const dateInput = document.querySelector('.infoDateCreated');
      const notesInput = document.querySelector('.notesInfoCreated');

      titleInput.value = userObj.projects[projectId].todos[currentTaskId].title;
      dateInput.value = userObj.projects[projectId].todos[currentTaskId].dueDate;
      notesInput.value = userObj.projects[projectId].todos[currentTaskId].notes;

      const form = document.querySelector('.taskInfoFormCreated');
      form.addEventListener('submit', prevent.Refresh);
      form.addEventListener('submit', () => {
        userObj.projects[projectId].todos[currentTaskId].title = document.querySelector('.infoTitleCreated').value;
        userObj.projects[projectId].todos[currentTaskId].dueDate = document.querySelector('.infoDateCreated').value;
        userObj.projects[projectId].todos[currentTaskId].notes = document.querySelector('.notesInfoCreated').value;

        modalDomHandler.removeTaskInfoModalCreated();

        changesHandler.changeTaskTitle(currentTaskId, userObj.projects[projectId].todos[currentTaskId].title);

        localStorageHandler.update();
      });
    });
  };
  const addListenerSubmitNewTask = () => {
    const form = document.querySelector('#newTaskModalForm');

    form.addEventListener('submit', prevent.Refresh);

    form.addEventListener('submit', () => {
      const title = document.querySelector('#taskTitleContainer input').value;
      const dueDate = document.querySelector('#dueDateContainer input').value;
      const notes = document.querySelector('#notesContainer textarea').value;

      const newTask = TaskFactory(title, dueDate, notes);

      const currentProject = variablesForControl.setCurrentlyDisplayedProject();
      const currentProjectId = currentProject.getAttribute('data-deleteproject');

      mainDomHandler.unrenderEmptyTodosText();

      const taskId = userObj.projects[currentProjectId].todos.push(newTask) - 1;

      mainDomHandler.createTodosListItem(title, taskId);

      addListenerToDeleteCreatedTask(taskId);
      addListenerTaskInfoCreated(taskId);
      addListenerTaskDoneCreated(taskId);

      localStorageHandler.update();

      modalDomHandler.removeNewTaskModal();
    });
  };
  const addListenerNewTask = () => {
    const newTodoButton = document.querySelector('.newTodoButton');
    newTodoButton.addEventListener('click', () => {
      if (userObj.projects[0] === undefined) {
        modalDomHandler.displayNoProjectsAlertModal();
        setTimeout(() => { modalDomHandler.removeNoProjectsAlertModal(); }, 3000);
      } else {
        modalDomHandler.displayNewTaskModal();
      }
    });
    addListenerSubmitNewTask();
    addListenerCloseNewTask();
  };
  const addListenerDeleteTaskOnStart = () => {
    const deleteTaskButtons = document.querySelectorAll('.deleteTodo');

    deleteTaskButtons.forEach((button) => {
      button.addEventListener('click', (e) => {
        if (button === e.target) {
          const currentProject = variablesForControl.setCurrentlyDisplayedProject();
          const currentProjectId = currentProject.getAttribute('data-deleteproject');
          const taskId = e.target.parentElement.parentElement.parentElement.getAttribute('data-deletetodo');
          const taskDomElement = e.target.parentElement.parentElement.parentElement;

          taskDomElement.remove();
          userObj.projects[currentProjectId].todos.splice(taskId, 1);

          localStorageHandler.update();
          variablesForControl.resetDeleteTaskId();

          if (userObj.projects[currentProjectId].todos[0] === undefined) {
            mainDomHandler.renderEmptyTodosText();
          }
        }
      });
    });
  };
  const addListenerDeleteProjectOnStart = () => {
    const projects = document.querySelectorAll('.projectsListItem');
    let deleteId;

    projects.forEach((project) => {
      const deleteButton = project.lastChild;

      deleteButton.addEventListener('click', (e) => {
        modalDomHandler.displayDeleteProjectModalOnStart();
        addListenerCloseDeleteOnStartProject();

        const projectListItem = e.target.parentElement;

        deleteId = projectListItem.getAttribute('data-deleteproject');

        const confirmDeleteButton = document.querySelector('#finalDeleteProjectButtonOnStart');

        confirmDeleteButton.addEventListener('click', () => {
          modalDomHandler.removeDeleteProjectModalOnStart();

          navDomHandler.removeProjectListItem(deleteId);

          if (userObj.projects[deleteId].isDisplayed) {
            mainDomHandler.removeProjectTitleOnPage();
            mainDomHandler.removeAllTodosListItems();
            mainDomHandler.renderEmptyTodosText();
          }

          userObj.projects.splice(deleteId, 1);

          localStorageHandler.update();
          variablesForControl.resetDeleteProjectId();
          changesHandler.displayNextProject(deleteId);
          addListenerDeleteTaskOnStart();
          addListenerTaskInfoOnStart();
          addListenerTaskDoneOnStart();

          deleteId = undefined;
        });
      });
    });
  };
  const addListenerNavigateProjectsOnStart = () => {
    const projectList = document.querySelectorAll('.projectsListItem');
    projectList.forEach((project) => {
      project.addEventListener('click', (e) => {
        const span = project.querySelector('.projectNamePara');
        if (e.target !== project && e.target !== span) return;

        const checkIfDisplayed = project.getAttribute('class');

        if (checkIfDisplayed === 'projectsListItem projectsClicked') return;

        const clickedProjectId = project.getAttribute('data-deleteproject');

        const allProjects = document.querySelectorAll('.projectsListItem');

        allProjects.forEach((projectItem) => projectItem.setAttribute('class', 'projectsListItem'));

        userObj.projects.forEach((projectArr) => {
          projectArr.isDisplayed = false;
        });

        project.setAttribute('class', 'projectsListItem projectsClicked');
        userObj.projects[clickedProjectId].isDisplayed = true;

        changesHandler.displayNewProject(clickedProjectId);
        addListenerDeleteTaskOnStart();
        addListenerTaskInfoOnStart();
        addListenerTaskDoneOnStart();
      });
    });
  };
  const addListenerToDeleteCreatedProject = (elem) => {
    const deleteButton = elem.lastChild;
    let id;

    deleteButton.addEventListener('click', (e) => {
      modalDomHandler.displayDeleteProjectModalCreated();
      addListenerCloseDeleteCreatedProject();

      id = e.target.parentElement.getAttribute('data-deleteproject');

      const confirmDeleteButton = document.querySelector('#finalDeleteProjectButtonCreated');

      confirmDeleteButton.addEventListener('click', () => {
        modalDomHandler.removeDeleteProjectModalCreated();

        navDomHandler.removeProjectListItem(id);

        if (userObj.projects[id].isDisplayed) {
          mainDomHandler.removeProjectTitleOnPage();
          mainDomHandler.removeAllTodosListItems();
          mainDomHandler.renderEmptyTodosText();
        }

        userObj.projects.splice(id, 1);

        localStorageHandler.update();
        variablesForControl.resetDeleteProjectId();
        changesHandler.displayNextProject(id);
        addListenerDeleteTaskOnStart();
        addListenerTaskInfoOnStart();
        addListenerTaskDoneOnStart();
      });
    });
  };
  const addListenerToNavigateCreatedProject = (elem) => {
    elem.addEventListener('click', (e) => {
      const projectId = elem.getAttribute('data-deleteproject');
      const span = elem.querySelector('.projectNamePara');
      if (e.target !== elem && e.target !== span) return;

      const projectClass = elem.getAttribute('class');

      if (projectClass === 'projectsListItem projectsClicked') return;

      const allProjects = document.querySelectorAll('.projectsListItem');
      allProjects.forEach((projectItem) => projectItem.setAttribute('class', 'projectsListItem'));
      userObj.projects.forEach((projectArr) => {
        projectArr.isDisplayed = false;
      });

      navDomHandler.addClickedStyle(projectId);
      userObj.projects[projectId].isDisplayed = true;

      changesHandler.displayNewProject(projectId);
      addListenerDeleteTaskOnStart();
      addListenerTaskInfoOnStart();
      addListenerTaskDoneOnStart();
    });
  };
  const addListenerSubmitNewProject = () => {
    const form = document.querySelector('.modalNewProject');

    form.addEventListener('submit', prevent.Refresh);
    form.addEventListener('submit', () => {
      const projectName = form.querySelector('input').value;

      const newProject = ProjectFactory(projectName);

      const projectId = userObj.projects.push(newProject) - 1;

      const elem = navDomHandler.createProjectListItem(projectName, projectId);

      if (projectId == 0) {
        userObj.projects[projectId].isDisplayed = true;
      }

      localStorageHandler.update();

      modalDomHandler.removeNewProjectModal();

      addListenerToDeleteCreatedProject(elem);
      addListenerToNavigateCreatedProject(elem);
    });
  };
  const addListenerNewProject = () => {
    const newProjectButton = document.querySelector('#newProjectButton');
    newProjectButton.addEventListener('click', modalDomHandler.displayNewProjectModal);
    addListenerSubmitNewProject();
    addListenerCloseNewProject();
  };
  const addListenerOpenNav = () => {
    const openNavButton = document.querySelector('#openNavButton');
    openNavButton.addEventListener('click', () => {
      const nav = document.querySelector('nav');
      nav.style.width = '100%';
      nav.style.minWidth = '100%';
      nav.style.zIndex = '1';
      nav.style.position = 'absolute';
    });
  };
  const addListenerCloseNav = () => {
    const closeNavButton = document.querySelector('#closeNavButton');
    closeNavButton.addEventListener('click', () => {
      const nav = document.querySelector('nav');
      nav.style.width = '0';
      nav.style.minWidth = '0';
      nav.style.zIndex = '';
      nav.style.position = '';
    });
  };
  const addListenerLogin = () => {
    const _loginForm = document.querySelector('#loginForm');
    _loginForm.addEventListener('submit', prevent.Refresh);
    _loginForm.addEventListener('submit', () => {
      init.renderDefaultAppPage();
      addListenerNewTask();
      addListenerOpenNav();
      addListenerCloseNav();
      addListenerNewProject();
      addListenerDeleteProjectOnStart();
      addListenerDeleteTaskOnStart();
      addListenerTaskInfoOnStart();
      addListenerNavigateProjectsOnStart();
    });
  };

  return {
    addListenerLogin,
    addListenerNewTask,
    addListenerNewProject,
    addListenerDeleteProjectOnStart,
    addListenerSubmitNewTask,
    addListenerDeleteTaskOnStart,
    addListenerNavigateProjectsOnStart,
    addListenerTaskInfoOnStart,
    addListenerTaskDoneOnStart,
    addListenerOpenNav,
    addListenerCloseNav,
  };
}());

// eslint-disable-next-line no-unused-vars
const loginHandler = (function () {
  const _loginLogic = () => {
    if (userObj.name === undefined) {
      loginPageRenderer.initialRender();
      eventsHandler.addListenerLogin();
    } else {
      init.renderCustomAppPage();
    }
  };

  _loginLogic();

  if (variablesForControl.pageInitiated) {
    eventsHandler.addListenerNewTask();
    eventsHandler.addListenerNewProject();
    eventsHandler.addListenerDeleteProjectOnStart();
    eventsHandler.addListenerDeleteTaskOnStart();
    eventsHandler.addListenerTaskInfoOnStart();
    eventsHandler.addListenerNavigateProjectsOnStart();
    eventsHandler.addListenerTaskDoneOnStart();
    eventsHandler.addListenerOpenNav();
    eventsHandler.addListenerCloseNav();
  }
}());
