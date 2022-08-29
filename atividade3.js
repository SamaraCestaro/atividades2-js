//3 - Faça um programa que leia e valide as seguintes informações:
//- Nome: maior que 3 caracteres;
//- Idade: entre 0 e 150;
//- Salário: maior que zero;
//- Sexo: 'f' ou 'm';
//- Estado Civil: 's', 'c', 'v', 'd';
//Dica: se sua variável é texto, o tamanho dela está armazenado em: texto.length

let Nome = window.prompt(`
      nome:
    `)
let Idade = window.prompt(`
      Idade:
`)
let Salario = window.prompt(`
      Salario:
`)
let Sexo = window.prompt(`
      Sexo:
`)
let ec = window.prompt(`
      Estado Civil:
`) 
let sexoMin = Sexo.toLowerCase()
let ecMin = ec.toLowerCase()
window.onload = function info() {
  if (Idade >= 0 && Idade <= 150) {
    if (Nome.length > 3) {
      if (Salario > 0) {
        if (sexoMin === 'f' || sexoMin === 'm') {
          if (ecMin === 's' || ecMin === 'c' || ecMin === 'v' || ecMin === 'd') {
            alert(
              `Nome: ${Nome}, Idade: ${Idade}, Salario: ${Salario}, Sexo: ${Sexo}, Estado Civil: ${ec}`
            )
          }
        }
      }
    }
  } 
    alert('erro: informação invalida')
}

