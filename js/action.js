<<<<<<< HEAD
(function () {

    //array of colors to demonstrate the background filling effect
    var colors = ["#d35400","#c0392b","#2980b9","#f39c12","#34495e","#3498db"];

    //select random color from the color array
    var items = Math.floor(Math.random() * colors.length);
    var color = colors.splice(items, 1);

    //set a random color on document load
    $(".green input[type='checkbox']:checked + label span").css({"background-color":color});
    $(".green input[type='radio']:checked + label span").css({"background-color":color});

    //on click switch between background colors
    $(".green .checkbox").on("click", function(){
        if($(".green input[type='checkbox']").is(":checked")){
            $(".green input[type='checkbox']:checked + label span").css({"background-color":"#ecf0f1"});
        }else{
            $(".green input[type='checkbox'] + label span").css({"background-color":color});
        }
    });

});
=======
var hidden = false;
function action() {
  hidden = !hidden;
  if (hidden) {
    document.getElementById("menu").style.visibility = "hidden";
  } else {
    document.getElementById("menu").style.visibility = "visible";
  }
}
$(function () {
  //array of colors to demonstrate the background filling effect
  var colors = [
    "#d35400",
    "#c0392b",
    "#2980b9",
    "#f39c12",
    "#34495e",
    "#3498db",
  ];

  //select random color from the color array
  var items = Math.floor(Math.random() * colors.length);
  var color = colors.splice(items, 1);

  //set a random color on document load
  $(".green input[type='checkbox']:checked + label span").css({
    "background-color": color,
  });
  $(".green input[type='radio']:checked + label span").css({
    "background-color": color,
  });

  //on click switch between background colors
  $(".green .checkbox").on("click", function () {
    if ($(".green input[type='checkbox']").is(":checked")) {
      $(".green input[type='checkbox']:checked + label span").css({
        "background-color": "#ecf0f1",
      });
    } else {
      $(".green input[type='checkbox'] + label span").css({
        "background-color": color,
      });
    }
  });
});
// console.clear();
// var radiobutton = new Nexus.RadioButton("#switch", {
//   size: [50, 50],
//   numberOfButtons: 1,
//   active: -1,
// });

// var dial = new Nexus.Dial("#tempo", {
//   size: [50, 50],
//   interaction: "vertical",
//   mode: "absolute",
//   min: 70,
//   max: 250,
//   step: 1,
//   value: 128,
// });
// var keys1 = new Tone.Players(
//   {
//     A0:
//       "https://res.cloudinary.com/degnified/video/upload/v1567497320/guitarC4_skynoz.[mp3|ogg]",
//     "C#":
//       "https://res.cloudinary.com/degnified/video/upload/v1567497320/guitarC3_wg8daf.[mp3|ogg]",
//     E:
//       "https://res.cloudinary.com/degnified/video/upload/v1567497320/pianoC6_xppqwu.[mp3|ogg]",
//     "F#":
//       "https://res.cloudinary.com/degnified/video/upload/v1567497319/pianoC4_ns8e2d.[mp3|ogg]",
//   },
//   {
//     volume: -10,
//     fadeOut: "64n",
//   }
// );
// keys1.toMaster();
// var noteNames1 = ["F#", "E", "C#", "A0"];
// var loop1 = new Tone.Sequence(
//   function (time, col) {
//     var column = document.getElementById("seq1").currentColumn;
//     column.forEach(function (val, i) {
//       if (val) {
//         var vel = 127;
//         keys1.get(noteNames1[i]).start(time, 0, "16n", 0, vel);
//       }
//     });
//     Tone.Draw.schedule(function () {
//       document.getElementById("seq1").setAttribute("highlight", col);
//     }, time);
//   },
//   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
//   "16n"
// ).start(0);

