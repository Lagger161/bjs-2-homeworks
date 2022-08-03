// Задание 1
function getArrayParams(arr) {
  let max = -99;
  let min = 99;
  let sum = 0;
  let avg;

  // Ваш код
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]
    } 
    if (arr[i] < min) {
      min = arr[i]
    } 
    sum = sum + arr[i]
  }
  avg = Number((sum / arr.length).toFixed(2))


  return { min: min, max: max, avg: avg };
}



// Задание 2
function worker(arr) {
  let sum = 0;

  // Ваш код

  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }

  return sum;
}

function makeWork(arrOfArr, worker) {
  let max = 0;

  // Ваш код
  for (let i = 0; i < arrOfArr.length; i++) {
    if (worker(arrOfArr[i]) > max) {
      max = worker(arrOfArr[i])
    }
  }
  // for ...
  
  return max;
}



// Задание 3
function worker2(arr) {
  // Ваш код

  let max = -Infinity;
  let min = Infinity;
  let sum = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i]
  }
  if (arr[i] < min) {
    min = arr[i]
  }

}

return Math.abs(max - min);

}
