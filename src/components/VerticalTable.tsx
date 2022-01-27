import React, { useState, useEffect } from 'react';
import RLDD from "react-list-drag-and-drop/lib/RLDD";
import { Item, State } from '../types/ItemType';
import { getDestinations } from "../api/TrainService";

const VerticalTable = () => {
    const [result, setResult] = useState<any>(null);

    const handleRLDDChange = (reorderedItems: Array<Item>) => {
        // console.log('Example.handleRLDDChange');
        setState({ result: reorderedItems });
    };

    useEffect(() => {
        const fetchTrain = async () => {
            const response = await getDestinations();
            const data = response.data;
            setResult(data);
        };
        fetchTrain().catch((error) => console.log(error));
    }, []);

    return (
        <>
            <div className="example vertical">
                <RLDD
                    cssClasses="list-container"
                    items={result}
                    itemRenderer={itemRenderer}
                    onChange={handleRLDDChange}
                />
            </div>
        </>
    );
};

export default VerticalTable;