Ext.define('Client.view.users.UsersControllerShared', {
    extend: 'Ext.app.ViewController',

    onAdd: function(btn){
        var me = this;
        me.createForm("Add User");
    },

    onEdit: function(rowModel, rec){
        var me = this;
        me.createForm("Edit User", rec);
    },

    onSubmit: function(submission) {
        console.log(submission.token);
        Ext.Ajax.request({
            headers: {
                "Authorization": submission.token
            },
            params: submission.values,
            method: submission.method,
            url: submission.url,
            success: submission.success,
            failure: submission.failure
        });
    },

    onRemove: function(rec, cb) {
        var me = this;
        //console.log(rec);

<<<<<<< HEAD
        var token = "";
=======
<<<<<<< HEAD
        //console.log(rec);

        var token = null;
=======
>>>>>>> 7bae75df0cfefafc058e3c2ff362bd2bb1d16f96
>>>>>>> 11bb54c1961b0c9deba22f819071924d26ec3e04
        if(!Client.utils.Constants.DISABLE_TOKEN){
            if (typeof(Storage) !== "undefined") {
                token = localStorage.getItem("token");
                if (!token) Ext.Msg.alert('Oops', "You will need to be logged in.");
            }
        }

        Ext.Ajax.request({
            headers: {
                "Authorization": token
            },
            method: 'DELETE',
            url: rec.get('url'),
            success: function(response){
                Ext.Msg.alert('Alright!', "User was removed.");
                Ext.getStore('Users').load();
                if(cb) cb();
            },
            failure: function(response){
                var result = Ext.decode(response.responseText);
                var msg = "";
                for(error in result){
                    msg+= error + ": " +result[error]+ " <br>";
                }
                Ext.Msg.alert('Oops!', msg);
            }
        });
    }

});
