window.onload = () => {

  const toggle = async (e) => {
    if (document.fullscreenElement) {
      document.exitFullscreen()
      return
    };
    video.requestFullscreen();
  }

  window.addEventListener('keydown', e => {
    if (['f', 'Enter'].includes(e.key)) {
      toggle()
    }
  })

  btn.addEventListener('click', toggle)
}