function clearContent() {
  $('#gameContent').hide();
  $('#libraryContent').hide();
  $('#skillContent').hide();
  $('#lifeContent').hide();
  $('#mainContent').hide();
}

// click profile image -> back to the main content
$('.profileImg').click(() => {
  clearContent();
  $('#mainContent').fadeIn();
} )

// clear all contents -> only show the main content
clearContent()
$('#mainContent').fadeIn();

// show the game content
$('#gameID').click(() => {
  clearContent();
  $('#gameContent').fadeIn();
} )

// show the library content
$('#libraryID').click(() => {
  clearContent()
  $('#libraryContent').fadeIn();
} )

// show the skill content
$('#skillID').click(() => {
  clearContent()
  $('#skillContent').fadeIn();
} )

// show the life content
$('#lifeID').click(() => {
  clearContent()
  $('#lifeContent').fadeIn();
} )



