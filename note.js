// 立即执行函数，避免全局作用域污染
(function () {
    // 内部执行逻辑
})()

// 判断当前执行环境，这里不用 window 对象，主要是 self 更具有通用性
var browserEnv = typeof self === 'object' && self.self === self && self
// node 执行环境
var nodeEnv = typeof global === 'object' && global.global === global && global

var root = browserEnv || nodeEnv || this || {};