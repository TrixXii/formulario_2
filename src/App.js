import logo from './imag/logo.png';
import './App.css';
import './form.css'
import { CorreoIni } from './form1Correo'


function App() {
    return ( <
        div className = "App" >
        <
        header className = "FormHeader" > <
        img class = "logo"
        src = { logo }
        /> <
        CorreoIni > < /CorreoIni> < /
        header > <
        /div>
    );
}

export default App;