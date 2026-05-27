/* ============================================================
   videos.js — Video Gallery · Memories in Motion
   ============================================================

   ✏️  HOW TO ADD VIDEOS:

   OPTION A — Local video file (.mp4):
     1. Create a folder called  videos/  next to index.html
     2. Put your .mp4 files inside it
     3. S     3. Set   src: "https://github.com/rahuldevc23is-cmyk/first-project/releases/download/v1.0.0/your-video.mp4"
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
    src:         "https://github.com/rahuldevc23is-cmyk/first-project/releases/download/v1.0.0/1.mp4",      /* ← e.g. "videos/memory1.mp4" */
    type:        "local"  /* "local" or "youtube" */
  },
  {
    title:       "Our First Reel During Graduation day",
    description: "When we laughed until we couldn't breathe ✨",
    src:         "https://github.com/rahuldevc23is-cmyk/first-project/releases/download/v1.0.0/2.mp4",
    type:        "local"
  },
  {
    title:       "Pro Rider",
    description: "A special video message, just for you 🌸",
    src:         "https://github.com/rahuldevc23is-cmyk/first-project/releases/download/v1.0.0/3.mp4",
    type:        "local"
  },
  {
    title:       "Assigment Tale Novu 😂",
    description: "A special video message, just for you 🌸",
    src:         "https://github.com/rahuldevc23is-cmyk/first-project/releases/download/v1.0.0/4.mp4",
    type:        "local"
  },
  {
    title:       "For My Angel",
    description: "A special video message, just for you 🌸",
    src:         "https://github.com/rahuldevc23is-cmyk/first-project/releases/download/v1.0.0/5.mp4",
    type:        "local"
  },
  {
    title:       "My First Rakshabandan Celebraton in my 20 years of my life 🥰",
    description: "A special video message, just for you 🌸",
    src:         "https://github.com/rahuldevc23is-cmyk/first-project/releases/download/v1.0.0/6.mp4",
    type:        "local"
  },
  {
    title:       "THE LAST GROUP PHOTO OF YOU BATCH",
    description: "A special video message, just for you 🌸",
    src:         "https://github.com/rahuldevc23is-cmyk/first-project/releases/download/v1.0.0/7.mp4",
    type:        "local"
  },
  {
    title:       "For My Angel",
    description: "A special video message, just for you 🌸",
    src:         "https://github.com/rahuldevc23is-cmyk/first-project/releases/download/v1.0.0/8.mp4",
    type:        "local"
  },
  {
    title:       "For My Angel",
    description: "A special video message, just for you 🌸",
    src:         "https://github.com/rahuldevc23is-cmyk/first-project/releases/download/v1.0.0/9.mp4",
    type:        "local"
  },
  {
    title:       "MY Best Edit For My Angel",
    description: "A special video message, just for you 🌸",
    src:         "https://github.com/rahuldevc23is-cmyk/first-project/releases/download/v1.0.0/10.mp4",
    type:        "local"
  },
  {
    title:       "For My Angel",
    description: "A special video message, just for you 🌸",
    src:         "https://github.com/rahuldevc23is-cmyk/first-project/releases/download/v1.0.0/11.mp4",
    type:        "local"
  },
  {
    title:       "For My Angel",
    description: "A special video message, just for you 🌸",
    src:         "https://github.com/rahuldevc23is-cmyk/first-project/releases/download/v1.0.0/12.mp4",
    type:        "local"
  },
  {
    title:       "For My Angel",
    description: "A special video message, just for you 🌸",
    src:         "https://github.com/rahuldevc23is-cmyk/first-project/releases/download/v1.0.0/13.mp4",
    type:        "local"
  },
  {
    title:       "For My Angel",
    description: "A special video message, just for you 🌸",
    src:         "https://github.com/rahuldevc23is-cmyk/first-project/releases/download/v1.0.0/14.mp4",
    type:        "local"
  },
  {
    title:       "For My Angel",
    description: "A special video message, just for you 🌸",
    src:         "https://github.com/rahuldevc23is-cmyk/first-project/releases/download/v1.0.0/15.mp4",
    type:        "local"
  },
  {
    title:       "For My Angel",
    description: "A special video message, just for you 🌸",
    src:         "https://github.com/rahuldevc23is-cmyk/first-project/releases/download/v1.0.0/16.mp4",
    type:        "local"
  },
  {
    title:       "First Day We MEET in College During Kannada Rajyothsava",
    description: "A special video message, just for you 🌸",
    src:         "https://github.com/rahuldevc23is-cmyk/first-project/releases/download/v1.0.0/17.mp4",
    type:        "local"
  },
  {
    title:       "For My Angel",
    description: "A special video message, just for you 🌸",
    src:         "https://github.com/rahuldevc23is-cmyk/first-project/releases/download/v1.0.0/18.mp4",
    type:        "local"
  },
  {
    title:       "For My Angel",
    description: "A special video message, just for you 🌸",
    src:         "https://github.com/rahuldevc23is-cmyk/first-project/releases/download/v1.0.0/19.mp4",
    type:        "local"
  },
  {
    title:       "This Reel 🤣",
    description: "A special video message, just for you 🌸",
    src:         "https://github.com/rahuldevc23is-cmyk/first-project/releases/download/v1.0.0/21.mp4",
  },
  //   description: "Her favourite 🎵",
  //   src:         "https://www.youtube.com/embed/dQw4w9WgXcQ",
  //   type:        "youtube"
  // },
];
