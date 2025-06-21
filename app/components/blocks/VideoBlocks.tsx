"use client";

import { useEffect, useRef, useState, MouseEvent } from "react";
import { Icon } from "@iconify/react";

interface VideoLoopBlockProps {
  videoSrc: string;
  poster?: string;
  controls?: boolean;
}

export function VideoLoopBlock({
  videoSrc,
  poster,
  controls,
}: VideoLoopBlockProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const animationFrameRef = useRef<number>();

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    const updateProgress = () => {
      if (videoRef.current) {
        const currentTime = videoRef.current.currentTime;
        const duration = videoRef.current.duration || 1;
        setProgress((currentTime / duration) * 100);
      }
      animationFrameRef.current = requestAnimationFrame(updateProgress);
    };

    if (isPlaying) {
      animationFrameRef.current = requestAnimationFrame(updateProgress);
    } else {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isPlaying]);

  useEffect(() => {
    const video = videoRef.current;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    if (video) {
      video.addEventListener("play", handlePlay);
      video.addEventListener("pause", handlePause);

      if (!video.paused) {
        handlePlay();
      }
    }

    return () => {
      if (video) {
        video.removeEventListener("play", handlePlay);
        video.removeEventListener("pause", handlePause);
      }
    };
  }, []);

  return (
    <div className="relative flex justify-center items-center mx-auto my-4 px-4 md:px-10">
      {/* Video Container as a hover group */}
      <div className="group relative w-full max-w-3xl">
        {/* Video */}
        <video
          ref={videoRef}
          src={videoSrc}
          poster={poster}
          autoPlay
          loop
          muted
          playsInline
          className="rounded-lg shadow-lg w-full h-auto"
        >
          Your browser does not support the video tag.
        </video>

        {/* Play/Pause Button with fade in/out on hover */}
        {controls && (
          <button
            onClick={togglePlayPause}
            className="absolute top-2 right-2 items-center justify-center rounded-full w-12 h-12 text-white hidden md:flex opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <svg className="w-8 h-8" viewBox="0 0 100 100">
              {/* Background Circle */}
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="white"
                strokeWidth="8"
                strokeDasharray={2 * Math.PI * 45}
                strokeDashoffset={((100 - progress) / 100) * (2 * Math.PI * 45)}
                transform="rotate(-90 50 50)"
              />
              {/* Play/Pause Icon */}
              <foreignObject x="35" y="35" width="30" height="30">
                <div className="flex items-center justify-center w-full h-full">
                  {isPlaying ? (
                    <Icon icon="solar:pause-bold" className="w-6 h-6" />
                  ) : (
                    <Icon icon="solar:play-bold" className="w-6 h-6" />
                  )}
                </div>
              </foreignObject>
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}

export function VideoPlayer({ videoSrc }: { videoSrc: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [videoDuration, setVideoDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [hoverPercent, setHoverPercent] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragTime, setDragTime] = useState<number | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateProgress = () => {
      setCurrentTime(video.currentTime);
      setVideoDuration(video.duration);
    };

    video.addEventListener("loadedmetadata", updateProgress);
    video.addEventListener("timeupdate", updateProgress);

    return () => {
      video.removeEventListener("loadedmetadata", updateProgress);
      video.removeEventListener("timeupdate", updateProgress);
    };
  }, []);

  useEffect(() => {
    const handleDragging = (e: globalThis.MouseEvent) => {
      if (!progressBarRef.current) return;
      const rect = progressBarRef.current.getBoundingClientRect();
      const offsetX = e.clientX - rect.left;
      const clampedOffsetX = Math.max(0, Math.min(offsetX, rect.width));
      const percent = (clampedOffsetX / rect.width) * 100;
      const newTime = (clampedOffsetX / rect.width) * videoDuration;
      setHoverPercent(percent);
      setDragTime(newTime);
    };

    const handleDragEnd = () => {
      if (dragTime !== null && videoRef.current) {
        videoRef.current.currentTime = dragTime;
        setCurrentTime(dragTime);
      }
      setIsDragging(false);
      setDragTime(null);
      setHoverPercent(null);

      document.removeEventListener("mousemove", handleDragging);
      document.removeEventListener("mouseup", handleDragEnd);
    };

    if (isDragging) {
      document.addEventListener("mousemove", handleDragging);
      document.addEventListener("mouseup", handleDragEnd);
    }

    return () => {
      document.removeEventListener("mousemove", handleDragging);
      document.removeEventListener("mouseup", handleDragEnd);
    };
  }, [isDragging, dragTime, videoDuration]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const handleFullscreen = () => {
    if (!videoRef.current) return;
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      videoRef.current.requestFullscreen().catch((err) => console.error(err));
    }
  };

  const handleProgressClick = (e: MouseEvent<HTMLDivElement>) => {
    if (!videoRef.current || !progressBarRef.current) return;
    const rect = progressBarRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newTime = (clickX / rect.width) * videoDuration;
    videoRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleProgressMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    if (progressBarRef.current) {
      const rect = progressBarRef.current.getBoundingClientRect();
      const offsetX = e.clientX - rect.left;
      const clampedOffsetX = Math.max(0, Math.min(offsetX, rect.width));
      const percent = (clampedOffsetX / rect.width) * 100;
      const newTime = (clampedOffsetX / rect.width) * videoDuration;
      setHoverPercent(percent);
      setDragTime(newTime);
    }
  };

  const progressPercent = videoDuration
    ? ((isDragging && dragTime !== null ? dragTime : currentTime) /
        videoDuration) *
      100
    : 0;

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="flex items-center justify-center p-4 select-none">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-3xl border border-black dark:border-white">
        <div className="relative group">
          <video
            ref={videoRef}
            src={videoSrc}
            className="w-full cursor-pointer"
            onClick={togglePlay}
          />
          <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black to-transparent">
            <div className="flex items-center space-x-4">
              <button
                onClick={togglePlay}
                className="text-white focus:outline-none"
              >
                {isPlaying ? (
                  <Icon icon="solar:pause-bold" />
                ) : (
                  <Icon icon="solar:play-bold" />
                )}
              </button>

              <div
                ref={progressBarRef}
                className="flex-1 relative"
                onClick={handleProgressClick}
                onMouseDown={handleProgressMouseDown}
              >
                <div className="w-full h-2 rounded overflow-hidden">
                  <div
                    className="h-full bg-white rounded"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
                {hoverPercent !== null && (
                  <div
                    className="absolute top-0 bottom-0 bg-white"
                    style={{
                      left: `${hoverPercent}%`,
                      transform: "translateX(-50%)",
                    }}
                  />
                )}
              </div>

              <div className="text-white text-sm">
                {formatTime(
                  isDragging && dragTime !== null ? dragTime : currentTime
                )}{" "}
                | {formatTime(videoDuration)}
              </div>

              <button
                onClick={toggleMute}
                className="text-white focus:outline-none"
              >
                {isMuted ? (
                  <Icon icon="garden:volume-muted-fill-12" />
                ) : (
                  <Icon icon="garden:volume-unmuted-fill-12" />
                )}
              </button>

              <button
                onClick={handleFullscreen}
                className="text-white focus:outline-none"
              >
                <Icon icon="tdesign:fullscreen" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
