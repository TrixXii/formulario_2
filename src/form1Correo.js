import React, { useState } from 'react';
import mastercard from './imag/mastercard.jpg';
import visa from './imag/visa.jpg';
import amex from './imag/amex.jpg';



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
            mostrarFormulario2 ? (mostrarFormulario2 && < SegonForm > < /SegonForm>  ): 
                ( < form class = "fondo"
                    onSubmit = { valideForm }
                    action = "" >
                    <
                    div className = "parrafo" >
                    <
                    p > Disfruta donde quieras.Cancela cuando quieras. < /p>   <
                    p > ¿Quieres ver algo ya ? Escribe tu dirección de correo para crear una suscripción a Netflix o reactivarla. < /p>   < /
                    div > <
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
                    span className = { `${emailValido ? '' : 'text-warning'}` } > { emailValido ? '' : 'Este campo es obligatorio' } < /span> < /
                    div > <
                    div className = "pp" >
                    <
                    button type = "buttom"
                    className = "bntEnviar" > Empezar < i className = "fa fa-angle-right" > < /i> </button >
                    <
                    /div>   < /
                    form >
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
                        small > PASO 1 DE 3 < /small> < /
                        div > <
                        div className = "parrafo2" >
                        <
                        h3 > Crea una contraseña para empezar la suscripción < /h3>   <
                        p > !Faltan solo algunos pasos¡ < br / > También odiamos el papeleo < /p>    < /
                        div >

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
                        />  <
                        label htmlFor = "email"
                        className = "text-secondary" > Dirección de correo < /label>   <
                        span className = { `${emailValido === 'valid' ? '' : 'text-danger'}` } > { emailValido === 'valid' ? '' : emailValido } < /span>  <
                        /div >  <
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
                        span className = { `${pwdValido === 'valid' ? '' : 'text-danger'}` } > { pwdValido === 'valid' ? '' : pwdValido } < /span> < /
                        div > <
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
                        /label>  < /
                        div > <
                        div className = "pp mt-2" >

                        <
                        button type = "buttom"
                        className = "bntEnviar2" > Siguiente < /button>  < /
                        div > <
                        /form> < /
                        div >
                    )
            } < /div>);
        }


        function TercerForm() {
            const [selected, setSelected] = useState("");
            const [errorMessage, setErrorMessage] = useState("");
            const precios = ["5,49€", "12,99€", "17,99€"];
            const [precioSeleccionado, setPrecioSeleccionado] = useState(precios[0]);
            const [mostrarFormulario4, setMostrarFormulario4] = useState(false);


            const handleClick = (plan) => {
                setSelected(plan);
                const precio = parseFloat(precios[plan].replace(",", ".").replace("€", ""));
                setPrecioSeleccionado(precio);
            };


            function valideForm3(event) {

                const form3 = event.target;
                event.preventDefault();
                if (selected === "") {
                    setErrorMessage('Seleccione algun plan');
                } else {
                    if (form3.checkValidity()) {
                        setMostrarFormulario4(true);
                    } else {
                        form3.reportValidity();
                    }
                }
            }
            return ( < div > {
                        mostrarFormulario4 ? (
                            mostrarFormulario4 && < QuartoForm precio = { precioSeleccionado }
                            />):
                            ( < div class = " fondo3" >
                                <
                                div class = "text-secondary pb-2 text-lg-start" >
                                <
                                small > PASO 2 DE 3 < /small>  <
                                /div >  <
                                div className = "parrafo2" >
                                <
                                h3 > Selecciona el plan ideal para ti < /h3>    <
                                p > < i class = "fa fa-check text-danger" > < /i> Ver todo lo que quieras <br/ > < i class = "fa fa-check text-danger" > < /i> Recomendaciones exclusivas para ti <br/ > < i class = " text-danger fa fa-check" > < /i> Cambia de plan o cancélalo cuando quieras  </p >
                                <
                                /div>    <
                                form onSubmit = { valideForm3 } >
                                <
                                table class = "table text-center " >
                                <
                                thead >
                                <
                                tr >
                                <
                                th scope = "col" > < /th>  <
                                th scope = "col"
                                className = "cont" >
                                <
                                div className = { `seleccion ${selected === 0 ? "active" : ""}` }
                                onClick = {
                                    () => handleClick(0) } >
                                Básico con anuncios < div className = { `flecha ${selected === 0 ? 'active' : ''}` } > < /div> <
                                /div> <
                                /th> <
                                th scope = "col"
                                className = "cont" >
                                <
                                div className = { `seleccion ${
                    selected === 1 ? "active" : ""
                }` }
                                onClick = {
                                    () => handleClick(1) } >
                                Estandar < div className = { `flecha ${selected === 1 ? 'active' : ''}` } > < /div> <
                                /div> <
                                /th> <
                                th scope = "col"
                                className = "cont" >
                                <
                                div className = { `seleccion ${
                    selected === 2 ? "active" : ""
                }` }
                                onClick = {
                                    () => handleClick(2) } >
                                Premium < div className = { `flecha ${selected === 2 ? 'active' : ''}` } > < /div> <
                                /div> <
                                /th> <
                                /tr> <
                                /thead>  <
                                tbody >
                                <
                                tr >
                                <
                                th scope = "row"
                                class = "text-start" > Precio al mes < /th>  <
                                td className = { `colorSelect ${selected === 0 ? 'active' : ''}` } > 5, 49€ < /td>  <
                                td className = { `colorSelect ${selected === 1 ? 'active' : ''}` } > 12, 99€ < /td>  <
                                td className = { `colorSelect ${selected === 2 ? 'active' : ''}` } > 17, 99€ < /td>              <
                                /tr> <
                                tr >
                                <
                                th scope = "row"
                                class = "text-start" > Calidad de video < /th>  <
                                td className = { `colorSelect ${selected === 0 ? 'active' : ''}` } > Buena < /td>  <
                                td className = { `colorSelect ${selected === 1 ? 'active' : ''}` } > Muy buena < /td>  <
                                td className = { `colorSelect ${selected === 2 ? 'active' : ''}` } > Excepcional < /td> <
                                /tr >  <
                                tr >
                                <
                                th scope = "row"
                                class = "text-start" > Resolución < /th>  <
                                td className = { `colorSelect ${selected === 0 ? 'active' : ''}` } > 720 p < /td>  <
                                td className = { `colorSelect ${selected === 1 ? 'active' : ''}` } > 1080 p < /td>  <
                                td className = { `colorSelect ${selected === 2 ? 'active' : ''}` } > 4 K + HDR < /td>  <
                                /tr >  <
                                tr >
                                <
                                th scope = "row"
                                class = "mida text-start" > Multidispositivo: TV, ordenador, teléfono móvil y tableta < /th>  <
                                td className = { `colorSelect ${selected === 0 ? 'active' : ''}` } > < i class = "fa fa-check " > < /i></td >
                                <
                                td className = { `colorSelect ${selected === 1 ? 'active' : ''}` } > < i class = "fa fa-check " > < /i></td >
                                <
                                td className = { `colorSelect ${selected === 2 ? 'active' : ''}` } > < i class = "fa fa-check " > < /i></td >
                                <
                                /tr>  <
                                tr >
                                <
                                th scope = "row"
                                class = "text-start" > Descargas < /th>  <
                                td className = { `colorSelect ${selected === 0 ? 'active' : ''}` } > < i class = "fa fa-minus" > < /i></td >
                                <
                                td className = { `colorSelect ${selected === 1 ? 'active' : ''}` } > < i class = "fa fa-check " > < /i></td >
                                <
                                td className = { `colorSelect ${selected === 2 ? 'active' : ''}` } > < i class = "fa fa-check " > < /i></td >
                                <
                                /tr>  <
                                /tbody >  <
                                /table>  {
                                    errorMessage && < p class = "text-danger" > { errorMessage } < /p>} <
                                        div className = "pp mt-2" >
                                        <
                                        button type = "buttom"
                                    className = "w-50 bntEnviar2" > Siguiente < /button>   <
                                        /div>  <
                                        /form> <
                                        /div>)
                                } < /div>);
                            }

                            function QuartoForm({ precio }) {
                                const [cardType, setCardType] = useState("");

                                const [cardNumber, setCardNumber] = useState("");
                                const [cardNumberValid, setCardNumberValid] = useState("Escribe un numero de tarjeta"); // agregar estado de validación

                                const [cardExpiration, setCardExpiration] = useState("");
                                const [cardExpirationValid, setCardExpirationValid] = useState("Escribe una fecha de vencimiento"); // agregar estado de validación

                                const [cardName, setCardName] = useState("");
                                const [cardNameValid, setCardNameValid] = useState("Escribe tu nombre"); // agregar estado de validación

                                const [cardLastName, setCardLastName] = useState("");
                                const [cardApValid, setCardApValid] = useState('valid'); // agregar estado de validación

                                const [cardCvv, setCardCvv] = useState("");
                                const [cardCvvValid, setCardCvvValid] = useState("Escribe un codigo de seguridad ()"); // agregar estado de validación

                                const handleCardNumberChange = (event) => {
                                    const regex = /^4[0-9]{12}(?:[0-9]{3})?$/; // Visa regex
                                    if (regex.test(event.target.value)) {
                                        setCardType(visa);
                                    } else {
                                        const regex = /^5[1-5][0-9]{14}$/; // Mastercard regex
                                        if (regex.test(event.target.value)) {
                                            setCardType(mastercard);
                                        } else {
                                            const regex = /^3[47][0-9]{13}$/; // Amex regex
                                            if (regex.test(event.target.value)) {
                                                setCardType(amex);
                                            } else {
                                                setCardType("");
                                            }
                                        }
                                    }
                                    setCardNumber(event.target.value);
                                    setCardNumberValid(event.target.checkValidity() ? 'valid' : 'Escribe un numero de tarjeta valido')
                                };

                                const handleSubmit = (event) => {
                                    event.preventDefault();
                                    alert("OK");
                                };

                                const handleCardNameChange = (event) => {
                                    setCardName(event.target.value);
                                    setCardNameValid(event.target.checkValidity() ? 'valid' : 'El nombre debe tener como minimo 3 caracteres'); // actualizar estado de validación
                                };

                                const handleCardApChange = (event) => {
                                    setCardLastName(event.target.value);
                                    setCardApValid(event.target.checkValidity() ? 'valid' : 'El nombre debe tener como minimo 1 caracteres'); // actualizar estado de validación
                                };

                                const handleCardExpirationChange = (event) => {
                                    cardExpiration(event.target.value);
                                    setCardExpirationValid(event.target.checkValidity() ? 'valid' : 'Deve tener un intervalo del 2023 al 2048'); // actualizar estado de validación
                                };

                                const handleCardCvvChange = (event) => {
                                    setCardCvv(event.target.value);
                                    setCardCvvValid(event.target.checkValidity() ? 'valid' : 'El codigo deve ser entre 3 y 4 numeros'); // actualizar estado de validación
                                };

                                return ( <
                                    div class = "fondo2" >
                                    <
                                    div class = "text-secondary pb-2 text-lg-start" >
                                    <
                                    small > PASO 3 DE 3 < /small>  <
                                    /div >  <
                                    div className = "parrafo2" >
                                    <
                                    h3 > Configura tu targeta de crédito o débito < /h3>    <
                                    p > < img width = "40"
                                    src = { mastercard }
                                    /> <img width="40" src={visa}/ > < img width = "40"
                                    src = { amex }
                                    /></p >
                                    <
                                    /div>    <
                                    form onSubmit = { handleSubmit } >
                                    <
                                    div className = "form-floating mb-3" >
                                    <
                                    input className = { `form-control name ${cardNameValid === 'valid' ? 'border border-2 border-success' : 'border border-2 border-danger'
          }` }
                                    type = "text"
                                    name = "name"
                                    id = "name"
                                    required pattern = "[A-Za-z]{3,}"
                                    value = { cardName }
                                    onChange = { handleCardNameChange }
                                    placeholder = "Escribe tu nombre" /
                                    >
                                    <
                                    label htmlFor = "name"
                                    className = "text-secondary" > Nombre < /label>   <
                                    span className = { `${cardNameValid === 'valid' ? '' : 'text-danger'}` } > { cardNameValid === 'valid' ? '' : cardNameValid } < /span>  <
                                    /div >  <
                                    div className = "form-floating mb-3" >
                                    <
                                    input className = { `form-control last-name ${cardApValid === 'valid' ? 'border border-2 border-success' : 'border border-2 border-danger'
          }` }
                                    type = "text"
                                    name = "last-name"
                                    id = "last-name"
                                    pattern = "[A-Za-z]{1,}"
                                    value = { cardLastName }
                                    onChange = { handleCardApChange }
                                    placeholder = "Escribe tu apellido" /
                                    >
                                    <
                                    label htmlFor = "last-name"
                                    className = "text-secondary" > Apellido < /label>   <
                                    span className = { `${cardApValid === 'valid' ? '' : 'text-danger'}` } > { cardApValid === 'valid' ? '' : cardApValid } < /span>  <
                                    /div > 

                                    <
                                    div className = "form-floating mb-3" >
                                    <
                                    input className = { `form-control card-number ${cardNumberValid === 'valid' ? 'border border-2 border-success' : 'border border-2 border-danger'
          }` }
                                    type = "text"
                                    name = "card-number"
                                    id = "card-number"
                                    required pattern = "[0-9]{13,19}"
                                    value = { cardNumber }
                                    onChange = { handleCardNumberChange }
                                    placeholder = "Numero de tarjeta" /
                                    >
                                    <
                                    label htmlFor = "card-number"
                                    className = "text-secondary" > Numero de tarjeta < span > { cardType && < img src = { `${cardType}` }
                                        alt = { cardType }
                                        width = "30" / > } < /span></label >
                                    <
                                    span className = { `${cardNumberValid === 'valid' ? '' : 'text-danger'}` } > { cardNumberValid === 'valid' ? '' : cardNumberValid } < /span> 

                                    <
                                    /div > 

                                    <
                                    div className = "form-floating mb-3" >
                                    <
                                    input className = { `form-control expiration ${cardExpiration === 'valid' ? 'border border-2 border-success' : 'border border-2 border-danger'
          }` }
                                    type = "month"
                                    id = "expiration"
                                    required min = { new Date().toISOString().split("-").slice(0, 2).join("-") }
                                    max = {
                                        new Date(
                                            new Date().getFullYear() + 25,
                                            11
                                        ).toISOString().split("-").slice(0, 2).join("-")
                                    }
                                    value = { cardExpiration }
                                    onChange = { handleCardExpirationChange }
                                    />  <
                                    label htmlFor = "expirationr"
                                    className = "text-secondary" > Fecha de vencimiento(MM / AA) < /label>   <
                                    span className = { `${cardExpiration === 'valid' ? '' : 'text-danger'}` } > { cardExpiration === 'valid' ? '' : cardExpiration } < /span> 

                                    <
                                    /div > 

                                    <
                                    div >
                                    <
                                    label htmlFor = "cvv" > CVV * < /label> <
                                    input type = "password"
                                    id = "cvv"
                                    required pattern = "[0-9]{3,4}"
                                    value = { cardCvv }
                                    onChange = {
                                        (event) => setCardCvv(event.target.value) }
                                    /> <
                                    /div> <
                                    div > Precio seleccionado: { precio }€ < /div> <
                                    button type = "submit" > Pagar < /button> <
                                    /form> <
                                    /div>
                                );


                            }