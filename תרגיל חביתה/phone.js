
var phone_price=849,
avizar_price=39,
money;

function canBuy(phone_price,avizar_price,money,vat){
    var numofphone=0,numofavizar=0,sum=0;
    phone_price = phone_price*1.17;
    avizar_price =avizar_price*1.17;
    while(money >= phone_price){
        money -=phone_price;
        numofphone +=1;
        sum +=phone_price;
    }
    while(money >= avizar_price){
        money -= avizar_price;
        numofavizar +=1;
        sum +=avizar_price;
    }
    var n = sum.toFixed(2);
    console.log('you can purchase '+ numofphone +' smartphones and ' + numofavizar +' smartphone accessories with total cost of ' + n +' NIS ');
    
}


canBuy(849,39,4300);