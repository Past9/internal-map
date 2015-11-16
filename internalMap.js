"use strict";

module.exports = function() {

    var map = new WeakMap();

    return function(object) {
        if (!map.has(object))
            map.set(object, {});
        return map.get(object);
    };
 
};

