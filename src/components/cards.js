import data from "./example.json";
import styles from './cards.module.css';
import axios from 'axios';


const Cards = ()=>{
    const filas = (element)=>{
        console.log(element)
        return (
            <div className={styles.cardsContainer}>
                <img src={element.picture} className={styles.picture} alt=""></img>
                <div className={styles.details}>
                    <p>{element.marvel_id}</p>
                    <p>Comic Title:{element.title.substring(0,5)}</p>
                    <p>Description:{element.description.substring(0,7)}</p>
                    <p>{element.stock_qty}</p>
                    <p>Price: {element.price}</p>
                    
                </div>   
            </div>
        
        );
    };
    
    return(
        <div className={styles.body}>
            {data.map((e)=> filas(e))}
            
        </div>
    );

};

    
export default Cards;   