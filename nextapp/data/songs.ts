// PLACEHOLDER: Şarkı bilgilerini Murat güncelleyecek
// Her şarkı için: name, artist, note, emoji, gradient renkleri, tag

export interface Song {
  id: number;
  name: string;
  artist: string;
  note: string;
  emoji: string;
  gradient: string;
  tag: string;
}

export const songs: Song[] = [
  {
    id: 1,
    name: "Şarkı Adı 1",
    artist: "Sanatçı",
    note: "Senin için seçtiğim şarkı",
    emoji: "🎵",
    gradient: "from-[#ffd9e1] to-[#ffb1c5]",
    tag: "Dün eklendi",
  },
  {
    id: 2,
    name: "Şarkı Adı 2",
    artist: "Sanatçı",
    note: "Aklıma hep sen geliyorsun",
    emoji: "🎶",
    gradient: "from-[#fec1d6] to-[#f2b6cb]",
    tag: "Klasik seçim",
  },
  {
    id: 3,
    name: "Şarkı Adı 3",
    artist: "Sanatçı",
    note: "Çünkü evet.",
    emoji: "🎸",
    gradient: "from-[#ffb1c5] to-[#c3004e]/30",
    tag: "Şu an tekrarda",
  },
];

// PLACEHOLDER: Spotify listesini Murat güncelleyecek
export const SPOTIFY_LINK = "https://open.spotify.com/playlist/PLACEHOLDER";
