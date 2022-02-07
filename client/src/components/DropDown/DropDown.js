import React, { useState } from 'react';
function Dropdown({ ticketStatus }) {
    // Array of objects containing our fruit data
    let statuses = [
        { label: "Open", value: "Open" },
        { label: "Closed", value: "Closed" },
        { label: "Pending", value: "Pending" }
    ]
    // Using state to keep track of what the selected fruit is
    let [status, setStatus] = useState(ticketStatus)
    // Using this function to update the state of fruit
    // whenever a new option is selected from the dropdown
    let handleStatusChange = (e) => {
        setStatus(e.target.value)
    }
    return (
        <div className="App">
            {/* Displaying the value of fruit */}
            {status}
            <br />
            <select onChange={handleStatusChange}>
                <option value="⬇️ Select a Status ⬇️"> -- Select a status -- </option>
                {/* Mapping through each fruit object in our fruits array
          and returning an option element with the appropriate attributes / values.
         */}
                {statuses.map((status) => <option value={status.value}>{status.label}</option>)}
            </select>
        </div>
    );
}
export default Dropdown;