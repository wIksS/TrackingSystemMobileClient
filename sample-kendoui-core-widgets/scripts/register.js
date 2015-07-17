(function (global) {
    var RegisterViewModel,
        app = global.app = global.app || {};

    RegisterViewModel = kendo.data.ObservableObject.extend({
        isLoggedIn: false,
        username: "",
        password: "",
        confirmPassword: "",

        onRegister: function () {
            var that = this,
                username = that.get("username").trim(),
                confirmPassword = that.get("password").trim(),
                password = that.get("password").trim();

            if (username === "" || password === ""  || confirmPassword === "") {
                navigator.notification.alert("All fields are required!",
                    function () { }, "Login failed", 'OK');

                return;
            }
            
            auth.register({"Email" : username,"Password" : password,"ConfirmPassword":password})
            	.then(function(data){
                	navigator.notification.alert(data);
            	},function(error){
                	errorHandler.handle(error);
            	})

        },

        clearForm: function () {
            var that = this;

            that.set("username", "");
            that.set("password", "");
            that.set("confirmPassword", "");            
        },

        checkEnter: function (e) {
            var that = this;

            if (e.keyCode == 13) {
                $(e.target).blur();
                that.onRegister();
            }
        }
    });

    app.registerService = {
        viewModel: new RegisterViewModel()
    };
})(window);