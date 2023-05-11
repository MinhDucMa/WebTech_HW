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

		const row = document.querySelector(".row");

		for (const character of data) {
			// Create the elements
			const col = document.createElement("div");
			col.className = "col-12 col-md-6 col-lg-3";
			const card = document.createElement("div");
			card.className = "card text-center h-100";
			const img = document.createElement("img");
			img.className = "card-img-top h-100 p-2";
			img.src = character.imageUrl;
			const cardText = document.createElement("div");
			cardText.className = "card-text";
			const name = document.createElement("p");
			name.textContent = character.fullName;
			const title = document.createElement("p");
			title.textContent = character.title;

			// Build the card element
			cardText.appendChild(name);
			cardText.appendChild(title);
			card.appendChild(img);
			card.appendChild(cardText);
			col.appendChild(card);

			// Add the card to the container element
			row.appendChild(col);
		}
	})
	.catch((error) => console.log(error));
