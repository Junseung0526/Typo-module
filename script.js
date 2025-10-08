const textInput = document.getElementById('text-input');
const textOutput = document.getElementById('text-output');
const STRETCH_DURATION = 0.6; // 늘어나고 줄어드는 총 시간
const STRETCH_DELAY = 0.05; // 문자별 애니메이션 지연 시간 (꿀렁꿀렁 효과 핵심)
const STRETCH_SCALE = 2.5;  // 늘어나는 최대 크기 (Y축)
const STRETCH_MARGIN = 0.15; // 늘어날 때 문자 사이 벌어지는 간격 (em 단위)

/**
 * 입력된 텍스트를 개별 문자 요소로 분리하여 출력 컨테이너에 렌더링하고,
 * 새 문자가 추가될 때 애니메이션을 적용합니다.
 * @param {string} text - 렌더링할 텍스트
 */
const renderText = (text) => {
    // 1. 기존 애니메이션 중지 및 DOM 정리
    gsap.killTweensOf(".letter-box");
    textOutput.innerHTML = '';

    const letters = text.toUpperCase().split(''); // 입력 텍스트를 대문자로 분리

    letters.forEach((char, index) => {
        const letterSpan = document.createElement('span');
        letterSpan.classList.add('letter-box');

        if (char === ' ') {
            // 공백 처리 (단순히 간격만 추가)
            letterSpan.innerHTML = '&nbsp;';
            letterSpan.style.marginRight = '0.5em';
        } else {
            // 일반 문자
            letterSpan.innerText = char;

            // 2. GSAP를 사용한 역동적인 애니메이션 적용
            // 초기 상태는 늘어난 상태로 설정합니다.
            gsap.set(letterSpan, {
                scaleY: STRETCH_SCALE,
                marginBottom: STRETCH_MARGIN + 'em'
            });

            // 3. '꿀렁꿀렁' 줄어드는 애니메이션
            // fromTo 대신 to를 사용해 초기 상태에서 최종 상태(원래 크기)로 돌아오도록 설정
            gsap.to(letterSpan, {
                scaleY: 1, // 원래 크기로 복귀
                marginBottom: 0, // 원래 간격으로 복귀
                duration: STRETCH_DURATION,
                ease: "elastic.out(1, 0.5)", // 탄성(Elastic) 이징 적용 (꿀렁꿀렁 효과의 핵심!)
                delay: index * STRETCH_DELAY // 인덱스별 지연 시간을 두어 순차적 효과 발생
            });
        }
        textOutput.appendChild(letterSpan);
    });
};


// ----------------------------------------------------
// 실시간 입력 이벤트 리스너
// ----------------------------------------------------

// 페이지 로드 시 초기 텍스트 설정 및 애니메이션 실행
const initialText = "MOTION EFFECT";
textInput.value = initialText;
renderText(initialText);


// 'input' 이벤트: 텍스트가 바뀔 때마다 즉시 실행
textInput.addEventListener('input', (event) => {
    const newText = event.target.value;
    renderText(newText);
});