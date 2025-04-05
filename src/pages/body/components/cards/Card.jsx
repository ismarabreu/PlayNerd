
import "./Card.css"

export const Card = () => {
    return (
        <div className="card">
            <div className="thumbnail">
                <a href="#"><img src="https://animeflix.com.br/wp-content/uploads/2025/03/Solo-leveling-6-696x392.jpg" alt="" /></a>
            </div>

            <div className="info-contents">
                <h3 className="title">
                 <a href="">Solo Leveling chegando ao final da 2º temporada</a>  
                </h3>
                <p className="description">Pros ansiosos de plantão, temporada está chegando ao final</p>
                 <a href="#" className="autor">Ismar Abreu</a>
            </div>
        </div>
    );
};