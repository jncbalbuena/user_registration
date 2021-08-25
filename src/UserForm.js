import React from 'react'
import {useForm} from 'react-hook-form'
import { useHistory } from 'react-router-dom';

export const UserForm = ({user, onSubmit}) => {
    const {register, handleSubmit} = useForm({
        defaultValues: { lastName: user ? user.lastName : "",
            firstName: user ? user.firstName : "",
            midName: user ? user.midName : "",
            birthDate: user ? user.birthDate : "",
            gender: user ? user.gender : "",
            email: user ? user.email : "",
        },
    });
    const history=useHistory();

    const submitHandler=handleSubmit((data) => {
        onSubmit(data)
        history.push('/');
    }); 
    return (
        <div className= 'container'>
            <div className='mt-3'>
                <p style={{fontSize:15}}>Please fill in the details to register an account.</p>
                <hr></hr>
        <form onSubmit={submitHandler}>
            <div className="form-group">
                <label htmlFor="text">Last Name</label>
                <input className="form-control"
                       {...register('lastName')}
                       type="text"
                       id="lastName"
                       required
                />
                <label htmlFor="text">First Name</label>
                <input className="form-control"
                       {...register('firstName')}
                       type="text"
                       id="firstName"
                       required
                />
                <label htmlFor="text">Middle Name</label>
                <input className="form-control"
                       {...register('midName')}
                       type="text"
                       id="midName"
                       required
                />
                <label htmlFor="text">Birthdate:</label>
                <input className="form-control"
                       {...register('birthDate')}
                       type="date"
                       id="birthDate"
                       required
                />
                <label htmlFor="text">Gender</label>
                <select className="form-control"
                        {...register('gender')}
                        id="gender"
                        required
                >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="noanswer">Prefer not to say</option>
                </select>

                <label htmlFor="text">Email</label>
                <input className="form-control"
                       {...register('email')}
                       type="email"
                       id="email"
                       required
                />
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-primary">
                    Save
                </button>
            </div>
        </form>
        </div>
        </div>
    )
    }
