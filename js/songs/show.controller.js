'use strict';

(function(){
  angular
  .module("songs")
  .controller("SongShowController",[
    "SongsFactory",
    "$stateParams",
    SongShowControllerFunction
  ]);

  function SongShowControllerFunction(SongsFactory, $stateParams){
    this.song=SongsFactory.get({id:$stateParams.id})
  };
})();
