const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const content2 = document.createElement("div");
const pTag1 = document.createElement("p");
const h3Tag1 = document.createElement("h3");

content2.appendChild(pTag1);
content2.appendChild(h3Tag1);

pTag1.style["color"] = "red";
pTag1.textContent = "I'm red!";

h3Tag1.style["color"] = "blue";
h3Tag1.textContent = "I'm blue!";

container.appendChild(content2);

const content3 = document.createElement("div");

content3.setAttribute("style", "background-color: pink; border: 5px solid black");
//content3.style["backgrond-color"] = "pink";
//content3.style["border-style"] = "solid";

const h1Tag1 = document.createElement("h1");
const pTag2 = document.createElement("p");
pTag2.textContent = "ME TOO!";
h1Tag1.textContent = "I'm in a div";

content3.appendChild(h1Tag1);
content3.appendChild(pTag2)
container.appendChild(content3);

//method 2
// const btn = document.querySelector("#btn");
// btn.onclick = () => alert("i hate my life");

//method 3
// const btn = document.querySelector("#btn");
// btn.addEventListener("click", () => {
//     alert("fuck this");
// });

// const btn = document.querySelector("#btn");

// btn.addEventListener("click", function (e) {
//     e.target.style.background = "blue";
// });

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
    // and for each one we add a 'click' listener
    button.addEventListener("click", () => {
        alert(button.id);
    });
});