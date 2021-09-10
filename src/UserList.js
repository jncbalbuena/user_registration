import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {getUser} from './api'

export const UserList = () => {
    const [users, setUsers]=useState([])

    useEffect(()=>{
        const fetchUsers = async ()=>{
            const users = await getUser()
            setUsers(users)
        }
        fetchUsers()
    },[])
    return (
    <div className='container'>
        <div className='mt-3'>
            <h1>User List</h1>
            <table className='table table-striped mt-3'>
            <thead>
                <tr>
                <th>Last Name</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                users.map(user =>(
                 <tr key={user._id}>
                     <td>
                        {user.lastName}
                    </td>
                    <td>
                    <Link to={`/edit/${user._id}`}>Edit</Link>
                    </td>  
    
                 </tr>
                 ))
                }  
            </tbody>
            </table>
            </div>
        </div>
    );
};
