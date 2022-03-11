import {useState} from 'react'


function Condicional() {
    const [email, setEmail] = useState()
    const [userEmail, setUserEail] = useState()

    function enviarEmail(e) {
        e.preventDefault();
        setUserEail(email)
    }

    function limparEmail(e) {
        e.preventDefault();
        setUserEail('')
    }

    return (
        <div>
            <h2> Cadastre o seu e-mail:</h2>
            <form>
                <input 
                    type="email" 
                    placeholder="Digite se e-mail..."
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit" onClick={enviarEmail}>Enviar e-mail</button>
            </form>
            {userEmail && (
                <div>
                    <p> o Email do usuário é: {userEmail}</p>
                    <button type="submit" onClick={limparEmail}>Enviar e-mail</button>
                </div>
            )}
        </div>

    )
    
}

export default Condicional;