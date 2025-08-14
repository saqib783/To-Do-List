let input = document.getElementById('inputBox')
let list = document.getElementById('listContainer')



function addtask(){
    if(input === ""){
        alert("You Must Write Something")
    }
    else{
        let li = document.createElement("li") 
        li.innerHTML = input.value;
        list.appendChilde(li)
        let span = document.createElement("span")
        span.innerHTML ="/u00d7";
        li.appendChild(span);
    }
    input.value = "";
    saveData();
}

list.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        saveData();
    }
    else(e.target.tagName === "span"){
        e.target.parentElement.remove();
        saveData();
    }
}, false)

function saveData(){
    localStorage.setItem("data",list.innerHTML)
}

function showList(){
    list.innerHTML=localStorage.getItem("data")
}
showList()
