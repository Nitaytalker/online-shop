var items=0;

function addlist(){
    var newadd = getValues();
    document.getElementById('addlist').innerHTML += `<footer id='item${items}' > <button onclick="removeitem('item${items}')">מחיקת מוצר</button> ${newadd[0]} 
    <input type="checkbox"  id='item${items}'  name="Product${items}" value="${newadd[items]}"> <br> </footer>  `;
    
    items++;
}

function getValues() {
    var values = [];
    for (var input of document.querySelectorAll('input')) {
        values.push(input.value);
    }
    return values;

}


function removeitem(myid){
    console.log(myid);
    // event.target.parentNode;
    // var pos = document.getElementById
    document.getElementById(myid).remove();
}

function deleteItemsSelect(){
    var todelete = document.querySelectorAll('cheackbox');
    console.log(todelete.checked);
}