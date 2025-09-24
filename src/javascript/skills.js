let skills = [
  { img: "public/icon/css.svg", name: "css"},
  { img: "public/icon/git.svg", name: "git"},
  { img: "public/icon/githubs.svg", name: "github"},
  { img: "public/icon/js.svg", name: "JavaScript"},
  { img: "public/icon/termux.svg", name: "termux"},
];

let skill = document.querySelector('#all_skills');

skills.forEach(p => {
  let body = `
      <div id="skills">
        <div class="skill">
          <img src="${p.img}" alt="icon skills">
          <span>${p.name}</span>
        </div>
      </div>
  `;
  skill.insertAdjacentHTML("beforeend", body);
});