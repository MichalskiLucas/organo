import './Classe.css';

const Classe = (props) => {
    return (
        <section className='classe' style={{ backgroundColor: props.corSecundaria}}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
        </section>
    );
}

export default Classe;