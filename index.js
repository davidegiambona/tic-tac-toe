
let header1 = document.createElement("h1");
header1.innerHTML = "TIC TAC TOE";
header1.setAttribute("style", "color: lime; font-family: cursive;");
document.body.appendChild(header1);

let input = document.createElement("input");
let input2 = document.createElement("input");
let input3 = document.createElement("input");
let input4 = document.createElement("input");
let input5 = document.createElement("input");
let input6 = document.createElement("input");
let input7 = document.createElement("input");
let input8 = document.createElement("input");
let input9 = document.createElement("input");

input.setAttribute("type", "text");
input2.setAttribute("type", "text");
input3.setAttribute("type", "text");
input4.setAttribute("type", "text");
input5.setAttribute("type", "text");
input6.setAttribute("type", "text");
input7.setAttribute("type", "text");
input8.setAttribute("type", "text");
input9.setAttribute("type", "text");

input.setAttribute("style", "width: 30px; height: 30px; text-align: center;");
input2.setAttribute("style", "width: 30px; height: 30px; text-align: center;");
input3.setAttribute("style", "width: 30px; height: 30px; text-align: center;");
input4.setAttribute("style", "position: relative; top: 36px;right: 114px; width: 30px; height: 30px; text-align: center;");
input5.setAttribute("style", "position: relative; top: 36px;right: 114px; width: 30px; height: 30px; text-align: center;");
input6.setAttribute("style", "position: relative; top: 36px;right: 114px; width: 30px; height: 30px; text-align: center;");
input7.setAttribute("style", "position: relative; top: 72px;right: 228px; width: 30px; height: 30px; text-align: center;");
input8.setAttribute("style", "position: relative; top: 72px;right: 228px; width: 30px; height: 30px; text-align: center;");
input9.setAttribute("style", "position: relative; top: 72px;right: 228px; width: 30px; height: 30px; text-align: center;");

input.setAttribute("id", "input");
input2.setAttribute("id", "input2");
input3.setAttribute("id", "input3");
input4.setAttribute("id", "input4");
input5.setAttribute("id", "input5");
input6.setAttribute("id", "input6");
input7.setAttribute("id", "input7");
input8.setAttribute("id", "input8");
input9.setAttribute("id", "input9");

input.setAttribute("onclick", "myinput1(); checkWinner();");
input2.setAttribute("onclick", "myinput2(); checkWinner();");
input3.setAttribute("onclick", "myinput3(); checkWinner();");
input4.setAttribute("onclick", "myinput4(); checkWinner();");
input5.setAttribute("onclick", "myinput5(); checkWinner();");
input6.setAttribute("onclick", "myinput6(); checkWinner();");
input7.setAttribute("onclick", "myinput7(); checkWinner();");
input8.setAttribute("onclick", "myinput8(); checkWinner();");
input9.setAttribute("onclick", "myinput9(); checkWinner();");

input.setAttribute("readonly", "");
input2.setAttribute("readonly", "");
input3.setAttribute("readonly", "");
input4.setAttribute("readonly", "");
input5.setAttribute("readonly", "");
input6.setAttribute("readonly", "");
input7.setAttribute("readonly", "");
input8.setAttribute("readonly", "");
input9.setAttribute("readonly", "");

document.body.appendChild(input);
document.body.appendChild(input2);
document.body.appendChild(input3);
document.body.appendChild(input4);
document.body.appendChild(input5);
document.body.appendChild(input6);
document.body.appendChild(input7);
document.body.appendChild(input8);
document.body.appendChild(input9);

document.body.setAttribute("style", "background-color: black;");

let reset = document.createElement("button");
reset.innerHTML = "Reset";
reset.setAttribute("style", "color: lime; background-color: black; border-color: lime; position: relative; top: 110px; right: 343px;");
reset.setAttribute("onclick", "resetGame()");
document.body.appendChild(reset);

