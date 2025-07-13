import React from 'react'
import { useRef, useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid';
const Manager = () => {
  const ref = useRef()
  const passwordRef = useRef()
  const [form, setForm] = useState({
    site: "",
    username: "",
    password: ""
  })
  const [passwordArray, setPasswordArray] = useState([])
  useEffect(() => {
    let passwords = localStorage.getItem("password")
    let passwordArray
    if (passwords) {
      setPasswordArray(JSON.parse(passwords))
    }
  }, [])
  const showPassword = () => {
    if (passwordRef.current.type === "text") {
      passwordRef.current.type = "password"
    }
    else {
      passwordRef.current.type = "text"
    }
  }
  const savePassword = () => {
    setPasswordArray([...passwordArray, { ...form, id: uuidv4() }])
    toast('Password saved successfully', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    localStorage.setItem("password", JSON.stringify([...passwordArray, { ...form, id: uuidv4() }]))
  }
  const deletePassword = (id) => {
    let c = confirm("Are you sure you want to delete this password?")
    if (c) {
      const newPasswordArray = passwordArray.filter((item) => item.id !== id)
      setPasswordArray(newPasswordArray)
      localStorage.setItem("password", JSON.stringify(newPasswordArray))
      toast('Password deleted successfully', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }
  
  const editPassword = (id) => {
    setForm(passwordArray.filter((item) => item.id === id)[0])
    const newPasswordArray = passwordArray.filter((item) => item.id !== id)
    setPasswordArray(newPasswordArray)
  }

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const copyText = (text) => {
    toast('Copied to clipboard', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    navigator.clipboard.writeText(text)
  }
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="mx-auto align-center flex flex-col items-center h-screen bg-gradient-to-b from-green-100 to-green-50">
        <h1 className='my-2 text-black text-xl font-semibold'>PassManager</h1>
        <p>Your own password manager only you can access.</p>
        <div className='text-black flex flex-col p-4 w-3xl'>
          <input value={form.site} onChange={handleChange} placeholder="Enter website URL" className='bg-white rounded-2xl border-[1.5px]  border-green-700 p-[4px] ' type="text" name='site' />
          <div className="flex gap-4 mt-4">
            <input value={form.username} onChange={handleChange} placeholder='Enter Username' className='bg-white rounded-2xl border-[1.5px] border-green-700 w-3/4 p-[4px]' type="text" name='username' />
            <div className="relative">
              <input ref={passwordRef} value={form.password} onChange={handleChange} placeholder='Enter Password' className='bg-white rounded-2xl border-[1.5px] border-green-700 w-l p-[4px]' type="password" name='password' />
              <span className="absolute top-[8px] left-[165px] cursor-pointer" onClick={showPassword}>
                <img ref={ref} className='h-5 w-5' src="/icons/eye.png" alt="404" />
              </span>
            </div>
          </div>
        </div>
        <button onClick={savePassword} className='flex border-2 bg-green-400 border-green-400 px-1 rounded-2xl py-0.5 cursor-pointer hover:bg-green-500 hover:text-white transition duration-300 ease-in-out'>
          <lord-icon
            src="https://cdn.lordicon.com/efxgwrkc.json"
            trigger="hover" className="w-5 h-6 mr-2">
          </lord-icon>
          Save
        </button>
        <div className="passwords">
          <h3 className='text-center my-4 text-xl font-semibold'>Your Passwords</h3>
          {passwordArray.length === 0 && <p className='text-center'>No passwords saved yet.</p>}
          {passwordArray.length != 0 && <table className="table-auto w-[46em] border-2 border-green-100 rounded-md overflow-hidden">
            <thead className='bg-green-700'>
              <tr>
                <th className='py-2 text-white'>Site URL</th>
                <th className='py-2 text-white'>Username</th>
                <th className='py-2 text-white'>Password</th>
                <th className='py-2 text-white'>Actions</th>
              </tr>
            </thead>
            <tbody className='bg-green-100'>
              {passwordArray.map((item, index) => {
                return (
                  <tr key={index}>
                    <td className='py-2 border border-white text-center flex align-center justify-center'>{item.site}
                      <svg onClick={() => copyText(item.site)} className='copyIcon w-4 ml-3 cursor-pointer' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M208 0L332.1 0c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9L448 336c0 26.5-21.5 48-48 48l-192 0c-26.5 0-48-21.5-48-48l0-288c0-26.5 21.5-48 48-48zM48 128l80 0 0 64-64 0 0 256 192 0 0-32 64 0 0 48c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 176c0-26.5 21.5-48 48-48z" /></svg>
                    </td>
                    <td className='py-2 border border-white text-center'>{item.username}</td>
                    <td className='py-2 border border-white text-center'>{item.password}</td>
                    <td className='py-2 border border-white text-center flex gap-2 justify-center items-center'>
                      <svg onClick={() => deletePassword(item.id)} className='w-4 cursor-pointer' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z" /></svg><svg onClick={() => editPassword(item.id)} className='w-4 cursor-pointer' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z" /></svg></td>
                  </tr>
                )
              })}
            </tbody>
          </table>}
        </div>
      </div>
    </>
  )
}

export default Manager
