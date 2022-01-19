import styles from './Coin.module.scss'

export function Coin({ name, price, icon }) {


    return (
        <div className={styles.card}>

            <h3>{name}</h3>
            <h3>Price: {price.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
            })}</h3>
            <img src={icon} alt="coin icon" />

        </div>
    )

}