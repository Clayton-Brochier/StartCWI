var btn = document.querySelector("button");
var txt = document.querySelector("p");

btn.addEventListener("click", updateBtn);

function updateBtn() {
  if (btn.textContent === "Iniciar máquina") {
    btn.textContent = "Parar máquina";
    txt.textContent = "A máquina iniciou!";
  } else {
    btn.textContent = "Iniciar máquina";
    txt.textContent = "A máquina está parada.";
  }
}
//Essa função updateBtn é chamada quando o botão é clicado. Ela verifica o texto atual do botão usando btn.textContent. 
//Se o texto for "Iniciar máquina", ele muda o texto do botão para "Parar máquina" e o texto do parágrafo para "A máquina iniciou!". 
//Se o texto do botão for qualquer outra coisa, ele muda o texto do botão de volta para "Iniciar máquina" e o texto do parágrafo para "A máquina está parada".