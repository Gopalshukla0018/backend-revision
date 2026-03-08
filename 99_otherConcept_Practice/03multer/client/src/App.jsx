import { useState } from "react";

function App() {
  const [file, setFile] = useState(null);

  const handleOnchange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleClick = async () => {
    const formData = new FormData();
    formData.append("myfile", file);
    await fetch("http://localhost:3000/upload", {
      method: "POST",
      body: formData,
    });
  };

  return (
    <>
      <input type="file" onChange={handleOnchange} />
      <button onClick={handleClick}>submit</button>
    </>
  );
}

export default App;
