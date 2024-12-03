  const PengumumanCards = ({ title, author, date, description, linkText, image, avatar, className }) => {
    return (
      <div
        className={`relative w-64 h-32 bg-cover bg-center rounded-lg shadow-md ${className}`}
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 bg-black/40 rounded-lg"></div> {/* Overlay */}
        <div className="relative p-4 text-white">
          <h3 className="text-sm font-semibold">{title}</h3>
          <p className="text-xs">{date}</p>
          <p className="text-xs">{description}</p>
        </div>
      </div>
    );
  };
  
  export default PengumumanCards;