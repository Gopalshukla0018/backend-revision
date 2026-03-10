import { useState } from "react";

function App() {
  const [file, setFile] = useState(null);

  const handleOnchange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("myfile", file);

    const result = fetch("http://localhost:5000/upload", {
      method: "POST",
      body: formData,
    });
  };

  return (
    <>
      <input type="file" onChange={handleOnchange} />
      <button onClick={handleSubmit}>submit</button>
    </>
  );
}

export default App;
