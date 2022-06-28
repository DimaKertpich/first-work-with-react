import React, { useState } from 'react';

function CounterFn(){

    let [firstName, setFirstName] = useState(null);
    let [secondName, setSecondName] = useState(null);
    let [email, setEmail] = useState(null);
    let [arrayUsers, setArrayUsers] = useState([]);
   
    let addUser = () =>{
        
        if(firstName != null && secondName != null && email != null){
            let fullName = firstName + ' ' + secondName;
            let setId = Math.floor(Math.random() * (100000 - 1)) + 1;
            setArrayUsers([...arrayUsers, {name: fullName, email, id: setId}]);
            setFirstName(firstName = '');
            setSecondName(secondName = '');
            setEmail(email = '');
        }
    }

    let removeUser = (id) =>{
        setArrayUsers(arrayUsers.filter(pr => pr.id !== id));
    }

    let sortArrayUsers = arrayUsers.map(pr =>(
        <div key={pr.id}>
            <label>{ pr.name }</label>
            <br/>
            <label>{ pr.email }</label>
            <br/>
            <button onClick={() => removeUser(pr.id)} type="button">Remove user</button>
        </div>
    ));

    return <div>
        <div>
            <h1>List users</h1>
        </div>
        <div>
            <label>First name</label>
            <br/>
            <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)}></input>
            <br/>
            <label>Second name</label>
            <br/>
            <input type="text" value={secondName} onChange={(e) => setSecondName(e.target.value)}></input>
            <br/>
            <label>Email</label>
            <br/>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>

            <button type="button" onClick={addUser}>Add</button>
        </div>
        <div>
            { sortArrayUsers }
        </div>
    </div>
}



export default CounterFn;