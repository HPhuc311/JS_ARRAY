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
  var lastEven = -1
  for(var i = 0; i < arr.length ; i++){
    var value = arr[i]
    if(value % 2 === 0){
      lastEven = value
      document.querySelector('#resultEx5').innerHTML = ' Số chẵn cuối cùng là: ' + lastEven
    }
    if (lastEven === -1){
      document.querySelector('#resultEx5').innerHTML = ' Không có số chẵn trong mảng '
    }
  }
 
}
getElement('#clickResults5').onclick = findLastEvenNumber

// EX6: Đổi chỗ các phần tử trong mảng 

function doiCho(arr, index1, index2) {
  // Lưu giữ giá trị của phần tử tại index1 vào biến tạm thời
  var temp = arr[index1];

  // Gán giá trị của phần tử tại index2 cho phần tử tại index1
  arr[index1] = arr[index2];

  // Gán giá trị của biến tạm thời cho phần tử tại index2
  arr[index2] = temp;

  return arr; // Trả về mảng đã đổi chỗ
}

function changPosition (){
  var position1 = +document.querySelector('#inputofUser1').value
  var position2 = +document.querySelector('#inputofUser2').value
  var changeNumber = doiCho(arr,position1,position2)
  document.querySelector('#resultEx6').innerHTML = 'Mảng sau khi đổi: ' + changeNumber
}

getElement('#clickResults6').onclick = changPosition

// EX7: Sắp xếp phần tử tăng dần 
function arrangeNumber (){
    for(var i = 0; i < arr.length -1; i++){
        for(var j = i + 1; j < arr.length; j++){
            if(arr[i] > arr[j]){
                var tmp = arr[i]
                arr[i] = arr[j]
                arr[j] = tmp
            }
        }
    }
    document.querySelector('#resultEx7').innerHTML = arr
}

getElement('#clickResults7').onclick = arrangeNumber

// Ex8: Tìm số nguyên tố đầu tiên