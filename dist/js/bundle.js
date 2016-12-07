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
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * @Last modified time: 07-12-2016
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     */

var _user = require('../../pages/user/user');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HomePage = exports.HomePage = function () {
  function HomePage(appBody) {
    _classCallCheck(this, HomePage);

    this.appBody = appBody;
    this.pageTitle = 'Hello world! Hello migoooolanas Couldnt open browser (if you are using BrowserSync in a headless environment, you might want to set the open option to false) ';
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
    this.pageTitle = "Hello migolanas";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXZcXGFwcFxcYXBwLmpzIiwiZGV2XFxhcHBcXHBhZ2VzXFxob21lXFxob21lLmpzIiwiZGV2XFxhcHBcXHBhZ2VzXFx1c2VyXFx1c2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQ0NBOzs7O0lBRU0sSztBQUVKLG1CQUFhO0FBQUE7O0FBQ1gsU0FBSyxPQUFMLEdBQWUsU0FBUyxvQkFBVCxDQUE4QixLQUE5QixFQUFxQyxDQUFyQyxDQUFmO0FBQ0Q7Ozs7NEJBRU07QUFDTDtBQUNBLFVBQUksV0FBVyxtQkFBYSxLQUFLLE9BQWxCLENBQWY7QUFDRDs7Ozs7O0FBSUgsSUFBSSxRQUFRLElBQUksS0FBSixFQUFaO0FBQ0EsTUFBTSxLQUFOOzs7Ozs7Ozs7O3FqQkNqQkE7Ozs7Ozs7O0FBUUE7Ozs7SUFFYSxRLFdBQUEsUTtBQUVYLG9CQUFZLE9BQVosRUFBb0I7QUFBQTs7QUFDbEIsU0FBSyxPQUFMLEdBQWUsT0FBZjtBQUNBLFNBQUssU0FBTCxHQUFpQixnS0FBakI7QUFDQSxTQUFLLE1BQUw7QUFDRDs7Ozs2QkFFTztBQUNOO0FBQ0EsVUFBRyxTQUFTLG9CQUFULENBQThCLFNBQTlCLEVBQXlDLENBQXpDLENBQUgsRUFBK0M7QUFDN0MsaUJBQVMsb0JBQVQsQ0FBOEIsU0FBOUIsRUFBeUMsQ0FBekMsRUFBNEMsVUFBNUMsQ0FBdUQsV0FBdkQsQ0FBbUUsU0FBUyxvQkFBVCxDQUE4QixTQUE5QixFQUF5QyxDQUF6QyxDQUFuRTtBQUNEO0FBQ0Q7QUFDQSxVQUFJLG1EQUVNLEtBQUssU0FGWCw0V0FBSjtBQVdBO0FBQ0EsV0FBSyxPQUFMLENBQWEsa0JBQWIsQ0FBaUMsWUFBakMsRUFBK0MsWUFBL0M7QUFDQSxXQUFLLFdBQUw7QUFFRDs7O2tDQUVZO0FBQUE7O0FBQ1gsVUFBSSxZQUFZLFNBQVMsb0JBQVQsQ0FBOEIsTUFBOUIsRUFBc0MsQ0FBdEMsQ0FBaEI7QUFDQSxnQkFBVSxnQkFBVixDQUEyQixRQUEzQixFQUFzQztBQUFBLGVBQVMsTUFBSyxPQUFMLENBQWEsS0FBYixDQUFUO0FBQUEsT0FBdEMsRUFBb0UsS0FBcEU7QUFDRDs7OzRCQUVPLEssRUFBTTtBQUNaLFlBQU0sY0FBTjtBQUNBLFVBQUksa0JBQWtCLENBQXRCO0FBQ0EsVUFBSSxZQUFZLEVBQWhCO0FBQ0EsVUFBSSxPQUFPLFNBQVMsS0FBVCxDQUFlLENBQWYsRUFBa0IsUUFBN0I7QUFDQSxXQUFLLElBQUksSUFBSSxDQUFiLEVBQWdCLElBQUksS0FBSyxNQUF6QixFQUFpQyxHQUFqQyxFQUFzQztBQUNwQyxZQUFHLEtBQUssQ0FBTCxFQUFRLEtBQVgsRUFBaUI7QUFDZixvQkFBVSxLQUFLLENBQUwsRUFBUSxJQUFsQixJQUEwQixLQUFLLENBQUwsRUFBUSxLQUFsQztBQUNBO0FBQ0Q7QUFDRjtBQUNELGNBQVEsR0FBUixDQUFZLFNBQVo7QUFDQSxVQUFHLG9CQUFvQixDQUF2QixFQUF5QjtBQUN2QixnQkFBUSxHQUFSLENBQVksZUFBWjtBQUNBLDJCQUFhLEtBQUssT0FBbEIsRUFBMEIsU0FBMUI7QUFDRDtBQUNGOzs7Ozs7Ozs7Ozs7Ozs7OztBQzlESDs7Ozs7Ozs7SUFRYSxRLFdBQUEsUTtBQUVYLG9CQUFZLE9BQVosRUFBb0IsU0FBcEIsRUFBOEI7QUFBQTs7QUFDNUIsU0FBSyxPQUFMLEdBQWUsT0FBZjtBQUNBLFNBQUssUUFBTCxHQUFnQixTQUFoQjtBQUNBLFNBQUssU0FBTCxHQUFpQixpQkFBakI7QUFDQSxTQUFLLE1BQUw7QUFDRDs7Ozs2QkFFUztBQUNOO0FBQ0EsVUFBRyxTQUFTLG9CQUFULENBQThCLFNBQTlCLEVBQXlDLENBQXpDLENBQUgsRUFBK0M7QUFDN0MsaUJBQVMsb0JBQVQsQ0FBOEIsU0FBOUIsRUFBeUMsQ0FBekMsRUFBNEMsVUFBNUMsQ0FBdUQsV0FBdkQsQ0FBbUUsU0FBUyxvQkFBVCxDQUE4QixTQUE5QixFQUF5QyxDQUF6QyxDQUFuRTtBQUNEO0FBQ0Q7QUFDQSxVQUFJLHVEQUVNLEtBQUssU0FGWCxTQUV3QixLQUFLLFFBQUwsQ0FBYyxLQUZ0Qyx3Q0FBSjtBQUtBO0FBQ0EsV0FBSyxPQUFMLENBQWEsa0JBQWIsQ0FBaUMsWUFBakMsRUFBK0MsWUFBL0M7QUFDRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJcclxuaW1wb3J0IHsgSG9tZVBhZ2UgfSBmcm9tICcuL3BhZ2VzL2hvbWUvaG9tZSc7XHJcblxyXG5jbGFzcyBNeUFwcCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCl7XHJcbiAgICB0aGlzLmFwcEJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImFwcFwiKVswXTtcclxuICB9XHJcblxyXG4gIHN0YXJ0KCl7XHJcbiAgICAvLyBpbml0IEhvbWVQYWdlXHJcbiAgICBsZXQgaG9tZVBhZ2UgPSBuZXcgSG9tZVBhZ2UodGhpcy5hcHBCb2R5KTtcclxuICB9XHJcblxyXG59XHJcblxyXG5sZXQgbXlBcHAgPSBuZXcgTXlBcHAoKTtcclxubXlBcHAuc3RhcnQoKTtcclxuIiwiLyoqXHJcbiogQEF1dGhvcjogTmljb2xhcyBGYXppbyA8d2VibWFzdGVyLWZhemlvPlxyXG4qIEBEYXRlOiAgIDE1LTA5LTIwMTZcclxuKiBARW1haWw6ICBjb250YWN0QG5pY29sYXNmYXppby5jaFxyXG4qIEBMYXN0IG1vZGlmaWVkIGJ5OiAgIHdlYm1hc3Rlci1mYXppb1xyXG4qIEBMYXN0IG1vZGlmaWVkIHRpbWU6IDA3LTEyLTIwMTZcclxuKi9cclxuXHJcbmltcG9ydCB7IFVzZXJQYWdlIH0gZnJvbSAnLi4vLi4vcGFnZXMvdXNlci91c2VyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBIb21lUGFnZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGFwcEJvZHkpe1xyXG4gICAgdGhpcy5hcHBCb2R5ID0gYXBwQm9keVxyXG4gICAgdGhpcy5wYWdlVGl0bGUgPSAnSGVsbG8gd29ybGQhIEhlbGxvIG1pZ29vb29sYW5hcyBDb3VsZG50IG9wZW4gYnJvd3NlciAoaWYgeW91IGFyZSB1c2luZyBCcm93c2VyU3luYyBpbiBhIGhlYWRsZXNzIGVudmlyb25tZW50LCB5b3UgbWlnaHQgd2FudCB0byBzZXQgdGhlIG9wZW4gb3B0aW9uIHRvIGZhbHNlKSAnO1xyXG4gICAgdGhpcy5pbml0VUkoKTtcclxuICB9XHJcblxyXG4gIGluaXRVSSgpe1xyXG4gICAgLy8gcmVtb3ZlIGFsbCBzZWN0aW9uIGJlZm9yZSBkaXNwbGF5IFVJXHJcbiAgICBpZihkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNlY3Rpb25cIilbMF0pe1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNlY3Rpb25cIilbMF0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNlY3Rpb25cIilbMF0pXHJcbiAgICB9XHJcbiAgICAvLyBjcmVhdGUgcGFnZSBza2VsZXRvblxyXG4gICAgbGV0IHBhZ2VTa2VsZXRvbiA9IGBcclxuICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgPGgxPiR7dGhpcy5wYWdlVGl0bGV9PC9oMT5cclxuICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiZW1haWxcIj5FbWFpbDo8L2xhYmVsPiA8aW5wdXQgdHlwZT1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgdmFsdWU9XCJcIiBwbGFjZWhvbGRlcj1cInZvdHJlZW1haWwuY2hcIiAgLz48YnIvPlxyXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZDo8L2xhYmVsPiA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCIgdmFsdWU9XCJcIiAgLz48YnIvPlxyXG4gICAgICAgICAgICA8YnV0dG9uPkxvZ2luPC9idXR0b24+XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L3NlY3Rpb24+YDtcclxuICAgIC8vIGFkZCBwYWdlIHNrZWxldG9uIGluIGJvZHlcclxuICAgIHRoaXMuYXBwQm9keS5pbnNlcnRBZGphY2VudEhUTUwoICdhZnRlcmJlZ2luJywgcGFnZVNrZWxldG9uIClcclxuICAgIHRoaXMubG9hZEV2ZW50VUkoKVxyXG5cclxuICB9XHJcblxyXG4gIGxvYWRFdmVudFVJKCl7XHJcbiAgICBsZXQgbG9naW5Gb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJmb3JtXCIpWzBdO1xyXG4gICAgbG9naW5Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgIGV2ZW50ID0+IHRoaXMub25Mb2dpbihldmVudCksIGZhbHNlKVxyXG4gIH1cclxuXHJcbiAgb25Mb2dpbihldmVudCl7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBsZXQgdmFsaWRhdGlvbklucHV0ID0gMFxyXG4gICAgbGV0IGZvcm1JbnB1dCA9IHt9XHJcbiAgICBsZXQgZm9ybSA9IGRvY3VtZW50LmZvcm1zWzBdLmVsZW1lbnRzXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZvcm0ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYoZm9ybVtpXS52YWx1ZSl7XHJcbiAgICAgICAgZm9ybUlucHV0W2Zvcm1baV0ubmFtZV0gPSBmb3JtW2ldLnZhbHVlXHJcbiAgICAgICAgdmFsaWRhdGlvbklucHV0KytcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coZm9ybUlucHV0KVxyXG4gICAgaWYodmFsaWRhdGlvbklucHV0ID09PSAyKXtcclxuICAgICAgY29uc29sZS5sb2coJ2xvYWQgVXNlclBhZ2UnKVxyXG4gICAgICBuZXcgVXNlclBhZ2UodGhpcy5hcHBCb2R5LGZvcm1JbnB1dCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iLCIvKipcclxuKiBAQXV0aG9yOiBOaWNvbGFzIEZhemlvIDx3ZWJtYXN0ZXItZmF6aW8+XHJcbiogQERhdGU6ICAgMTUtMDktMjAxNlxyXG4qIEBFbWFpbDogIGNvbnRhY3RAbmljb2xhc2ZhemlvLmNoXHJcbiogQExhc3QgbW9kaWZpZWQgYnk6ICAgd2VibWFzdGVyLWZhemlvXHJcbiogQExhc3QgbW9kaWZpZWQgdGltZTogMTUtMDktMjAxNlxyXG4qL1xyXG5cclxuZXhwb3J0IGNsYXNzIFVzZXJQYWdlIHtcclxuXHJcbiAgY29uc3RydWN0b3IoYXBwQm9keSxmb3JtSW5wdXQpe1xyXG4gICAgdGhpcy5hcHBCb2R5ID0gYXBwQm9keVxyXG4gICAgdGhpcy5mb3JtRGF0YSA9IGZvcm1JbnB1dFxyXG4gICAgdGhpcy5wYWdlVGl0bGUgPSBcIkhlbGxvIG1pZ29sYW5hc1wiO1xyXG4gICAgdGhpcy5pbml0VUkoKTtcclxuICB9XHJcblxyXG4gICAgaW5pdFVJKCl7XHJcbiAgICAgIC8vIHJlbW92ZSBhbGwgc2VjdGlvbiBiZWZvcmUgZGlzcGxheSBVSVxyXG4gICAgICBpZihkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNlY3Rpb25cIilbMF0pe1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2VjdGlvblwiKVswXS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2VjdGlvblwiKVswXSlcclxuICAgICAgfVxyXG4gICAgICAvLyBjcmVhdGUgcGFnZSBza2VsZXRvblxyXG4gICAgICBsZXQgcGFnZVNrZWxldG9uID0gYFxyXG4gICAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgICAgPGgxPiR7dGhpcy5wYWdlVGl0bGV9ICR7dGhpcy5mb3JtRGF0YS5lbWFpbH0gITwvaDE+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICBgO1xyXG4gICAgICAvLyBhZGQgcGFnZSBza2VsZXRvbiBpbiBib2R5XHJcbiAgICAgIHRoaXMuYXBwQm9keS5pbnNlcnRBZGphY2VudEhUTUwoICdhZnRlcmJlZ2luJywgcGFnZVNrZWxldG9uIClcclxuICAgIH1cclxufVxyXG4iXX0=
