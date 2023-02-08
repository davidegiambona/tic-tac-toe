let button = document.createElement("button");
button.setAttribute("onclick","remove()");
button.innerHTML = "remove";
document.body.appendChild(button);

let button1 = document.createElement("button");
button1.setAttribute("onclick","add()");
button1.innerHTML = "add";
document.body.appendChild(button1);

let contatore = 1;
let contatore2 = 7;
let table = document.createElement("table");
table.setAttribute("style", "border-collapse: collapse;");
table.setAttribute("id", "righe");
document.body.appendChild(table);

for(let i=0; i<2; i++){
    let tr=document.createElement("tr");
    
    table.appendChild(tr);
    if(i==0) {
       tr.setAttribute("style", "background-color: red;");
    } else if(i==1) {
       tr.setAttribute("style", "background-color: green;");
    }
    for(let j=0; j<3; j++){
      let td=document.createElement("td");
      tr.appendChild(td);
      td.innerHTML = contatore;
      td.setAttribute("style", "border: 1px solid; ")
      contatore++;
    }
}

function remove() { //fare rimozione
   let tr = document.getElementById("righe");
   tr.removeChild(tr.childNodes[0]); 
}

function add() {
  let tr = document.createElement("tr"); //riga | | |
  for(let i = 0;i<3;i++) {
   let td = document.createElement("td");
   td.setAttribute("style", "border: 1px solid; background-color: yellow; color: black; border-color: black")
   td.innerHTML = contatore2;
   tr.appendChild(td);
   contatore2++;
  }
  table.appendChild(tr);
}