export function player() {
    const player = new Plyr("video", {
        controls: [
            "play-large", 
            "play", 
            "progress", 
            "current-time", 
            "mute", 
            "volume", 
            "settings", 
            "pip",
            "fullscreen"
        ]
    });
}