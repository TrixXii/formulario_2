import React, { useState, useEffect } from 'react';

export function CorreoIni() {
    const [email, setEmail] = useState('');
    const [emailValido, setEmailValido] = useState(false);
    const [inputClass, setInputClass] = useState('');

    useEffect(() => {
        if (!emailValido) {
            setInputClass({ border: '2px solid red' });

        } else {
            setInputClass('');
        }
    }, [emailValido]);

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

    return ( <
        form onSubmit = { valideForm }
        action = "pp.html" >
        <
        div class = { `input-group mb-3 ${inputClass}` } >
        <
        span class = "input-group-text"
        id = "basic-addon1" >
        Email <
        /span> <
        input class = "form-control"
        type = "email"
        name = "email"
        id = "email"
        placeholder = "tuemail@gmail.com"
        value = { email }
        onChange = { handleChange }
        required /
        >
        <
        span > { emailValido ? '✔' : 'Este campo es obligatorio' } < /span> < /
        div > <
        /form>
    );
}