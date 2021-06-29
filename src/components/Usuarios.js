import React, { useState, useEffect } from 'react';



function Usuarios() {

    const [ users, setUsers ] = useState([])
    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState( "" )


    // Estudar como o useEffect funciona e as Promisses
    // traz do banco de dados todos os usuarios atravez da rota
    // passada para fetch()
    useEffect( () => {
        fetch('/users')
            .then(response => (response.json())
            .then(data => (setUsers(data))))
    }, [] )

    return (
        
        <div>
            <h2>Cadastro de Usuários</h2>
            <p></p>
                <DataTable value={ users }>
                    <Column field="id" header="Id"></Column>
                    <Column field="name" header="Nome"></Column>
                    <Column field="email" header="Email"></Column>
                    <Column field="password" header="Password"></Column>
                    <Column field="opcoes" header="Opções"></Column>
                </DataTable>
        </div>
    );
}

export default Usuarios;