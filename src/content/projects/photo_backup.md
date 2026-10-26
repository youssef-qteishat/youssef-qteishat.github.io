---
      title: "Photo Backup: SanDisk Companion App Clone"
      summary: "photo and video backup to local machine"
      date: 2026-10-26
      thumbnail: ../../thumbnails/sandisk_logo.png
      repoUrl: https://github.com/youssef-qteishat/photo_backup
      tags: ["Flutter", "Dart"]
      featured: true
---

### Inspiration

The SanDisk app helps users manage storage locally and across connected drives. I want to implement a similar app, starting with a local USB backup to a connected Mac.

### What it does

Photo Backup is an iOS app that backs up your photos and videos to Supabase Storage running locally on a Mac. Backups are:

- **Incremental:** only new or changed files are copied.
- **Verified:** a file only counts as backed up once its SHA-256 hash matches the copy on the destination.
- **Resumable:** it survives the app being killed, the network dropping, or iOS sending it to the background.

You get a progress bar measured in bytes, Pause/Resume/Cancel, and a history of every run with each file's outcome and the reason anything failed or was skipped.

### How I built it

- **Stack:**
  - Flutter for the app.
  - `photo_manager` for photo-library access.
  - SQLite for the job queue and manifest.
  - Supabase in Docker as the "drive".
- **Spec first:** five pipeline stages, a job state machine with its legal transitions, and the failure cases. Built the app with Claude Code against that spec.
- **One interface for every destination:** a single `BackupDestination` interface has a real Supabase version and an in-memory fake that can fail on demand. That let me test crashes, retries and verification failures without a network: 71 automated tests in all.

### Next steps

- Add a pre-flight report: new files, size-limit problems, and space and time estimates.
- Back up the video part of Live Photos.
- Add restore from Supabase backup.
- Add parallel uploads.
- Support true byte-offset resume for very large videos.
