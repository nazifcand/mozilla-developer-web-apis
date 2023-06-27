window.onload = () => {

  const btn = document.querySelector('#btn')
  const resultText = document.querySelector('#result')


  btn.addEventListener('click', e => {

    // not supported
    if (!window.EyeDropper) {
      resultText.innerHTML = 'DESTEKLEMIYOR!'
      return;
    }

    const dropper = new EyeDropper()

    dropper
      .open()
      .then(result => {
        resultText.innerHTML = result.sRGBHex;
        resultText.style.backgroundColor = result.sRGBHex;
      })

  })

}