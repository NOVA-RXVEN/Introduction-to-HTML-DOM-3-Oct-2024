function myFunction() {
  document.getElementById("result").innerHTML =
    document.getElementById("demo").firstChild.nodeValue;
  document.getElementById("result1").innerHTML =
    document.getElementById("demo").childNodes[0].nodeValue;

  document.getElementById("result2").innerHTML =
    document.getElementById("demo").childNodes[0].nodeValue;

  document.getElementById("result3").innerHTML =
    document.getElementById("demo").childNodes[0].nodeValue;

  document.getElementById("result4").innerHTML =
    document.getElementById("demo").childNodes[0].nodeValue;
}
