import React from 'react'
import { UserForm } from './UserForm';
import { createUser } from './api';
import { useHistory } from "react-router-dom";

export const UserRegistration = () => {
    const history = useHistory()
   
    const onSubmit = async (data) => {
        await createUser(data)
        history.push("/")
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
