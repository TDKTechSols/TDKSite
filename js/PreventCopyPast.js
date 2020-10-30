$(document).ready(function () {
  var ctrlDown = false,
    ctrlKey = 17,
    cmdKey = 91,
    vKey = 86,
    cKey = 67;

  $(document)
    .keydown(function (e) {
      if (e.keyCode == ctrlKey || e.keyCode == cmdKey) ctrlDown = true;
    })
    .keyup(function (e) {
      if (e.keyCode == ctrlKey || e.keyCode == cmdKey) ctrlDown = false;
    });

  $(".no-copy-paste").keydown(function (e) {
    if (ctrlDown && (e.keyCode == vKey || e.keyCode == cKey)) return false;
  });
  $(".no-paste").keydown(function (e) {
    if (ctrlDown && e.keyCode == vKey) return false;
  });

  // Document Ctrl + C/V
  $(document).keydown(function (e) {
    if (ctrlDown && e.keyCode == cKey) console.log("Document catch Ctrl+C");
    if (ctrlDown && e.keyCode == vKey) console.log("Document catch Ctrl+V");
  });
});
