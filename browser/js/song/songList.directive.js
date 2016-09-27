angular.module('juke')
  .directive('songList', function(SongFactory, PlayerFactory){
  	return {
  		restrict: 'E',
  		templateUrl: '/js/song/templates/songList.html',
  		scope: {
  			source: '='
  		},
  		link: function(scope){

  			scope.getCurrentSong = function () {
  			  return PlayerFactory.getCurrentSong();
  			};

  			scope.isPlaying = function (song) {
  			  return PlayerFactory.isPlaying() && PlayerFactory.getCurrentSong() === song;
  			};

  			scope.toggle = function (song) {
  			  if (song !== PlayerFactory.getCurrentSong()) {
  			    PlayerFactory.start(song, scope.source.songs);
  			  } else if ( PlayerFactory.isPlaying() ) {
  			    PlayerFactory.pause();
  			  } else {
  			    PlayerFactory.resume();
  			  }
  			};
  		}
  	};
  })
  .directive('doubleClick', function(PlayerFactory){
  	return {
  		restrict: 'A',
  		scope: {
  			doubleClick: '&'
  		},
  		link: function(scope, element){
  			element.on('dblclick', function(){
  				scope.doubleClick();
  			})
  		}
  	};
  });