export default {
    getManageHost: function() {
        return process.env.MANAGE_HOST;
    },
    getAppHost: function() {
        return process.env.APP_HOST;
    },
    getOauthHost: function() {
        return process.env.OAUTH_HOST;
    },
    getOpenHost: function() {
        return process.env.OPEN_HOST;
    },
    getLocalHost: function() {
        return window.location.host;
    }
}