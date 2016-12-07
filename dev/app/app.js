
import { HomePage } from './pages/home/home';

class MyApp {

  constructor(){
    this.appBody = document.getElementsByTagName("app")[0];
  }

  start(){
    // init HomePage
    let homePage = new HomePage(this.appBody);
  }

}

let myApp = new MyApp();
myApp.start();
