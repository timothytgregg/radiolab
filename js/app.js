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
      template: "js/welcome/welcome.html",
    })
    .state("songsIndex", {
      url: "/songs",
      template: "js/songs/index.html",
      controller: "SongsIndexController",
      controllerAs: "SongsIndexViewModel"
    });
  }
})();
