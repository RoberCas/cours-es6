(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _home = require("./pages/home/home");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MyApp = function () {
  function MyApp() {
    _classCallCheck(this, MyApp);

    this.appBody = document.getElementsByTagName("app")[0];
  }

  _createClass(MyApp, [{
    key: "start",
    value: function start() {
      // init HomePage
      var homePage = new _home.HomePage(this.appBody);
    }
  }]);

  return MyApp;
}();

var myApp = new MyApp();
myApp.start();

},{"./pages/home/home":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HomePage = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * @Author: Nicolas Fazio <webmaster-fazio>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * @Date:   15-09-2016
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * @Email:  contact@nicolasfazio.ch
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * @Last modified by:   webmaster-fazio
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * @Last modified time: 15-09-2016
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     */

var _user = require('../../pages/user/user');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HomePage = exports.HomePage = function () {
  function HomePage(appBody) {
    _classCallCheck(this, HomePage);

    this.appBody = appBody;
    this.pageTitle = 'Hello world!';
    this.initUI();
  }

  _createClass(HomePage, [{
    key: 'initUI',
    value: function initUI() {
      // remove all section before display UI
      if (document.getElementsByTagName("section")[0]) {
        document.getElementsByTagName("section")[0].parentNode.removeChild(document.getElementsByTagName("section")[0]);
      }
      // create page skeleton
      var pageSkeleton = '\n      <section>\n        <h1>' + this.pageTitle + '</h1>\n        <form>\n          <p>\n            <label for="email">Email:</label> <input type="email" name="email" value="" placeholder="votreemail.ch"  /><br/>\n            <label for="password">Password:</label> <input type="password" name="password" value=""  /><br/>\n            <button>Login</button>\n          </p>\n        </form>\n      </section>';
      // add page skeleton in body
      this.appBody.insertAdjacentHTML('afterbegin', pageSkeleton);
      this.loadEventUI();
    }
  }, {
    key: 'loadEventUI',
    value: function loadEventUI() {
      var _this = this;

      var loginForm = document.getElementsByTagName("form")[0];
      loginForm.addEventListener("submit", function (event) {
        return _this.onLogin(event);
      }, false);
    }
  }, {
    key: 'onLogin',
    value: function onLogin(event) {
      event.preventDefault();
      var validationInput = 0;
      var formInput = {};
      var form = document.forms[0].elements;
      for (var i = 0; i < form.length; i++) {
        if (form[i].value) {
          formInput[form[i].name] = form[i].value;
          validationInput++;
        }
      }
      console.log(formInput);
      if (validationInput === 2) {
        console.log('load UserPage');
        new _user.UserPage(this.appBody, formInput);
      }
    }
  }]);

  return HomePage;
}();

},{"../../pages/user/user":3}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* @Author: Nicolas Fazio <webmaster-fazio>
* @Date:   15-09-2016
* @Email:  contact@nicolasfazio.ch
* @Last modified by:   webmaster-fazio
* @Last modified time: 15-09-2016
*/

