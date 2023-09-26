document.addEventListener("DOMContentLoaded", function() {
    const valuesDiv = document.getElementById("values");
    const spinBtn = document.getElementById("spinBtn");
    const resultDiv = document.getElementById("result");
    let spinning = false;

    // Функция ease-out
    function easeOutCubic(t) {
        return (--t) * t * t + 1;
    }

    spinBtn.addEventListener("click", function() {
        // Блокируем кнопку после первого клика
        if (spinBtn.disabled) return;
        spinBtn.disabled = true;

        if (!spinning) {
            spinning = true;

            const values = [10, 20, 100, 200];
            let elements = [];

            for (let i = 0; i < 333; i++) {
                const randomValue = values[Math.floor(Math.random() * values.length)];
                elements.push(randomValue);
            }

            const fiftyIndex = Math.floor(Math.random() * 111);
            elements.splice(fiftyIndex, 0, 50);

            valuesDiv.innerHTML = elements.map(value => `<div class="value">${value}</div>`).join('');

            let startPosition = 0;
            let endPosition = -(fiftyIndex + 1) * 60 + 150;
            let duration = 5000;
            let startTime;

            function animate(time) {
                if (!startTime) startTime = time;
                let timeElapsed = time - startTime;
                let progress = Math.min(timeElapsed / duration, 1);
                progress = easeOutCubic(progress);

                let currentPosition = startPosition + (endPosition - startPosition) * progress;
                valuesDiv.style.left = `${currentPosition}px`;

                if (timeElapsed < duration) {
                    requestAnimationFrame(animate);
                } else {
                    spinning = false;
                    resultDiv.innerHTML = "Поздравляем, вы выиграли 50 фунтов!";
                    setTimeout(() => {
                        closeApp();
                    }, 2000);  // Закрыть через 2 секунды
                }
            }

            requestAnimationFrame(animate);
        }
    });
});

function closeApp() {
    console.log("Closing app...");
    fetch('/close_app', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ chat_id: chat_id })  // Теперь используем chat_id из переменной
    });
}
