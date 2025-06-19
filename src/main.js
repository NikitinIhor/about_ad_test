import "modern-normalize/modern-normalize.css";
import "./styles/main.scss";

import { animation } from "./js/animation.js";
import { modal } from "./js/modal.js";

document.addEventListener("DOMContentLoaded", () => {
  animation();
  modal();
});
