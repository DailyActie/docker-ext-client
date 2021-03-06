Ext.define('Client.view.main.MainController', {
    extend: 'Client.view.main.MainControllerShared',

    alias: 'controller.main',

    onLogout: function(btn){
        if(typeof(Storage) !== "undefined") {
            localStorage.removeItem("token");
        }

        Ext.Viewport.removeAll();
        Ext.Viewport.add({
            xtype: 'login',
            fullscreen: true
        });
    },

    onBack: function(btn){
        Ext.ComponentQuery.query('#users')[0].setActiveItem(0);
        btn.hide();
    }
});
