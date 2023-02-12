/**
 * Exercício 3
 * Defina a interface da API: https://api.origamid.dev/json/cursos.json e mostre os dados na tela.
 * Existem apenas dois níveis de cursos, Iniciante (iniciante) e Avançado (avancado). Se for para iniciante pinte o título de azul, para avançado pinte de vermelho.
 */

interface Course {
  nome: string
  horas: number
  aulas: number
  gratuito: boolean
  tags: string[]
  idAulas: number[]
  nivel: 'iniciante' | 'avançado'
}

async function fetchCursos() {
  const response = await fetch('https://api.origamid.dev/json/cursos.json');
  const data = await response.json();
  mostrarCursos(data);
}

fetchCursos();

function mostrarCursos(cursos: Course[]) {

  document.body.innerHTML += `
    <div>
      ${cursos.map((curso) => {
    return `
        <h3
        ${curso.nivel === 'iniciante' ?
        'style="color: blue"'
        : 'style="color: tomato"'
      }
        >${curso.nome}</h3>
        <p>Total de horas: ${curso.horas}</p>
        <p>Total de aulas: ${curso.aulas}</p>
        ${curso.gratuito ? 'Curso gratuito' : ''}
        <p>Nível do curso: ${curso.nivel}</p>
        <p>tags: ${[...curso.tags]}</p>
        `
  })}
    </div>
  `;
}


/* 
Outra solução

function mostrarCursos(cursos: Curso[]) {
  cursos.forEach((curso) => {
    let color;
    if (curso.nivel === 'iniciante') {
      color = 'blue';
    } else if (curso.nivel === 'avancado') {
      color = 'red';
    }
    document.body.innerHTML += `
      <div>
        <h2 style="color: ${color};">${curso.nome}</h2>
        <p>Horas: ${curso.horas}</p>
        <p>Aulas: ${curso.aulas}</p>
        <p>Tipo: ${curso.gratuito ? 'Gratuito' : 'Pago'}</p>
        <p>Tags: ${curso.tags.join(', ')}</p>
        <p>Aulas: ${curso.idAulas.join(' | ')}</p>
      </div>
    `;
  });
}
*/

