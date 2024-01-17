import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import UploadService from "./services/FileUploadService";
import { Row } from "react-bootstrap";
import { ReactComponent as Exit } from "../img/icon/exit.svg";

const UploadImg = () => {
  const [currentFile, setCurrentFile] = useState(undefined);
  const [previewImage, setPreviewImage] = useState(undefined);
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState("");
  const [imageInfos, setImageInfos] = useState([]);

  useEffect(() => {
    UploadService.getFiles().then((response) => {
      setImageInfos(response.data);
    });
  }, []);

  const selectFile = (event) => {
    setCurrentFile(event.target.files[0]);
    setPreviewImage(URL.createObjectURL(event.target.files[0]));
    setProgress(0);
    setMessage("");
  };

  const upload = () => {
    setProgress(0);

    UploadService.upload(currentFile, (event) => {
      setProgress(Math.round((100 * event.loaded) / event.total));
    })
      .then((response) => {
        setMessage(response.data.message);
        return UploadService.getFiles();
      })
      .then((files) => {
        setImageInfos(files.data);
      })
      .catch((err) => {
        setProgress(0);

        if (err.response && err.response.data && err.response.data.message) {
          setMessage(err.response.data.message);
        } else {
          setMessage("Could not upload the Image!");
        }

        setCurrentFile(undefined);
      });
  };

  return (
    <div className="upload-container">
      <Row className="row">
        <div className="_right">
          <NavLink to="/gallery" className="white-container-icon">
            <Exit/>
          </NavLink>
        </div>
        <div className="upload">
          <div className="upload-title">Upload a .jpg or .png Cat Image</div>
          <div className="upload-text-gray">Any uploads must comply with the upload guidelines or face deletion.</div>
        </div>
        <div className="upload-file">
          {previewImage && (
            <div className="center">
              <img className="preview" src={previewImage} alt="" />
            </div>
          )}
          <label className="btn-upload"> Drag here your file or Click here to upload
            <input type="file" accept="image/*" onChange={selectFile}/>
          </label>
        </div>
        <div className="upload-text-gray">No file selected</div>

        <div className="btn-upload-photo">
          <button
            className="btn btn-success btn-sm"
            disabled={!currentFile}
            onClick={upload}
          >
            UPLOAD PHOTO
          </button>
        </div>
      </Row>

      {currentFile && (
        <div className="progress my-3">
          <div
            className="progress-bar progress-bar-info"
            role="progressbar"
            aria-valuenow={progress}
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: progress + "%" }}
          >
            {progress}%
          </div>
        </div>
      )}



      {message && (
        <div className="alert alert-secondary mt-3" role="alert">
          {message}
        </div>
      )}

      <div className="card mt-3">
        <div className="card-header">List of Images</div>
        <ul className="list-group list-group-flush">
          {imageInfos &&
            imageInfos.map((img, index) => (
              <li className="list-group-item" key={index}>
                <p>
                  <a href={img.url}>{img.name}</a>
                </p>
                <img src={img.url} alt={img.name} height="80px" />
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export {UploadImg}