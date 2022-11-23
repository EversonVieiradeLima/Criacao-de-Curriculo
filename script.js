/**
 * When the user presses the enter key, the focus is set to the input element with the id that is
 * passed to the function.
 * @param idInput - The ID of the input field you want to focus on.
 */
function EnterTab(idInput) {
    document.getElementById(idInput).focus();
}

/**
 * If the length of the value of the input is 0, add an open parenthesis to the beginning of the value.
 * If the length of the value of the input is 3, add a close parenthesis and a space to the end of the
 * value. If the length of the value of the input is 10, add a dash to the end of the value.
 * @param telefone - the name of the input field
 */
function mascaraTelefone(telefone) {
    if(telefone.value.length == 0) {
        telefone.value = '(' + telefone.value; //quando começamos a digitar, o script irá inserir um parênteses no começo do campo.
    }
    if(telefone.value.length == 3) {
        telefone.value = telefone.value + ') '; //quando o campo já tiver 3 caracteres (um parênteses e 2 números) o script irá inserir mais um parênteses, fechando assim o código de área.
    }
    if(telefone.value.length == 10) {
        telefone.value = telefone.value + '-'; //quando o campo já tiver 10 caracteres, o script irá inserir um tracinho, para menlhor visualização do telefone.
    }
}

/**
 * If the length of the value of the idade input is 2, then add the string ' anos' to the value of the
 * idade input.
 * @param idade - The input field
 */
function mascaraIdade(idade) {
    if(idade.value.length == 2) {
        idade.value = idade.value + ' anos';
    }
}

/**
 * If the length of the value of the input is 5, then add a dash to the end of the value.
 * @param cep - The input field that you want to apply the mask to.
 */
function mascaraCep(cep) {
    if(cep.value.length == 5) {
        cep.value = cep.value + '-';
    }
}

function mascaraLinkedin(link) {
    if(link.value.length == 0) {
        link.value = 'www.linkedin.com/in/' + link.value;
    }
}

// function displayNone(divDel) {
//     const box = document.getElementById(divDel);
//     box.setAttribute('style', 'display: none;');
// }

// displayNone('curso');
// displayNone('semestre');
// displayNone('instituicao');
// displayNone('duracao');
// displayNone('conclusao');

function grauEscolaridade() {

    function curso(divDel, idDiv, informativo, classInput, idInput, enterTab, descricao) {
        const escolaridade = document.querySelector('#inputEscolaridade')

        if(tipoEscolaridade1.includes(escolaridade.value)) {

            // const box = document.getElementById(divDel);
            // box.setAttribute('style', 'display: none;');
            // escolaridade.setAttribute('onkeypress', "grauEscolaridade();EnterTab('objetivos')");

        } else if(tipoEscolaridade2.includes(escolaridade.value)) {

            // escolaridade.setAttribute('onkeypress', "grauEscolaridade();EnterTab('inputCurso')");

            /* Selecting the element with the id that is passed to the function. */
            const box1 = document.getElementById(divDel);
            box1.setAttribute('style', 'display: flex;');

            const box = document.querySelector(idDiv);

            const createDiv = document.createElement('div');
            createDiv.setAttribute('class', 'linhaDeConteudo');
            // const boxDiv = document.querySelector('.linhaDeConteudo');

            const elemento1 = document.createElement('label');
            elemento1.setAttribute('for', idInput);
            elemento1.textContent = informativo;

            const elemento2 = document.createElement('label');
            elemento2.setAttribute('for', idInput);
            elemento2.setAttribute('style', 'color: red;');
            elemento2.textContent = '*';

            const elemento3 = document.createElement('input');
            elemento3.setAttribute('class', classInput);
            elemento3.setAttribute('id', idInput);
            elemento3.setAttribute('onkeypress', enterTab);
            elemento3.setAttribute('autocomplete', 'off');

            const elemento4 = document.createElement('b');
            elemento4.setAttribute('style', 'font-style: italic;');
            elemento4.textContent = descricao;

            /* Appending the elements to the div. */
            box.appendChild(createDiv);
            createDiv.appendChild(elemento1);
            createDiv.appendChild(elemento2);
            box.appendChild(elemento3);
            box.appendChild(elemento4);
        }
    }

    curso('curso', '#curso', 'Curso:', 'inputCurso', 'inputCurso', "EnterTab('inputSemestre')", '');
    curso('semestre', '#semestre', 'Semestre:', 'inputSemestre', 'inputSemestre', "EnterTab('inputInstituicao')", 'Ex: 1º, 2º, 3º');
    curso('instituicao', '#instituicao', 'Instituição:', 'inputInstituicao', 'inputInstituicao', "EnterTab('inputDuracao')", '');
    curso('duracao', '#duracao', 'Duração:', 'inputDuracao', 'inputDuracao', "EnterTab('inputConclusao')", 'Ex: 8 horas, 2 meses, 1 ano');
    curso('conclusao', '#conclusao', 'Ano de conclusão:', 'inputConclusao', 'inputConclusao', "EnterTab('objetivos')", 'Somente números');

}

