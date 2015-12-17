'use strict';

(function(){
  angular
  .module("songs")
  .controller("SongEditController",[
    "$state",
    "SongsFactory",
    "$stateParams",
    SongEditControllerFunction
  ]);

  function SongEditControllerFunction($state, SongsFactory, $stateParams){
    this.song=SongsFactory.get({id:$stateParams.id});
  };
})();
