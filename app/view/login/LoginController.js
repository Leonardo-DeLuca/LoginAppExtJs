Ext.define('TutorialApp.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',

    requires: [
        'TutorialApp.view.login.LoginViewModel'
    ],

    init: function () {
        var me = this;
        me.getViewModel().set('username', localStorage.getItem('username'));
        me.getViewModel().set('password', localStorage.getItem('password'));
    },

    onLoginClick: function () {
        var me = this,
            form = me.getView().down('form'),
            values = form.getValues();

        if (form.isValid()) {
            localStorage.setItem("TutorialLoggedIn", true);
            localStorage.setItem('username', values['{login.username}']);
            localStorage.setItem('password', values.password);
            // TODO: implement login logic here
            console.log('Login successful!');

            this.getView().destroy();

            Ext.create({
                xtype: 'app-main'
            });

        }
    }
});