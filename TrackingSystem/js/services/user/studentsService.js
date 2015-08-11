app.factory('studentService', ['identity','baseUrl','httpRequester', function (identity,baseUrl,httpRequester) {
    var url = baseUrl;

    return {
        getStudents:function(){
            var user = identity.getUser();
            
            return httpRequester.getAuthorized(url + '/api/users',user.token);            
        }
    }
}]);