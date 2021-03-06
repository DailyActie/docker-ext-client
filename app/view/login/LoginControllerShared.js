Ext.define('Client.view.login.LoginControllerShared', {
    extend: 'Ext.app.ViewController',

    doLogin: function(params){
        var me = this;
        Ext.Ajax.request({
            url: Client.utils.Constants.LIVE_URL + '/authenticate/',
            method: 'POST',
            params: params,
            success: function(response){
                var text = response.responseText;
                var data = Ext.decode(text, true);

                if(data.token){
                    me.saveToken(data.token);
                    me.createInterface();
                } else {
                    if(data.message){
                        Ext.Msg.alert("Bummer", data.message);
                    } else {
                        Ext.Msg.alert("Bummer", "Something went wrong.");
                    }
                }
            },
            failure: function(response){
                var text = response.responseText;
                var data = Ext.decode(text, true);
                var msg = "";
                if(data){
                    if(data.username) msg += "Username field: " + data.username[0] +"<br>";
                    if(data.password) msg += "Password field: " + data.password[0];
                    if(data.non_field_errors) msg = data.non_field_errors[0];
                }
                Ext.Msg.alert("Bummer", msg);
            }
        });
    },

    saveToken: function(token){
        //<debug>
        console.log(token);
        //</debug>
        var me = this;
        if(typeof(Storage) !== "undefined") {
            localStorage.setItem("token", Client.utils.Constants.TOKEN_PREFIX + token);
        }
    }

});
