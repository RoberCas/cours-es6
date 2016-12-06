(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
      var homePage = new HomePage(this.appBody);
    }
  }]);

  return MyApp;
}();

var HomePage = function () {
  function HomePage(appBody) {
    _classCallCheck(this, HomePage);

    this.appBody = appBody;
    this.pageTitle = 'Hello world!';
    this.initUI();
  }

  _createClass(HomePage, [{
    key: "initUI",
    value: function initUI() {
      // remove all section before display UI
      if (document.getElementsByTagName("section")[0]) {
        document.getElementsByTagName("section")[0].parentNode.removeChild(document.getElementsByTagName("section")[0]);
      }
      // create page skeleton
      var pageSkeleton = "\n      <section>\n        <h1>" + this.pageTitle + "</h1>\n        <form>\n          <p>\n            <label for=\"email\">Email:</label> <input type=\"email\" name=\"email\" value=\"\" placeholder=\"votreemail.ch\"  /><br/>\n            <label for=\"password\">Password:</label> <input type=\"password\" name=\"password\" value=\"\"  /><br/>\n            <button>Login</button>\n          </p>\n        </form>\n      </section>";
      // add page skeleton in body
      this.appBody.insertAdjacentHTML('afterbegin', pageSkeleton);
      this.loadEventUI();
    }
  }, {
    key: "loadEventUI",
    value: function loadEventUI() {
      var _this = this;

      var loginForm = document.getElementsByTagName("form")[0];
      loginForm.addEventListener("submit", function (event) {
        return _this.onLogin(event);
      }, false);
    }
  }, {
    key: "onLogin",
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
        new UserPage(this.appBody, formInput);
      }
    }
  }]);

  return HomePage;
}();

