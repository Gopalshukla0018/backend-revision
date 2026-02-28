import { useState } from "react";

function App() {
  const [file, setFile] = useState(null);
  const [images, setImages] = useState([]);
  const handleOnChange = (e) => {
    setFile(e.target.files[0]);
    alert("File selected successfully");
  };

  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append("myfile", file);
      console.log("clicked");
      const res = await fetch("http://localhost:3000/api/upload", {
        method: "POST",
        body: formData,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const fetchImages = async () => {
    const res = await fetch("http://localhost:3000/api/images", {
      method: "GET",
    });
    console.log(res);
    const data = await res.json();
    setImages(data);

    // setImages(res)
  };

  return (
    <>
      <div>
        <input type="file" onChange={handleOnChange} />
        <button onClick={handleSubmit}>Submit</button>
        <hr />
        <button onClick={fetchImages}>show images</button>
      </div>

      {images.map((images, index) => (
        <img src={`http://localhost:3000/uploads/${images}`} alt="" />
      ))}
    </>
  );
}

export default App;
