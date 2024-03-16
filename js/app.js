const menus = document.querySelector('nav ul');
const header = document.querySelector('header');
const menuBtn = document.querySelector('.menu-btn');
const closeBtn = document.querySelector('.close-btn')

// Click hiển thị menu
menuBtn.addEventListener('click', () => {
    menus.classList.add("display");
});

// Click đóng menu
closeBtn.addEventListener('click', () => {
    menus.classList.remove("display");
});

// Thanh cuộn menu điều hướng tự động
window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 20) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
});

// Từ thấp đến cao khi click icons

const countersEl = document.querySelectorAll(".numbers");
countersEl.forEach(counters => {
    counters.textContent = 0;


    increamentCounters();

    function increamentCounters() {
        let currentNum = +counters.textContent;
        const dataCeil = counters.getAttribute("data-ceil");

        const increament = dataCeil / 130;

        currentNum = Math.ceil(currentNum + increament);

        if (currentNum<dataCeil) {
            counters.textContent = currentNum;
            setTimeout(increamentCounters, 70);
        } else {
            counters.textContent = dataCeil;
        }
    }
});