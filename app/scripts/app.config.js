angular
  .module('angAuthApp')
  .config(function ($urlRouterProvider, $stateProvider) {

    $urlRouterProvider
      .otherwise("/");

    $stateProvider
      .state("main",{
      url: "/",
      templateUrl: "/views/main.html",
    })

    // writing a state named register and configuring the object to that state.
    .state("register",{
      url: "/register",
      templateUrl: "/views/register.html",
    });
  });
