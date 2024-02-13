
import React from 'react'

const UserProfilePage = (props) => {
  //Recebendo por props dados passados pela getServerSideProps
  return (
    <div>{props.username}</div>
  )
}

export default UserProfilePage


// busca dados do servidor a cada requisição, permitindo conteúdo dinâmico personalizado para cada acesso à página.
export async function getServerSideProps(context){
    const {params, req, res} = context //acessando dados recebidos pela função
    
    return{
        props:{
            username: "Deschamps" //retornando dados por props
        }
    }
}