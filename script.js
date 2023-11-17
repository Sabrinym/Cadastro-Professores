document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('professor-form');
    const professorList = document.getElementById('professor-list');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const nome = document.getElementById('nome').value;
        const sobrenome = document.getElementById('sobrenome').value;
        const disciplinas = document.getElementById('disciplinas').value;

        // Crie um novo item na lista de professores
        const professorItem = document.createElement('li');
        professorItem.textContent = `${nome} ${sobrenome} - ${disciplinas}`;

        // Adicione o novo item à lista
        professorList.appendChild(professorItem);

        // Limpe os campos do formulário
        document.getElementById('nome').value = '';
        document.getElementById('sobrenome').value = '';
        document.getElementById('disciplinas').value = '';
    });
});
