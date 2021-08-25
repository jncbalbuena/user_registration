import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
export const UserList = () => {
    const [items, setItems]=useState([])

    useEffect(()=>{
        setItems([
            {text:"Balbuena", id:0},
            {text:"Santos", id:1}
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
                items.map(info =>(
                 <tr key={info._id}>
                     <td>
                         {info.lastName}
                     </td>
                     <td>
                        {info.firstName}
                     </td>
                     <td>
                        {info.midName}
                    </td>    
                    <td>
                    <Link to={`/edit/${info._id}`}>Edit</Link>
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
