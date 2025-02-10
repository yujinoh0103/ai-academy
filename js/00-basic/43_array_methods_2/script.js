// 샘플 데이터
const users = [
    { id: 1, name: "김철수", age: 25, active: true },
    { id: 2, name: "이영희", age: 30, active: false },
    { id: 3, name: "박민수", age: 28, active: true },
    { id: 4, name: "정지원", age: 22, active: true },
    { id: 5, name: "홍길동", age: 35, active: false }
];

// 1. find() 메서드
console.log("1. find() 메서드 예제:");

// ID로 사용자 찾기
const user = users.find(user => user.id === 3);
console.log("ID가 3인 사용자:", user);

// 조건에 맞는 첫 번째 사용자 찾기
const activeUser = users.find(user => user.active);
console.log("첫 번째 활성 사용자:", activeUser);

// 2. findIndex() 메서드
console.log("\n2. findIndex() 메서드 예제:");

// 사용자의 인덱스 찾기
const userIndex = users.findIndex(user => user.name === "이영희");
console.log("이영희의 인덱스:", userIndex);

// 조건에 맞는 사용자의 인덱스 찾기
const inactiveIndex = users.findIndex(user => !user.active);
console.log("첫 번째 비활성 사용자 인덱스:", inactiveIndex);

// 3. some() 메서드
console.log("\n3. some() 메서드 예제:");

// 30세 이상인 사용자가 있는지 확인
const hasOlderUsers = users.some(user => user.age >= 30);
console.log("30세 이상 사용자 존재:", hasOlderUsers);

// 비활성 사용자가 있는지 확인
const hasInactiveUsers = users.some(user => !user.active);
console.log("비활성 사용자 존재:", hasInactiveUsers);

// 4. every() 메서드
console.log("\n4. every() 메서드 예제:");

// 모든 사용자가 성인인지 확인
const allAdults = users.every(user => user.age >= 20);
console.log("모든 사용자가 성인:", allAdults);

// 모든 사용자가 활성 상태인지 확인
const allActive = users.every(user => user.active);
console.log("모든 사용자가 활성 상태:", allActive);

// 5. 실제 활용 예제
console.log("\n5. 실제 활용 예제:");

// 사용자 권한 시스템
const userPermissions = [
    { userId: 1, permissions: ["read", "write"] },
    { userId: 2, permissions: ["read"] },
    { userId: 3, permissions: ["read", "write", "admin"] }
];

function checkUserPermission(userId, permission) {
    const userPerm = userPermissions.find(p => p.userId === userId);
    return userPerm ? userPerm.permissions.includes(permission) : false;
}

console.log("사용자 1의 쓰기 권한:", checkUserPermission(1, "write"));
console.log("사용자 2의 관리자 권한:", checkUserPermission(2, "admin"));

// 팀 프로젝트 상태 확인
const teamProjects = [
    { id: 1, name: "웹사이트 개발", completed: true },
    { id: 2, name: "모바일 앱 개발", completed: false },
    { id: 3, name: "데이터베이스 설계", completed: true }
];

const allProjectsCompleted = teamProjects.every(project => project.completed);
const someProjectsCompleted = teamProjects.some(project => project.completed);
const nextProject = teamProjects.find(project => !project.completed);

console.log("모든 프로젝트 완료:", allProjectsCompleted);
console.log("일부 프로젝트 완료:", someProjectsCompleted);
console.log("다음 진행할 프로젝트:", nextProject?.name);
