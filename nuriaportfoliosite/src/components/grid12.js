export default function Grid12({ children, className = "" }) {
  return (
    <div className={`grid grid-cols-12 gap-6 lg:gap-8 ${className}`}>
      {children}
    </div>
  );
}
