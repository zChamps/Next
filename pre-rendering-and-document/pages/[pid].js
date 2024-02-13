import fs from "fs/promises"
import path from "path";

import React from 'react'

const ProductDetailPage = (props) => {
    const { loadedProduct } = props // pegando os dados passandos por pros da getStaticProps



    return (
        <div>

            <div>
                <p>{loadedProduct.title}</p>
                <p>{loadedProduct.description}</p>

            </div>

        </div>
    )
}

export default ProductDetailPage

const getData = async ()=> {
    const pathFile = path.join(process.cwd(), "data.json")
    const jsonData = await fs.readFile(pathFile)
    const data = JSON.parse(jsonData) //fazendo um fetching de data local

    return data
}


//  pré-renderiza páginas com dados estáticos, buscando e inserindo os dados no momento da construção da página. Ideal para conteúdo estático.
export async function getStaticProps(context) {

    const { params } = context // pegando os parametros recebidos pelo getStaticProps
    const productId = params.pid // pegando os parametros recebidos pelo getStaticProps

   const data = await getData()

    const product = data.products.find(product => product.id === productId) //filtrando o os id's

    if(!product){ //definindo o fallback, caso seja requisitada uma página inexistente
        return {notFound: true}
    }


    return {
        props: {
            loadedProduct: product //passando para a página 
        },
        revalidate: 10
    }
}

//Usando getStaticPaths: serve para definir as possiveis rotas para a página dinamica, para que o next saiba quais são as possibilidades de renderização
export async function getStaticPaths() {

    const data = await getData()
    const pids = await data.products.map(item => ({params: {pid: item.id}}))

    return {
        paths: pids, //definir todos os possiveis caminhos recebidos, aqui

        fallback: "blocking" // fallback é uma opção caso não queira que todas as páginas sejam pré renderizadas - false: todas serão pre renderizadas - "blocking": renderiza a pagina somente após o caminho ter sido completamente carregado
    }
}