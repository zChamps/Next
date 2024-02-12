import Image from "next/image";

import fs from "fs/promises"
import path from "path";
import Link from "next/link";


//Recebe props pq elas são passadas pelo getStaticProps
export default function Home(props) {
  const products = props.products
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24 `}>
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