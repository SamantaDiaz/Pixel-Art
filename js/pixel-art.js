var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

//Declaración de variables
var colorPersonalizado = document.getElementById('color-personalizado');
var indicadorColor = document.getElementById("indicador-de-color");
var colorActual;
var paleta = document.getElementById("paleta");
var grillaPixeles = document.getElementById("grilla-pixeles");
var mApretado = false;
var pixeles = [];
var botonBorrar = document.getElementById("borrar");
var batmanImg = document.getElementById("batman");
var flashImg = document.getElementById("flash");
var wonderImg = document.getElementById("wonder");
var invisibleImg = document.getElementById("invisible");
var bGuardar = document.getElementById("guardar");

//Asignación de eventos
botonBorrar.addEventListener("click", borrarGrilla);
batmanImg.addEventListener("click", dibujarSuper);
flashImg.addEventListener("click", dibujarSuper);
wonderImg.addEventListener("click", dibujarSuper);
invisibleImg.addEventListener("click", dibujarSuper);
bGuardar.addEventListener("click", guardarPixelArt);

//Declaración de funciones

//Función para crear la paleta de colores dinámicamente
function crearPaleta() {
  for (var i = 0; i < nombreColores.length; i++) {
      var color = document.createElement("div");
      paleta.appendChild(color);
      color.style.backgroundColor = nombreColores[i];
      color.className = "color-paleta";
      color.addEventListener("click", guardarColor);
  }
};

// Guarda el color de la rueda en colorActual
colorPersonalizado.addEventListener('change', 
  (function() {
    colorActual = colorPersonalizado.value;
    indicadorColor.style.backgroundColor = colorActual;
  })
);

// Función para crear la grilla con los píxeles dinámicamente
function crearPixeles() {
    for (var i = 0; i < 1750; i++) {
        var pixel = document.createElement("div");
        grillaPixeles.appendChild(pixel);
        pixeles.push(pixel);
        pixel.addEventListener("click", pintar);
        pixel.addEventListener("mousedown", presionado);
        pixel.addEventListener("mouseup", presionado);
        pixel.addEventListener("mouseover", pintarEnMovimiento);
    };
};

//Función que guarda el color en el indicador de color
function guardarColor(e) {
  colorActual = e.target.style.backgroundColor;
  indicadorColor.style.backgroundColor = colorActual;
};

//Función que permite pintar los píxeles
function pintar(e) {
  e.target.style.backgroundColor = colorActual;
};

//Función que permite saber si el mouse se encuentra presionado o no
function presionado(e) {
  mApretado = !mApretado;
  console.log(mApretado);
};

//Función que permite pintar en movimiento teniendo en cuenta cuando seapreta y suelta el mouse
function pintarEnMovimiento(e) {
  if(mApretado) {
    e.target.style.backgroundColor = colorActual;
  };
};

//Función que permite borrar(cambiar el backgroundColor a blanco) la grilla
function borrarGrilla() {
  var confirmacion = confirm("¿Desea borrar esta magnífica pieza de arte?");
  if(confirmacion){
    for(var i = 0; i < pixeles.length; i++) {
      pixeles[i].style.backgroundColor = "white";
    };
  }
};

//Función que permite cargar el superheroe seleccionado
function dibujarSuper(e) {
  var superHeroe;
  if (e.target.id === 'batman') {
    superHeroe = batman;
  } else if (e.target.id === 'wonder') {
    superHeroe = wonder;
  } else if (e.target.id === "flash") {
    superHeroe = flash;
  } else if (e.target.id === "invisible"){
    superHeroe = invisible;
  }
  cargarSuperheroe(superHeroe);
};

window.onload(
  crearPaleta(),
  crearPixeles(),
)