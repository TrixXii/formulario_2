import React, { useState } from 'react';

export function CorreoIni() {
    const [email, setEmail] = useState('');
    const [emailValido, setEmailValido] = useState(false);
    const [mostrarFormulario2, setMostrarFormulario2] = useState(false);

    function valideForm(event) {
        const form = event.target;
        event.preventDefault();

        if (form.checkValidity()) {
            setMostrarFormulario2(true);
        } else {
            form.reportValidity();
        }
    }

    function handleChange(event) {
        setEmail(event.target.value);
        setEmailValido(event.target.checkValidity());

    }

    function SegonForm() {
        const [email, setEmail] = useState('');
        const [emailValido, setEmailValido] = useState(false);
        const [pwd, setPwd] = useState('');
        const [pwdValido, setPwdValido] = useState();

        function handleChangeEmail(event) {
            setEmail(event.target.value);
            setEmailValido(event.target.checkValidity());
        }

        function handleChangePwd(event) {
            setPwd(event.target.value);
            setPwdValido(event.target.checkValidity());
        }

        return < > < div className = "parrafo2" >
            <
            h3 > Crea una contraseña para empezar la suscripción < /h3>  <
            p > !Faltan solo algunos pasos¡ < /p>   <
            p > También odiamos el papeleo < /p>   <
            /div>  <
            div className = "form-floating mb-3" >
            <
            input
        className = { `form-control email ${
              emailValido ? 'border border-2 border-success' : 'border border-2 border-danger'
            }` }
        type = "email"
        name = "email"
        id = "email"
        value = { email }
        onChange = { handleChangeEmail }
        placeholder = "tuemail@gmail.com"
        required
            /
            >
            <
            label htmlFor = "email"
        className = "text-secondary" >
            Dirección de correo <
            /label> <
            span className = { `${emailValido ? '' : 'text-danger'}` } > { emailValido ? '' : 'Este campo es obligatorio' } <
            /span> <
            /div> <
            div className = "form-floating mb-3" >
            <
            input
        className = { `form-control pwd ${
              pwdValido ? 'border border-2 border-success' : 'border border-2 border-danger'
            }` }
        type = "password"
        name = "pwd"
        id = "pwd"
        value = { pwd }
        onChange = { handleChangePwd }
        placeholder = "Contraseña"
        required
        minLength = { 6 }
        maxLength = { 60 }
        /> <
        label htmlFor = "pwd"
        className = "text-secondary" >
            Contraseña <
            /label> <
            span className = { `${pwdValido ? '' : 'text-danger'}` } > { pwdValido ? '' : 'Este campo es obligatorio' } <
            /span> <
            /div> <
            div class = "form-check" >
            <
            input class = "form-check-input"
        type = "checkbox"
        value = ""
        id = "flexCheckDefault" / >
            <
            label class = "form-check-label text-light pb-2"
        for = "flexCheckDefault" >
        No, no quiero ofertas especiales de Netflix por correo
            <
            /label> <
            /div> <
            div className = "pp" >
            <
            button type = "submit"
        className = "bntEnviar" >
            Continuar < i className = "fa fa-angle-right" > < /i> <
            /button> <
            /div> <
            / > ; 
    }
    return ( < div > {
            mostrarFormulario2 ? ( <
                form onSubmit = { valideForm }
                action = "pp.html" > {
                    mostrarFormulario2 && < SegonForm > < /SegonForm> }  <
                    /form >): ( <form onSubmit = { valideForm }action = "pp.html" > <
                    div className = "parrafo" >
                    <
                    p > Disfruta donde quieras.Cancela cuando quieras. < /p>  <
                    p > ¿Quieres ver algo ya ? Escribe tu dirección de correo para crear una suscripción a Netflix o reactivarla. < /p>  <
                    /div> <div className = "form-floating mb-3" > <
                    input className = { `form-control email ${emailValido ? 'border border-2 border-success' : 'border border-2 border-warning'
              }` }
                    type = "email"
                    name = "email"
                    id = "email"
                    value = { email }
                    onChange = { handleChange }
                    minLength = { 5 }
                    maxLength = { 50 }
                    placeholder = "tuemail@gmail.com"
                    required / >
                    <
                    label htmlFor = "email"
                    className = "text-secondary" > Dirección de correo < /label>  <
                    span className = { `${emailValido ? '' : 'text-warning'}` } > { emailValido ? '' : 'Este campo es obligatorio' } < /span> </div >
                    <
                    div className = "pp" >
                    <
                    button type = "buttom"
                    className = "bntEnviar" > Empezar < i className = "fa fa-angle-right" > < /i> </button >
                    <
                    /div>  <
                    /form >
                )
            } <
            /div>
        );
    }