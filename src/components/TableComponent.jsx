import { useState, useEffect } from "react"
import { formatSize, formatTime, sortRows } from "../services/utils"

export default function TableComponent({ columns, rows }) {
    const [tableRows, setTableRows] = useState(rows);
    const [sortBy, setSortBy] = useState(null);
    
    // Update tableRows when rows prop changes
    useEffect(() => {
        if (sortBy) {
            // If we have an active sort, apply it to the new rows
            setTableRows([...sortRows(rows.slice(), sortBy)]);
        } else {
            // Otherwise just update with the new rows
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
            default:
                console.log("doing nothing")
        }
    }

    const handleShow = (event) => {

        const id = event.target.parentElement.children[0].innerText
        console.log("id is", id)
        const filteredRow = rows.filter((row) => row.id === id);
        console.log("filteredId", filteredRow)
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
                    {/* row 1 */}
                    {tableRows.map((item, index) => (
                        <tr key={index} onClick={handleShow}>
                            <td>{item?.id}</td>
                            <td>{item?.request?.url}</td>
                            <td>{item?.response?.status}</td>
                            <td>{item?.response?.content?.mimeType}</td>
                            <td>{formatSize(item?.response?.content?.size)}kB</td>
                            <td>{formatTime(item?.time)}ms</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}