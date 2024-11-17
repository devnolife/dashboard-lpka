import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow fixed top-0 left-1/2 transform -translate-x-1/2 w-full max-w-4xl rounded-lg mt-4 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <Link href="/" legacyBehavior>
          <a>
            <img src="/image/logo-unismuh.png" alt="eLearn Logo" className="h-10" />
          </a>
        </Link>
        <ul className="flex space-x-6">
          <li><Link href="/" legacyBehavior><a className="text-gray-700 hover:text-teal-500">Home</a></Link></li>
          <li><Link href="/about" legacyBehavior><a className="text-gray-700 hover:text-teal-500">About</a></Link></li>
          <li><Link href="/courses" legacyBehavior><a className="text-gray-700 hover:text-teal-500">Courses</a></Link></li>
          <li><Link href="/contact" legacyBehavior><a className="text-gray-700 hover:text-teal-500">Contact</a></Link></li>
        </ul>
        <button className="bg-yellow-500 text-white px-4 py-2 rounded">Login</button>
      </div>
    </nav>
  );
}