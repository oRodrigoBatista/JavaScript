document.querySelector('form').addEventListener("click",
    function (e) {

        const ufSelect = document.querySelector("#uf");
        const valueUF = ufSelect.value;
        console.log(valueUF)
        function validar(uf) {

            var er = /A[CLMP]|BA|CE|ES|M[AGST]|P[ABEIR]|R[JNORS]|S[CEP]|[GT]O/i;
            return er.test(uf);

        }
        let ufSelected = validar(valueUF)
        console.log(ufSelected)
        if (ufSelected === true) {
            document.querySelector('.errorUF').innerHTML = "";

        } else {
            document.querySelector('.errorUF').innerHTML = "EX.: SP";
        }



    });


document.querySelector('form').addEventListener("click", function (e) {
    const camposEmail = document.querySelector('#email');
    const capturaEmail = camposEmail.value;

    function validaEmail() {
        const ev = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?/i;
        return ev.test(capturaEmail)
    }
    let capturaFuncaoValidaEmail = validaEmail(capturaEmail);
    console.log(capturaFuncaoValidaEmail)
    if (capturaFuncaoValidaEmail === true) {
        document.querySelector('.errorEmail').innerHTML = "";
    } else {
        document.querySelector('.errorEmail').innerHTML = "example@example.com";
    }



    console.log(capturaFuncaoValidaEmail)
});

document.querySelector('form').addEventListener("click", function (e) {
    const chaveCEP = this.querySelector('#cep');
    const valorCEP = chaveCEP.value;

    function validaCEP() {
        const regexCEP = /^[0-9]{5}-[0-9]{3}$/;
        return regexCEP.test(valorCEP)
    }
    let capturaFuncaoCEP = validaCEP(valorCEP)
    console.log(capturaFuncaoCEP)
    if (capturaFuncaoCEP === true) {
        document.querySelector('.errorCEP').innerHTML = "";
    }else {
        document.querySelector('.errorCEP').innerHTML = "(Formato aceito: XXXXX-XXX)";
    }
});

document.querySelector("form")
    .addEventListener('submit', e => {
        //console.log("enviar o formulário")

        e.preventDefault();
    })