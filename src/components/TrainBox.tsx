import React, { useState, useEffect } from "react";
import "../App.css";
// import { getPeople } from "../api/TrainService";
//import { User } from "../types/UserType";
import { DataGrid, GridColumns } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";

const TrainBox = () => {
  // const [result, setResult] = useState<any>(null);
  // const columns: GridColumns = [
  //   {
  //     field: "id",
  //     headerName: "ID",
  //     headerAlign: "center",
  //     editable: true,
  //   },
  //   {
  //     field: "name",
  //     headerName: "Name",
  //     headerAlign: "center",
  //     editable: true,
  //   },
  //   {
  //     field: "age",
  //     headerName: "Age",
  //     headerAlign: "center",
  //     editable: true,
  //   },
  // ];
  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 50,
    },
    { field: "firstName", headerName: "First name", width: 100 },
    { field: "lastName", headerName: "Last name", width: 100 },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 100,
    },
  ];
  const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  ];
  // useEffect(() => {
  //   const fetchPerson = async () => {
  //     const response = await getPeople();
  //     setResult(response.data);
  //   };
  //   fetchPerson().catch((error) => console.log(error));
  // }, []);

  return (
    <>
      {/* {rows ? ( */}
      <div className="trainBox">
        <DataGrid
          sx={{
            boxShadow: 2,
            border: 2,
            borderColor: "primary.light",
            "& .MuiDataGrid-cell:hover": {
              color: "primary.main",
            },
          }}
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
          editMode="row"
        />
      </div>
      {/* ) : (
          "No database connection" */}
      {/* )} */}
    </>
  );
};
export default TrainBox;
