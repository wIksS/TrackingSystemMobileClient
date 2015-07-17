auth = (function(){
    var url = baseUrl;
    
    return {
        login: function (user) {
            user = user || {};
            user['grant_type'] = 'password';

            return httpRequester.post(url + '/token',user);
        },
        register: function (user) {
            user = user || {};

            return httpRequester.post(url + '/api/account/register', user);
        },
    }
}())