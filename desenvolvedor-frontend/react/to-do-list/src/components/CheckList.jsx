function CheckList({ listTitle, listItems, handleCheckChange, handleDeleteTask }) {
    // const handleCheckChange = (event) => {
    //     setListItems(
    //         listItems
    //             .tasks
    //             .map((x, _) => {
    //                 if (x.content === event.target.name) {
    //                     x.completed = event.target.checked;
    //                 }
    //                 return x;
    //             })
    //     )
    // }

    // const handleDeleteTask = (event) => {
    //     setListItems(listItems.tasks.filter(x => x.content !== event.target.name ))
    // }

    return (
        <>
            <h2>{listTitle}</h2>
            <ol>
                {listItems
                    .sort((x, y) => Number(x.completed) - Number(y.completed))
                    .map((x, y) => {
                        const color = y % 2 === 0 ? "white" : "gray";

                        return (
                            <div key={y} style={{ display: "flex", padding: "8px", backgroundColor: color }}>
                                <div style={{ flex: "1" }}>
                                    <input
                                        type="checkbox"
                                        name={x.content}
                                        onChange={() => handleCheckChange(y)}
                                        checked={x.completed}
                                    />
                                    <label
                                        htmlFor={x.content}
                                        style={{
                                            textDecoration: x.completed ? "line-through" : ""
                                        }}
                                    >
                                        {x.content}
                                    </label>
                                </div>
                                <button onClick={() => handleDeleteTask(y)}>Delete</button>
                            </div>
                        );
                    })
                }
            </ol>
        </>
    );
}

export default CheckList;