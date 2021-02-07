function foo(x, y) {
    // console.log(x, y, arguments);
    for(var i = 0; i < arguments.length; i++){
        console.log(arguments[i]);
    }
}

foo(7, 17, 28);