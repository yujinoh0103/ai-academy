function selectElements() {
    // ID로 요소 선택
    const mainDiv = document.getElementById('main');
    console.log('ID로 선택한 요소:', mainDiv);

    // 클래스로 요소 선택
    const highlightedElements = document.getElementsByClassName('highlight');
    console.log('클래스로 선택한 요소들:', highlightedElements);

    const boxes = document.getElementsByClassName('box');
    console.log('box 클래스 요소들:', boxes);

    // 태그 이름으로 요소 선택
    const paragraphs = document.getElementsByTagName('p');
    console.log('태그로 선택한 요소들:', paragraphs);

    // CSS 선택자로 요소 선택 (단일)
    const firstParagraph = document.querySelector('p');
    console.log('첫 번째 p 태그:', firstParagraph);

    // CSS 선택자로 요소 선택 (여러 개)
    const allParagraphs = document.querySelectorAll('p');
    console.log('모든 p 태그:', allParagraphs);

    // 결과를 화면에 표시
    const output = document.getElementById('output');
    output.innerHTML = `
        <p>선택된 요소 개수:</p>
        <ul>
            <li>하이라이트 요소: ${highlightedElements.length}개</li>
            <li>박스 요소: ${boxes.length}개</li>
            <li>문단 요소: ${paragraphs.length}개</li>
        </ul>
    `;
}
