/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ["the", "our", "my", "your", "their"];
let adj = ["great", "big", "small", "fast", "slow"];
let noun = ["jogger", "racoon", "dog", "cat", "mouse"];
let domExt = [".com", ".net", ".us", ".io", ".org"];

window.onload = function() {
  let domains = domainGenerator(pronoun, adj, noun);
  allDom(domains);
  rDom(domains);
};

function domainGenerator(pronoun, adj, noun) {
  let domain = [];
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < domExt.length; l++)
          domain.push(pronoun[i] + adj[j] + noun[k] + domExt[l]);
      }
    }
  }
  return domain;
}
function random() {
  let domains = domainGenerator(pronoun, adj, noun);
  rDom(domains);
}

function allDom(domains) {
  let ul = document.querySelector(".domains ul");
  for (let i = 0; i < domains.length; i++) {
    let li = document.createElement("li");
    li.innerHTML = domains[i];
    ul.appendChild(li);
  }
}
function rDom(domains) {
  let rDom = document.querySelector(".input");
  let randomDomain = domains[Math.floor(Math.random() * domains.length)];
  rDom.innerHTML = `${randomDomain}`;
}
window.random = random;
