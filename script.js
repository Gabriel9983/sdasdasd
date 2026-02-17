const message = `As you step into this retreat season, I hope the quiet talks to you in ways the daily noise never does. Let the stillness bring some real clarity, those reflections spark growth, and each moment draw you nearer to the peace your heart's been chasing.
Praying this time builds your spirit, deepens your faith, and hits you with the truth that you're never alone in what you're carrying. You're valued way more than you think, loved beyond what you can imagine.`;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}