// var keys2 = new Tone.Players(
//   {
//     A1:
//       "https://res.cloudinary.com/degnified/video/upload/v1567497319/pianoC2_rxrywm.[mp3|ogg]",
//     "C#4":
//       "https://res.cloudinary.com/degnified/video/upload/v1567497318/closedHiHat_pmmpvc.[mp3|ogg]",
//     E2:
//       "https://res.cloudinary.com/degnified/video/upload/v1567497320/openHiHat_w8hjym.[mp3|ogg]",
//     "F#2":
//       "https://res.cloudinary.com/degnified/video/upload/v1567497320/tom_kqfs7i.[mp3|ogg]",
//   },
//   {
//     volume: -10,
//     fadeOut: "64n",
//   }
// );
// keys2.toMaster();
// var noteNames2 = ["F#2", "E2", "C#4", "A1"];
// var loop2 = new Tone.Sequence(
//   function (time, col) {
//     var column = document.getElementById("seq2").currentColumn;
//     column.forEach(function (val, i) {
//       if (val) {
//         var vel = 127;
//         keys2.get(noteNames2[i]).start(time, 0, "16n", 0, vel);
//       }
//     });
//     Tone.Draw.schedule(function () {
//       document.getElementById("seq2").setAttribute("highlight", col);
//     }, time);
//   },
//   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
//   "16n"
// ).start(0);
// var keys3 = new Tone.Players(
//   {
//     A2:
//       "https://res.cloudinary.com/degnified/video/upload/v1567497319/snare_gpy8hu.[mp3|ogg]",
//     "C#3":
//       "https://res.cloudinary.com/degnified/video/upload/v1567497318/drum_o6byub.[mp3|ogg]",
//     E3:
//       "https://res.cloudinary.com/degnified/video/upload/v1567497318/bass_snjpzv.[mp3|ogg]",
//     "F#3":
//       "https://res.cloudinary.com/degnified/video/upload/v1567497317/kick_wew9fm.[mp3|ogg]",
//   },
//   {
//     volume: -10,
//     fadeOut: "64n",
//   }
// );
// keys3.toMaster();
// var noteNames3 = ["F#3", "E3", "C#3", "A2"];
// var loop3 = new Tone.Sequence(
//   function (time, col) {
//     var column = document.getElementById("seq3").currentColumn;
//     column.forEach(function (val, i) {
//       if (val) {
//         var vel = 127;
//         keys3.get(noteNames3[i]).start(time, 0, "16n", 0, vel);
//       }
//     });
//     Tone.Draw.schedule(function () {
//       document.getElementById("seq3").setAttribute("highlight", col);
//     }, time);
//   },
//   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
//   "16n"
// ).start(0);
// radiobutton.on("change", function (v) {
//   if (v == 0) {
//     Tone.Transport.start();
//     $("#playState").text("Pause");
//   } else if (v == -1) {
//     Tone.Transport.stop();
//     $("#playState").text("Play");
//   }
// });
// dial.on("change", function (v) {
//   Tone.Transport.bpm.value = v;
//   $("#bpmValue").text("BPM : " + v);
// });
// $("#save").click(function () {
//   var audio = document.querySelector("audio");
//   var chunks = [];
//   var audioCtx = Tone.context;
//   var destination = audioCtx.createMediaStreamDestination();
//   var recorder = new MediaRecorder(destination.stream);
//   var canRecord = MediaRecorder.isTypeSupported("audio/webm;codecs=opus");
//   console.log(canRecord);
//   keys1.connect(destination);
//   keys1.toMaster();
//   Tone.Transport.stop();
//   var now = Tone.now();
//   Tone.Transport.start(now);
//   recorder.start();
//   recorder.ondataavailable = (evt) => chunks.push(evt.data);
//   console.log(chunks);
//   recorder.stop();
//   recorder.onstop = (evt) => {
//     var blob = new Blob(chunks, {
//       type: "audio/ogg; codecs=opus",
//     });
//     console.log(blob);
//     audio.src = URL.createObjectURL(blob);
//   };
// });
>>>>>>> 3cbf0d13700a29ca12bf0c5c05f63a14803f74ed
