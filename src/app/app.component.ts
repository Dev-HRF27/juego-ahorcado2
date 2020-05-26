import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {

  palabra = 'AGUACATE';
  palabraOculta = '';

  intentos = 0;
  limite = 9;

  gana = false;
  pierde = false;

  letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
            'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S',
            'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  constructor () {

    this.palabraOculta = '_ '.repeat(this.palabra.length);

  }
  comprobar(letra){

    this.existeLetra(letra);
    //console.log('letra: ' + letra);
    const palabraOcultaArr = this.palabraOculta.split(' ');
    //console.log(palabraOcultaArr);
    for (let i = 0; i < this.palabra.length; i++) {
      if (this.palabra[i] === letra) {
        palabraOcultaArr[i] = letra;
      }
    }
    this.palabraOculta = palabraOcultaArr.join(' ');
    this.verificarGane();
  }

  verificarGane(){
    const palabraArr = this.palabraOculta.split(' ');
    const palabraEvaluar = palabraArr.join('');

    if (palabraEvaluar === this.palabra) {
      this.gana = true;
      //console.log("Felicidades lo lograste");
    }

    if (this.intentos >= this.limite) {
      this.pierde = true;
      //console.log("Se agotaron tus intentos, vuelve a intentarlo!");

    }
  }

  existeLetra (letra) {
    if (this.palabra.indexOf(letra) >= 0) {
      //console.log("existe letra " + letra);
    } else {
      //console.log("no existe letra " + letra);
      this.intentos++;
    }
  }
}
