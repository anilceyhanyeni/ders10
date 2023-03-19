function Kisi(ozellikler) {

    return (
        <div className="col-md-4">
            <img src={ozellikler.foto} alt="" />
            <p>{ozellikler.adSoyad}</p>
            <p>{ozellikler.tel}</p>
        </div>
    )
}

export default Kisi