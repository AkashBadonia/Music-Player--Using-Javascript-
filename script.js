const songData = [
  {
    id: 1,
    name: "Agar Tum Saath Ho",
    artist: "Arijit Singh, Alka Yagnik",
    image: "./static/images/Agar Tum Saath Ho.jpg",
    genre: "Romantic",
    source: "./static/songs/Agar Tum Saath Ho.mp3",
  },
  {
    id: 2,
    name: "Tum Hi Ho",
    artist: "Arijit Singh",
    image: "./static/images/Tum Hi Ho.jpg",
    genre: "Romantic",
    source: "./static/songs/Tum Hi Ho.mp3",
  },
  {
    id: 3,
    name: "Chaiyya Chaiyya",
    artist: "Sukhwinder Singh, Sapna Awasthi",
    image: "./static/images/Chaiyya Chaiyya.jpg",
    genre: "Dance",
    source: "./static/songs/Chaiyya Chaiyya.mp3",
  },
  {
    id: 4,
    name: "Kal Ho Naa Ho",
    artist: "Sonu Nigam",
    image: "./static/images/Kal Ho Naa Ho.jpg",
    genre: "Sad",
    source: "./static/songs/Kal Ho Naa Ho.mp3",
  },
  {
    id: 5,
    name: "Gallan Goodiyan",
    artist:
      "Yashita Sharma, Manish Kumar Tipu, Shankar Mahadevan, Sukhwinder Singh, Farhan Akhtar",
    image: "./static/images/Gallan Goodiyan.jpg",
    genre: "Party",
    source: "./static/songs/Gallan Goodiyan.mp3",
  },
  {
    id: 6,
    name: "Kabira",
    artist: "Tochi Raina, Rekha Bhardwaj",
    image: "./static/images/Kabira.jpg",
    genre: "Folk",
    source: "./static/songs/Kabira.mp3",
  },
  {
    id: 7,
    name: "Ghungroo",
    artist: "Arijit Singh, Shilpa Rao",
    image: "./static/images/Ghungroo.jpg",
    genre: "Dance",
    source: "./static/songs/Ghungroo.mp3",
  },
  {
    id: 8,
    name: "Bekhayali",
    artist: "Sachet Tandon",
    image: "./static/images/Bekhayali.jpg",
    genre: "Romantic",
    source: "./static/songs/Bekhayali.mp3",
  },
  {
    id: 9,
    name: "Dil Dhadakne Do",
    artist: "Priyanka Chopra, Farhan Akhtar",
    image: "./static/images/Dil Dhadakne Do.jpg",
    genre: "Pop",
    source: "./static/songs/Dil Dhadakne Do.mp3",
  },
  {
    id: 10,
    name: "Makhna",
    artist: "Tanishk Bagchi, Yasser Desai, Asees Kaur",
    image: "./static/images/Makhna.jpg",
    genre: "Pop",
    source: "./static/songs/Makhna.mp3",
  },
  {
    id: 11,
    name: "Lamborghini",
    artist: "Neha Kakkar, Jassie Gill",
    image: "./static/images/Lamborghini.jpg",
    genre: "Party",
    source: "./static/songs/Lamborghini.mp3",
  },
  {
    id: 12,
    name: "Phir Le Aya Dil",
    artist: "Arijit Singh",
    image: "./static/images/Phir Le Aya Dil.jpg",
    genre: "Ghazal",
    source: "./static/songs/Phir Le Aya Dil.mp3",
  },
  {
    id: 13,
    name: "Balam Pichkari",
    artist: "Vishal Dadlani, Shalmali Kholgade",
    image: "./static/images/Balam Pichkari.jpg",
    genre: "Festive",
    source: "./static/songs/Balam Pichkari.mp3",
  },
  {
    id: 14,
    name: "Jai Ho",
    artist: "A.R. Rahman, Sukhwinder Singh",
    image: "./static/images/Jai Ho.jpg",
    genre: "Inspirational",
    source: "./static/songs/Jai Ho.mp3",
  },
  {
    id: 15,
    name: "Ghagra",
    artist: "Vishal Dadlani, Rekha Bhardwaj",
    image: "./static/images/Ghagra.jpg",
    genre: "Dance",
    source: "./static/songs/Ghagra.mp3",
  },
  {
    id: 16,
    name: "Tum Mile",
    artist: "Neeraj Shridhar",
    image: "./static/images/Tum Mile.jpg",
    genre: "Romantic",
    source: "./static/songs/Tum Mile.mp3",
  },
  {
    id: 17,
    name: "Subhanallah",
    artist: "Sreeram, Shilpa Rao",
    image: "./static/images/Subhanallah.jpg",
    genre: "Romantic",
    source: "./static/songs/Subhanallah.mp3",
  },
  {
    id: 18,
    name: "Rockstar",
    artist: "A.R. Rahman, Mohit Chauhan",
    image: "./static/images/Rockstar.jpg",
    genre: "Rock",
    source: "./static/songs/Rockstar.mp3",
  },
  {
    id: 19,
    name: "Dhoom Machale",
    artist: "Vishal Dadlani",
    image: "./static/images/Dhoom Machale.jpg",
    genre: "Dance",
    source: "./static/songs/Dhoom Machale.mp3",
  },
  {
    id: 20,
    name: "London Thumakda",
    artist: "Neha Kakkar, Sonu Kakkar, Labh Janjua",
    image: "./static/images/London Thumakda.jpg",
    genre: "Party",
    source: "./static/songs/London Thumakda.mp3",
  },
];

