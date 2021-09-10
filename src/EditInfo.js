import React, {useState, useEffect}from 'react'
import { useHistory, useRouteMatch } from 'react-router-dom';
import { getUser,updateUser  } from './api';
import { UserForm } from './UserForm';


export const EditInfo = () => {
    const match = useRouteMatch()
    const [user, setUser] = useState()
    const history = useHistory()
   
   useEffect(() => {
       const fetchUsers = async() =>{
           const user = await getUser(match.params.id)
           setUser(user)
       }
       fetchUsers()
   },[]);

   const onSubmit =async (data) =>{
    await updateUser(data, match.params.id)
    history.push("/")
}
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