"use client"

import { useEffect, useState } from 'react';
import { User } from '@prisma/client';



const Page = () => {
  const [users,setUsers] = useState<User[]>([])
  const [newUser,setNewUser] = useState<Omit<User, 'id'>>({
    name:"",
    email:""
  })
  const [editId, setEditId] = useState<any>(null)
  useEffect(()=> {
    const fetchData = async() => {
      const res = await fetch("/api/users")
      const data = await res.json()
      setUsers(data)
    }
    fetchData()
  },[])
  const handleOnChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target
    setNewUser(prev => ({
      ...prev, [name]: value
    }))
  }
  const handleSubmit = async(e : React.FormEvent) => {
    e.preventDefault()
    if(!newUser.name || !newUser.email){
      alert("Nama dan Email Harus diisi")
    }
    if(editId !== null){
      const res = await fetch(`/api/users/${editId}`,{
        method: "PATCH",
        headers: {
          "Content-type": "aplication/json"
        },
        body: JSON.stringify({
          name: newUser.name,
          email: newUser.email
        })
      })
      if(!res.ok) throw new Error("User Gagal diedit")
      const updated = await res.json()
      setUsers(prev => prev.map(user => (user.id === editId ? updated : user)))
    }else {
      const res = await fetch('/api/users',{
      method: "POST",
      headers: {
        "Content-type" : "aplication/json"
      },
      body: JSON.stringify({
        name: newUser.name,
        email: newUser.email
      })
    })
    if(!res.ok) throw new Error("Gagal Menyimpan data")
    const data = await res.json()
    setUsers(prev => [...prev, data])
    }
    
    setNewUser({
      name:"",
      email:""
    })
  }
  const handleDelete = async(id: string) => {
    const res = await fetch(`/api/users/${id}`,{
      method: "DELETE"
    })
    if(!res.ok) throw new Error("Gagal menghapus User")
    setUsers(prev => prev.filter(user => user.id !== id))
  }
  const handleEdit = (user: User) => {
    setNewUser({
      name: user.name,
      email: user.email
    })
    setEditId(user.id)
  }
  return (
    <div className='p-8 max-w-xl mx-auto border-gray-600 border-2 space-y-3 rounded-md'>
        <h1 className='text-xl font-bold'>Tambah User</h1>
        <div className='grid grid-cols-3'>
          <label>Nama :</label>
          <input 
          onChange={handleOnChange}
          value={newUser?.name}
          name='name'
          className='border rounded-md col-span-2 p-1' type="text" placeholder='Masukan Namamu...'/>
        </div>
        <div className='grid grid-cols-3'>
          <label>Email :</label>
          <input
          onChange={handleOnChange} 
          value={newUser?.email}
          name='email'
          className='border rounded-md col-span-2 p-1' type="text" placeholder='Masukan Emailmu...'/>
        </div>
        <div className='flex justify-end space-x-2'>
          {editId !== null && 
          <button 
          onClick={()=> {
            setEditId(null)
            setNewUser({
              name:"",
              email:""
            })
          }
            
          }
          className='px-3 py-1 bg-red-600 hover:bg-red-500 text-white rounded-md'>Batal</button>
          }
          
          <button
          onClick={(e)=> handleSubmit(e)}
          className='px-3 py-1 bg-green-600 hover:bg-green-500 text-white rounded-md'
          >
            {editId !== null ? "Edit User" : "Tambah User"}</button>
        </div>
        <h1 className='text-xl font-bold'>List Users</h1>
        
        
        <ul>
        {users.map((user) => {
          return (
            <div key={user.id} className='flex justify-between'>
              <li>{user.name} - {user.email}</li>
              <div className='space-x-3 space-y-2'>
                <button 
                onClick={()=> handleEdit(user)}
                className='px-3 py-1 bg-blue-600 hover:bg-blue-500 text-white rounded-md'>Edit</button>
                <button 
                onClick={()=> handleDelete(user.id)}
                className='px-3 py-1 bg-red-600 hover:bg-red-500 text-white rounded-md'>Delete</button>
              </div>
            </div>
            
          )
        })}
        </ul>
    </div>
  )
}

export default Page