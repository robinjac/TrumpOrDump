
trumpOrDumpApp.controller('StartCtrl',function($scope,Trump){
	
	Trump.tweet.get({},function(data){
		$scope.showTweet = data.message;
	});
	
	$scope.tweets = Trump.getTweets(3);
	
});