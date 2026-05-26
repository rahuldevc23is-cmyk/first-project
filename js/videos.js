/* ============================================================
   videos.js — Video Gallery · Memories in Motion
   ============================================================

   ✏️  HOW TO ADD VIDEOS:

   OPTION A — Local video file (.mp4):
     1. Create a folder called  videos/  next to index.html
     2. Put your .mp4 files inside it
     3. Set   src: "videos/your-video.mp4"
              type: "local"

   OPTION B — YouTube video:
     1. Open the YouTube video
     2. Click Share → Embed
     3. Copy the URL from the src="..." part of the iframe code
        It looks like:  https://www.youtube.com/embed/VIDEO_ID
     4. Set   src: "https://www.youtube.com/embed/VIDEO_ID"
              type: "youtube"

   Leave  src: ""  to show a placeholder card.
   ============================================================ */

const VIDEOS = [
  {
    title:       "Our Best Memory Together",
    description: "A moment I will never forget 💛",
    src:         "videos/1.mp4",      /* ← e.g. "videos/memory1.mp4" */
    type:        "local"  /* "local" or "youtube" */
  },
  {
    title:       "Our First Reel During Graduation day",
    description: "When we laughed until we couldn't breathe ✨",
    src:         "videos/2.mp4",
    type:        "local"
  },
  {
    title:       "Pro Rider",
    description: "A special video message, just for you 🌸",
    src:         "videos/3.mp4",
    type:        "local"
  },
  {
    title:       "Assigment Tale Novu 😂",
    description: "A special video message, just for you 🌸",
    src:         "videos/4.mp4",
    type:        "local"
  },
  {
    title:       "For My Angel",
    description: "A special video message, just for you 🌸",
    src:         "videos/5.mp4",
    type:        "local"
  },
  {
    title:       "My First Rakshabandan Celebraton in my 20 years of my life 🥰",
    description: "A special video message, just for you 🌸",
    src:         "videos/6.mp4",
    type:        "local"
  },
  {
    title:       "THE LAST GROUP PHOTO OF YOU BATCH",
    description: "A special video message, just for you 🌸",
    src:         "videos/7.mp4",
    type:        "local"
  },
  {
    title:       "For My Angel",
    description: "A special video message, just for you 🌸",
    src:         "videos/8.mp4",
    type:        "local"
  },
  {
    title:       "For My Angel",
    description: "A special video message, just for you 🌸",
    src:         "videos/9.mp4",
    type:        "local"
  },
  {
    title:       "MY Best Edit For My Angel",
    description: "A special video message, just for you 🌸",
    src:         "videos/10.mp4",
    type:        "local"
  },
  {
    title:       "For My Angel",
    description: "A special video message, just for you 🌸",
    src:         "videos/11.mp4",
    type:        "local"
  },
  {
    title:       "For My Angel",
    description: "A special video message, just for you 🌸",
    src:         "videos/12.mp4",
    type:        "local"
  },
  {
    title:       "For My Angel",
    description: "A special video message, just for you 🌸",
    src:         "videos/13.mp4",
    type:        "local"
  },
  {
    title:       "For My Angel",
    description: "A special video message, just for you 🌸",
    src:         "videos/14.mp4",
    type:        "local"
  },
  {
    title:       "For My Angel",
    description: "A special video message, just for you 🌸",
    src:         "videos/15.mp4",
    type:        "local"
  },
  {
    title:       "For My Angel",
    description: "A special video message, just for you 🌸",
    src:         "videos/16.mp4",
    type:        "local"
  },
  {
    title:       "First Day We MEET in College During Kannada Rajyothsava",
    description: "A special video message, just for you 🌸",
    src:         "videos/17.mp4",
    type:        "local"
  },
  {
    title:       "For My Angel",
    description: "A special video message, just for you 🌸",
    src:         "videos/18.mp4",
    type:        "local"
  },
  {
    title:       "For My Angel",
    description: "A special video message, just for you 🌸",
    src:         "videos/19.mp4",
    type:        "local"
  },
  {
    title:       "This Reel 🤣",
    description: "A special video message, just for you 🌸",
    src:         "videos/21.mp4",
    type:        "local"
  },
  


  /* ── Add more videos below ── */

  // Example YouTube:
  // {
  //   title:       "Happy Birthday Song",
  //   description: "Her favourite 🎵",
  //   src:         "https://www.youtube.com/embed/dQw4w9WgXcQ",
  //   type:        "youtube"
  // },
];
