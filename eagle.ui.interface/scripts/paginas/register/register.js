﻿var app = angular.module('eagle', []);
app.controller('registerCtrl', function ($scope, $http, $timeout) {
    $scope.register = {
        nome: "",
        endereco: "",
        estado: "",
        cidade: "",
        email: "",
        password: "",
        password1: ""
    };
    $scope.telaLogin = function(){
        window.location.href = "/";
    }
    $scope.tipoUser = 0;
    $scope.senhasDifer = false;
    $scope.usuarioCadastrado = false;

    $scope.senhasDiferem = function () {
        $scope.senhasDifer = true;
    };
    $scope.hideSenhasDiferem = function () {
        $scope.senhasDifer = false;
    };
    $scope.usuarioJaCadastrado = function () {
        $scope.usuarioCadastrado = true;
    };
    $scope.hideUsuarioJaCadastrado = function () {
        $scope.usuarioCadastrado = false;
    };
    $scope.submitForm = function () {
        if($scope.form.password != $scope.form.password1){
            $scope.senhasDiferem();
            $timeout(function () { 
                $scope.hideSenhasDiferem();
            }, 3000);
        }else{
            registrarUsuario($scope, $http,$timeout);
        }
};
});

function registrarUsuario($scope, $http, $timeout){
    $http({
        method: "POST",
        url: '/register',
        headers: {
            'Content-Type': "application/json"
          },
        data: {
            nome: $scope.form.nome,
            endereco: $scope.form.endereco,
            estado: $scope.form.estado,
            cidade: $scope.form.cidade,
            email: $scope.form.email,
            password: $scope.form.password
        }
    })
        .then(function (success) {
            if (success.data.success) {
                window.location.href = "/registerDone";
            }else{
                $scope.usuarioJaCadastrado();
                $timeout(function () { 
                    $scope.hideUsuarioJaCadastrado();
                }, 3000);
            }
        }, function (error) {
            alert(error);
        });
}