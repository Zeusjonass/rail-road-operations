
import React, { useState, useEffect, Component } from "react";
import Select from 'react-select';

const InputBox = () => {

    const [input, setInput] = useState([
        {
            "nameOfCar": "Car 1",
            "destination": "Houston",
            "receiver": "FedEx"
        },
        {
            "nameOfCar": "Car 2",
            "destination": "Chicago",
            "receiver": "UPS"
        },
    ]);
    const [newRow, setNewRow] = useState({
        nameOfCar: "",
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
        event.preventDefault();
        const addedRow = {
            nameOfCar: newRow.nameOfCar,
            destination: newRow.destination,
            receiver: newRow.receiver,
        };

        const newInput = [...input, addedRow];
        setInput(newInput);
    };

    const removeRow = (nameOfCar) => {
        const newInput = input.filter(function (row) {
            return row.nameOfCar !== nameOfCar;
        });
        setInput(newInput);
    };

    const handleAddFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newFormData = { ...newRow };
        newFormData[fieldName] = fieldValue;

        setNewRow(newFormData);
    };

    return (
        <>
            <div className="inputBox">
                <table>
                    <th>
                        <tr>
                            <td>Name of Car</td>
                            <td>Destination</td>
                            <td>Receiver</td>
                            <td></td>
                        </tr>
                    </th>
                    <tbody>
                        {input.map((row) => {
                            <tr>
                                <td>{row.nameOfCar}</td>
                                <td>{row.destination}</td>
                                <td>{row.receiver}</td>
                                <td><button onClick={() => { removeRow(row.nameOfCar) }}>Remove</button></td>
                            </tr>
                        })}
                        <tr>
                            <form onSubmit={addRow}>
                                <td>
                                    <input
                                        type="text"
                                        name="nameOfCar"
                                        required
                                        placeholder="Name Of Car"
                                        onChange={handleAddFormChange}
                                    />
                                </td>
                                <td>
                                    <Select options={destinations} onChange={handleAddFormChange} />
                                </td>
                                <td>
                                    <Select options={receivers} onChange={handleAddFormChange} />
                                </td>
                                <td><button type="submit">Add</button></td>
                            </form>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};
export default InputBox;