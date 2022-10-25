let student = [
  {
    name: 'Daniel',
    email: 'daniel@gmail.com',
    marks: [80, 60, 50, 70, 95],
  },
  {
    name: 'Mark',
    email: 'mark@gmail.com',
    marks: [99, 40, 84, 72, 60],
  },
  {
    name: 'Stacy',
    email: 'stacy@gmail.com',
    marks: [8, 30, 11, 0, 20],
  },
  {
    name: 'Geri',
    email: 'geri@gmail.com',
    marks: [100, 99, 95, 85, 99],
  },
];
function studentWithHighestMarks(arr) {
  const studentTotalMarks = arr.map((student) =>
    student.marks.reduce((crrSum, nextScore) => crrSum + nextScore, 0)
  );

  return arr[studentTotalMarks.indexOf(Math.max(...studentTotalMarks))].name;
}
console.log(studentWithHighestMarks(student));

let array1 = [4, 5, 1, 0];
let array2 = [2, 1, 7, 6, 4, 5, 10, 9];
function missingNumber(array, n) {
  let missingNumArr = [];
  if (n === 0) {
    if (!array.includes(n)) {
      missingNumArr.push(n);
    }
    return missingNumArr;
  }
  missingNumArr = missingNumber(array, n - 1);
  if (!array.includes(n)) {
    missingNumArr.push(n);
  }
  return missingNumArr;
}
console.log(missingNumber(array1, Math.max(...array1))); // 2,3
console.log(missingNumber(array2, Math.max(...array2))); // 0,3,8
