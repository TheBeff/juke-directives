angular.module('juke')
	.directive("albumList", function(AlbumFactory){
		return {
			restrict: 'E',
			templateUrl: '/js/album/templates/albumList.html',
			scope: {
				source: '='
			}
		};
	});