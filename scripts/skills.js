const skills = [
  { name: "HTML:",       level: 70 },
  { name: "CSS:",        level: 60 },
  { name: "JavaScript:", level: 30 },
  { name: "Python:",     level: 80 },
  { name: "Java:",       level: 90 },
  { name: "AWS:",        level: 60 },
  { name: "Bash/Linux:",       level: 80 },
];

const container = document.getElementById("skills-text");

skills.forEach(skill => {
  const filled = Math.round(skill.level / 10);
  const empty = 10 - filled;
  const bar = "█".repeat(filled) + "░".repeat(empty);

  container.innerHTML += `
    <div class="skill-row">
      <span class="skill-name">${skill.name}</span>
      <span class="skill-bar">[${bar}]</span>
      <span class="skill-percent">${skill.level}%</span>
    </div>
  `;
});