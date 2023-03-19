import Kisi from "./Kisi"

function App() {
    const kisiler = [
        { adSoyad: "Esra Yılmaz", foto: "https://randomuser.me/api/portraits/women/83.jpg", tel: "+90 535 456 87 98" },
        { adSoyad: "Ahmet Yılmaz", foto: "https://randomuser.me/api/portraits/men/41.jpg", tel: "+90 535 456 87 50" },
        { adSoyad: "Kaan Genç", foto: "https://randomuser.me/api/portraits/men/32.jpg", tel: "+90 535 456 87 20" }
    ]

    return (
        <section className="container">
            <h1>Adres Defteri</h1>

            <div className="row">
                {
                    kisiler.map((eleman) =>

                        <Kisi adSoyad={eleman.adSoyad} foto={eleman.foto} tel={eleman.tel} />

                    )
                }



            </div>
        </section>
    )
}

export default App