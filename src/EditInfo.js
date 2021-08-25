import React, {useState, useEffect}from 'react'
import { UserForm } from './UserForm';


export const EditInfo = () => {
    const [user, setUser] = useState()
   
   useEffect(() => {
       setUser({

       });
   },[]);

   const onSubmit = (data) =>{
   alert(JSON.stringify(data))
};
return user ? (
        <div className= 'container'>
            <div className='mt-3'>
            <h1><strong>Edit Information</strong></h1>
                <UserForm user={user} onSubmit={onSubmit}/>
                </div>
             </div>
    ):(
<div>Loading ...</div>
    );
};       