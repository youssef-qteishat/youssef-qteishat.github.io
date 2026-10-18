---
      title: "Sentinel - Collaborative Agent Hackathon @ Stanford"
      summary: "Federating Agent for early flood detection"
      date: 2026-09-29
      thumbnail: ../../thumbnails/flood.png
      videoId: ce8e0cb517bf48dabe6f69328d8a21ff
      videoPlatform: "loom"
      repoUrl: https://github.com/pavanadi/sentinel-agent.git
      tags: ["Flower Agent", "Federated Learning", "Hackathon"]
      featured: true
---

### Inspiration

- 2026 Nepal-Tibet floods, claiming the lives of over 1,400 people
- Each country has their own means of collecting weather data
- Their data is stored in private silos, which makes it difficult collaborate effectively to predict weather anomalies
- Needed a system that can consume data from multiple sources while keeping it private

### What it does

- Sub-agents for each country consume data regarding rainfall, river water levals, and snowmelt, and then funnel data to the federating agent
- LLM-based federating agent handles user query and populates dashboard for flood system and each country

### How I built it

- Sentinel leverages Flower SuperGrid to issue these warnings, with 5 SuperNodes running for each country
- Each node sends signals to a federating agent to update the dashboard
- Users can prompt Sentinel via the published Flower app to get information and readings on thr weather event displayed on the dashboard
