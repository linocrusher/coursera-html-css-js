(function(){
  var speakWord = "Good Bye";
  var byeSpeaker = {
    speak: function() {
      console.log(speakWord + " " + this.name);
    }
  }
  window.byeSpeaker = byeSpeaker;
})();