"use strict";

(function(){
  angular
  .module("songs")
  .controller("SongsEditController", [
    "$stateParams",
    "SongsFactory",
    SongsEditControllerFunction
  ]);

  function SongsEditControllerFunction($stateParams, SongsFactory){
    this.song = SongsFactory.get({id: $stateParams.id});
     this.update = function(){
       this.song.$update({id: $stateParams.id})
     }
    }
}());
