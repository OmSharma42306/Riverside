# 🎥 Peer-to-Peer Recording App (Riverside Clone - v1)

A minimal Riverside.fm clone (version 1) built using WebRTC, MediaRecorder, WebSockets, and the MERN stack. This version supports one-on-one high-quality audio/video calls with **local recording** and **upload to AWS S3**.

---

## 🚀 Features

- Peer-to-peer video and audio call using WebRTC
- Local recording on each client using MediaRecorder API
- Upload recorded files to AWS S3 via backend API
- Simple signaling server using WS (WebSocket)
- Built with MERN stack (MongoDB, Express, React, Node.js)

---

## 🧱 Tech Stack

- **Frontend**: React, WebRTC, MediaRecorder, Websocket
- **Backend**: Node.js, Express, ws, AWS SDK
- **Storage**: Amazon S3
- **Database**: MongoDB (for sessions/users - optional in v1)

---

## 📦 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/OmSharma42306/Riverside.git
cd Riverside
cd repo
1) npm install
2) cd packages/db
    - npx prisma generate
    - tsc -b
    - copy that genrated folder into dist
3) npm run dev
4) start the Worker... 
    - cd apps/backend-server
    - cd dist/workers
    - node mergeWorker.js
