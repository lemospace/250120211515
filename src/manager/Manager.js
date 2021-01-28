import img from "./1.png"
function Manager() {
    return (
        <div className='manager-container' >
            <div className='image'>
                <img src={img} />
            </div>
            <div className="info">
                <div className="name">
                    <p>Вероника Ростова</p>
                </div>
                <div className="position">
                    <p>Менеджер по продажам</p>
                </div>
                <div className="about">
                    <p>Подберу для вас самые лучшие предложения. Мои услуги абсолютно бесплатны</p>
                </div>
            </div>
        </div>
    );
}

export default Manager;