var words = [
  "RESPETO",
  "AMABILIDAD",
  "ETICA",
  "CHALLENGE",
  "DOMINICANO",
  "CULTURA",
  "CARRERA",
  "SOFTWARE",
  "AHORCADO",
  "MARCA",
  "SIMULADOR",
  "JAVASCRIPT",
  "AUTOMOVIL",
  "COHETE",
  "CASA",
  "PAIS",
  "CIUDAD",
  "PATRIA",
  "DUARTE",
  "CARIBE",
  "AMERICA",
  "MARTE",
  "JUPITER",
  "PLAYA",
  "RIO",
  "ARENA",
  "MAR",
  "OCEANO",
  "CONTINENTE",
  "INVIERNO",
  "PRIMAVERA",
  "VERANO",
  "FLORES",
  "SOL",
  "LUNA",
  "ESTRELLAS",
  "GALAXIA",
  "MARTE",
  "JUPITER",
  "SATURNO",
  "VENUS",
  "JUEGO",
  "HOLANDA",
  "USA",
  "REPDOM",
  "CANADA",
  "LONDRES",
  "TURQUIA",
  "SUIZA",
];

var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");
var letters = [];
var correctWord = "";
var mistakes = 9;

function selectSecretWord() {
  var word = words[Math.floor(Math.random() * words.length)];
  secretWord = word;
  return word;
}

function drawLines() {
  pincel.lineWidth = 6;
  pincel.lineCap = "round";
  pincel.lineJoin = "round";
  pincel.strokeStyle = "#4e97d1";
  pincel.beginPath();

  var width = 600 / secretWord.length;
  for (let i = 0; i < secretWord.length; i++) {
    pincel.moveTo(350 + width * i, 800);
    pincel.lineTo(400 + width * i, 800);
  }
  pincel.stroke();
  pincel.closePath();
}
drawLines(selectSecretWord());

function writeCorrectLetter(index) {
  pincel.font = "bold 52px Karla";
  pincel.lineWidth = 6;
  pincel.lineCap = "round";
  pincel.lineJoin = "round";
  pincel.fillStyle = "#0A3871";

  var width = 600 / secretWord.length;
  pincel.fillText(secretWord[index], 355 + width * index, 800);
}

function writeIncorrectLetter(letter, mistakesLeft) {
  pincel.font = "bold 40px Karla";
  pincel.lineWidth = 6;
  pincel.lineCap = "round";
  pincel.lineJoin = "round";
  pincel.fillStyle = "grey";

  pincel.fillText(letter, 355 + 40 * (10 - mistakesLeft), 850, 40);
}

function verifyLetterPulsed(key) {
  if (
    (key.charCodeAt(0) >= 97 && key.charCodeAt(0) <= 122) ||
    key.charCodeAt(0) == 164
  ) {
    if (letters.length < 1 || letters.indexOf(key) < 0) {
      letters.push(key);
      return false;
    } else {
      letters.push(key);
      return true;
    }
  }
}

function addCorrectLetter(i) {
  correctWord += secretWord[i].toUpperCase();
}

