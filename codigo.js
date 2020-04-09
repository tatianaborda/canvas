var texto= document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);

var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var ancho = d.width;

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle =color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujoPorClick()
{
  var lineas = parseInt(texto.value);
  var l = 0;
  var yi, xf;
  var colorcito = "pink";
  var espacio = ancho / lineas;

  while(l<lineas)
  {
    yi = espacio * l;
    xf = espacio * (l+1);
    dibujarLinea(colorcito, 0, yi, xf, 300);
    l = l+1;
  }
  dibujarLinea(colorcito, 1, 1, 1, 299);
  dibujarLinea(colorcito, 1, 299,299, 299);
  dibujarLinea(colorcito, 299, 1, 1, 1);
  dibujarLinea(colorcito, 299, 299 ,299, 1);
}
