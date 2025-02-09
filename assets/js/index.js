const tareas = [
  { id: 1, descripcion: "Ingresar en la clase", completado: false },
  { id: 2, descripcion: "Estudiar JavaScript", completado: false },
  { id: 3, descripcion: "Pasear al perro", completado: false },
];
let nextId = "4";

function actualizarLista() {
  const listaTareas = document.querySelector("#lista-tareas");
  const totalTareas = document.querySelector("#total-tareas");
  const tareasCompletadas = document.querySelector("#tareas-completadas");

  listaTareas.innerHTML = "";
  tareas.forEach((tarea, index) => {
    const ul = document.createElement("ul");
    ul.innerHTML = `
        <div style= "display:flex; justify-content: space-between; margin-left:0px;">
        <div style= "padding-right: 10px; margin-bottom:10px;">    
        <span class="${tarea.completado ? "completed" : ""}">• ${tarea.id} ${
      tarea.descripcion
    }</span>
        </div>
        <div>    
        <button onclick="cambiarEstado(${index})" style="background-color: white; border-radius:13px; color:green; width:40px;"> ✔ </button>
            <button onclick="borrarTarea(${index})" style="background-color: white; border-radius:13px; width:40px;">❌</button>
            </div>
            </div>
        `;
    listaTareas.appendChild(ul);
  });

  totalTareas.textContent = tareas.length;
  tareasCompletadas.textContent = tareas.filter((el) => el.completado).length;
}

function agregarTarea() {
  const input = document.querySelector("#nueva-tarea");
  if (input.value !== "") {
    tareas.push({ id: nextId++, descripcion: input.value, completado: false });
    input.value = " ";
    actualizarLista();
  }
}

function borrarTarea(index) {
  tareas.splice(index, 1);
  actualizarLista();
}

function cambiarEstado(index) {
  tareas[index].completado = !tareas[index].completado;
  actualizarLista();
}

actualizarLista();