// Toggle Theme
(function toggleTheme() {
  const toggleThemeBtnCont = document.getElementById("toggleThemeBtnCont");
  const themeToggleBtn = document.querySelectorAll(".themeToggleBtn");
  toggleThemeBtnCont.addEventListener("click", () => {
    changeVariables();
    themeToggleBtn.forEach((btn) => {
      btn.classList.toggle("active");
    });
  });
  function changeVariables() {
    const activeTheme = document.querySelector(".active");
    console.log(activeTheme);
    if (activeTheme.id === "themeToggleBtnDark") {
      document.documentElement.style.setProperty("--first-color", "#FAF0E6");

      document.documentElement.style.setProperty("--second-color", "#B9B4C7");

      document.documentElement.style.setProperty("--third-color", "#5C5470");

      document.documentElement.style.setProperty("--fourth-color", "#352F44");
    } else {
      document.documentElement.style.setProperty("--first-color", "#435334");

      document.documentElement.style.setProperty("--second-color", "#9EB384");

      document.documentElement.style.setProperty("--third-color", "#CEDEBD");

      document.documentElement.style.setProperty("--fourth-color", "#FAF1E4");
    }
  }
})();
// Accessing element where filtered songs will be displayed.
const filteredSongsEl = document.getElementById("filteredSongs");
// Creating all song elements
songData.forEach((song) => {
  const songEl = document.createElement("div");
  songEl.classList.add("song");
  songEl.setAttribute("data-name", `${song.name}`);
  songEl.setAttribute("data-genre", `${song.genre}`);
  songEl.setAttribute("data-artist", `${song.artist}`);
  songEl.setAttribute("data-image", `${song.image}`);
  songEl.textContent = `${song.name}`;
  filteredSongsEl.appendChild(songEl);
});
// Accessing all song elements
const allSongsNodeList = document.querySelectorAll(".song");

// set of all genre excluding All song option
const genreSet = new Set();
songData.forEach((song) => {
  genreSet.add(song.genre);
});

// Accessing select tag
const genreListEl = document.getElementById("genreList");

// Creating list to filter songs by genre
(function () {
  const allGenreSongs = document.createElement("option");
  allGenreSongs.textContent = "All Songs";
  genreListEl.appendChild(allGenreSongs);
  genreSet.forEach((genre) => {
    const genreEl = document.createElement("option");
    genreEl.textContent = genre;
    genreListEl.appendChild(genreEl);
  });
})();

// Adding event listener to filter songs
genreListEl.addEventListener("change", (event) => {
  const selectedGenreOption = event.target.selectedOptions[0];
  const selectedGenre = selectedGenreOption.value;
  showSongs(selectedGenre);
});

