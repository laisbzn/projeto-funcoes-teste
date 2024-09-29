import { describe, it, expect } from 'vitest';
import { encontrarAluno, filtrarAlunos, construirAluno } from './aluno';

// Testes para a função encontrarAluno
describe('encontrarAluno', () => {
    it('deve retornar true se o aluno for encontrado na lista', () => {
        const lista = ['João', 'Maria', 'Carlos'];
        expect(encontrarAluno('Maria', lista)).toBe(true);
    });

    it('deve retornar false se o aluno não for encontrado na lista', () => {
        const lista = ['João', 'Maria', 'Carlos'];
        expect(encontrarAluno('Ana', lista)).toBe(false);
    });
});

// Testes para a função filtrarAlunos
describe('filtrarAlunos', () => {
    it('deve retornar um array com o aluno buscado se ele existir na lista', () => {
        const lista = ['João', 'Maria', 'Carlos', 'Maria'];
        expect(filtrarAlunos('Maria', lista)).toEqual(['Maria', 'Maria']);
    });

    it('deve retornar um array vazio se o aluno não for encontrado na lista', () => {
        const lista = ['João', 'Maria', 'Carlos'];
        expect(filtrarAlunos('Ana', lista)).toEqual([]);
    });
});

// Testes para a função construirAluno
describe('construirAluno', () => {
    it('deve retornar um objeto com nome e idade do aluno', () => {
        const resultado = construirAluno('João', 20);
        expect(resultado).toEqual({ nome: 'João', idade: 20 });
    });
});
