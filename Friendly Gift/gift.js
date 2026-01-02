//F5 no titulo
document.getElementById('title').addEventListener('click', function() {
  location.reload();
});

//Doar_botão:
const cidadesProximas = document.getElementById('cidades-proximas');
const cidadesLista = document.getElementById('cidades-lista');
const instituicoesLista = document.getElementById('instituicoes-lista');

cidadesProximas.addEventListener('click', () => {
  cidadesLista.style.display = 'flex';
});

document.getElementById('canoas').addEventListener('click', () => {
  instituicoesLista.innerHTML = '';
  const instituicoes = [
    { nome: 'Sou Solidário', link: 'solidario.html' },
    { nome: 'We Care', link: 'wecare.html' },
  ];
  instituicoes.forEach((instituicao) => {
    const button = document.createElement('button');
    button.textContent = instituicao.nome;
    button.addEventListener('click', () => {
      window.location.href = instituicao.link;
    });
    instituicoesLista.appendChild(button);
  });
  instituicoesLista.style.display = 'flex';
});

document.getElementById('porto-alegre').addEventListener('click', () => {
  instituicoesLista.innerHTML = '';
  const button = document.createElement('button');
  button.textContent = 'Instituição';
  instituicoesLista.appendChild(button);
  instituicoesLista.style.display = 'flex';
});

document.getElementById('cachoeirinha').addEventListener('click', () => {
  instituicoesLista.innerHTML = '';
  const button = document.createElement('button');
  button.textContent = 'Instituição';
  instituicoesLista.appendChild(button);
  instituicoesLista.style.display = 'flex';
});