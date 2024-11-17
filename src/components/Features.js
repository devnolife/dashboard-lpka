export default function Features() {
  return (
    <section className="bg-blue-100 dark:bg-gray-900 pb-20">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-blue-900 dark:text-white">
            Dukungan untuk Masa Depan Cerah
          </h2>
          <p className="mb-4">
            Kami berkomitmen dalam mendukung anak-anak di LPKA dan mahasiswa di Unismuh Makassar melalui berbagai program beasiswa dan kegiatan pengembangan diri. Kami bekerja sama dengan para pendidik, ahli, dan mitra strategis untuk membina generasi masa depan.
          </p>
          <p>
            Dengan dukungan dari para donatur dan institusi, kami membuka kesempatan bagi mereka yang ingin belajar dan berkembang. Bersama-sama, kita membangun masa depan yang lebih baik.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <img
            className="w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
            alt="konten kantor 1"
          />
          <img
            className="mt-4 w-full lg:mt-10 rounded-lg"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
            alt="konten kantor 2"
          />
        </div>
      </div>

      {/* Bagian Pengumuman */}
      <section className="bg-gradient-to-r from-blue-100 via-white to-blue-100 py-8 px-4">
        <div className="container mx-auto text-blue-800">
          <h2 className="text-2xl font-semibold mb-4">Pengumuman</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Pengumuman
              title="Beasiswa Pendidikan LPKA"
              date="10 Nov 2024"
              description="Beasiswa khusus untuk anak-anak di LPKA yang berprestasi, diberikan oleh Unismuh Makassar untuk mendukung pendidikan mereka."
              linkText="Pelajari lebih lanjut"
              image="/image/OIP.jpg"
            />
            <Pengumuman
              title="Pelatihan Karir Mahasiswa"
              date="5 Nov 2024"
              description="Program pelatihan karir bagi mahasiswa Unismuh, yang melibatkan pembinaan dan bimbingan langsung dari ahli di bidangnya."
              linkText="Daftar sekarang"
              image="/image/OIP.jpg"
            />
            <Pengumuman
              title="Kesempatan Relawan LPKA"
              date="1 Nov 2024"
              description="Ayo bergabung sebagai relawan di LPKA Makassar dan berkontribusi dalam pembinaan anak-anak di lingkungan khusus ini."
              linkText="Lamar sekarang"
              image="/image/OIP.jpg"
            />
          </div>
        </div>
      </section>

      {/* Bagian Berita Terbaru */}
      <section className="bg-gradient-to-r from-blue-100 via-white to-blue-100 py-8 px-4">
        <div className="container mx-auto text-blue-800">
          <h2 className="text-2xl font-semibold mb-4">Berita Terbaru</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <BeritaCard
              title="Penyuluhan & Edukasi di LPKA"
              author="Fadli Ramadhan"
              date="15 Agu 2024"
              readTime="16 menit baca"
              description="Unismuh Makassar mengadakan penyuluhan bagi anak-anak di LPKA, memberikan pendidikan tentang keterampilan hidup dan nilai-nilai sosial."
              image="/image/OIP.jpg"
            />
            <BeritaCard
              title="Kerjasama Beasiswa dengan Institusi"
              author="Ayu Mariani"
              date="12 Agu 2024"
              readTime="10 menit baca"
              description="Unismuh memperluas jaringan beasiswa dengan berbagai institusi, membuka peluang beasiswa bagi anak-anak yang berada di LPKA."
              image="/image/OIP.jpg"
            />
            <BeritaCard
              title="Workshop Pengembangan Diri"
              author="Yusuf Malik"
              date="8 Agu 2024"
              readTime="12 menit baca"
              description="Unismuh Makassar mengadakan workshop untuk pengembangan diri anak-anak di LPKA, berfokus pada pendidikan karakter dan keterampilan praktis."
              image="/image/OIP.jpg"
            />
          </div>
        </div>
      </section>
    </section>
  );
}

const Pengumuman = ({ title, date, description, linkText, image }) => {
  return (
    <div className="bg-blue-100 text-blue-800 rounded-lg shadow-lg overflow-hidden">
      {image && <img src={image} alt={title} className="w-full h-48 object-cover" />}
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-2">{date}</p>
        <p className="text-gray-600 mb-4">{description}</p>
        <a href="#" className="text-blue-500 hover:underline">{linkText}</a>
      </div>
    </div>
  );
};

function BeritaCard({ title, author, date, readTime, description, image }) {
  return (
    <div className="bg-blue-100 rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <div className="flex items-center mb-2">
          <img src="/image/example.png" alt={author} className="w-8 h-8 rounded-full mr-2" />
          <div className="text-sm text-gray-600">
            <p>{author}</p>
            <p>{date} · {readTime}</p>
          </div>
        </div>
        <h3 className="text-lg font-semibold text-blue-800">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
        <a href="#" className="text-blue-500 mt-4 inline-block">
          Baca selengkapnya →
        </a>
      </div>
    </div>
  );
}
