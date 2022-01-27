import React, { useState, useEffect } from "react";
import "../styles/App.css";
import { getDestinations } from "../api/ReceiverService";
import {
  addIdToJSONArray,
  addPriorityToJSONArray,
} from "../functions/functions";
import { DataGrid, GridColumns } from "@mui/x-data-grid";
import VerticalTable from "./verticalTable";


const ReceiverBox = () => {
  const [result, setResult] = useState<any>(null);

  const columns: GridColumns = [
    {
      field: "priority",
      headerName: "PRIORITY",
      headerAlign: "center",
      editable: true,
    },
    {
      field: "name",
      headerName: "NAME",
      headerAlign: "center",
      editable: false,
    },
  ];
  useEffect(() => {
    const fetchReceiver = async () => {
      const response = await getDestinations();
      const data = response.data;
      addIdToJSONArray(data);
      addPriorityToJSONArray(data);
      // console.log(data);
      setResult(data);
    };
    fetchReceiver().catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1>react-list-drag-and-drop</h1>
      <div className="examples">
        <VerticalTable />
      </div>
    </div>
  );
};
export default ReceiverBox;
