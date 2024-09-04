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
  const images = document.querySelectorAll('img');

  images.forEach(img => {
    if (img.src.includes('images/white')) {
      img.src = img.src.replace('images/white', 'images/brown');
    }
  });

  localStorage.setItem('alpacaColor', 'brown');
}

function changeWhite() {
  const images = document.querySelectorAll('img');

  images.forEach(img => {
    if (img.src.includes('images/brown')) {
      img.src = img.src.replace('images/brown', 'images/white');
    }
  });

  localStorage.setItem('alpacaColor', 'white');
}


function onload() {
  radios.forEach(radio => {
    if (radio.checked) {
      radio.click();
    }
  });
}


document.addEventListener("DOMContentLoaded", function () {
  animation();
  onload();

});

function animation() {
  var textWrapper = document.querySelector('.letters');
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

  anime.timeline({ loop: false })
    .add({
      targets: '.letter',
      scale: [0, 1.05],
      duration: 7000,
      elasticity: 750,
      delay: (el, i) => 250 * (i + 1)
    })
}

var modal = document.getElementById("myModal");

var btn = document.getElementById("info");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
}


span.onclick = function () {
  modal.style.display = "none";
}

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


var coll = document.getElementsByClassName("heading");
var i;
var activeDropdown = null;
var activeHeading = null;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function (event) {

    if (activeHeading && activeHeading !== this) {
      activeHeading.classList.remove("active");
    }

    this.classList.toggle("active");
    var content = this.nextElementSibling;

    if (content.style.display === "block") {
      content.style.display = "none";
      activeDropdown = null;
    } else {
      if (activeDropdown) {
        activeDropdown.style.display = "none";
      }
      content.style.display = "block";
      activeDropdown = content;
    }

    activeHeading = this;

    event.stopPropagation();
  });
}

window.addEventListener("click", function (event) {
  if (activeDropdown) {
    var container = activeDropdown.parentElement;
    if (!container.contains(event.target)) {
      activeDropdown.style.display = "none";
      activeDropdown = null;

      if (activeHeading) {
        activeHeading.classList.remove("active");
        activeHeading = null;
      }
    }
  }
});

if (window.history.replaceState) {
  window.history.replaceState(null, null, window.location.href);
}


