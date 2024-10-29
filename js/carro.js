async function enviaFormulario() {
    //recuperar as informações do formulario e colocar em objetos JSON
    const carroDTO = {
        "marca": document.querySelectorAll("input")[0].value,
        "modelo": document.querySelectorAll("input")[1].value,
        "ano": Number(document.querySelectorAll("input")[2].value),
        "cor": document.querySelectorAll("input")[3].value,
    }

    try {
        const respostaServidor = await fetch("http://localhost:3333/novo/carro", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(carroDTO)
        });
    
        if(!respostaServidor.ok) {
            throw new Error("erro ao enviar os dados para o Servidor. contate o adm do sistema");
        }
    
        alert("Carro cadastrado com sucesso!");
    } catch (error) {
        console.log(error);
        alert(`erro ao se comunicar com o servidor. ${error}`);
    }
}