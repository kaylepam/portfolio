document.addEventListener("DOMContentLoaded", function() {
    const phrases = ["많은 지식", "높은 코딩점수", "다양한 스택", "훌륭한 학벌", "빠른 성장력"];
    let index = 0;
    const slotText = document.getElementById("slotText");

    // gray-box 애니메이션이 끝난 후 슬롯 머신 효과 시작
    setTimeout(() => {
        // 초기 슬롯 머신 애니메이션
        const initialSlot = setInterval(() => {
            slotText.textContent = phrases[index % phrases.length];
            index++;
        }, 100);

        // 3초 후에 슬롯 머신 애니메이션 멈추기
        setTimeout(() => {
            clearInterval(initialSlot);

            // '빠른 성장력'으로 천천히 변경
            let slowChange = setInterval(() => {
                if (slotText.textContent === "빠른 성장력") {
                    clearInterval(slowChange);
                    return;
                }
                slotText.textContent = phrases[index % phrases.length];
                index++;
            }, 300);
        }, 3000);
    }, 4500); // gray-box 애니메이션 대기 시간
});
