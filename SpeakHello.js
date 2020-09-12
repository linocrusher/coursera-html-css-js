(function(){
  var speakWord = "Hello";
  var helloSpeaker = {
    speak: function() {
      console.log(speakWord + " " + this.name);
    }
  }
  window.helloSpeaker = helloSpeaker;
})();