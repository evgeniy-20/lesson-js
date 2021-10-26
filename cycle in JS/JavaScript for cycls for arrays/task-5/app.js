let sum = 0;
let sqrt = 0;
let arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
	sqrt = Math.pow(arr[i],2);
	sum += sqrt;
}
console.log(sum);