"use strict";

(function() {
  angular
    .module("songs")
    .controller("SongsShowController", [
      "$state",
      "SongsFactory",
      "$stateParams",
      SongsShowControllerFunction
    ]);

  function SongsShowControllerFunction($state, SongsFactory, $stateParams) {
    this.song = SongsFactory.get({
      id: $stateParams.id
    })
    this.destroy = function() {
      this.song.$delete({
        id: $stateParams.id
      });
      $state.go("songsIndex")
    }
  }
}());
