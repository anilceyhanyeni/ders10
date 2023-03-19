import C1 from "./C1"

const App = ()=> {

    console.log("App çalıştı.")

    function selamVer() {
        alert("Hey! Ben App!")
    }

    return (
        <>
            <C1 deger={1} arttirim={1} selamVer={selamVer} />
            <C1 deger={2} arttirim={2} selamVer={selamVer} />
            <C1 deger={0} arttirim={5} selamVer={selamVer} />
        </>
    )
}


export default App