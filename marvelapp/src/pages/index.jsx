import { useState } from "react";
//OPÇÕES
import Lista from "./Lista";
import Favoritos from "./Favoritos";
//IMG
import Marvel from "../assets/logo/Group.png";
import MiniHero from "../assets/icones/heroi/noun_Superhero_2227044.png";
import ToggleOff from "../assets/toggle/Group 2@2x.png";
import ToggleOn from "../assets/toggle/Group 6@2x.png";
import Heart from "../assets/icones/heart/Path@2x.png"

//STYLE
import style from "./index.module.scss";




export default function MainPage() {
    const [page, setPage] = useState(1);
    const [toggleImg, setToggleImg] = useState(ToggleOff);

    return (
        <>
            <div className={style.header} >
                <img src={Marvel} alt="Logo da Marvel" />
                <h1>Explore o universo</h1>
                <p>
                    Mergulhe no domínio deslumbrante de todos os personagens
                    clássicos que você ama - e aqueles que você descobrirá em breve.
                </p>
                <div>
                    <input
                        placeholder="Procure por heróis"
                    />
                </div>
                <div className={style.bar} >
                    <div>
                        <span>Encontrados x herois</span>
                    </div>
                    <div>
                        <div>

                            <img
                                src={MiniHero}
                                alt="Desenho Super Herói"
                                style={{ height: "26px", width: "auto" }}
                            />
                            <span>Orderar de A/Z</span>
                            <button>
                                <img
                                    src={toggleImg}
                                    style={{ height: "40px", width: "auto" }}
                                    alt="Botão de troca"
                                />
                            </button>
                        </div>
                        <div>
                            <button >
                                <img
                                    src={Heart}
                                    alt="Desenho Coração"
                                    style={{ height: "26px", width: "auto" }}
                                />

                                <span>Somente favoritos</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {page === 1 ? <Lista /> : <Favoritos />}
        </>
    )
}