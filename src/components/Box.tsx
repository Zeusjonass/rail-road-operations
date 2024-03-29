import { getDisplayName } from "@mui/utils";
import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import { List, arrayMove } from "react-movable";
import { getPriorizables, updatePriorizable } from "../api/CommonService";


const Box = (props) => {
    const displayName = props.displayName
    const [result, setResult] = useState<any>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (loading) {
            fetchTrain().catch((error) => console.log(error));
        }
        else {
            updatePriorities()
        }
    }, [loading, result]);

    const fetchTrain = async () => {
        console.log(props)
        const response = await getPriorizables(props.baseUrl)
        const data = response.data;
        setResult(data);
        setLoading(false);
    };

    const updatePriorities = () => {
        for (var i = 0; i < result.length; i++) {
            result[i].priority = i + 1;
            updatePriorizable(result[i], result[i].name, result[i].priority, props.baseUrl);
        }
    }

    return (
        <div
            style={{
                maxWidth: '300px',
                margin: '10px ',
                backgroundColor: '#F7F7F7',
                padding: '3em', display: 'inline-block'
            }}
        > <h3>{displayName}</h3>
            {!loading ?
                <List lockVertically
                    values={result.map(a => a.name)}
                    onChange={({ oldIndex, newIndex }) =>
                        setResult(arrayMove(result, oldIndex, newIndex))
                    }
                    renderList={({ children, props, isDragged }) => <ul {...props} style={{ padding: 0, cursor: isDragged ? 'grabbing' : undefined }}
                    >{children}</ul>}
                    renderItem={({ value, props, isDragged, isSelected }) => <li {...props}
                        style={{
                            ...props.style,
                            padding: '1.5em',
                            margin: '0.5em 0em',
                            listStyleType: 'none',
                            cursor: isDragged ? 'grabbing' : 'grab',
                            border: '2px solid #CCC',
                            boxShadow: '3px 3px #AAA',
                            color: '#333',
                            borderRadius: '5px',
                            fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif',
                            backgroundColor: isDragged || isSelected ? '#EEE' : '#FFF', width: 250
                        }}>{value}</li>}
                />
                : null
            }
        </div>
    );
}

export default Box;
