function  strict() {
    'use strict';
    function nested(params) {  }

    return "ok " +nested();



}

function notStrict(params) {
    return "ok";
}