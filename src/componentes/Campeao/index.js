import './Campeao.css'

const Campeao = ({agente, imagem, cargo, corPrimaria}) => {
    return (
        <div className='campeao'>
            <div className='cabecalho' style={{ backgroundColor: corPrimaria }}>
                <img src={imagem} alt={agente} />
            </div>
            <div className='rodape'>
                <h4>{agente}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}

export default Campeao