function resetGame() {
    location.reload(); //come il pulsante di ricarica del browser.
    document.getElementById("input").value = ' ';
    document.getElementById("input2").value = ' ';
    document.getElementById("input3").value = ' ';
    document.getElementById("input4").value = ' ';
    document.getElementById("input5").value = ' ';
    document.getElementById("input6").value = ' ';
    document.getElementById("input7").value = ' ';
    document.getElementById("input8").value = ' ';
    document.getElementById("input9").value = ' ';
}

function checkWinner() {
    let inp, inp2, inp3, inp4, inp5, inp6, inp7, inp8, inp9;
     inp = document.getElementById("input").value;
     inp2 = document.getElementById("input2").value;
     inp3 = document.getElementById("input3").value;
     inp4 = document.getElementById("input4").value;
     inp5 = document.getElementById("input5").value;
     inp6 = document.getElementById("input6").value;
     inp7 = document.getElementById("input7").value;
     inp8 = document.getElementById("input8").value;
     inp9 = document.getElementById("input9").value;

    if ((inp == 'x' || inp == 'X') && (inp2 == 'x' ||
    inp2 == 'X') && (inp3 == 'x' || inp3 == 'X')) {
        document.getElementById('print')
        .innerHTML = "Player X won";
        document.getElementById("input4").disabled = true;
        document.getElementById("input5").disabled = true;
        document.getElementById("input6").disabled = true;
        document.getElementById("input7").disabled = true;
        document.getElementById("input8").disabled = true;
        document.getElementById("input9").disabled = true;
        window.alert('Player X won');
    }
    else if ((inp == 'X' ||inp == 'X') && (inp4 == 'X' ||
        inp4 == 'X') && (inp7 == 'X' || inp7 == 'X')) {
            document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("input2").disabled = true;
        document.getElementById("input3").disabled = true;
        document.getElementById("input5").disabled = true;
        document.getElementById("input6").disabled = true;
        document.getElementById("input8").disabled = true;
        document.getElementById("input9").disabled = true;
        window.alert('Player X won');
    }
    else if ((inp7 == 'X' || inp7 == 'X') && (inp8 == 'X' ||
        inp8 == 'X') && (inp9 == 'X' || inp9 == 'X')) {
            document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("input").disabled = true;
        document.getElementById("input2").disabled = true;
        document.getElementById("input3").disabled = true;
        document.getElementById("input4").disabled = true;
        document.getElementById("input5").disabled = true;
        document.getElementById("input6").disabled = true;
        window.alert('Player X won');
    }
    else if ((inp3 == 'X' || inp3 == 'X') && (inp6 == 'X' ||
        inp6 == 'X') && (inp9 == 'X' || inp9 == 'X')) {
            document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("input").disabled = true;
        document.getElementById("input2").disabled = true;
        document.getElementById("input4").disabled = true;
        document.getElementById("input5").disabled = true;
        document.getElementById("input7").disabled = true;
        document.getElementById("input8").disabled = true;
        window.alert('Player X won');
    }
    else if ((inp == 'X' || inp == 'X') && (inp5 == 'X' ||
        inp5 == 'X') && (inp9 == 'X' || inp9 == 'X')) {
            document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("input2").disabled = true;
        document.getElementById("input3").disabled = true;
        document.getElementById("input4").disabled = true;
        document.getElementById("input5").disabled = true;
        document.getElementById("input7").disabled = true;
        document.getElementById("input8").disabled = true;
        window.alert('Player X won');
    }
    else if ((inp3 == 'X' || inp3 == 'X') && (inp5 == 'X' ||
        inp5 == 'X') && (inp7 == 'X' || inp7 == 'X')) {
            document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("input").disabled = true;
        document.getElementById("input2").disabled = true;
        document.getElementById("input4").disabled = true;
        document.getElementById("input6").disabled = true;
        document.getElementById("input8").disabled = true;
        document.getElementById("input9").disabled = true;
        window.alert('Player X won');
    }
    else if ((inp2 == 'X' || inp2 == 'X') && (inp5 == 'X' ||
        inp5 == 'X') && (inp8 == 'X' || inp8 == 'X')) {
            document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("input").disabled = true;
        document.getElementById("input3").disabled = true;
        document.getElementById("input4").disabled = true;
        document.getElementById("input6").disabled = true;
        document.getElementById("input7").disabled = true;
        document.getElementById("input9").disabled = true;
        window.alert('Player X won');
    }
    else if ((inp4 == 'X' || inp4 == 'X') && (inp5 == 'X' ||
        inp5 == 'X') && (inp6 == 'X' || inp6 == 'X')) {
            document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("input").disabled = true;
        document.getElementById("input2").disabled = true;
        document.getElementById("input3").disabled = true;
        document.getElementById("input7").disabled = true;
        document.getElementById("input8").disabled = true;
        document.getElementById("input9").disabled = true;
        window.alert('Player X won');
    }
 
    // Checking of Player X finish
    // Checking for Player 0 starts, Is player 0 won or
    // not and after that disabled all the other fields
    if ((inp == '0' || inp == '0') && (inp2 == '0' ||
    inp2 == '0') && (inp3 == '0' || inp3 == '0')) {
        document.getElementById('print')
        .innerHTML = "Player 0 won";
        document.getElementById("input4").disabled = true;
        document.getElementById("input5").disabled = true;
        document.getElementById("input6").disabled = true;
        document.getElementById("input7").disabled = true;
        document.getElementById("input8").disabled = true;
        document.getElementById("input9").disabled = true;
        window.alert('Player 0 won');
    }
    else if ((inp == '0' ||inp == '0') && (inp4 == '0' ||
        inp4 == '0') && (inp7 == '0' || inp7 == '0')) {
            document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("input2").disabled = true;
        document.getElementById("input3").disabled = true;
        document.getElementById("input5").disabled = true;
        document.getElementById("input6").disabled = true;
        document.getElementById("input8").disabled = true;
        document.getElementById("input9").disabled = true;
        window.alert('Player 0 won');
    }
    else if ((inp7 == '0' || inp7 == '0') && (inp8 == '0' ||
        inp8 == '0') && (inp9 == '0' || inp9 == '0')) {
            document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("input").disabled = true;
        document.getElementById("input2").disabled = true;
        document.getElementById("input3").disabled = true;
        document.getElementById("input4").disabled = true;
        document.getElementById("input5").disabled = true;
        document.getElementById("input6").disabled = true;
        window.alert('Player 0 won');
    }
    else if ((inp3 == '0' || inp3 == '0') && (inp6 == '0' ||
        inp6 == '0') && (inp9 == '0' || inp9 == '0')) {
            document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("input").disabled = true;
        document.getElementById("input2").disabled = true;
        document.getElementById("input4").disabled = true;
        document.getElementById("input5").disabled = true;
        document.getElementById("input7").disabled = true;
        document.getElementById("input8").disabled = true;
        window.alert('Player 0 won');
    }
    else if ((inp == '0' || inp == '0') && (inp5 == '0' ||
        inp5 == '0') && (inp9 == '0' || inp9 == '0')) {
            document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("input2").disabled = true;
        document.getElementById("input3").disabled = true;
        document.getElementById("input4").disabled = true;
        document.getElementById("input5").disabled = true;
        document.getElementById("input7").disabled = true;
        document.getElementById("input8").disabled = true;
        window.alert('Player 0 won');
    }
    else if ((inp3 == '0' || inp3 == '0') && (inp5 == '0' ||
        inp5 == '0') && (inp7 == '0' || inp7 == '0')) {
            document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("input").disabled = true;
        document.getElementById("input2").disabled = true;
        document.getElementById("input4").disabled = true;
        document.getElementById("input6").disabled = true;
        document.getElementById("input8").disabled = true;
        document.getElementById("input9").disabled = true;
        window.alert('Player 0 won');
    }
    else if ((inp2 == '0' || inp2 == '0') && (inp5 == '0' ||
        inp5 == '0') && (inp8 == '0' || inp8 == '0')) {
            document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("input").disabled = true;
        document.getElementById("input3").disabled = true;
        document.getElementById("input4").disabled = true;
        document.getElementById("input6").disabled = true;
        document.getElementById("input7").disabled = true;
        document.getElementById("input9").disabled = true;
        window.alert('Player 0 won');
    }
    else if ((inp4 == '0' || inp4 == '0') && (inp5 == '0' ||
        inp5 == '0') && (inp6 == '0' || inp6 == '0')) {
            document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("input").disabled = true;
        document.getElementById("input2").disabled = true;
        document.getElementById("input3").disabled = true;
        document.getElementById("input7").disabled = true;
        document.getElementById("input8").disabled = true;
        document.getElementById("input9").disabled = true;
        window.alert('Player 0 won');
    }
 
    // Checking of Player 0 finish
    // Here, Checking about Tie
    else if ((inp == 'X' || inp == '0') && (inp2 == 'X'
        || inp2 == '0') && (inp3 == 'X' || inp3 == '0') &&
        (inp4 == 'X' || inp4 == '0') && (inp5 == 'X' ||
        inp5 == '0') && (inp6 == 'X' || inp6 == '0') &&
        (inp7 == 'X' || inp7 == '0') && (inp8 == 'X' ||
        inp8 == '0') && (inp9 == 'X' || inp9 == '0')) {
            document.getElementById('print').innerHTML = "Match Tie";
            window.alert('Match Tie');
    } else {
 
        // Here, Printing Result
        if (flag == 1) {
            document.getElementById('print')
                .innerHTML = "Player X Turn";
        }
        else {
            document.getElementById('print')
                .innerHTML = "Player 0 Turn";
        }
    }
}

