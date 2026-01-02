document.getElementById('entrar-btn').addEventListener('click', function(event) {
  event.preventDefault();
  var email = document.getElementById('email').value;
  var senha = document.getElementById('senha').value;

  if (email!== '' && senha!== '') {
      window.location.href = 'gift.html';
  } else {
      alert('Preencha todos os campos!');
  }
});

document.getElementById('cadastro-link').addEventListener('click', function(event) {
  event.preventDefault();
  document.getElementById('cadastro-container').style.display = 'block';
  document.getElementById('container').style.display = 'none';
});

document.getElementById('cadastrar-btn').addEventListener('click', function(event) {
  event.preventDefault();
  var nome = document.getElementById('nome').value;
  var email = document.getElementById('email-cadastro').value;
  var senha = document.getElementById('senha-cadastro').value;
  var confirmaSenha = document.getElementById('confirma-senha-cadastro').value;

  if (nome!== '' && email!== '' && senha!== '' && confirmaSenha!== '') {
      alert('Cadastro realizado com sucesso!');

      document.getElementById('cadastro-container').style.display = 'none';
      document.getElementById('container').style.display = 'block';
  } else {
      alert('Preencha todos os campos!');
  }
});