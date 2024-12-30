import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css';
import { useState } from 'react';

const Formulario = (props) => {

    const [agente, setAgente] = useState('');
    const [imagem, setImagem] = useState('');
    const [funcaoAgente, setFuncaoAgente] = useState('');

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoAgenteCadastrado({
            agente,
            imagem,
            funcaoAgente
        });
        setAgente('');
        setImagem('');
        setFuncaoAgente('');
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do agente</h2>
                <CampoTexto obrigatorio={true} label="Agente" placeholder="Digite o nome do Agente" valor={agente} aoAlterado={valor => setAgente(valor)} />
                <CampoTexto obrigatorio={true} label="Imagem" placeholder="Digite o endereço da imagem" valor={imagem} aoAlterado={valor => setImagem(valor)} />
                <ListaSuspensa label="Função" itens={props.funcao} valor={funcaoAgente} aoAlterado={valor => setFuncaoAgente(valor)} />
                <Botao>Criar Card</Botao>
            </form>
        </section>
    )
}

export default Formulario;