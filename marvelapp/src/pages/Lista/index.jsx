import { useEffect, useState } from "react";
import Card from "../../components/Card"
import style from "./lista.module.scss";
import axios from 'axios';
import md5 from 'md5';

export default function Lista() {

    const [heroes, setHeroes] = useState('');

    // Váriaveis iniciais
    const publicKey = process.env.REACT_APP_PUBLIC_KEY;
    const privateKey = process.env.REACT_APP_PRIVATE_KEY
    const ts = Date.now().toString();
    const hash = md5(ts + privateKey + publicKey);
    // Função que pega a lista de pergonagens com 
    const get_list = async () => {
        try {
            const response = await axios.get('https://gateway.marvel.com:443/v1/public/characters', {
                params: {
                    ts: ts,
                    apikey: publicKey,
                    hash: hash
                }
            })
            setHeroes(response.data.data.results)
            console.log(response.data.data.results)

        }
        catch (error) {
            console.error('Erro ao buscar personagens:', error);
            throw error;
        }
    }

    useEffect(() => {
        get_list();
    }, [])

    return (
        <div className={style.main} >

            {
                heroes.length > 0 ?
                    heroes.map((item) => {
                        return (
                            <Card
                                key={item.id}
                                nome={item.name}
                                hearted
                                img={`${item.thumbnail.path}.${item.thumbnail.extension}`}

                            />
                        )
                    })
                    :
                    <div>
                        <img
                            style={{ width: '100px', height: '100px' }}
                            alt="Wanda loading"
                            src="https://www.icegif.com/wp-content/uploads/2022/01/icegif-1715.gif"
                        // src="https://media.tenor.com/mmlF_mTw310AAAAi/doctor-strange-in-the-multiverse-of-madness-doctor-strange.gif"
                        />
                        <br />
                        <br />
                        Carregando ...
                    </div>
            }
        </div>
    )
}