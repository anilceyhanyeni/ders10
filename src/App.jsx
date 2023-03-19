import { useState } from "react"
import Reklam from "./Reklam"

function App(ozellikler) {
    const [reklamAcik, reklamAcikGuncelle] = useState(ozellikler.reklamAcik)
    /*
    if( ozellikler.baslik === 1 ) {
        return (
            <h2>App 1</h2>
        )
    }


    if( ozellikler.baslik === 2 ) {
        return (
            <h2>App 2</h2>
        )
    }
    */

    function reklamAcKapa() {
        /*
        reklamAcikGuncelle( onceki => {
            if (onceki === true){
                return false
            }

            if(onceki === false) {
                return true
            }
        } )
        */

        reklamAcikGuncelle( onceki=>!onceki )
    }

    return (
        <>
            { ozellikler.baslik === 1 && <h2>App 1 <button onClick={reklamAcKapa}>Reklam Aç/Kapa</button>  </h2>  }
            { ozellikler.baslik === 2 && <h2>App 2 <button onClick={reklamAcKapa}>Reklam Aç/Kapa</button></h2>  }
            { reklamAcik === true && <Reklam /> }
        </>
    )
    
}

export default App