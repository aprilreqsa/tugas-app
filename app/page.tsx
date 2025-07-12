import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const profiles = [
    "Mochamad Jafar Aprilreqsa Sidiq" , "Andriana", "Wawan Sudarsono"
  ]
  return (
      <div className="mx-auto max-w-xl p-8 rounded-2xl shadow-2xl space-y-4">
        <div className="flex  justify-center">
          <h1 className="text-3xl font-bold">Halaman Home</h1>
        </div>
        
        <h2 className="text-2xl font-bold">
          <Link href="/about" className="hover:text-blue-800">About</Link>
        </h2>
        <h2 className="text-2xl font-bold">
          <Link href="/contact" className="hover:text-blue-800">Contact</Link>
        </h2>
        <h2 className="text-2xl font-bold">
          <Link href="/profile" className="hover:text-blue-800">Profile</Link>
        </h2>
        <ol className="list-decimal list-inside space-y-3">
        {profiles.map((profile)=> {
          return (
          <div key={profile}>
            
              <li>
            <Link href={`/profile/${profile}`} className="hover:text-blue-800">
              {profile}
            </Link>
              </li>
          
          </div>) 
        })}
        </ol>
        
      </div> 
        
  );
}
