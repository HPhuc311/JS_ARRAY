function getElement(element){
  return document.querySelector(element)
}

//EX1: Nhập mảng 

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

// Ex2: Tính tổng các số dương

function sumofPositive(){
  var sum = 0
  for( var i = 0; i < arr.length; i++){
    if ( arr[i] > 0){
        sum += arr[i]
    }
  }
  document.querySelector('#resultEx1').innerHTML = ' Tổng số dương là: ' + sum
}

getElement('#clickResults1').onclick = sumofPositive


// Ex2: Đếm các số dương

function countofPositive(){
  var dem = 0 
  for (var j = 0; j < arr.length; j++){
    if( arr[j] > 0){
      dem++
    } 
  }

  document.querySelector('#resultEx2').innerHTML = ' Số dương là: ' + dem
}

getElement('#clickResults2').onclick = countofPositive 


// Ex3: Tìm số nhỏ nhất
function smallestofNumber(){
  var min = arr[0]
  for(var i = 0; i < arr.length; i++)
    if(arr[i] < min){
      min = arr[i]
    }
    document.querySelector('#resultEx3').innerHTML = ' Số nhỏ nhất là: ' + min
}

getElement('#clickResults3').onclick = smallestofNumber

// Ex4: Tìm số dương nhỏ nhất
function findSmallestPositive(numbers) {
  var smallestPositive = null;
  for (var i = 0; i < numbers.length; i++) {
    var num = numbers[i];
    if (num > 0) {
      if (smallestPositive === null || num < smallestPositive) {
        smallestPositive = num;
      }
    }
  }

  return smallestPositive;
}
getElement('#clickResults4').onclick = function()  {
  var result = findSmallestPositive(arr)
  if (result === null) {
    document.querySelector('#resultEx4').innerHTML = ' Không có số dương trong mảng '
  } else {
    document.querySelector('#resultEx4').innerHTML = ' Số dương nhỏ nhất trong mảng là: ' + result
  }

}

// Ex5 : Tìm số chẵn cuối cùng:
function findLastEvenNumber(){
  var numberLastEvenNumber = []
  for(var i = 0; i < arr.length ; i++){
    if(arr[i] % 2 === 0){
      numberLastEvenNumber.push(arr[i])
      break
    }
  }
  document.querySelector('#resultEx5').innerHTML = ' Số chắn cuối cùng là: ' + number 
}
getElement('#clickResults5').onclick = findLastEvenNumber