var playlist = {"Phil Ochs" : "Dying of Thirst"}

function updatePlaylist(playlist,artistName,songTitle){
  return Object.assign({}, playlist, {["My Bloody Valentine"]:"Phil Ochs"})
}

functoin removeFromPlaylist(playlist,artistName){
  return delete playlist.["Phil Ochs"]
}