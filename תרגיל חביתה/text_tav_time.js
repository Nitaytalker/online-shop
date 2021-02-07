var mytext = "Loremz aipsum dolorA sitA amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Ex";

function time_have_abc(text){
    var arrcounter=[];
    arrcounter.length=26;
    arrcounter.fill(0);
    var smalltext= text.toLowerCase();
    
    for(var i=0 ;i < text.length ; i++)
    {
        if( smalltext.charCodeAt(i) >= 'a'.charCodeAt(0) && smalltext.charCodeAt(i) <= 'z'.charCodeAt(0)){
            arrcounter[smalltext.charCodeAt(i)-'a'.charCodeAt(0)]++;
        }
    }
    console.log(arrcounter);
        
}

time_have_abc(mytext);

