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
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * @Last modified time: 08-12-2016
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     */

var _user = require('../../pages/user/user');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HomePage = exports.HomePage = function () {
  function HomePage(appBody) {
    _classCallCheck(this, HomePage);

    this.appBody = appBody;
    this.pageTitle = 'Welcome';
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
exports.UserPage = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * @Author: Nicolas Fazio <webmaster-fazio>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * @Date:   15-09-2016
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * @Email:  contact@nicolasfazio.ch
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * @Last modified by:   webmaster-fazio
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * @Last modified time: 08-12-2016
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     */

var _unsplashService = require("../../providers/unsplash/unsplash-service");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UserPage = exports.UserPage = function () {
  function UserPage(appBody, formInput) {
    _classCallCheck(this, UserPage);

    this.appBody = appBody;
    this.formData = formInput;

    this.pageTitle = "Hello";
    this.time = new Date();
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
      var pageSkeleton = "\n      <section>\n        <h1 id=\"time\"></h1>\n        <p>" + this.pageTitle + " " + this.formData.email + " !</p>\n      </section>\n    ";
      // add page skeleton in body
      this.appBody.insertAdjacentHTML('afterbegin', pageSkeleton);
      document.getElementsByTagName("section")[0].style.opacity = 0;
      this.displayTime();
      this.getBackgroundIMG();
    }
  }, {
    key: "displayTime",
    value: function displayTime() {
      var _this = this;

      var timeElement = document.getElementById('time');
      // some css with JS for time txt
      timeElement.innerHTML = this.getTime(this.time);
      timeElement.style.fontSize = '10rem';
      timeElement.style.margin = '0rem';
      timeElement.style.textShadow = '0px 0px 50px rgba(0, 0, 0, 0.21)';
      // run interval
      setInterval(function () {
        // asigne a new Date()
        _this.time = new Date();
        //console.log(`${this.time.getHours()}:${this.time.getMinutes()}:${this.time.getSeconds()}`)
        // replace innerHTML of time element
        timeElement.innerHTML = _this.getTime(_this.time);
      }, 1000);
    }
  }, {
    key: "getTime",
    value: function getTime(time) {
      return "\n    <time datetime=\"" + (time.getFullYear() < 10 ? '0' + time.getFullYear() : time.getFullYear()) + "-" + (time.getMonth() < 10 ? '0' + time.getMonth() : time.getMonth()) + "-" + (time.getDate() < 10 ? '0' + time.getDate() : time.getDate()) + " " + (time.getHours() < 10 ? '0' + time.getHours() : time.getHours()) + ":" + (time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()) + ":" + (time.getSeconds() < 10 ? '0' + time.getSeconds() : time.getSeconds()) + "\">\n      " + (time.getHours() < 10 ? '0' + time.getHours() : time.getHours()) + ":" + (time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()) + ":" + (time.getSeconds() < 10 ? '0' + time.getSeconds() : time.getSeconds()) + "\n    </time >\n    ";
    }
  }, {
    key: "getBackgroundIMG",
    value: function getBackgroundIMG() {
      var _this2 = this;

      var unsplash = new _unsplashService.UnsplashService();
      var queryService = unsplash.getRandomImg();
      queryService.then(function (response) {
        //console.log('res 1 -> ', response)
        _this2.displayBackground(JSON.parse(response));
      });
    }
  }, {
    key: "displayBackground",
    value: function displayBackground(data) {
      console.log('service response-> ');
      console.log(data[0]);
      var pageContainer = document.getElementsByTagName("section")[0];
      if (pageContainer) {
        // some css with JS for BG
        pageContainer.style.height = "100%";
        pageContainer.style.width = "100%";
        pageContainer.style.position = "absolute";
        pageContainer.style.top = "0";
        pageContainer.style.left = "0";
        pageContainer.style.padding = "0px";
        pageContainer.style.textAlign = "center";
        pageContainer.style.color = "#fff";
        pageContainer.style.opacity = "1";
        pageContainer.style.background = "url(" + data[0].urls.regular + ") center center no-repeat";
        pageContainer.style.backgroundSize = "cover";
      }
    }
  }]);

  return UserPage;
}();

},{"../../providers/unsplash/unsplash-service":5}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var APIKEYUNSPLASH = exports.APIKEYUNSPLASH = {

  "client_id": "addf61e421c1b326259a856fbc2dd29c2f11e353522fc547046e81f4a957015e",
  "secretUnsplash": "5c1df3ce3c6c33b05e8e5e345fadc8fef21107c1f1d046968ee335a879350820"

};

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UnsplashService = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * @Author: Nicolas Fazio <webmaster-fazio>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * @Date:   07-12-2016
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * @Email:  contact@nicolasfazio.ch
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * @Last modified by:   webmaster-fazio
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * @Last modified time: 08-12-2016
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     */

