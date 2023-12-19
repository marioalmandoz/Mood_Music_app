// En el archivo buttons.js
let clickedButtons = []; // Array para almacenar los botones clicados/*
/*function handleButtonClick(button) {
  button.classList.toggle("clicked");

  if (button.classList.contains("clicked")) {
    clickedButtons.push(button.textContent);
  } else {
    const index = clickedButtons.indexOf(button.textContent);
    if (index !== -1) {
      clickedButtons.splice(index, 1);
    }
  }
}

// Ejemplo de cómo podrías usar la información
if (clickedButtons.includes("Happy")) {
  console.log("Happy button is clicked!");
  songTitle.textContent = "Prueba";
}

if (clickedButtons.includes("Relaxed")) {
  // Realizar acciones relacionadas con 'Sad'
  console.log("Sad button is clicked!");
}

if (clickedButtons.includes("Reflective")) {
  // Realizar acciones relacionadas con 'Sad'
  console.log("Sad button is clicked!");
}

if (clickedButtons.includes("Motivated")) {
  // Realizar acciones relacionadas con 'Sad'
  console.log("Sad button is clicked!");
}

if (clickedButtons.includes("In love")) {
  // Realizar acciones relacionadas con 'Sad'
  console.log("Sad button is clicked!");
}

if (clickedButtons.includes("Euphoric")) {
  // Realizar acciones relacionadas con 'Sad'
  console.log("Sad button is clicked!");
}*/

let selectedButton = null;

