// ----------------------------------------------------
// 텍스트 분리 및 HTML 삽입 로직
// ----------------------------------------------------

const targetText = "STRETCH"; // 늘이기 효과를 적용할 영문 텍스트
const container = document.getElementById('text-container');

// 영문 텍스트를 개별 문자 단위로 분리하여 DOM에 삽입
targetText.split('').forEach(char => {
    const letterSpan = document.createElement('span');
    letterSpan.classList.add('letter-box');
    letterSpan.innerText = char;

    container.appendChild(letterSpan);
});


// ----------------------------------------------------
// 늘이기 토글 버튼 이벤트
// ----------------------------------------------------

document.getElementById('toggle-stretch').addEventListener('click', () => {
    // 컨테이너에 .is-stretched 클래스를 토글하여 CSS 애니메이션 발동
    container.classList.toggle('is-stretched');
});