let arr = [2, 5, 9, 15, 1, 4,-6,-4,-5,-3,-2];
let sum = 0;
for (let i = 0; i <= arr.length; i++) {
	if(arr[i] > 0) {
		sum += arr[i]
	}
}
console.log(sum);