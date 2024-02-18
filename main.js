const inputEl = document.getElementById("input-box")
const addEl = document.getElementById("add-btn")
const containerEl = document.getElementById("list-container")

addEl.addEventListener("click", function(){
    if (inputEl.value === ''){
        alert("You must write something")
    } else {
        let li = document.createElement("li")
        li.innerHTML = inputEl.value
        containerEl.appendChild(li)

        let spa = document.createElement("span")
        spa.innerHTML = "\u00d7"
        li.appendChild(spa)
        inputEl.value = ""
    }
    saveData()
})


containerEl.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        saveData()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
        saveData()
    }
}, false)

function saveData(){
    localStorage.setItem("data", containerEl.innerHTML)
}

function displayData(){
    containerEl.innerHTML = localStorage.getItem("data")
}

displayData()