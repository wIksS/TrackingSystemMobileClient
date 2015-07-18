location = (function(){
    var url = baseUrl;
    return {
        addLocation:function(position){
            return httpRequester.post(url + '/api/location', position);            
        }
    }
}())