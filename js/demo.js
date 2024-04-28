const icon = document.querySelector(".header .container .icon");
const ul = document.querySelector(".header ul");

icon.addEventListener("click", () => {
	ul.classList.toggle("showElement");
});
