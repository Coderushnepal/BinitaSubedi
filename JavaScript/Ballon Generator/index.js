const mainC = document.createElement( "div" );
mainC.className = "container";
mainC.style.height = "600px";
mainC.style.width = "800px";
mainC.style.padding = "30px";
mainC.style.background = "aliceblue";

const genBtn = document.createElement( "button" );
genBtn.innerHTML = "Generate Balloons";
genBtn.style.background = "green";
genBtn.style.height = "30px";

var color = [
  "red",
  "black",
  "green",
  "grey",
  "aliceblue",
  "orange",
  "purple",
  "pink",
  "yellow",
  "blue",
];

genBtn.onclick = function () {
  createBaloons(
    Random( 0, 800 ),
    Random( 30, 600 ),
    Random( 10, 50 ),
    color[Random( 0, color.length )]
  );
};

document.body.appendChild( genBtn );
document.body.appendChild( mainC );

function Random( min, max ) {
  return Math.floor( Math.random() * ( max - min + 1 ) ) + min;
}

function createBaloons( left, top, size, color ) {
  var mainC = document.getElementsByClassName( "container" )[0];
  var ballon = document.createElement( "div" );
  ballon.className = "baloon";
  ballon.style.position = "absolute";
  ballon.style.height = size;
  ballon.style.width = size;
  ballon.style.left = left;
  ballon.style.top = top;

  ballon.style.borderRadius = "50%";
  ballon.style.background = color;
  mainC.appendChild( ballon );
}