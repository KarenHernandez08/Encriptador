//Selectores
const input = document.querySelector("#input-texto");
const btnEncriptar = document.querySelector("#btn-encriptar");
const btnDesencriptar = document.querySelector("#btn-desencriptar");
const mensaje = document.querySelector("#mensaje");
const btnCopiar = document.querySelector("#btn-copiar");

//
document.getElementById("div-aparece").style.display = 'none';
inputverificar();

//El momento que hace click y direcciona para un método que encripta
document.getElementById('btn-encriptar').onclick = (e) => {
  e.preventDefault();
  const textoEncriptado = encriptar(input.value.toLowerCase());
  mensaje.value = textoEncriptado;
  input.value = "";
  aparece()
}

// Captura el click a la hora de presionar el boton y direcciona a método que desencripta
document.getElementById('btn-desencriptar').onclick = (e) => {
  e.preventDefault();
  const textoDecriptado = decodificar(input.value);
  mensaje.value = textoDecriptado;
  input.value = "";
  aparece()
}

//  Para copiar el texto
document.getElementById('btn-copiar').onclick = (e) => {
  e.preventDefault();
  const mensaje = document.querySelector("#mensaje");
  mensaje.select();
  navigator.clipboard.writeText(mensaje.value)
  mensaje.value = "";
}

//Encripta el texto
function encriptar(stringEncriptado) {
  let matrixCode = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
  stringEncriptado = stringEncriptado.toLowerCase()
  for (let i = 0; i < matrixCode.length; i++) {
    if (stringEncriptado.includes(matrixCode[i][0])) {
      stringEncriptado = stringEncriptado.replaceAll(matrixCode[i][0], matrixCode[i][1])
    }
  }
  return stringEncriptado
}

//desencripta el texto
function decodificar(stringDesencriptado) {
  let matrixCode = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
  stringDesencriptado = stringDesencriptado.toLowerCase()
  for (let i = 0; i < matrixCode.length; i++) {
    if (stringDesencriptado.includes(matrixCode[i][1])) {
      stringDesencriptado = stringDesencriptado.replaceAll(matrixCode[i][1], matrixCode[i][0])
    }
  }
  return stringDesencriptado
}


function aparece() {
  document.getElementById("div-desaparece").style.display = 'none';
  document.getElementById("div-aparece").style.display = 'block';
}

function home() {
  document.getElementById("div-aparece").style.display = 'none';
  document.getElementById("div-desaparece").style.display = 'block';
}


function inputverificar() {
  var inputPalavra = document.querySelector("#input-texto");
  inputPalavra.addEventListener("keypress", function (e) {
    var keyCode = (e.keyCode ? e.keyCode : e.which);

    if (keyCode > 47 && keyCode < 120) {
      e.preventDefault();
    }
  });
}