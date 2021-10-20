const num = '123123';
const sum1 = Number(num[0]) + Number(num[1]) + Number(num[2]);
const sum2 = Number(num[3]) + Number(num[4]) + Number(num[5]);
if(sum1 === sum2) {
    console.log('Yes');
} else {
    console.log('No');
}