function addIncorrectLetter(lettter) {
  if (secretWord.indexOf(lettter) <= 0) {
    mistakes -= 1; //cantidad de errores que se iran restando
  }

  if (mistakes == 8) {
    var pantalla = document.querySelector("canvas");
    var pincel = pantalla.getContext("2d");
    //base horca
    pincel.beginPath();
    pincel.strokeStyle = "#78451a";
    pincel.lineWidth = 5;
    pincel.moveTo(920, 700);
    pincel.lineTo(380, 700);
    pincel.stroke();
    pincel.fill();
  }

  if (mistakes == 7) {
    var pantalla = document.querySelector("canvas");
    var pincel = pantalla.getContext("2d");
    //poste horca
    pincel.beginPath();
    pincel.strokeStyle = "#78451a";
    pincel.lineWidth = 5;
    pincel.moveTo(380, 200);
    pincel.lineTo(381, 702);
    pincel.stroke();
    pincel.fill();
  }

  if (mistakes == 6) {
    var pantalla = document.querySelector("canvas");
    var pincel = pantalla.getContext("2d");
    //brazo de soporte
    pincel.beginPath();
    pincel.strokeStyle = "#78451a";
    pincel.lineWidth = 5;
    pincel.moveTo(380, 300);
    pincel.lineTo(500, 200);
    pincel.stroke();
    pincel.fill();
    //soporte horca
    pincel.beginPath();
    pincel.strokeStyle = "#78451a";
    pincel.lineWidth = 5;
    pincel.moveTo(377, 200);
    pincel.lineTo(720, 200);
    pincel.stroke();
    pincel.fill();
  }

  if (mistakes == 5) {
    var pantalla = document.querySelector("canvas");
    var pincel = pantalla.getContext("2d");
    //cuerda
    pincel.beginPath();
    pincel.strokeStyle = "#000000";
    pincel.lineWidth = 3;
    pincel.moveTo(700, 200);
    pincel.lineTo(700, 320);
    pincel.stroke();
    pincel.fill();
  }

  if (mistakes == 4) {
    var pantalla = document.querySelector("canvas");
    var pincel = pantalla.getContext("2d");
    //Cabeza
    pincel.fillStyle = "#f3f4fe";
    pincel.strokeStyle = "#000000";
    pincel.lineWidth = 5;
    pincel.beginPath();
    pincel.arc(700, 335, 45, 0, (Math.PI / 180) * 360);
    pincel.moveTo(0, 0);
    pincel.lineTo(240, 0);
    pincel.stroke();
    pincel.fill();
  }

  if (mistakes == 3) {
    var pantalla = document.querySelector("canvas");
    var pincel = pantalla.getContext("2d");
    //cuerpo
    pincel.beginPath();
    pincel.strokeStyle = "#000000";
    pincel.lineWidth = 3;
    pincel.moveTo(700, 381);
    pincel.lineTo(700, 550);
    pincel.stroke();
    pincel.fill();
  }

  if (mistakes == 2) {
    var pantalla = document.querySelector("canvas");
    var pincel = pantalla.getContext("2d");
    //mano derecha
    pincel.beginPath();
    pincel.strokeStyle = "#000000";
    pincel.lineWidth = 3;
    pincel.lineCap = "round";
    pincel.moveTo(700, 410);
    pincel.lineTo(660, 470);
    pincel.stroke();
    pincel.fill();

    //mano izquierda
    pincel.beginPath();
    pincel.strokeStyle = "#000000";
    pincel.lineWidth = 3;
    pincel.lineCap = "round";
    pincel.moveTo(700, 410);
    pincel.lineTo(740, 470);
    pincel.stroke();
    pincel.fill();
  }

  if (mistakes == 1) {
    var pantalla = document.querySelector("canvas");
    var pincel = pantalla.getContext("2d");
    //pie derecho
    pincel.beginPath();
    pincel.strokeStyle = "#000000";
    pincel.lineWidth = 3;
    pincel.lineCap = "round";
    pincel.moveTo(700, 550);
    pincel.lineTo(670, 610);
    pincel.stroke();
    pincel.fill();

    //pie izquierdo
    pincel.beginPath();
    pincel.strokeStyle = "#000000";
    pincel.lineWidth = 3;
    pincel.lineCap = "round";
    pincel.moveTo(700, 550);
    pincel.lineTo(730, 610);
    pincel.stroke();
    pincel.fill();
  }

  if (mistakes == 0) {
    var pantalla = document.querySelector("canvas");
    var pincel = pantalla.getContext("2d");
    //ojo derecho
    pincel.beginPath();
    pincel.strokeStyle = "#000000";
    pincel.lineWidth = 2;
    pincel.lineCap = "round";
    pincel.moveTo(685, 320);
    pincel.lineTo(675, 335);
    pincel.stroke();
    pincel.fill();
    //segunda parte ojo derecho;
    pincel.beginPath();
    pincel.strokeStyle = "#000000";
    pincel.lineWidth = 2;
    pincel.lineCap = "round";
    pincel.moveTo(675, 320);
    pincel.lineTo(685, 335);
    pincel.stroke();
    pincel.fill();
    //ojo izauierdo
    pincel.beginPath();
    pincel.strokeStyle = "#000000";
    pincel.lineWidth = 2;
    pincel.lineCap = "round";
    pincel.moveTo(715, 320);
    pincel.lineTo(725, 335);
    pincel.stroke();
    pincel.fill();
    //segunda parte ojo izquierdo
    pincel.beginPath();
    pincel.strokeStyle = "#000000";
    pincel.lineWidth = 2;
    pincel.lineCap = "round";
    pincel.moveTo(725, 320);
    pincel.lineTo(715, 335);
    pincel.stroke();
    pincel.fill();
    //boca
    pincel.beginPath();
    pincel.strokeStyle = "#000000";
    pincel.lineWidth = 3;
    pincel.moveTo(720, 360);
    pincel.lineTo(680, 360);
    pincel.stroke();
    pincel.fill();
    //lengua
    pincel.beginPath();
    pincel.strokeStyle = "#ff0000";
    pincel.lineCap = "round";
    pincel.lineWidth = 4;
    pincel.moveTo(700, 360);
    pincel.lineTo(715, 375);
    pincel.stroke();
    pincel.fill();
  }
}

