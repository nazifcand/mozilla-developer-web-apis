window.onload = () => {

  navigator
    .getBattery()
    .then(battery => {

      console.log(battery)
      console.log(`Şarj Oluyor mu? : ${battery.charging ? 'Evet' : 'Hayır'}`)
      console.log(`Pil Yüzdesi : ${(battery.level * 100).toFixed(0)}%`)
      console.log(`Tam dolum zamani : ${battery.chargingTime} saniye`);
      console.log(`Kalan Zaman : ${battery.dischargingTime} saniye`);

      battery.addEventListener('chargingchange', () => {
        console.log(`Şarj Oluyor mu? : ${battery.charging ? 'Evet' : 'Hayır'}`)
      })

      battery.addEventListener('levelchange', () => {
        console.log(`Pil Yüzdesi : ${(battery.level * 100).toFixed(0)}%`)
      })

      battery.addEventListener('chargingtimechange', () => {
        console.log(`Tam dolum zamani : ${battery.chargingTime} saniye`);
      })

      battery.addEventListener('ondischargingtimechange', () => {
        console.log(`Kalan Zaman : ${battery.dischargingTime} saniye`);
      })
    })

}