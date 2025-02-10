// 1. 기본 JSON 메서드
console.log("1. 기본 JSON 메서드:");

// 객체를 JSON 문자열로 변환
const person = {
    name: "홍길동",
    age: 30,
    isStudent: false,
    hobbies: ["독서", "여행"],
    address: {
        city: "서울",
        country: "대한민국"
    }
};

const jsonString = JSON.stringify(person);
console.log('JSON 문자열:', jsonString);

// JSON 문자열을 객체로 변환
const parsedPerson = JSON.parse(jsonString);
console.log('파싱된 객체:', parsedPerson);

// 2. JSON 파싱 및 에러 처리
let currentJson = null;

function parseJson() {
    const jsonInput = document.getElementById('jsonInput').value;
    const resultDiv = document.getElementById('parseResult');
    
    try {
        const parsed = JSON.parse(jsonInput);
        currentJson = parsed;
        
        resultDiv.innerHTML = `
            <span class="success">파싱 성공!</span>
            <pre>${JSON.stringify(parsed, null, 2)}</pre>
        `;
        
        // 데이터 분석
        const analysis = analyzeJson(parsed);
        resultDiv.innerHTML += `
            <br>데이터 분석:
            - 객체 깊이: ${analysis.depth}
            - 속성 수: ${analysis.properties}
            - 배열 수: ${analysis.arrays}
            - 중첩 객체 수: ${analysis.objects}
        `;
    } catch (e) {
        resultDiv.innerHTML = `<span class="error">파싱 에러: ${e.message}</span>`;
        currentJson = null;
    }
}

// 3. JSON 데이터 분석
function analyzeJson(obj, depth = 1) {
    let analysis = {
        depth: depth,
        properties: 0,
        arrays: 0,
        objects: 0
    };
    
    for (let key in obj) {
        analysis.properties++;
        
        if (Array.isArray(obj[key])) {
            analysis.arrays++;
            // 배열 내부 객체 분석
            obj[key].forEach(item => {
                if (typeof item === 'object' && item !== null) {
                    const subAnalysis = analyzeJson(item, depth + 1);
                    analysis = mergeAnalysis(analysis, subAnalysis);
                }
            });
        } else if (typeof obj[key] === 'object' && obj[key] !== null) {
            analysis.objects++;
            const subAnalysis = analyzeJson(obj[key], depth + 1);
            analysis = mergeAnalysis(analysis, subAnalysis);
        }
    }
    
    return analysis;
}

function mergeAnalysis(a1, a2) {
    return {
        depth: Math.max(a1.depth, a2.depth),
        properties: a1.properties + a2.properties,
        arrays: a1.arrays + a2.arrays,
        objects: a1.objects + a2.objects
    };
}

// 4. JSON 데이터 수정
function modifyJson() {
    if (!currentJson) {
        alert('먼저 JSON을 파싱해주세요.');
        return;
    }
    
    const path = document.getElementById('propertyPath').value;
    const value = document.getElementById('propertyValue').value;
    const resultDiv = document.getElementById('modifyResult');
    
    try {
        // 경로를 따라 값 수정
        const modified = setValueByPath(JSON.parse(JSON.stringify(currentJson)), path, value);
        
        resultDiv.innerHTML = `
            <span class="success">수정 성공!</span>
            <pre>${JSON.stringify(modified, null, 2)}</pre>
        `;
        
        currentJson = modified;
    } catch (e) {
        resultDiv.innerHTML = `<span class="error">수정 에러: ${e.message}</span>`;
    }
}

function setValueByPath(obj, path, value) {
    const parts = path.split('.');
    let current = obj;
    
    for (let i = 0; i < parts.length - 1; i++) {
        if (!(parts[i] in current)) {
            current[parts[i]] = {};
        }
        current = current[parts[i]];
    }
    
    // 값의 타입을 자동으로 변환
    const lastPart = parts[parts.length - 1];
    if (value === 'true') current[lastPart] = true;
    else if (value === 'false') current[lastPart] = false;
    else if (value === 'null') current[lastPart] = null;
    else if (!isNaN(value)) current[lastPart] = Number(value);
    else current[lastPart] = value;
    
    return obj;
}

// 5. JSON 데이터 검색
function searchJson() {
    if (!currentJson) {
        alert('먼저 JSON을 파싱해주세요.');
        return;
    }
    
    const key = document.getElementById('searchKey').value;
    const value = document.getElementById('searchValue').value;
    const resultDiv = document.getElementById('searchResult');
    
    const results = searchInJson(currentJson, key, value);
    
    if (results.length > 0) {
        resultDiv.innerHTML = `
            <span class="success">검색 결과 (${results.length}개 찾음):</span>
            <pre>${JSON.stringify(results, null, 2)}</pre>
        `;
    } else {
        resultDiv.innerHTML = '<span class="error">검색 결과가 없습니다.</span>';
    }
}

function searchInJson(obj, key, value, path = '', results = []) {
    if (Array.isArray(obj)) {
        obj.forEach((item, index) => {
            searchInJson(item, key, value, `${path}[${index}]`, results);
        });
    } else if (typeof obj === 'object' && obj !== null) {
        for (let k in obj) {
            const newPath = path ? `${path}.${k}` : k;
            
            if (k === key && (!value || obj[k].toString() === value)) {
                results.push({
                    path: newPath,
                    value: obj[k]
                });
            }
            
            if (typeof obj[k] === 'object' && obj[k] !== null) {
                searchInJson(obj[k], key, value, newPath, results);
            }
        }
    }
    
    return results;
}

// 6. 샘플 JSON 데이터 로드
function loadSampleJson() {
    const sampleData = {
        "company": {
            "name": "테크 기업",
            "founded": 2010,
            "active": true,
            "departments": [
                {
                    "name": "개발팀",
                    "employees": [
                        {
                            "id": 1,
                            "name": "김개발",
                            "position": "시니어 개발자",
                            "skills": ["JavaScript", "Python", "Java"]
                        },
                        {
                            "id": 2,
                            "name": "이코딩",
                            "position": "주니어 개발자",
                            "skills": ["HTML", "CSS", "JavaScript"]
                        }
                    ]
                },
                {
                    "name": "디자인팀",
                    "employees": [
                        {
                            "id": 3,
                            "name": "박디자인",
                            "position": "UI/UX 디자이너",
                            "skills": ["Figma", "Photoshop", "Illustrator"]
                        }
                    ]
                }
            ],
            "address": {
                "street": "테크노로 123",
                "city": "서울",
                "country": "대한민국"
            }
        }
    };
    
    document.getElementById('jsonInput').value = JSON.stringify(sampleData, null, 2);
}

// 7. 초기화
loadSampleJson();
