import React, { useState, useEffect } from "react";
import "../styles/App.css";
import { getDestinations } from "../api/TrainService";
import { DataGrid, GridColumns, GridEditRowsModel } from "@mui/x-data-grid";

const TrainBox = () => {
  const [result, setResult] = useState<any>(null);

  const [editRowsModel, setEditRowsModel] = React.useState({});

  const handleEditRowsModelChange = React.useCallback(
    (model: GridEditRowsModel) => {
      console.log(model);
      setEditRowsModel(model);
    },
    []
  );

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
    const fetchTrain = async () => {
      const response = await getDestinations();
      const data = response.data;
      setResult(data);
    };
    fetchTrain().catch((error) => console.log(error));
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
              getRowId={(row) => row.name}
              columns={columns}
              pageSize={3}
              rowsPerPageOptions={[3]}
              disableSelectionOnClick
              editMode="row"
            />
          </div>
        </div>
      ) : (
        "Loading..."
      )}
    </>
  );
};
export default TrainBox;
