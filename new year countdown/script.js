const snowFall = () => {
    const bg = document.querySelector(".bg");
    for (let i = 0; i < 300; i++) {
        const snow = document.createElement("span");
        snow.classList.add("snow");

        if (i % 4 === 0) {
            snow.classList.add("snowAnimation1");
        } else if (i % 4 === 1) {
            snow.classList.add("snowAnimation2");
        } else if (i % 4 === 2) {
            snow.classList.add("snowAnimation3");
        } else {
            snow.classList.add("snowAnimation4");
        }

     
        const aNumber = Math.random() * 100;
        const heightWidth = Math.random() * 10 + 5; 
        const timeDelay = Math.random() * 10; 
        const animDuration = Math.random() * 10 + 5; 
        const snowOpacity = Math.random() * 0.5 + 0.5; 

        snow.style.width = `${heightWidth}px`;
        snow.style.height = `${heightWidth}px`;
        snow.style.left = `${aNumber}%`;
        snow.style.top = `${Math.random() * -100}px`; 
        snow.style.animationDelay = `${timeDelay}s`;
        snow.style.animationDuration = `${animDuration}s`;
        snow.style.opacity = snowOpacity;
        snow.style.position = 'absolute'; 
        bg.appendChild(snow);
    }
};

snowFall();

const countdownToNewYear = () => {
    const newYearDate = new Date("Jan 1, 2025 00:00:00").getTime();

    const interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = newYearDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
n
        document.getElementById("days").innerText = days;
        document.getElementById("hours").innerText = hours;
        document.getElementById("minutes").innerText = minutes;
        document.getElementById("seconds").innerText = seconds;

        if (distance <= 0) {
            clearInterval(interval); 
            document.getElementById("message").style.display = "block";
            document.querySelector(".countdown").style.display = "none";
        }
    }, 1000);
};

// Call countdown function
countdownToNewYear();
