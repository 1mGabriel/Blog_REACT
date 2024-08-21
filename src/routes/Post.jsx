// Importação do axios config para a requisiçaõ da chamada de dados:
import blogFetch from "../axios/config"

// Componentes do react para manipulações e requisições de dados 
import { useState, useEffect } from 'react'

//HOOK para conseguirmos acessar o id que está na url de chamada dos dados
import { useParams } from "react-router-dom"

import "./Post.css"
import React from 'react'

const Post = () => {

    const {id} = useParams() //Pega o paramentro "id" da url

    const [post, setPost] = useState({}) //Objeto que armazena os dados do post

    const getPost = async()=>{ //Função que vai pegar os dados do post

        try{
            const response = await blogFetch.get(`/posts/${id}`) //Faço o GET da url + o ID recebido pelo useParams

            const data = response.data

            setPost(data)

        }catch(error){
            console.log(error)
        }
    }

    //Função que ira chamar a função de requisição 
    useEffect(()=>{
        getPost()
    },[])

    console.log(id)


  return (
    <div className="post-container">

    {/* Primeiro ele faz a verificação se o a propiedade "title" do dado existe, caso sim ele renderiza o componente com as informações do mesmo */}
      {!post.title ? (   
        <p>Carregando...</p>
      ):(
        <div className="post">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </div>
      )}
    </div>
  )
}

export default Post
