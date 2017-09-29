var strings = [];

var app = angular.module('eagle', []);

strings["pt-BR"] = {
    joinUs : "Cadastre-se",
    or : "Ou",
    signIn : "Entrar",
    keepMeLoggedIn : "Mantenha-me logado",
    newHere : "Novo aqui",
    name : "Nome",
    address : "Endereço",
    state : "Estado",
    city : "Cidade",
    email : "Email",
    password : "Senha",
    back : "Voltar",
    register : "Cadastrar",
    emailAddress : "Endereco de email",
    forgotPassword : "Esqueceu a senha",
    confirmThePassword : "Confirme a senha",
    loginVia : "Login via"
}

angular.module('eagle', [])
.service('strings', function () {

    return {
        strings : function(){
            return strings
        }
    };
});