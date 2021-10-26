let arr = [2, 5, 9, 15, 1, 4];
let sum = 0;
let result = 0;
for (let i = 0; i < arr.length; i++) {
	sum += arr[i];
	result = sum / arr.length;
}
console.log(result);