import React from 'react'
import { useRef, useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuid4 } from 'uuid';
const Manager = () => {
  const [form, setform] = useState({ site: "", username: "", password: "" })
  const [passwordArray, setpasswordArray] = useState([])
  const ref = useRef()
  const pref = useRef()

  useEffect(() => {
    let passwords = localStorage.getItem("password")
    if (passwords) {
      setpasswordArray(JSON.parse(passwords))
    }
  }, [])


  const showPassword = () => {
    if (ref.current.src.includes("icons/eye.png")) {
      ref.current.src = "icons/hidden.png"
      pref.current.type = "text"
      console.log(passwordArray)
    }
    else {
      ref.current.src = "icons/eye.png"
      pref.current.type = "password"

    }
  }
  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value })

  }
  const copytext = (text) => {
    toast('copied to clipboard!', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    navigator.clipboard.writeText(text)
  }

  const handleSavePassword = () => {
    if (form.site.length > 3 && form.username.length > 3 && form.password.length > 3) {
    

      setpasswordArray([...passwordArray, { ...form, id: uuid4() }])
      localStorage.setItem("password", JSON.stringify([...passwordArray, { ...form, id: uuid4() }]))
      setform({ site: "", username: "", password: "" })

      
    }
    else {
      toast('Error:Password not saved!!')
    }
  }


  const editPassword = (id) => {
    console.log("Editing with id: ", id)
    setform(passwordArray.filter(item=> item.id===id)[0])
    setpasswordArray(passwordArray.filter(item=>item.id!==id))

  }
  const deletePassword = (id) => {
    console.log("deleting with id: ", id)
    setpasswordArray(passwordArray.filter(item=>item.id!==id))
    localStorage.setItem("password",JSON.stringify(passwordArray.filter(item=>item.id!==id)))
  }
  return (

    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition="Bounce"
      />
      {/* Same as */}
      <ToastContainer />
      <div className="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]">
        </div>
      </div>
      <div className="manager mt-[60px] container m-auto">
        <div className="logo text-center">
          <h1 className='font-bold text-3xl'>
            <span className='text-green-500'>&lt;</span>
            <span className=''>Pass</span>
            <span className='text-green-500'>OP/&gt;</span>
          </h1>
          <span className='font-bold'>Your Own Password Manager</span>
        </div>

        <div className="input  my-2 flex flex-col gap-4 justify-center items-center">
          <input name='site' value={form.site} onChange={handleChange} className='w-1/2 rounded-full my-2 px-3 py-1 border-[3px] border-green-400' placeholder='Enter Website URL' type="text" />
          <div className='flex items-center justify-center w-1/2'>
            <input name='username' value={form.username} onChange={handleChange} className='w-full mx-2 rounded-full px-3 py-1 border-[3px] border-green-400 ' placeholder='Enter Username' type="text" />
            <div className='relative'>
              <input name='password' value={form.password} onChange={handleChange} ref={pref} className='mx-2 rounded-full px-3 py-1 border-[3px] border-green-400 ' placeholder='Enter Password' type="password" />
              <span onClick={showPassword} className='cursor-pointer'>
                <img ref={ref} className='absolute top-1.5 right-5' width={23} src="icons/eye.png" alt="show" />
              </span>
            </div>
          </div>
          <div className="btn my-3 ">
            <span className='flex gap-2 justify-center items-center border-[1px] border-green-500 bg-green-500 rounded-full px-9 py-1 font-bold w-fit text-center hover:bg-green-400 cursor-pointer' onClick={handleSavePassword}>
              <lord-icon className=""
                src="https://cdn.lordicon.com/jgnvfzqg.json"
                trigger="hover" style={{ width: "23px", height: "23px" }}>
              </lord-icon>
              Save
            </span>
          </div>
        </div>

        <div className="table mx-auto ">
          <h1 className='text-center font-bold my-3 text-xl'>Your Passwords</h1>
          {passwordArray.length === 0 && <div>No Password to Show</div>}
          {passwordArray.length != 0 && <table className="table-fixed text-center w-[50vw]">
            <thead className=' bg-green-600' >
              <tr>
                <th>URL</th>
                <th>Username</th>
                <th>Password</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className='bg-green-100 '>

              {passwordArray.map((item) => {
                return <tr key={item.password}>
                  <td className='text-center'>
                    <div className="flex item-center gap-2 text-center px-2 justify-center " >
                      <span className='text-[1px]'>{item.site}</span>
                      <div className='cursor-pointer' onClick={() => copytext(item.site)}>
                        <lord-icon
                          style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                          src="https://cdn.lordicon.com/iykgtsbt.json"
                          trigger="hover" >
                        </lord-icon>
                      </div>
                    </div>
                  </td>
                  <td className=''>
                    <div className="flex item-center gap-2 text-center px-2 justify-center " >
                      <span>{item.username}</span>
                      <div className='cursor-pointer' onClick={() => copytext(item.username)}>
                        <lord-icon
                          style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                          src="https://cdn.lordicon.com/iykgtsbt.json"
                          trigger="hover" >
                        </lord-icon>
                      </div>
                    </div>
                  </td>
                  <td className=''>
                    <div className="cursor-pointer flex item-center gap-2 text-center px-2 justify-center " >
                      <span>{"*****"}</span>
                      <div className='cursor-pointer' onClick={() => copytext(item.password)}>
                        <lord-icon
                          style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                          src="https://cdn.lordicon.com/iykgtsbt.json"
                          trigger="hover" >
                        </lord-icon>
                      </div>
                    </div>
                  </td>
                  <td className='flex gap-3 justify-center py-2  text-center'>
                    <span className='cursor-pointer' onClick={() => { editPassword(item.id) }}>
                      <lord-icon
                        src="https://cdn.lordicon.com/gwlusjdu.json"
                        trigger="hover"
                        style={{ "width": "25px", "height": "25px" }}>
                      </lord-icon>
                    </span>
                    <span className='cursor-pointer' onClick={() => { deletePassword(item.id) }}>
                      <lord-icon
                        src="https://cdn.lordicon.com/skkahier.json"
                        trigger="hover"
                        style={{ "width": "25px", "height": "25px" }}>
                      </lord-icon>
                    </span>
                  </td>
                </tr>
              })}
            </tbody>
          </table>}
        </div>
      </div>
    </>
  )
}

export default Manager
