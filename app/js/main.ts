/**
 * Created by Tsuyoshi on 2014/08/31.
 */

/// <reference path="./class/Greeter.ts" />


if(window.addEventListener) {
    window.addEventListener('DOMContentLoaded',() => {
        var greeter = new Greeter("abc");
        document.body.innerHTML += greeter.greet();
    }, false);
} else {
    window.attachEvent('onload', () => {
        var greeter = new Greeter("abc");
        document.body.innerHTML += greeter.greet();
    });
}