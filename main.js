let n,
    e,
    c,
    k,
    i,
    j;

while ((isNaN(n)) || (n < 2) || (n > 10)) {
    n = +prompt("Введіть довжину масива (макс. 10 елементів)");
}
while ((isNaN(e)) || (e < 0) || (e > 9)) {
    e = +prompt("Введіть кутовий елемент квадрата верх праворуч (число від 0 до 9)");
}

while ((isNaN(c)) || (c < 1) || (c > n)) {
    c = +prompt(`Введіть номер рядка (від 1 до ${n}) для підрахунку суми елементів цього рядка`, Math.round(n / 2));
}
c--;

while ((isNaN(k)) || (k < 1) || (k > n)) {
    k = +prompt(`Введіть номер стовпця (від 1 до ${n}) для підрахунку суми елементів цього стовпця`, Math.round(n / 2));
}
k--;

// Створення матриці
const arr = [];
for (i = 0; i < n; i++) {
    arr[i] = [];
    for (j = 0; j < n; j++) {
        arr[i][j] = Math.round(Math.random() * 9);
    }
}
// Елемент користувача
arr[0][n - 1] = e;

// Прорисовка матриці + загальна сумма чисел в матриці
let sum = 0;
const arrMatrix = [];
for (i = 0; i < n; i++) {
    for (j = 0; j < n; j++) {
        sum += arr[i][j];
        arrMatrix.push(`<div class = "matrix__item">${arr[i][j]}</div>`);
    }
}
const divMatrix = `<div class="matrix"id="matrix"style="grid-template-columns: repeat(${n}, 1fr)">${arrMatrix.join("")}</div>`;
const divSum = `<div class="sum"id="sum">${sum}</div>`;
const blockResult = `<div class="result"id="result">${divMatrix + divSum}</div>`;

//1. Сума головної діагоналі
let sum1 = 0;
const arrMatrix1 = [];
for (i = 0; i < n; i++) {
    for (j = 0; j < n; j++) {
        (i == j) ?
            (sum1 += arr[i][j],
                arrMatrix1.push(`<div class = "matrix__item matrix__item--mod">${arr[i][i]}</div>`)) :
            arrMatrix1.push(`<div class = "matrix__item">${arr[i][j]}</div>`);
    }
}
const divMatrix1 = `<div class="matrix"id="matrix1"style="grid-template-columns: repeat(${n}, 1fr)">${arrMatrix1.join("")}</div>`;
const divSum1 = `<div class="sum"id="sum1">${sum1}</div>`;
const blockResult1 = `<div class="result"id="result1">${divMatrix1 + divSum1}</div>`;

//2. Сума побочної діагоналі
let sum2 = 0;
const arrMatrix2 = [];
for (i = 0; i < n; i++) {
    for (j = 0; j < n; j++) {
        (j == (n - i - 1)) ?
            (sum2 += arr[i][n - i - 1],
                arrMatrix2.push(`<div class = "matrix__item matrix__item--mod">${arr[i][j]}</div>`)) :
            arrMatrix2.push(`<div class = "matrix__item">${arr[i][j]}</div>`);
    }
}
const divMatrix2 = `<div class="matrix"id="matrix2"style="grid-template-columns: repeat(${n}, 1fr)">${arrMatrix2.join("")}</div>`;
const divSum2 = `<div class="sum"id="sum2">${sum2}</div>`;
const blockResult2 = `<div class="result"id="result2">${divMatrix2 + divSum2}</div>`;

//3. Сума половини матриці без головної діагоналі зверху зправа
let sum3 = 0;
const arrMatrix3 = [];
for (i = 0; i < n; i++) {
    for (j = 0; j < n; j++) {
        (i < j) ?
            (sum3 += arr[i][j],
                arrMatrix3.push(`<div class = "matrix__item matrix__item--mod">${arr[i][j]}</div>`)) :
            arrMatrix3.push(`<div class = "matrix__item">${arr[i][j]}</div>`);
    }
}
const divMatrix3 = `<div class="matrix"id="matrix3"style="grid-template-columns: repeat(${n}, 1fr)">${arrMatrix3.join("")}</div>`;
const divSum3 = `<div class="sum"id="sum3">${sum3}</div>`;
const blockResult3 = `<div class="result"id="result3">${divMatrix3 + divSum3}</div>`;

