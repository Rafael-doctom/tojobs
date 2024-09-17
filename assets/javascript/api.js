function search() {
  const job = document.getElementById('job').value;
  const location = document.getElementById('location').value;
  alert(`Pesquisando por: ${job}, Localização: ${location}`);
}


async function getVagas() {

  try {
    fetch("https://api.github.com/repos/frontendbr/vagas/issues")
      .then(response => response.json())
      .then(
        data => {
          renderizarVagas(data)
          console.log(data)
        }
      )
  } catch (error) {
    console.error(`Erro: ${error.message}`);
  };


}

const renderizarVagas = (data) => {

  data.forEach(element => {
    console.log(element.url)
  });

}

// function renderizarVagas(data) {
//   const vagasContainer = document.getElementById('vagas-container');

//   // Limpa o conteúdo existente no container
//   vagasContainer.innerHTML = '';

//   data.forEach((vaga) => {
//     const card = document.createElement('div');
//     card.className = 'card';

//     const button = document.createElement('button');
//     const link = document.createElement('a');
//     link.href = vaga.html_url;
//     link.textContent = 'Mais detalhes...';
//     button.appendChild(link);

//     const describe = document.createElement('div');
//     describe.className = 'describe';

//     const title = document.createElement('h1');
//     title.classList.add("title")
//     title.textContent = vaga.title;


//     const span = document.createElement('span');
//     if (vaga.state == 'open') {
//       span.textContent = 'ABERTO'
//     } else {
//       span.textContent = 'FECHADO'
//     }


//     describe.appendChild(span);
//     describe.appendChild(title);
//     describe.appendChild(button);

//     card.appendChild(describe);

//     vagasContainer.appendChild(card);
//   });
// }

getVagas();
