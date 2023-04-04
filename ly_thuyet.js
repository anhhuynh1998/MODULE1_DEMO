//  câu 1: giải phương trình bật nhất:
// function equation(a, b) {
//     if (a == 0 && b == 0) {
//         return 'Phương trình vô số nghiệm';
//     }
//     else if (a != 0 && b == 0) {
//         return 'Phương trình có nghiệm x = 0';
//     }
//     else if (a == 0 && b != 0) {
//         return "Phương trình vô nghiệm";
//     }
//     else {
//         return 'Phương trình có nghiệm x = ' + (-b / a);
//     }
// }
// equation()
// console.log(equation(5,8));
// câu 2: xây dựng hàm trả về của 1 phần tử cần tìm trong mảng


// function check_arr(value,arr){
//     let count = 0;
//     for (let i = 0; i < arr.length; i ++){
//         if (arr[i] === value)  {
//             count ++;
//             break
//         }
//     }
//     return (count >0) ? true : false
// }
// let arr = [1,2,3,4,5];
//console.log(check_arr(5, arr));
//câu 3 viết hàm đếm số ký tự nguyên âm cho trước , viết phương trình nhập vào 1 chuỗi bất kỳ,gọi hàm tìm số nguyên âm
// let vowel = ["a", "e", "i", "o", "u"];
// function countVowel(string){
//     let count = 0;
// for (let letter of str.toLowerCase()) {
//     if (vowels.includes(letter)) {
//         count++;
//     }
// }
// return count
// }
// console.log(countVpwel('this is the numbers length'));
// câu 4 : xây dựng lớp Animal
class animal {
    constructor(setName,setWeight){
        this.name = setName;
        this.weight = setWeight;
    }
}
let objAnimal1 = [
    new animal("Elepant"),
    new animal(45.6),
]





