"use strict";

(function(){
  angular
  .module("radio", [
    "ui.router",
    "songs"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ]);

  function RouterFunction($stateProvider){
    $stateProvider
    .state("welcome", {
      url: "/welcome",
      templateUrl: "js/welcome/welcome.html",
    })
    .state("songsIndex", {
      url: "/songs",
      templateUrl: "js/songs/index.html",
      controller: "SongsIndexController",
      controllerAs: "SongsIndexViewModel"
    });
  }
})();
