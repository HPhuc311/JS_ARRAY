function getElement(element){
  return document.querySelector(element)
}

var arr = []
var count = 0 


function inputArray(){
  var num = +getElement('#inputofUser').value
  arr[count] = num;
  count++
}

function outputArray(){
  var result = ""
  for(var i = 0; i < count; i++){
    result += arr[i] + ','
  }
  return result
}


getElement('#clickToAdd').onclick= function(){
  inputArray()
  getElement('#resultEx').innerHTML = outputArray()
}


