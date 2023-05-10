// url for the Thrones API
const url = "https://thronesapi.com/api/v2/Characters";

fetch(url)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);

    const section = document.querySelector("section");
    section.insertAdjacentHTML("beforeend", '<div class="row"></div>');

    data.forEach((character) => {
      const card = `<div class="col-12 col-md-6 col-lg-3"><div class="card  text-center h-100"><img class="card-img-top h-100 p-2" src="${character.imageUrl}" ><div class="card-text"><p>${character.fullName}</p><p>${character.title}</p></div></div></div></div>`;
      const row = document.querySelector(".row");
      row.insertAdjacentHTML("beforeend", card);
    });
  })
  .catch((error) => console.log(error));

  
