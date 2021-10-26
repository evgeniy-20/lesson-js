let arr = [10, 20, 30, 50, 235, 3000];
for(let i = 0; i < arr.length; i++) {
    const newArr = String(arr[i]);
	if(newArr[0] == 1 || newArr[0] == 2 || newArr[0] == 5) {
		console.log(arr[i]);
	}
}