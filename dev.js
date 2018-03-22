function add(a, rest) {
    return _.reduce(rest, function (accum, current) {
        return accum + current;
    }, a);
}

function genRestFunc(func) {
    // 新返回的函数支持rest参数
    return function () {
        // 获得形参个数
        var argLength = func.length;
        // rest参数的起始位置为最后一个形参位置
        var startIndex = argLength - 1;
        // 最终需要的参数数组
        var args = Array(argLength);
        // 设置rest参数
        var rest = Array.prototype.slice.call(arguments, startIndex);
        // 设置最终调用时需要的参数
        for (var i = 0; i < startIndex; i++) {
            args[i] = arguments[i]
        }
        args[startIndex] = rest;
        // => args:[a,b,c,d,[rest[0],rest[1],rest[2]] ]
        return func.apply(this, args);
    }
}
var addWithRest = genRestFunc(add);

addWithRest(1, 2, 3, 4); // => 10