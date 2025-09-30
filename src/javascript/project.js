let projects = [

  { img: "public/img/imgproject/project_website.jpg", name: "shirabelle", paragraph: "A modern and contemporary online store with a light touch of elegance and an attractive design.", code: "https://shirabelle.myshopify.com/"}
];

let project = document.querySelector('.projects');

projects.forEach(p => {
  let body = `
      <div class="projec">
            <img src="${p.img}" alt="img project">
            <div class="information">
              <div>
              <h3>${p.name}</h3>
              <p>${p.paragraph}</p>
              </div>
              <a href="${p.code}">code</a>
            </div>
          </div>
  `;
  project.insertAdjacentHTML("beforeend", body);
});
