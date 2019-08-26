// 参考 http://www.airmn.com/blog/?p=413
//二次缓入函数

Math.easeOutQuad = (t,b,c,d) => {

    return -c * (t /= d )*( t - 2 ) + b;
    
    }
    
//二次缓出函数

// Math.easeINOutQuad = (t,b,c,d) => {

//     if(( t /= d / 2 ) < 1){

//         return c / 2 * t * t + b;

//     }

//     return -c / 2 * (( --t ) * ( t - 2 ) -1 ) + b;

// }

// shim layer with setTimeout fallback
// http://www.webhek.com/post/requestanimationframe.html
// https://developer.mozilla.org/zh-CN/docs/Web/API/Window/requestAnimationFrame
window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame       ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            function( callback ){
              window.setTimeout(callback, 1000 / 60);
            }
  })()

function move(amount){
    document.documentElement.scrollTop = amount
    document.body.parentNode.scrollTop = amount
    document.body.scrollTop = amount
}


// 要获取当前页面的滚动条纵坐标位置，用：
// document.documentElement.scrollTop;
// 而不是：
// document.body.scrollTop;
// documentElement 对应的是 html 标签，而 body 对应的是 body 标签。

function position(){
  return document.documentElement.scrollTo || document.body.parentNode.scrollTop || document.body.scrollTop
}

/**
* @param {number} to
* @param {number} duration
* @param {Function} callback
*/

export function scrollTo(to, duration, callback){
    const start = position
    const change = to - start
    const increment = 20
    let currentTime = 0

  duration = (typeof (duration) === 'undefined') ? 500 : duration

  var animateScroll = function(){
    currentTime += increment

    var val = Math.easeOutQuad(currentTime, start, change, duration)

    //移动document.body
    move(val)

    // 除非动画时间结束，否则，一直执行动画
    if(currentTime < duration){
      requestAnimFrame(animateScroll)
    } else {
      if(callback && typeof (callback)  === 'function'){
        //动画执行结束之后，执行回调函数
        callback()
      }
    }
  }
  animateScroll()
}