//4. Сума половини матриці з головною діагоналлю зверху зправа
let sum4 = 0;
const arrMatrix4 = [];
for (i = 0; i < n; i++) {
    for (j = 0; j < n; j++) {
        (i <= j) ?
            (sum4 += arr[i][j],
                arrMatrix4.push(`<div class = "matrix__item matrix__item--mod">${arr[i][j]}</div>`)) :
            arrMatrix4.push(`<div class = "matrix__item">${arr[i][j]}</div>`);
    }
}
const divMatrix4 = `<div class="matrix"id="matrix4"style="grid-template-columns: repeat(${n}, 1fr)">${arrMatrix4.join("")}</div>`;
const divSum4 = `<div class="sum"id="sum4">${sum4}</div>`;
const blockResult4 = `<div class="result"id="result4">${divMatrix4 + divSum4}</div>`;

//5. Сума половини матриці без головної діагоналі знизу зліва
let sum5 = 0;
const arrMatrix5 = [];
for (i = 0; i < n; i++) {
    for (j = 0; j < n; j++) {
        (i > j) ?
            (sum5 += arr[i][j],
                arrMatrix5.push(`<div class = "matrix__item matrix__item--mod">${arr[i][j]}</div>`)) :
            arrMatrix5.push(`<div class = "matrix__item">${arr[i][j]}</div>`);
    }
}
const divMatrix5 = `<div class="matrix"id="matrix5"style="grid-template-columns: repeat(${n}, 1fr)">${arrMatrix5.join("")}</div>`;
const divSum5 = `<div class="sum"id="sum5">${sum5}</div>`;
const blockResult5 = `<div class="result"id="result5">${divMatrix5 + divSum5}</div>`;

//6. Сума половини матриці з головною діагоналлю знизу зліва
let sum6 = 0;
const arrMatrix6 = [];
for (i = 0; i < n; i++) {
    for (j = 0; j < n; j++) {
        (i >= j) ?
            (sum6 += arr[i][j],
                arrMatrix6.push(`<div class = "matrix__item matrix__item--mod">${arr[i][j]}</div>`)) :
            arrMatrix6.push(`<div class = "matrix__item">${arr[i][j]}</div>`);
    }
}
const divMatrix6 = `<div class="matrix"id="matrix6"style="grid-template-columns: repeat(${n}, 1fr)">${arrMatrix6.join("")}</div>`;
const divSum6 = `<div class="sum"id="sum6">${sum6}</div>`;
const blockResult6 = `<div class="result"id="result6">${divMatrix6 + divSum6}</div>`;

//7. Сума половини матриці без побічної діагоналі зверху зліва
let sum7 = 0;
const arrMatrix7 = [];
for (i = 0; i < n; i++) {
    for (j = 0; j < n; j++) {
        (i + j < n - 1) ?
            (sum7 += arr[i][j],
                arrMatrix7.push(`<div class = "matrix__item matrix__item--mod">${arr[i][j]}</div>`)) :
            arrMatrix7.push(`<div class = "matrix__item">${arr[i][j]}</div>`);
    }
}
const divMatrix7 = `<div class="matrix"id="matrix7"style="grid-template-columns: repeat(${n}, 1fr)">${arrMatrix7.join("")}</div>`;
const divSum7 = `<div class="sum"id="sum7">${sum7}</div>`;
const blockResult7 = `<div class="result"id="result7">${divMatrix7 + divSum7}</div>`;

