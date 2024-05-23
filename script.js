function logar(){
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if(login == "admin" && senha == "admin"){
        alert('bem vindo');
        location.href =  "index.html";
    }else{
        alert('usuario ou senha incorreto');
    }
}