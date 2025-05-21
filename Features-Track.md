
# Riverside Clone Features

## Version 1: Core Functionality (P2P Recording MVP)
- [x] User authentication and room creation (host creates session with session code)
- [x] Peer-to-peer WebRTC connection between host and receiver
- [x] Record media locally using MediaRecorder API
- [x] Upload complete recording to backend endpoint after stopping
- [x] Backend saves to S3 and stores metadata in DB
- [x] Dashboard shows uploaded recordings per session

## Version 2: Enhanced Session Management & Dashboard
- [x] Create `Sessions`, `Tracks`, `JoinSession` tables in DB
- [x] Host can see all session-related recordings in dashboard
- [x] Participants recordings visible to host
- [x] User must sign up before joining a session (for access control & dashboard)
- [x] Upload endpoint creates track entries linked to users and sessions
- [x] Track who joined which session via `JoinSession`
- [x] Display sessions and recordings in dashboard

### Optional Additions for v2
- [ ] Show upload progress in UI
- [ ] Allow retry/re-upload if upload failed
- [ ] Track recording status (pending, uploaded, failed)
- [ ] Cache blob temporarily in `localStorage` or `IndexedDB`

## Version 3: Media Management & Async Upload Improvements
- [ ] Upload in chunks in background
- [ ] Display upload and processing status on dashboard
- [ ] Implement retry logic with exponential backoff
- [ ] Improve S3 metadata tagging (who, when, size)
- [ ] Track device info (optional, for support)
- [ ] Add simple waveform preview (placeholder for audio analysis)

## Version 4: Move Towards Riverside-Level Infrastructure
- [ ] Transition to SFU (Selective Forwarding Unit) for 1-to-many calls
- [ ] Parallel media stream recording (record raw streams)
- [ ] Backend media merging (FFmpeg workflows)
- [ ] Server-side transcription or integration with external API (Whisper, Deepgram)
- [ ] Post-processing pipeline (normalize audio, trim silence)
- [ ] Timeline-style editor for aligning tracks

## Long-Term Riverside-Like Features
- [ ] Multi-track editing and exporting
- [ ] Green-room flow before session starts
- [ ] Cloud-based recording (backup stream via SFU)
- [ ] Real-time speaker detection (for auto-focus)
- [ ] Calendar integration, scheduling
- [ ] Shareable link with viewer access
- [ ] Progressive uploads and live previews



---

## Milestone Progress

- [x] Version 1 Complete
- [X] Version 2 Complete
- [ ] Version 3
- [ ] Version 4
- [ ] Version 5

---

