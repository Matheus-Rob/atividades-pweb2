class Exame {
    constructor(pesos, respostasCorretas) {
        this.pesos = pesos;
        this.respostasCorretas = respostasCorretas;
        this.respostasAluno = [];
        this.notasAluno = [];
    }

    adicionar(respostas, nota = 0) {
        this.respostasAluno = respostas;
        
        for (let flag = 0; flag < this.respostasAluno.length; flag += 1) {
            if (this.respostasCorretas[flag] == this.respostasAluno[flag]) {
                nota += this.pesos[flag];
            }
        }

        this.notasAluno.push(nota);
    }

    media(media = 0) {
        for (let flag = 0; flag < this.notasAluno.length; flag += 1) {
            media += this.notasAluno[flag];
        }

        return (media/this.notasAluno.length);
    }

}

teste = new Exame([2, 4, 4], ['a', 'd', 'b']);

teste.adicionar(['b', 'b', 'b']);
teste.adicionar(['d', 'd', 'b']);
teste.adicionar(['a', 'd', 'b']);

console.log(teste.media());