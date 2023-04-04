// câu 2: xây dựng hàm trả về của 1 phần tử cần tìm trong mảng


function check_arr(value, arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            count++;
            break;
        }
    }
    return (count > 0) ? true : false
}
let arr = [1, 2, 3, 4, 5];
console.log(check_arr(5, arr));