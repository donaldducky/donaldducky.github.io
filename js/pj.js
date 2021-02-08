let didIt = false;
const nesify = () => {
  if (didIt) return;
  didIt = true;
  [...document.querySelectorAll("link, style")].forEach((el) => el.remove());
  const s = document.createElement("link");
  s.rel = "stylesheet";
  s.href = "https://unpkg.com/nes.css@2.3.0/css/nes.min.css";
  document.querySelector("body").appendChild(s);

  const chars = [
    "nes-mario",
    "nes-ash",
    "nes-bulbasaur",
    "nes-charmander",
    "nes-squirtle",
    "nes-kirby",
  ];
  const randChar = () => {
    return chars[Math.floor(Math.random() * Math.floor(chars.length))];
  };
  const qs = document.querySelector.bind(document);
  const qsa = document.querySelectorAll.bind(document);
  // TODO make topnav and search work
  qs("#uf-top-nav-container").remove();
  // TODO move f before s
  const f = document.createElement("link");
  f.rel = "stylesheet";
  f.href = "https://fonts.googleapis.com/css?family=Press+Start+2P";
  document.querySelector("body").appendChild(f);
  const hd = qs(".hero-body");
  hd.style.margin = "0px auto";
  hd.style.maxWidth = "980px";
  hd.style.paddingTop = "2rem";
  const l = document.createElement("i");
  l.classList.add("snes-jp-logo");
  hd.querySelector("h1").prepend(l);
  qs("header.hero").style.borderBottom = "4px solid #D3D3D3";
  qs("hgroup").style.marginTop = "2rem";
  qs("hgroup").style.marginBottom = "2rem";
  const mc = document.querySelector("#main-content");
  mc.style.margin = "0px auto";
  mc.style.maxWidth = "980px";
  const ul = document.querySelector("#uf-tile-container");
  ul.classList.add("nes-list");
  ul.style.padding = "0 1rem";
  //const srch = document.querySelector('#uf-search-input');
  //srch.classList.add('nes-input');
  const up = qs("#uf-back-to-top");
  up.classList.add("nes-btn", "scroll-btn", "is-error", "active");
  up.querySelector("i").remove();
  up.innerText = "<";
  up.style.transform = "rotateZ(90deg)";
  up.style.position = "fixed";
  up.style.right = "2rem";
  up.style.bottom = "25px";
  up.style.boxShadow = "0 5px 20px rgb(0 0 0 / 60%)";
  up.style.transition = "all 0.3s ease";
  [...document.querySelectorAll(".uf-item-tile")].forEach((el) => {
    const ap = el.querySelector("article .uf-tile-description");
    ap.classList.add("nes-balloon", "from-left");
    el.classList.add("nes-container", "with-title");
    el.style.marginBottom = "1.5rem";
    el.style.paddingBottom = "0.5rem";
    const btn = el.querySelector(".uf-tile-content-label span");
    btn.classList.add("nes-btn", "is-primary");
    btn.style.float = "right";
    const oldTitle = el.querySelector("h1");
    const t = document.createElement("h3");
    t.classList.add("title");
    t.innerText = oldTitle.innerText;
    oldTitle.remove();
    el.prepend(t);
    const i = document.createElement("i");
    i.classList.add(randChar(), "nes-icon", "is-small");
    // is-small is transform(1), I want smaller!
    i.style.height = "48px";
    i.style.width = "48px";
    i.style.transform = "scale(0.5)";
    el.querySelector(".uf-tile-content-label-text").prepend(i);
    const fig = el.querySelector("figure");
    if (fig) {
      fig.style.textAlign = "center";
      const img = fig.querySelector("img");
      img.style.imageRendering = "pixelated";
      img.style.width = "100%";
      img.style.opacity = "0";
      fig.style.background =
        "repeating-linear-gradient(transparent, transparent 2px, black 3px, black 3px), url(" +
        img.src +
        ")";
      fig.style.backgroundSize = "auto 100%";
      fig.style.backgroundPosition = "center center";
      fig.style.opacity = "1";
      fig.style.borderRadius = "1rem";
    }
  });
  const ft = qs("#uf-footer");
  ft.style.margin = "0 auto";
  ft.style.maxWidth = "980px";
  ft.style.textAlign = "center";
  ft.style.padding = "2rem";
  qs(".uf-skip-to-main").style.marginLeft = "-100%";
  qs(".uf-skip-to-main").style.position = "fixed";
  qs(".uf-skip-to-main").classList.add("nes-btn", "is-success");
  qs(".uf-skip-to-main").addEventListener("focus", function () {
    this.style.marginLeft = "2rem";
  });
  qs(".uf-skip-to-main").addEventListener("blur", function () {
    this.style.marginLeft = "-100%";
  });
  const p = document.createElement("p");
  p.innerHTML =
    '<a href="https://nostalgic-css.github.io/NES.css/">nes.css</a> created by <a href="https://github.com/BcRikko">B.C.Rikko</a>';
  qs("footer").appendChild(p);
};
