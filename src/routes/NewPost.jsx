import React from "react";
import "./NewPost.css"

// Importação do axios config para a requisiçaõ da chamada de dados:
import blogFetch from "../axios/config"


// Componentes do react para manipulações e requisições de dados 
import { useState, useEffect } from 'react'

// Adicionar um redirect que assim que o adicionado um novo post, o usuario é redirencionado para a Home:
import { useNavigate } from "react-router-dom";


const NewPost = () => {

  const navigate = useNavigate() //declaração do navigate

  const [title, setTitle] = useState() //Declaração do state que vai armazenar a informação passada através dos inputs
  const [body, setBody] = useState() //Declaração do state que vai armazenar a informação passada através dos inputs

  // Função que ira submeter o formulario e fazer o POST dos dados, *IMPORTANTE SER UMA FUNÇÃO ASSINCRONA
  const createPost = async(e)  =>{
    e.preventDefault() //Previne o recarregamento da pagina

    const post = { title, body, userId: 1} // Definição de um obejto que vai conter as informções para ser passado no POST, *IMPORTANTE QUE TENHA AS PROPIEDADE IGUAIS ÁS DO DATA DA REQUISIÇÃO

    await blogFetch.post("/posts", {
      body: post,
    }) //*REQUISIÇÃO > POST do objeto "post", onde o body da requisição é o objeto passado
  
  navigate("/") //Após a sumbissão, retorna para o elemento do path: "/", no caso "home"
  }

  return (
    <div className="new-post">
      <h2>Inserir novo post</h2>
      <form onSubmit={(e) => createPost(e)}> {/* Declarar a função de sumbissão */}
        <div className="form-control">
          <label htmlFor="title">Titulo:</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Digite o título"
            onChange={(e)=>setTitle(e.target.value)} //Faz a alteração do state em realtivo ao "set" sempre quando o valor do input altera
          />
        </div>
        <div className="form-control">
          <label htmlFor="body">Conteúdo:</label>
          <textarea
            name="body"
            id="body"
            placeholder="Digite o conteúdo"
            onChange={(e)=>setBody(e.target.value)} //Faz a alteração do state em realtivo ao "set" sempre quando o valor do input altera
          ></textarea>
        </div>
        <input type="submit" value="Criar Post" className="btn" />
      </form>
    </div>
  );
};

export default NewPost;
