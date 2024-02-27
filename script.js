//function to create label
function create_label(tagname,attrname1,attrvalue1,attrname2,attrvalue2,content){
    let ele1 = document.createElement(tagname);
    ele1.setAttribute(attrname1,attrvalue1);
    ele1.setAttribute(attrname2,attrvalue2);
     ele1.innerHTML = content;
    return ele1
}

//function to create break
function create_break(){
    let break1 = document.createElement("br");
    return break1
}

//function to create input
function create_input(tagname,attrname3,attrvalue3,attrname4,attrvalue4,attrname5,attrvalue5){
    let ele2= document.createElement(tagname);
    ele2.setAttribute(attrname3,attrvalue3);
    ele2.setAttribute(attrname4,attrvalue4);
    ele2.setAttribute(attrname5,attrvalue5);
    return ele2
}
 let container = document.createElement("div");
 container.className = "container";

let heading = document.createElement("h1")//to create heading
heading.innerText = "Form Submition"
heading.className = "head"

let first_label = create_label("label","for","firstname","class","main","First Name:");
let first_break = create_break();
let first_input = create_input("input","type","text","id","firstname","placeholder","First Name");

let after_break1 = create_break();

let last_label = create_label("label","for","lastname","class","main","Last Name:");
let last_break = create_break();
let last_input = create_input("input","type","text","id","lastname","placeholder","last Name");

let after_break2 = create_break();

let address1_label = create_label("label","for","addressline1","class","main","Address Line 1:");
let address1_break = create_break();
let address1_input = create_input("input","type","text","id","addressline1","placeholder","Address Line 1");

let after_break3 = create_break();

let address2_label = create_label("label","for","addressline2","class","main","Address Line 2:");
let address2_break = create_break();
let address2_input = create_input("input","type","text","id","addressline2","placeholder","Address Line 2");

let after_break4 = create_break();

let pin_label = create_label("label","for","pin","class","main","Pin:");
let pin_break = create_break();
let pin_input = create_input("input","type","text","id","pin","placeholder","Pin");

let after_break5 = create_break();

//code to create radio button

let gender_label = document.createElement("label");
gender_label.innerHTML = "Gender"
gender_label.className = "main1"

let after_break6 = create_break();

let male_input = document.createElement("input");
male_input.setAttribute("type","radio");
male_input.setAttribute("id","male");
male_input.setAttribute("name","gender");

let male_label = document.createElement("label");
male_label.setAttribute("for","male");
male_label.innerText = "Male"
male_label.className = "gender"

let female_input = document.createElement("input");
female_input.setAttribute("type","radio");
female_input.setAttribute("id","female");
female_input.setAttribute("name","gender");

let female_label = document.createElement("label");
female_label.setAttribute("for","female");
female_label.innerText = "Female"
female_label.className = "gender"

let after_break = create_break();

//code to create checkbox

let food_label = document.createElement("label");
food_label.innerHTML= "Choice of Food:(must chose at least 2 of 5 options)"
food_label.className = "main1"

let after_break7 = create_break();

let north_input = document.createElement("input");
north_input.setAttribute("type","checkbox");
north_input.setAttribute("id","northindia");

let north_label = document.createElement("label");
north_label.setAttribute("for","northindia");
north_label.innerText = "North India"
north_label.className = "foodchoice"

let after_break8 = create_break();

let south_input = document.createElement("input");
south_input.setAttribute("type","checkbox");
south_input.setAttribute("id","southindia");

let south_label = document.createElement("label");
south_label.setAttribute("for","southindia");
south_label.innerText = "South India"
south_label.className = "foodchoice"

let after_break9 = create_break();

let chinese_input = document.createElement("input");
chinese_input.setAttribute("type","checkbox");
chinese_input.setAttribute("id","chinese");

let chinese_label = document.createElement("label");
chinese_label.setAttribute("for","chinese");
chinese_label.innerText = "Chinese"
chinese_label.className = "foodchoice"

let after_break10 = create_break();

let japanese_input = document.createElement("input");
japanese_input.setAttribute("type","checkbox");
japanese_input.setAttribute("id","japanese");

let japanese_label = document.createElement("label");
japanese_label.setAttribute("for","japanese");
japanese_label.innerText = "Japanese"
japanese_label.className = "foodchoice"

let after_break11 = create_break();

let seafood_input = document.createElement("input");
seafood_input.setAttribute("type","checkbox");
seafood_input.setAttribute("id","seafood");

let seafood_label = document.createElement("label");
seafood_label.setAttribute("for","seafood");
seafood_label.innerText = "Sea Food"
seafood_label.className = "foodchoice"

