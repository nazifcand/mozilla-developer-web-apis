window.onload = () => {

  btn.addEventListener('click', e => {
    if (document.pictureInPictureElement) {
      document.exitPictureInPicture()
      return;
    };
    video.requestPictureInPicture()
  })

}