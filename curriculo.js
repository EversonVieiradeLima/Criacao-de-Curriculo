/* A JavaScript code that is used to upload an image. */
const inpuFile = document.querySelector("#picture__input");
const pictureImage = document.querySelector(".picture__image");
const pictureImageTxt = "Adcione sua foto";
pictureImage.innerHTML = pictureImageTxt;

inpuFile.addEventListener("change", function(e) {
    const inputTarget = e.target;
    const file = inputTarget.files[0];

    if (file) {
        const reader = new FileReader();

        reader.addEventListener("load", function(e) {
            const readerTarget = e.target;

            const img = document.createElement("img");
            img.src = readerTarget.result;
            img.classList.add("picture__img");

            pictureImage.innerHTML = '';
            pictureImage.appendChild(img);
        });

        reader.readAsDataURL(file);
    } else {
        pictureImage.innerHTML = pictureImageTxt;
    }
});

const btn2 = document.querySelector(".inputButton2");

/* A function that is called when the button is clicked. */
btn2.addEventListener("click", function() {
    const nomeCompleto = document.querySelector(".nomeCompleto");

    /* Getting the value of the input and putting it in the textContent of the element. */
    nomeCompleto.textContent = localStorage.getItem('valueNomeCompleto');

    /**
     * It creates a paragraph element with the class 'option' and a paragraph element with the class
     * 'classP' and appends them to the element with the id 'idDiv'.
     * @param valor - the value of the localStorage item.
     * @param divDel - The id of the div that will be removed if the localStorage is empty.
     * @param idDiv - The ID of the div that will be created.
     * @param informativo - The text that will be displayed before the data.
     * @param classP - The class of the element that will be created.
     */
    function dados(valor, divDel, idDiv, informativo, classP) {
        if(localStorage.getItem(valor) == "") {
            const box = document.getElementById(divDel);
            box.parentNode.removeChild(box);
        } else {
            function criarDados() {
                const box = document.querySelector(idDiv);

                const elemento1 = document.createElement('p');
                elemento1.setAttribute('class', 'option');
                elemento1.textContent = informativo;

                const elemento2 = document.createElement('p');
                elemento2.setAttribute('class', classP);
                elemento2.textContent = localStorage.getItem(valor);

                /* Appending the elements to the div. */
                box.appendChild(elemento1);
                box.appendChild(elemento2);
            }

            criarDados()
        }
    }

    /* Creating a paragraph element with the class 'option' and a paragraph element with the class
    'classP' and appends them to the element with the id 'idDiv'. */
    dados('valueNacionalidade', 'nacionalidade', '#nacionalidade', '', 'nacionalidade');
    dados('valueIdade', 'idade', '#idade' , ',', 'idade');
    dados('valueNumero1', 'numero1', '#numero1', 'Calular 1:', 'numero1');
    dados('valueNumero2', 'numero2', '#numero2', 'Celular 2:', 'numero2');
    dados('valueEmpregado', 'empregado', '#empregado', 'Está empregado:', 'empregado');
    dados('valueHabilitacao', 'habilitacao', '#habilitacao', 'Carteira de habilitação:', 'habilitacao');
    dados('valueAutomovel', 'automovel', '#automovel', 'Automóvel próprio:', 'automovel');

    dados('valueEnderco', 'endereco', '#endereco', '', 'endereco');
    dados('valueBairro', 'bairro', '#bairro', ',', 'bairro');
    dados('valueCep', 'cep', '#cep', 'CEP:', 'cep');
    dados('valueCidade', 'cidade', '#cidade', '-', 'cidade');
    dados('valueEstado', 'estado', '#estado', '-', 'estado');
    dados('valueEmail', 'email', '#email', 'E-mail:', 'email');
    dados('valueLinkedin', 'linkedin', '#linkedin', 'LinkedIn:', 'linkedin');
    dados('valueViagens', 'viagem', '#viagem', 'Disponibilidade para viagens:', 'viagem');
    dados('valueMudarSe', 'mudarSe', '#mudarSe', 'Disponibilidade para mudar-se:', 'mudarSe');

    dados('valueResumo', 'resumo', '#resumo', 'Resumo Profissional', 'resumo');
    dados('valueObjetivos', 'objetivos', '#objetivos', 'Objetivos Profissionais', 'objetivos');

    dados('velueEscolaridade', 'escolaridade', '#escolaridade', 'Escolaridade', 'escolaridade');

    const escolaridades = localStorage.getItem('velueEscolaridade');
    if(tipoEscolaridade2.includes(escolaridades)) {
        dados('valueCurso', 'curso', '#curso', 'Curso:', 'curso');
        dados('valueSemestre', 'semestre', '#semestre', 'Semestre:', 'semestre');
        dados('valueInstituicao', 'instituicao', '#instituicao', 'Instituição:', 'instituicao');
        dados('valueDuracao', 'duracao', '#duracao', 'Duração:', 'duracao');
        dados('valueConclusao', 'anoConclusao', '#anoConclusao', 'Ano de conclusão:', 'anoConclusao');
    }

    /* Removing the button from the DOM. */
    const button2 = document.getElementById('inputButton2');
    button2.parentNode.removeChild(button2);
});


/**
 * When the button is clicked, remove the button from the DOM.
 */
const imprimir = document.querySelector("#imprimir")

function botaoimprimir() {
    const imprimir = document.getElementById('imprimir');
    imprimir.parentNode.removeChild(imprimir);

    const picture = document.getElementById('picture__input');
    if (picture.value == "") {
        const photo = document.getElementById('photo');
        photo.parentNode.removeChild(photo);
    }

    const atencao = document.getElementById('atencao');
    atencao.parentNode.removeChild(atencao);
    
}

