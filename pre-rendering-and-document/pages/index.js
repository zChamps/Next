import Image from "next/image";

import fs from "fs/promises"
import path from "path";
import Link from "next/link";
import Head from "next/head";



export default function Home(props) {
  //Recebendo por props dados passados pela getStaticProps
  const products = props.products
  return (

    <main className={`flex min-h-screen flex-col items-center justify-between p-24 `}>
      {/* Head, aqui é a parte de Head da pagina atual, podemos alterar o titulo, adicionar meta tags, dentre outros */}
      <Head>
        <title>Titulo da paginaa</title>
        <meta name='' content='' />
      </Head>
      <h1>DESCHAMPS</h1>
      {products.map(item => <p id={item.id}><Link href={`/${item.id}`}> {item.title}</Link></p>)}
    </main>
  );
}


//getStaticProps - faz fetch ou coisas similares do lado do servidor, sem que seja do lado do cliente, por isso não precisa colocar "use client"
export async function getStaticProps() {
  const pathFile = path.join(process.cwd(), "data.json")
  const jsonData = await fs.readFile(pathFile)
  const data = JSON.parse(jsonData)

  return {
    //Passando por props os dados que ficarão disponiveis no componente principal
    props: {
      products: data.products
    },
    revalidate: 10, //Dados serão atualizados se tiver alguma atualização, após 10 segundos da ultima renderização
    //notFound: true // Vai renderizar uma pagina de 404 ao inves da pagina normal
    //redirect: { //Vai redirecionar para uma pagina especifica
    //  destination: "/"
    // }
  }
}