//8. Сума половини матриці з побочною діагоналлю зверху зліва
let sum8 = 0;
const arrMatrix8 = [];
for (i = 0; i < n; i++) {
    for (j = 0; j < n; j++) {
        (i + j <= n - 1) ?
            (sum8 += arr[i][j],
                arrMatrix8.push(`<div class = "matrix__item matrix__item--mod">${arr[i][j]}</div>`)) :
            arrMatrix8.push(`<div class = "matrix__item">${arr[i][j]}</div>`);
    }
}
const divMatrix8 = `<div class="matrix"id="matrix8"style="grid-template-columns: repeat(${n}, 1fr)">${arrMatrix8.join("")}</div>`;
const divSum8 = `<div class="sum"id="sum8">${sum8}</div>`;
const blockResult8 = `<div class="result"id="result8">${divMatrix8 + divSum8}</div>`;

//9. Сума половини матриці без побічної діагоналі внизу зправа

let sum9 = 0;
const arrMatrix9 = [];
for (i = 0; i < n; i++) {
    for (j = 0; j < n; j++) {
        (i + j > n - 1) ?
            (sum9 += arr[i][j],
                arrMatrix9.push(`<div class = "matrix__item matrix__item--mod">${arr[i][j]}</div>`)) :
            arrMatrix9.push(`<div class = "matrix__item">${arr[i][j]}</div>`);
    }
}
const divMatrix9 = `<div class="matrix"id="matrix9"style="grid-template-columns: repeat(${n}, 1fr)">${arrMatrix9.join("")}</div>`;
const divSum9 = `<div class="sum"id="sum9">${sum9}</div>`;
const blockResult9 = `<div class="result"id="result9">${divMatrix9 + divSum9}</div>`;

//10. Сума рядка c
let sum10 = 0;
const arrMatrix10 = [];
for (i = 0; i < n; i++) {
    for (j = 0; j < n; j++) {
        (i == c) ?
            (sum10 += arr[i][j],
                arrMatrix10.push(`<div class = "matrix__item matrix__item--mod">${arr[i][j]}</div>`)) :
            arrMatrix10.push(`<div class = "matrix__item">${arr[i][j]}</div>`);
    }
}
const divMatrix10 = `<div class="matrix"id="matrix10"style="grid-template-columns: repeat(${n}, 1fr)">${arrMatrix10.join("")}</div>`;
const divSum10 = `<div class="sum"id="sum10">${sum10}</div>`;
const blockResult10 = `<div class="result"id="result10">${divMatrix10 + divSum10}</div>`;

//11. Сума стовпця k
let sum11 = 0;
const arrMatrix11 = [];
for (i = 0; i < n; i++) {
    for (j = 0; j < n; j++) {
        (j == k) ?
            (sum11 += arr[i][j],
                arrMatrix11.push(`<div class = "matrix__item matrix__item--mod">${arr[i][j]}</div>`)) :
            arrMatrix11.push(`<div class = "matrix__item">${arr[i][j]}</div>`);
    }
}
const divMatrix11 = `<div class="matrix"id="matrix11"style="grid-template-columns: repeat(${n}, 1fr)">${arrMatrix11.join("")}</div>`;
const divSum11 = `<div class="sum"id="sum11">${sum11}</div>`;
const blockResult11 = `<div class="result"id="result11">${divMatrix11 + divSum11}</div>`;

let arrTask = [
    "1. Сума головної діагоналі",
    "2. Сума побочної діагоналі",
    "3. Сума половини матриці без головної діагоналі зверху зправа",
    "4. Сума половини матриці з головною діагоналлю зверху зправа",
    "5. Сума половини матриці без головної діагоналі знизу зліва",
    "6. Сума половини матриці з головною діагоналлю знизу зліва",
    "7. Сума половини матриці без побічної діагоналі зверху зліва",
    "8. Сума половини матриці з побочною діагоналлю зверху зліва",
    "9. Сума половини матриці без побічної діагоналі внизу зправа",
    `10. Сума ${(c + 1)}-ї строки`,
    `11. Сума ${(k + 1)}-го стовпця`
]

