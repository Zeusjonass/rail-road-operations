
import React, { useState, useEffect, Component } from "react";
import Select from 'react-select';
import "../styles/InputBox.css";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from "@mui/material";

const InputBox = () => {

    const [input, setInput] = useState([
        {
            "name": "Car 1",
            "destination": "Houston",
            "receiver": "FedEx"
        },
        {
            "name": "Car 2",
            "destination": "Chicago",
            "receiver": "UPS"
        },
    ]);
    const [newRow, setNewRow] = useState({
        name: "",
        destination: "",
        receiver: ""
    });

    const destinations = [
        { value: 'Houston', label: 'Houston' },
        { value: 'Chicago', label: 'Chicago' },
        { value: 'LA', label: 'LA' }
    ]

    const receivers = [
        { value: 'FedEx', label: 'FedEx' },
        { value: 'UPS', label: 'UPS' },
        { value: 'DHL', label: 'DHL' }
    ]

    useEffect(() => {

    }, [input]);

    const addRow = (event) => {
        if (newRow.name !== "" && newRow.destination !== "" && newRow.receiver !== "" ) {
            //if(newRow.name no existe en input){
                event.preventDefault();
                const addedRow = {
                    name: newRow.name,
                    destination: newRow.destination,
                    receiver: newRow.receiver,
                };

                const newInput = [...input, addedRow];
                console.log(newInput);
                setInput(newInput);
            // }
            // else{
            //     alert('Este nombre de car ya existe papuu');
            // }
        }
        else{
            alert('Please fill all fields');
        }
    };

    const removeRow = (name) => {
        const newInput = input.filter(function (row) {
            return row.name !== name;
        });
        setInput(newInput);
    };

    const handleAddFormChange = (event) => {
        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newFormData = { ...newRow };
        newFormData[fieldName] = fieldValue;
        setNewRow(newFormData);
    };

    const handleSelectChange = (selectedOption, select) => {
        const newFormData = { ...newRow };
        newFormData[select] = selectedOption;
        setNewRow(newFormData);
      };

    const handleSort = () => {
        alert('Haz tu tarea Irvin');
    }

    return (
        <>
            <div className="inputBox">
                <TableContainer sx={{ margin: 5, }} component={Paper}>
                    <Table sx={{ minWidth: 650, }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">Name of Car</TableCell>
                                <TableCell align="center">Destination</TableCell>
                                <TableCell align="center">Receiver</TableCell>
                                <TableCell>
                                    <Button variant="contained" onClick={handleSort}>
                                        Sort
                                    </Button>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow
                                key="newRow"
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="center">
                                    <input
                                        type="text"
                                        name="name"
                                        id="nameOfCar"
                                        required
                                        placeholder="Name Of Car"
                                        onChange={handleAddFormChange}
                                    />
                                </TableCell>
                                <TableCell align="center">
                                    <Select options={destinations} 
                                        onChange={(v: any) => {
                                            handleSelectChange(v.value, "destination");
                                        }}
                                    />
                                </TableCell>
                                <TableCell align="center">
                                    <Select options={receivers} 
                                        onChange={(v: any) => {
                                            handleSelectChange(v.value, "receiver");
                                        }} 
                                    />
                                </TableCell>
                                <TableCell align="center">
                                    <button type="button" onClick={addRow}>Add</button>
                                </TableCell>
                            </TableRow>
                            {input.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell align="center">{row.name}</TableCell>
                                    <TableCell align="center">{row.destination}</TableCell>
                                    <TableCell align="center">{row.receiver}</TableCell>
                                    <TableCell align="center"><button onClick={() => { removeRow(row.name) }}>Remove</button></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </>
    );
};
export default InputBox;