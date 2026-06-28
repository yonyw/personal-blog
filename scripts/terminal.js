const commands = {
  contact: `> Available commands:<br>> /email    — To get my email<br>> /github   — To get my github<br>> /linkedin — To get my linkedin<br>> /clear    — To clear the terminal`,
  "/email":    `> email: <span style="color:var(--primary)">yonywoube34@gmail.com</span>`,
  "/github":   `> github: <span style="color:var(--primary)">github.com/yonyw</span>`,
  "/linkedin": `> linkedin: <span style="color:var(--primary)">linkedin.com/in/yonyw</span>`,
  "/clear":    null,
};

const output = document.getElementById("terminal-output");
const input = document.getElementById("terminal-input");

function print(text, color = "var(--secondary)") {
  const line = document.createElement("div");
  line.classList.add("terminal-text");
  line.style.color = color;
  line.innerHTML = text;
  output.appendChild(line);
}

print("> CONTACT TERMINAL: Please type 'contact' to see available commands to receive contact information :)");

input.addEventListener("keydown", function (e) {
  if (e.key !== "Enter") return;

  const val = input.value.trim().toLowerCase();
  print(`<span style="color:var(--primary)">user@yony-os:~$ ${val}</span>`);

  if (val === "/clear" || val === "clear") {
    output.innerHTML = "";
  } else if (commands[val]) {
    print(commands[val]);
  } else {
    print(`> command not found: ${val}. Type 'contact' for commands.`);
  }

  input.value = "";
  output.scrollTop = output.scrollHeight;
});

input.focus();