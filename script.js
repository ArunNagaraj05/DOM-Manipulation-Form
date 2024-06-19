function data(event){
    event.preventDefault()
    var fname = document.getElementById("first-name").value;
    console.log(fname)
    let lname = document.getElementById("last-name").value;
    console.log(lname)
    let email = document.getElementById("email").value;
    console.log(email)
    let address = document.getElementById("address").value;
    console.log(address)
    let pin = document.getElementById("pincode").value;
    console.log(pin)
    let gender = document.querySelector('input[name="gender"]:checked').value;
    console.log(gender)
    let getFoods = document.getElementsByName("food")
    let checkedFoods =""
    for(let i=0; i<getFoods.length; i++){
        if(getFoods[i].checked){
            checkedFoods+=getFoods[i].value+", "
        }
    }
    let state = document.getElementById("state").value;
    console.log(state)
    let country = document.getElementById("country").value;
    console.log(country)
   

    tableBody(fname,lname,email,address,pin,gender,checkedFoods,state,country)
}
function getCheckbox(){
    let check = 0
    let getFoods = document.getElementsByName("food")
    for(let i=0; i<getFoods.length; i++){
        if(getFoods[i].checked){
            check+=1
        }
    }
    if(check<2){
        alert("atleast select two foods")
    }else{
        data(event)
    }
}



function tableBody(fname,lname,email,address,pin,gender,checkedFoods,state,country){
let tBody = document.getElementById("data")

let newRow = document.createElement("tr");


let first = document.createElement("td");
first.innerText = fname;
newRow.appendChild(first);

let last = document.createElement("td");
last.innerText = lname;
newRow.appendChild(last);

let mail = document.createElement("td");
mail.innerText = email;
newRow.appendChild(mail);

let addr = document.createElement("td");
addr.innerText = address;
newRow.appendChild(addr);

let pincode = document.createElement("td");
pincode.innerText = pin;
newRow.appendChild(pincode);

let gen = document.createElement("td");
gen.innerText = gender;
newRow.appendChild(gen);

let food = document.createElement("td");
food.innerText = checkedFoods;
newRow.appendChild(food);

let stat = document.createElement("td");
stat.innerText = state;
newRow.appendChild(stat);

let count = document.createElement("td");
count.innerText = country;
newRow.appendChild(count);



tBody.appendChild(newRow);
}
