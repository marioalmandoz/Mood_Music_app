const video = document.getElementById("inputVideo");
const canvas = document.getElementById("overlay");

(async () => {
  const stream = await navigator.mediaDevices.getUserMedia({ video: {} });
  video.srcObject = stream;
})();

async function onPlay() {
  const MODEL_URL = "/public/models";

  await faceapi.loadSsdMobilenetv1Model(MODEL_URL);
  await faceapi.loadFaceLandmarkModel(MODEL_URL);
  await faceapi.loadFaceRecognitionModel(MODEL_URL);
  await faceapi.loadFaceExpressionModel(MODEL_URL);

  let fullFaceDescriptions = await faceapi
    .detectAllFaces(video)
    .withFaceLandmarks()
    .withFaceDescriptors()
    .withFaceExpressions();

  // console.log(fullFaceDescriptions[0]["expressions"]);

  let sortable = [];
  for (var expresion in fullFaceDescriptions[0]["expressions"]) {
    sortable.push([
      expresion,
      fullFaceDescriptions[0]["expressions"][expresion],
    ]);
  }
  sortable.sort(function (a, b) {
    //para ordenar de mayor a menor
    return b[1] - a[1];
  });
  //Esto imprime el mayor valor
  //console.log(sortable[0][0]);
  if (sortable[0][0] == "happy") {
    var feeling = sortable[0][0].toString();

    document.getElementById("webcam-text").textContent =
      "It seems you feel " + feeling + ". That's great!";
  } else if (sortable[0][0] == "neutral") {
    var feeling = sortable[0][0].toString();

    document.getElementById("webcam-text").textContent =
      "It seems you feel " + feeling + ". Let´s change your mood";
  } else if (sortable[0][0] == "surprised") {
    var feeling = sortable[0][0].toString();

    document.getElementById("webcam-text").textContent =
      "It seems you feel " + feeling + ". Why is that?";
  } else if (sortable[0][0] == "sad") {
    var feeling = sortable[0][0].toString();

    document.getElementById("webcam-text").textContent =
      "It seems you feel " + feeling + ". Do you want to feel better?";
  } else if (sortable[0][0] == "angry") {
    var feeling = sortable[0][0].toString();

    document.getElementById("webcam-text").textContent =
      "It seems you feel " + feeling + ". Let´s put pacefull music";
  } else if (sortable[0][0] == "disgusted") {
    var feeling = sortable[0][0].toString();

    document.getElementById("webcam-text").textContent =
      "It seems you feel " + feeling + ". Let´s feel better";
  } else if (sortable[0][0] == "fearful") {
    var feeling = sortable[0][0].toString();

    document.getElementById("webcam-text").textContent =
      "It seems you feel " + feeling + ". why are you scared?";
  }

  const dims = faceapi.matchDimensions(canvas, video, true);
  const resizedResults = faceapi.resizeResults(fullFaceDescriptions, dims);

  faceapi.draw.drawDetections(canvas, resizedResults);
  faceapi.draw.drawFaceLandmarks(canvas, resizedResults);
  faceapi.draw.drawFaceExpressions(canvas, resizedResults, 0.05);

  setTimeout(() => onPlay(), 100);
}
