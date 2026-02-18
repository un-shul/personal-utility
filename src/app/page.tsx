import Link from 'next/link';

export default function Home() {
  const projects = [
    { 
      name: "Day Type Checker", 
      path: "/day-type", 
      desc: "Uses Python logic to categorize your day.",
      icon: "📅" 
    },
    // Add more here later!
  ];

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <header className="max-w-4xl mx-auto mb-12">
        <h1 className="text-4xl font-bold text-gray-900">My Utility Hub</h1>
        <p className="text-gray-600 mt-2">A collection of mini-tools and experiments.</p>
      </header>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <Link href={project.path} key={project.path} className="group">
            <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all">
              <span className="text-3xl mb-4 block">{project.icon}</span>
              <h2 className="text-xl font-semibold group-hover:text-blue-600">{project.name}</h2>
              <p className="text-gray-500 text-sm mt-1">{project.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}