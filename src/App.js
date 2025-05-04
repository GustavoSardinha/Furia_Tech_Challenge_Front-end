import Chatbot from './Components/ChatBot';
import logo2 from './img/FURIA_Esports_full_logo2.png';
import wallpaper from './img/Wallpapers/WALLPAPER3.png';
import Tabs from './Components/Tabs';
import './Styles/App.css';
import Resumo from './Components/Resumo';
import Partidas from './Components/Partidas';
import patrocinadores from "./img/Patrocinadores";
import social from "./img/Social";
import Acompanhar from './Components/Acompanhar';

function App() {
  const tabDefinitions = [
    { id: 'campeonatos', label: 'AO VIVO', content: Acompanhar() },
    { id: 'resumo', label: 'RESUMO', content: Resumo() },
    { id: 'proximas', label: 'PARTIDAS', content: Partidas() }
  ];
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <img src={logo2} className='App-logo'/>
        </nav>
      </header>
      <article className='App-body'>
        <div className='Banner' style={{backgroundImage:  `url(${wallpaper}) `}}>
          <h2 className='Banner-Title'>Furia E-sports <br></br> Live Status</h2>
        </div>
        <div className='Container'>
          <h3 className='Subtitle'>📈 Estatísticas</h3>
          <Tabs tabDefinitions = {tabDefinitions}></Tabs>
        </div>
      </article>
      <Chatbot></Chatbot>
      <footer className='App-Footer'>
        <div>
          <h3 className='Subtitle'>
            Patrocinadores
          </h3>
          <div className='Sponsor-Div'>
          {Object.entries(patrocinadores).map(([key, src]) => (
            <img
              key={key}
              src={src}
              alt={key}
              className="Sponsor-logo"
            />
          ))}
          </div>
        </div>
        <div>
          <h3 className='Subtitle'>Siga a Furia</h3>
            <a href='https://www.instagram.com/furiagg/?hl=pt-br'>
              <img
                src={social['instagram']}
                alt={'instagram'}
                className="Social-logo"
              />
            </a>
            <a href='https://x.com/FURIA'>
              <img
                src={social['x']}
                alt={'twitter'}
                className="Social-logo"
              />
            </a>
            <a href='https://www.twitch.tv/furiatv?lang=pt-br'>
              <img
                src={social['twitch']}
                alt={'twitter'}
                className="Social-logo"
              />
            </a>
        </div>
        <div className='Copy-Right-Div'>
          <span>Desenvolvido por Gustavo Sardinha</span>
          <span>© 2025 Furia</span>
        </div>    
      </footer>
    </div>
  );
}
export default App;
