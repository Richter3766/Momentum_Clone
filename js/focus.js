const focusForm = document.querySelector("#focus-form");
const input = focusForm.querySelector("#focus-input input");
const focusDiv = document.querySelector("#focus-item");
const delButton = focusDiv.querySelector("button");


function handleSubmit(event){
    event.preventDefault();
    const newFocus= input.value;
    input.value = ""
    localStorage.setItem("focus", newFocus);
    focusForm.classList.add(HIDDEN_CLASSNAME);
    focusDiv.classList.remove(HIDDEN_CLASSNAME);
    paintFocus(newFocus);
}

function paintFocus(newFocus){
    const focusText = focusDiv.querySelector("span");
    focusText.innerText = newFocus;
    delButton.innerText = "X"
}

function handleDel(event){
    event.preventDefault();
    localStorage.removeItem("focus");
    focusForm.classList.remove(HIDDEN_CLASSNAME);
    focusDiv.classList.add(HIDDEN_CLASSNAME);
}

focusForm.addEventListener("submit", handleSubmit);
delButton.addEventListener("click", handleDel);
const curFocus = localStorage.getItem("focus")

if(curFocus){
    focusForm.classList.add(HIDDEN_CLASSNAME);
    focusDiv.classList.remove(HIDDEN_CLASSNAME);
    paintFocus(curFocus);
}