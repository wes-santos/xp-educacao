import styles from "./List.module.css";
import ListItem from "./ListItem";

function List({ listTitle, listItems, children }) {
    if (children) {
        return (
            <>
                <h2 className={styles.title}>{listTitle}</h2>
                {children}
            </>
        );
    }

    return (
        <>
            <h2 className={styles.title}>{listTitle}</h2>
            <ol>
                {listItems.map((x, y) => {
                    return <ListItem item={x} index={y} />
                })}
            </ol>
        </>
    );
}

export default List;