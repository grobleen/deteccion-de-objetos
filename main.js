Webcam.set({
width:350, 
height:300, 
image_format:'png',
png_quality:90
});
camara = document.getElementById("camara");
Webcam.attach("#camara");
function tomarfoto(){
Webcam.snap(function (data_uri){
document.getElementById("resultado").innerHTML='<img id="foto" src="'=data_uri+'"/>';

});    
}
console.log("ml5 versión",ml5.version);
var classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/0yAHPl1X6/model.json',modelloaded);
function modelloaded(){
console.log('Modelo cargado');
}