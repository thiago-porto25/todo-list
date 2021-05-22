(()=>{"use strict";const e=()=>{const e=document.createElement("div");e.setAttribute("id","bigLogoContainer"),e.setAttribute("class","logo");const t=document.createElement("span");return t.textContent="Todo List",e.appendChild(t),e},t=()=>{const e=document.createElement("form");e.setAttribute("id","loginForm");const t=document.createElement("div");t.setAttribute("class","headerLogin");const n=document.createElement("header");n.textContent="Log in to Todo List";const o=document.createElement("div");o.setAttribute("class","loginContainer");const s=document.createElement("input");s.setAttribute("type","text"),s.setAttribute("required",""),s.setAttribute("maxlength","10"),s.setAttribute("class","inputText"),s.setAttribute("id","inputUserFirstName");const a=document.createElement("span");a.setAttribute("class","floating-label"),a.setAttribute("maxlength","30"),a.textContent="First Name";const r=document.createElement("button");return r.setAttribute("class","button loginButton"),r.textContent="Login",o.appendChild(s),o.appendChild(a),t.appendChild(n),e.appendChild(t),e.appendChild(o),e.appendChild(r),e},n=()=>{const n=document.createElement("div");n.setAttribute("id","loginPage");const o=document.querySelector("body"),s=e(),a=t();n.appendChild(s),n.appendChild(a),o.appendChild(n)},o=()=>{document.querySelector("#loginPage").remove()},s=()=>{const e=document.createElement("nav"),t=(()=>{const e=document.createElement("div");e.setAttribute("class","logo"),e.setAttribute("id","logoContainer");const t=document.createElement("span");return t.textContent="Todo List",e.appendChild(t),e})(),n=(()=>{const e=document.createElement("div");e.setAttribute("id","newProjectButtonContainer");const t=document.createElement("button");t.setAttribute("class","button"),t.setAttribute("id","newProjectButton");const n=document.createElement("i");return n.setAttribute("class","fas fa-plus-circle"),t.textContent=" New Project",t.prepend(n),e.appendChild(t),e})(),o=(()=>{const e=document.createElement("div");e.setAttribute("id","projectsListContainer");const t=document.createElement("h1");t.textContent="Projects";const n=document.createElement("ul");return n.setAttribute("id","projectsList"),e.appendChild(t),e.appendChild(n),e})(),s=(()=>{const e=document.createElement("div");e.setAttribute("id","foot");const t=document.createElement("p");t.textContent="Created by ";const n=document.createElement("a");n.setAttribute("href","https://github.com/thiago-porto25");const o=document.createElement("i");return o.setAttribute("class","fab fa-github"),n.textContent=" Thiago Porto",n.prepend(o),t.appendChild(n),e.appendChild(t),e})();return e.appendChild(t),e.appendChild(n),e.appendChild(o),e.appendChild(s),e},a=()=>{const e=document.createElement("main"),t=(()=>{const e=document.createElement("div");e.setAttribute("class","projectContainer userNameContainer");const t=document.createElement("i");t.setAttribute("class","fas fa-task fa-user-circle");const n=document.createElement("span");return n.setAttribute("id","userName"),e.appendChild(t),e.appendChild(n),e})(),n=(()=>{const e=document.createElement("div");e.setAttribute("id","newTodoButtonContainer");const t=document.createElement("button");t.setAttribute("class","button newTodoButton");const n=document.createElement("span");return n.setAttribute("class","plusSpan"),n.textContent="+",t.appendChild(n),e.appendChild(t),e})(),o=(()=>{const e=document.createElement("div");e.setAttribute("class","projectTitleContainer projectContainer");const t=document.createElement("h2");return t.setAttribute("id","projectTitle"),e.appendChild(t),e})(),s=(()=>{const e=document.createElement("div");e.setAttribute("class","projectTodosContainer projectContainer");const t=document.createElement("ul");return t.setAttribute("class","todosList"),e.appendChild(t),e})();return e.appendChild(t),e.appendChild(n),e.appendChild(o),e.appendChild(s),e},r=()=>{const e=document.createElement("div");e.setAttribute("class","modal");const t=(()=>{const e=document.createElement("form");e.setAttribute("class","modalTemplate modalNewProject");const t=document.createElement("span");t.setAttribute("class","close"),t.innerHTML="&times;";const n=document.createElement("header");n.textContent="New Project";const o=document.createElement("input");o.setAttribute("class","modalInput"),o.setAttribute("placeholder","Project's Name"),o.setAttribute("required",""),o.setAttribute("maxlength","20");const s=document.createElement("button");return s.setAttribute("class","button submitProjectButton"),s.textContent="Create",e.appendChild(t),e.appendChild(n),e.appendChild(o),e.appendChild(s),e})(),n=(()=>{const e=document.createElement("div");e.setAttribute("class","modalTemplate modalNewTask");const t=document.createElement("span");t.setAttribute("class","close"),t.innerHTML="&times;";const n=document.createElement("form");n.setAttribute("id","newTaskModalForm");const o=document.createElement("div");o.setAttribute("id","taskTitleContainer");const s=document.createElement("input");s.setAttribute("class","modalInput newTaskInput"),s.setAttribute("maxlength","35"),s.setAttribute("type","text"),s.setAttribute("placeholder","I want to..."),s.setAttribute("required",""),o.appendChild(s);const a=document.createElement("div");a.setAttribute("id","dueDateContainer");const r=document.createElement("label");r.setAttribute("class","templateLabelNewTask"),r.setAttribute("for","date"),r.textContent="Due date";const d=document.createElement("br"),c=document.createElement("input");c.setAttribute("class","modalInput"),c.setAttribute("type","date"),c.setAttribute("name","date"),a.appendChild(r),a.appendChild(d),a.appendChild(c);const l=document.createElement("div");l.setAttribute("id","notesContainer");const i=document.createElement("label");i.setAttribute("class","templateLabelNewTask"),i.setAttribute("for","notes"),i.textContent="Notes";const u=document.createElement("br"),p=document.createElement("textarea");p.setAttribute("class","modalInput"),p.setAttribute("maxlength","150"),p.setAttribute("name","notes"),p.setAttribute("rows","1"),p.setAttribute("placeholder","Insert you notes here..."),l.appendChild(i),l.appendChild(u),l.appendChild(p);const m=document.createElement("div");m.setAttribute("id","addTaskButtonContainer");const b=document.createElement("button");return b.setAttribute("class","button addTaskButton"),b.textContent="Create new Todo",m.appendChild(b),n.appendChild(o),n.appendChild(a),n.appendChild(l),n.appendChild(m),e.appendChild(t),e.appendChild(n),e})(),o=(()=>{const e=document.createElement("div");e.setAttribute("class","modalTemplate modalTaskInfo");const t=document.createElement("form");t.setAttribute("id","infoContainer");const n=document.createElement("span");n.setAttribute("class","close"),n.innerHTML="&times;";const o=document.createElement("textarea");o.setAttribute("class","modalInput newTaskInput"),o.setAttribute("id","infoTitle"),o.setAttribute("required","");const s=document.createElement("label");s.setAttribute("class","templateLabelNewTask"),s.textContent="Due Date";const a=document.createElement("input");a.setAttribute("class","modalInput"),a.setAttribute("type","date");const r=document.createElement("label");r.setAttribute("class","templateLabelNewTask"),r.textContent="Notes";const d=document.createElement("textarea");d.setAttribute("class","modalInput"),d.setAttribute("id","notesInfo"),d.setAttribute("maxlength","150"),d.setAttribute("rows","3"),d.setAttribute("placeholder","Insert you notes here...");const c=document.createElement("div");c.setAttribute("id","saveEditButtonContainer");const l=document.createElement("button");return l.setAttribute("class","button addTaskButton saveEditButton"),l.textContent="Save changes",c.appendChild(l),t.appendChild(n),t.appendChild(o),t.appendChild(s),t.appendChild(a),t.appendChild(r),t.appendChild(d),t.appendChild(c),e.appendChild(t),e})(),s=(()=>{const e=document.createElement("div");e.setAttribute("class","modalTemplate modalDelete"),e.setAttribute("id","deleteProject");const t=document.createElement("span");t.setAttribute("class","close"),t.innerHTML="&times;";const n=document.createElement("p");n.textContent="Are you sure you want to delete this Project?";const o=document.createElement("div");o.setAttribute("id","deleteAndCancelContainer");const s=document.createElement("button");s.setAttribute("class","button cancelAndDelete"),s.setAttribute("id","finalDeleteProjectButton"),s.textContent="Delete";const a=document.createElement("button");return a.setAttribute("class","button cancelAndDelete"),a.setAttribute("id","cancelDeleteProjectButton"),a.textContent="Cancel",o.appendChild(s),o.appendChild(a),e.appendChild(t),e.appendChild(n),e.appendChild(o),e})(),a=(()=>{const e=document.createElement("div");e.setAttribute("class","modalTemplate modalDelete"),e.setAttribute("id","deleteTask");const t=document.createElement("span");t.setAttribute("class","close"),t.innerHTML="&times;";const n=document.createElement("p");n.textContent="Are you sure you want to delete this Task?";const o=document.createElement("div");o.setAttribute("id","deleteAndCancelContainer");const s=document.createElement("button");s.setAttribute("class","button cancelAndDelete"),s.setAttribute("id","finalDeleteTaskButton"),s.textContent="Delete";const a=document.createElement("button");return a.setAttribute("class","button cancelAndDelete"),a.setAttribute("id","cancelDeleteTaskButton"),a.textContent="Cancel",o.appendChild(s),o.appendChild(a),e.appendChild(t),e.appendChild(n),e.appendChild(o),e})();return e.appendChild(t),e.appendChild(n),e.appendChild(o),e.appendChild(s),e.appendChild(a),e},d=(e,t)=>{const n=document.createElement("li");n.setAttribute("class","projectsListItem"),n.setAttribute("data-deleteproject",t);const o=document.createElement("p");o.textContent=e;const s=document.createElement("i");s.setAttribute("class","fas fa-task fa-project-delete fa-trash-alt"),n.appendChild(o),n.appendChild(s),document.querySelector("#projectsList").appendChild(n)},c=e=>{document.querySelector(`[data-deleteproject='${e}']`).remove()},l=e=>{document.querySelector(`[data-deleteproject='${e}']`).setAttribute("class","projectsListItem projectsClicked")},i=e=>{document.querySelector("#userName").textContent=e},u=e=>{document.querySelector("#projectTitle").textContent=e},p=(e,t)=>{const n=document.createElement("li");n.setAttribute("class","todosListItem"),n.setAttribute("data-deleteTodo",t);const o=document.createElement("label");o.setAttribute("class","container");const s=document.createElement("input");s.setAttribute("type","checkbox");const a=document.createElement("span");a.setAttribute("class","checkmark"),o.appendChild(s),o.appendChild(a),n.appendChild(o);const r=document.createElement("span");r.setAttribute("class","todoTitle"),r.textContent=e,n.appendChild(r);const d=document.createElement("div");d.setAttribute("class","buttonsContainer");const c=document.createElement("button");c.setAttribute("class","button taskButton");const l=document.createElement("i");l.setAttribute("class","editTodo fas fa-task fa-info-circle");const i=document.createElement("button");i.setAttribute("class","button taskButton");const u=document.createElement("i");return u.setAttribute("class","deleteTodo fas fa-task fa-trash-alt"),c.appendChild(l),d.appendChild(c),i.appendChild(u),d.appendChild(i),n.appendChild(d),document.querySelector(".todosList").appendChild(n),n},m=()=>{document.querySelector("#projectTitle").textContent=""},b=()=>{document.querySelectorAll(".todosListItem").forEach((e=>e.remove()))},C=()=>{const e=document.createElement("div");if(null==document.querySelector(".textContainer")){e.setAttribute("class","textContainer");const t=document.createElement("p");t.textContent="It seems that you have no Todos!",e.appendChild(t),document.querySelector(".projectTodosContainer").appendChild(e)}},A=()=>{document.querySelector(".textContainer").remove()},h=function(){const e=()=>{document.querySelector(".modal").style.display="flex"},t=()=>{document.querySelector(".modal").style.display="none"};return{createModals:()=>{r()},displayNewProjectModal:()=>{const t=document.querySelector(".modalNewProject");e(),t.style.display="flex"},displayNewTaskModal:()=>{const t=document.querySelector(".modalNewTask");e(),t.style.display="flex"},displayTaskInfoModal:()=>{const t=document.querySelector(".modalTaskInfo");e(),t.style.display="flex"},displayDeleteProjectModal:()=>{const t=document.querySelector("#deleteProject");e(),t.style.display="flex"},displayDeleteTaskModal:()=>{const t=document.querySelector("#deleteTask");e(),t.style.display="flex"},removeNewProjectModal:()=>{const e=document.querySelector(".modalNewProject"),n=e.querySelector("input");t(),n.value="",e.style.display="none"},removeNewTaskModal:()=>{const e=document.querySelector(".modalNewTask"),n=e.querySelector("#taskTitleContainer input"),o=e.querySelector("#dueDateContainer input"),s=e.querySelector("#notesContainer textarea");t(),n.value="",o.value="",s.value="",e.style.display="none"},removeTaskInfoModal:()=>{const e=document.querySelector(".modalTaskInfo");t(),e.style.display="none"},removeDeleteProjectModal:()=>{const e=document.querySelector("#deleteProject");t(),e.style.display="none"},removeDeleteTaskModal:()=>{const e=document.querySelector("#deleteTask");t(),e.style.display="none"}}}(),E=()=>{const e=document.querySelector("body"),t=document.createElement("div");t.setAttribute("id","appPage");const n=s(),o=a(),d=r();t.appendChild(n),t.appendChild(o),t.appendChild(d),e.appendChild(t)},y=e=>{e.preventDefault()},j=JSON.parse(localStorage.getItem("user"));let v=null!==localStorage.getItem("user")?j:{};const T={pageInitiated:!1,setCurrentlyDisplayedProject:()=>document.querySelector(".projectsClicked"),resetDeleteTaskId:()=>{const e=document.querySelectorAll(".todosListItem");let t=0;e.forEach((e=>{e.setAttribute("data-deletetodo",t),++t}))},resetDeleteProjectId:()=>{const e=document.querySelectorAll(".projectsListItem");let t=0;e.forEach((e=>{e.setAttribute("data-deleteproject",t),++t}))}},f=()=>{localStorage.setItem("user",JSON.stringify(v))},S=()=>{const e=document.querySelector("#inputUserFirstName").value;o(),E(),d("Default","0"),l("0"),u("Default"),i(e),p("My first Todo ","0"),v.name=e,v.projects=[{name:"Default",isDisplayed:!0,todos:[{title:"My first Todo",dueDate:void 0,notes:"Yay! I must start creating todos.",isDone:!1}]}],f(),T.pageInitiated=!0},k=()=>{const e=v.name;E(),i(e),v.projects.forEach((e=>{const t=v.projects.indexOf(e),n=e.name;d(n,t)})),l("0"),u(v.projects[0].name),v.projects[0].todos.forEach((e=>{console.log(v.projects[0].todos);const t=e.title,n=v.projects[0].todos.indexOf(e);p(t,n)})),T.pageInitiated=!0,void 0===v.projects[0].todos[0]&&C()},L=(e,t)=>{b(),m();const n=v.projects[e],o=v.projects[t];u(n.name),void 0===n.todos[0]?C():(void 0===o.todos[0]&&A(),n.todos.forEach((e=>{p(e.title,n.todos.indexOf(e))})))},g=function(){const e=()=>{const e=document.querySelector("#newTaskModalForm");e.addEventListener("submit",y),e.addEventListener("submit",(()=>{const e=document.querySelector("#taskTitleContainer input").value,t=((e,t,n)=>({title:e,dueDate:document.querySelector("#dueDateContainer input").value,notes:document.querySelector("#notesContainer textarea").value,isDone:!1}))(e),n=T.setCurrentlyDisplayedProject().getAttribute("data-deleteproject");void 0===v.projects[n].todos[0]&&A();const o=v.projects[n].todos.push(t)-1;((e,t)=>{const n=e.getAttribute("data-deletetodo");e.querySelector(".deleteTodo").addEventListener("click",(()=>{v.projects[t].todos.splice(n,1),e.remove(),f(),T.resetDeleteTaskId(),void 0===v.projects[t].todos[0]&&C()}))})(p(e,o),n),f(),h.removeNewTaskModal()}))},t=()=>{document.querySelector(".newTodoButton").addEventListener("click",h.displayNewTaskModal),e()},n=()=>{document.querySelector("#newProjectButton").addEventListener("click",h.displayNewProjectModal),(()=>{const e=document.querySelector(".modalNewProject");e.addEventListener("submit",y),e.addEventListener("submit",(()=>{const t=e.querySelector("input").value,n={name:t,isDisplayed:!1,todos:[]},o=v.projects.push(n)-1;var s;d(t,o),f(),h.removeNewProjectModal(),s=o,document.querySelector(`[data-deleteproject = '${s}']`).lastChild.addEventListener("click",(()=>{h.displayDeleteProjectModal()})),document.querySelector("#finalDeleteProjectButton").addEventListener("click",(()=>{h.removeDeleteProjectModal(),c(s),v.projects[s].isDisplayed&&(m(),b(),C()),v.projects.splice(s,1),f(),T.resetDeleteProjectId()}))}))})()},o=()=>{document.querySelectorAll(".deleteTodo").forEach((e=>{e.addEventListener("click",(t=>{if(e===t.target){const e=T.setCurrentlyDisplayedProject().getAttribute("data-deleteproject"),n=t.target.parentElement.parentElement.parentElement.getAttribute("data-deletetodo");t.target.parentElement.parentElement.parentElement.remove(),v.projects[e].todos.splice(n,1),f(),T.resetDeleteTaskId(),void 0===v.projects[e].todos[0]&&C()}}))}))},s=()=>{let e;document.querySelectorAll(".projectsListItem").forEach((t=>{t.lastChild.addEventListener("click",(t=>{h.displayDeleteProjectModal();const n=t.target.parentElement;e=n.getAttribute("data-deleteproject")}))})),document.querySelector("#finalDeleteProjectButton").addEventListener("click",(()=>{h.removeDeleteProjectModal(),c(e),v.projects[e].isDisplayed&&(m(),b(),C()),v.projects.splice(e,1),f(),T.resetDeleteProjectId(),e=void 0}))},a=()=>{document.querySelectorAll(".projectsListItem").forEach((e=>{e.addEventListener("click",(t=>{if(t.target!==e)return;if("projectsListItem projectsClicked"===e.getAttribute("class"))return;const n=document.querySelector(".projectsClicked"),s=n.getAttribute("data-deleteproject"),a=t.target.getAttribute("data-deleteproject");n.setAttribute("class","projectsListItem"),v.projects[s].isDisplayed=!1,l(a),v.projects[a].isDisplayed=!0,L(a,s),o()}))}))};return{addListenerLogin:()=>{const e=document.querySelector("#loginForm");e.addEventListener("submit",y),e.addEventListener("submit",(()=>{S(),t(),n(),s(),o(),a()}))},addListenerNewTask:t,addListenerNewProject:n,addListenerDeleteProjectOnStart:s,addListenerSubmitNewTask:e,addListenerDeleteTaskOnStart:o,addListenerNavigateProjectsOnStart:a}}();void 0===v.name?(n(),g.addListenerLogin()):k(),T.pageInitiated&&(g.addListenerNewTask(),g.addListenerNewProject(),g.addListenerDeleteProjectOnStart(),g.addListenerDeleteTaskOnStart(),g.addListenerNavigateProjectsOnStart())})();