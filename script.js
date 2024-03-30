// Search Button Clicked
function search() {
        document.getElementById("search").value= "not yet working";
}

// Clear Button Clicked
function clearSearch() {
    document.getElementById("search").value = "";
}

// Upload Button Clicked
function openFileDialog() {
    document.getElementById('uploadFileInput').click();
  }
  
  document.getElementById('uploadFileInput').addEventListener('change', function(event) {
    var file = event.target.files[0];
    if (file) {
      var fileName = file.name;
      if (file.type === 'text/plain') {
        readAsText(file);
      } else {
        alert('Only text files are supported.');
      }
    }
  });
  
  function readAsText(file) {
    var reader = new FileReader();
    reader.onload = function(event) {
      openInNewWindow(event.target.result);
    };
    reader.readAsText(file);
  }
  
  function openInNewWindow(text) {
    var newWindow = window.open("about:blank", "_blank");
    newWindow.document.write(text);
  }