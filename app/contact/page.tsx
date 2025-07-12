import React from 'react'

const page = () => {
  return (
    <div className='p-8 max-w-xl mx-auto space-y-3 shadow-2xl rounded-2xl'>
        <h1 className='text-3xl font-bold '>Contact</h1> 
        <p className='text-lg'>Jika anda memerlukan jasa saya, silahkan isi form di bawah ini :</p>
        <form className='space-y-2' action="/about">
          <div>
            <label className='font-medium mb-1'>Nama :</label>
            <input type='text' className='w-full border p-2 rounded' placeholder='Silahkan Masukan Nama...'/>
          </div>
          <div>
            <label className='font-medium mb-1'>Email :</label>
            <input type='text' className='w-full border p-2 rounded' placeholder='Silahkan Masukan Email...'/>
          </div>
          <div>
            <label className='font-medium mb-1 block'>Pesan :</label>
            <textarea className='w-full p-2 rounded border' rows={4} placeholder='Silahkan Masukan Pesan..' />
          </div>
          <div className='flex justify-end'>
            <button type='submit' className='flex px-4 py-2 bg-green-600 rounded-lg text-white'>Submit</button>
          </div>
          
        </form>
    </div>
  )
}

export default page