$(document).ready(function() {  
  // $("h1").click(function() {
  //   alert("This is a header.");
  //   alert("I told you, THIS IS A HEADER!");
  // });

  // $("p").click(function() {
  //   alert("This is a paragraph.");
  // });

  // $("img").click(function() {
  //   alert("This is an image.");
  // });

  let eventListeners = ["h1", "p", "img"];
  eventListeners.forEach(function(listener) {
    $(listener).click(function() {
      let myElement;
      if (listener === "h1") {
        myElement = "header";
      } else if (listener === "p") {
        myElement = "paragraph";
      }
      else if (listener === "img") {
        myElement = "image";
      }
      alert("This is a " + myElement);
    });
  });

});