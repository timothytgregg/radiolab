"use strict";

(function(){
  angular
  .module("songs")
  .controller("SongsNewController", [
    "$state",
    "SongsFactory",
    SongsNewControllerFunction
  ]);

  function SongsNewControllerFunction($state, SongsFactory){
    this.song = new SongsFactory();
    this.create = function(){
      this.song.$save();
      $state.go("songsIndex");
    }
  }
}());
