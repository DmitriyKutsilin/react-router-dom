import {adidasModels, SneakerType} from "./Adidas";
import * as React from 'react';
import {useParams} from "react-router-dom";
import styles from './pages.module.css'
import {pumaModels} from "./Puma";

type SneakersModelsType = {
    [key: string]: SneakerType[]
}

const sneakersModels: SneakersModelsType = {
    adidas: adidasModels,
    puma: pumaModels,
}


export const Model = () => {
    const {brand, model, id} = useParams()
    // console.log(params)

    const currentModel = brand
        ? sneakersModels[brand].find(el => el.id === Number(id))
        : null

    return (
        <div className={styles.blockModel}>
            {
                currentModel
                    ? <>
                        <h3>{currentModel.model}</h3>
                        <h4>Collection {currentModel.collection}</h4>
                        <h4>Price {currentModel.price}</h4>
                        <img className={styles.imageModel}
                             src={currentModel.picture}
                             alt={currentModel.model}/>
                      </>
                    : <h2>No model found</h2>
            }
        </div>
    );
};