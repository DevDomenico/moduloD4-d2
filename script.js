function search() {
  const prendiInput = document.querySelector("#searchField").value;
  console.log(prendiInput);
  document.querySelector("#searchField").value = "";
  fetchMusic(prendiInput, prendiInput);
}

function fetchMusic(query, id) {
  const sezione = document.querySelector(`#${id}`);
  const riga = document.querySelector(`#${id}Section`);
  console.log(riga);

  fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + query)
      .then((raw) => {
          return raw.json();
      })
      .then((res) => {
          let musica = res.data;
          sezione.classList.remove("d-none");
          riga.innerHTML = "";
console.log(res);
          for (let i = 0; i < musica.slice(0, 4).length; i++) {
              const elemento = musica[i];
              riga.innerHTML += `<div class='col col-3'> <img class='w-100' src='${elemento.album.cover_xl}'/> </div>`;
          }
      })
      .catch((err) => console.log(err));
}

window.onload = () => {
  fetchMusic("eminem", "eminem");
  fetchMusic("queen", "queen");
  fetchMusic("metallica", "metallica");
}

const prendiInput = document.querySelector("#searchField");
