// Importação do axios config para a requisiçaõ da chamada de dados:
import blogFetch from "../axios/config";

// Componentes do react para manipulações e requisições de dados
import { useState, useEffect } from "react";

// Componente de linkagem entre paginas:
import { Link } from "react-router-dom";

import "./Admin.css";
import React from "react";

const Admin = () => {
  const [post, setPost] = useState([]); //State que recebe os dados da requisição e aloca em um array de objetos para uso

  // Função de resgate dos dados assincrona:
  const getPosts = async () => {
    try {
      //Tentativa de chamar os dados

      const response = await blogFetch.get("/posts"); //Definição da resposta da chamada, resposta = response

      const data = response.data; //Transfiro a minha resposta para a constante "data", "response.data" se refere á minha propiedade "data" do meu banco de dados

      setPost(data); //Altera o state do array "posts" para os dados do "data"
    } catch (error) {
      //caso houver um erro na tentativa de chamada

      console.loge(error);
    }
  };

//   DELETE : Função para deletar algum dado do banco
  const deletePost = async(id) =>{ //Função assincrona passando o "id" como parametro
    await blogFetch.delete(`posts/${id}`) //Metodo DELETE nos dados cuja a url termine com o id passado no parametro
  
    const filteredPosts = post.filter((posts) => posts.id !== id) //Função que retorna o dado do "STATE" cujo o id seja difernte ao id passado na chamda da função
    setPost(filteredPosts) //alterando o state de posts, definindo novos dados sem o dado com o id removido
}

  // Função que chama a função de resgate de dados
  useEffect(() => {
    getPosts();
  }, []);




  return <div className="admin">
    <h1>Gerenciar Posts</h1>
    {post.length === 0 ? (<p>Carregando...</p>):(
        post.map((post)=>(
            <div className="post" key={post.id}>
                <h2>{post.title}</h2>
                <div className="actions">
                    <Link to={`/posts/edit/${post.id}`} className="btn edit-btn">Editar</Link>
                    <button className="btn delete-btn" onClick={() => deletePost(post.id)}>Excluir</button> {/* Evento de click no botão de deletar passando o "post.id"> id do meu dado armazenado no state "Post" */}
                </div>
            </div>
        ))
    )}
  </div>;
};

export default Admin;
