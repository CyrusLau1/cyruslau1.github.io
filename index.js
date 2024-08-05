let radios = document.querySelectorAll("input[type='radio']");

function changeImg() {
  document.getElementById(this.name).src = this.value;

  const color = localStorage.getItem('alpacaColor');
  if (color === 'brown') {
    changeBrown();
  }
  else {
    changeWhite();
  }
}

function random() {
  let categories = ["backgrounds", "ears", "eyes", "hair", "mouth", "neck", "leg", "accessories"];
  for (let x of categories) {
    let list = document.querySelectorAll("input[type='radio'][name='" + x + "']");
    console.log(list);
    let randnum = Math.floor(Math.random() * list.length);
    list[randnum].checked = true;
    list[randnum].click();
  }

  const color = localStorage.getItem('alpacaColor');
  if (color === 'brown') {
    changeBrown();
  }
  else {
    changeWhite();
  }
}

for (let x of radios) {
  x.addEventListener("change", changeImg);
  x.addEventListener("click", changeImg);
}

function download() {
  let node = document.getElementById('image');
  new Promise((resolve, reject) => {
    node.style.borderRadius = "0px";
  }).then(html2canvas(node, { scale: 2 }).then(function (canvas) {
    document.body.appendChild(canvas);
    let a = document.createElement("a");
    a.href = canvas.toDataURL();
    a.download = "alpaca";
    a.id = "download-link";
    document.body.appendChild(a);
    a.click();
    node.style.borderRadius = "16px";
  }));
}

function changeBrown() {
  // Select all img elements
  const images = document.querySelectorAll('img');

  // Loop through all images and change the source if it contains 'images/white'
  images.forEach(img => {
    if (img.src.includes('images/white')) {
      img.src = img.src.replace('images/white', 'images/brown');
    }
  });

  localStorage.setItem('alpacaColor', 'brown');
}

function changeWhite() {
  // Select all img elements
  const images = document.querySelectorAll('img');

  // Loop through all images and change the source if it contains 'images/white'
  images.forEach(img => {
    if (img.src.includes('images/brown')) {
      img.src = img.src.replace('images/brown', 'images/white');
    }
  });

  localStorage.setItem('alpacaColor', 'white');
}


random();

document.addEventListener("DOMContentLoaded", function () {
  animation();
});

function animation() {
  // Wrap every letter in a span
  var textWrapper = document.querySelector('.ml10 .letters');
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

  anime.timeline({ loop: false })
    .add({
      targets: '.ml10 .letter',
      rotateY: [-90, 0],
      duration: 5000,
      delay: (el, i) => 45 * i
    });
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("info");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function random_c(category) {
  if (category === backgrounds) {
    let categories = ["backgrounds"];
    for (let x of categories) {
      let list = document.querySelectorAll("input[type='radio'][name='" + x + "']");
      console.log(list);
      let randnum = Math.floor(Math.random() * list.length);
      list[randnum].checked = true;
      list[randnum].click();
    }
  }
  else if (category === neck) {
    let categories = ["neck"];
    for (let x of categories) {
      let list = document.querySelectorAll("input[type='radio'][name='" + x + "']");
      console.log(list);
      let randnum = Math.floor(Math.random() * list.length);
      list[randnum].checked = true;
      list[randnum].click();
    }
  }
  else if (category === mouth) {
    let categories = ["mouth"];
    for (let x of categories) {
      let list = document.querySelectorAll("input[type='radio'][name='" + x + "']");
      console.log(list);
      let randnum = Math.floor(Math.random() * list.length);
      list[randnum].checked = true;
      list[randnum].click();
    }
  }
  else if (category === ears) {
    let categories = ["ears"];
    for (let x of categories) {
      let list = document.querySelectorAll("input[type='radio'][name='" + x + "']");
      console.log(list);
      let randnum = Math.floor(Math.random() * list.length);
      list[randnum].checked = true;
      list[randnum].click();
    }
  }
  else if (category === hair) {
    let categories = ["hair"];
    for (let x of categories) {
        let list = document.querySelectorAll("input[type='radio'][name='" + x + "']");
        console.log(list);
        let randnum = Math.floor(Math.random() * list.length);
        list[randnum].checked = true;
        list[randnum].click();
    }
    }
    else if (category === eyes) {
      let categories = ["eyes"];
      for (let x of categories) {
          let list = document.querySelectorAll("input[type='radio'][name='" + x + "']");
          console.log(list);
          let randnum = Math.floor(Math.random() * list.length);
          list[randnum].checked = true;
          list[randnum].click();
      }
      }
      else if (category === leg) {
        let categories = ["leg"];
        for (let x of categories) {
            let list = document.querySelectorAll("input[type='radio'][name='" + x + "']");
            console.log(list);
            let randnum = Math.floor(Math.random() * list.length);
            list[randnum].checked = true;
            list[randnum].click();
        }
        }
        else if (category === accessories) {
          let categories = ["accessories"];
          for (let x of categories) {
              let list = document.querySelectorAll("input[type='radio'][name='" + x + "']");
              console.log(list);
              let randnum = Math.floor(Math.random() * list.length);
              list[randnum].checked = true;
              list[randnum].click();
          }
          }


  const color = localStorage.getItem('alpacaColor');
  if (color === 'brown') {
    changeBrown();
  }
  else {
    changeWhite();
  }
}

