// Configuração da url da requisição
import axios from "axios"

// Aqui basicamente é feito a definição da url base do banco de dados, com isso na chamada com o get, usando a função definida passando apenas o endPoint: EX: blogFetch.get("/post")
const blogFetch = axios.create({
    baseURL:"https://jsonplaceholder.typicode.com",
    headers: {
        "Content-Type": "application/json"
    }
})

export default blogFetch