// function to show filtered songs
function showSongs(selectedGenre) {
  // Showing all songs initally
  allSongsNodeList.forEach((song) => {
    song.style.display = "block";
    song.classList.remove("filteredSongsByGenre");
  });
  if (selectedGenre === "All Songs") {
    // when selected genre is All songs then currently selected song will be first song of all songs
    renderCurrentSong(allSongsNodeList[0], false);
    prevBtnDisabler();
    nextBtnEnabler();
    return;
  }
  allSongsNodeList.forEach((song) => {
    if (song.getAttribute("data-genre") !== selectedGenre) {
      song.style.display = "none";
    } else {
      song.classList.add("filteredSongsByGenre");
    }
  });
  const filteredSongsByGenreNList = document.querySelectorAll(
    ".filteredSongsByGenre"
  );
  if (selectedGenre !== "All Songs") {
    // when selected genre is not All songs then currently selected song will be first song of filtered song list.
    renderCurrentSong(filteredSongsByGenreNList[0], false);
  }
  prevBtnDisabler();
  nextBtnEnabler();
}

// Accessing song image element
const songImgEl = document.getElementById("songImg");
// Accessing song name and artist
const songNameEl = document.getElementById("songName");
const songArtistEl = document.getElementById("songArtist");
const audioPlayerEl = document.getElementById("audioPlayer");
const audioSourceEl = document.getElementById("audioSource");
allSongsNodeList.forEach((song) => {
  song.addEventListener("click", (event) => {
    renderCurrentSong(song, true);
    prevBtnDisabler();
    nextBtnEnabler();
  });
});
// previous button disabler
function prevBtnDisabler() {
  prevSongBtnEl.disabled = true;
  const selectedGenre = genreListEl.selectedOptions[0].value;
  if (selectedGenre === "All Songs") {
    let indexOfcurrentSong = [...allSongsNodeList].findIndex((song) => {
      return song.classList.contains("currentSelectedSong");
    });
    if (indexOfcurrentSong > 0) {
      prevSongBtnEl.disabled = false;
    }
  } else {
    const filteredSongsByGenreNList = document.querySelectorAll(
      ".filteredSongsByGenre"
    );
    let indexOfcurrentSong = [...filteredSongsByGenreNList].findIndex(
      (song) => {
        return song.classList.contains("currentSelectedSong");
      }
    );
    if (indexOfcurrentSong > 0) {
      prevSongBtnEl.disabled = false;
    }
  }
}
// Next button Enabler function
function nextBtnEnabler() {
  nextSongBtnEl.disabled = true;
  const selectedGenre = genreListEl.selectedOptions[0].value;
  if (selectedGenre === "All Songs") {
    let indexOfcurrentSong = [...allSongsNodeList].findIndex((song) => {
      return song.classList.contains("currentSelectedSong");
    });
    if (indexOfcurrentSong < allSongsNodeList.length - 1) {
      nextSongBtnEl.disabled = false;
    }
  } else {
    const filteredSongsByGenreNList = document.querySelectorAll(
      ".filteredSongsByGenre"
    );
    let indexOfcurrentSong = [...filteredSongsByGenreNList].findIndex(
      (song) => {
        return song.classList.contains("currentSelectedSong");
      }
    );
    if (indexOfcurrentSong < filteredSongsByGenreNList.length - 1) {
      nextSongBtnEl.disabled = false;
    }
  }
}
// Render current song
function renderCurrentSong(song, playSong) {
  allSongsNodeList.forEach((song) => {
    song.classList.remove("currentSelectedSong");
  });
  song.classList.add("currentSelectedSong");
  songImgEl.src = `${song.getAttribute("data-image")}`;
  songNameEl.textContent = `${song.getAttribute("data-name")}`;
  songArtistEl.textContent = `${song.getAttribute("data-Artist")}`;
  songData.forEach((songObj) => {
    if (songObj.name === `${song.getAttribute("data-name")}`) {
      audioSourceEl.src = `${songObj.source}`;
      audioPlayerEl.load();
      if (playSong) {
        audioPlayerEl.play();
      }
    }
  });
}

