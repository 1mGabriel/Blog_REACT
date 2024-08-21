import React from 'react'
import "./Home.css"
// Importação do axios config para a requisiçaõ da chamada de dados:
import blogFetch from "../axios/config"

// Componentes do react para manipulações e requisições de dados 
import { useState, useEffect } from 'react'

// Componente de linkagem entre paginas:
import {Link} from "react-router-dom"

const Home = () => {

  const [post, setPost] = useState([]) //State que recebe os dados da requisição e aloca em um array de objetos para uso

  // Função de resgate dos dados assincrona:
  const getPosts = async()=>{
    
    try{ //Tentativa de chamar os dados

      const response = await blogFetch.get("/posts") //Definição da resposta da chamada, resposta = response
      
      const data = response.data; //Transfiro a minha resposta para a constante "data", "response.data" se refere á minha propiedade "data" do meu banco de dados

      setPost(data) //Altera o state do array "posts" para os dados do "data"


    }catch(error){ //caso houver um erro na tentativa de chamada
     
      console.loge(error)
    }

  }
  // Função que chama a função de resgate de dados
  useEffect(()=>{
    getPosts()
  }, [])


  return (
    <div className='home'>
      <h1>Últimos Posts</h1>
      {post.length === 0 ? <p>Carregando</p> : ( //Faz a verificaçã, se há algum dado em posts ou não
        post.map((post)=>( //Percorre todos os dados em "post" e retorna um elemento HTML para cada dado:
          <div className="post" key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <Link to={`/posts/${post.id}`} className='btn'>Ler mais</Link> {/* este link leva á pagina individual de cada post, passando um path/id do dado. Nesse caso, sera redirecionado para o ler mais do post relaivo ao click *IMPORTANTE: ESSE PATH É DEFINIDO NO MAIN COM O ELEMENTO DA PAGINA INDIVIDUAL*/}
          </div>
        ))
      )}
    </div>
  )
}

export default Home
