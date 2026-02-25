export default function FullImage({ src, alt }) {
  return (
    <div className="w-full mx-auto max-w-7xl px-0 sm:px-6 lg:px-8">
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-auto object-cover"
      />
    </div>
  );
}
