app.factory('studentsService', ['identity','baseUrl','httpRequester', function (identity,baseUrl,httpRequester) {
    var url = baseUrl;

    return {
        getStudents:function(){
            var user = identity.getUser();
            
            return httpRequester.getAuthorized(url + '/api/students',user.token);            
        },
        addStudentToGroup:function(userName){
            var user = identity.getUser();
            
            return httpRequester.postAuthorized(url + '/api/students/'+userName,{'identity' : user.token});            
        }        
    }
}]);