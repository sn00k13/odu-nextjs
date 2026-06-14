import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getSingleProject } from '@/lib/data';
import DonateSection from '@/components/DonateSection';

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = await getSingleProject(Number(id));
  return { title: project ? `${project.title} — The Odù Project` : 'Project' };
}

export default async function ProjectPage({ params }: Props) {
  const { id } = await params;
  const project = await getSingleProject(Number(id));

  if (!project) notFound();

  return (
    <>
      {/* Breadcrumb */}
      <section className="w-full h-20 bg-rose-50 flex items-center">
        <div className="max-w-5xl mx-auto px-4 w-full">
          <nav className="text-sm text-gray-600">
            <Link href="/" className="hover:text-red-600">Home</Link>
            {' / '}
            <Link href="/projects" className="hover:text-red-600">Projects</Link>
            {' / '}
            <span className="text-gray-900 line-clamp-1">{project.title}</span>
          </nav>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 py-10">
        {project.category && (
          <span className="inline-block bg-red-50 text-red-600 text-xs font-bold px-3 py-1 rounded uppercase mb-4">
            {project.category}
          </span>
        )}

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
          {project.title}
        </h1>

        <p className="text-lg text-gray-500 mb-8 leading-relaxed">{project.description}</p>

        {project.image && (
          <div className="relative w-full aspect-[16/7] mb-8">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover rounded"
              priority
            />
          </div>
        )}

        <div
          className="tiptap-content text-gray-800 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: project.content }}
        />
      </article>

      <DonateSection projectName={project.title} />
    </>
  );
}
