// 새로운 요소 생성하기
function createElement() {
    // div 요소 생성
    const newDiv = document.createElement('div');
    newDiv.className = 'new-element';
    
    // 텍스트 노드 생성
    const text = document.createTextNode('새로 생성된 요소입니다.');
    newDiv.appendChild(text);
    
    // 목록에 추가
    const list = document.getElementById('element-list');
    list.appendChild(newDiv);
    
    console.log('새로운 요소가 생성되었습니다:', newDiv);
}

// 요소 복제하기
function cloneElement() {
    // 마지막 요소 찾기
    const list = document.getElementById('element-list');
    if (list.children.length > 0) {
        const lastElement = list.lastElementChild;
        
        // 요소 복제
        const clone = lastElement.cloneNode(true);
        clone.textContent = '복제된 요소입니다.';
        
        // 복제한 요소 추가
        list.appendChild(clone);
        
        console.log('요소가 복제되었습니다:', clone);
    }
}

// 템플릿 사용하기
function useTemplate() {
    // 템플릿 가져오기
    const template = document.getElementById('element-template');
    
    // 템플릿 내용 복제
    const clone = template.content.cloneNode(true);
    
    // 복제한 내용 수정
    const title = clone.querySelector('h3');
    title.textContent = '템플릿에서 생성됨 #' + 
        (document.getElementById('template-container').children.length);
    
    // 문서에 추가
    document.getElementById('template-container').appendChild(clone);
    
    console.log('템플릿을 사용하여 새로운 요소가 생성되었습니다.');
}
