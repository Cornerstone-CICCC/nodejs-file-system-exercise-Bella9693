// Check the README.md file for instructions to the exercise

import http from "http";
import fs from "fs";
import path from "path";

const PORT = 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/view-image") {
    const imagePath = path.join(__dirname, "images", "veryhappydog.jpg");

    fs.readFile(imagePath, (err, data) => {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
        res.end("이미지를 찾을 수 없습니다 😢");
        return;
      }

      res.writeHead(200, { "Content-Type": "image/jpeg" });
      res.end(data);
    });
  } else {
    // ✅ UTF-8 명시
    res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Welcome! Visit /view-image to see the dog 🐶");
  }
});

server.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
