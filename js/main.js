var myWindow;

function myWindowOpen() {
  myWindow=window.open("https://lpnu.ua","myWindow", "width=700, height=700");
}

function myWindowClose() {
    myWindow.close();
}

function convertSeconds(timestamp){
if(timestamp!=0){
  var hours = Math.floor(timestamp / 60 / 60);
  var minutes = Math.floor(timestamp / 60) - (hours * 60);
  var seconds = timestamp % 60;
  alert(hours + ':' + minutes + ':' + seconds);
}
else {
  alert("You did not enter a value!");
}
}

function funсtionOnLoad(){

  document.cookie = "name=user";
  document.cookie = "fullname=Ivanov";
  document.cookie = "date=10.01.2021";

  alert(document.cookie);

  if(confirm("Задати колір тексту синім а фон жовтим??")){
    var x = document.getElementsByClassName("work");
    var i;
    for (i = 0; i < x.length; i++) {
      x[i].style.backgroundColor = "yellow";
      x[i].style.color = "blue";
    }
  }
}
