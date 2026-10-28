(function () {
  var cfg = window.ZAWAJ_CONFIG || {};

  // Embedded Google Form
  var frame = document.getElementById("reg-form");
  var link = document.getElementById("form-link");
  var loading = document.getElementById("form-loading");
  var launch = document.getElementById("form-launch");
  if (cfg.formRequiresSignIn && launch) {
    launch.hidden = false;
    document.getElementById("form-launch-btn").href = cfg.formUrl;
    ["form-shell", "form-fallback"].forEach(function (id) {
      var el = document.getElementById(id);
      if (el) el.hidden = true;
    });
    frame = null;
  }
  if (frame && cfg.formUrl) {
    var src = cfg.formUrl;
    if (/docs\.google\.com\/forms/.test(src) && !/embedded=true/.test(src)) {
      src += (src.indexOf("?") > -1 ? "&" : "?") + "embedded=true";
    }
    frame.src = src;
    frame.style.height = (cfg.formHeight || 1600) + "px";
    frame.addEventListener("load", function () {
      if (loading) loading.hidden = true;
    });
  }
  if (link && cfg.formUrl) link.href = cfg.formUrl.replace("embedded=true", "");

  // Contact email
  if (cfg.contactEmail) {
    document.querySelectorAll("#contact-link, [data-contact]").forEach(function (a) {
      a.href = "mailto:" + cfg.contactEmail;
      if (a.hasAttribute("data-contact")) a.textContent = cfg.contactEmail;
    });
  }

  // Footer year
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  // Mobile nav
  var toggle = document.querySelector(".nav-toggle");
  var links = document.getElementById("nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      links.classList.toggle("open", !open);
    });
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        toggle.setAttribute("aria-expanded", "false");
        links.classList.remove("open");
      });
    });
  }
})();
