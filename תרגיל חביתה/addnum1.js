var allnumadd = [];
var isFirst = true;

function myAdd() {
    if (isFirst) {
        // add to html input for number  to id=addLine
        document.getElementById("addLine").innerHTML = `<input id='numinput' type="number"></input>`;
        isFirst = false;
        return;
    }

    var newnum = document.getElementById('numinput').value;
    allnumadd.push(newnum);
    // add + and after add input number and buttom '=' to id=addLine
    document.getElementById("addLine").innerHTML = `<input value='${allnumadd[0]}' type="number"></input>`;
    for (var i = 1; i < allnumadd.length - 1; i++) {
        document.getElementById("addLine").innerHTML += ` + <input value='${allnumadd[i]}' type="number"></input>`;
    }

    document.getElementById("addLine").innerHTML += ` + <input id='numinput' type="number"></input>  <button onclick='myresult()' id='answerbutton'>=</button>`;
}

function myReset() {
    isFirst = true;
    var num;
    // remove all line from id=addLine
    document.getElementById("addLine").innerHTML = ``;
    console.log(allnumadd);
    var x = allnumadd.length;
    for (var i = 0; i < x; i++) {
        allnumadd.pop();
    }
    console.log(allnumadd);
}

function myresult() {
    var x = getValues();
    var time=0;
    console.log(x);             
    var sum = 0;
    document.getElementById("answerList").innerHTML += `<li>`
    for (var num of x) {
        time++;
        document.getElementById("answerList").innerHTML += `${num} `;
        sum =sum + num;
        if (time != x.length) {
            document.getElementById("answerList").innerHTML += `+`;
        }
    }
    document.getElementById("answerList").innerHTML += `= ${sum}</li>`;
}

function getValues() {
    var values = [];
    for (var input of document.querySelectorAll('input')) {
        values.push(Number(input.value));
    }
    return values;

}