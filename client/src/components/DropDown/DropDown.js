import React, { useState } from 'react';
function Dropdown({ ticketStatus }) {
    // Array of objects containing our fruit data
    let statuses = [
        { label: "Open", value: "Open" },
        { label: "Closed", value: "Closed" },
        { label: "Pending", value: "Pending" }
    ]
    
    let [status, setStatus] = useState(ticketStatus)
   
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
                {/* Mapping through each status object in our fruits array
          and returning an option element with the appropriate attributes / values.
         */}
                {statuses.map((status) => <option value={status.value}>{status.label}</option>)}
            </select>
        </div>
    );
}
export default Dropdown;