(function() {
    if(! Array.prototype.filter) {
        Array.prototype.filter = function(cb) {
            var self = this;
            var len = self.length;
            var res = new Array();
            var j = 0;
            if(typeof cb !== 'function') {
                throw new TypeError(cb + ' is not a function');
            }

            for(var i = 0; i < len; i++) {
                if(i in self) {
                    if(cb(self[i], i, self)) {
                        res[j++] = self[i];
                    }
                }
            }

        }
    }
})();