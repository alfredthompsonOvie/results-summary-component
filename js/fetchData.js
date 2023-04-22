import data from "../data.json";

export function fetchData() {
  const ul = document.querySelector(".summary__list");

  data.forEach(d => {
    const markup = `
    <li class="${d.category.toLowerCase()} result__item">
								<img src="${d.icon}" alt="${d.category} icon" />
								<span class="summary__result__title">${d.category}</span>
								<span class="score__breakdown"
									><span class="score__breakdown--actual"
										><strong>${d.score}</strong></span
									>
									/ 100</span
								>
							</li>
    `;
    ul.insertAdjacentHTML("beforeend", markup);
  })
}