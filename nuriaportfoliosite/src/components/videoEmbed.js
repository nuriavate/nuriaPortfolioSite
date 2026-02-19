import { useState } from "react";

export default function VideoEmbed({ videoId }) {
  const [play, setPlay] = useState(false);

  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
  <div className="aspect-video w-full overflow-hidden bg-black">
    {!play ? (
      <button
        onClick={() => setPlay(true)}
        className="group relative h-full w-full"
      >
        <img
          src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
          alt="Video preview"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/20 transition group-hover:bg-black/30" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/80 text-white transition group-hover:scale-105">
            ▶
          </div>
        </div>
      </button>
    ) : (
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        title="YouTube video"
        className="h-full w-full"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      />
    )}
  </div>
</div>

  );
}
