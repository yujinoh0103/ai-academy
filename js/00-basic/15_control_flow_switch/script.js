// switch 예제
let day = 3;

console.log("요일 번호: " + day);

switch (day) {
    case 1:
        console.log("월요일");
        break;
    case 2:
        console.log("화요일");
        break;
    case 3:
        console.log("수요일");
        break;
    case 4:
        console.log("목요일");
        break;
    case 5:
        console.log("금요일");
        break;
    default:
        console.log("주말입니다.");
}

// 다른 예제
let grade = "B";

console.log("\n등급: " + grade);

switch (grade) {
    case "A":
        console.log("우수한 성적입니다.");
        break;
    case "B":
        console.log("좋은 성적입니다.");
        break;
    case "C":
        console.log("보통 성적입니다.");
        break;
    default:
        console.log("조금 더 노력이 필요합니다.");
}