var UserPage = exports.UserPage = function () {
  function UserPage(appBody, formInput) {
    _classCallCheck(this, UserPage);

    this.appBody = appBody;
    this.formData = formInput;
    this.pageTitle = "Hello";
    this.initUI();
  }

  _createClass(UserPage, [{
    key: "initUI",
    value: function initUI() {
      // remove all section before display UI
      if (document.getElementsByTagName("section")[0]) {
        document.getElementsByTagName("section")[0].parentNode.removeChild(document.getElementsByTagName("section")[0]);
      }
      // create page skeleton
      var pageSkeleton = "\n        <section>\n          <h1>" + this.pageTitle + " " + this.formData.email + " !</h1>\n        </section>\n      ";
      // add page skeleton in body
      this.appBody.insertAdjacentHTML('afterbegin', pageSkeleton);
    }
  }]);

  return UserPage;
}();

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvYXBwL2FwcC5qcyIsImRldi9hcHAvcGFnZXMvaG9tZS9ob21lLmpzIiwiZGV2L2FwcC9wYWdlcy91c2VyL3VzZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0FDQ0E7Ozs7SUFFTSxLO0FBRUosbUJBQWE7QUFBQTs7QUFDWCxTQUFLLE9BQUwsR0FBZSxTQUFTLG9CQUFULENBQThCLEtBQTlCLEVBQXFDLENBQXJDLENBQWY7QUFDRDs7Ozs0QkFFTTtBQUNMO0FBQ0EsVUFBSSxXQUFXLG1CQUFhLEtBQUssT0FBbEIsQ0FBZjtBQUNEOzs7Ozs7QUFJSCxJQUFJLFFBQVEsSUFBSSxLQUFKLEVBQVo7QUFDQSxNQUFNLEtBQU47Ozs7Ozs7Ozs7cWpCQ2pCQTs7Ozs7Ozs7QUFRQTs7OztJQUVhLFEsV0FBQSxRO0FBRVgsb0JBQVksT0FBWixFQUFvQjtBQUFBOztBQUNsQixTQUFLLE9BQUwsR0FBZSxPQUFmO0FBQ0EsU0FBSyxTQUFMLEdBQWlCLGNBQWpCO0FBQ0EsU0FBSyxNQUFMO0FBQ0Q7Ozs7NkJBRU87QUFDTjtBQUNBLFVBQUcsU0FBUyxvQkFBVCxDQUE4QixTQUE5QixFQUF5QyxDQUF6QyxDQUFILEVBQStDO0FBQzdDLGlCQUFTLG9CQUFULENBQThCLFNBQTlCLEVBQXlDLENBQXpDLEVBQTRDLFVBQTVDLENBQXVELFdBQXZELENBQW1FLFNBQVMsb0JBQVQsQ0FBOEIsU0FBOUIsRUFBeUMsQ0FBekMsQ0FBbkU7QUFDRDtBQUNEO0FBQ0EsVUFBSSxtREFFTSxLQUFLLFNBRlgsNFdBQUo7QUFXQTtBQUNBLFdBQUssT0FBTCxDQUFhLGtCQUFiLENBQWlDLFlBQWpDLEVBQStDLFlBQS9DO0FBQ0EsV0FBSyxXQUFMO0FBRUQ7OztrQ0FFWTtBQUFBOztBQUNYLFVBQUksWUFBWSxTQUFTLG9CQUFULENBQThCLE1BQTlCLEVBQXNDLENBQXRDLENBQWhCO0FBQ0EsZ0JBQVUsZ0JBQVYsQ0FBMkIsUUFBM0IsRUFBc0M7QUFBQSxlQUFTLE1BQUssT0FBTCxDQUFhLEtBQWIsQ0FBVDtBQUFBLE9BQXRDLEVBQW9FLEtBQXBFO0FBQ0Q7Ozs0QkFFTyxLLEVBQU07QUFDWixZQUFNLGNBQU47QUFDQSxVQUFJLGtCQUFrQixDQUF0QjtBQUNBLFVBQUksWUFBWSxFQUFoQjtBQUNBLFVBQUksT0FBTyxTQUFTLEtBQVQsQ0FBZSxDQUFmLEVBQWtCLFFBQTdCO0FBQ0EsV0FBSyxJQUFJLElBQUksQ0FBYixFQUFnQixJQUFJLEtBQUssTUFBekIsRUFBaUMsR0FBakMsRUFBc0M7QUFDcEMsWUFBRyxLQUFLLENBQUwsRUFBUSxLQUFYLEVBQWlCO0FBQ2Ysb0JBQVUsS0FBSyxDQUFMLEVBQVEsSUFBbEIsSUFBMEIsS0FBSyxDQUFMLEVBQVEsS0FBbEM7QUFDQTtBQUNEO0FBQ0Y7QUFDRCxjQUFRLEdBQVIsQ0FBWSxTQUFaO0FBQ0EsVUFBRyxvQkFBb0IsQ0FBdkIsRUFBeUI7QUFDdkIsZ0JBQVEsR0FBUixDQUFZLGVBQVo7QUFDQSwyQkFBYSxLQUFLLE9BQWxCLEVBQTBCLFNBQTFCO0FBQ0Q7QUFDRjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5REg7Ozs7Ozs7O0lBUWEsUSxXQUFBLFE7QUFFWCxvQkFBWSxPQUFaLEVBQW9CLFNBQXBCLEVBQThCO0FBQUE7O0FBQzVCLFNBQUssT0FBTCxHQUFlLE9BQWY7QUFDQSxTQUFLLFFBQUwsR0FBZ0IsU0FBaEI7QUFDQSxTQUFLLFNBQUwsR0FBaUIsT0FBakI7QUFDQSxTQUFLLE1BQUw7QUFDRDs7Ozs2QkFFUztBQUNOO0FBQ0EsVUFBRyxTQUFTLG9CQUFULENBQThCLFNBQTlCLEVBQXlDLENBQXpDLENBQUgsRUFBK0M7QUFDN0MsaUJBQVMsb0JBQVQsQ0FBOEIsU0FBOUIsRUFBeUMsQ0FBekMsRUFBNEMsVUFBNUMsQ0FBdUQsV0FBdkQsQ0FBbUUsU0FBUyxvQkFBVCxDQUE4QixTQUE5QixFQUF5QyxDQUF6QyxDQUFuRTtBQUNEO0FBQ0Q7QUFDQSxVQUFJLHVEQUVNLEtBQUssU0FGWCxTQUV3QixLQUFLLFFBQUwsQ0FBYyxLQUZ0Qyx3Q0FBSjtBQUtBO0FBQ0EsV0FBSyxPQUFMLENBQWEsa0JBQWIsQ0FBaUMsWUFBakMsRUFBK0MsWUFBL0M7QUFDRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJcbmltcG9ydCB7IEhvbWVQYWdlIH0gZnJvbSAnLi9wYWdlcy9ob21lL2hvbWUnO1xuXG5jbGFzcyBNeUFwcCB7XG5cbiAgY29uc3RydWN0b3IoKXtcbiAgICB0aGlzLmFwcEJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImFwcFwiKVswXTtcbiAgfVxuXG4gIHN0YXJ0KCl7XG4gICAgLy8gaW5pdCBIb21lUGFnZVxuICAgIGxldCBob21lUGFnZSA9IG5ldyBIb21lUGFnZSh0aGlzLmFwcEJvZHkpO1xuICB9XG5cbn1cblxubGV0IG15QXBwID0gbmV3IE15QXBwKCk7XG5teUFwcC5zdGFydCgpO1xuIiwiLyoqXG4qIEBBdXRob3I6IE5pY29sYXMgRmF6aW8gPHdlYm1hc3Rlci1mYXppbz5cbiogQERhdGU6ICAgMTUtMDktMjAxNlxuKiBARW1haWw6ICBjb250YWN0QG5pY29sYXNmYXppby5jaFxuKiBATGFzdCBtb2RpZmllZCBieTogICB3ZWJtYXN0ZXItZmF6aW9cbiogQExhc3QgbW9kaWZpZWQgdGltZTogMTUtMDktMjAxNlxuKi9cblxuaW1wb3J0IHsgVXNlclBhZ2UgfSBmcm9tICcuLi8uLi9wYWdlcy91c2VyL3VzZXInO1xuXG5leHBvcnQgY2xhc3MgSG9tZVBhZ2Uge1xuXG4gIGNvbnN0cnVjdG9yKGFwcEJvZHkpe1xuICAgIHRoaXMuYXBwQm9keSA9IGFwcEJvZHlcbiAgICB0aGlzLnBhZ2VUaXRsZSA9ICdIZWxsbyB3b3JsZCEnO1xuICAgIHRoaXMuaW5pdFVJKCk7XG4gIH1cblxuICBpbml0VUkoKXtcbiAgICAvLyByZW1vdmUgYWxsIHNlY3Rpb24gYmVmb3JlIGRpc3BsYXkgVUlcbiAgICBpZihkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNlY3Rpb25cIilbMF0pe1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzZWN0aW9uXCIpWzBdLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzZWN0aW9uXCIpWzBdKVxuICAgIH1cbiAgICAvLyBjcmVhdGUgcGFnZSBza2VsZXRvblxuICAgIGxldCBwYWdlU2tlbGV0b24gPSBgXG4gICAgICA8c2VjdGlvbj5cbiAgICAgICAgPGgxPiR7dGhpcy5wYWdlVGl0bGV9PC9oMT5cbiAgICAgICAgPGZvcm0+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiZW1haWxcIj5FbWFpbDo8L2xhYmVsPiA8aW5wdXQgdHlwZT1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgdmFsdWU9XCJcIiBwbGFjZWhvbGRlcj1cInZvdHJlZW1haWwuY2hcIiAgLz48YnIvPlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cInBhc3N3b3JkXCI+UGFzc3dvcmQ6PC9sYWJlbD4gPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIHZhbHVlPVwiXCIgIC8+PGJyLz5cbiAgICAgICAgICAgIDxidXR0b24+TG9naW48L2J1dHRvbj5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvc2VjdGlvbj5gO1xuICAgIC8vIGFkZCBwYWdlIHNrZWxldG9uIGluIGJvZHlcbiAgICB0aGlzLmFwcEJvZHkuaW5zZXJ0QWRqYWNlbnRIVE1MKCAnYWZ0ZXJiZWdpbicsIHBhZ2VTa2VsZXRvbiApXG4gICAgdGhpcy5sb2FkRXZlbnRVSSgpXG5cbiAgfVxuXG4gIGxvYWRFdmVudFVJKCl7XG4gICAgbGV0IGxvZ2luRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiZm9ybVwiKVswXTtcbiAgICBsb2dpbkZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAgZXZlbnQgPT4gdGhpcy5vbkxvZ2luKGV2ZW50KSwgZmFsc2UpXG4gIH1cblxuICBvbkxvZ2luKGV2ZW50KXtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgbGV0IHZhbGlkYXRpb25JbnB1dCA9IDBcbiAgICBsZXQgZm9ybUlucHV0ID0ge31cbiAgICBsZXQgZm9ybSA9IGRvY3VtZW50LmZvcm1zWzBdLmVsZW1lbnRzXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmb3JtLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZihmb3JtW2ldLnZhbHVlKXtcbiAgICAgICAgZm9ybUlucHV0W2Zvcm1baV0ubmFtZV0gPSBmb3JtW2ldLnZhbHVlXG4gICAgICAgIHZhbGlkYXRpb25JbnB1dCsrXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGZvcm1JbnB1dClcbiAgICBpZih2YWxpZGF0aW9uSW5wdXQgPT09IDIpe1xuICAgICAgY29uc29sZS5sb2coJ2xvYWQgVXNlclBhZ2UnKVxuICAgICAgbmV3IFVzZXJQYWdlKHRoaXMuYXBwQm9keSxmb3JtSW5wdXQpO1xuICAgIH1cbiAgfVxuXG59XG4iLCIvKipcbiogQEF1dGhvcjogTmljb2xhcyBGYXppbyA8d2VibWFzdGVyLWZhemlvPlxuKiBARGF0ZTogICAxNS0wOS0yMDE2XG4qIEBFbWFpbDogIGNvbnRhY3RAbmljb2xhc2ZhemlvLmNoXG4qIEBMYXN0IG1vZGlmaWVkIGJ5OiAgIHdlYm1hc3Rlci1mYXppb1xuKiBATGFzdCBtb2RpZmllZCB0aW1lOiAxNS0wOS0yMDE2XG4qL1xuXG5leHBvcnQgY2xhc3MgVXNlclBhZ2Uge1xuXG4gIGNvbnN0cnVjdG9yKGFwcEJvZHksZm9ybUlucHV0KXtcbiAgICB0aGlzLmFwcEJvZHkgPSBhcHBCb2R5XG4gICAgdGhpcy5mb3JtRGF0YSA9IGZvcm1JbnB1dFxuICAgIHRoaXMucGFnZVRpdGxlID0gXCJIZWxsb1wiO1xuICAgIHRoaXMuaW5pdFVJKCk7XG4gIH1cblxuICAgIGluaXRVSSgpe1xuICAgICAgLy8gcmVtb3ZlIGFsbCBzZWN0aW9uIGJlZm9yZSBkaXNwbGF5IFVJXG4gICAgICBpZihkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNlY3Rpb25cIilbMF0pe1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNlY3Rpb25cIilbMF0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNlY3Rpb25cIilbMF0pXG4gICAgICB9XG4gICAgICAvLyBjcmVhdGUgcGFnZSBza2VsZXRvblxuICAgICAgbGV0IHBhZ2VTa2VsZXRvbiA9IGBcbiAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgPGgxPiR7dGhpcy5wYWdlVGl0bGV9ICR7dGhpcy5mb3JtRGF0YS5lbWFpbH0gITwvaDE+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIGA7XG4gICAgICAvLyBhZGQgcGFnZSBza2VsZXRvbiBpbiBib2R5XG4gICAgICB0aGlzLmFwcEJvZHkuaW5zZXJ0QWRqYWNlbnRIVE1MKCAnYWZ0ZXJiZWdpbicsIHBhZ2VTa2VsZXRvbiApXG4gICAgfVxufVxuIl19
