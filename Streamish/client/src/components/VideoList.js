import React, { useEffect, useState } from "react";
import Video from './Video';
import { VideoForm } from "./VideoForm";
import { getAllWithComments, searchVideos } from "../modules/videoManager";

export const VideoList = () => {
    const [videos, setVideos] = useState([]);
    const [search, setSearch] = useState("");

    const getVideos = () => {
        getAllWithComments().then(videos => setVideos(videos));
    };

    const clearInputField = () => {
        setSearch("")
    }

    const handleInputChange = event => {
        let searchTerms = event.target.value
        setSearch(searchTerms)
    }

    const runSearch = () => {
        searchVideos(search)
            .then(results => {
                setVideos(results)
            })
        clearInputField()
    }

    const handleEnterPress = event => {
        if (event.keyCode === 13 && search !== "") {
            runSearch()
        }
    }

    useEffect(() => {
        getVideos();
    }, []);

    return (
        <>
            <input onKeyDown={handleEnterPress} onChange={handleInputChange} placeholder="Search" value={search} />
            <br />
            <button type="button" onClick={getVideos}>See All</button>

            <div className="container">
                <div className="row justify-content-center">
                    {videos.map((video) => (
                        <Video video={video} key={video.id} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default VideoList;
