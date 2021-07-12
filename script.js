var circle= document.getElementById("circle");
var upb= document.getElementById("upb");
var downb= document.getElementById("downb");

var rotateValue = circle.style.transform;
var rotateSum;
upb.onclick = function()
{
    rotateSum = rotateValue + "rotate(-90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
}
downb.onclick = function()
{
    rotateSum = rotateValue + "rotate(90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
}
