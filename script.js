
fetch('http://10.111.9.76:3000/salas')
    .then(response => response.json())
    .then(salas => {
        if (salas.length > 0) {
             
            preencherButton(salas)
        } else {
            throw new Error("Nenhuma sala encontrada");
        }
    })
    .catch(error => console.error('Erro ao buscar dados:', error));

// Função para preencher o formulário com os dados do usuário
function preencherButton(salas) {
    salas.forEach((sala, index) => {
        const elementoId = `sala${index + 1}`;
        const elemento = document.getElementById(elementoId);
        if (elemento) {
            elemento.innerText = sala.nome || '';
        }
    });
}