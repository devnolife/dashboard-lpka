const Feature = () => {
  // Data pemimpin LKPA
  const leaders = [
    {
      name: "Name",
      role: "Ketua LKPA",
      email: "hasan.lkpa@unismuh.ac.id",
      image: "/image/profile.png",
    },
    {
      name: "Name",
      role: "Wakil Ketua LKPA",
      email: "syukri.lkpa@unismuh.ac.id",
      image: "/image/profile.png",
    },
    {
      name: "Name",
      role: "Sekretaris LKPA",
      email: "dewi.lkpa@unismuh.ac.id",
      image: "/image/profile.png",
    },
  ];

  return (
    <div className="bg-white py-10 px-5">
      <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-800 mb-10">
        Profil Pemimpin LKPA
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {leaders.map((leader, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-gray-100 p-5 rounded-lg shadow-md"
          >
            <img
              src={leader.image}
              alt={leader.name}
              className="w-40 h-40 object-cover rounded-full mb-5"
            />
            <h3 className="text-lg font-bold text-gray-800">{leader.name}</h3>
            <p className="text-gray-600">{leader.role}</p>
            <a
              href={`mailto:${leader.email}`}
              className="text-blue-500 hover:underline mt-2"
            >
              {leader.email}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
