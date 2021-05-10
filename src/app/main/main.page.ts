import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router'

import * as $ from 'jquery';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {


  idiomaSeleccionado: string = "";
  categoriaSeleccionada: string = "";

  reproducir: boolean = false;

  constructor(public router: Router) { }



  ngOnInit() {

  }

  seleccionarEspaniol() {
    this.idiomaSeleccionado = "espaniol";
    $(".siguiente-uno").fadeIn();
  }

  seleccionarPortugues () {
    this.idiomaSeleccionado = "portugues";
    $(".siguiente-uno").fadeIn();
  }

  seleccionarIngles () {
    this.idiomaSeleccionado = "ingles";
    $(".siguiente-uno").fadeIn();
  }

  seleccionarNumeros () {
    this.categoriaSeleccionada = "numeros";
    $(".siguiente-dos").fadeIn();
  }

  seleccionarAnimales () {
    this.categoriaSeleccionada = "animales";
    $(".siguiente-dos").fadeIn();
  }

  seleccionarColores () {
    this.categoriaSeleccionada = "colores";
    $(".siguiente-dos").fadeIn();
  }

  siguienteUno () {
    $(".container-idiomas").fadeOut();
    $(".siguiente-uno").fadeOut();
    $(".container").css("background-position", "center");

    setTimeout(function() {
      
      $(".container-categorias").fadeIn();
      $(".container-categorias").css("display","flex");
      $(".regresar-uno").fadeIn();
      //$(".siguiente-dos").fadeIn();  
    },500);
    
      
  }

  removerClases () {
    $(".btnUno").removeClass("caballoAni");
    $(".btnDos").removeClass("cerdoAni");
    $(".btnTres").removeClass("ovejaAni");
    $(".btnCuatro").removeClass("perroAni");
    $(".btnCinco").removeClass("vacaAni");

    $(".btnUno").removeClass("unoNum");
    $(".btnDos").removeClass("dosNum");
    $(".btnTres").removeClass("tresNum");
    $(".btnCuatro").removeClass("cuatroNum");
    $(".btnCinco").removeClass("cincoNum");

    $(".btnUno").removeClass("rojoCol");
    $(".btnDos").removeClass("azulCol");
    $(".btnTres").removeClass("verdeCol");
    $(".btnCuatro").removeClass("amarilloCol");
    $(".btnCinco").removeClass("violetaCol");
  }

  siguienteDos () {
    $(".container-categorias").fadeOut();
    $(".siguiente-dos").fadeOut();
    $(".container").css("background-position", "right");
    $(".cambiar-idioma").fadeIn();
    $(".cambiar-categoria").fadeIn();
    //alert(this.idiomaSeleccionado + "\n" + this.categoriaSeleccionada);
    switch (this.idiomaSeleccionado) {
      case "espaniol":
        switch (this.categoriaSeleccionada) {
          case "numeros":
            this.removerClases();

            $(".btnUno").addClass("unoNum");
            $(".btnDos").addClass("dosNum");
            $(".btnTres").addClass("tresNum");
            $(".btnCuatro").addClass("cuatroNum");
            $(".btnCinco").addClass("cincoNum");
            break;

          case "animales":
            this.removerClases();

            $(".btnUno").addClass("caballoAni");
            $(".btnDos").addClass("cerdoAni");
            $(".btnTres").addClass("ovejaAni");
            $(".btnCuatro").addClass("perroAni");
            $(".btnCinco").addClass("vacaAni");
            break;
          case "colores":
            this.removerClases();

            $(".btnUno").addClass("rojoCol");
            $(".btnDos").addClass("azulCol");
            $(".btnTres").addClass("verdeCol");
            $(".btnCuatro").addClass("amarilloCol");
            $(".btnCinco").addClass("violetaCol");
            
            break;

        }
        break;
      case "ingles":
        switch (this.categoriaSeleccionada) {
            case "numeros":
            this.removerClases();

            $(".btnUno").addClass("unoNum");
            $(".btnDos").addClass("dosNum");
            $(".btnTres").addClass("tresNum");
            $(".btnCuatro").addClass("cuatroNum");
            $(".btnCinco").addClass("cincoNum");
            break;

            case "animales":
            this.removerClases();

            $(".btnUno").addClass("caballoAni");
            $(".btnDos").addClass("cerdoAni");
            $(".btnTres").addClass("ovejaAni");
            $(".btnCuatro").addClass("perroAni");
            $(".btnCinco").addClass("vacaAni");
            break;

            case "colores":
            this.removerClases();
            
            $(".btnUno").addClass("rojoCol");
            $(".btnDos").addClass("azulCol");
            $(".btnTres").addClass("verdeCol");
            $(".btnCuatro").addClass("amarilloCol");
            $(".btnCinco").addClass("violetaCol");
            
            break;

        }
        
        break;
      case "portugues":
        switch (this.categoriaSeleccionada) {
            case "numeros":
            this.removerClases();

            $(".btnUno").addClass("unoNum");
            $(".btnDos").addClass("dosNum");
            $(".btnTres").addClass("tresNum");
            $(".btnCuatro").addClass("cuatroNum");
            $(".btnCinco").addClass("cincoNum");
            break;

            case "animales":
            this.removerClases();

            $(".btnUno").addClass("caballoAni");
            $(".btnDos").addClass("cerdoAni");
            $(".btnTres").addClass("ovejaAni");
            $(".btnCuatro").addClass("perroAni");
            $(".btnCinco").addClass("vacaAni");
            break;
            
            case "colores":
            this.removerClases();
            
            $(".btnUno").addClass("rojoCol");
            $(".btnDos").addClass("azulCol");
            $(".btnTres").addClass("verdeCol");
            $(".btnCuatro").addClass("amarilloCol");
            $(".btnCinco").addClass("violetaCol");
            
            break;

        }
        break;
    }

    setTimeout(function() {
      
      $(".container-objetos").fadeIn();
      $(".container-objetos").css("display","flex");
      $(".regresar-dos").fadeIn();
      //$(".siguiente-dos").fadeIn();  
    },500);
    
      
  }

  regresarUno() {
    $(".container-categorias").fadeOut();
    $(".regresar-uno").fadeOut();
    $(".siguiente-dos").fadeOut();

    setTimeout(function() {
      $(".container-idiomas").fadeIn();
      //$(".siguiente-uno").fadeIn();
      $(".container").css("background-position", "left");  
    },500);
  }

  regresarDos() {
    $(".container-objetos").fadeOut();
    $(".regresar-dos").fadeOut();
    this.categoriaSeleccionada = "";
    //$(".siguiente-dos").fadeOut();

    setTimeout(function() {
      $(".container-categorias").fadeIn();
      $(".siguiente-dos").fadeIn();
      $(".regresar-uno").fadeIn();
      $(".container").css("background-position", "center");  
    },500);
  }

  reproducirAudio(ruta: string)
  {
    let audio = new Audio("../../assets/audio/"+this.idiomaSeleccionado+"/"+this.categoriaSeleccionada+"/"+ruta+".mp3");
    audio.play();
    this.reproducir = true;
    setTimeout(() => {
      this.reproducir = false;
    },2000);
  }

  dropear(value:string){
    $(`#${value}`).toggleClass('active');
  };

  selectNumeros(){
    this.categoriaSeleccionada = "numeros";
    this.removerClases();

    $(".btnUno").addClass("unoNum");
    $(".btnDos").addClass("dosNum");
    $(".btnTres").addClass("tresNum");
    $(".btnCuatro").addClass("cuatroNum");
    $(".btnCinco").addClass("cincoNum");
  }

  selectAnimales(){
    this.categoriaSeleccionada = "animales";
    this.removerClases();

    $(".btnUno").addClass("caballoAni");
    $(".btnDos").addClass("cerdoAni");
    $(".btnTres").addClass("ovejaAni");
    $(".btnCuatro").addClass("perroAni");
    $(".btnCinco").addClass("vacaAni");
  }

  selectColores(){
    this.categoriaSeleccionada = "colores";
    this.removerClases();

    $(".btnUno").addClass("rojoCol");
    $(".btnDos").addClass("azulCol");
    $(".btnTres").addClass("verdeCol");
    $(".btnCuatro").addClass("amarilloCol");
    $(".btnCinco").addClass("violetaCol");
  }

  selectEspaniol() {
    this.idiomaSeleccionado = "espaniol";
  }

  selectPortugues() {
    this.idiomaSeleccionado = "portugues";
  }

  selectIngles() {
    this.idiomaSeleccionado = "ingles";
  }
  
}
