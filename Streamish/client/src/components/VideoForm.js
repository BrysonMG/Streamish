import React, { useState } from 'react';
import { addVideo } from '../modules/videoManager';
import { useHistory } from 'react-router';

export const VideoForm = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [url, setUrl] = useState("");

    const history = useHistory();

    const handleTitleChange = event => {
        let theTitle = event.target.value;
        setTitle(theTitle);
    }

    const handleDescriptionChange = event => {
        let theDescription = event.target.value;
        setDescription(theDescription);
    }

    const handleUrlChange = event => {
        let theUrl = event.target.value;
        setUrl(theUrl);
    }

    const handleSubmit = event => {
        event.preventDefault();

        let videoObj = {
            Title: title,
            Description: description,
            Url: url
        }

        addVideo(videoObj).then(() => {
            history.push("/");
        });
    }

    return (
        <div>
            <h2>Add Video</h2>

            <label htmlFor="titleInput"><span style={{ color: 'red' }}>*</span>Title</label>
            <input required onChange={handleTitleChange} value={title} />
            <br />
            <label htmlFor="descInput">Description</label>
            <input onChange={handleDescriptionChange} value={description} />
            <br />
            <label htmlFor="urlInput"><span style={{ color: 'red' }}>*</span>URL</label>
            <input required onChange={handleUrlChange} value={url} />
            <br />
            <button type="button" onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default VideoForm;