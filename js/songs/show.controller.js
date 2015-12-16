"use strict";

(function(){
  angular
  .module("songs")
  .controller("SongsShowController", [
    "SongsFactory",
    "$stateParams",
    SongsShowControllerFunction
  ]);

  function SongsShowControllerFunction(SongsFactory, $stateParams){
    this.song = SongsFactory.get({id: $stateParams.id});
  }
}());
