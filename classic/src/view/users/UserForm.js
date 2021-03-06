Ext.define('Client.view.users.UserForm', {
    extend: 'Ext.window.Window',
    xtype: 'userform',

    requires: [
        'Client.view.users.UsersController'
    ],

    controller: 'users',

    autoShow: true,
    bodyPadding: 20,

    renderConfig: {
        record: null
    },

    items: [{
        xtype: 'form',
        defaultType: 'textfield',
        defaults: {
            anchor: '100%'
        },
        items: [
        {
            xtype: 'hiddenfield',
            name: 'url'
        },
        {
            fieldLabel: 'First Name',
            name: 'first_name'
        }, {
            fieldLabel: 'Last Name',
            name: 'last_name'
        },{
            fieldLabel: 'Email',
            name: 'email'
        },{
            fieldLabel: 'Username',
            name: 'username'
        }, {
            fieldLabel: 'Password',
            name: 'password',
            inputType: 'password'
        }],
        buttons: [{
            xtype: 'button',
            text: 'Save',
            handler: 'beforeSubmit'
        }]
    }],

    updateRecord: function(rec){
        if(rec){
            form = this.down('form');
            form.loadRecord(rec);
        }
    }

});
