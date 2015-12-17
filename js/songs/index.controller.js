"use strict";

(function(){
  angular
  .module("songs")
  .controller("SongsIndexController", [
    "SongsFactory",
    "$sce",
    SongsIndexControllerFunction
  ]);

  function SongsIndexControllerFunction(SongsFactory, $sce){
    this.songs = SongsFactory.query();
     this.newSong = new SongsFactory();
     this.play = function(song){
       this.playSong = song
       // workaround for ng-src not allowing expression {{song.audio_url}}
       this.playSong.encodedUrl = $sce.trustAsResourceUrl(song.audio_url)
     }
  }
}());
