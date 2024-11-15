import { useState } from "react";
import style from "./index.module.scss";
//IMGs
import HeartEmpty from "../../assets/icones/heart/Path Copy 2.png";

//
import { useNavigate } from "react-router-dom";

export default function Card({ key, nome, hearted, img, id, item, adicionarFavorito }) {

    const [favorite, setFavorite] = useState(false);

    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate(`/character/${id}`, { state: { item } });
    };

    return (
        <div
            className={style.card}
        >
            <img
                className={style.heroImg}
                src={img}

            />
            <div
                className={style.btnDiv}
            >
                <button
                    onClick={handleNavigation}
                >
                    <span>{nome}</span>
                </button>

                <button onClick={adicionarFavorito}>
                    <img
                        src={HeartEmpty} 
                    />
                </button>
            </div>
        </div>
    )
}