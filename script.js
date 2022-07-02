/**
 * An implementation of Speech to text procedure 
 * through a JS API Library that enable me to use
 * it for voice recognition purposes.
 */

// Declare a new Object from SpeechRecognition
// Which is used to convert Speech to Text
try {
  var SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  var recg = new SR();
}
catch(e) {
  console.error(e);
  $('.no-browser-support').show();
  $('.app').hide();
}
// Specifying the voice recognition language to be detected
recg.lang = "ar";

// Get the elements ID's from the HTML file
var Textbox = $('#transcript');
var instructions = $('#instructions');

// A variable to store the detected speech
var Content = '';

// A trigger that specifies the continuity of the voice recognition process
recg.continuous = true;

recg.onresult = function(event) {
  // the Param event is the speech recognition object which holds all the lines captured
  var cur = event.resultIndex;

  // Here it gets the transcript of what was said
  var transcript = event.results[cur][0].transcript;

  // Store the transcript in the content variable to show it in at textbox in HTML
  Content += transcript;
  Textbox.text(Content);
};

// Specify what instructions will happen when SpeechRecognition Object starts
recg.onstart = function() {
  instructions.text('Voice recognition is ON.');
}

// When an error occurs with SpeechRecognition Object then a message will shows up to the user
recg.onerror = function(event) {
  if(event.error == 'no-speech') {
    instructions.text('Try again.');
  }
}

// Starts the SpeechRecognition Object when the Start button clicked 
$('#start-btn').on('click', function(e) {
  if (Content.length) {
    Content += ' ';
  }
  recg.start();
});

// Stops the SpeechRecognition Object and clears recent output when the Stop button clicked
$('#stop-btn').on('click', function(e) {
  instructions.text('Voice recognition stopped.')
  Content = '';
  Textbox.text('');
  recg.stop();
});