import BeritaCard from "./BeritaCards";
import { beritaData } from "./../data/BeritaData";

export default function BeritaSection() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {beritaData.map((item, index) => (
          <BeritaCard
            key={index}
            title={item.title}
            author={item.author}
            date={item.date}
            readTime={item.readTime}
            image={item.image}
          />
        ))}
      </div>  
    );
}