import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Classe from './componentes/Classe';

function App() {

  const classes = [
    {
      nome: 'Duelista',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'Controlador',
      corPrimaria: '#C28757',
      corSecundaria: '#F7E8D9'
    },
    {
      nome: 'Iniciador',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Sentinela',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    }
  ];

  const [agentes, setAgentes] = useState([])

  const aoAgenteNovo = (agente) => {
    setAgentes([...agentes, agente])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario funcao={classes.map(classe => classe.nome)} aoAgenteCadastrado={aoAgenteNovo} />
      {classes.map(classe => <Classe 
       nome={classe.nome} 
       corPrimaria={classe.corPrimaria} 
       corSecundaria={classe.corSecundaria} 
       agentes={agentes.filter(agente => agente.funcaoAgente === classe.nome)}/>)}
    </div>
  );
}

export default App;
