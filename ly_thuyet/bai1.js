//  câu 1: giải phương trình bật nhất:
function equation(a, b) {
    if (a == 0 && b == 0) {
        return 'Phương trình vô số nghiệm';
    }
    else if (a != 0 && b == 0) {
        return 'Phương trình có nghiệm x = 0';
    }
    else if (a == 0 && b != 0) {
        return "Phương trình vô nghiệm";
    }
    else {
        return 'Phương trình có nghiệm x = ' + (-b / a);
    }
}
equation()
console.log(equation(5, 8));