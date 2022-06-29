import React, { useState } from 'react';
import '../styles/App.css'


function CounterFn(){

    let [firstName, setFirstName] = useState('');
    let [secondName, setSecondName] = useState('');
    let [email, setEmail] = useState('');
    let [arrayUsers, setArrayUsers] = useState([]);
   
    let addUser = () =>{
        
        if(firstName != '' && secondName != '' && email != ''){
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
        <div className="wrapper__users" key={pr.id}>
            <div>
                <label>{ pr.name }</label>
                <label style={{display: 'block', paddingTop: '10px'}} >{ pr.email }</label>
            </div>
           
            <div>
                <button onClick={() => removeUser(pr.id)} type="button">Remove user</button>
            </div>
        </div>
    ));

    return <div className='wrapper'>
        <div>
            <h1>List users</h1>

            <div className="wrapper__form">
                <label>First name</label>
                <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)}></input>

                <label>Second name</label>
                <input type="text" value={secondName} onChange={(e) => setSecondName(e.target.value)}></input>

                <label>Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>

                <button type="button" onClick={addUser}>Add</button>
            </div>
            
            
            { sortArrayUsers }
            
            
        </div>
        
    </div>
}



export default CounterFn;