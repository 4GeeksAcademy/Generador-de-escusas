import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronombre = ["Un ", "El ", "Mi "];
  let sujeto = [
    " gato ",
    " león ",
    " perro ",
    " loro ",
    " Alien ",
    " Demogorgon "
  ];
  let acción = [
    " rompió mi ",
    " destrozo mi ",
    " disolvió con ácido mi ",
    " se comió mi "
  ];
  let objeto = [
    " tarea ",
    " juguete ",
    " coche ",
    " ropa ",
    " comida ",
    " ordenador ",
    " zapatilla "
  ];
  let donde = [
    " mientras me duchaba ",
    " mientras dormia ",
    " mientras jugaba ",
    "mientras cocinaba "
  ];

  let random1 = Math.floor(Math.random() * pronombre.length);
  let random2 = Math.floor(Math.random() * sujeto.length);
  let random3 = Math.floor(Math.random() * acción.length);
  let random4 = Math.floor(Math.random() * objeto.length);
  let random5 = Math.floor(Math.random() * donde.length);

  document.querySelector("#excuse").innerHTML =
    pronombre[random1] +
    sujeto[random2] +
    acción[random3] +
    objeto[random4] +
    donde[random5];

  document.getElementById("obtExcusa").addEventListener("click", window.onload);
};
