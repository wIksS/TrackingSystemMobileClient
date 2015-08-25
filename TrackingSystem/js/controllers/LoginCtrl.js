/**
 * Created by Виктор on 27.9.2014 г..
 */

app.controller('LoginCtrl', ['$scope', '$rootScope','auth', 'identity', '$location','errorHandler','locationService',
    function ($scope, $rootScope, auth, identity, $location,errorHandler,locationService) {
    var user = identity.getUser();
    $scope.isLogged = identity.isLogged();
    $scope.isAdmin = identity.isAdmin();
    $scope.isTeacher = identity.isInRole('Teacher');
    $scope.user = user || {};
    $scope.username = user.username;

    $scope.$on('$routeChangeStart', function (next, current) {
        user = identity.getUser();

        $scope.isLogged = identity.isLogged();
        $scope.isAdmin = identity.isAdmin();
        $scope.isTeacher = identity.isInRole('Teacher');
        $scope.user = $scope.user || {};
        $scope.username = user.username;
    });

    $scope.login = function(user){
        auth.login(user)
            .then(function(data){
                identity.loginUser(data)
                //.then(function (data) {
                    $scope.isLogged = identity.isLogged();
                    var user = identity.getUser();
                    $scope.username = user.username;
                    $scope.isAdmin = identity.isAdmin();
                    $scope.isTeacher = identity.isInRole('Teacher');

                    //notifier.success('Successful login !');
                    $location.path('/students/groups');
                    $scope.$apply();
                //});               
            },
            function(err){
                errorHandler.handle(err);
            });
        };

    $scope.logout = function(){
        $location.path('/Login');
        var user = identity.getUser();
        identity.logoutUser();
        $scope.isLogged = identity.isLogged();
        $scope.isAdmin = identity.isAdmin();
        $scope.user.username = '';
        $scope.user.password = '';
        currentTeacher.deleteSessionTeacher();
        notifier.success('Successful logout');
    };
                             
	$scope.startExcursion = function(){
       var interval = setInterval(function(){
		 navigator.geolocation.getCurrentPosition(
                function (position) {
                    locationService.addLocation(position)
                    	.then(function(data){
                        	console.log(data);
                        	if(data.length > 0){
                                for(var key in data){
                                    var dist = data[key];
                                    alert('You are ' + dist.Distance + 'meters away from ' + dist.User.UserName )
                                }
                            }
                    	},function(err){
                        	console.log(err);
                    	});
                    
                },
                function (error) {
                    //default map coordinates
                    navigator.notification.alert("Unable to determine current location. Cannot connect to GPS satellite.",
                        function () { }, "Location failed", 'OK');
                },
                {
                    timeout: 30000,
                    enableHighAccuracy: true
                }
            );              
       }, 3000);
      
  	}                            
}]);