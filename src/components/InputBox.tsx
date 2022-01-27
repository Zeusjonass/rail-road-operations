
import React, { useState, useEffect, Component } from "react";
import Select from 'react-select';
import "../styles/InputBox.css";

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
            event.preventDefault();
            const addedRow = {
                name: newRow.name,
                destination: newRow.destination,
                receiver: newRow.receiver,
            };

            const newInput = [...input, addedRow];
            console.log(newInput);
            setInput(newInput);
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

    return (
        <>
            <div className="inputBox">
                <table className="inputTable">
                    <thead>
                        <tr>
                            <th>Name of Car</th>
                            <th>Destination</th>
                            <th>Receiver</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {input.map((row, index) => {
                            return (
                                <tr key={index}>
                                    <td>{row.name}</td>
                                    <td>{row.destination}</td>
                                    <td>{row.receiver}</td>
                                    <td><button onClick={() => { removeRow(row.name) }}>Remove</button></td>
                                </tr>
                            );
                        })}
                        <tr>
                            <td>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    placeholder="Name Of Car"
                                    onChange={handleAddFormChange}
                                />
                            </td>
                            <td>
                                <Select options={destinations} 
                                    onChange={(v: any) => {
                                        handleSelectChange(v.value, "destination");
                                    }}
                                />
                            </td>
                            <td>
                                <Select options={receivers} 
                                    onChange={(v: any) => {
                                        handleSelectChange(v.value, "receiver");
                                    }} 
                                />
                            </td>
                            <td>
                                <button type="button" onClick={addRow}>Add</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};
export default InputBox;