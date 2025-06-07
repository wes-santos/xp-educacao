import styles from "./Card.module.css"

function Card({ content, title }) {
    return (
        <div className={styles.cardContainer}>
            <div className="title">{title}</div>
            <div>{content}</div>
        </div>
    );
}

export default Card;
