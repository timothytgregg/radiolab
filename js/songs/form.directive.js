"use strict";

(function(){
  angular
  .module("songs")
  .directive("songForm", [function(){
    return{
      templateUrl:"js/songs/_song_form.html",
      scope: {
        song: "=",
        formType: "@"
      },
      link: function(scope) {
        console.log("form show directive");
      }
    }
  }])
}());
