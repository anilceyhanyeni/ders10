import { useState } from "react"

const C1 = (ozellikler) => {
    const [sayi, sayiGuncelle] = useState(ozellikler.deger)

    function arttir() {
        sayiGuncelle(onceki => onceki + ozellikler.arttirim)
    }

    console.log("C1 çalıştı")

    return (
        <p>
            Ben C1! Sayı: {sayi}
            <button onClick={arttir}>Arttır</button>
            <button onClick={ ozellikler.selamVer }>Appteki Fonksiyon</button>
        </p>
    )
}

export default C1