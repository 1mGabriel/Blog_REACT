import React from 'react'
import "./EditPost.css"

// Importação do axios config para a requisiçaõ da chamada de dados:
import blogFetch from "../axios/config";

// Componentes do react para manipulações e requisições de dados
import { useState, useEffect } from "react";


// Adicionar um redirect que assim que o adicionado um novo post, o usuario é redirencionado para a Home:
import { useParams,useNavigate } from "react-router-dom";


// Componente de linkagem entre paginas:
import { Link } from "react-router-dom";


const EditPost = () => {

    const navigate = useNavigate() //declaração do navigate

    const [title, setTitle] = useState() //Declaração do state que vai armazenar a informação passada através dos inputs
    const [body, setBody] = useState() //Declaração do state que vai armazenar a informação passada através dos inputs

    const {id} = useParams() //Resgata o paramentro "id" da url, obtendo o id individual de cada post

      // Função de resgate dos dados assincrona:
  const getPosts = async () => {
    try {
      //Tentativa de chamar os dados

      const response = await blogFetch.get(`/posts/${id}`); //Definição da resposta da chamada, resposta = response na url individual

      const data = response.data; //Transfiro a minha resposta para a constante "data", "response.data" se refere á minha propiedade "data" do meu banco de dados

      setTitle(data.title); //Altera o state do array "posts" para os dados do "data"
      setBody(data.body); //Altera o state do array "posts" para os dados do "data"
    } catch (error) {
      //caso houver um erro na tentativa de chamada

      console.loge(error);
    }
  };

  const editPost = async(e) =>{
    e.preventDefault()
// Fazendo um novo post:
    const post = {title, body, userId:1} //Definindo os dados que serão alterados

    await blogFetch.put(`/posts/${id}`,{ //Metodo de Atualização(PUT), passando a url individual do post
        body: post,
    })
  }
  
  // Função que chama a função de resgate de dados
  useEffect(() => {
    getPosts();
  }, []);



  return (
    <div className="new-post">
    <h2>Editando: {title}</h2>
    <form onSubmit={(e) => editPost(e)}> {/* Declarar a função de sumbissão */}
      <div className="form-control">
        <label htmlFor="title">Titulo:</label>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Digite o título"
          onChange={(e)=>setTitle(e.target.value)} //Faz a alteração do state em realtivo ao "set" sempre quando o valor do input altera
        value={title || ""} //Faz a veificação sem o valor chegou ou não, se sim é o valor do state, se não é um valor "vazio"
        />
      </div>
      <div className="form-control">
        <label htmlFor="body">Conteúdo:</label>
        <textarea
          name="body"
          id="body"
          placeholder="Digite o conteúdo"
          onChange={(e)=>setBody(e.target.value)} //Faz a alteração do state em realtivo ao "set" sempre quando o valor do input altera
          value={body || ""} //Faz a veificação sem o valor chegou ou não, se sim é o valor do state, se não é um valor "vazio"
        ></textarea>
      </div>
      <input type="submit" value="Editar Post" className="btn" />
    </form>
  </div>
  )
}

export default EditPost
