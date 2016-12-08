import { APIKEYUNSPLASH } from './apikey-config.js';

export class UnsplashPhoto{

    constructor(){

      this.url="https://api.unsplash.com/photos/random/?client_id=";
      this.params=APIKEYUNSPLASH;

    }


    chargerImage(){

        // Instancier mon objet
        var xhr = new XMLHttpRequest();
        // Attribuer du code à chaque changement d'état:
        xhr.onreadystatechange = _ => {
          console.log("Etat: " + xhr.readyState);
          // L'état qui nous intéresse est le "DONE = 4"
          if (xhr.readyState==4) {
            console.log(xhr.status, xhr.statusText);
            console.log(xhr.responseText);
            var maPhotoBackground = JSON.parse(xhr.responseText);
          }
        }
        let urlJointe = this.url+this.params.clientAppID;
        // Ouvrir la connexion
        xhr.open("get", urlJointe);
        // Envoyer/Finaliser la requête
        xhr.send();
    }



}
