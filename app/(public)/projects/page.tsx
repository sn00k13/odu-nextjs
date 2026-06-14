import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { getAllProjects } from '@/lib/data';

export const metadata: Metadata = { title: 'Our Projects — The Odù Project' };

export default async function ProjectsPage() {
  const projects = await getAllProjects();

  return (
    <>
      <section className="bg-rose-50 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Projects</h1>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            From agricultural training to cultural preservation, explore the initiatives driving
            sustainable change in our communities.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          {projects.length === 0 ? (
            <p className="text-center text-gray-500 py-20">No projects yet — check back soon.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white border border-gray-100 rounded overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  {project.image && (
                    <div className="relative h-52">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    {project.category && (
                      <span className="inline-block bg-red-50 text-red-600 text-xs font-bold px-3 py-1 rounded uppercase mb-3">
                        {project.category}
                      </span>
                    )}
                    <h2 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h2>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{project.description}</p>
                    <Link
                      href={`/projects/${project.id}`}
                      className="inline-flex items-center gap-1 text-red-600 hover:text-red-700 font-medium text-sm"
                    >
                      Learn More →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
