function User(){
    return <h1>user</h1>
}

function Guest(){
    return <h1>guest</h1>
}

function People(){
    return <div> <User/> <Guest/> </div>
}

const root = document.getElementById('root');

ReactDOM.render(  <div> <People/></div>
    ,root)

    