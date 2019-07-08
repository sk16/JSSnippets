/**
 * Below flavor of module pattern supports loose augmentation, private state, and sub-modules
 * 
 *  var MyModule = (function(parent, child, $){
        var mod = !child ? parent : (parent[child] = parent[child] || {});

        mod.prop1 = function() {
            //
        }

        return parent;
    })(MyModule || {}, 'subModule', dependency);

    Usage: below
 */


var dependency = {};

var MyModule = (function(parent, child, $){
    var mod = !child ? parent : (parent[child] = parent[child] || {});

    mod.prop1 = function() {
        //
    }

    return parent;
})(MyModule || {}, 'subModule1', dependency);

console.log(MyModule);

var MyModule = (function(parent, child, $){
    var mod = !child ? parent : (parent[child] = parent[child] || {});

    mod.prop2 = function() {
        //
    }

    return parent;
})(MyModule || {}, null, dependency);

console.log(MyModule);

var MyModule = (function(parent, child, $){
    var mod = !child ? parent : (parent[child] = parent[child] || {});

    mod.prop3 = function() {
        //
    }

    return parent;
})(MyModule || {}, 'submodule2', dependency);

console.log(MyModule);