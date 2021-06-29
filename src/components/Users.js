// import React, { useState } from 'react'



// const API = process.env.REACT_APP_API

// export const Users = () =>{
    
//     const [ name, setName ] = useState( "" )
//     const [ email, setEmail ] = useState( "" )
//     const [ password, setPassword ] = useState( "" )

//     const [users, setUsers] = useState( [] )
    
//     // Estudar como o useEffect funciona e as Promisses
//     // useEffect( () => {
//     //     fetch('/users')
//     //         .then(response => (response.json())
//     //         .then(data => (setUsers(data))))
//     // }, [] )


//     // const handleSubmit = async ( e ) => {
//     //     e.preventDefault()

//     //     setName('')
//     //     setEmail('')
//     //     setPassword('')
//     // }


//     // GET USERS
//     const getUsers = async () => {
//         const res = await fetch(`${API}/users`)
//         const data = await res.json()
//         setUsers(data)
//     }

//     // DELETE USER BY ID
//     const deleteUser = async(id) => {
//         const userResponse = window.confirm('Tem certeza que quer excluir ?')
//         if (userResponse) {
//             const res = await fetch(`${API}/users/${id}`, {
//                 method: 'DELETE'
//             })
//             const data = await res.json()
//             console.log(data)
//             await getUsers()
//         }
//     }

//     // UPDATE USER BY ID
//     const updateUser = async (id) => {
//         const res = await fetch(`${API}/user/${id}`)
//         const data = await res.json()

//         setName(data.name)
//         setEmail(data.email)
//         setPassword(data.password)
//     }

//     return (
//         <div className="row">
            
//         </div>
//     )
// }
