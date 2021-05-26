(()=>{"use strict";const e=()=>{const e=document.createElement("div");e.setAttribute("id","bigLogoContainer"),e.setAttribute("class","logo");const t=document.createElement("span");return t.textContent="Todo List",e.appendChild(t),e},t=()=>{const e=document.createElement("form");e.setAttribute("id","loginForm");const t=document.createElement("div");t.setAttribute("class","headerLogin");const n=document.createElement("header");n.textContent="Log in to Todo List";const o=document.createElement("div");o.setAttribute("class","loginContainer");const r=document.createElement("input");r.setAttribute("type","text"),r.setAttribute("required",""),r.setAttribute("maxlength","10"),r.setAttribute("class","inputText"),r.setAttribute("id","inputUserFirstName");const a=document.createElement("span");a.setAttribute("class","floating-label"),a.setAttribute("maxlength","30"),a.textContent="First Name";const s=document.createElement("button");return s.setAttribute("class","button loginButton"),s.textContent="Login",o.appendChild(r),o.appendChild(a),t.appendChild(n),e.appendChild(t),e.appendChild(o),e.appendChild(s),e},n=()=>{const n=document.createElement("div");n.setAttribute("id","loginPage");const o=document.querySelector("body"),r=e(),a=t();n.appendChild(r),n.appendChild(a),o.appendChild(n)},o=()=>{document.querySelector("#loginPage").remove()},r=()=>{const e=document.createElement("nav"),t=(()=>{const e=document.createElement("div");e.setAttribute("class","logo"),e.setAttribute("id","logoContainer");const t=document.createElement("span");return t.textContent="Todo List",e.appendChild(t),e})(),n=(()=>{const e=document.createElement("div");e.setAttribute("id","newProjectButtonContainer");const t=document.createElement("button");t.setAttribute("class","button"),t.setAttribute("id","newProjectButton");const n=document.createElement("i");return n.setAttribute("class","fas fa-plus-circle"),t.textContent=" New Project",t.prepend(n),e.appendChild(t),e})(),o=(()=>{const e=document.createElement("div");e.setAttribute("id","projectsListContainer");const t=document.createElement("h1");t.textContent="Projects";const n=document.createElement("ul");return n.setAttribute("id","projectsList"),e.appendChild(t),e.appendChild(n),e})(),r=(()=>{const e=document.createElement("div");e.setAttribute("id","foot");const t=document.createElement("p");t.textContent="Created by ";const n=document.createElement("a");n.setAttribute("href","https://github.com/thiago-porto25");const o=document.createElement("i");return o.setAttribute("class","fab fa-github"),n.textContent=" Thiago Porto",n.prepend(o),t.appendChild(n),e.appendChild(t),e})();return e.appendChild(t),e.appendChild(n),e.appendChild(o),e.appendChild(r),e},a=()=>{const e=document.createElement("main"),t=(()=>{const e=document.createElement("div");e.setAttribute("class","projectContainer userNameContainer");const t=document.createElement("i");t.setAttribute("class","fas fa-task fa-user-circle");const n=document.createElement("span");return n.setAttribute("id","userName"),e.appendChild(t),e.appendChild(n),e})(),n=(()=>{const e=document.createElement("div");e.setAttribute("id","newTodoButtonContainer");const t=document.createElement("button");t.setAttribute("class","button newTodoButton");const n=document.createElement("span");return n.setAttribute("class","plusSpan"),n.textContent="+",t.appendChild(n),e.appendChild(t),e})(),o=(()=>{const e=document.createElement("div");e.setAttribute("class","projectTitleContainer projectContainer");const t=document.createElement("h2");return t.setAttribute("id","projectTitle"),e.appendChild(t),e})(),r=(()=>{const e=document.createElement("div");e.setAttribute("class","projectTodosContainer projectContainer");const t=document.createElement("ul");return t.setAttribute("class","todosList"),e.appendChild(t),e})();return e.appendChild(t),e.appendChild(n),e.appendChild(o),e.appendChild(r),e},s=()=>{const e=document.createElement("div");e.setAttribute("class","modal");const t=(()=>{const e=document.createElement("form");e.setAttribute("class","modalTemplate modalNewProject");const t=document.createElement("span");t.setAttribute("class","close"),t.innerHTML="&times;";const n=document.createElement("header");n.textContent="New Project";const o=document.createElement("input");o.setAttribute("class","modalInput"),o.setAttribute("placeholder","Project's Name"),o.setAttribute("required",""),o.setAttribute("maxlength","20");const r=document.createElement("button");return r.setAttribute("class","button submitProjectButton"),r.textContent="Create",e.appendChild(t),e.appendChild(n),e.appendChild(o),e.appendChild(r),e})(),n=(()=>{const e=document.createElement("div");e.setAttribute("class","modalTemplate modalNewTask");const t=document.createElement("span");t.setAttribute("class","close"),t.innerHTML="&times;";const n=document.createElement("form");n.setAttribute("id","newTaskModalForm");const o=document.createElement("div");o.setAttribute("id","taskTitleContainer");const r=document.createElement("input");r.setAttribute("class","modalInput newTaskInput"),r.setAttribute("maxlength","35"),r.setAttribute("type","text"),r.setAttribute("placeholder","I want to..."),r.setAttribute("required",""),o.appendChild(r);const a=document.createElement("div");a.setAttribute("id","dueDateContainer");const s=document.createElement("label");s.setAttribute("class","templateLabelNewTask"),s.setAttribute("for","date"),s.textContent="Due date";const d=document.createElement("br"),c=document.createElement("input");c.setAttribute("class","modalInput"),c.setAttribute("type","date"),c.setAttribute("name","date"),a.appendChild(s),a.appendChild(d),a.appendChild(c);const l=document.createElement("div");l.setAttribute("id","notesContainer");const i=document.createElement("label");i.setAttribute("class","templateLabelNewTask"),i.setAttribute("for","notes"),i.textContent="Notes";const u=document.createElement("br"),m=document.createElement("textarea");m.setAttribute("class","modalInput"),m.setAttribute("maxlength","150"),m.setAttribute("name","notes"),m.setAttribute("rows","1"),m.setAttribute("placeholder","Insert you notes here..."),l.appendChild(i),l.appendChild(u),l.appendChild(m);const p=document.createElement("div");p.setAttribute("id","addTaskButtonContainer");const b=document.createElement("button");return b.setAttribute("class","button addTaskButton"),b.textContent="Create new Todo",p.appendChild(b),n.appendChild(o),n.appendChild(a),n.appendChild(l),n.appendChild(p),e.appendChild(t),e.appendChild(n),e})();return e.appendChild(t),e.appendChild(n),e},d=()=>{const e=document.createElement("div");e.setAttribute("class","modalTemplate modalDelete"),e.setAttribute("id","deleteProject");const t=document.createElement("span");t.setAttribute("class","close"),t.innerHTML="&times;";const n=document.createElement("p");n.textContent="Are you sure you want to delete this Project?";const o=document.createElement("div");o.setAttribute("id","deleteAndCancelContainer");const r=document.createElement("button");r.setAttribute("class","button cancelAndDelete"),r.setAttribute("id","finalDeleteProjectButtonOnStart"),r.textContent="Delete";const a=document.createElement("button");return a.setAttribute("class","button cancelAndDelete"),a.setAttribute("id","cancelDeleteProjectButton"),a.textContent="Cancel",o.appendChild(r),o.appendChild(a),e.appendChild(t),e.appendChild(n),e.appendChild(o),e},c=()=>{const e=document.createElement("div");e.setAttribute("class","modalTemplate modalDelete"),e.setAttribute("id","deleteTask");const t=document.createElement("span");t.setAttribute("class","close"),t.innerHTML="&times;";const n=document.createElement("p");n.textContent="Are you sure you want to delete this Project?";const o=document.createElement("div");o.setAttribute("id","deleteAndCancelContainer");const r=document.createElement("button");r.setAttribute("class","button cancelAndDelete"),r.setAttribute("id","finalDeleteProjectButtonCreated"),r.textContent="Delete";const a=document.createElement("button");return a.setAttribute("class","button cancelAndDelete"),a.setAttribute("id","cancelDeleteTaskButton"),a.textContent="Cancel",o.appendChild(r),o.appendChild(a),e.appendChild(t),e.appendChild(n),e.appendChild(o),e},l=()=>{const e=document.createElement("div");e.setAttribute("class","modalTemplate modalTaskInfo"),e.setAttribute("id","modalTaskInfoOnStart");const t=document.createElement("form");t.setAttribute("id","infoContainer"),t.setAttribute("class","taskInfoFormOnStart");const n=document.createElement("span");n.setAttribute("class","close"),n.innerHTML="&times;";const o=document.createElement("textarea");o.setAttribute("class","modalInput newTaskInput infoTitleOnStart"),o.setAttribute("id","infoTitle"),o.setAttribute("required","");const r=document.createElement("label");r.setAttribute("class","templateLabelNewTask"),r.textContent="Due Date";const a=document.createElement("input");a.setAttribute("class","modalInput infoDateOnStart"),a.setAttribute("type","date");const s=document.createElement("label");s.setAttribute("class","templateLabelNewTask"),s.textContent="Notes";const d=document.createElement("textarea");d.setAttribute("class","modalInput notesInfoOnStart"),d.setAttribute("id","notesInfo"),d.setAttribute("maxlength","150"),d.setAttribute("rows","3"),d.setAttribute("placeholder","Insert you notes here...");const c=document.createElement("div");c.setAttribute("id","saveEditButtonContainer");const l=document.createElement("button");return l.setAttribute("class","button addTaskButton saveEditButton"),l.setAttribute("id","saveEditButtonOnStart"),l.textContent="Save changes",c.appendChild(l),t.appendChild(n),t.appendChild(o),t.appendChild(r),t.appendChild(a),t.appendChild(s),t.appendChild(d),t.appendChild(c),e.appendChild(t),e},i=()=>{const e=document.createElement("div");e.setAttribute("class","modalTemplate modalTaskInfo"),e.setAttribute("id","modalTaskInfoCreated");const t=document.createElement("form");t.setAttribute("id","infoContainer"),t.setAttribute("class","taskInfoFormCreated");const n=document.createElement("span");n.setAttribute("class","close"),n.innerHTML="&times;";const o=document.createElement("textarea");o.setAttribute("class","modalInput newTaskInput infoTitleCreated"),o.setAttribute("id","infoTitle"),o.setAttribute("required","");const r=document.createElement("label");r.setAttribute("class","templateLabelNewTask"),r.textContent="Due Date";const a=document.createElement("input");a.setAttribute("class","modalInput infoDateCreated"),a.setAttribute("type","date");const s=document.createElement("label");s.setAttribute("class","templateLabelNewTask"),s.textContent="Notes";const d=document.createElement("textarea");d.setAttribute("class","modalInput notesInfoCreated"),d.setAttribute("id","notesInfo"),d.setAttribute("maxlength","150"),d.setAttribute("rows","3"),d.setAttribute("placeholder","Insert you notes here...");const c=document.createElement("div");c.setAttribute("id","saveEditButtonContainer");const l=document.createElement("button");return l.setAttribute("class","button addTaskButton saveEditButton"),l.setAttribute("id","saveEditButtonCreated"),l.textContent="Save changes",c.appendChild(l),t.appendChild(n),t.appendChild(o),t.appendChild(r),t.appendChild(a),t.appendChild(s),t.appendChild(d),t.appendChild(c),e.appendChild(t),e},u=(e,t)=>{const n=document.createElement("li");n.setAttribute("class","projectsListItem"),n.setAttribute("data-deleteproject",t);const o=document.createElement("p");o.textContent=e;const r=document.createElement("i");return r.setAttribute("class","fas fa-task fa-project-delete fa-trash-alt"),n.appendChild(o),n.appendChild(r),document.querySelector("#projectsList").appendChild(n),n},m=e=>{document.querySelector(`[data-deleteproject = '${e}']`).remove()},p=e=>{document.querySelector(`[data-deleteproject='${e}']`).setAttribute("class","projectsListItem projectsClicked")},b=e=>{document.querySelector("#userName").textContent=e},C=e=>{document.querySelector("#projectTitle").textContent=e},y=(e,t)=>{const n=document.querySelector(".todosList"),o=document.createElement("li");o.setAttribute("class","todosListItem"),o.setAttribute("data-deleteTodo",t);const r=document.createElement("label");r.setAttribute("class","container");const a=document.createElement("input");a.setAttribute("type","checkbox");const s=document.createElement("span");s.setAttribute("class","checkmark"),r.appendChild(a),r.appendChild(s),o.appendChild(r);const d=document.createElement("span");d.setAttribute("class","todoTitle"),d.textContent=e,o.appendChild(d);const c=document.createElement("div");c.setAttribute("class","buttonsContainer");const l=document.createElement("button");l.setAttribute("class","button taskButton");const i=document.createElement("i");i.setAttribute("class","editTodo fas fa-task fa-info-circle");const u=document.createElement("button");u.setAttribute("class","button taskButton");const m=document.createElement("i");return m.setAttribute("class","deleteTodo fas fa-task fa-trash-alt"),l.appendChild(i),c.appendChild(l),u.appendChild(m),c.appendChild(u),o.appendChild(c),n.appendChild(o),o},A=()=>{document.querySelector("#projectTitle").textContent=""},E=()=>{document.querySelectorAll(".todosListItem").forEach((e=>e.remove()))},h=()=>{const e=document.createElement("div");e.setAttribute("class","textContainer emptyTodos");const t=document.createElement("p");t.textContent="It seems that you have no Todos!",e.appendChild(t),document.querySelector(".projectTodosContainer").appendChild(e)},j=()=>{document.querySelector(".emptyTodos").style.display="none"},v=()=>{document.querySelector(".emptyTodos").style.display="flex"},S=()=>{const e=document.createElement("div");e.setAttribute("class","textContainer noProjects");const t=document.createElement("p");t.textContent="It seems that you have no Projects!",e.appendChild(t),document.querySelector(".projectTodosContainer").appendChild(e)},f=()=>{document.querySelector(".noProjects").style.display="none"},T=()=>{document.querySelector(".noProjects").style.display="flex"},k=function(){const e=()=>{document.querySelector(".modal").style.display="flex"},t=()=>{document.querySelector(".modal").style.display="none"};return{createModals:()=>{s()},displayNewProjectModal:()=>{const t=document.querySelector(".modalNewProject");e(),t.style.display="flex"},displayNewTaskModal:()=>{const t=document.querySelector(".modalNewTask");e(),t.style.display="flex"},displayDeleteProjectModalOnStart:()=>{let t=document.querySelector(".modal");const n=d();e(),t.appendChild(n),n.style.display="flex"},displayDeleteProjectModalCreated:()=>{let t=document.querySelector(".modal");const n=c();e(),t.appendChild(n),n.style.display="flex"},displayTaskInfoModalOnStart:()=>{let t=document.querySelector(".modal");const n=l();e(),t.appendChild(n),n.style.display="flex"},displayTaskInfoModalCreated:()=>{let t=document.querySelector(".modal");const n=i();e(),t.appendChild(n),n.style.display="flex"},removeNewProjectModal:()=>{const e=document.querySelector(".modalNewProject"),n=e.querySelector("input");t(),n.value="",e.style.display="none"},removeNewTaskModal:()=>{const e=document.querySelector(".modalNewTask"),n=e.querySelector("#taskTitleContainer input"),o=e.querySelector("#dueDateContainer input"),r=e.querySelector("#notesContainer textarea");t(),n.value="",o.value="",r.value="",e.style.display="none"},removeDeleteProjectModalOnStart:()=>{const e=document.querySelector("#deleteProject");t(),e.remove()},removeDeleteProjectModalCreated:()=>{const e=document.querySelector("#deleteTask");t(),e.remove()},removeTaskInfoModalOnStart:()=>{const e=document.querySelector("#modalTaskInfoOnStart");t(),e.remove()},removeTaskInfoModalCreated:()=>{const e=document.querySelector("#modalTaskInfoCreated");t(),e.remove()}}}(),q=()=>{const e=document.querySelector("body"),t=document.createElement("div");t.setAttribute("id","appPage");const n=r(),o=a(),d=s();t.appendChild(n),t.appendChild(o),t.appendChild(d),e.appendChild(t),h(),S()},L=e=>{e.preventDefault()},D=JSON.parse(localStorage.getItem("user"));let I=null!==localStorage.getItem("user")?D:{};const g={pageInitiated:!1,isNotNew:!0,setCurrentlyDisplayedProject:()=>document.querySelector(".projectsClicked"),resetDeleteTaskId:()=>{const e=document.querySelectorAll(".todosListItem");let t=0;e.forEach((e=>{e.setAttribute("data-deletetodo",t),++t}))},resetDeleteProjectId:()=>{const e=document.querySelectorAll(".projectsListItem");let t=0;e.forEach((e=>{e.setAttribute("data-deleteproject",t),++t}))}},x=()=>{localStorage.setItem("user",JSON.stringify(I))},P=()=>{const e=document.querySelector("#inputUserFirstName").value;o(),q(),u("Default","0"),p("0"),C("Default"),b(e),y("My first Todo ","0"),I.name=e,I.projects=[{name:"Default",isDisplayed:!0,todos:[{title:"My first Todo",dueDate:void 0,notes:"Yay! I must start creating todos.",isDone:!1}]}],x(),g.pageInitiated=!0},w=()=>{const e=I.name;q(),b(e),void 0===I.projects[0]?(T(),g.pageInitiated=!0):(I.projects.forEach((e=>{const t=I.projects.indexOf(e),n=e.name;u(n,t)})),p("0"),I.projects[0].isDisplayed=!0,C(I.projects[0].name),I.projects[0].todos.forEach((e=>{console.log(I.projects[0].todos);const t=e.title,n=I.projects[0].todos.indexOf(e);y(t,n)})),g.pageInitiated=!0,void 0===I.projects[0].todos[0]&&v())},N=function(){const e=e=>{f(),j(),E(),A();const t=I.projects[e];C(t.name),void 0===t.todos[0]?v():t.todos.forEach((e=>{y(e.title,t.todos.indexOf(e))}))};return{displayNewProject:e,displayNextProject:t=>{if(0!=t){const n=t-1;p(n),I.projects[n].isDisplayed=!0,e(n)}0==t&&null!=I.projects[0]&&(p(t),I.projects[t].isDisplayed=!0,e(t)),0==t&&null==I.projects[0]&&(T(),j(),C(""))},changeTaskTitle:(e,t)=>{document.querySelector(`[data-deletetodo='${e}']`).querySelector(".todoTitle").textContent=t}}}(),M=function(){const e=()=>{document.querySelectorAll(".editTodo").forEach((e=>e.addEventListener("click",(e=>{const t=g.setCurrentlyDisplayedProject().getAttribute("data-deleteproject"),n=e.target.parentElement.parentElement.parentElement.getAttribute("data-deletetodo");k.displayTaskInfoModalOnStart(),document.querySelector("#modalTaskInfoOnStart .close").addEventListener("click",k.removeTaskInfoModalOnStart);const o=document.querySelector(".infoTitleOnStart"),r=document.querySelector(".infoDateOnStart"),a=document.querySelector(".notesInfoOnStart");o.value=I.projects[t].todos[n].title,r.value=I.projects[t].todos[n].dueDate,a.value=I.projects[t].todos[n].notes;const s=document.querySelector(".taskInfoFormOnStart");s.addEventListener("submit",L),s.addEventListener("submit",(()=>{I.projects[t].todos[n].title=document.querySelector(".infoTitleOnStart").value,I.projects[t].todos[n].dueDate=document.querySelector(".infoDateOnStart").value,I.projects[t].todos[n].notes=document.querySelector(".notesInfoOnStart").value,k.removeTaskInfoModalOnStart(),N.changeTaskTitle(n,I.projects[t].todos[n].title),x()}))}))))},t=()=>{const e=document.querySelector("#newTaskModalForm");e.addEventListener("submit",L),e.addEventListener("submit",(()=>{const e=document.querySelector("#taskTitleContainer input").value,t=((e,t,n)=>({title:e,dueDate:document.querySelector("#dueDateContainer input").value,notes:document.querySelector("#notesContainer textarea").value,isDone:!1}))(e),n=g.setCurrentlyDisplayedProject().getAttribute("data-deleteproject");j();const o=I.projects[n].todos.push(t)-1;y(e,o),((e,t)=>{const n=document.querySelector(`[data-deletetodo = '${e}']`);n.querySelector(".deleteTodo").addEventListener("click",(()=>{I.projects[t].todos.splice(e,1),n.remove(),x(),g.resetDeleteTaskId(),void 0===I.projects[t].todos[0]&&v()}))})(o,n),((e,t)=>{document.querySelector(`[data-deletetodo='${e}']`).querySelector(".editTodo").addEventListener("click",(e=>{const n=e.target.parentElement.parentElement.parentElement.getAttribute("data-deletetodo");k.displayTaskInfoModalCreated(),document.querySelector("#modalTaskInfoCreated .close").addEventListener("click",k.removeTaskInfoModalCreated);const o=document.querySelector(".infoTitleCreated"),r=document.querySelector(".infoDateCreated"),a=document.querySelector(".notesInfoCreated");o.value=I.projects[t].todos[n].title,r.value=I.projects[t].todos[n].dueDate,a.value=I.projects[t].todos[n].notes;const s=document.querySelector(".taskInfoFormCreated");s.addEventListener("submit",L),s.addEventListener("submit",(()=>{I.projects[t].todos[n].title=document.querySelector(".infoTitleCreated").value,I.projects[t].todos[n].dueDate=document.querySelector(".infoDateCreated").value,I.projects[t].todos[n].notes=document.querySelector(".notesInfoCreated").value,k.removeTaskInfoModalCreated(),N.changeTaskTitle(n,I.projects[t].todos[n].title),x()}))}))})(o,n),x(),k.removeNewTaskModal()}))},n=()=>{document.querySelector(".newTodoButton").addEventListener("click",k.displayNewTaskModal),t(),document.querySelector(".modalNewTask .close").addEventListener("click",k.removeNewTaskModal)},o=()=>{const t=document.querySelector(".modalNewProject");t.addEventListener("submit",L),t.addEventListener("submit",(()=>{const n=t.querySelector("input").value,o={name:n,isDisplayed:!1,todos:[]},r=I.projects.push(o)-1,s=u(n,r);0==r&&(I.projects[r].isDisplayed=!0),x(),k.removeNewProjectModal(),(e=>{let t;e.lastChild.addEventListener("click",(e=>{k.displayDeleteProjectModalCreated(),(()=>{const e=document.querySelector("#deleteTask .close"),t=document.querySelector("#cancelDeleteTaskButton");e.addEventListener("click",k.removeDeleteProjectModalCreated),t.addEventListener("click",k.removeDeleteProjectModalCreated)})(),t=e.target.parentElement.getAttribute("data-deleteproject"),document.querySelector("#finalDeleteProjectButtonCreated").addEventListener("click",(()=>{k.removeDeleteProjectModalCreated(),m(t),I.projects[t].isDisplayed&&(A(),E(),v()),I.projects.splice(t,1),x(),g.resetDeleteProjectId(),N.displayNextProject(t)}))}))})(s),(t=>{t.addEventListener("click",(n=>{const o=t.getAttribute("data-deleteproject");n.target===t&&"projectsListItem projectsClicked"!==t.getAttribute("class")&&(document.querySelectorAll(".projectsListItem").forEach((e=>e.setAttribute("class","projectsListItem"))),I.projects.forEach((e=>e.isDisplayed=!1)),p(o),I.projects[o].isDisplayed=!0,N.displayNewProject(o),a(),e())}))})(s)}))},r=()=>{document.querySelector("#newProjectButton").addEventListener("click",k.displayNewProjectModal),o(),document.querySelector(".modalNewProject .close").addEventListener("click",k.removeNewProjectModal)},a=()=>{document.querySelectorAll(".deleteTodo").forEach((e=>{e.addEventListener("click",(t=>{if(e===t.target){const e=g.setCurrentlyDisplayedProject().getAttribute("data-deleteproject"),n=t.target.parentElement.parentElement.parentElement.getAttribute("data-deletetodo");t.target.parentElement.parentElement.parentElement.remove(),I.projects[e].todos.splice(n,1),x(),g.resetDeleteTaskId(),void 0===I.projects[e].todos[0]&&v()}}))}))},s=()=>{let e;document.querySelectorAll(".projectsListItem").forEach((t=>{t.lastChild.addEventListener("click",(t=>{k.displayDeleteProjectModalOnStart(),(()=>{const e=document.querySelector("#deleteProject .close"),t=document.querySelector("#cancelDeleteProjectButton");e.addEventListener("click",k.removeDeleteProjectModalOnStart),t.addEventListener("click",k.removeDeleteProjectModalOnStart)})();const n=t.target.parentElement;e=n.getAttribute("data-deleteproject"),document.querySelector("#finalDeleteProjectButtonOnStart").addEventListener("click",(()=>{k.removeDeleteProjectModalOnStart(),m(e),I.projects[e].isDisplayed&&(A(),E(),v()),I.projects.splice(e,1),x(),g.resetDeleteProjectId(),N.displayNextProject(e),e=void 0}))}))}))},d=()=>{document.querySelectorAll(".projectsListItem").forEach((t=>{t.addEventListener("click",(n=>{if(n.target!==t)return;if("projectsListItem projectsClicked"===t.getAttribute("class"))return;const o=n.target.getAttribute("data-deleteproject");document.querySelectorAll(".projectsListItem").forEach((e=>e.setAttribute("class","projectsListItem"))),I.projects.forEach((e=>e.isDisplayed=!1)),n.target.setAttribute("class","projectsListItem projectsClicked"),console.log(I.projects[o].isDisplayed),I.projects[o].isDisplayed=!0,N.displayNewProject(o),a(),e()}))}))};return{addListenerLogin:()=>{const t=document.querySelector("#loginForm");t.addEventListener("submit",L),t.addEventListener("submit",(()=>{P(),n(),r(),s(),a(),e(),d()}))},addListenerNewTask:n,addListenerNewProject:r,addListenerDeleteProjectOnStart:s,addListenerSubmitNewTask:t,addListenerDeleteTaskOnStart:a,addListenerNavigateProjectsOnStart:d,addListenerTaskInfoOnStart:e}}();void 0===I.name?(n(),M.addListenerLogin()):w(),g.pageInitiated&&(M.addListenerNewTask(),M.addListenerNewProject(),M.addListenerDeleteProjectOnStart(),M.addListenerDeleteTaskOnStart(),M.addListenerTaskInfoOnStart(),M.addListenerNavigateProjectsOnStart())})();