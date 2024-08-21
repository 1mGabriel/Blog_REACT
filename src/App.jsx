
import { Outlet } from 'react-router-dom' //Impotação responsavel por inserir os conteudos da prop "children" no "Main.jsx"
import './App.css'
// Components jsx
import NavBar from './components/NavBar'

function App() {


  return (
    <div >
      <NavBar/>
      <div className='container'>
      <Outlet/> {/* Renderiza todo conteudo manipulado pelo router. Componentes fixos deverão ficar fora do "children...Main.jsx" e dentro do "App.jsx*/}
      </div>
    </div>
  )
}

export default App
