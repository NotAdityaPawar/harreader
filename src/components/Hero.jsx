import { useState } from "react"
import TableComponent from "./TableComponent";


export default function Hero() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [entries, setEntries] = useState([]);
    const columns = ["ID", "Name", "Status", "Type", "Size", "Time"]
    const handleSubmit = (event) => {

        const file = event.target.files[0];

        if (!file) return;
        const reader = new FileReader();

        reader.onload = (e) => {
            try {
                const json = JSON.parse(e.target.result);
                const harEntries = json?.log?.entries || [];

                console.log("json", json.log)
                let modifiedEntries = harEntries.map((entry, index) => {
                    return {
                        ...entry,
                        id: index + 1,
                    };
                });
                setEntries(modifiedEntries);
                console.log("Entries are", entries)
                setIsLoaded(true)
            }
            catch (err) {
                console.error("Error occurred in ", err)
                alert("Invalid HAR file")
            }
        };
        reader.readAsText(file);
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            {!isLoaded && <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">HAR Viewer</h1>
                    <p className="py-6">
                        Upload the file to get started!
                    </p>
                    <input type="file" className="file-input file-input-ghost"
                        onChange={handleSubmit}
                        accept=".har, application/json"
                    />
                </div>
            </div>}

            {isLoaded && <div className="space-y-4 p-2">

                <TableComponent columns={columns} rows={entries}/>
                

            </div>}
        </div>
    )
}