"use strict";
// Check the README.md file for instructions to the exercise
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const PORT = 3000;
const server = http_1.default.createServer((req, res) => {
    if (req.url === "/view-image") {
        const imagePath = path_1.default.join(__dirname, "images", "veryhappydog.jpg");
        fs_1.default.readFile(imagePath, (err, data) => {
            if (err) {
                res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
                res.end("이미지를 찾을 수 없습니다 😢");
                return;
            }
            res.writeHead(200, { "Content-Type": "image/jpeg" });
            res.end(data);
        });
    }
    else {
        // ✅ UTF-8 명시
        res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
        res.end("Welcome! Visit /view-image to see the dog 🐶");
    }
});
server.listen(PORT, () => {
    console.log(`✅ Server running at http://localhost:${PORT}`);
});
