---
      title: "MultiModal Video Analysis Tool"
      summary: "Generate timestamped section breakdowns and ask questions based on video content"
      date: 2025-06-15
      thumbnail: ../../thumbnails/mva.png
      youtubeId: 1oRr4YsXtZ4
      repoUrl: https://github.com/tmabdull/multimodal-vid-analysis
      tags: ["Chatbot", "RAG"]
      featured: true
---

### Inspiration

- We are overloaded with video content (lectures, documentaries, TED Talks)
- Finding specific information across large video libraries is slow and inefficient
- Current video-sharing platforms don’t support deep search or citation-like navigation

### What it does

- Built-in video chatbot interface for interactive exploration
- Automatically generated timeline breakdown
- Natural language query where timestamps of the videos are shown that match the user’s query

### How I built it

- Implemented RAG pipelines for video and audio
- Processed, chunked, and embedded transcript and video clips, identifying important scene changes
- Leveraged GPT 4 for generating timestamped section breakdowns and handling user queries, with vector space as context
