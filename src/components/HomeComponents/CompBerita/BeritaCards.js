const BeritaCard = ({ title, author, date, readTime, image }) =>{
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={image} alt={title} className="w-full h-48 object-cover" />
            <div className="p-4">
                <div className="flex items-center mb-2">
                    <img
                        src="/image/example.png"
                        alt={author}
                        className="w-8 h-8 rounded-full mr-2"
                    />
                    <div className="text-sm text-gray-600">
                        <p>{author}</p>
                        <p>
                        {date} · {readTime}
                        </p>
                    </div>
                </div>
                <h3 className="text-lg font-semibold text-blue-800">{title}</h3>
                <a href="#" className="text-blue-500 mt-4 inline-block">
                    Read more →
                </a>
            </div>
        </div>
    );
}

export default BeritaCard;