import { useState } from "react"
import C1 from "./C1"

function App(ozellikler) {
    let [sayi, sayiGuncelle] = useState(0)

    console.log("App componenti render oldu!")

    let sayiArttır = ()=>{
        sayiGuncelle( onceki => onceki + 1  )
    }

    return (
        <>
            <p>Merhaba, ben APP1 {ozellikler.renk}</p>
            <p>Sayı: {sayi}  <button onClick={ sayiArttır }>Arttır</button>   </p>
            <C1 isimler={["Ahmet", "Esra"]} />
        </>
    )
}

export default App