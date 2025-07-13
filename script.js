// =======================
// script.js
// =======================

// Counter Animation
const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
  counter.innerText = '0';
  const updateCounter = () => {
    const target = +counter.getAttribute('data-target');
    const current = +counter.innerText;
    const increment = target / 100;
    if (current < target) {
      counter.innerText = `${Math.ceil(current + increment)}`;
      setTimeout(updateCounter, 20);
    } else {
      counter.innerText = target;
    }
  };
  updateCounter();
});

// Portfolio Filter
document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll("#projectgrid > div");

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      const filter = button.getAttribute("data-filter");

      //  Highlight clicked button
      filterButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      //  Filter logic
      projectCards.forEach(card => {
        if (filter === "all") {
          card.style.display = "block";
        } else {
          card.style.display = card.classList.contains(filter) ? "block" : "none";
        }
      });
    });
  });
});

//chatbot

const chatbotBody = document.getElementById("chatbot-body");
const chatbotMessages = document.getElementById("chatbot-messages");

function toggleChat() {
  if (chatbotBody.style.display === "flex") {
    chatbotBody.style.display = "none";
  } else {
    chatbotBody.style.display = "flex";
    chatbotMessages.innerHTML = "";
  }
}

function handleKeyPress(e) {
  if (e.key === "Enter") {
    sendMessage();
  }
}

function sendMessage() {
  const input = document.getElementById("userInput");
  const msg = input.value.trim();
  if (msg === "") return;

  appendMessage("user", msg);
  respondToUser(msg.toLowerCase());
  input.value = "";
}

function appendMessage(sender, text) {
  const div = document.createElement("div");
  div.textContent = text;
  div.style.margin = "5px 0";
  div.style.padding = "8px";
  div.style.borderRadius = "5px";
  div.style.maxWidth = "90%";
  div.style.fontSize = "14px";
  div.classList.add("chat-message");

  if (sender === "user") {
    div.style.backgroundColor = "#f0f0f0";
    div.style.alignSelf = "flex-end";
  } else {
    div.style.backgroundColor = "#e0f2ff";
    div.style.alignSelf = "flex-start";
    speak(text); // Only speak bot responses
  }

  div.onclick = () => {
    div.classList.toggle("selected-message");
  };

  chatbotMessages.appendChild(div);
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

function respondToUser(msg) {
  let response = "Hmm, I didn't understand that. Try asking something else okay.";
  if (msg.includes("greetings")|| msg.includes("hey")|| msg.includes("hello")){
    response = "Hi there! I'm lucie, your AI assistant. How can I help you?";
  } else if (msg.includes("thanks much")|| msg.includes("gracias")|| msg.includes("merci")){
    response = "it's my pleasure! If you have any more questions, feel free to ask.";
  } else if (msg.includes("your name") || msg.includes("who are you")) {
    response = "I am Forghab Lucie, a web developer and digital creative from Douala–Cameroon.";
  } else if (msg.includes("contact") || msg.includes("get in touch") || msg.includes("reach you")) {
    response = `You can contact me via:\n📱 WhatsApp: https://wa.me/678349381\n💼 LinkedIn: https://www.linkedin.com/in/ForghabAnge\n💻 GitHub: https://github.com/FORGHABANGE\n📧 Email: angelucie2005@gmail.com`;
  } else if (msg.includes("projects")) {
    response = "I've built a Portfolio Site, Calculator App with Currency Converter, Decor Website, Dashboard, and Mother Tongue App!";
  } else if (msg.includes("industry") || msg.includes("where you work")) {
    response = "I currently work at TTSET Global LTD – we deliver the best in technology services!";
  } else if (msg.includes("what is this website")) {
    response = "It's all about showcasing my skills, passion, abilities, and strength as a software engineer — and to attract employers, clients, and collaborators!";
  }
  setTimeout(() => appendMessage("bot", response), 400);
}

function deleteSelectedMessages() {
  const selected = chatbotMessages.querySelectorAll(".selected-message");
  selected.forEach(el => el.remove());
}

function speak(text) {
  if ('speechSynthesis' in window) {
    const msg = new SpeechSynthesisUtterance(text);
    msg.lang = 'en-US';
    window.speechSynthesis.speak(msg);
  }
}