let a = 1;
for (i = 0; i < arrTask.length; i++) {
    arrTask[i] = `<div class="task__item" id="task${a}">${arrTask[i]}</div>`;
    a++;
}

let divTask = `<div class="task">${arrTask.join("")}</div>`;

document.write(`<div class="wrapper">${divTask + blockResult + blockResult1 + blockResult2 + blockResult3 + blockResult4 + blockResult5 + blockResult6 + blockResult7 + blockResult8 + blockResult9 + blockResult10 + blockResult11}</div>`);

let clickTask1 = document.getElementById("task1");
console.log(clickTask1);
let clickTask2 = document.getElementById("task2");
console.log(clickTask2);
let clickTask3 = document.getElementById("task3");
console.log(clickTask3);
let clickTask4 = document.getElementById("task4");
console.log(clickTask4);
let clickTask5 = document.getElementById("task5");
console.log(clickTask5);
let clickTask6 = document.getElementById("task6");
console.log(clickTask6);
let clickTask7 = document.getElementById("task7");
console.log(clickTask7);
let clickTask8 = document.getElementById("task8");
console.log(clickTask8);
let clickTask9 = document.getElementById("task9");
console.log(clickTask9);
let clickTask10 = document.getElementById("task10");
console.log(clickTask10);
let clickTask11 = document.getElementById("task11");
console.log(clickTask11);

let dispRes = document.getElementById("result")
console.log(dispRes);
let dispRes1 = document.getElementById("result1")
console.log(dispRes1);
let dispRes2 = document.getElementById("result2")
console.log(dispRes2);
let dispRes3 = document.getElementById("result3")
console.log(dispRes3);
let dispRes4 = document.getElementById("result4")
console.log(dispRes4);
let dispRes5 = document.getElementById("result5")
console.log(dispRes5);
let dispRes6 = document.getElementById("result6")
console.log(dispRes6);
let dispRes7 = document.getElementById("result7")
console.log(dispRes7);
let dispRes8 = document.getElementById("result8")
console.log(dispRes8);
let dispRes9 = document.getElementById("result9")
console.log(dispRes9);
let dispRes10 = document.getElementById("result10")
console.log(dispRes10);
let dispRes11 = document.getElementById("result11")
console.log(dispRes11);

dispRes.style.display = "flex";
dispRes1.style.display = "none";
dispRes2.style.display = "none";
dispRes3.style.display = "none";
dispRes4.style.display = "none";
dispRes5.style.display = "none";
dispRes6.style.display = "none";
dispRes7.style.display = "none";
dispRes8.style.display = "none";
dispRes9.style.display = "none";
dispRes10.style.display = "none";
dispRes11.style.display = "none";

