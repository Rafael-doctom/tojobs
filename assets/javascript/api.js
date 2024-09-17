function search() {
  const job = document.getElementById('job').value;
  const location = document.getElementById('location').value;
  alert(`Pesquisando por: ${job}, Localização: ${location}`);
}

async function getIssuesToJobs() {

  try {
    fetch("https://api.github.com/repos/frontendbr/vagas/issues")
      .then(response => response.json())
      .then(
        data => {
          renderJobs(data)
        }
      )
  } catch (error) {
    console.error(`Erro: ${error.message}`);
  };

}

const renderJobs = (data) => {

  data.forEach(element => {

    // const modality = (element.labels && element.labels.length > 0) ? element.labels[0].name : '';
    // const user = element.user.html_url

    if (element.state === 'open') {
      element.state = 'aberto'
    }

    if (element.title === element.title) {
      document.getElementById('cards').innerHTML += `
      <div class="card" id="card">

                    <span class="modalidade">
                       ${element.state}
                    </span>

                    <div class="format">
                        <img src="assets/images/programmer.png" alt="">
                        <div class="describe">
                            <h2 class="title" id="title">
                                ${element.title}
                            </h2>

                            <div class="details">
                                <span class="date-job">🕒 ${Intl.DateTimeFormat('pt-BR').format(new Date(element.created_at))}</span>
                            </div>

                            <div class="click">
                                <a href="${element.html_url}" target="_blank" class="click-button">VER DETALHES DA VAGA</a>
                            </div>

                            <span class="htmlUser">Por <a href="${element.user.html_url}" target="_blank">${element.user.login}</a></span>


                        </div>
                    </div>
                </div>
                `
    }

  });

}


getIssuesToJobs();