function handleButtonClick(button) {
  if (selectedButton) {
    // Si hay un botón seleccionado, quitar la clase "clicked"
    selectedButton.classList.remove("clicked");
  }

  // Toggle la clase "clicked" en el botón actual
  button.classList.toggle("clicked");

  if (button.classList.contains("clicked")) {
    // Si el botón actual está clicado, actualizar el botón seleccionado
    selectedButton = button;
  } else {
    // Si se desmarca el botón actual, establecer el botón seleccionado en nulo
    selectedButton = null;
  }

  // Ejemplo de cómo podrías usar la información
  if (selectedButton) {
    const songTitleElement = document.getElementById("song-title");
    const buttonText = selectedButton.textContent;

    // Comprueba si existe el elemento antes de intentar modificar su contenido
    if (songTitleElement) {
      // Modifica el contenido del elemento con el texto del botón seleccionado
      songTitleElement.textContent = buttonText;
    }

    console.log(`${buttonText} button is clicked!`);
  } else {
    console.log("No button is clicked.");
  }
  if (selectedButton.textContent == "Happy") {
    document.getElementById("confirmButton").parentNode.href =
      "suggestions.html?title=Happy";
  }
  if (selectedButton.textContent == "Relaxed") {
    document.getElementById("confirmButton").parentNode.href =
      "suggestions.html?title=Relaxed";
  }
  if (selectedButton.textContent == "Reflective") {
    document.getElementById("confirmButton").parentNode.href =
      "suggestions.html?title=Reflective";
  }
  if (selectedButton.textContent == "Motivated") {
    document.getElementById("confirmButton").parentNode.href =
      "suggestions.html?title=Motivated";
  }
  if (selectedButton.textContent == "In love") {
    document.getElementById("confirmButton").parentNode.href =
      "suggestions.html?title=In love";
  }
  if (selectedButton.textContent == "Euphoric") {
    document.getElementById("confirmButton").parentNode.href =
      "suggestions.html?title=Euphoric";
  }
}
const search = new URLSearchParams(document.location.search);
console.log(search.get("title"));
if (search.get("title") == "Happy") {
  document.getElementById("song-title1").textContent = "Happy";
  document.getElementById("artist-name1").textContent = "Pharrell Williams";

  document.getElementById("song-title2").textContent = "Don't Worry, Be Happy";
  document.getElementById("artist-name2").textContent = "Bobby McFerrin";

  document.getElementById("song-title3").textContent = "Uptown Funk";
  document.getElementById("artist-name3").textContent =
    "Mark Ronson ft. Bruno Mars";

  document.getElementById("song-title4").textContent = "Walking on Sunshine";
  document.getElementById("artist-name4").textContent = "Katrina and the Waves";

  document.getElementById("song-title5").textContent =
    "Can't Stop the Feeling!";
  document.getElementById("artist-name5").textContent = "Justin Timberlake";
} else if (search.get("title") == "Relaxed") {
  document.getElementById("song-title1").textContent = "Three Little Birds";
  document.getElementById("artist-name1").textContent = "Bob Marley";

  document.getElementById("song-title2").textContent = "What a Wonderful World";
  document.getElementById("artist-name2").textContent = "Louis Armstrong";

  document.getElementById("song-title3").textContent =
    "Somewhere Over the Rainbow";
  document.getElementById("artist-name3").textContent = "Israel Kamakawiwo'ole";

  document.getElementById("song-title4").textContent = "Clair de Lune";
  document.getElementById("artist-name4").textContent = "Claude Debussy";

  document.getElementById("song-title5").textContent = "Weightless";
  document.getElementById("artist-name5").textContent = "Marconi Union";
} else if (search.get("title") == "Reflective") {
  document.getElementById("song-title1").textContent = "Someone Like You";
  document.getElementById("artist-name1").textContent = "Adele";

  document.getElementById("song-title2").textContent = "Hallelujah";
  document.getElementById("artist-name2").textContent = "Jeff Buckley";

  document.getElementById("song-title3").textContent = "Yesterday";
  document.getElementById("artist-name3").textContent = "The Beatles";

  document.getElementById("song-title4").textContent = "Tears in Heaven";
  document.getElementById("artist-name4").textContent = "Eric Clapton";

  document.getElementById("song-title5").textContent = "Nothing Compares 2 U";
  document.getElementById("artist-name5").textContent = "Sinéad O'Connor";
} else if (search.get("title") == "Motivated") {
  document.getElementById("song-title1").textContent = "Eye of the Tiger";
  document.getElementById("artist-name1").textContent = "Survivor";

  document.getElementById("song-title2").textContent = "Stronger";
  document.getElementById("artist-name2").textContent = "Kanye West";

  document.getElementById("song-title3").textContent = "We Will Rock You";
  document.getElementById("artist-name3").textContent = "Queen";

  document.getElementById("song-title4").textContent = "Lose Yourself";
  document.getElementById("artist-name4").textContent = "Eminem";

  document.getElementById("song-title5").textContent = "Thunder";
  document.getElementById("artist-name5").textContent = "Imagine Dragons";
} else if (search.get("title") == "In love") {
  document.getElementById("song-title1").textContent = "Perfect";
  document.getElementById("artist-name1").textContent = "Ed Sheeran";

  document.getElementById("song-title2").textContent = "Unchained Melody";
  document.getElementById("artist-name2").textContent =
    "The Righteous Brothers";

  document.getElementById("song-title3").textContent = "Something";
  document.getElementById("artist-name3").textContent = "The Beatles";

  document.getElementById("song-title4").textContent = "I Will Always Love You";
  document.getElementById("artist-name4").textContent = "Whitney Houston";

  document.getElementById("song-title5").textContent = "Endless Love";
  document.getElementById("artist-name5").textContent =
    "Lionel Richie ft. Diana Ross";
} else if (search.get("title") == "Euphoric") {
  document.getElementById("song-title1").textContent = "Dancing Queen";
  document.getElementById("artist-name1").textContent = "ABBA";

  document.getElementById("song-title2").textContent = "I Gotta Feeling";
  document.getElementById("artist-name2").textContent = "The Black Eyed Peas";

  document.getElementById("song-title3").textContent =
    "Can't Stop the Feeling!";
  document.getElementById("artist-name3").textContent = "Justin Timberlake";

  document.getElementById("song-title4").textContent = "Happy Together";
  document.getElementById("artist-name4").textContent = "The Turtles";

  document.getElementById("song-title5").textContent = "Dare";
  document.getElementById("artist-name5").textContent = "Gorillaz";
}
