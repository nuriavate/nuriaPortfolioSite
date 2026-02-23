export default function FeatureVideo({
  src,
  alt = "",
  className = "",
  aspect = "video", // "video" | "square" | "auto"
  flush = false,
}) {
  const aspectClass =
    aspect === "video"
      ? "aspect-video"
      : aspect === "square"
      ? "aspect-square"
      : "";

  return (
    <div className={flush ? "w-full" : "w-full mx-auto max-w-7xl px-0 sm:px-6 lg:px-8"}>
      {aspect !== "auto" ? (
        <div className={`relative w-full ${aspectClass}`}>
          <video
            src={src}
            autoPlay
            loop
            muted
            playsInline
            className={`absolute inset-0 w-full h-full object-cover ${className}`}
          />
        </div>
      ) : (
        <video
          src={src}
          autoPlay
          loop
          muted
          playsInline
          className={`w-full h-auto object-cover ${className}`}
        />
      )}
    </div>
  );
}
