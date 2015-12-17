(function(){
  angular
  .module('songs')
  .directive("songShow",function(){
    return{
      templateUrl:'js/songs/_song_show.html',
      link:function(){
        console.log('directive used');
      }
    };
  });
})();
