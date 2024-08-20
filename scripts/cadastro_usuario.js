const biografiaInput = document.getElementById('biografia');
const charCount = document.getElementById('charCount');

biografiaInput.addEventListener('input', function() {
    const currentLength = biografiaInput.value.length;
    charCount.textContent = `${currentLength}/300 caracteres`;

    if (currentLength > 300) {
        charCount.style.color = 'red';
    } else {
        charCount.style.color = 'black';
    }
});
document.getElementById('foto').addEventListener('input', function() {
    const imgPreview = document.getElementById('imgPreview');
    const url = this.value;
  
    function getQueryParam(url, param) {
        const urlParams = new URLSearchParams(new URL(url).search);
        return urlParams.get(param);
    }

    
    const directImageUrl = getQueryParam(url, 'imgurl');

    if (directImageUrl && directImageUrl.match(/\.(jpeg|jpg|gif|png|webp|bmp)$/i)) {
        imgPreview.src = directImageUrl;  
    } else if (url.match(/^https?:\/\/.*\.(jpeg|jpg|gif|png|webp|bmp)$/i)) {
        imgPreview.src = url;  
    } else {
        imgPreview.src = 'https://via.placeholder.com/100';  
    }
});



document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const foto = document.getElementById('foto').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('confirmarSenha').value;
    const biografia = document.getElementById('biografia').value;

    if (senha !== confirmarSenha) {
        alert('As senhas não correspondem!');
        return;
    }
    if (biografiaInput.value.length > 300) {
        alert('A biografia não pode exceder 300 caracteres.');
        event.preventDefault(); 
    }

    const usuario = {
        id: Date.now(),
        nome: nome,
        foto: foto,
        email: email,
        senha: senha,
        biografia: biografia
    };

    localStorage.setItem('usuario', JSON.stringify(usuario));
    alert('Usuário cadastrado com sucesso!');    
});
