import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteUser, getAllUsers } from '../Api/Api'
import { toast } from 'react-toastify'

const HomePage = () => {
    const [users, setUsers] = useState([])
    const getUsers = async () => {
        let response = await getAllUsers()
        setUsers(response?.data)
    }

    //for delete user
  const deleteUserData=async(id)=>{
    await deleteUser(id)
    getUsers()
    toast.error('delete successfully')
    }
    
    useEffect(() => {
        getUsers()
        
    }, [])
    console.log('d', users);
    return (
        <>
            <div className="container">
                <h1>User Details</h1>
                <Link to='/add' className='btn btn-primary'>Add User</Link>

                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">email</th>
                            <th scope="col">phone</th>
                            <th scope="col">city</th>
                            <th colSpan={2}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((item, index) => {
                            return (
                                <>
                                    <tr>
                                        <th scope="row">{item.name}</th>
                                        <td>{item.email}</td>
                                        <td>{item.phone}</td>
                                        <td>{item.city}</td>
                                        <td><Link to={`/update/${item.id}`} className='btn btn-success'>Update</Link></td>
                                        <td><Link onClick={() => deleteUserData(item.id)} className='btn btn-danger'>Delete</Link></td>

                                    </tr>

                                </>
                            )
                        })}


                    </tbody>
                </table>
            </div>

        </>
    )
}

export default HomePage