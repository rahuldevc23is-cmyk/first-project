// ============================================
//  music.js — Music Playlist Configuration
//  For Lakshmishree B K (Lacchi / Angel) 💛
// ============================================

// 🎵 HOW TO ADD MUSIC:
// Option A — Local files:
//   1. Create a folder called "music" next to index.html
//   2. Put your .mp3 files inside
//   3. Set  src: "music/song-name.mp3"
//
// Option B — Online URL:
//   Set  src: "https://..."  (must be a direct .mp3 link)
//
// Leave src as "" to show a placeholder card.

const PLAYLIST = [
  {
    title: "A song dedicated to my Lacchi",
    artist: "Nakul Abhaunkar",
    src: "https://github.com/rahuldevc23is-cmyk/first-project/releases/download/v1.0.0/1.mp3",        // e.g. "music/fav-song.mp3"
    duration: "3:18"
  },
  {
    title: "Her fav Song",
    artist: "Kiranraj K",
    src: "https://github.com/rahuldevc23is-cmyk/first-project/releases/download/v1.0.0/2.mp3",
    duration: "4:47"
  },
  {
    title: "That Song She Always Hums",
    artist: "Parvathi Menon",
    src: "https://github.com/rahuldevc23is-cmyk/first-project/releases/download/v1.0.0/3.mp3",
    duration: "4:11"
  },
  {
    title: "Her fav song",
    artist: "J Anoop Seelin",
    src: "https://github.com/rahuldevc23is-cmyk/first-project/releases/download/v1.0.0/4.mp3",
    duration: "3:22"
  },
  {
    title: "Angel's motivation song",
    artist: "Punneth Rajkumar",
    src: "https://github.com/rahuldevc23is-cmyk/first-project/releases/download/v1.0.0/5.mp3",
    duration: "5:13"
  },
  {
    title: "Angel's Melody",
    artist: "Tilak Shekar",
    src: "https://github.com/rahuldevc23is-cmyk/first-project/releases/download/v1.0.0/6.mp3",
    duration: "2:48"
  },
  {
    title: "Angel's fav telugu Melody",
    artist: "Gopi sundar",
    src: "https://github.com/rahuldevc23is-cmyk/first-project/releases/download/v1.0.0/7.mp3",
    duration: "5:32"
  },
  {
    title: "Angel's Melody",
    artist: "Add artist name",
    src: "https://github.com/rahuldevc23is-cmyk/first-project/releases/download/v1.0.0/8.mp3",
    duration: "4:15"
  },
  {
    title: "Angel's fav Mass Song",
    artist: "Narthan",
    src: "https://github.com/rahuldevc23is-cmyk/first-project/releases/download/v1.0.0/9.mp3",
    duration: "3:52"
  },
  {
    title: "Angel's old Melody",
    artist: "Sundharani",
    src: "https://github.com/rahuldevc23is-cmyk/first-project/releases/download/v1.0.0/10.mp3",
    duration: "4:15"
  },
  {
    title: "KARMA",
    artist: "Rishab Shetty",
    src: "https://github.com/rahuldevc23is-cmyk/first-project/releases/download/v1.0.0/11.mp3",
    duration: "4:11`"
  },
  // ── Add more songs here ──
];

// Export
window.PLAYLIST = PLAYLIST;
