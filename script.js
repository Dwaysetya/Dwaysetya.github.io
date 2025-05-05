import { PacmanRenderer } from "pacman-contribution-graph";

const pr = new PacmanRenderer({
  platform: "github",
  username: "yourusername", // Ganti dengan username GitHubmu
  canvas: document.getElementById("canvas"), // Pastikan ada elemen dengan id 'canvas' di HTMLmu
  outputFormat: "canvas",
  gameTheme: "github",
});
pr.start();
