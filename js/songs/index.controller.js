"use strict";

(function(){
  angular
  .module("songs")
  .controller("SongsIndexController", [
    "SongsFactory",
    SongsIndexControllerFunction
  ]);

  function SongsIndexControllerFunction(SongsFactory){
    this.songs = SongsFactory.query();
  }
}());
