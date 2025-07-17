"use client"
import React, { useEffect, useState } from 'react'
interface booksProps {
  id?: string
  name?: string;
  price?: number | string;
}

const page = () => {
  const [books, setBooks] = useState<booksProps[]>([])
  const [newBook, setNewBook] = useState<booksProps>({})
  const [editId, setEditId] = useState<any>(null)
  const handleEdit = (book: booksProps) => {
    setNewBook({name: book.name, price: book.price})
    setEditId(book.id)
  }
  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault()
    if (!newBook.name || !newBook.price){
      alert("Nama dan harga harus diisi")
      return;
    }
    if(editId !== null) {
      console.log(editId);
      
      const res = await fetch(`/api/books/${editId}`, {
        method: "PATCH",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          name: newBook.name,
          price: newBook.price
        })
      });
      if(!res.ok) {
        alert("Gagal mengupdate buku")
        return;
      }
      const updated = await res.json()
      setBooks((prev) => 
        prev.map((book)=> (book.id === editId ? updated : book))
      );
      setEditId(null)
    }else {
      const res = await fetch("api/books", {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({
          name: newBook.name,
          price: newBook.price
        })
      })
      if(!res.ok) throw new Error("Gagal menyimpan data")
      const data = await res.json();
      setBooks((prev) => [...prev, data])
    }
    setNewBook({name:"",price:""})
  }
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name , value} = e.target
    setNewBook(prev => ({
      ...prev,
      [name]: value
    }))

  }
  useEffect(()=> {
    const fetchData = async () => {
      const res = await fetch('/api/books')
      const data = await res.json()
      setBooks(data)
    }
    fetchData()
  },[])

  const handleDelete = async(id: any) =>{
    const res = await fetch(`/api/books/${id}`, {
      method: 'DELETE',
  
    })
    if(!res.ok) throw new Error('Gagal Menghapus buku')
    setBooks(prev => prev.filter(book => book.id !== id))
  }
  
  return (
    <div className='p-8 max-w-xl mx-auto rounded-lg border-gray-600 border-2 space-y-3'>
        <h1 className='text-xl font-bold'>Daftar Buku</h1>
        <div className='grid grid-cols-3'>
          <label >Nama Buku :</label>
          <input
          type='text'
          name='name'
          value={newBook.name}
          className='border rounded-md col-span-2 p-1'
          placeholder='Masukan nama buku...'
          onChange={handleOnChange}
          />
        </div>
        <div className='grid grid-cols-3'>
          <label >Harga Buku :</label>
          <input
          type='text'
          name="price"
          value={newBook.price}
          className='border rounded-md col-span-2 p-1'
          placeholder='Masukan harga buku...'
          onChange={handleOnChange}
          />
        </div>
        <div className='flex justify-end'>
          {editId !== null && (
            <button 
            className='text-sm underline'
            onClick={()=> {
              setNewBook({})
              setEditId(null)
            }}
            >
              Batal
            </button>
          )}
          <button 
          className='bg-green-700 rounded-lg text-white px-4 py-1 hover:bg-green-500'
          onClick={(e)=> handleSubmit(e)}
          >{editId !== null ? "Simpan Perubahan" : "Tambah Buku"}
          </button>
        </div>
        {books.map((book)=> {
          return (
            <div key={book.id} className='grid grid-cols-5 mb-2 items-center'>
            <div className='col-span-2'>{book.name}</div>
            <div>Rp.{Number(book?.price).toLocaleString('id-ID')}</div>
            <button 
            onClick={()=> handleEdit(book)}
            className='bg-blue-700 rounded-lg text-white px-4 py-1 mr-1 hover:bg-blue-500'
            >Edit</button>
            <button 
            onClick={() => handleDelete(book.id)}
            className='bg-red-700 rounded-lg text-white px-4 py-1 hover:bg-red-500'
            >Delete</button>
            </div>
          )
        })}
    </div>
  )
}

export default page