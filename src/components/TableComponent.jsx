import { useState, useEffect } from "react"
import { formatSize, formatTime, sortRows } from "../services/utils"

export default function TableComponent({ columns, rows }) {
    const [tableRows, setTableRows] = useState(rows);
    const [sortBy, setSortBy] = useState(null);
``
    const [toggle, setToggle] = useState(false);
    const [rowData, setRowData] = useState({});
    
    // Update tableRows when rows prop changes
    useEffect(() => {
        if (sortBy) {
            setTableRows([...sortRows(rows.slice(), sortBy)]);
        } else {
            setTableRows([...rows]);
        }
    }, [rows, sortBy]);

    const handleClick = (event) => {
        let text = (event.target.innerText)

        switch (text){
            case "Time":
                setSortBy(text);
                setTableRows([...sortRows(rows.slice(), text)]);
                break;
            case "Size":
                setSortBy(text);
                setTableRows([...sortRows(rows.slice(), text)]);
                break;

            case "ID":
                setSortBy(text);
                setTableRows([...sortRows(rows.slice(), text)]);
                break;
            default:
                console.log("doing nothing")
        }
    }

    const handleShow = (event) => {
        // Get the id from the first cell of the clicked row
        const id = event.target.parentElement.children[0].innerText;
        console.log("id is", id);
        
        // Convert id to number since it might be stored as a number in your data
        const numericId = Number(id);
        
        // Try filtering with both string and numeric versions of the id
        const filteredRow = rows.filter((row) => 
            String(row.id) === id || row.id === numericId
        );
        
        console.log("filteredRow", filteredRow);

        if (filteredRow.length > 0) {
            // If we already have this row expanded, close it
            if (toggle && rowData?.id === filteredRow[0]?.id) {
                setToggle(false);
            } else {
                // Otherwise, show the details for this row
                setRowData(filteredRow[0]);
                setToggle(true);
            }
        } else {
            console.log("No matching row found for id:", id);
        }
    }
    return (
        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        {columns.map((item, index) => (
                            <th key={index} onClick={handleClick}>
                                {item}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="text-sm">
                    {/* rows with expandable details */}
                    {tableRows.map((item, index) => (
                        <>
                            <tr key={`row-${index}`} onClick={handleShow} className="hover:cursor-pointer bg-white-200">
                                <td>{item?.id}</td>
                                <td>{item?.request?.url}</td>
                                <td>{item?.response?.status}</td>
                                <td>{item?.response?.content?.mimeType}</td>
                                <td>{formatSize(item?.response?.content?.size)}kB</td>
                                <td>{formatTime(item?.time)}ms</td>
                            </tr>
                            {/* Detail row that appears when clicked */}
                            {toggle && rowData?.id === item?.id && (
                                <tr key={`detail-${index}`} className="bg-base-200">
                                    <td colSpan={columns.length} className="p-4">
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <h3 className="font-bold">Request Details</h3>
                                                <p><span className="font-semibold">Method:</span> {rowData?.request?.method}</p>
                                                <p><span className="font-semibold">URL:</span> {rowData?.request?.url}</p>
                                                <p><span className="font-semibold">HTTP Version:</span> {rowData?.request?.httpVersion}</p>
                                            </div>
                                            <div>
                                                <h3 className="font-bold">Response Details</h3>
                                                <p><span className="font-semibold">Status:</span> {rowData?.response?.status} {rowData?.response?.statusText}</p>
                                                <p><span className="font-semibold">Content Type:</span> {rowData?.response?.content?.mimeType}</p>
                                                <p><span className="font-semibold">Size:</span> {formatSize(rowData?.response?.content?.size)}kB</p>
                                                <p><span className="font-semibold">Time:</span> {formatTime(rowData?.time)}ms</p>
                                            </div>
                                        </div>
                                        <div className="mt-4">
                                            <button 
                                                className="btn btn-sm btn-outline" 
                                                onClick={() => setToggle(false)}
                                            >
                                                Close
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </>
                    ))}
                </tbody>
            </table>
        </div>
    )
}