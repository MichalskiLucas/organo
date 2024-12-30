import Campeao from '../Campeao';
import './Classe.css';

const Classe = (props) => {
    return (
        props.agentes.length > 0 && <section className='classe' style={{ backgroundColor: props.corSecundaria }}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className='agentes'>
                {props.agentes.map(agente => <Campeao agente={agente.agente} cargo={agente.funcaoAgente} imagem={agente.imagem} />)}
            </div>
        </section>
    );
}

export default Classe;