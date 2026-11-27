const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    // Criando o objeto com os dados do formulário
    const participante = {

        nome: document.getElementById("nome").value,
        nascimento: document.getElementById("nascimento").value,
        idade: document.getElementById("idade").value,
        email: document.getElementById("email").value,
        telefone: document.getElementById("telefone").value,
        cpf: document.getElementById("cpf").value,

        cidade: document.getElementById("cidade").value,
        estado: document.getElementById("estado").value,
        cep: document.getElementById("cep").value,

        evento: document.getElementById("evento").value,
        periodo: document.getElementById("periodo").value,
        experiencia: document.getElementById("experiencia").value,
        instituicao: document.getElementById("instituicao").value,
        motivacao: document.getElementById("motivacao").value,

        responsavel: document.getElementById("responsavel").value,
        telefoneResponsavel: document.getElementById("telefoneResponsavel").value

    };

    // Verificando se todos os campos foram preenchidos
    for (let campo in participante) {

        if (participante[campo].trim() === "") {

            alert("Preencha todos os campos!");
            return;

        }

    }

    // Verificando se os termos foram aceitos
    if (!document.getElementById("termos").checked) {

        alert("Aceite os termos para continuar!");
        return;

    }

    // Exibindo o objeto no console
    console.log(participante);

    // Exibindo mensagem de sucesso
    const mensagem = document.getElementById("mensagem");

    mensagem.textContent = "Inscrição realizada com sucesso!";
    mensagem.className = "sucesso";

    // Mostrando os dados cadastrados na tela
    const resultado = document.getElementById("resultado");

    resultado.textContent = JSON.stringify(participante, null, 2);

    // Limpando o formulário
    formulario.reset();

});