var _apikeyConfig = require('../../providers/unsplash/apikey-config');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UnsplashService = exports.UnsplashService = function () {
  function UnsplashService() {
    _classCallCheck(this, UnsplashService);

    this.data = [];
    this.params = _apikeyConfig.APIKEYUNSPLASH;
    this.queryUrl = 'https://api.unsplash.com/photos/random?count=1&client_id=';
    console.log('hello UnsplashService!');
  }

  _createClass(UnsplashService, [{
    key: 'getRandomImg',
    value: function getRandomImg() {
      var _this = this;

      //Return a new promise.
      return new Promise(function (resolve, reject) {
        // Do the usual XHR stuff
        var req = new XMLHttpRequest();
        req.open('GET', _this.queryUrl + _this.params.client_id);
        req.onload = function () {
          // This is called even on 404 etc
          // so check the status
          if (req.status == 200) {
            // Resolve the promise with the response text
            resolve(req.responseText);
          } else {
            // Otherwise reject with the status text
            // which will hopefully be a meaningful error
            reject(Error(req.statusText));
          }
        };
        // Handle network errors
        req.onerror = function () {
          reject(Error("Network Error"));
        };
        // Make the request
        req.send();
      });
    }
  }]);

  return UnsplashService;
}();

},{"../../providers/unsplash/apikey-config":4}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvYXBwL2FwcC5qcyIsImRldi9hcHAvcGFnZXMvaG9tZS9ob21lLmpzIiwiZGV2L2FwcC9wYWdlcy91c2VyL3VzZXIuanMiLCJkZXYvYXBwL3Byb3ZpZGVycy91bnNwbGFzaC9hcGlrZXktY29uZmlnLmpzIiwiZGV2L2FwcC9wcm92aWRlcnMvdW5zcGxhc2gvdW5zcGxhc2gtc2VydmljZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7QUNDQTs7OztJQUVNLEs7QUFFSixtQkFBYTtBQUFBOztBQUNYLFNBQUssT0FBTCxHQUFlLFNBQVMsb0JBQVQsQ0FBOEIsS0FBOUIsRUFBcUMsQ0FBckMsQ0FBZjtBQUNEOzs7OzRCQUVNO0FBQ0w7QUFDQSxVQUFJLFdBQVcsbUJBQWEsS0FBSyxPQUFsQixDQUFmO0FBQ0Q7Ozs7OztBQUlILElBQUksUUFBUSxJQUFJLEtBQUosRUFBWjtBQUNBLE1BQU0sS0FBTjs7Ozs7Ozs7OztxakJDakJBOzs7Ozs7OztBQVFBOzs7O0lBRWEsUSxXQUFBLFE7QUFFWCxvQkFBWSxPQUFaLEVBQW9CO0FBQUE7O0FBQ2xCLFNBQUssT0FBTCxHQUFlLE9BQWY7QUFDQSxTQUFLLFNBQUwsR0FBaUIsU0FBakI7QUFDQSxTQUFLLE1BQUw7QUFDRDs7Ozs2QkFFTztBQUNOO0FBQ0EsVUFBRyxTQUFTLG9CQUFULENBQThCLFNBQTlCLEVBQXlDLENBQXpDLENBQUgsRUFBK0M7QUFDN0MsaUJBQVMsb0JBQVQsQ0FBOEIsU0FBOUIsRUFBeUMsQ0FBekMsRUFBNEMsVUFBNUMsQ0FBdUQsV0FBdkQsQ0FBbUUsU0FBUyxvQkFBVCxDQUE4QixTQUE5QixFQUF5QyxDQUF6QyxDQUFuRTtBQUNEO0FBQ0Q7QUFDQSxVQUFJLG1EQUVNLEtBQUssU0FGWCw0V0FBSjtBQVdBO0FBQ0EsV0FBSyxPQUFMLENBQWEsa0JBQWIsQ0FBaUMsWUFBakMsRUFBK0MsWUFBL0M7QUFD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VUFBVixDQUFQO0FBQ0Q7QUFDRixTQVpEO0FBYUE7QUFDQSxZQUFJLE9BQUosR0FBYyxZQUFLO0FBQ2pCLGlCQUFPLE1BQU0sZUFBTixDQUFQO0FBQ0QsU0FGRDtBQUdBO0FBQ0EsWUFBSSxJQUFKO0FBQ0QsT0F2Qk0sQ0FBUDtBQXdCSCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJcbmltcG9ydCB7IEhvbWVQYWdlIH0gZnJvbSAnLi9wYWdlcy9ob21lL2hvbWUnO1xuXG5jbGFzcyBNeUFwcCB7XG5cbiAgY29uc3RydWN0b3IoKXtcbiAgICB0aGlzLmFwcEJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImFwcFwiKVswXTtcbiAgfVxuXG4gIHN0YXJ0KCl7XG4gICAgLy8gaW5pdCBIb21lUGFnZVxuICAgIGxldCBob21lUGFnZSA9IG5ldyBIb21lUGFnZSh0aGlzLmFwcEJvZHkpO1xuICB9XG5cbn1cblxubGV0IG15QXBwID0gbmV3IE15QXBwKCk7XG5teUFwcC5zdGFydCgpO1xuIiwiLyoqXG4qIEBBdXRob3I6IE5pY29sYXMgRmF6aW8gPHdlYm1hc3Rlci1mYXppbz5cbiogQERhdGU6ICAgMTUtMDktMjAxNlxuKiBARW1haWw6ICBjb250YWN0QG5pY29sYXNmYXppby5jaFxuKiBATGFzdCBtb2RpZmllZCBieTogICB3ZWJtYXN0ZXItZmF6aW9cbiogQExhc3QgbW9kaWZpZWQgdGltZTogMDgtMTItMjAxNlxuKi9cblxuaW1wb3J0IHsgVXNlclBhZ2UgfSBmcm9tICcuLi8uLi9wYWdlcy91c2VyL3VzZXInO1xuXG5leHBvcnQgY2xhc3MgSG9tZVBhZ2Uge1xuXG4gIGNvbnN0cnVjdG9yKGFwcEJvZHkpe1xuICAgIHRoaXMuYXBwQm9keSA9IGFwcEJvZHlcbiAgICB0aGlzLnBhZ2VUaXRsZSA9ICdXZWxjb21lJztcbiAgICB0aGlzLmluaXRVSSgpO1xuICB9XG5cbiAgaW5pdFVJKCl7XG4gICAgLy8gcmVtb3ZlIGFsbCBzZWN0aW9uIGJlZm9yZSBkaXNwbGF5IFVJXG4gICAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzZWN0aW9uXCIpWzBdKXtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2VjdGlvblwiKVswXS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2VjdGlvblwiKVswXSlcbiAgICB9XG4gICAgLy8gY3JlYXRlIHBhZ2Ugc2tlbGV0b25cbiAgICBsZXQgcGFnZVNrZWxldG9uID0gYFxuICAgICAgPHNlY3Rpb24+XG4gICAgICAgIDxoMT4ke3RoaXMucGFnZVRpdGxlfTwvaDE+XG4gICAgICAgIDxmb3JtPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImVtYWlsXCI+RW1haWw6PC9sYWJlbD4gPGlucHV0IHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIHZhbHVlPVwiXCIgcGxhY2Vob2xkZXI9XCJ2b3RyZWVtYWlsLmNoXCIgIC8+PGJyLz5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkOjwvbGFiZWw+IDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiB2YWx1ZT1cIlwiICAvPjxici8+XG4gICAgICAgICAgICA8YnV0dG9uPkxvZ2luPC9idXR0b24+XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L3NlY3Rpb24+YDtcbiAgICAvLyBhZGQgcGFnZSBza2VsZXRvbiBpbiBib2R5XG4gICAgdGhpcy5hcHBCb2R5Lmluc2VydEFkamFjZW50SFRNTCggJ2FmdGVyYmVnaW4nLCBwYWdlU2tlbGV0b24gKVxuICAgIHRoaXMubG9hZEV2ZW50VUkoKVxuXG4gIH1cblxuICBsb2FkRXZlbnRVSSgpe1xuICAgIGxldCBsb2dpbkZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImZvcm1cIilbMF07XG4gICAgbG9naW5Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgIGV2ZW50ID0+IHRoaXMub25Mb2dpbihldmVudCksIGZhbHNlKVxuICB9XG5cbiAgb25Mb2dpbihldmVudCl7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGxldCB2YWxpZGF0aW9uSW5wdXQgPSAwXG4gICAgbGV0IGZvcm1JbnB1dCA9IHt9XG4gICAgbGV0IGZvcm0gPSBkb2N1bWVudC5mb3Jtc1swXS5lbGVtZW50c1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZm9ybS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYoZm9ybVtpXS52YWx1ZSl7XG4gICAgICAgIGZvcm1JbnB1dFtmb3JtW2ldLm5hbWVdID0gZm9ybVtpXS52YWx1ZVxuICAgICAgICB2YWxpZGF0aW9uSW5wdXQrK1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zb2xlLmxvZyhmb3JtSW5wdXQpXG4gICAgaWYodmFsaWRhdGlvbklucHV0ID09PSAyKXtcbiAgICAgIGNvbnNvbGUubG9nKCdsb2FkIFVzZXJQYWdlJylcbiAgICAgIG5ldyBVc2VyUGFnZSh0aGlzLmFwcEJvZHksZm9ybUlucHV0KTtcbiAgICB9XG4gIH1cblxufVxuIiwiLyoqXG4qIEBBdXRob3I6IE5pY29sYXMgRmF6aW8gPHdlYm1hc3Rlci1mYXppbz5cbiogQERhdGU6ICAgMTUtMDktMjAxNlxuKiBARW1haWw6ICBjb250YWN0QG5pY29sYXNmYXppby5jaFxuKiBATGFzdCBtb2RpZmllZCBieTogICB3ZWJtYXN0ZXItZmF6aW9cbiogQExhc3QgbW9kaWZpZWQgdGltZTogMDgtMTItMjAxNlxuKi9cblxuaW1wb3J0ICB7IFVuc3BsYXNoU2VydmljZSB9IGZyb20gJy4uLy4uL3Byb3ZpZGVycy91bnNwbGFzaC91bnNwbGFzaC1zZXJ2aWNlJztcblxuZXhwb3J0IGNsYXNzIFVzZXJQYWdlIHtcblxuICBjb25zdHJ1Y3RvcihhcHBCb2R5LGZvcm1JbnB1dCl7XG4gICAgdGhpcy5hcHBCb2R5ID0gYXBwQm9keVxuICAgIHRoaXMuZm9ybURhdGEgPSBmb3JtSW5wdXRcblxuICAgIHRoaXMucGFnZVRpdGxlID0gXCJIZWxsb1wiO1xuICAgIHRoaXMudGltZSA9IG5ldyBEYXRlKClcbiAgICB0aGlzLmluaXRVSSgpO1xuICB9XG5cbiAgaW5pdFVJKCl7XG4gICAgLy8gcmVtb3ZlIGFsbCBzZWN0aW9uIGJlZm9yZSBkaXNwbGF5IFVJXG4gICAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzZWN0aW9uXCIpWzBdKXtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2VjdGlvblwiKVswXS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2VjdGlvblwiKVswXSlcbiAgICB9XG4gICAgLy8gY3JlYXRlIHBhZ2Ugc2tlbGV0b25cbiAgICBsZXQgcGFnZVNrZWxldG9uID0gYFxuICAgICAgPHNlY3Rpb24+XG4gICAgICAgIDxoMSBpZD1cInRpbWVcIj48L2gxPlxuICAgICAgICA8cD4ke3RoaXMucGFnZVRpdGxlfSAke3RoaXMuZm9ybURhdGEuZW1haWx9ICE8L3A+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgYDtcbiAgICAvLyBhZGQgcGFnZSBza2VsZXRvbiBpbiBib2R5XG4gICAgdGhpcy5hcHBCb2R5Lmluc2VydEFkamFjZW50SFRNTCggJ2FmdGVyYmVnaW4nLCBwYWdlU2tlbGV0b24gKVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2VjdGlvblwiKVswXS5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICB0aGlzLmRpc3BsYXlUaW1lKClcbiAgICB0aGlzLmdldEJhY2tncm91bmRJTUcoKVxuICB9XG5cbiAgZGlzcGxheVRpbWUoKXtcbiAgICBsZXQgdGltZUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGltZScpXG4gICAgLy8gc29tZSBjc3Mgd2l0aCBKUyBmb3IgdGltZSB0eHRcbiAgICB0aW1lRWxlbWVudC5pbm5lckhUTUwgPSB0aGlzLmdldFRpbWUodGhpcy50aW1lKVxuICAgIHRpbWVFbGVtZW50LnN0eWxlLmZvbnRTaXplID0gJzEwcmVtJztcbiAgICB0aW1lRWxlbWVudC5zdHlsZS5tYXJnaW4gPSAnMHJlbSc7XG4gICAgdGltZUVsZW1lbnQuc3R5bGUudGV4dFNoYWRvdyA9ICcwcHggMHB4IDUwcHggcmdiYSgwLCAwLCAwLCAwLjIxKSc7XG4gICAgLy8gcnVuIGludGVydmFsXG4gICAgc2V0SW50ZXJ2YWwoKCk9PntcbiAgICAgIC8vIGFzaWduZSBhIG5ldyBEYXRlKClcbiAgICAgIHRoaXMudGltZSA9IG5ldyBEYXRlKCk7XG4gICAgICAvL2NvbnNvbGUubG9nKGAke3RoaXMudGltZS5nZXRIb3VycygpfToke3RoaXMudGltZS5nZXRNaW51dGVzKCl9OiR7dGhpcy50aW1lLmdldFNlY29uZHMoKX1gKVxuICAgICAgLy8gcmVwbGFjZSBpbm5lckhUTUwgb2YgdGltZSBlbGVtZW50XG4gICAgICB0aW1lRWxlbWVudC5pbm5lckhUTUwgPSB0aGlzLmdldFRpbWUodGhpcy50aW1lKVxuICAgIH0sMTAwMClcbiAgfVxuXG4gIGdldFRpbWUodGltZSl7XG4gICAgcmV0dXJuICAgIGBcbiAgICA8dGltZSBkYXRldGltZT1cIiR7KHRpbWUuZ2V0RnVsbFllYXIoKSA8IDEwKT8nMCcrdGltZS5nZXRGdWxsWWVhcigpOnRpbWUuZ2V0RnVsbFllYXIoKX0tJHsodGltZS5nZXRNb250aCgpIDwgMTApPycwJyt0aW1lLmdldE1vbnRoKCk6dGltZS5nZXRNb250aCgpfS0keyh0aW1lLmdldERhdGUoKSA8IDEwKT8nMCcrdGltZS5nZXREYXRlKCk6dGltZS5nZXREYXRlKCl9ICR7KHRpbWUuZ2V0SG91cnMoKSA8IDEwKT8nMCcrdGltZS5nZXRIb3VycygpOnRpbWUuZ2V0SG91cnMoKX06JHsodGltZS5nZXRNaW51dGVzKCkgPCAxMCk/JzAnK3RpbWUuZ2V0TWludXRlcygpOnRpbWUuZ2V0TWludXRlcygpfTokeyh0aW1lLmdldFNlY29uZHMoKSA8IDEwKT8nMCcrdGltZS5nZXRTZWNvbmRzKCk6dGltZS5nZXRTZWNvbmRzKCl9XCI+XG4gICAgICAkeyh0aW1lLmdldEhvdXJzKCkgPCAxMCk/JzAnK3RpbWUuZ2V0SG91cnMoKTp0aW1lLmdldEhvdXJzKCl9OiR7KHRpbWUuZ2V0TWludXRlcygpIDwgMTApPycwJyt0aW1lLmdldE1pbnV0ZXMoKTp0aW1lLmdldE1pbnV0ZXMoKX06JHsodGltZS5nZXRTZWNvbmRzKCkgPCAxMCk/JzAnK3RpbWUuZ2V0U2Vjb25kcygpOnRpbWUuZ2V0U2Vjb25kcygpfVxuICAgIDwvdGltZSA+XG4gICAgYDtcbiAgfVxuXG4gIGdldEJhY2tncm91bmRJTUcoKXtcbiAgICAgIGxldCB1bnNwbGFzaCA9IG5ldyBVbnNwbGFzaFNlcnZpY2UoKTtcbiAgICAgIGxldCBxdWVyeVNlcnZpY2UgPSB1bnNwbGFzaC5nZXRSYW5kb21JbWcoKVxuICAgICAgcXVlcnlTZXJ2aWNlLnRoZW4oKHJlc3BvbnNlKT0+e1xuICAgICAgICAvL2NvbnNvbGUubG9nKCdyZXMgMSAtPiAnLCByZXNwb25zZSlcbiAgICAgICAgIHRoaXMuZGlzcGxheUJhY2tncm91bmQoSlNPTi5wYXJzZShyZXNwb25zZSkpXG4gICAgICAgfSlcbiAgfVxuXG4gIGRpc3BsYXlCYWNrZ3JvdW5kKGRhdGEpe1xuICAgIGNvbnNvbGUubG9nKCdzZXJ2aWNlIHJlc3BvbnNlLT4gJylcbiAgICBjb25zb2xlLmxvZyggZGF0YVswXSApXG4gICAgbGV0IHBhZ2VDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNlY3Rpb25cIilbMF1cbiAgICBpZihwYWdlQ29udGFpbmVyKXtcbiAgICAgIC8vIHNvbWUgY3NzIHdpdGggSlMgZm9yIEJHXG4gICAgICBwYWdlQ29udGFpbmVyLnN0eWxlLmhlaWdodCA9IGAxMDAlYDtcbiAgICAgIHBhZ2VDb250YWluZXIuc3R5bGUud2lkdGggPSBgMTAwJWA7XG4gICAgICBwYWdlQ29udGFpbmVyLnN0eWxlLnBvc2l0aW9uID0gYGFic29sdXRlYDtcbiAgICAgIHBhZ2VDb250YWluZXIuc3R5bGUudG9wID0gYDBgO1xuICAgICAgcGFnZUNvbnRhaW5lci5zdHlsZS5sZWZ0ID0gYDBgO1xuICAgICAgcGFnZUNvbnRhaW5lci5zdHlsZS5wYWRkaW5nID0gYDBweGA7XG4gICAgICBwYWdlQ29udGFpbmVyLnN0eWxlLnRleHRBbGlnbiA9IGBjZW50ZXJgO1xuICAgICAgcGFnZUNvbnRhaW5lci5zdHlsZS5jb2xvciA9IGAjZmZmYDtcbiAgICAgIHBhZ2VDb250YWluZXIuc3R5bGUub3BhY2l0eSA9IGAxYDtcbiAgICAgIHBhZ2VDb250YWluZXIuc3R5bGUuYmFja2dyb3VuZCA9IGB1cmwoJHtkYXRhWzBdLnVybHMucmVndWxhcn0pIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0YDtcbiAgICAgIHBhZ2VDb250YWluZXIuc3R5bGUuYmFja2dyb3VuZFNpemUgPSBgY292ZXJgO1xuXG4gICAgfVxuICB9XG5cbn1cbiIsImV4cG9ydCBjb25zdCBBUElLRVlVTlNQTEFTSD17XG5cbiAgXCJjbGllbnRfaWRcIiA6XCJhZGRmNjFlNDIxYzFiMzI2MjU5YTg1NmZiYzJkZDI5YzJmMTFlMzUzNTIyZmM1NDcwNDZlODFmNGE5NTcwMTVlXCIsXG4gIFwic2VjcmV0VW5zcGxhc2hcIiA6IFwiNWMxZGYzY2UzYzZjMzNiMDVlOGU1ZTM0NWZhZGM4ZmVmMjExMDdjMWYxZDA0Njk2OGVlMzM1YTg3OTM1MDgyMFwiXG5cbn1cbiIsIi8qKlxuKiBAQXV0aG9yOiBOaWNvbGFzIEZhemlvIDx3ZWJtYXN0ZXItZmF6aW8+XG4qIEBEYXRlOiAgIDA3LTEyLTIwMTZcbiogQEVtYWlsOiAgY29udGFjdEBuaWNvbGFzZmF6aW8uY2hcbiogQExhc3QgbW9kaWZpZWQgYnk6ICAgd2VibWFzdGVyLWZhemlvXG4qIEBMYXN0IG1vZGlmaWVkIHRpbWU6IDA4LTEyLTIwMTZcbiovXG5cbmltcG9ydCAgeyBBUElLRVlVTlNQTEFTSCB9IGZyb20gJy4uLy4uL3Byb3ZpZGVycy91bnNwbGFzaC9hcGlrZXktY29uZmlnJztcblxuZXhwb3J0IGNsYXNzIFVuc3BsYXNoU2VydmljZXtcblxuICBjb25zdHJ1Y3Rvcigpe1xuICAgIHRoaXMuZGF0YSA9IFtdO1xuICAgIHRoaXMucGFyYW1zID0gQVBJS0VZVU5TUExBU0hcbiAgICB0aGlzLnF1ZXJ5VXJsID0gJ2h0dHBzOi8vYXBpLnVuc3BsYXNoLmNvbS9waG90b3MvcmFuZG9tP2NvdW50PTEmY2xpZW50X2lkPSdcbiAgICBjb25zb2xlLmxvZygnaGVsbG8gVW5zcGxhc2hTZXJ2aWNlIScpXG4gIH1cblxuICBnZXRSYW5kb21JbWcoKXtcbiAgICAgIC8vUmV0dXJuIGEgbmV3IHByb21pc2UuXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCk9PiB7XG4gICAgICAgIC8vIERvIHRoZSB1c3VhbCBYSFIgc3R1ZmZcbiAgICAgICAgdmFyIHJlcSA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICByZXEub3BlbignR0VUJywgdGhpcy5xdWVyeVVybCt0aGlzLnBhcmFtcy5jbGllbnRfaWQpO1xuICAgICAgICByZXEub25sb2FkID0gKCkgPT57XG4gICAgICAgICAgLy8gVGhpcyBpcyBjYWxsZWQgZXZlbiBvbiA0MDQgZXRjXG4gICAgICAgICAgLy8gc28gY2hlY2sgdGhlIHN0YXR1c1xuICAgICAgICAgIGlmIChyZXEuc3RhdHVzID09IDIwMCkge1xuICAgICAgICAgICAgLy8gUmVzb2x2ZSB0aGUgcHJvbWlzZSB3aXRoIHRoZSByZXNwb25zZSB0ZXh0XG4gICAgICAgICAgICByZXNvbHZlKHJlcS5yZXNwb25zZVRleHQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIE90aGVyd2lzZSByZWplY3Qgd2l0aCB0aGUgc3RhdHVzIHRleHRcbiAgICAgICAgICAgIC8vIHdoaWNoIHdpbGwgaG9wZWZ1bGx5IGJlIGEgbWVhbmluZ2Z1bCBlcnJvclxuICAgICAgICAgICAgcmVqZWN0KEVycm9yKHJlcS5zdGF0dXNUZXh0KSk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvLyBIYW5kbGUgbmV0d29yayBlcnJvcnNcbiAgICAgICAgcmVxLm9uZXJyb3IgPSAoKT0+IHtcbiAgICAgICAgICByZWplY3QoRXJyb3IoXCJOZXR3b3JrIEVycm9yXCIpKTtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gTWFrZSB0aGUgcmVxdWVzdFxuICAgICAgICByZXEuc2VuZCgpO1xuICAgICAgfSk7XG4gIH1cbn1cbiJdfQ==
