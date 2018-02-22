'use strict';

// identity-obj-proxy
// https://github.com/keyanzhang/identity-obj-proxy/blob/master/src/index.js
module.exports = new Proxy({}, {
    get: function getter(target, key) {
        if (key === '__esModule') {
            return false;
        }
        // camel to kebab
        // https://gist.github.com/nblackburn/875e6ff75bc8ce171c758bf75f304707
        return key.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
    }
});