(function() {
  function generateTvStaticImage() {
    // generate a canvas that will contain the image
    var canvas = document.createElement('canvas');
    canvas.width = 100;
    canvas.height = 100;
    canvas.style.width = '100px';
    canvas.style.height = '100px';
    canvas.style.position = 'absolute';
    canvas.style.zIndex = -1;

    // get the context
    var ctx = canvas.getContext('2d');

    // draw random grayscale pixels
    for (var r = 0; r < 100; r++) {
      for (var c = 0; c < 100; c++) {
        var col = Math.floor(Math.random() * 255);
        ctx.fillStyle = `rgb(${col}, ${col}, ${col})`;
        ctx.fillRect(r, c, 1, 1);
      }
    }

    // add the canvas to the dom and get the image
    document.body.appendChild(canvas);
    var url = canvas.toDataURL();

    // remove the canvas
    canvas.remove();
    canvas = null;

    // return the encoded image
    return url;
  }

  function onLoad() {
    var style = document.createElement('style');
    style.innerHTML = `:root { --tv-static-url: url(${generateTvStaticImage()}); }`;
    document.head.appendChild(style);
  }

  window.addEventListener('load', onLoad);
})();
