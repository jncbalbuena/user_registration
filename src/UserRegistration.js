import React from 'react'
import { UserForm } from './UserForm';
export const UserRegistration = () => {
   
    const onSubmit = (data) => {
        alert(JSON.stringify(data));
    };
    return (
        <div className= 'container'>
            <div className='mt-3'>
                <h1><strong>USER REGISTRATION</strong></h1>
                <UserForm onSubmit={onSubmit}/>
        </div>
        </div>
    );
};