let after_break12 = create_break();

let state_label = create_label("label","for","state","class","main","State:");   //code to create state
let state_break = create_break();
let state_input = create_input("input","type","text","id","state","placeholder","State");

let after_break13 = create_break();

let country_label = create_label("label","for","country","class","main","Country:");   //code to create country
let country_break = create_break();
let country_input = create_input("input","type","text","id","country","placeholder","Country");

let after_break14 = create_break();

let button = document.createElement("button");
button.setAttribute("type","button");
button.setAttribute("value","button");
button.addEventListener("click", function() {
    buttonclick(); //function call for button click 
    resetForm(); //function call for reset
});
button.innerText = "Submit"

container.append(heading,first_label,first_break,first_input,after_break1,last_label,last_break,last_input,after_break2,address1_label,address1_break,address1_input,
    after_break3,address2_label,address2_break,address2_input,after_break4,pin_label,pin_break,pin_input,after_break5,gender_label,after_break6,male_input,male_label,
    female_input,female_label,after_break,food_label,after_break7,north_input,north_label,after_break8,south_input,south_label,after_break9,chinese_input,chinese_label,after_break10,
    japanese_input,japanese_label,after_break11,seafood_input,seafood_label,after_break12,state_label,state_break,state_input,after_break13,country_label,country_break,country_input,after_break14,button);
 
    document.body.append(container);
    //code for creating table to display the form data

let heading2 = document.createElement("h1");
heading2.innerHTML = "Temporary Database"
heading2.className = "head1"

document.body.append(heading2)

    let table = document.createElement("table");
    let thead = document.createElement("thead");
    let th_row = document.createElement("tr");
   
    function create_th(tagname,content){
       let ele3 = document.createElement(tagname);
       ele3.innerText = content
       return ele3
   }
   let th1 = create_th("th","First Name");
   let th2 = create_th("th","Last Name");
   let th3 = create_th("th","Address line 1");
   let th4 = create_th("th","Address line 2");
   let th5 = create_th("th","Pin");
   let th6 = create_th("th","Gender");
   let th7 = create_th("th","Food");
   let th8 = create_th("th","State");
   let th9 = create_th("th","Country");
   
   th_row.append(th1,th2,th3,th4,th5,th6,th7,th8,th9);
   thead.append(th_row);
   
   let tbody = document.createElement("tbody");
   let tb_row = document.createElement("tr");
   
   let td1 = document.createElement("td");
   let td2 = document.createElement("td");
   let td3 = document.createElement("td");
   let td4 = document.createElement("td");
   let td5 = document.createElement("td");
   let td6 = document.createElement("td");
   let td7 = document.createElement("td");
   let td8 = document.createElement("td");
   let td9 = document.createElement("td");

function buttonclick(){

    
let first = document.getElementById("firstname").value;
    td1.innerHTML= first

    let last = document.getElementById("lastname").value;
    td2.innerHTML= last

    let address1 = document.getElementById("addressline1").value;
    td3.innerHTML= address1

    let address2 = document.getElementById("addressline2").value;
    td4.innerHTML= address2

    let pin = document.getElementById("pin").value;
    td5.innerHTML= pin

    let gender = document.querySelector('input[type="radio"]:checked');
    td6.innerHTML= gender ? gender.id : "" ;

    let food = document.querySelectorAll('input[type="checkbox"]:checked');
    for(i=0;i<=food.length;i++){
        if(food[i]){
        td7.innerHTML += food[i].id +", "
        }
    }
    let state1 = document.getElementById("state").value;
    console.log(state1)
    td8.innerHTML= state1

    let country1 = document.getElementById("country").value;
    td9.innerHTML= country1

}
//function to reset the form 
function resetForm() {
    document.getElementById("firstname").value = "";
    document.getElementById("lastname").value = "";
    document.getElementById("addressline1").value = "";
    document.getElementById("addressline2").value = "";
    document.getElementById("pin").value = "";
    document.getElementById("male").checked = false;
    document.getElementById("female").checked = false;
    document.getElementById("northindia").checked = false;
    document.getElementById("southindia").checked = false;
    document.getElementById("chinese").checked = false;
    document.getElementById("japanese").checked = false;
    document.getElementById("seafood").checked = false;
    document.getElementById("state").value = "";
    document.getElementById("country").value = "";
}



tb_row.append(td1,td2,td3,td4,td5,td6,td7,td8,td9);
tbody.append(tb_row);
table.append(thead,tbody);

document.body.append(table);
