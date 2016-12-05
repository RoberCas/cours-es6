class MonApp{

  constructor(){

    this.maMethode()
}

maMethode(){
  let helloWorld = document.createElement('h1')
  helloWorld.innerHTML = "Helle world"
  document.getElementsByTagName('body').appendChild(helloWorld)
}




}

let monApp = new MonApp();
