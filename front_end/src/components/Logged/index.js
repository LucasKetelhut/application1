import styled from 'styled-components';
import React, { useReducer } from 'react';
import Link from 'next/link';
//import api from '../../services/api'

const Title = styled.h1`
    font-size: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 125px;
`

const Logout = styled.div`
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
        width: 186px;
        color: black;
        font-family: Arial, Helvetica, sans-serif;
        transition: all linear 0.2s;
    }    

    > a:hover {
        cursor: pointer;
        color: #fff;
        background-color: #dd5035;
    }
`

const EditData = styled.div`
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
        width: 186px;
        color: black;
        font-family: Arial, Helvetica, sans-serif;
        transition: all linear 0.3s;
    }    

    > a:hover {
        cursor: pointer;
        background-color: #ccc;
    }
`

export default function Logged() {
    return (
        <>
        <Title>
            Olá, user.name!
        </Title>
        <Logout>
            <Link href="/">
                Deslogar
            </Link>
        </Logout>
        <EditData>
            <Link href="/editdata">
                Editar dados cadastrais
            </Link>
        </EditData>
        </>
    );
}