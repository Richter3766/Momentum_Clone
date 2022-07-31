const focusForm = document.querySelector("#focus-form");
const input = focusForm.querySelector("#focus-input input");
const focusDiv = document.querySelector("#focus-item");

function handleSubmit(event){
    event.preventDefault();
    const newFocus= input.value;
    input.value = ""
    localStorage.setItem("focus", newFocus);
    input.classList.add(HIDDEN_CLASSNAME);
    paintFocus(newFocus);
}

function paintFocus(newFocus){
    const focusText = focusDiv.querySelector("span:first-child");
    focusText.innerText = newFocus;
}

focusForm.addEventListener("submit", handleSubmit);
const curFocus = localStorage.getItem("focus")
if(curFocus){
    paintFocus(curFocus);
} else{
    focusForm.classList.remove(HIDDEN_CLASSNAME);
}