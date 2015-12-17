'use strict';

(function(){
  angular
  .module("songs")
  .controller("SongShowController",[
    "$state",
    "SongsFactory",
    "$stateParams",
    SongShowControllerFunction
  ]);

  function SongShowControllerFunction($state, SongsFactory, $stateParams){
    this.song=SongsFactory.get({id:$stateParams.id})
    this.destroy=function(){
      this.song.$delete({id:$stateParams.id});
      console.log('destroyed!');
      $state.go("songsIndex")
    }
  };
})();