function restart() {
  document.querySelector(".overlay").classList.remove("activo");
  document.querySelector(".container-btnsFinalGame").classList.remove("activo");
  window.location.href = "./Ahorcado.html";
}

function finalGame() {
  document.querySelector(".overlay").classList.toggle("activo");
  document.querySelector(".container-btnsFinalGame").classList.toggle("activo");
}

/*--------------------------Eliminar palabras repetidas-------------------------------------*/
var noRepeat = secretWord;
var singleLetter = [];
for (let i = 0; i < noRepeat.length; i++) {
  var element = noRepeat[i];

  if (!singleLetter.includes(noRepeat[i])) {
    singleLetter.push(element);
  }
}
singleLetter.toString(); //convertir array a string

var noCommaSingleLetter = singleLetter.toString();
noCommaSingleLetter = noCommaSingleLetter.replace(/,/g, ""); //se eliminan las comas provenientes del array
/*---------------------Fin eliminar palabras repetidas-------------------*/

/*---------------------asignar nombre a victima-----------------------------*/
var nombre = "chanchito";

var valid = setInterval(function validate() {
  if (correctWord.length < noCommaSingleLetter.length) {
    document.onkeydown = (e) => {
      let letter = e.key.toUpperCase();

      if (!verifyLetterPulsed(e.key)) {
        if (secretWord.includes(letter)) {
          addCorrectLetter(secretWord.indexOf(letter));
          for (let i = 0; i < secretWord.length; i++) {
            if (secretWord[i] === letter) {
              writeCorrectLetter(i);
            }
          }
        } else {
          if (!verifyLetterPulsed(e.key)) return;

          addIncorrectLetter(letter);
          writeIncorrectLetter(letter, mistakes);
        }
      }
    };
  }
  if (correctWord.length == noCommaSingleLetter.length) {
    pincel.font = "bold 32px Karla";
    pincel.lineWidth = 6;
    pincel.lineCap = "round";
    pincel.lineJoin = "round";
    pincel.fillStyle = "#57A639";
    txt1 = "Ganaste, Felicidades! ";
    txt2 = "Haz salvado a: " + nombre;
    pincel.beginPath();
    pincel.fillText(txt1, 800, 540);
    pincel.fillText(txt2, 800, 580);
    document.onkeydown = "";
    clearInterval(valid);
    finalGame();
  }
  if (mistakes == 0) {
    pincel.font = "bold 32px Karla";
    pincel.lineWidth = 6;
    pincel.lineCap = "round";
    pincel.lineJoin = "round";
    pincel.fillStyle = "#B32428";
    txt1 = "Perdiste! ";
    txt2 = "No haz podido salvar ";
    txt3 = "a " + nombre;
    txt4 = "La palabra correcta es: " + secretWord;

    pincel.beginPath();
    pincel.fillText(txt1, 800, 540);
    pincel.fillText(txt2, 800, 580);
    pincel.fillText(txt3, 800, 620);
    pincel.fillText(txt4, 400, 690);
    document.onkeydown = "";
    clearInterval(valid);
    finalGame();
  }
}, 100);
