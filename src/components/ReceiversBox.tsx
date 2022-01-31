import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import { List, arrayMove } from "react-movable";
import { getReceivers } from "../api/ReceiverService";
import { updateReceiver } from "../api/ReceiverService";


const ReceiversBox = () => {
  const [result, setResult] = useState<any>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {  
    if(loading){
        fetchTrain().catch((error) => console.log(error));
    }
    else{
        updatePriorities()
    }
  }, [loading, result]);

  const fetchTrain = async () => {
    const response = await getReceivers();
    const data = response.data;
    setResult(data);
    setLoading(false);
  };

  const updatePriorities = () => {
    for (var i = 0; i < result.length; i++) {
        result[i].priority = i + 1;
        updateReceiver(result[i], result[i].name, result[i].priority);
    }
  }

  return (
    <div>
        {!loading ?
            <List
                values={result.map(a => a.name)}
                onChange={({ oldIndex, newIndex }) =>
                    setResult(arrayMove(result, oldIndex, newIndex))
                }
                renderList={({ children, props }) => <ul {...props}>{children}</ul>}
                renderItem={({ value, props }) => <li {...props}>{value}</li>}
            />
            : null
        }
    </div>
  );
}

export default ReceiversBox;
