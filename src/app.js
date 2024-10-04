/* eslint-disable */
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

  let rdm1 = Math.floor(Math.random() * pronombre.length);
  let rdm2 = Math.floor(Math.random() * sujeto.length);
  let rdm3 = Math.floor(Math.random() * acción.length);
  let rdm4 = Math.floor(Math.random() * objeto.length);
  let rdm5 = Math.floor(Math.random() * donde.length);

  document.querySelector("#excuse").innerHTML =
    pronombre[rdm1] + sujeto[rdm2] + acción[rdm3] + objeto[rdm4] + donde[rdm5];
};
