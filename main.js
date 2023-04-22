import "./style.css";
import { fetchData } from "./js/fetchData";

import { barbaAnimation } from "./js/barbaAnimation";
function main() {
	fetchData();
  barbaAnimation()
}

// main();
window.addEventListener("DOMContentLoaded", main);
