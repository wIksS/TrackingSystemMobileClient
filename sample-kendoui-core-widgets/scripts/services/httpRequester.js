var httpRequester = (function (){
    return {
        get: function (url){
            return $.ajax({
                method: "GET",
                url: url,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            })
        },
        post: function (url,data){
            return $.ajax({
                method: "POST",
                url: url,
                data: objectToQueryString.parse(data),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            })
        },
        custom: function (type,url,data){
            return $.ajax({
                method: type,
                url: url,
                data: objectToQueryString.parse(data),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            })
        }
    }
}())