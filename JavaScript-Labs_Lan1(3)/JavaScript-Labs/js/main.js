// js/main.js – tương tác cho trang chủ JavaScript Labs

document.addEventListener("DOMContentLoaded", function () {

    // 1. Menu trên điện thoại (DOM + sự kiện click, kiến thức Lab 09)
    var menuBtn = document.querySelector(".menu-btn");
    var nav = document.getElementById("site-nav");
    menuBtn.addEventListener("click", function () {
        var isOpen = nav.classList.toggle("is-open");
        menuBtn.setAttribute("aria-expanded", String(isOpen));
    });
    nav.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            nav.classList.remove("is-open");
            menuBtn.setAttribute("aria-expanded", "false");
        });
    });

    // 2. Tabs kiến thức theo từng Lab
    var tabs = document.querySelectorAll(".tab");
    tabs.forEach(function (tab) {
        tab.addEventListener("click", function () {
            tabs.forEach(function (t) {
                var active = t === tab;
                t.classList.toggle("is-active", active);
                t.setAttribute("aria-selected", String(active));
                t.tabIndex = active ? 0 : -1;
                document.getElementById(t.getAttribute("aria-controls")).hidden = !active;
            });
        });
    });

    // 3. Bộ đếm số liệu chạy từ 0 đến giá trị đích (setInterval)
    document.querySelectorAll(".stat-num").forEach(function (el) {
        var target = Number(el.dataset.target);
        var current = 0;
        var step = Math.max(1, Math.ceil(target / 30));
        var timer = setInterval(function () {
            current = Math.min(target, current + step);
            el.textContent = current;
            if (current === target) clearInterval(timer);
        }, 30);
    });

    // 4. Năm hiện tại ở chân trang (Date object, kiến thức Lab 08)
    document.getElementById("year").textContent = new Date().getFullYear();
});
