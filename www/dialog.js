//cordova.define("cordova-plugin-dialog.CustomDialog",function(require, exports, module) {
        var exec = require("cordova/exec");
        module.exports = {
            show: function(content){
                exec(
                function(message){
                    console.log(message);
                },
                function(errorMessage){
                    console.log(errorMessage);
                },
                "CustomDialog",
                "show",
                [content]);
            }
        }
//});