window.onload = () => {

  const channel = new BroadcastChannel('kanal1');

  // genel mesajlari dinle
  channel.addEventListener('message', message => {
    if (message.data.action == 'theme') {
      const body = document.getElementsByTagName('body')[0]
      body.className = message.data.value;
    }
  })


  btn.addEventListener('click', e => {
    const body = document.getElementsByTagName('body')[0]
    body.className = body.className == 'light' ? 'dark' : 'light';

    // mesaj gonder
    channel.postMessage({ action: 'theme', value: body.className })
  })
}