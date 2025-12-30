
const text = "həyatım!<br>Bu gün bizim günümüzdür ❤️";
const titleEl = document.getElementById("title");
let i = 0;

function typeWriter() {
  if (i < text.length) {
    // بررسی <br>
    if (text.substring(i, i + 4) === "<br>") {
      titleEl.innerHTML += "<br>";
      i += 4; // پرش بعد از <br>
    } else {
      titleEl.innerHTML += text[i];
      i++;
    }
    setTimeout(typeWriter, 80);
  }
}

typeWriter();

// ⏳ تایمر روزها
const start = new Date("2025-07-07"); // تاریخ آشنایی

function updateCounter() {
  const diff = Date.now() - start;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  document.getElementById("counter").innerText =
    `${days} gün keçdi, amma bu gün də səni həmişə olduğu kimi sevirəm.❤️`;
}

updateCounter();
setInterval(updateCounter, 1000);

// 💖 تولید قلب‌های شناور
const heartsContainer = document.querySelector(".hearts");

for (let i = 0; i < 65; i++) {
  const span = document.createElement("span");
  span.className = "heart";
  span.innerText = "❤️";

  // موقعیت و سرعت تصادفی
  span.style.left = Math.random() * 100 + "%";
  span.style.animationDuration = 6 + Math.random() * 6 + "s";
  span.style.fontSize = 18 + Math.random() * 20 + "px";

  heartsContainer.appendChild(span);
}

// 🎁 مودال سورپرایز
const modal = document.getElementById("modal");
const reveal = document.getElementById("reveal");
const closeBtn = document.getElementById("close");

reveal.onclick = () => (modal.style.display = "flex");
closeBtn.onclick = () => (modal.style.display = "none");
modal.onclick = e => {
  if (e.target === modal) modal.style.display = "none";
};

