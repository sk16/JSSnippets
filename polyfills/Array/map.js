(function () {
    if(!Array.prototype.map) {
        Array.prototype.map = function(cb) {
            var self = this;
            var length = self.length;
            var result = new Array(length);
            if(typeof cb !== 'function') {
                throw new TypeError(cb + ' is not a function');
            }
            for(var i = 0; i < length; i++) {
                if(i in self) {
                    result[i] = cb(self[i], i, self);
                }
            }
            return result;
        }
    }
})();