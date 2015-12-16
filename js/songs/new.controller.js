"use strict";

(function(){
  angular
  .module("songs")
  .controller("SongsNewController", [
    "SongsFactory",
    SongsNewControllerFunction
  ]);

  function SongsNewControllerFunction(SongsFactory){
    this.song = new SongsFactory();
    this.create = function(){
      this.song.$save();
    }
  }
}());
