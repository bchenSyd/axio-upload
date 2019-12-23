import React from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const onClick = () => {
    var data = new FormData();
    data.append("referenceNumber", "D070B46E-0000-C012-B6C0-A145186995AC");
    data.append("correspondenceType", "customer");
    data.append("isRestrict", true);
    data.append("description", "test file upload");
    data.append("bochenFile", document.getElementById("file").files[0]);

    const config = {
      headers: { "content-type": "multipart/form-data" }
    };
    axios
      .post("http://localhost:3001/upload", data, config)
      .then(function(res) {
        alert("success");
      })
      .catch(function(err) {
        alert("fail");
      });
  };
  return (
    <form onSubmit={() => false}>
      <div>
        <label htmlFor="file">File</label>
        <input id="file" type="file" />
      </div>
      <button id="upload" type="button" onClick={onClick}>
        Upload
      </button>
    </form>
  );
};

export default App;
