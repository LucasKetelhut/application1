import styled from 'styled-components';
import React, { useState } from 'react';
import Link from 'next/link';
import Router from 'next/router';
//import api from '../../services/api'
import swal from 'sweetalert'

const Title = styled.h1`
    font-size: 44px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    margin: 10px 0 0 15px;;

    p {
        text-decoration: none;
        font-size: 16px;
        color: #aaa;
    }
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-top: 10px;

    input {
        padding: 10px;
        margin-bottom: 15px;
        margin-left: 15px;
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
        margin-left: 15px;

        transition: all linear 0.3s;
    }

    button:hover {
        cursor: pointer;
        background-color: #ccc;
    }

    div#Adress {
        display: flex;
        flex-direction: column;
     
        input {
            width: 136px;
        }

        div .firstRow .secondRow {}
    }
`

const Delete = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-decoration: none;
    margin-top: 10px;
    margin-left: 15px;

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
        color: #fff;
        background-color: #dd5035;
    }
`

export default function Edit() {
    const [list, setList] = useState([]);
    const [username, setUserName] = useState([]);
    const [email, setEmail] = useState([]);
    const [country, setCountry] = useState([]);
    const [userState, setUserState] = useState([]);
    const [city, setCity] = useState([]);
    const [zipcode, setZipCode] = useState([]);
    const [street, setStreet] = useState([]);
    const [number, setNumber] = useState([]);
    const [complement, setComplement] = useState([]);
    const [cpf, setCPF] = useState([]);
    const [pis, setPIS] = useState([]);
    const [password, setPassword] = useState([]);

    async function handleAddPerson(e) {
        e.preventDefault();

        const state = {
            username,
            email,
            country,
            userState,
            city,
            zipcode,
            street,
            number,
            complement,
            cpf,
            pis,
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

        setUserName("");
        setEmail("");
        setCountry("");
        setUserState("");
        setCity("");
        setZipCode("");
        setStreet("");
        setNumber("");
        setComplement("");
        setCPF("");
        setPIS("");
        setPassword("");

        Router.push({
            pathname:"/logged"
        });
    }

    return (
        <>
        <Title>
            Editar dados cadastrais
            <p>
                Insira os dados que deseja alterar
            </p>
        </Title>
        <Form action="POST" onSubmit={handleAddPerson}>
            <input placeholder="Nome" type="text" name="username" id="username" value={username}
                onChange={(e) => {
                    setUserName(e.target.value)
                }}
            />
            <input placeholder="Email" type="email" name="email" id="email" value={email}
                onChange={(e) => {
                    setEmail(e.target.value)
                }}
            />
            <input placeholder="País" type="text" name="country" id="country" value={country}
                onChange={(e) => {
                    setCountry(e.target.value)
                }}
            />
            <div id="Adress" class="firstRow">
                <div class="firstRow">
                    <input placeholder="Estado" type="text" name="userState" id="userState" value={userState}
                        onChange={(e) => {
                            setUserState(e.target.value)
                        }}
                    />
                    <input placeholder="Município" type="text" name="city" id="city" value={city}
                        onChange={(e) => {
                            setCity(e.target.value)
                        }}
                    />
                    <input placeholder="CEP" type="text" name="zipcode" id="zipcode" value={zipcode}
                        onChange={(e) => {
                            setZipCode(e.target.value)
                        }}
                    />
                </div>
                <div class="secondRow">
                    <input placeholder="Rua" type="text" name="street" id="street" value={street}
                        onChange={(e) => {
                            setStreet(e.target.value)
                        }}
                    />
                    <input placeholder="Número" type="number" name="number" id="number" value={number}
                        onChange={(e) => {
                            setNumber(e.target.value)
                        }}
                    />
                    <input placeholder="Complemento" type="text" name="complement" id="complement" value={complement}
                        onChange={(e) => {
                            setComplement(e.target.value)
                        }}
                    />
                </div>        
            </div>
            <input placeholder="CPF" type="text" name="cpf" id="cpf" value={cpf}
                onChange={(e) => {
                    setCPF(e.target.value)
                }}
            />
            <input placeholder="PIS" type="text" name="pis" id="pis" value={pis}
                onChange={(e) => {
                    setPIS(e.target.value)
                }}
            />
            <input placeholder="Senha" type="password" name="password" id="password" value={password}
                onChange={(e) => {
                    setPassword(e.target.value)
                }}
            />
            <button type="submit">
                Salvar
            </button>
        </Form>
        <Delete>
            <Link href="/">
                Apagar cadastro
            </Link>
        </Delete>
        </>
    );
}