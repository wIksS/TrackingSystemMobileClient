app.factory('locationService', ['identity','baseUrl', function (identity,baseUrl) {
    var url = baseUrl;

    return {
        addLocation:function(position){
            var user = identity.getUser();
            position.coords.identity = user.token;
            
            return httpRequester.postAuthorized(url + '/api/location', position.coords);            
        }
    }
}]);