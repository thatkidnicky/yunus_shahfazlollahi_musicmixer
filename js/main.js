
(() => {

  console.log("Javascript is linked up");

  let images = document.querySelectorAll('img');
  let dropZone = document.querySelector('#div2');
  let dropImg = document.querySelector('.div1');
  let audios = document.querySelectorAll('audio');

  function resetAudio() {
    audios.forEach(audio => {
      audio.currentTime = 0;
    });
  }

  function initDrag() {
    images.forEach(image => {
      image.addEventListener("dragstart", function(e) {
        console.log("dragging");

        e.dataTransfer.setData("text/plain", this.id);
      });
    });
  }

  images.forEach(image => {
    initDrag();
  });

  dropZone.addEventListener("dragover", function(e) {
    e.preventDefault();
    console.log("dragging");
  })

  dropZone.addEventListener("drop", function(e) {
    e.preventDefault();
    console.log("dropped");

    let icon = e.dataTransfer.getData("text/plain");

    e.target.appendChild(document.querySelector(`#${icon}`));

    resetAudio();

    audios.forEach(audio => {
      if (audio.dataset.musicref == document.querySelector(`#${icon}`).dataset.musicref) {
        audio.play();
      }
    });

  });

  dropZone.addEventListener('click', function(e) {
    console.log('click me');
    let reset = e.target;
    dropZone.removeChild(reset);

    audios.forEach(audio => {
      if (audio.dataset.musicref == reset.dataset.musicref) {
        audio.pause();
      }
    });

    dropImg.appendChild(reset);
  });


})();