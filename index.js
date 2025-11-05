console.log("✅ Birthday Reminder JS Loaded");

const modal = document.getElementById("popupForm");
const closeBtn = document.querySelector(".close");
const addBtn = document.getElementById("addBtn");
const form = document.getElementById("birthdayForm");
const resultBox = document.getElementById("resultBox");
const sky = document.getElementById("sky");


addBtn.addEventListener("click", () => {
  modal.style.display = "block";
});


closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});


window.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});


form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const day = parseInt(document.getElementById("day").value);
  const month = parseInt(document.getElementById("month").value);

  
  const res = await fetch("/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, day, month })
  });

  
  const text = await res.text();
  resultBox.innerHTML = `✅ ${text}`;
  modal.style.display = "none";
  form.reset();
});


document.getElementById("viewBtn").addEventListener("click", async () => {
  const res = await fetch("/getAll");
  const data = await res.json();
  if (data.length === 0) {
    resultBox.innerHTML = "😢 No birthdays found!";
  } else {
    resultBox.innerHTML = "<h3>🎉 All Birthdays 🎉</h3>" + data.map(d => `${d.name} - ${d.day}/${d.month}`).join("<br>");
  }
});


document.getElementById("checkBtn").addEventListener("click", async () => {
  const res = await fetch("/today");
  const data = await res.json();

  sky.innerHTML = "";

  if (data.length > 0) {
    resultBox.innerHTML = `🎂 <b>Today's Birthdays:</b> ${data.map(d => d.name).join(", ")} 🎉`;

    
    for (let i = 0; i < 80; i++) {
      const confetti = document.createElement("div");
      confetti.className = "confetti";
      confetti.style.left = Math.random() * 100 + "%";
      confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`;
      confetti.style.animationDelay = Math.random() * 2 + "s";
      sky.appendChild(confetti);
      setTimeout(() => confetti.remove(), 4000);
    }

    
    for (let i = 0; i < 10; i++) {
      const balloon = document.createElement("div");
      balloon.className = "balloon";
      balloon.style.left = Math.random() * 90 + "%";
      balloon.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`;
      sky.appendChild(balloon);
      setTimeout(() => balloon.remove(), 5000);
    }

    
    document.body.classList.add("celebrate");
    setTimeout(() => {
      document.body.classList.remove("celebrate");
    }, 3000);

  } else {
    resultBox.innerHTML = "😢 No birthdays today!";
  }
});
