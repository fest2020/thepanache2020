// localStorage.setItem("event", "BrainTeasers")
// localStorage.setItem("subEvent", "OMEGATRIX")

function htmlDeptCheck(id){
    return`
    <div class="form-row m-b-55">
        <div class="name">Member ${id} Department</div>
        <div class="value">
            <div class="input-group">
                <input class="input--style-5 check extra" type="text" name="dept${id}" id="dept${id}">
                <label class="error dept${id} label--desc">Invalid department name</label>
            </div>
        </div>
    </div>`
}
function htmlNameCheck(id){
    return `
    <div class="form-row m-b-55">
        <div class="name">Member ${id} <br>Name</div>
        <div class="value">
            <div class="input-group">
                <input class="input--style-5 check extra" type="text" name="name${id}" id="name${id}">
                <label class="error name${id} label--desc">Invalid name</label>
            </div>
        </div>
    </div>`
}

const htmlTeamName= `
    <div class="form-row m-b-55">
        <div class="name">Team Name</div>
        <div class="value">
            <div class="input-group">
                <input class="input--style-5" type="text" name="teamName" id="teamName">
                <label class="error teamName label--desc">Field is Required</label>
            </div>
        </div>
    </div>`


const extra = document.querySelector(".add-extra")
const teamName = document.querySelector(".add-extra-team-name")
const addBtn = document.getElementById("add-btn")
const removeBtn = document.getElementById("remove-btn")
let members = 1
let maxMembers
let minMembers

addBtn.addEventListener("click", ()=>{
    members+=1
    // console.log(members)
    extraDiv = document.createElement("div")
    extraDiv.classList.add(`extra-div`)
    extraDiv.innerHTML += htmlNameCheck(members)
    extraDiv.innerHTML += htmlDeptCheck(members)
    extra.appendChild(extraDiv)
    if(members>=maxMembers){
        addBtn.disabled = true
        addBtn.classList.add("disabled")
    }
    removeBtn.disabled = false
    removeBtn.classList.remove("disabled")
})


function remove(){
    extras = document.querySelectorAll(`.extra-div`)
    length = extras.length
    extras[length-1].parentNode.removeChild(extras[length-1])
    members -= 1
    if(members!=maxMembers){
        addBtn.disabled = false
        addBtn.classList.remove("disabled")
    }
    if(members==minMembers){
        console.log(members,"disabled")
        removeBtn.disabled = true
        removeBtn.classList.add("disabled")
    }
    
}

// Get event an subevent name from local storage
let event = localStorage.getItem("Event")

// Dynamic Form generation
switch(event){
    case "th":
        document.querySelector(".none").classList.remove("none")
        minMembers = 4
        maxMembers = 5
        addBtn.style.display = "block"
        for(i=2;i<=4;i++){
            extra.innerHTML += htmlNameCheck(i)
            extra.innerHTML += htmlDeptCheck(i)
            members+=1
        }
        teamName.innerHTML += htmlTeamName
        break;
    case "debate":
        extra.innerHTML += htmlNameCheck(2)
        extra.innerHTML += htmlDeptCheck(2)
        teamName.innerHTML += htmlTeamName
        break
    case "wordective":
        extra.innerHTML += htmlNameCheck(2)
        extra.innerHTML += htmlDeptCheck(2)
        extra.innerHTML += htmlNameCheck(3)
        extra.innerHTML += htmlDeptCheck(3)
        teamName.innerHTML += htmlTeamName
        break
    case "skit":
        document.querySelector(".none").classList.remove("none")
        minMembers = 3
        maxMembers = 5
        addBtn.style.display = "block"
        for(i=2;i<=3;i++){
            extra.innerHTML += htmlNameCheck(i)
            extra.innerHTML += htmlDeptCheck(i)
            members+=1
        }//required part
        teamName.innerHTML += htmlTeamName
        break;
}



let eventname=localStorage.getItem("name")
let h2=document.querySelector(".title")
h2.innerHTML+=eventname+" Registration Form"

// Function for displaying toast
function myFunction() {
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

if(members==minMembers){
    console.log(members,"disabled")
    removeBtn.disabled = true
    removeBtn.classList.add("disabled")
}