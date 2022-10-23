export function mixNumbers(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    let box = document.querySelector('.box');
    let cells;
    if (box.childNodes.length === 9) {
        cells = document.querySelectorAll('.cell3');
    } else if (box.childNodes.length === 16) {
        cells = document.querySelectorAll('.cell4');
    } else if (box.childNodes.length === 25) {
        cells = document.querySelectorAll('.cell5');
    } else if (box.childNodes.length === 36) {
        cells = document.querySelectorAll('.cell6');
    } else if (box.childNodes.length === 49) {
        cells = document.querySelectorAll('.cell7');
    } else if (box.childNodes.length === 64) {
        cells = document.querySelectorAll('.cell8');
    }

    let zeroIndex = arr.indexOf(0);
    let count = 0;
    let arrToCheck = [];
    let zeroRowNumber;
    
    if (cells.length === 9) {
      for (let i = 0; i < arr.length; i++) {
        arrToCheck.push(arr[i]);
        count = count + arr.slice(i + 1).filter(el => el !== 0).filter(el => el < arr[i]).length;
      }
      if (count % 2 === 0) {
        console.log(arr, 'решаемая');
        return arr;
      }
      if (count % 2 !== 0) {
        console.log(arr, 'нерешаемая');
        return mixNumbers(arr);
      }
    }
    
    if (cells.length === 16) {
      if (zeroIndex < 4) zeroRowNumber = 1;
      if (zeroIndex >= 4 && zeroIndex < 8) zeroRowNumber = 2;
      if (zeroIndex >= 8 && zeroIndex < 12) zeroRowNumber = 3;
      if (zeroIndex >= 12) zeroRowNumber = 4;
      for (let i = 0; i < arr.length; i++) {
        arrToCheck.push(arr[i]);
        count = count + arr.slice(i + 1).filter(el => el !== 0).filter(el => el < arr[i]).length;
      }
      if ((count + zeroIndex) % 2 === 0) {
        console.log(arr, 'решаемая');
        return arr;
      }
      if ((count + zeroIndex) % 2 !== 0) {
        console.log(arr, 'нерешаемая');
        return mixNumbers(arr);
      }
    }

    if (cells.length === 25) {
      for (let i = 0; i < arr.length; i++) {
        arrToCheck.push(arr[i]);
        count = count + arr.slice(i + 1).filter(el => el !== 0).filter(el => el < arr[i]).length;
      }
      if (count % 2 === 0) {
        console.log(arr, 'решаемая');
        return arr;
      }
      if (count % 2 !== 0) {
        console.log(arr, 'нерешаемая');
        return mixNumbers(arr);
      }
    }

    if (cells.length === 36) {
      if (zeroIndex < 6) zeroRowNumber = 1;
      if (zeroIndex >= 6 && zeroIndex < 12) zeroRowNumber = 2;
      if (zeroIndex >= 12 && zeroIndex < 18) zeroRowNumber = 3;
      if (zeroIndex >= 18 && zeroIndex < 24) zeroRowNumber = 4;
      if (zeroIndex >= 24 && zeroIndex < 30) zeroRowNumber = 5;
      if (zeroIndex >= 36) zeroRowNumber = 6;
      for (let i = 0; i < arr.length; i++) {
        arrToCheck.push(arr[i]);
        count = count + arr.slice(i + 1).filter(el => el !== 0).filter(el => el < arr[i]).length;
      }
      if ((count + zeroIndex) % 2 === 0) {
        console.log(arr, 'решаемая');
        return arr;
      }
      if ((count + zeroIndex) % 2 !== 0) {
        console.log(arr, 'нерешаемая');
        return mixNumbers(arr);
      }
    }

    if (cells.length === 49) {
      for (let i = 0; i < arr.length; i++) {
        arrToCheck.push(arr[i]);
        count = count + arr.slice(i + 1).filter(el => el !== 0).filter(el => el < arr[i]).length;
      }
      if (count % 2 === 0) {
        console.log(arr, 'решаемая');
        return arr;
      }
      if (count % 2 !== 0) {
        console.log(arr, 'нерешаемая');
        return mixNumbers(arr);
      }
    }

    if (cells.length === 64) {
      if (zeroIndex < 8) zeroRowNumber = 1;
      if (zeroIndex >= 8 && zeroIndex < 16) zeroRowNumber = 2;
      if (zeroIndex >= 16 && zeroIndex < 24) zeroRowNumber = 3;
      if (zeroIndex >= 24 && zeroIndex < 32) zeroRowNumber = 4;
      if (zeroIndex >= 32 && zeroIndex < 40) zeroRowNumber = 5;
      if (zeroIndex >= 40 && zeroIndex < 48) zeroRowNumber = 6;
      if (zeroIndex >= 48 && zeroIndex < 56) zeroRowNumber = 7;
      if (zeroIndex >= 56) zeroRowNumber = 8;
      for (let i = 0; i < arr.length; i++) {
        arrToCheck.push(arr[i]);
        count = count + arr.slice(i + 1).filter(el => el !== 0).filter(el => el < arr[i]).length;
      }
      if ((count + zeroIndex) % 2 === 0) {
        console.log(arr, 'решаемая');
        return arr;
      }
      if ((count + zeroIndex) % 2 !== 0) {
        console.log(arr, 'нерешаемая');
        return mixNumbers(arr);
      }
    }
}