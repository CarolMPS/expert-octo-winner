import { useState } from "react";
import style from "./index.module.scss";
//IMGs
import HeartEmpty from "../../assets/icones/heart/Path Copy 2.png"

export default function Card({ key, nome, hearted, img }) {

    const [favorite, setFavorite] = useState(false);

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
                <button>
                    <span>{nome}</span>
                </button>

                <button>
                    <img
                    src={HeartEmpty}
                    />
                </button>
            </div>
        </div>
    )
}