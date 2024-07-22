// Arrays
// Arrays are variables which can hold more than on value 

let marks_class_12 = [91, 82, 63, 74];
console.log(marks_class_12);

// can also store different types of values
let class_attendance_record = [96, 73, null, "Detained", false];
console.log(class_attendance_record);

// 1] Accessing the values
console.log(marks_class_12[0]);
console.log(marks_class_12[1]);
console.log(marks_class_12[2]);
console.log(marks_class_12[3]);

// 2] Getting the length of the array(size)
console.log("The length of marks_class_12 is", marks_class_12.length);
console.log("The length of class_attendance_record is", class_attendance_record.length);

// 3] Adding and Changing the values(Mutable)
marks_class_12[4] = 87; // Adding 
marks_class_12[0] = 97; // Changing
console.log(marks_class_12);

// 4] Arrays are Object in JS
console.log(typeof marks_class_12);

// Quick Quiz 
// Print the values of the elements of an array using for loop 
let arr = [97, 86, 56, 92, 23, 44, 67, 100];

// way 1
for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

console.log('\n');

// way 2
for(let val in arr){
    console.log(arr[val]);
}

console.log('\n');

// way 3
for(let el of arr){
    console.log(el);
}    