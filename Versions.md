# Project Roadmap – Riverside-like Recording Platform

This document outlines the feature roadmap to build a Riverside-style high-quality video recording platform. It is divided into progressive versions to help structure development goals.

---

## ✅ Version 1 – MVP (Minimum Viable Product)

### Focus:
Peer-to-peer video call with local recording and simple S3 upload.

### Core Features:
- [x] 1:1 WebRTC peer-to-peer connection
- [x] Local recording using `MediaRecorder`
- [x] Upload recording as a Blob after recording ends
- [x] Backend endpoint to receive and upload video to S3
- [x] Return downloadable S3 URL after upload

---

## 🚀 Version 2 – Multi-Track & Session-Based Recording

### Focus:
Enable hosts to manage sessions and collect recordings from multiple users.

### Core Features:
- [X] Session management with unique `sessionId`
- [X] Guests join via invite link (`/join/:sessionId`)
- [X] Each participant records and uploads their own video
- [X] Upload metadata stored in PostgresDB (sessionId, userId, fileUrl)
- [X] Host dashboard to view sessions and associated recordings
- [X] Guest upload auto-triggers post-recording
- [ ] Re-upload support on failure
- [ ] Upload progress indicator (optional)

---

## ⚙️ Version 3 – Scale, Reliability & SFU Integration

### Focus:
Make the platform scalable and resilient with one-to-many support.

### Core Features:
- [ ] Integrate SFU (e.g., LiveKit, Mediasoup)
- [ ] Switch from P2P to SFU-based real-time video routing
- [ ] Background chunked uploading using `ondataavailable`
- [ ] Use IndexedDB for temporary blob storage in the browser
- [ ] Resume upload after crash or disconnect
- [ ] Add user roles (host, guest, audience)

---

## ⚡️ Version 4 – Post-Processing & Video Merging

### Focus:
Enable production-ready video generation.

### Core Features:
- [ ] Merge host and guest recordings using FFmpeg
- [ ] Choose layout style: side-by-side, speaker view, grid
- [ ] Align videos using synchronized timestamps
- [ ] Generate a final export (mp4) from merged recordings
- [ ] Timeline view of session (participant durations)

---

## ⭐ Version 5 – Advanced Tools & Studio Features

### Focus:
Achieve Riverside-level feature parity with production enhancements.

### Core Features:
- [ ] Real-time transcription and subtitle export (e.g., `.srt`)
- [ ] Multi-resolution recording support (720p, 1080p)
- [ ] Server-side editing tools (trim, cut, transitions)
- [ ] Add overlays, intros, and branding in export
- [ ] AI features (speaker detection, auto-highlights, cleanup)

---

## Future Ideas (Optional):
- Cloud rendering of final video
- Real-time screen sharing recording
- Remote producer role with full controls
- Cloud storage usage metrics per user
- GDPR & compliance export features

---

## Milestone Progress

- [x] Version 1 Complete
- [X] Version 2 Complete
- [ ] Version 3
- [ ] Version 4
- [ ] Version 5

---

