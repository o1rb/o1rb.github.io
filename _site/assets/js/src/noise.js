function noise() {
  requestAnimationFrame(noise);
  var idata = context.getImageData(0, 0, width, height);
  for (var i = 0; i < idata.data.length; i += 4) {
    idata.data[i] = idata.data[i + 1] = idata.data[i + 2] = Math.floor(Math.random() * 255);
    idata.data[i + 3] = 255;
  }
  bcontext.putImageData(idata, 0, 0);
}
