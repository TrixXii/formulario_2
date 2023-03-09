import React, { useState, useEffect } from 'react';

export function CorreoIni() {
    const [email, setEmail] = useState('');
    const [emailValido, setEmailValido] = useState(false);


    function valideForm(event) {
        const form = event.target;

        if (form.checkValidity()) {
            alert('Formulario enviado');
        } else {
            event.preventDefault();
            form.reportValidity();
        }
    }

    function handleChange(event) {
        setEmail(event.target.value);
        setEmailValido(event.target.checkValidity());
    }

    return ( < form onSubmit = { valideForm }
        action = "pp.html" >
        <
        div class = "form-floating mb-3" >
        <
        input className = { `form-control ${emailValido ? 'border border-2 border-success' : 'border border-2 border-danger'}` }
        type = "email"
        name = "email"
        id = "email"
        value = { email }
        onChange = { handleChange }
        placeholder = "tuemail@gmail.com"
        required / >
        <
        label
        for = "email"
        class = "text-secondary" > Direccion de correo < /label> <
        span className = { `${emailValido ? '' : 'text-danger'}` } > { emailValido ? '' : 'Este campo es obligatorio' } < /span>< /
        div >
        <
        div class = "pp" >
        <
        button type = "submit"
        class = "bntEnviar" >
        Empezar < i class = "fa fa-angle-right" > < /i> < /button > < /
        div > < /
        form >
    );
}