var UserPage = function () {
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

var myApp = new MyApp();
myApp.start();

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvYXBwL2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztJQ0FNLEs7QUFFSixtQkFBYTtBQUFBOztBQUNYLFNBQUssT0FBTCxHQUFlLFNBQVMsb0JBQVQsQ0FBOEIsS0FBOUIsRUFBcUMsQ0FBckMsQ0FBZjtBQUNEOzs7OzRCQUVNO0FBQ0w7QUFDQSxVQUFJLFdBQVcsSUFBSSxRQUFKLENBQWEsS0FBSyxPQUFsQixDQUFmO0FBQ0Q7Ozs7OztJQUlHLFE7QUFFSixvQkFBWSxPQUFaLEVBQW9CO0FBQUE7O0FBQ2xCLFNBQUssT0FBTCxHQUFlLE9BQWY7QUFDQSxTQUFLLFNBQUwsR0FBaUIsY0FBakI7QUFDQSxTQUFLLE1BQUw7QUFDRDs7Ozs2QkFFTztBQUNOO0FBQ0EsVUFBRyxTQUFTLG9CQUFULENBQThCLFNBQTlCLEVBQXlDLENBQXpDLENBQUgsRUFBK0M7QUFDN0MsaUJBQVMsb0JBQVQsQ0FBOEIsU0FBOUIsRUFBeUMsQ0FBekMsRUFBNEMsVUFBNUMsQ0FBdUQsV0FBdkQsQ0FBbUUsU0FBUyxvQkFBVCxDQUE4QixTQUE5QixFQUF5QyxDQUF6QyxDQUFuRTtBQUNEO0FBQ0Q7QUFDQSxVQUFJLG1EQUVNLEtBQUssU0FGWCw4WEFBSjtBQVdBO0FBQ0EsV0FBSyxPQUFMLENBQWEsa0JBQWIsQ0FBaUMsWUFBakMsRUFBK0MsWUFBL0M7QUFDQSxXQUFLLFdBQUw7QUFFRDs7O2tDQUVZO0FBQUE7O0FBQ1gsVUFBSSxZQUFZLFNBQVMsb0JBQVQsQ0FBOEIsTUFBOUIsRUFBc0MsQ0FBdEMsQ0FBaEI7QUFDQSxnQkFBVSxnQkFBVixDQUEyQixRQUEzQixFQUFzQztBQUFBLGVBQVMsTUFBSyxPQUFMLENBQWEsS0FBYixDQUFUO0FBQUEsT0FBdEMsRUFBb0UsS0FBcEU7QUFHRDs7OzRCQUVPLEssRUFBTTtBQUNaLFlBQU0sY0FBTjtBQUNBLFVBQUksa0JBQWtCLENBQXRCO0FBQ0EsVUFBSSxZQUFZLEVBQWhCO0FBQ0EsVUFBSSxPQUFPLFNBQVMsS0FBVCxDQUFlLENBQWYsRUFBa0IsUUFBN0I7QUFDQSxXQUFLLElBQUksSUFBSSxDQUFiLEVBQWdCLElBQUksS0FBSyxNQUF6QixFQUFpQyxHQUFqQyxFQUFzQztBQUNwQyxZQUFHLEtBQUssQ0FBTCxFQUFRLEtBQVgsRUFBaUI7QUFDZixvQkFBVSxLQUFLLENBQUwsRUFBUSxJQUFsQixJQUEwQixLQUFLLENBQUwsRUFBUSxLQUFsQztBQUNBO0FBQ0Q7QUFDRjtBQUNELGNBQVEsR0FBUixDQUFZLFNBQVo7QUFDQSxVQUFHLG9CQUFvQixDQUF2QixFQUF5QjtBQUN2QixnQkFBUSxHQUFSLENBQVksZUFBWjtBQUNBLFlBQUksUUFBSixDQUFhLEtBQUssT0FBbEIsRUFBMEIsU0FBMUI7QUFDRDtBQUNGOzs7Ozs7SUFJRyxRO0FBRUosb0JBQVksT0FBWixFQUFvQixTQUFwQixFQUE4QjtBQUFBOztBQUM1QixTQUFLLE9BQUwsR0FBZSxPQUFmO0FBQ0EsU0FBSyxRQUFMLEdBQWdCLFNBQWhCO0FBQ0EsU0FBSyxTQUFMLEdBQWlCLE9BQWpCO0FBQ0EsU0FBSyxNQUFMO0FBQ0Q7Ozs7NkJBRVM7QUFDTjtBQUNBLFVBQUcsU0FBUyxvQkFBVCxDQUE4QixTQUE5QixFQUF5QyxDQUF6QyxDQUFILEVBQStDO0FBQzdDLGlCQUFTLG9CQUFULENBQThCLFNBQTlCLEVBQXlDLENBQXpDLEVBQTRDLFVBQTVDLENBQXVELFdBQXZELENBQW1FLFNBQVMsb0JBQVQsQ0FBOEIsU0FBOUIsRUFBeUMsQ0FBekMsQ0FBbkU7QUFDRDs7QUFFRDtBQUNBLFVBQUksdURBRU0sS0FBSyxTQUZYLFNBRXdCLEtBQUssUUFBTCxDQUFjLEtBRnRDLHdDQUFKO0FBS0E7QUFDQSxXQUFLLE9BQUwsQ0FBYSxrQkFBYixDQUFpQyxZQUFqQyxFQUErQyxZQUEvQztBQUNEOzs7Ozs7QUFHTCxJQUFJLFFBQVEsSUFBSSxLQUFKLEVBQVo7QUFDQSxNQUFNLEtBQU4iLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiY2xhc3MgTXlBcHAge1xuXG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgdGhpcy5hcHBCb2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJhcHBcIilbMF07XG4gIH1cblxuICBzdGFydCgpe1xuICAgIC8vIGluaXQgSG9tZVBhZ2VcbiAgICBsZXQgaG9tZVBhZ2UgPSBuZXcgSG9tZVBhZ2UodGhpcy5hcHBCb2R5KTtcbiAgfVxuXG59XG5cbmNsYXNzIEhvbWVQYWdlIHtcblxuICBjb25zdHJ1Y3RvcihhcHBCb2R5KXtcbiAgICB0aGlzLmFwcEJvZHkgPSBhcHBCb2R5XG4gICAgdGhpcy5wYWdlVGl0bGUgPSAnSGVsbG8gd29ybGQhJztcbiAgICB0aGlzLmluaXRVSSgpO1xuICB9XG5cbiAgaW5pdFVJKCl7XG4gICAgLy8gcmVtb3ZlIGFsbCBzZWN0aW9uIGJlZm9yZSBkaXNwbGF5IFVJXG4gICAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzZWN0aW9uXCIpWzBdKXtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2VjdGlvblwiKVswXS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2VjdGlvblwiKVswXSlcbiAgICB9XG4gICAgLy8gY3JlYXRlIHBhZ2Ugc2tlbGV0b25cbiAgICBsZXQgcGFnZVNrZWxldG9uID0gYFxuICAgICAgPHNlY3Rpb24+XG4gICAgICAgIDxoMT4ke3RoaXMucGFnZVRpdGxlfTwvaDE+XG4gICAgICAgIDxmb3JtPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImVtYWlsXCI+RW1haWw6PC9sYWJlbD4gPGlucHV0IHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIHZhbHVlPVwiXCIgcGxhY2Vob2xkZXI9XCJ2b3RyZWVtYWlsLmNoXCIgIC8+PGJyLz5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkOjwvbGFiZWw+IDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiB2YWx1ZT1cIlwiICAvPjxici8+XG4gICAgICAgICAgICA8YnV0dG9uPkxvZ2luPC9idXR0b24+XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L3NlY3Rpb24+YDtcbiAgICAvLyBhZGQgcGFnZSBza2VsZXRvbiBpbiBib2R5XG4gICAgdGhpcy5hcHBCb2R5Lmluc2VydEFkamFjZW50SFRNTCggJ2FmdGVyYmVnaW4nLCBwYWdlU2tlbGV0b24gKVxuICAgIHRoaXMubG9hZEV2ZW50VUkoKVxuXG4gIH1cblxuICBsb2FkRXZlbnRVSSgpe1xuICAgIGxldCBsb2dpbkZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImZvcm1cIilbMF07XG4gICAgbG9naW5Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgIGV2ZW50ID0+IHRoaXMub25Mb2dpbihldmVudCksIGZhbHNlKVxuXG5cbiAgfVxuXG4gIG9uTG9naW4oZXZlbnQpe1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBsZXQgdmFsaWRhdGlvbklucHV0ID0gMFxuICAgIGxldCBmb3JtSW5wdXQgPSB7fVxuICAgIGxldCBmb3JtID0gZG9jdW1lbnQuZm9ybXNbMF0uZWxlbWVudHNcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZvcm0ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmKGZvcm1baV0udmFsdWUpe1xuICAgICAgICBmb3JtSW5wdXRbZm9ybVtpXS5uYW1lXSA9IGZvcm1baV0udmFsdWVcbiAgICAgICAgdmFsaWRhdGlvbklucHV0KytcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc29sZS5sb2coZm9ybUlucHV0KVxuICAgIGlmKHZhbGlkYXRpb25JbnB1dCA9PT0gMil7XG4gICAgICBjb25zb2xlLmxvZygnbG9hZCBVc2VyUGFnZScpXG4gICAgICBuZXcgVXNlclBhZ2UodGhpcy5hcHBCb2R5LGZvcm1JbnB1dCk7XG4gICAgfVxuICB9XG5cbn1cblxuY2xhc3MgVXNlclBhZ2Uge1xuXG4gIGNvbnN0cnVjdG9yKGFwcEJvZHksZm9ybUlucHV0KXtcbiAgICB0aGlzLmFwcEJvZHkgPSBhcHBCb2R5XG4gICAgdGhpcy5mb3JtRGF0YSA9IGZvcm1JbnB1dFxuICAgIHRoaXMucGFnZVRpdGxlID0gXCJIZWxsb1wiO1xuICAgIHRoaXMuaW5pdFVJKCk7XG4gIH1cblxuICAgIGluaXRVSSgpe1xuICAgICAgLy8gcmVtb3ZlIGFsbCBzZWN0aW9uIGJlZm9yZSBkaXNwbGF5IFVJXG4gICAgICBpZihkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNlY3Rpb25cIilbMF0pe1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNlY3Rpb25cIilbMF0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNlY3Rpb25cIilbMF0pXG4gICAgICB9XG5cbiAgICAgIC8vIGNyZWF0ZSBwYWdlIHNrZWxldG9uXG4gICAgICBsZXQgcGFnZVNrZWxldG9uID0gYFxuICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICA8aDE+JHt0aGlzLnBhZ2VUaXRsZX0gJHt0aGlzLmZvcm1EYXRhLmVtYWlsfSAhPC9oMT5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgYDtcbiAgICAgIC8vIGFkZCBwYWdlIHNrZWxldG9uIGluIGJvZHlcbiAgICAgIHRoaXMuYXBwQm9keS5pbnNlcnRBZGphY2VudEhUTUwoICdhZnRlcmJlZ2luJywgcGFnZVNrZWxldG9uIClcbiAgICB9XG59XG5cbmxldCBteUFwcCA9IG5ldyBNeUFwcCgpO1xubXlBcHAuc3RhcnQoKTtcbiJdfQ==
