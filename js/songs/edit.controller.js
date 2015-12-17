"use strict";

(function(){
  angular
  .module("songs")
  .controller("SongsEditController", [
    "SongsFactory",
    SongsEditControllerFunction
  ]);

  function SongsEditControllerFunction(SongsFactory){
    this.song = SongsFactory.get({id: $stateParams.id});
     this.update = function(){
       this.song.$update({id: $stateParams.id})
     }
    }
  }
}());
