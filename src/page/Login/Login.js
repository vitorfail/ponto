import { useState} from 'react';
import Axios from '../../Axios'
import './Login.css';
import './Login.scss';
import { useHistory} from 'react-router-dom';


export default function Login(){
    const [senha, setsenha] = useState(null);
    const [usuario, setusuario] = useState(null);
    const [ mostrar, setmostrar] = useState('aviso');
    const [conteudoError, setconteudoError] = useState('Usuário ou senha incorretos')
    const history = useHistory();
    const [ logando, setlogando] = useState('');
    const [darespaco, setdarespaco] = useState('');
    const settoken = (t) => {
        localStorage.setItem('token_jwt', t);
    }
    function login_func(){
        if(senha === null || usuario === null || senha === '' || usuario === ''){
            setconteudoError('Preencha a senha e o usuário')
            setdarespaco('espaco')
            setlogando('');
            setmostrar('aviso')
            setTimeout(() =>  setmostrar('aviso mostrar'), 4);
        }
        else{
            setdarespaco('')
            setlogando('logando');
            setmostrar('aviso')
            Axios.post('api/login_admin', {id: usuario, senha: senha})
            .then(res =>{
                if(res.data.result.status === 'Operação inválida' || res.data.result.status === "Usuário não encontrado"){
                }
                else{
                    settoken(res.data.result.token)
                    setTimeout(() =>{ 
                                        history.push('/')
                                    }, 3000);
                }
            })
            .catch(error => {
                setconteudoError('Verifique sua internet e tente novamente')
                setdarespaco('espaco')
                setlogando('');
                setmostrar('aviso')
                setTimeout(() =>  setmostrar('aviso mostrar'), 30);    
            })    
        }
    }
    function entrar(event){
        if(event.key === "Enter" || event.key === 13){
            login_func()
        }
    }
    return(
        <div>
            <div className='back'>
                <div className='form'>
                    <div className='entrada'>
                        <div className='input'>
                            <input name= 'usuario' className={logando} onKeyPress={entrar} onChange={(event) => setusuario(event.target.value)} placeholder='user'/>
                            <p>Cód:</p>
                        </div>
                        <div className='input'>
                            <input type='password' className={logando} name='senha' onKeyPress={entrar} onChange={(event) => setsenha(event.target.value)}  placeholder='senha'/>
                            <p>Senha</p>
                        </div>
                        <button name='entrar' onClick={(event) =>login_func() } >Entrar</button>
                    </div>
                <div className='direitos'>
                    <p>@Todos os direitos reservados a Vitor Manoel</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
