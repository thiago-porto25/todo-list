(()=>{"use strict";const e=()=>{const e=document.createElement("div");e.setAttribute("id","bigLogoContainer"),e.setAttribute("class","logo");const t=document.createElement("span");return t.textContent="Todo List",e.appendChild(t),e},t=()=>{const e=document.createElement("form");e.setAttribute("id","loginForm");const t=document.createElement("div");t.setAttribute("class","headerLogin");const n=document.createElement("header");n.textContent="Log in to Todo List";const o=document.createElement("div");o.setAttribute("class","loginContainer");const r=document.createElement("input");r.setAttribute("type","text"),r.setAttribute("required",""),r.setAttribute("maxlength","10"),r.setAttribute("class","inputText"),r.setAttribute("id","inputUserFirstName");const a=document.createElement("span");a.setAttribute("class","floating-label"),a.setAttribute("maxlength","30"),a.textContent="First Name";const s=document.createElement("button");return s.setAttribute("class","button loginButton"),s.textContent="Login",o.appendChild(r),o.appendChild(a),t.appendChild(n),e.appendChild(t),e.appendChild(o),e.appendChild(s),e},n=()=>{const n=document.createElement("div");n.setAttribute("id","loginPage");const o=document.querySelector("body"),r=e(),a=t();n.appendChild(r),n.appendChild(a),o.appendChild(n)},o=()=>{document.querySelector("#loginPage").remove()},r=()=>{const e=document.createElement("nav"),t=(()=>{const e=document.createElement("div");e.setAttribute("class","logo"),e.setAttribute("id","logoContainer");const t=document.createElement("span");return t.textContent="Todo List",e.appendChild(t),e})(),n=(()=>{const e=document.createElement("div");e.setAttribute("id","newProjectButtonContainer");const t=document.createElement("button");t.setAttribute("class","button"),t.setAttribute("id","newProjectButton");const n=document.createElement("i");return n.setAttribute("class","fas fa-plus-circle"),t.textContent=" New Project",t.prepend(n),e.appendChild(t),e})(),o=(()=>{const e=document.createElement("div");e.setAttribute("id","projectsListContainer");const t=document.createElement("h1");t.textContent="Projects";const n=document.createElement("ul");return n.setAttribute("id","projectsList"),e.appendChild(t),e.appendChild(n),e})(),r=(()=>{const e=document.createElement("div");e.setAttribute("id","foot");const t=document.createElement("p");t.textContent="Created by ";const n=document.createElement("a");n.setAttribute("href","https://github.com/thiago-porto25");const o=document.createElement("i");return o.setAttribute("class","fab fa-github"),n.textContent=" Thiago Porto",n.prepend(o),t.appendChild(n),e.appendChild(t),e})();return e.appendChild(t),e.appendChild(n),e.appendChild(o),e.appendChild(r),e},a=()=>{const e=document.createElement("main"),t=(()=>{const e=document.createElement("div");e.setAttribute("class","projectContainer userNameContainer");const t=document.createElement("i");t.setAttribute("class","fas fa-task fa-user-circle");const n=document.createElement("span");return n.setAttribute("id","userName"),e.appendChild(t),e.appendChild(n),e})(),n=(()=>{const e=document.createElement("div");e.setAttribute("id","newTodoButtonContainer");const t=document.createElement("button");t.setAttribute("class","button newTodoButton");const n=document.createElement("span");return n.setAttribute("class","plusSpan"),n.textContent="+",t.appendChild(n),e.appendChild(t),e})(),o=(()=>{const e=document.createElement("div");e.setAttribute("class","projectTitleContainer projectContainer");const t=document.createElement("h2");return t.setAttribute("id","projectTitle"),e.appendChild(t),e})(),r=(()=>{const e=document.createElement("div");e.setAttribute("class","projectTodosContainer projectContainer");const t=document.createElement("ul");return t.setAttribute("class","todosList"),e.appendChild(t),e})();return e.appendChild(t),e.appendChild(n),e.appendChild(o),e.appendChild(r),e},s=()=>{const e=document.createElement("div");e.setAttribute("class","modal");const t=(()=>{const e=document.createElement("form");e.setAttribute("class","modalTemplate modalNewProject");const t=document.createElement("span");t.setAttribute("class","close"),t.innerHTML="&times;";const n=document.createElement("header");n.textContent="New Project";const o=document.createElement("input");o.setAttribute("class","modalInput"),o.setAttribute("placeholder","Project's Name"),o.setAttribute("required",""),o.setAttribute("maxlength","20");const r=document.createElement("button");return r.setAttribute("class","button submitProjectButton"),r.textContent="Create",e.appendChild(t),e.appendChild(n),e.appendChild(o),e.appendChild(r),e})(),n=(()=>{const e=document.createElement("div");e.setAttribute("class","modalTemplate modalNewTask");const t=document.createElement("span");t.setAttribute("class","close"),t.innerHTML="&times;";const n=document.createElement("form");n.setAttribute("id","newTaskModalForm");const o=document.createElement("div");o.setAttribute("id","taskTitleContainer");const r=document.createElement("input");r.setAttribute("class","modalInput newTaskInput"),r.setAttribute("maxlength","35"),r.setAttribute("type","text"),r.setAttribute("placeholder","I want to..."),r.setAttribute("required",""),o.appendChild(r);const a=document.createElement("div");a.setAttribute("id","dueDateContainer");const s=document.createElement("label");s.setAttribute("class","templateLabelNewTask"),s.setAttribute("for","date"),s.textContent="Due date";const d=document.createElement("br"),c=document.createElement("input");c.setAttribute("class","modalInput"),c.setAttribute("type","date"),c.setAttribute("name","date"),a.appendChild(s),a.appendChild(d),a.appendChild(c);const l=document.createElement("div");l.setAttribute("id","notesContainer");const i=document.createElement("label");i.setAttribute("class","templateLabelNewTask"),i.setAttribute("for","notes"),i.textContent="Notes";const u=document.createElement("br"),p=document.createElement("textarea");p.setAttribute("class","modalInput"),p.setAttribute("maxlength","150"),p.setAttribute("name","notes"),p.setAttribute("rows","1"),p.setAttribute("placeholder","Insert you notes here..."),l.appendChild(i),l.appendChild(u),l.appendChild(p);const m=document.createElement("div");m.setAttribute("id","addTaskButtonContainer");const b=document.createElement("button");return b.setAttribute("class","button addTaskButton"),b.textContent="Create new Todo",m.appendChild(b),n.appendChild(o),n.appendChild(a),n.appendChild(l),n.appendChild(m),e.appendChild(t),e.appendChild(n),e})(),o=(()=>{const e=document.createElement("div");e.setAttribute("class","modalTemplate modalTaskInfo");const t=document.createElement("form");t.setAttribute("id","infoContainer");const n=document.createElement("span");n.setAttribute("class","close"),n.innerHTML="&times;";const o=document.createElement("textarea");o.setAttribute("class","modalInput newTaskInput"),o.setAttribute("id","infoTitle"),o.setAttribute("required","");const r=document.createElement("label");r.setAttribute("class","templateLabelNewTask"),r.textContent="Due Date";const a=document.createElement("input");a.setAttribute("class","modalInput"),a.setAttribute("type","date");const s=document.createElement("label");s.setAttribute("class","templateLabelNewTask"),s.textContent="Notes";const d=document.createElement("textarea");d.setAttribute("class","modalInput"),d.setAttribute("id","notesInfo"),d.setAttribute("maxlength","150"),d.setAttribute("rows","3"),d.setAttribute("placeholder","Insert you notes here...");const c=document.createElement("div");c.setAttribute("id","saveEditButtonContainer");const l=document.createElement("button");return l.setAttribute("class","button addTaskButton saveEditButton"),l.textContent="Save changes",c.appendChild(l),t.appendChild(n),t.appendChild(o),t.appendChild(r),t.appendChild(a),t.appendChild(s),t.appendChild(d),t.appendChild(c),e.appendChild(t),e})();return e.appendChild(t),e.appendChild(n),e.appendChild(o),e},d=()=>{const e=document.createElement("div");e.setAttribute("class","modalTemplate modalDelete"),e.setAttribute("id","deleteProject");const t=document.createElement("span");t.setAttribute("class","close"),t.innerHTML="&times;";const n=document.createElement("p");n.textContent="Are you sure you want to delete this Project?";const o=document.createElement("div");o.setAttribute("id","deleteAndCancelContainer");const r=document.createElement("button");r.setAttribute("class","button cancelAndDelete"),r.setAttribute("id","finalDeleteProjectButtonOnStart"),r.textContent="Delete";const a=document.createElement("button");return a.setAttribute("class","button cancelAndDelete"),a.setAttribute("id","cancelDeleteProjectButton"),a.textContent="Cancel",o.appendChild(r),o.appendChild(a),e.appendChild(t),e.appendChild(n),e.appendChild(o),e},c=()=>{const e=document.createElement("div");e.setAttribute("class","modalTemplate modalDelete"),e.setAttribute("id","deleteTask");const t=document.createElement("span");t.setAttribute("class","close"),t.innerHTML="&times;";const n=document.createElement("p");n.textContent="Are you sure you want to delete this Project?";const o=document.createElement("div");o.setAttribute("id","deleteAndCancelContainer");const r=document.createElement("button");r.setAttribute("class","button cancelAndDelete"),r.setAttribute("id","finalDeleteProjectButtonCreated"),r.textContent="Delete";const a=document.createElement("button");return a.setAttribute("class","button cancelAndDelete"),a.setAttribute("id","cancelDeleteTaskButton"),a.textContent="Cancel",o.appendChild(r),o.appendChild(a),e.appendChild(t),e.appendChild(n),e.appendChild(o),e},l=(e,t)=>{const n=document.createElement("li");n.setAttribute("class","projectsListItem"),n.setAttribute("data-deleteproject",t);const o=document.createElement("p");o.textContent=e;const r=document.createElement("i");return r.setAttribute("class","fas fa-task fa-project-delete fa-trash-alt"),n.appendChild(o),n.appendChild(r),document.querySelector("#projectsList").appendChild(n),n},i=e=>{document.querySelector(`[data-deleteproject = '${e}']`).remove()},u=e=>{document.querySelector(`[data-deleteproject='${e}']`).setAttribute("class","projectsListItem projectsClicked")},p=e=>{document.querySelector("#userName").textContent=e},m=e=>{document.querySelector("#projectTitle").textContent=e},b=(e,t)=>{const n=document.createElement("li");n.setAttribute("class","todosListItem"),n.setAttribute("data-deleteTodo",t);const o=document.createElement("label");o.setAttribute("class","container");const r=document.createElement("input");r.setAttribute("type","checkbox");const a=document.createElement("span");a.setAttribute("class","checkmark"),o.appendChild(r),o.appendChild(a),n.appendChild(o);const s=document.createElement("span");s.setAttribute("class","todoTitle"),s.textContent=e,n.appendChild(s);const d=document.createElement("div");d.setAttribute("class","buttonsContainer");const c=document.createElement("button");c.setAttribute("class","button taskButton");const l=document.createElement("i");l.setAttribute("class","editTodo fas fa-task fa-info-circle");const i=document.createElement("button");i.setAttribute("class","button taskButton");const u=document.createElement("i");return u.setAttribute("class","deleteTodo fas fa-task fa-trash-alt"),c.appendChild(l),d.appendChild(c),i.appendChild(u),d.appendChild(i),n.appendChild(d),document.querySelector(".todosList").appendChild(n),n},C=()=>{document.querySelector("#projectTitle").textContent=""},A=()=>{document.querySelectorAll(".todosListItem").forEach((e=>e.remove()))},h=()=>{const e=document.createElement("div");if(null==document.querySelector(".textContainer")){e.setAttribute("class","textContainer");const t=document.createElement("p");t.textContent="It seems that you have no Todos!",e.appendChild(t),document.querySelector(".projectTodosContainer").appendChild(e)}},E=()=>{document.querySelector(".textContainer").remove()},y=function(){const e=()=>{document.querySelector(".modal").style.display="flex"},t=()=>{document.querySelector(".modal").style.display="none"};return{createModals:()=>{s()},displayNewProjectModal:()=>{const t=document.querySelector(".modalNewProject");e(),t.style.display="flex"},displayNewTaskModal:()=>{const t=document.querySelector(".modalNewTask");e(),t.style.display="flex"},displayTaskInfoModal:()=>{const t=document.querySelector(".modalTaskInfo");e(),t.style.display="flex"},displayDeleteProjectModalOnStart:()=>{let t=document.querySelector(".modal");const n=d();e(),t.appendChild(n),n.style.display="flex"},displayDeleteProjectModalCreated:()=>{let t=document.querySelector(".modal");const n=c();e(),t.appendChild(n),n.style.display="flex"},removeNewProjectModal:()=>{const e=document.querySelector(".modalNewProject"),n=e.querySelector("input");t(),n.value="",e.style.display="none"},removeNewTaskModal:()=>{const e=document.querySelector(".modalNewTask"),n=e.querySelector("#taskTitleContainer input"),o=e.querySelector("#dueDateContainer input"),r=e.querySelector("#notesContainer textarea");t(),n.value="",o.value="",r.value="",e.style.display="none"},removeTaskInfoModal:()=>{const e=document.querySelector(".modalTaskInfo");t(),e.style.display="none"},removeDeleteProjectModalOnStart:()=>{const e=document.querySelector("#deleteProject");t(),e.remove()},removeDeleteProjectModalCreated:()=>{const e=document.querySelector("#deleteTask");t(),e.remove()}}}(),j=()=>{const e=document.querySelector("body"),t=document.createElement("div");t.setAttribute("id","appPage");const n=r(),o=a(),d=s();t.appendChild(n),t.appendChild(o),t.appendChild(d),e.appendChild(t)},v=e=>{e.preventDefault()},T=JSON.parse(localStorage.getItem("user"));let S=null!==localStorage.getItem("user")?T:{};const f={pageInitiated:!1,isNotNew:!0,setCurrentlyDisplayedProject:()=>document.querySelector(".projectsClicked"),resetDeleteTaskId:()=>{const e=document.querySelectorAll(".todosListItem");let t=0;e.forEach((e=>{e.setAttribute("data-deletetodo",t),++t}))},resetDeleteProjectId:()=>{const e=document.querySelectorAll(".projectsListItem");let t=0;e.forEach((e=>{e.setAttribute("data-deleteproject",t),++t}))}},L=()=>{localStorage.setItem("user",JSON.stringify(S))},g=()=>{const e=document.querySelector("#inputUserFirstName").value;o(),j(),l("Default","0"),u("0"),m("Default"),p(e),b("My first Todo ","0"),S.name=e,S.projects=[{name:"Default",isDisplayed:!0,todos:[{title:"My first Todo",dueDate:void 0,notes:"Yay! I must start creating todos.",isDone:!1}]}],L(),f.pageInitiated=!0},k=()=>{const e=S.name;j(),p(e),S.projects.forEach((e=>{const t=S.projects.indexOf(e),n=e.name;l(n,t)})),u("0"),m(S.projects[0].name),S.projects[0].todos.forEach((e=>{console.log(S.projects[0].todos);const t=e.title,n=S.projects[0].todos.indexOf(e);b(t,n)})),f.pageInitiated=!0,void 0===S.projects[0].todos[0]&&h()},x=(e,t,n=!0)=>{A(),C();const o=S.projects[e],r=S.projects[t];m(o.name),void 0===o.todos[0]?h():(void 0===r.todos[0]&&n&&E(),o.todos.forEach((e=>{b(e.title,o.todos.indexOf(e))})))},q=function(){const e=()=>{const e=document.querySelector("#newTaskModalForm");e.addEventListener("submit",v),e.addEventListener("submit",(()=>{const e=document.querySelector("#taskTitleContainer input").value,t=((e,t,n)=>({title:e,dueDate:document.querySelector("#dueDateContainer input").value,notes:document.querySelector("#notesContainer textarea").value,isDone:!1}))(e),n=f.setCurrentlyDisplayedProject().getAttribute("data-deleteproject");void 0===S.projects[n].todos[0]&&E();const o=S.projects[n].todos.push(t)-1;b(e,o),((e,t)=>{const n=document.querySelector(`[data-deletetodo = '${e}']`);n.querySelector(".deleteTodo").addEventListener("click",(()=>{S.projects[t].todos.splice(e,1),n.remove(),L(),f.resetDeleteTaskId(),void 0===S.projects[t].todos[0]&&h()}))})(o,n),L(),y.removeNewTaskModal()}))},t=()=>{document.querySelector(".newTodoButton").addEventListener("click",y.displayNewTaskModal),e()},n=()=>{document.querySelector("#newProjectButton").addEventListener("click",y.displayNewProjectModal),(()=>{const e=document.querySelector(".modalNewProject");e.addEventListener("submit",v),e.addEventListener("submit",(()=>{const t=e.querySelector("input").value,n={name:t,isDisplayed:!1,todos:[]},o=S.projects.push(n)-1,r=l(t,o);L(),y.removeNewProjectModal(),(e=>{let t;e.lastChild.addEventListener("click",(e=>{y.displayDeleteProjectModalCreated(),t=e.target.parentElement.getAttribute("data-deleteproject"),document.querySelector("#finalDeleteProjectButtonCreated").addEventListener("click",(()=>{y.removeDeleteProjectModalCreated(),i(t),S.projects[t].isDisplayed&&(C(),A(),h()),S.projects.splice(t,1),L(),f.resetDeleteProjectId()}))}))})(r)}))})()},o=()=>{document.querySelectorAll(".deleteTodo").forEach((e=>{e.addEventListener("click",(t=>{if(e===t.target){const e=f.setCurrentlyDisplayedProject().getAttribute("data-deleteproject"),n=t.target.parentElement.parentElement.parentElement.getAttribute("data-deletetodo");t.target.parentElement.parentElement.parentElement.remove(),S.projects[e].todos.splice(n,1),L(),f.resetDeleteTaskId(),void 0===S.projects[e].todos[0]&&h()}}))}))},r=()=>{let e;document.querySelectorAll(".projectsListItem").forEach((t=>{t.lastChild.addEventListener("click",(t=>{y.displayDeleteProjectModalOnStart();const n=t.target.parentElement;e=n.getAttribute("data-deleteproject"),document.querySelector("#finalDeleteProjectButtonOnStart").addEventListener("click",(()=>{y.removeDeleteProjectModalOnStart(),i(e),S.projects[e].isDisplayed&&(C(),A(),h()),S.projects.splice(e,1),L(),f.resetDeleteProjectId(),e=void 0}))}))}))},a=()=>{document.querySelectorAll(".projectsListItem").forEach((e=>{e.addEventListener("click",(t=>{if(t.target!==e)return;if("projectsListItem projectsClicked"===e.getAttribute("class"))return;const n=document.querySelector(".projectsClicked"),r=n.getAttribute("data-deleteproject"),a=t.target.getAttribute("data-deleteproject");n.setAttribute("class","projectsListItem"),S.projects[r].isDisplayed=!1,u(a),S.projects[a].isDisplayed=!0,x(a,r),o()}))}))};return{addListenerLogin:()=>{const e=document.querySelector("#loginForm");e.addEventListener("submit",v),e.addEventListener("submit",(()=>{g(),t(),n(),r(),o(),a()}))},addListenerNewTask:t,addListenerNewProject:n,addListenerDeleteProjectOnStart:r,addListenerSubmitNewTask:e,addListenerDeleteTaskOnStart:o,addListenerNavigateProjectsOnStart:a}}();void 0===S.name?(n(),q.addListenerLogin()):k(),f.pageInitiated&&(q.addListenerNewTask(),q.addListenerNewProject(),q.addListenerDeleteProjectOnStart(),q.addListenerDeleteTaskOnStart(),q.addListenerNavigateProjectsOnStart())})();