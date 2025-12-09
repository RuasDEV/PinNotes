const addNoteBtn = document.getElementById("addNoteBtn");
const container = document.getElementById("notesContainer");

// Carregar notas salvas
function carregarNotas() {
  const notas = JSON.parse(localStorage.getItem("pinnote")) || [];
  notas.forEach(texto => criarNota(texto));
}

// Criar nova nota
function criarNota(texto = "") {
  const div = document.createElement("div");
  div.className = "note";
  div.contentEditable = true;
  div.innerText = texto;

  const del = document.createElement("button");
  del.className = "deleteBtn";
  del.innerText = "X";

  del.onclick = () => {
    div.remove();
    salvarNotas();
  };

  div.oninput = salvarNotas;

  div.appendChild(del);
  container.appendChild(div);
}

// Salvar notas no localStorage
function salvarNotas() {
  const textos = [...document.querySelectorAll(".note")].map(n => n.innerText.replace("X", ""));
  localStorage.setItem("pinnote", JSON.stringify(textos));
}

// Botão adicionar
addNoteBtn.onclick = () => criarNota("");

carregarNotas();