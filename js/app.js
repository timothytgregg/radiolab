"use strict";

(function(){
  angular
  .module("radio", [
    "ui.router",
    'ng-token-auth',
    "songs"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ])
  .config([
    '$authProvider',
    AuthConfigFunction
  ]);

  function AuthConfigFunction($authProvider){
    $authProvider.configure({
      apiUrl: "http://localhost:3000"
    });
  }
  function RouterFunction($stateProvider){
    $stateProvider
    .state("signin", {
      url: "/signin",
      templateUrl: "js/users/signin.html",
      controller: "SessionsController",
      controllerAs: "SessionsViewModel"
    })
    .state("signout", {
      url: "/signout",
      templateUrl: "js/users/signout.html",
      controller: "SessionsController",
      controllerAs: "SessionsViewModel"
    })
    .state("signup",{
      url: '/signup',
      templateUrl: 'js/users/signup.html',
      controller: "SessionsController",
      controllerAs: "SessionsViewModel"
    })
    .state("songsIndex", {
      url: "/songs",
      templateUrl: "js/songs/index.html",
      controller: "SongsIndexController",
      controllerAs: "SongsIndexViewModel"
    })
    .state("songNew", {
      url: "/songs/new",
      templateUrl: "js/songs/new.html",
      controller: "SongsNewController",
      controllerAs: "SongsNewViewModel"
    })
    .state("songShow", {
      url: "/songs/:id",
      templateUrl: "js/songs/show.html",
      controller: "SongShowController",
      controllerAs: "SongShowViewModel"
    })
    .state("songEdit", {
      url: "/songs/:id/edit",
      templateUrl: "js/songs/edit.html",
      controller: "SongEditController",
      controllerAs: "SongEditViewModel"
    });
  }
})();
