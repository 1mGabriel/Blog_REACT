import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// Componentes:
import Home from './routes/Home.jsx'
import NewPost from './routes/NewPost.jsx'
import Post from './routes/Post.jsx'
import Admin from './routes/Admin.jsx'
import EditPost from './routes/EditPost.jsx'


// Importação dos componentes do React Router Dom:
import {createBrowserRouter, RouterProvider, Route} from "react-router-dom"

// Objeto de Configuração de roteamento:
const router = createBrowserRouter([
  // Elemento principal, onde vai abrigar as paginas, como: Barra de navegação e rodapés
  {
    element: <App/>, //Elemento
    // Rotas:
    children: [
      {
        path: "/", //Caminho que redireciona o elemento, geralemte a pagina principal se identifica com o "path: "/" "
        element:<Home/> //Elemento linkado pelo caminho
      },
      {
        path:"/new", //Caminho que redireciona o elemento
        element:<NewPost/> //Elemento linkado pelo caminho
      },
      {
        path: "/posts/:id", //Configuração da pagina individual, nesse path é passado o caminho original no caso "posts" e o segundo parametro de busca que é o "id", utilizamos o ":" para inserção de um id dinâmico:
        element: <Post/>
      },
      {
        path:"/admin",
        element: <Admin/>
      },
      {
        path:"/posts/edit/:id", //Criando uma pagina de edição unica para cada "post"
        element: <EditPost/>
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