/* Selecting the button element with the class `inputButton` and assigning it to the variable `btn`. */
const btn = document.querySelector("#inputButton");

/* A function that is executed when the button is clicked. */
btn.addEventListener("click", function() {

    /**
     * It validates a form field by checking if the length of the value is less than the specified
     * amount
     * @param idInput - The id of the input you want to validate.
     * @param quantidade - the minimum amount of characters that the input must have.
     * @param fraseAlert - The message that will be displayed if the input is empty.
     * @returns false.
     */
    function valida_form(idInput, quantidade, fraseAlert) {
        if(document.getElementById(idInput).value.length < quantidade) {
            alert(fraseAlert);
            document.getElementById(idInput).focus();
            return false
        }
    }

    /* Validating the form. */
    valida_form('inputNome', 14, 'Por favor, preencha o campo Nome Completo');
    valida_form('inputNumero1', 9, 'Por favor, preencha o campo Celular 1');
    valida_form('inputIdade', 7, 'Por favor, preencha o campo Idade');
    valida_form('inputEndereco', 14, 'Por favor, preencha o campo Endereço residencial');
    valida_form('inputBairro', 3, 'Por favor, preencha o campo Bairro');
    valida_form('inputCep', 5, 'Por favor, preencha o campo CEP');
    valida_form('inputEstado', 2, 'Por favor, preencha o campo Estado');
    valida_form('inputCidade', 3, 'Por favor, preencha o campo Cidade');
    valida_form('inputEmail', 10, 'Por favor, preencha o campo E-mail');
    valida_form('inputEscolaridade', 10, 'Por favor, preencha o campo Escolaridade');

    valida_form('objetivos', 50, 'Por favor, preencha o campo Objetivos Profissionais com no mínimo 50 caracteres');
    valida_form('resumo', 50, 'Por favor, preencha o campo Resumo Profissional com no mínimo 50 caracteres');

    /* Saving the values of the input fields in the localStorage. */
    const nomeCompleto = document.querySelector("#inputNome").value;
    const nacionalidade = document.querySelector(".inputNacionalidade").value;
    const numero1 = document.querySelector(".inputNumero1").value;
    const numero2 = document.querySelector(".inputNumero2").value;
    const idade = document.querySelector("#inputIdade").value;
    const endereco = document.querySelector(".inputEndereco").value;
    const bairro = document.querySelector(".inputBairro").value;
    const cep = document.querySelector(".inputCep").value;
    const estado = document.querySelector("#inputEstado").value;
    const cidade = document.querySelector(".inputCidade").value;
    const email = document.querySelector(".inputEmail").value;

    const linkedin = document.querySelector(".inputLinkedin").value;

    const empregado = document.querySelector("#inputEmpregado").value;
    const habilitacao = document.querySelector("#inputHabilitacao").value;
    const automovel = document.querySelector("#inputAutomovel").value;
    const viagens = document.querySelector("#inputViagens").value;
    const mudarSe = document.querySelector("#inputMudarSe").value;

    const escolaridade = document.querySelector("#inputEscolaridade").value;

    const objetivos = document.querySelector("#objetivos").value;
    const resumo = document.querySelector("#resumo").value;

    /* Saving the values of the input fields in the localStorage. */
    localStorage.setItem('valueNomeCompleto', nomeCompleto);
    localStorage.setItem('valueNacionalidade', nacionalidade);
    localStorage.setItem('valueNumero1', numero1);
    localStorage.setItem('valueNumero2', numero2);
    localStorage.setItem('valueIdade', idade);
    localStorage.setItem('valueEnderco', endereco);
    localStorage.setItem('valueBairro', bairro);
    localStorage.setItem('valueCep', cep);
    localStorage.setItem('valueEstado', estado);
    localStorage.setItem('valueCidade', cidade);
    localStorage.setItem('valueEmail', email);

    localStorage.setItem('valueLinkedin', linkedin);

    localStorage.setItem('valueEmpregado', empregado);
    localStorage.setItem('valueHabilitacao', habilitacao);
    localStorage.setItem('valueAutomovel', automovel);
    localStorage.setItem('valueViagens', viagens);
    localStorage.setItem('valueMudarSe', mudarSe);

    localStorage.setItem('velueEscolaridade', escolaridade);

    localStorage.setItem('valueObjetivos', objetivos);
    localStorage.setItem('valueResumo', resumo);

    const curso = document.querySelector("#inputCurso").value;
    const semestre = document.querySelector("#inputSemestre").value;
    const instituicao = document.querySelector("#inputInstituicao").value;
    const duracao = document.querySelector("#inputDuracao").value;
    const conclusao = document.querySelector("#inputConclusao").value;

    localStorage.setItem('valueCurso', curso);
    localStorage.setItem('valueSemestre', semestre);
    localStorage.setItem('valueInstituicao', instituicao);
    localStorage.setItem('valueDuracao', duracao);
    localStorage.setItem('valueConclusao', conclusao);

});