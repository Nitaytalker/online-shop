function user(){
    return <h1>user</h1>
}

function guest(){
    return <h1>guest</h1>
}

function people(){
    return <div> <user/> <guest/> </div>
}

const root = document.getElementById('root');

ReactDOM.render(  <div> <people/></div>
    ,root)