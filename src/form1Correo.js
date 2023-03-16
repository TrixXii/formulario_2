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
    return ( < div > {
            mostrarFormulario2 ? (

                mostrarFormulario2 && < SegonForm > < /SegonForm>  ): 
                ( < form class = "fondo"
                    onSubmit = { valideForm }
                    action = "" >
                    <
                    div className = "parrafo" >
                    <
                    p > Disfruta donde quieras.Cancela cuando quieras. < /p>   <
                    p > ¿Quieres ver algo ya ? Escribe tu dirección de correo para crear una suscripción a Netflix o reactivarla. < /p>   <
                    /div >  <
                    div className = "form-floating mb-3" >
                    <
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
                    className = "text-secondary" > Dirección de correo < /label>   <
                    span className = { `${emailValido ? '' : 'text-warning'}` } > { emailValido ? '' : 'Este campo es obligatorio' } < /span> <
                    /div > <
                    div className = "pp" >
                    <
                    button type = "buttom"
                    className = "bntEnviar" > Empezar < i className = "fa fa-angle-right" > < /i> </button >
                    <
                    /div>   <
                    /form >
                )
            } < /div>
        );
    }

    function SegonForm() {
        const [email, setEmail] = useState('');
        const [pwd, setPwd] = useState('');
        const [emailValido, setEmailValido] = useState('La dirección de correo es obligatoria');
        const [pwdValido, setPwdValido] = useState('La contraseña es obligatoria');
        const [mostrarFormulario3, setMostrarFormulario3] = useState(false);

        function handleChangeEmail(event) {
            setEmail(event.target.value);
            setEmailValido(event.target.checkValidity() ? 'valid' : 'La dirección de correo debe tener de 5 a 50 caracteres');
        }

        function handleChangePwd(event) {
            setPwd(event.target.value);
            setPwdValido(event.target.checkValidity() ? 'valid' : 'La contraseña debe tener entre 6 y 60 caracteres');
        }

        function valideForm2(event) {

            const form2 = event.target;
            event.preventDefault();

            if (form2.checkValidity()) {
                event.preventDefault();

                setMostrarFormulario3(true);
            } else {
                event.preventDefault();

                form2.reportValidity();
            }
        }

        return ( < div > {
            mostrarFormulario3 ? (
                mostrarFormulario3 && < TercerForm > < /TercerForm> 
            ) :
                ( < div class = " fondo2 " >
                    <
                    div class = "text-secondary pb-2 text-lg-start" >
                    <
                    small > PASO 1 DE 3 < /small> <
                    /div> <
                    div className = "parrafo2" >
                    <
                    h3 > Crea una contraseña para empezar la suscripción < /h3>   <
                    p > !Faltan solo algunos pasos¡ < br / > También odiamos el papeleo < /p>    <
                    /div> 


                    <
                    form onSubmit = { valideForm2 } >
                    <
                    div className = "form-floating mb-3" >
                    <
                    input className = { `form-control email ${emailValido === 'valid' ? 'border border-2 border-success' : 'border border-2 border-danger'
                        }` }
                    type = "email"
                    name = "email"
                    id = "email"
                    value = { email }
                    onChange = { handleChangeEmail }
                    placeholder = "tuemail@gmail.com"
                    required minLength = { 5 }
                    maxLength = { 50 }
                    /> <
                    label htmlFor = "email"
                    className = "text-secondary" > Dirección de correo < /label>  <
                    span className = { `${emailValido === 'valid' ? '' : 'text-danger'}` } > { emailValido === 'valid' ? '' : emailValido } < /span> <
                    /div>  <
                    div className = "form-floating mb-3" >
                    <
                    input className = { `form-control pwd ${pwdValido === 'valid' ? 'border border-2 border-success' : 'border border-2 border-danger'
                    }` }
                    type = "password"
                    name = "pwd"
                    id = "pwd"
                    value = { pwd }
                    onChange = { handleChangePwd }
                    placeholder = "Contraseña"
                    required minLength = { 6 }
                    maxLength = { 60 }
                    />  <
                    label htmlFor = "pwd"
                    className = "text-secondary" > Contraseña < /label>  <
                    span className = { `${pwdValido === 'valid' ? '' : 'text-danger'}` } > { pwdValido === 'valid' ? '' : pwdValido } < /span> <
                    /div>  <
                    div class = "form-check" >
                    <
                    input class = "form-check-input"
                    type = "checkbox"
                    value = ""
                    id = "flexCheckDefault" / >
                    <
                    label class = "form-check-label pb-2"
                    for = "flexCheckDefault" >
                    No, no quiero ofertas especiales de Netflix por correo <
                    /label>  <
                    /div>  <
                    div className = "pp mt-2" >

                    <
                    button type = "buttom"
                    className = "bntEnviar2" > Siguiente < /button>  <
                    /div>  <
                    /form> <
                    /div>
                )
        } < /div>);
    }


    function TercerForm() {

        return ( < div class = " fondo3" >
            <
            div class = "text-secondary pb-2 text-lg-start" >
            <
            small > PASO 2 DE 3 < /small> <
            /div> <
            div className = "parrafo2" >
            <
            h3 > Selecciona el plan ideal para ti < /h3>   <
            p > < i class = "fa fa-check text-danger" > < /i> Ver todo lo que quieras <br/ > < i class = "fa fa-check text-danger" > < /i> Recomendaciones exclusivas para ti <br/ > < i class = " text-danger fa fa-check" > < /i> Cambia de plan o cancélalo cuando quieras  </p >
            <
            /div>   <
            table class = "table " >
            <
            thead >
            <
            tr >
            <
            th scope = "col" > < /th> <
            th scope = "col"
            class = "cont" > < div class = "seleccion" > Básico con anuncios < div class = "flecha" > < /div></div > < /th> <
            th scope = "col"
            class = "cont" > < div class = "seleccion" > Estandar < div class = "flecha" > < /div></div > < /th> <
            th scope = "col"
            class = "cont" > < div class = "seleccion" > Premium < div class = "flecha" > < /div></div > < /th> <
            /tr> <
            /thead> <
            tbody >
            <
            tr >
            <
            th scope = "row"
            class = "text-start" > Precio al mes < /th> <
            td > 5, 49€ < /td> <
            td > 12, 99€ < /td> <
            td > 17, 99€ < /td> <
            /tr> <
            tr >
            <
            th scope = "row"
            class = "text-start" > Calidad de video < /th> <
            td > Buena < /td> <
            td > Muy buena < /td> <
            td > Excepcional < /td> <
            /tr> <
            tr >
            <
            th scope = "row"
            class = "text-start" > Resolución < /th> <
            td > 720 p < /td> <
            td > 1080 p < /td> <
            td > 4 K + HDR < /td> <
            /tr> <
            tr >
            <
            th scope = "row"
            class = "mida text-start" > Multidispositivo: TV, ordenador, teléfono móvil y tableta < /th> <
            td > < i class = "fa fa-check " > < /i></td >
            <
            td > < i class = "fa fa-check" > < /i></td >
            <
            td > < i class = "fa fa-check" > < /i></td >
            <
            /tr> <
            tr >
            <
            th scope = "row"
            class = "text-start" > Descargas < /th> <
            td > < i class = "fa fa-minus" > < /i></td >
            <
            td > < i class = "fa fa-check" > < /i></td >
            <
            td > < i class = "fa fa-check" > < /i></td >
            <
            /tr> <
            /tbody> <
            /table> <
            div className = "pp mt-2" >

            <
            button type = "buttom"
            className = "w-50 bntEnviar2" > Siguiente < /button>  <
            /div>  <
            /div>
        );
    }