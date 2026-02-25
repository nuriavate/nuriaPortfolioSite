import gsap from "gsap";

function zoomIn(target) {
  gsap.to(target, { scale: 1.08, duration: 0.45, ease: "power2.out" });
}

function zoomOut(target) {
  gsap.to(target, { scale: 1, duration: 0.45, ease: "power2.out" });
}

export default function DoubleImage({ src1, src2, alt1, alt2 }) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-0 sm:px-6 lg:px-8 py-10">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-10">
          
          {[{ src: src1, alt: alt1 }, { src: src2, alt: alt2 }].map((img, i) => (
            <div
              key={i}
              className="group block"
              onMouseEnter={(e) => {
                const image = e.currentTarget.querySelector("[data-image]");
                if (image) zoomIn(image);
              }}
              onMouseLeave={(e) => {
                const image = e.currentTarget.querySelector("[data-image]");
                if (image) zoomOut(image);
              }}
            >
              <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-7/8">
                <img
                  data-image
                  src={img.src}
                  alt={img.alt}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}