clickTask1.addEventListener("click", function () {
    clickTask1.style.backgroundColor = "blue";
    clickTask2.style.backgroundColor = "yellow";
    clickTask3.style.backgroundColor = "yellow";
    clickTask4.style.backgroundColor = "yellow";
    clickTask5.style.backgroundColor = "yellow";
    clickTask6.style.backgroundColor = "yellow";
    clickTask7.style.backgroundColor = "yellow";
    clickTask8.style.backgroundColor = "yellow";
    clickTask9.style.backgroundColor = "yellow";
    clickTask10.style.backgroundColor = "yellow";
    clickTask11.style.backgroundColor = "yellow";
    clickTask1.style.color = "white";
    clickTask2.style.color = "black";
    clickTask3.style.color = "black";
    clickTask4.style.color = "black";
    clickTask5.style.color = "black";
    clickTask6.style.color = "black";
    clickTask7.style.color = "black";
    clickTask8.style.color = "black";
    clickTask9.style.color = "black";
    clickTask10.style.color = "black";
    clickTask11.style.color = "black";
    dispRes.style.display = "none";
    dispRes1.style.display = "flex";
    dispRes2.style.display = "none";
    dispRes3.style.display = "none";
    dispRes4.style.display = "none";
    dispRes5.style.display = "none";
    dispRes6.style.display = "none";
    dispRes7.style.display = "none";
    dispRes8.style.display = "none";
    dispRes9.style.display = "none";
    dispRes10.style.display = "none";
    dispRes11.style.display = "none";
})
clickTask2.addEventListener("click", function () {
    clickTask1.style.backgroundColor = "yellow";
    clickTask2.style.backgroundColor = "blue";
    clickTask3.style.backgroundColor = "yellow";
    clickTask4.style.backgroundColor = "yellow";
    clickTask5.style.backgroundColor = "yellow";
    clickTask6.style.backgroundColor = "yellow";
    clickTask7.style.backgroundColor = "yellow";
    clickTask8.style.backgroundColor = "yellow";
    clickTask9.style.backgroundColor = "yellow";
    clickTask10.style.backgroundColor = "yellow";
    clickTask11.style.backgroundColor = "yellow";
    clickTask1.style.color = "black";
    clickTask2.style.color = "white";
    clickTask3.style.color = "black";
    clickTask4.style.color = "black";
    clickTask5.style.color = "black";
    clickTask6.style.color = "black";
    clickTask7.style.color = "black";
    clickTask8.style.color = "black";
    clickTask9.style.color = "black";
    clickTask10.style.color = "black";
    clickTask11.style.color = "black";
    dispRes.style.display = "none";
    dispRes1.style.display = "none";
    dispRes2.style.display = "flex";
    dispRes3.style.display = "none";
    dispRes4.style.display = "none";
    dispRes5.style.display = "none";
    dispRes6.style.display = "none";
    dispRes7.style.display = "none";
    dispRes8.style.display = "none";
    dispRes9.style.display = "none";
    dispRes10.style.display = "none";
    dispRes11.style.display = "none";
})
clickTask3.addEventListener("click", function () {
    clickTask1.style.backgroundColor = "yellow";
    clickTask2.style.backgroundColor = "yellow";
    clickTask3.style.backgroundColor = "blue";
    clickTask4.style.backgroundColor = "yellow";
    clickTask5.style.backgroundColor = "yellow";
    clickTask6.style.backgroundColor = "yellow";
    clickTask7.style.backgroundColor = "yellow";
    clickTask8.style.backgroundColor = "yellow";
    clickTask9.style.backgroundColor = "yellow";
    clickTask10.style.backgroundColor = "yellow";
    clickTask11.style.backgroundColor = "yellow";
    clickTask1.style.color = "black";
    clickTask2.style.color = "black";
    clickTask3.style.color = "white";
    clickTask4.style.color = "black";
    clickTask5.style.color = "black";
    clickTask6.style.color = "black";
    clickTask7.style.color = "black";
    clickTask8.style.color = "black";
    clickTask9.style.color = "black";
    clickTask10.style.color = "black";
    clickTask11.style.color = "black";
    dispRes.style.display = "none";
    dispRes1.style.display = "none";
    dispRes2.style.display = "none";
    dispRes3.style.display = "flex";
    dispRes4.style.display = "none";
    dispRes5.style.display = "none";
    dispRes6.style.display = "none";
    dispRes7.style.display = "none";
    dispRes8.style.display = "none";
    dispRes9.style.display = "none";
    dispRes10.style.display = "none";
    dispRes11.style.display = "none";
})
clickTask4.addEventListener("click", function () {
    clickTask1.style.backgroundColor = "yellow";
    clickTask2.style.backgroundColor = "yellow";
    clickTask3.style.backgroundColor = "yellow";
    clickTask4.style.backgroundColor = "blue";
    clickTask5.style.backgroundColor = "yellow";
    clickTask6.style.backgroundColor = "yellow";
    clickTask7.style.backgroundColor = "yellow";
    clickTask8.style.backgroundColor = "yellow";
    clickTask9.style.backgroundColor = "yellow";
    clickTask10.style.backgroundColor = "yellow";
    clickTask11.style.backgroundColor = "yellow";
    clickTask1.style.color = "black";
    clickTask2.style.color = "black";
    clickTask3.style.color = "black";
    clickTask4.style.color = "white";
    clickTask5.style.color = "black";
    clickTask6.style.color = "black";
    clickTask7.style.color = "black";
    clickTask8.style.color = "black";
    clickTask9.style.color = "black";
    clickTask10.style.color = "black";
    clickTask11.style.color = "black";
    dispRes.style.display = "none";
    dispRes1.style.display = "none";
    dispRes2.style.display = "none";
    dispRes3.style.display = "none";
    dispRes4.style.display = "flex";
    dispRes5.style.display = "none";
    dispRes6.style.display = "none";
    dispRes7.style.display = "none";
    dispRes8.style.display = "none";
    dispRes9.style.display = "none";
    dispRes10.style.display = "none";
    dispRes11.style.display = "none";
})
clickTask5.addEventListener("click", function () {
    clickTask1.style.backgroundColor = "yellow";
    clickTask2.style.backgroundColor = "yellow";
    clickTask3.style.backgroundColor = "yellow";
    clickTask4.style.backgroundColor = "yellow";
    clickTask5.style.backgroundColor = "blue";
    clickTask6.style.backgroundColor = "yellow";
    clickTask7.style.backgroundColor = "yellow";
    clickTask8.style.backgroundColor = "yellow";
    clickTask9.style.backgroundColor = "yellow";
    clickTask10.style.backgroundColor = "yellow";
    clickTask11.style.backgroundColor = "yellow";
    clickTask1.style.color = "black";
    clickTask2.style.color = "black";
    clickTask3.style.color = "black";
    clickTask4.style.color = "black";
    clickTask5.style.color = "white";
    clickTask6.style.color = "black";
    clickTask7.style.color = "black";
    clickTask8.style.color = "black";
    clickTask9.style.color = "black";
    clickTask10.style.color = "black";
    clickTask11.style.color = "black";
    dispRes.style.display = "none";
    dispRes1.style.display = "none";
    dispRes2.style.display = "none";
    dispRes3.style.display = "none";
    dispRes4.style.display = "none";
    dispRes5.style.display = "flex";
    dispRes6.style.display = "none";
    dispRes7.style.display = "none";
    dispRes8.style.display = "none";
    dispRes9.style.display = "none";
    dispRes10.style.display = "none";
    dispRes11.style.display = "none";
})
clickTask6.addEventListener("click", function () {
    clickTask1.style.backgroundColor = "yellow";
    clickTask2.style.backgroundColor = "yellow";
    clickTask3.style.backgroundColor = "yellow";
    clickTask4.style.backgroundColor = "yellow";
    clickTask5.style.backgroundColor = "yellow";
    clickTask6.style.backgroundColor = "blue";
    clickTask7.style.backgroundColor = "yellow";
    clickTask8.style.backgroundColor = "yellow";
    clickTask9.style.backgroundColor = "yellow";
    clickTask10.style.backgroundColor = "yellow";
    clickTask11.style.backgroundColor = "yellow";
    clickTask1.style.color = "black";
    clickTask2.style.color = "black";
    clickTask3.style.color = "black";
    clickTask4.style.color = "black";
    clickTask5.style.color = "black";
    clickTask6.style.color = "white";
    clickTask7.style.color = "black";
    clickTask8.style.color = "black";
    clickTask9.style.color = "black";
    clickTask10.style.color = "black";
    clickTask11.style.color = "black";
    dispRes.style.display = "none";
    dispRes1.style.display = "none";
    dispRes2.style.display = "none";
    dispRes3.style.display = "none";
    dispRes4.style.display = "none";
    dispRes5.style.display = "none";
    dispRes6.style.display = "flex";
    dispRes7.style.display = "none";
    dispRes8.style.display = "none";
    dispRes9.style.display = "none";
    dispRes10.style.display = "none";
    dispRes11.style.display = "none";
})
clickTask7.addEventListener("click", function () {
    clickTask1.style.backgroundColor = "yellow";
    clickTask2.style.backgroundColor = "yellow";
    clickTask3.style.backgroundColor = "yellow";
    clickTask4.style.backgroundColor = "yellow";
    clickTask5.style.backgroundColor = "yellow";
    clickTask6.style.backgroundColor = "yellow";
    clickTask7.style.backgroundColor = "blue";
    clickTask8.style.backgroundColor = "yellow";
    clickTask9.style.backgroundColor = "yellow";
    clickTask10.style.backgroundColor = "yellow";
    clickTask11.style.backgroundColor = "yellow";
    clickTask1.style.color = "black";
    clickTask2.style.color = "black";
    clickTask3.style.color = "black";
    clickTask4.style.color = "black";
    clickTask5.style.color = "black";
    clickTask6.style.color = "black";
    clickTask7.style.color = "white";
    clickTask8.style.color = "black";
    clickTask9.style.color = "black";
    clickTask10.style.color = "black";
    clickTask11.style.color = "black";
    dispRes.style.display = "none";
    dispRes1.style.display = "none";
    dispRes2.style.display = "none";
    dispRes3.style.display = "none";
    dispRes4.style.display = "none";
    dispRes5.style.display = "none";
    dispRes6.style.display = "none";
    dispRes7.style.display = "flex";
    dispRes8.style.display = "none";
    dispRes9.style.display = "none";
    dispRes10.style.display = "none";
    dispRes11.style.display = "none";
})
clickTask8.addEventListener("click", function () {
    clickTask1.style.backgroundColor = "yellow";
    clickTask2.style.backgroundColor = "yellow";
    clickTask3.style.backgroundColor = "yellow";
    clickTask4.style.backgroundColor = "yellow";
    clickTask5.style.backgroundColor = "yellow";
    clickTask6.style.backgroundColor = "yellow";
    clickTask7.style.backgroundColor = "yellow";
    clickTask8.style.backgroundColor = "blue";
    clickTask9.style.backgroundColor = "yellow";
    clickTask10.style.backgroundColor = "yellow";
    clickTask11.style.backgroundColor = "yellow";
    clickTask1.style.color = "black";
    clickTask2.style.color = "black";
    clickTask3.style.color = "black";
    clickTask4.style.color = "black";
    clickTask5.style.color = "black";
    clickTask6.style.color = "black";
    clickTask7.style.color = "black";
    clickTask8.style.color = "white";
    clickTask9.style.color = "black";
    clickTask10.style.color = "black";
    clickTask11.style.color = "black";
    dispRes.style.display = "none";
    dispRes1.style.display = "none";
    dispRes2.style.display = "none";
    dispRes3.style.display = "none";
    dispRes4.style.display = "none";
    dispRes5.style.display = "none";
    dispRes6.style.display = "none";
    dispRes7.style.display = "none";
    dispRes8.style.display = "flex";
    dispRes9.style.display = "none";
    dispRes10.style.display = "none";
    dispRes11.style.display = "none";
})
clickTask9.addEventListener("click", function () {
    clickTask1.style.backgroundColor = "yellow";
    clickTask2.style.backgroundColor = "yellow";
    clickTask3.style.backgroundColor = "yellow";
    clickTask4.style.backgroundColor = "yellow";
    clickTask5.style.backgroundColor = "yellow";
    clickTask6.style.backgroundColor = "yellow";
    clickTask7.style.backgroundColor = "yellow";
    clickTask8.style.backgroundColor = "yellow";
    clickTask9.style.backgroundColor = "blue";
    clickTask10.style.backgroundColor = "yellow";
    clickTask11.style.backgroundColor = "yellow";
    clickTask1.style.color = "black";
    clickTask2.style.color = "black";
    clickTask3.style.color = "black";
    clickTask4.style.color = "black";
    clickTask5.style.color = "black";
    clickTask6.style.color = "black";
    clickTask7.style.color = "black";
    clickTask8.style.color = "black";
    clickTask9.style.color = "white";
    clickTask10.style.color = "black";
    clickTask11.style.color = "black";
    dispRes.style.display = "none";
    dispRes1.style.display = "none";
    dispRes2.style.display = "none";
    dispRes3.style.display = "none";
    dispRes4.style.display = "none";
    dispRes5.style.display = "none";
    dispRes6.style.display = "none";
    dispRes7.style.display = "none";
    dispRes8.style.display = "none";
    dispRes9.style.display = "flex";
    dispRes10.style.display = "none";
    dispRes11.style.display = "none";
})
clickTask10.addEventListener("click", function () {
    clickTask1.style.backgroundColor = "yellow";
    clickTask2.style.backgroundColor = "yellow";
    clickTask3.style.backgroundColor = "yellow";
    clickTask4.style.backgroundColor = "yellow";
    clickTask5.style.backgroundColor = "yellow";
    clickTask6.style.backgroundColor = "yellow";
    clickTask7.style.backgroundColor = "yellow";
    clickTask8.style.backgroundColor = "yellow";
    clickTask9.style.backgroundColor = "yellow";
    clickTask10.style.backgroundColor = "blue";
    clickTask11.style.backgroundColor = "yellow";
    clickTask1.style.color = "black";
    clickTask2.style.color = "black";
    clickTask3.style.color = "black";
    clickTask4.style.color = "black";
    clickTask5.style.color = "black";
    clickTask6.style.color = "black";
    clickTask7.style.color = "black";
    clickTask8.style.color = "black";
    clickTask9.style.color = "black";
    clickTask10.style.color = "white";
    clickTask11.style.color = "black";
    dispRes10.style.display = "flex";
    dispRes11.style.display = "none";
    dispRes.style.display = "none";
    dispRes1.style.display = "none";
    dispRes2.style.display = "none";
    dispRes3.style.display = "none";
    dispRes4.style.display = "none";
    dispRes5.style.display = "none";
    dispRes6.style.display = "none";
    dispRes7.style.display = "none";
    dispRes8.style.display = "none";
    dispRes9.style.display = "none";
    dispRes10.style.display = "flex";
    dispRes11.style.display = "none";
})
clickTask11.addEventListener("click", function () {
    clickTask1.style.backgroundColor = "yellow";
    clickTask2.style.backgroundColor = "yellow";
    clickTask3.style.backgroundColor = "yellow";
    clickTask4.style.backgroundColor = "yellow";
    clickTask5.style.backgroundColor = "yellow";
    clickTask6.style.backgroundColor = "yellow";
    clickTask7.style.backgroundColor = "yellow";
    clickTask8.style.backgroundColor = "yellow";
    clickTask9.style.backgroundColor = "yellow";
    clickTask10.style.backgroundColor = "yellow";
    clickTask11.style.backgroundColor = "blue";
    clickTask1.style.color = "black";
    clickTask2.style.color = "black";
    clickTask3.style.color = "black";
    clickTask4.style.color = "black";
    clickTask5.style.color = "black";
    clickTask6.style.color = "black";
    clickTask7.style.color = "black";
    clickTask8.style.color = "black";
    clickTask9.style.color = "black";
    clickTask10.style.color = "black";
    clickTask11.style.color = "white";
    dispRes.style.display = "none";
    dispRes1.style.display = "none";
    dispRes2.style.display = "none";
    dispRes3.style.display = "none";
    dispRes4.style.display = "none";
    dispRes5.style.display = "none";
    dispRes6.style.display = "none";
    dispRes7.style.display = "none";
    dispRes8.style.display = "none";
    dispRes9.style.display = "none";
    dispRes10.style.display = "none";
    dispRes11.style.display = "flex";
})