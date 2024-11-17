const ul = document.querySelector("ul");
const input = document.querySelector("input");
const btn = document.querySelector("button");


function buttonClick() {

    const inputValue = input.value;


    input.value = " ";

    const li = document.createElement("li");
    const span = document.createElement("span");
    const btn2 = document.createElement("button");

    li.appendChild(span);
    li.appendChild(btn2);
    span.textContent = inputValue;
    btn2.textContent = "Delete";
    ul.appendChild(li);

    input.focus();

    btn2.addEventListener("click", () => {
        ul.removeChild(li);

    });


}
btn.addEventListener("click", buttonClick);


// Create three variables that hold references to the list (<ul>), <input>, and <button> elements.
// Create a function that will run in response to the button being clicked.
// Inside the function body, start off by storing the current value of the input element in a variable.
// Next, empty the input element by setting its value to an empty string — ''.
// Create three new elements — a list item (<li>), <span>, and <button>, and store them in variables.
// Append the span and the button as children of the list item.
// Set the text content of the span to the input element value you saved earlier, and the text content of the button to 'Delete'.
// Append the list item as a child of the list.
// Attach an event handler to the delete button so that, when clicked, it will delete the entire list item (<li>...</li>).
// Finally, use the focus() method to focus the input element ready for entering the next shopping list item.