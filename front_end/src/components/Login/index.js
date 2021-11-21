import styled from 'styled-components';
import React, { useState } from 'react';
import Link from 'next/link';
import Router from 'next/router';
//import api from '../../services/api'


const Title = styled.h1`
    font-size: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 125px;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 50px;

    input {
        padding: 10px;
        margin-bottom: 15px;
        text-align: center;
        width: 220px;
        border-radius: 10px;
        border: 2px solid #ccc;
    }

    button {
        padding: 10px;
        margin-top: 10px;
        width: 182px;
        background-color: #efefef;
        border: 1px solid #bbb;
        font-size: 16px;

        transition: all linear 0.3s;
    }

    button:hover {
        cursor: pointer;
        background-color: #ccc;
    }
`

const Register = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    margin-top: 10px;

    > a {
        text-decoration: none;
        padding: 10px;
        background-color: #efefef;
        border: 1px solid #bbb;
        text-align:center;
        width: 160px;
        color: black;
        font-family: Arial, Helvetica, sans-serif;
        transition: all linear 0.3s;
    }    

    > a:hover {
        cursor: pointer;
        background-color: #ccc;
    }
`

export default function Login() {
    const [list, setList] = useState([]);
    const [primary, setPrimary] = useState([]);
    const [password, setPassword] = useState([]);

    async function handleAddPerson(e) {
        e.preventDefault();

        const state = {
            primary,
            password
        }

        // try {
        //     const response  = await api.post('list', state);
        //     const person = response.data;
        //     setList([...list, person]);
        // } catch(e) {
        //     swal("Erro!", "", "error", {
        //         buttons: false,
        //         timer: 2500
        //     })
        //     console.log(e);
        // } 

        setPrimary("");
        setPassword("");

        Router.push({
            pathname: "/logged"
        });
    }

    return (
        <>
        <Title>
            Olá, visitante!
        </Title>
        <Form action="POST" onSubmit={handleAddPerson}>
            <input placeholder="Email / CPF / PIS" type="text" name="primary" id="primary" value={primary} required
                onChange={(e) => {
                    setPrimary(e.target.value)
                }}/>
            <input placeholder="Senha" type="password" name="password" id="password" value={password} required
                onChange={(e) => {
                    setPassword(e.target.value)
                }}/>
            <button type="submit">
                Entrar
            </button>
        </Form>
        <Register>
                <Link href="/register">
                    Registrar-se
                </Link>
        </Register>
        </>
    );
}