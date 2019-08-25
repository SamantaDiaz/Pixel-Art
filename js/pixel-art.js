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

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');

var indicadorColor = document.getElementById("indicador-de-color");
var colorActual;

colorPersonalizado.addEventListener('change', 
  (function() {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
    indicadorColor.style.backgroundColor = colorActual;
  })
);

var paleta = document.getElementById("paleta");
var grillaPixeles = document.getElementById("grilla-pixeles");

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

// Función para crear la grilla con los píxeles dinámicamente
function crearPixeles() {
    for (var i = 0; i < 1750; i++) {
        var pixel = document.createElement("div");
        grillaPixeles.appendChild(pixel);
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

var mApretado = false;

function presionado(e) {
  mApretado = !mApretado;
  console.log(mApretado);
};

function pintarEnMovimiento(e) {
  if(mApretado) {
    e.target.style.backgroundColor = colorActual;
  };
}


crearPaleta();
crearPixeles();