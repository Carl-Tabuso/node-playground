const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
        console.log(`Even: ${nums[i]}`);
    } else {
        console.log(`Odd: ${nums[i]}`);
    }
}