// By Default when no genre is selected first song of all songs list to be displayed
if (allSongsNodeList.length > 0) {
  renderCurrentSong(allSongsNodeList[0], false);
}
const currentSelectedSongEl = document.getElementsByClassName(
  "currentSelectedSong"
);

const prevSongBtnEl = document.getElementById("prevSongBtn");
prevSongBtnEl.disabled = true;
const nextSongBtnEl = document.getElementById("nextSongBtn");
prevSongBtnEl.addEventListener("click", (event) => {
  playPrevSong();
  nextBtnEnabler();
});
function playPrevSong() {
  const selectedGenre = genreListEl.selectedOptions[0].value;
  if (selectedGenre === "All Songs") {
    let indexOfcurrentSong = [...allSongsNodeList].findIndex((song) => {
      return song.classList.contains("currentSelectedSong");
    });
    if (indexOfcurrentSong > 0) {
      renderCurrentSong(allSongsNodeList[--indexOfcurrentSong], true);
    }
    if (indexOfcurrentSong < 1) {
      prevSongBtnEl.disabled = true;
    }
  } else {
    const filteredSongsByGenreNList = document.querySelectorAll(
      ".filteredSongsByGenre"
    );
    let indexOfcurrentSong = [...filteredSongsByGenreNList].findIndex(
      (song) => {
        return song.classList.contains("currentSelectedSong");
      }
    );
    if (indexOfcurrentSong > 0) {
      renderCurrentSong(filteredSongsByGenreNList[--indexOfcurrentSong], true);
    }
  }
}

nextSongBtnEl.addEventListener("click", () => {
  playNextSong();
  prevBtnDisabler();
});
function playNextSong() {
  const selectedGenre = genreListEl.selectedOptions[0].value;
  if (selectedGenre === "All Songs") {
    let indexOfcurrentSong = [...allSongsNodeList].findIndex((song) => {
      return song.classList.contains("currentSelectedSong");
    });
    if (indexOfcurrentSong < allSongsNodeList.length - 1) {
      renderCurrentSong(allSongsNodeList[++indexOfcurrentSong], true);
    }
    if (indexOfcurrentSong >= allSongsNodeList.length - 1) {
      nextSongBtnEl.disabled = true;
    }
  } else {
    const filteredSongsByGenreNList = document.querySelectorAll(
      ".filteredSongsByGenre"
    );
    let indexOfcurrentSong = [...filteredSongsByGenreNList].findIndex(
      (song) => {
        return song.classList.contains("currentSelectedSong");
      }
    );
    if (indexOfcurrentSong < filteredSongsByGenreNList.length - 1) {
      renderCurrentSong(filteredSongsByGenreNList[++indexOfcurrentSong], true);
    }
    if (indexOfcurrentSong >= filteredSongsByGenreNList.length - 1) {
      nextSongBtnEl.disabled = true;
    }
  }
}

// All playlist class
class AllPlaylists {
  constructor(playlistName) {
    this.playlistName = playlistName;
    this.songs = [];
  }
  addSongToPlist(song) {
    this.songs.push(song);
  }
  removeSongFromPlist(song) {
    this.songs.splice(song, 1);
  }
}

const createPlistFormEl = document.getElementById("createPlistForm");
const inputPlistNameEl = document.getElementById("inputPlistName");
const createPlistBtnEl = document.getElementById("inputPlistName");
const allPlistListEl = document.getElementById("allPlistList");
createPlistFormEl.addEventListener("submit", (event) => {
  event.preventDefault();
  // createPlaylist();
  createPlistObj();
});
const allPlistArray = [];
function createPlistObj() {
  const plistName = inputPlistNameEl.value.trim();
  if (allPlistArray.length > 0 && plistName !== "") {
    const plistExist = allPlistArray.find((playlist) => {
      return playlist.playlistName === plistName;
    });
    if (!plistExist) {
      const newPlistObj = new AllPlaylists(plistName);
      allPlistArray.push(newPlistObj);
      inputPlistNameEl.value = "";
      createPlaylist(plistName);
    } else {
      alert("Please enter an unique playlist name");
    }
  } else if (plistName !== "") {
    const newPlistObj = new AllPlaylists(plistName);
    allPlistArray.push(newPlistObj);
    inputPlistNameEl.value = "";
    createPlaylist(plistName);
  } else {
    alert("Please enter an unique playlist name");
  }
}

