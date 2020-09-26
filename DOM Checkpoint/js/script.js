function incrementQty(txtNum) {
  var num = parseInt(txtNum.getAttribute("value"));
  console.log(num);
  num++;
  txtNum.setAttribute("value", num);
  txtNum.texContent = num;
}

function decrementQty(txtNum) {
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
