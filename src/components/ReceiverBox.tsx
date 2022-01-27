import React, { useState, useEffect } from "react";
import "../styles/App.css";
import { getDestinations } from "../api/ReceiverService";
import {
  addIdToJSONArray,
  addPriorityToJSONArray,
} from "../functions/functions";
import { DataGrid, GridColumns } from "@mui/x-data-grid";

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
    <>
      {result && result.length > 0 ? (
        <div className="trainBox">
          <div className="table">
            <DataGrid
              sx={{
                boxShadow: 2,
                border: 2,
                borderColor: "primary.light",
                "& .MuiDataGrid-cell:hover": {
                  color: "primary.main",
                },
              }}
              rows={result}
              columns={columns}
              pageSize={3}
              rowsPerPageOptions={[3]}
              disableSelectionOnClick
              editMode="row"
              // onEditRowsModelChange={(params, event) => {
              //   console.log(params.row);
              // }}
              //   onEditRowsModelChange={handleEditRowsModelChange}
            />
          </div>
        </div>
      ) : (
        "Loading..."
      )}
    </>
  );
};
export default ReceiverBox;
