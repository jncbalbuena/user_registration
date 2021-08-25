import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
export const UserList = () => {
    const [user, setUser]=useState([])

    useEffect(()=>{
        setUser([
            {lastName:"Balbuena", id:0},
            {lastName:"Santos", id:1}
        ])
    },[])
    return (
    <div className='container'>
        <div className='mt-3'>
            <h1>User List</h1>
            <table className='table table-striped mt-3'>
            <thead>
                <tr>
                    <th>Registered User</th>]
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                user.map(user =>(
                 <tr key={user._id}>
                     <td>
                         {user.lastName}
                     </td>
                     <td>
                        {user.firstName}
                     </td>
                     <td>
                        {user.midName}
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
    )
}
