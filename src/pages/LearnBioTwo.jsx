import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import YouTube from 'react-youtube';


import lesson from "../assets/bio2.mp4"
const VideoPlayer = ({ src, width, height }) => {
    return (
        <div>
            <video width={width} height={height} controls>
                <source src={src} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

function LearnBioTwo() {
    const [videoId, setVideoId] = useState('');
    const [videoLink, setVideoLink] = useState('');
    const [offline, setOffline] = useState(true);
    const { id } = useParams();
    const [opts, setOpts] = useState({
        height: '720',
        width: '1280',
        playerVars: {
            autoplay: 1,
        },
    });

    useEffect(() => {
        if (id) {
            setVideoId(id);
        }

        // Set the initial size of the video player
        handleScreenResize();

        // Add an event listener to update the video player size on window resize
        window.addEventListener('resize', handleScreenResize);

        // Clean up the event listener when the component is unmounted
        return () => {
            window.removeEventListener('resize', handleScreenResize);
        };
    }, [id]);

    const handleScreenResize = () => {
        const screenWidth = window.innerWidth;
        let height, width;

        if (screenWidth <= 768) {
            // Mobile
            height = '300';
            width = '390';
        } else if (screenWidth <= 968) {
            // Tablet
            height = '480';
            width = '854';
        } else {
            // Desktop
            height = '720';
            width = '1280';
        }

        setOpts({
            height: height,
            width: width,
            playerVars: {
                autoplay: 1,
            },
        });
    };

    const onReady = (event) => {
        event.target.pauseVideo();
    };

    const onStateChange = (event) => {
        console.log(event.data);
    };

    const handleInputChange = (event) => {
        setVideoLink(event.target.value);
    };

    const handlePlayVideo = () => {
        const regex = /(?:https?:\/\/)?(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w-]{11})/;
        const match = videoLink.match(regex);
        if (match) {
            setVideoId(match[1]);
        } else {
            alert('Invalid YouTube video URL');
        }
    };

    return (
        <div className="max-w-screen-xl mx-auto">
            {!offline && videoId && <YouTube
                videoId={videoId}
                opts={opts}
                onReady={onReady}
                onStateChange={onStateChange}
            />}
            {
                offline && <VideoPlayer src={lesson} width={opts.width} height={opts.height} />
            }

            {!offline && !videoId &&
                <>
                    <div className="max-w-screen-lg mx-auto px-4">
                        <div className="mb-4">
                            <input
                                type="text"
                                placeholder="Enter YouTube video link or ID"
                                className="border border-gray-300 px-4 py-2 rounded-md w-full"
                                value={videoLink}
                                onChange={handleInputChange}
                            />
                            <button
                                onClick={handlePlayVideo}
                                className="mt-2 bg-gray-800 hover:scale-105 transition-all duration-300 text-white px-4 py-2 rounded-md"
                            >
                                Play Video
                            </button>
                        </div>
                    </div>
                </>
            }
        </div>
    );
}

export default LearnBioTwo;