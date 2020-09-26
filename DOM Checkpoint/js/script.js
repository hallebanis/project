var nClick = 0;
var arr = new Array();
var txtNum3 = document.getElementById("qtyArt3");
var txtNum2 = document.getElementById("qtyArt2");
var txtNum1 = document.getElementById("qtyArt1");
var unitP1 = document.getElementById("unitPrice1");
var unitP2 = document.getElementById("unitPrice2");
var unitP3 = document.getElementById("unitPrice3");
var tP = document.getElementById("totalPrice");
var btn = document.getElementsByClassName("changeQte");
var iQT1 = txtNum1.id;
var iQT2 = txtNum2.id;
var iQT3 = txtNum3.id;
function recalc() {
  var txtNum3 = document.getElementById("qtyArt3");
  var txtNum2 = document.getElementById("qtyArt2");
  var txtNum1 = document.getElementById("qtyArt1");
  var unitP1 = document.getElementById("unitPrice1");
  var unitP2 = document.getElementById("unitPrice2");
  var unitP3 = document.getElementById("unitPrice3");
  if (txtNum1 != null)
    arr[0] = [parseInt(txtNum1.value), parseInt(unitP1.textContent)];
  else arr[0] = [0, 0];
  if (txtNum2 != null)
    arr[1] = [parseInt(txtNum2.value), parseInt(unitP2.textContent)];
  else arr[1] = [0, 0];
  if (txtNum3 != null)
    arr[2] = [parseInt(txtNum3.value), parseInt(unitP3.textContent)];
  else arr[2] = [0, 0];
  tP.textContent = total(arr) + ".000TND";
}

recalc();
function rmArt(artId) {
  var rmDiv = document.getElementById(artId).parentNode.parentNode.parentNode;
  var rmParent = rmDiv.parentNode;
  rmParent.removeChild(rmDiv);
  recalc();
}

function addWishList(artId) {
  var wishDiv = document.getElementById(artId).parentNode.parentNode
    .parentElement;
  nClick++;
  if (nClick % 2 == 1) wishDiv.style.backgroundColor = "rgb(255,164,255)";
  else wishDiv.style.backgroundColor = "rgb(255,255,255)";
}

function resetQte() {
  var txtNum3 = document.getElementById("qtyArt3");
  var txtNum2 = document.getElementById("qtyArt2");
  var txtNum1 = document.getElementById("qtyArt1");
  if (txtNum1 != null) txtNum1.setAttribute("value", "1");
  if (txtNum2 != null) txtNum2.setAttribute("value", "1");
  if (txtNum3 != null) txtNum3.setAttribute("value", "1");
  recalc();
}
function initTxtNum() {
  var txtNum3 = document.getElementById("qtyArt3");
  var txtNum2 = document.getElementById("qtyArt2");
  var txtNum1 = document.getElementById("qtyArt1");
}
var idA1 = document.getElementById("del1");
var idA2 = document.getElementById("del2");
var idA3 = document.getElementById("del3");
iA3 = idA3.id;
iA2 = idA2.id;
iA1 = idA1.id;

function incrementQty(artId) {
  var txtNum = document.getElementById(artId);
  var num = parseInt(txtNum.getAttribute("value"));
  num++;
  txtNum.setAttribute("value", num);
  txtNum.texContent = num;
}

function decrementQty(artId) {
  var txtNum = document.getElementById(artId);
  var num = parseInt(txtNum.getAttribute("value"));
  var num = parseInt(txtNum.value);
  if (num > 1) num--;
  txtNum.setAttribute("value", num);
}
function total(arr) {
  var sum = 0;
  var arr1;
  for (i in arr) {
    if (arr[i] != [null, null]) {
      arr1 = arr[i];
      sum = sum + arr1[0] * arr1[1];
    }
  }
  return sum;
}
