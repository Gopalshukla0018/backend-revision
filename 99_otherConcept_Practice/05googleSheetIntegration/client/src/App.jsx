import { useState } from 'react'

import './App.css'

function App() {
  const [sheetUrl, setSheetUrl] = useState("")
  const [data, setData] = useState(null)
  const syncNow = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/sheet/sheetExtraction", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ sheetUrl })
      });

      const result = await res.json();
      setData(result)
      console.log(result);
    } catch (error) {
      console.error("Error fetching sheet data:", error);
    }
  }

  return (
    <>
      <input onChange={(e) => { setSheetUrl(e.target.value) }} type="text" />
      <button onClick={syncNow}>Sync Now</button>


      <div style={{ marginTop: "20px" }}>
        {data && data.length > 0 && (
          <table border="1" style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              {/* Assuming the first row might be a title and the second is the actual header */}
              {data.slice(0, 2).map((row, rowIndex) => (
                <tr key={rowIndex} style={{ backgroundColor: "#f2f2f2 ", color: "#000" }}>
                  {row.map((cell, cellIndex) => (
                    <th key={cellIndex} style={{ padding: "10px", textAlign: "left" }}>
                      {cell}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {data.slice(2).map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex} style={{ padding: "10px", border: "1px solid #ddd" }}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  )
}

export default App
