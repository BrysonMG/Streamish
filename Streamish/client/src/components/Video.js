import React from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

const Video = ({ video }) => {
    let commentsArray = video.comments;
    if (commentsArray === null) {
        commentsArray = [];
    }

    return (
        <Card >
            <p className="text-left px-2">Posted by: {video.userProfile.name}</p>
            <CardBody>
                <iframe className="video"
                    src={video.url}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen />

                <Link to={`/videos/${video.id}`}>
                    <strong>{video.title}</strong>
                </Link>

                <p>{video.description}</p>

                <p><strong>Comments</strong></p>
                {commentsArray.map(commentObj => {
                    return (<p>UserID: {commentObj.userProfileId} --- {commentObj.message}</p>)
                })}
            </CardBody>
        </Card>
    );
};

export default Video;
