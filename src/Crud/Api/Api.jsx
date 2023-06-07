import axios from "axios"

const API_URL = 'http://127.0.0.1:3002/users'

//get All user date
export const getAllUsers = async () => {
    try {
        return await axios.get(API_URL)
    }
    catch (error) {
        console.log('Error while calling getUsers API', error.message)
    }
}

//Add User Data
export const addUser = async (data) => {
    try {
        return await axios.post(API_URL, data)
    }
    catch (error) {
        console.log('Error while calling addUser API', error.message)
    }
}

//get edit user data
export const getEditUser = async data => {
    try {
        return await axios.get(`${API_URL}/${data}`)
    }
    catch (error) {
        console.log('Error while calling getUser API', error.message)
    }
}

//update user post data
export const UpdateUserData = async (data, id) => {
    try {
        return await axios.put(`${API_URL}/${id}`, data)
    }
    catch (error) {
        console.log('Error while calling editUser API', error.message)
    }
}

//delete user data
export const deleteUser = async id => {
    try {
        return await axios.delete(`${API_URL}/${id}`)
    }
    catch (error) {
        console.log('Error while calling deleteUser API', error.message)
    }
}