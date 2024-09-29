// Função para encontrar aluno
export function encontrarAluno(nomeAluno, listaNomeAlunos) {
    return listaNomeAlunos.includes(nomeAluno);
}

// Função para filtrar alunos
export function filtrarAlunos(nomeBuscado, listaNomeAlunos) {
    return listaNomeAlunos.filter(aluno => aluno === nomeBuscado);
}

// Função para construir aluno
export function construirAluno(nomeAluno, idadeAluno) {
    return {
        nome: nomeAluno,
        idade: idadeAluno
    };
}
