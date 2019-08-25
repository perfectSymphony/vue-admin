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
window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame       ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            function( callback ){
              window.setTimeout(callback, 1000 / 60);
            }
  })()