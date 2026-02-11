"use client";
import React, { useState, useRef, useEffect } from 'react';
import VideoBg from "@/assets/svg/videoBackground.svg";
import Competition from "@/assets/competitionYt.jpg";

const videosData = [
    { id: 1, title: "", videoSource: "video.mp4", poster: "https://img.youtube.com/vi/hMy5za-m5Ew/maxresdefault.jpg", src: "https://youtu.be/hMy5za-m5Ew?si=5-KD81ZlDw5ZFAbQ" },
    { id: 2, title: "", videoSource: "video.mp4", poster: "https://img.youtube.com/vi/7CNeqA9PBYE/maxresdefault.jpg", src: "https://www.youtube.com/embed/7CNeqA9PBYE" },
    { id: 3, title: "", videoSource: "video.mp4", poster: "https://img.youtube.com/vi/7xNcMwyHQ6c/maxresdefault.jpg", src: "https://www.youtube.com/embed/7xNcMwyHQ6c" },
    { id: 4, title: "", videoSource: "video.mp4", poster: "https://img.youtube.com/vi/qJ3fWRs8HMA/maxresdefault.jpg", src: "https://youtu.be/qJ3fWRs8HMA?si=dfTuUps72AOW5XHH" },
    { id: 5, title: "", videoSource: "video.mp4", poster: "https://img.youtube.com/vi/G0ehTJhrxLQ/maxresdefault.jpg", src: "https://www.youtube.com/embed/G0ehTJhrxLQ" },
    { id: 6, title: "", videoSource: "video.mp4", poster: "https://img.youtube.com/vi/95yrZXwZ31w/maxresdefault.jpg", src: "https://youtu.be/bNtOvlT9ZCQ?si=p4WW8Dx9CW1QYI_2" },
    { id: 7, title: "", videoSource: "video.mp4", poster: "https://img.youtube.com/vi/AQ2S9fKPM-M/maxresdefault.jpg", src: "https://www.youtube.com/embed/AQ2S9fKPM-M" },
    { id: 8, title: "", videoSource: "video.mp4", poster: "https://img.youtube.com/vi/cMJey2A0qLs/maxresdefault.jpg", src: "https://www.youtube.com/embed/cMJey2A0qLs" }
];

export const Project = () => {
    const [playingVideo, setPlayingVideo] = useState(null);
    const videoRefs = useRef([]);

    useEffect(() => {
        videoRefs.current = Array(videosData.length).fill(null);
    }, []);

    const handleVideoHover = (videoId) => {
        videoRefs.current.forEach((ref, index) => {
            if (ref && index !== videoId - 1) {
                ref.pause();
            }
        });
        if (videoRefs.current[videoId - 1]) {
            videoRefs.current[videoId - 1].play();
        }
        setPlayingVideo(videoId);
    };

    const handleVideoLeave = () => {
        if (videoRefs.current[playingVideo - 1]) {
            videoRefs.current[playingVideo - 1].pause();
        }
        setPlayingVideo(null);
    };

    const handleVideoEnd = () => {
        if (videoRefs.current[playingVideo - 1]) {
            videoRefs.current[playingVideo - 1].pause();
        }
        setPlayingVideo(null);
    };

    return (
        <div className='overflow-hidden text-white bg-primaryBlack'>
            <div className='w-11/12 mx-auto'>
                <h1 className='mt-5 text-6xl font-extrabold text-center text-primaryBlue'>Youtube Promotion</h1>
                <div className='grid gap-10 mt-16 md:grid-cols-2 bg-primaryBlack'>
                    {videosData.map((video, index) => (
                        <div
                            key={video.id}
                            className='relative bg-primaryBlack'
                            // onMouseEnter={() => handleVideoHover(video.id)}
                            // onMouseLeave={handleVideoLeave}
                        >
                            <VideoBg className="absolute top-0 left-0 w-fit h-[120%] z-2" />
                            <h1 className='mb-3 text-5xl text-center'>{video.title}</h1>
                            <a href={video.src} target="_blank" rel="noopener noreferrer">
                                <video
                                    className='object-cover w-fit h-fit rounded-[32px] border z-10 relative border-[#5D4D6D]'
                                    id={`video-tag-${video.id}`}
                                    poster={video.poster}
                                    playsInline
                                    preload="auto"
                                    width={"100%"}
                                    ref={(el) => {
                                        videoRefs.current[index] = el;
                                    }}
                                    onEnded={handleVideoEnd}
                                >
                                    <source src={video.videoSource} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
