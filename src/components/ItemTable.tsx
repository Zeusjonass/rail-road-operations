import React, { useState } from "react";
import { Item } from '../types/ItemType';

const ItemTable = (props) => {
    const [item] = useState(props.item);
    const [index] = useState(props.index);
    return (
        <>
            <div className="item">
                <div className="icon">{item.icon}</div>
                <div className="details">
                    <p className="title">{item.title}</p>
                    <p className="body">{item.body}</p>
                </div>
                <div className="small">
                    item.id: {item.id} - index: {index}
                </div>
            </div>
        </>
    );
};
export default ItemTable;