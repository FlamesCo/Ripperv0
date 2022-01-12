
<html>
    <head>
        <script>
        document.addEventListener("DOMContentLoaded", function() {
// Make the class for audio
            class Audio {} //
            ##
            
var audio = document.createElement('audio');
audio.src =  input("Enter your audio here.");
audio.controls = true;
document.body.appendChild(audio);

audio.style.position = 'absolute';
audio.style.left = '50%';
audio.style.top = '50%';
audio.style.transform = 'translate(-50%, -50%)';

var generateMusic = document.createElement('button');
generateMusic.innerHTML = 'Generate Music';
generateMusic.style.position = 'absolute';
generateMusic.style.left = '50%';
generateMusic.style.top = '50%';
generateMusic.style.transform = 'translate(-50%, -50%)';
document.body.appendChild(generateMusic);

var loadMusic = document.createElement('button');
loadMusic.innerHTML = 'Load Music';
loadMusic.style.position = 'absolute';
loadMusic.style.left = '50%';
loadMusic.style.top = '50%';
loadMusic.style.transform = 'translate(-50%, -50%)';
document.body.appendChild(loadMusic);

var saveAsWav = document.createElement('button');
saveAsWav.innerHTML = 'Save as wav';
saveAsWav.style.position = 'absolute';
saveAsWav.style.left = '50%';
saveAsWav.style.top = '50%';
saveAsWav.style.transform = 'translate(-50%, -50%)';
document.body.appendChild(saveAsWav);

generateMusic.style.top = '100px';
loadMusic.style.top = '200px';
saveAsWav.style.top = '300px';

saveAsWav.style.top = '400px';

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

generateMusic.onclick = function() {
  var popup = document.createElement('div');
  popup.innerHTML = 'What two songs would you like to mashup?';
  document.body.appendChild(popup);
  popup.style.position = 'absolute';
  popup.style.left = '50%';
  popup.style.top = '50%';
  popup.style.transform = 'translate(-50%, -50%)';
}

var textbox = document.createElement('input');
textbox.type = 'text';
textbox.placeholder = 'Song 1';
textbox.style.position = 'absolute';
textbox.style.left = '50%';
textbox.style.top = '50%';
textbox.style.transform = 'translate(-50%, -50%)';
document.body.appendChild(textbox);

textbox.style.top = '400px';



textbox.style.top = '450px';

textbox.placeholder = 'Video Title';

var textbox2 = document.createElement('input');
textbox2.type = 'text';
textbox2.placeholder = 'Song 2';
textbox2.style.position = 'absolute';
textbox2.style.left = '50%';
textbox2.style.top = '50%';
textbox2.style.transform = 'translate(-50%, -50%)';
document.body.appendChild(textbox2);

textbox2.style.top = '450px';
textbox2.style.left = '100px';

var playlistLoader = document.createElement('button');
playlistLoader.innerHTML = 'Load Playlist';
playlistLoader.style.position = 'absolute';
playlistLoader.style.left = '50%';
playlistLoader.style.top = '50%';
playlistLoader.style.transform = 'translate(-50%, -50%)';
document.body.appendChild(playlistLoader);

playlistLoader.style.top = '500px';
playlistLoader.style.left = '50%';

var blackBox = document.createElement('div');
blackBox.style.backgroundColor = 'black';
blackBox.style.position = 'absolute';
blackBox.style.left = '50%';
blackBox.style.top = '50%';
blackBox.style.transform = 'translate(-50%, -50%)';
document.body.appendChild(blackBox);

var compiler = document.createElement('button');
compiler.innerHTML = 'Compile';
compiler.style.position = 'absolute';
compiler.style.left = '50%';
compiler.style.top = '50%';
compiler.style.transform = 'translate(-50%, -50%)';
document.body.appendChild(compiler);

compiler.style.top = '550px';
compiler.style.left = '50px';
// Make the popup class for popup var
            class Popup {} // 
            ##  //
            // Make the class for popup 
            popup
playlistLoader.onclick = function() {  popup = document.createElement('div');  
  popup.innerHTML = 'What artist would you like to remix?';
  document.body.appendChild(popup);
  popup.style.position = 'absolute';
  popup.style.left = '50%';
  popup.style.top = '50%';
  popup.style.transform = 'translate(-50%, -50%)';
}

var hqSilvaBot = document.createElement('div');
hqSilvaBot.innerHTML = 'HQ Silva Bot v0.1x';
hqSilvaBot.style.position = 'absolute';
hqSilvaBot.style.left = '50%';
hqSilvaBot.style.top = '50%';
hqSilvaBot.style.transform = 'translate(-50%, -50%)';
document.body.appendChild(hqSilvaBot);

hqSilvaBot.style.top = '600px';
hqSilvaBot.style.left = '50px'; 
</script>
    </head>
    <body style="margin: 0;">
        <div id="app"></div>
</html>