flag = 1;
function myinput1() {
    if (flag == 1) {
        document.getElementById("input").value = "X";
        document.getElementById("input").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("input").value = "0";
        document.getElementById("input").disabled = true;
        flag = 1;
    }
}
 
function myinput2() {
    if (flag == 1) {
        document.getElementById("input2").value = "X";
        document.getElementById("input2").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("input2").value = "0";
        document.getElementById("input2").disabled = true;
        flag = 1;
    }
}
 
function myinput3() {
    if (flag == 1) {
        document.getElementById("input3").value = "X";
        document.getElementById("input3").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("input3").value = "0";
        document.getElementById("input3").disabled = true;
        flag = 1;
    }
}
 
function myinput4() {
    if (flag == 1) {
        document.getElementById("input4").value = "X";
        document.getElementById("input4").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("input4").value = "0";
        document.getElementById("input4").disabled = true;
        flag = 1;
    }
}
 
function myinput5() {
    if (flag == 1) {
        document.getElementById("input5").value = "X";
        document.getElementById("input5").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("input5").value = "0";
        document.getElementById("input5").disabled = true;
        flag = 1;
    }
}
 
function myinput6() {
    if (flag == 1) {
        document.getElementById("input6").value = "X";
        document.getElementById("input6").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("input6").value = "0";
        document.getElementById("input6").disabled = true;
        flag = 1;
    }
}
 
function myinput7() {
    if (flag == 1) {
        document.getElementById("input7").value = "X";
        document.getElementById("input7").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("input7").value = "0";
        document.getElementById("input7").disabled = true;
        flag = 1;
    }
}
 
function myinput8() {
    if (flag == 1) {
        document.getElementById("input8").value = "X";
        document.getElementById("input8").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("input8").value = "0";
        document.getElementById("input8").disabled = true;
        flag = 1;
    }
}
 
function myinput9() {
    if (flag == 1) {
        document.getElementById("input9").value = "X";
        document.getElementById("input9").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("input9").value = "0";
        document.getElementById("input9").disabled = true;
        flag = 1;
    }
}