function createPlaylist(plistName) {
  const newPlist = document.createElement("div");
  newPlist.classList.add("playlist");
  const playlistNodeList = document.querySelectorAll(".playlist");
  if (playlistNodeList.length <= 0) {
    newPlist.textContent = plistName;
    newPlist.classList.add("currentSelectedPlist");
    allPlistListEl.appendChild(newPlist);
  } else if (playlistNodeList.length > 0) {
    newPlist.textContent = plistName;
    allPlistListEl.appendChild(newPlist);
  }
  {
    const playlistNodeList = document.querySelectorAll(".playlist");
    playlistNodeList.forEach((playlist) => {
      playlist.addEventListener("click", (event) => {
        // initially removing currentSelectedPlist class from all playlists
        playlistNodeList.forEach((playlist) => {
          playlist.classList.remove("currentSelectedPlist");
        });
        playlist.classList.add("currentSelectedPlist");
      });
    });
  }
  renderPlaylistSong();
}

function renderPlaylistSong() {
  const playlistNodeList = document.querySelectorAll(".playlist");
  playlistNodeList.forEach((playlist) => {
    playlist.addEventListener("click", () => {
      const plistCurrSec = document.querySelectorAll(".plistCurrSec");
      const currentSelectedPlist = document.querySelector(
        ".currentSelectedPlist"
      );
      const newPlistId = currentSelectedPlist.textContent.replace(/\s/, "");
      const selectedPlistCurrSec = document.getElementById(newPlistId);
      plistCurrSec.forEach((plist) => {
        plist.style.display = "none";
      });
      if (selectedPlistCurrSec) {
        selectedPlistCurrSec.style.display = "flex";
      }
    });
  });
}

const addToPlistBtnEl = document.getElementById("addToPlistBtn");
const plistSongContEl = document.getElementById("plistSongCont");
addToPlistBtnEl.addEventListener("click", () => {
  createPlaylistSong();
  renderPlaylistSong();
});

function createPlaylistSong() {
  const currentSelectedSong = document.querySelector(".currentSelectedSong");
  const currentSelectedPlist = document.querySelector(".currentSelectedPlist");
  const songName = currentSelectedSong.textContent;
  // if there is no playlist with id newPlistId in current playlist section then create new playlist for current playlist section
  if (currentSelectedPlist) {
    const newPlistId = currentSelectedPlist.textContent.replace(/\s/, "");
    if (!document.getElementById(newPlistId)) {
      const newPlistInCurrentPlistSec = document.createElement("div");
      newPlistInCurrentPlistSec.classList.add(
        "plistCurrSec",
        "displayFlex",
        "flexColumn"
      );
      newPlistInCurrentPlistSec.style.gap = "1rem";
      newPlistInCurrentPlistSec.id = newPlistId;
      const clonedSong = currentSelectedSong.cloneNode(true);
      clonedSong.classList.remove("currentSelectedSong");
      newPlistInCurrentPlistSec.appendChild(clonedSong);
      plistSongContEl.appendChild(newPlistInCurrentPlistSec);
    }
    // if the playlist already exist in the current playlist section than add song in it if the song already does not exist and if song exist in the playlist no action needed.
    else {
      const playlist = document.getElementById(newPlistId);
      const songExist = Array.from(playlist.children).find((song) => {
        return song.textContent === songName;
      });
      if (!songExist) {
        const clonedSong = currentSelectedSong.cloneNode(true);
        clonedSong.classList.remove("currentSelectedSong");
        document.getElementById(newPlistId).appendChild(clonedSong);
      }
    }
    const songObjFromSongData = songData.find((song) => {
      return song.name === currentSelectedSong.textContent;
    });

    const plistObjFromAllPlistArr = allPlistArray.find((plist) => {
      return plist.playlistName === currentSelectedPlist.textContent;
    });
  }
}
