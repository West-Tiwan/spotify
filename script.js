class song_info {
  constructor(name, producer, album, duration, source, pic) {
    this.song_name = name;
    this.producer_name = producer;
    this.length_of_song = duration;
    this.sauce = source;
    this.cover = pic;
  }
}

const nier_1 = new song_info("Voice of no return", "Square Enix", "Peacefull", 231, "music/nier_1", "music/nier_cover.jpeg");
const nier_2 = new song_info("Weight of the world", "Square Enix", "Peacefull", 365, "music/nier_2", "music/nier_cover.jpeg");
const nier_3 = new song_info("Sound of the end", "Square Enix", "Peacefull", 347, "music/nier_3", "music/nier_cover.jpeg");
const emils_shop = new song_info("Emil's shop", "Square Enix", "Peacefull", 351, "music/emils_shop", "music/nier_cover.jpeg");
var songs = [nier_1, nier_2, nier_3, emils_shop];

var index = 0;
var current_song = songs[index];

function formatDuration(a) {
  const minutes = Math.floor(a.length_of_song / 60);
  const seconds = a.length_of_song % 60;
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

function update_playelist() {
  var playlist = ``;

  for (let i = 0; i < songs.length; i++) {
    playlist += `<div style="display:grid;grid-template-columns:1fr 19fr 1fr;font-size:25px;padding-left:20px;padding-top:20px;"><p>${i + 1}</p><p>${songs[i].song_name}</p><p>${formatDuration(songs[i])}</p></div>`;
  }
  document.querySelector("#playlist").innerHTML = playlist;
}

const current_playing_name = document.querySelector(".current_info_name");

function change_song_button_forward() {
  index = (index + 1) % (songs.length);
  current_song_name();
}
function change_song_button_backward() {
  index = (index - 1 + songs.length) % (songs.length);
  current_song_name();

}
function current_song_name() {
  var current_song = songs[index];

  document.getElementById("currImage").src = current_song.cover;
  document.getElementById("currSong").innerText = current_song.song_name;
  document.getElementById("currProd").innerText = current_song.producer_name;


}
current_song_name();
update_playelist();
