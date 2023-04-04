//câu 3 viết hàm đếm số ký tự nguyên âm cho trước , viết phương trình nhập vào 1 chuỗi bất kỳ,gọi hàm tìm số nguyên âm
let vowel = ["a", "e", "i", "o", "u"];
function countVowel(string) {
    let count = 0;
    for (let letter of str.toLowerCase()) {
        if (vowels.includes(letter)) {
            count++;
        }
    }
    return count
}
console.log(countVpwel('this is the numbers length'));