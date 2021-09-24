/* eslint-disable jsx-a11y/alt-text */
import { SiFacebook } from 'react-icons/si'
import { SiInstagram } from 'react-icons/si'
import { SiTwitter } from 'react-icons/si'
import { SiLinkedin } from 'react-icons/si'

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="header-text">Meu Perfil</h1>
      </header>

      <div className="dados">
        <div className="ball" id="ball1"></div>
        <MeuPerfil />
        <div className="ball" id="ball2"></div>
        <h3 className="titulo"><a href="https://github.com/wesshstos">Weslley Henrique dos Santos</a></h3>
        <div className="line"></div>
      </div>

      <div className="dados-pessoais">
        <h6 className="tit-info">
          Dados Pessoais
        </h6>
        <p className="textoPrincipal">29 anos - Estudante - Guarujá-SP</p>
      </div>

      <div className="dadosFormacao">
        <h6 className="tit-info">
          Formação
        </h6>
        <p className="textoPrincipal">Cursando ADS <a href="https://www.unip.br"> Universidade Paulista - UNIP</a></p>
      </div>

      <div className="dadosExp" >
        <h6 className="tit-info">
          Experiência
        </h6>
        <p className="textoPrincipal">
          Em busca da primeira oportunidade
          <br /> na area da Tecnologia
          </p>
      </div>
      <div className="dadosProjetos">
        <h6 className="tit-info">
          Projetos
        </h6>
        <p className="textoPrincipal">
          - <a href='https://github.com/wesshstos/Web-NodeJS-ReactJS'>FullStack com ReactJs e NodeJS</a>
          <br />
          - <a href='https://github.com/wesshstos/Mobile-ReactNative'>Aplicações Mobile com React Native</a>
        </p>
      </div>

      <footer className="footer">
        <a href="https://www.facebook.com/garotodoitapema" className="icon" ><SiFacebook id='facebook'/> </a>
        <a href="https://www.instagram.com/leloniino/" className="icon"><SiInstagram id='instagram'/> </a>
        <a href="https://twitter.com/leloninoo" className="icon"><SiTwitter id='twitter'/> </a>
        <a href="https://www.linkedin.com/in/weslleyhsantos/" className="icon"> <SiLinkedin id='linkedin'/> </a>
      </footer>

    </div>
  );
}

function MeuPerfil(){
  let img= 'https://lh3.googleusercontent.com/ZjSsmrYUTxJnAyT_fl1LFd-Zl9dFXVP4JS18ZiG77Uo2eBsjPbabFWGPHk8uO57plJJa3P0YOU6Gun5SZicBnsWX5wcGQvbxnIE3s0l7wNfv85fp52ikHf5zg4DW3GwuBiw11j-VAAVAfBogw9Ii1sgYg20O9ueVuFrXGZltkq37PsRrr7C8rClP8HOElU5Iy8wlnHebsfiSCNS8yNBAMaY1afUHCiFkIeYlVoOaMeT2BYgy2E4cShLGysGydtatU-HkDIf7qR7pGe2aF34RwgotRYli8A3R3o3cii94y0raKXwGhjoIzZF95auCweyUdiR__687EJbKK6cwFRfYzVQDyIoXhbOIHqP6G49bFnmxgucKrspxg0SDUiDWQNimEWuzTWKh4zsHj5cjT1tNv2vuDt8MonFOX8ITujJswEY-Za_CjU2qVG48SAR8zLSztZf_rl7Ou_aSQA21zm0nLPDMMv4rVZMFpOmwGNl9uUWbJ7ymVMz5QdEvtSZleXZY27dX-dhnWKg-K9ycz1Hj1rtCSQoO0wbHc7hbhNvkjMK7eAl2YMnvzfBH08AZ9ypP5TjKb4Bseg8HD2ndxcPQodAbu1wyKUhID-gY92pEZ0AGg0S2kWqSSpmdOm3cSCDh6ylX46fif64cwF4fdQjJBQADicUQkNpi90r5JkToxS0EBUz-NmICBwAjx6FNkMDS_LoB_iTqf6I7szxqavQC6gy9mA=s637-no?authuser=0'

  return (
    <img src={img} width={350} height={350} />
  )
}

export default App;
