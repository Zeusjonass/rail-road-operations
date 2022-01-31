import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import { List, arrayMove } from "react-movable";
import { getDestinations } from "../api/TrainService";
import { updateDestination } from "../api/TrainService";


const DestinationsBox = () => {
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
    const response = await getDestinations();
    const data = response.data;
    setResult(data);
    setLoading(false);
  };

  const updatePriorities = () => {
    for (var i = 0; i < result.length; i++) {
        result[i].priority = i + 1;
        updateDestination(result[i], result[i].name, result[i].priority);
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

export default DestinationsBox;
