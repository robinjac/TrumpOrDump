
trumpOrDumpApp.controller('StartCtrl',function($scope,Trump){
	
	$scope.showTweet = Trump.tweet.get();

});