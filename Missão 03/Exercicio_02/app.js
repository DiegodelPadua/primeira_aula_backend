/***************************************************************************************************
 *  Objetivo: Desenvolver um sistema que gerencie as médias escolares de uma universidade
 *  Arquivo: Arquivo responsável pela entrada de dados
 *  Autor: Diego de Pádua
 *  Data: 27/02/2026
 *  Versão: 1.0
 ***************************************************************************************************/
//Importa a biblioteca readline
const { error } = require('console');
const readline = require('readline');
//Cria o objeto de entrada de dados
const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//importação das bibliotecas de tratamento e calculo
const tratamento = require("./tratamento.js")
const calculo = require("./modulo_02/calculo.js")

/**
 * Finaliza o programa exibindo uma mensagem de erro.
 * Encerra a interface de leitura e interrompe a execução
 * para evitar que o sistema continue após uma entrada inválida.
 */
function encerrarComErro(msg) {
    console.log("ERRO:", msg);
    entradaDeDados.close();
}

//entrada de Dados e entrada de tratamentos
entradaDeDados.question("Nome do Aluno: ", function(nomeAlunoRaw){
    const nomeAluno = tratamento.textoObrigatorio(nomeAlunoRaw)
    if (!tratamento.textoObrigatorio(nomeAluno)) return encerrarComErro("Nenhuma entrada pode ficar sem preenchimento")

    entradaDeDados.question("Nome do Professor: ", function(nomeProfessorRaw){
        const nomeProfessor = tratamento.textoObrigatorio(nomeProfessorRaw)
        if (!tratamento.textoObrigatorio(nomeProfessor)) return encerrarComErro("Nenhuma entrada pode ficar sem preenchimento")

        entradaDeDados.question("Sexo do Aluno (M/F): ", function(sexoAlunoRaw){
            const sexoAluno = tratamento.normalizarSexo(sexoAlunoRaw)
            if(!tratamento.normalizarSexo(sexoAluno)) return encerrarComErro("Sexo inválido. Use apenas M ou F.")

            entradaDeDados.question("Sexo do Professor (M/F):", function(sexoProfessorRaw){
                const sexoProfessor = tratamento.textoObrigatorio(sexoProfessorRaw)
                if(!tratamento.normalizarSexo(sexoProfessor)) return encerrarComErro("Sexo inválido. Use apenas M ou F.")

                entradaDeDados.question("Nome do curso: ", function(nomeCursoRaw){
                    const nomeCurso = tratamento.textoObrigatorio(nomeCursoRaw)
                    if (!tratamento.textoObrigatorio(nomeCurso)) return encerrarComErro("Nenhuma entrada pode ficar sem preenchimento")

                    entradaDeDados.question("Nome da disciplina: ", function (nomeDisciplinaRaw){
                        const nomeDisciplina = tratamento.textoObrigatorio(nomeDisciplinaRaw)
                        if (!tratamento.textoObrigatorio(nomeDisciplina)) return encerrarComErro("Nenhuma entrada pode ficar sem preenchimento")

                

                          //entradas de notas
                        entradaDeDados.question("Nota 1 (0 a 100): ", function (n1Raw) {
                            const n1 = tratamento.converterNota(n1Raw);
                            if (n1 === null) return encerrarComErro("Nota 1 inválida (não é número).");
                            if (!tratamento.validarNotaEntre0e100(n1)) return encerrarComErro("Nota 1 fora do intervalo (0 a 100).") 
              
                            entradaDeDados.question("Nota 2 (0 a 100): ", function (n2Raw) {
                              const n2 = tratamento.converterNota(n2Raw);
                              if (n2 === null) return encerrarComErro("Nota 2 inválida (não é número).");
                              if (!tratamento.validarNotaEntre0e100(n2)) return encerrarComErro("Nota 2 fora do intervalo (0 a 100).");
              
                                 entradaDeDados.question("Nota 3 (0 a 100): ", function (n3Raw) {
                                    const n3 = tratamento.converterNota(n3Raw);
                                     if (n3 === null) return encerrarComErro("Nota 3 inválida (não é número).");
                                     if (!tratamento.validarNotaEntre0e100(n3)) return encerrarComErro("Nota 3 fora do intervalo (0 a 100).");
              
                                     entradaDeDados.question("Nota 4 (0 a 100): ", function (n4Raw) {
                                         const n4 = tratamento.converterNota(n4Raw);
                                         if (n4 === null) return encerrarComErro("Nota 4 inválida (não é número).");
                                         if (!tratamento.validarNotaEntre0e100(n4)) return encerrarComErro("Nota 4 fora do intervalo (0 a 100).");
                                    
                                        //Calculo média + situação do aluno
                                        const media = calculo.calcularMedia(n1, n2, n3, n4)
                                        const situacao = calculo.verificarSituacao(media)

                                  
                                        let notaExame = "-"
                                        let mediaExame = "-"
                                        let statusFinal = ""

                                        if(situacao === "APROVADO"){
                                            statusFinal = "aprovado"
                                            imprimirRelatorio()
                                            return
                                        }
                                        if(situacao === "REPROVADO"){
                                            statusFinal = "reprovado"
                                            imprimirRelatorio()
                                            return
                                        }else{
                                            // caso o Aluno fique de Exame
                                            entradaDeDados.question("Aluno em exame. Digite a nota do exame (0 a 100): ", function(exameRaw){
                                                const exame = tratamento.converterNota(exameRaw)
                                                if (exame === null) return encerrarComErro("Nota do exame inválida (não é número).");
                                                if (!tratamento.validarNotaEntre0e100(exame)) return encerrarComErro("Nota do exame fora do intervalo (0 a 100).");

                                                notaExame = exame;

                                                const mediaDoExame = calculo.calcularMediaExame(media, exame);
                                                mediaExame = mediaDoExame.toFixed(2);

                                                const resultadoExame = calculo.verificarExame(mediaDoExame);
                                                statusFinal = (resultadoExame === "APROVADO_NO_EXAME") ? "aprovado no exame" : "reprovado no exame";
                                                
                                                imprimirRelatorio()

                                            })

                                        }
                                        function imprimirRelatorio(){
                                        const palavraAluno = tratamento.palavraPorSexo("aluno", sexoAluno);
                                        const palavraProfessor = tratamento.palavraPorSexo("professor", sexoProfessor);
                                        console.log("\n==============================");
                                        console.log("Relatório do aluno:");
                                        console.log(`O ${palavraAluno} ${nomeAluno} foi ${statusFinal} na disciplina ${nomeDisciplina}.`);
                                        console.log(`Curso: ${nomeCurso}`);
                                        console.log(`${palavraProfessor}: ${nomeProfessor}`);
                                        console.log(`Notas do aluno: ${n1}, ${n2}, ${n3}, ${n4}, ${notaExame}`);
                                        console.log(`Média Final: ${media.toFixed(2)}`);
                                        console.log(`Média final do Exame: ${mediaExame}`);
                                        console.log("==============================\n");

                                        entradaDeDados.close();
                                        }
                                    })
                                })
                            })
                        })
                            

                    })
                })
            })
        })
    })
})
