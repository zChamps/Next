import Document, { Html, Head, Main, NextScript } from 'next/document';

//Aqui é feita a modificação na raiz do projeto
class MyDocument extends Document {
  render() {
    return (
      //Adicionando a propriedade de linguagem no html
      <Html lang='en'>
        {/* Passando o Head na pagina */}
        <Head />
        <body>
          {/* Passando uma div extra, antes do conteudo principal da pagina, poderia ser qualquer outra coisa */}
          <div id='overlays' />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;