"use strict";

(function(){
  angular
    .module("songs")
    .directive("songPlayer", [
      "SongsFactory",
      "$state",
      SongPlayerDirectiveFunction
    ])
    function SongPlayerDirectiveFunction(SongsFactory, $state){
      return {
        templateUrl: "js/songs/player.html",
        scope: {
          song: "="
        }
      }
    }
})();