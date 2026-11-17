import { Users, Heart, Share2, Twitter, Instagram } from 'lucide-react';
import PageLayout from '../components/PageLayout';
import { SUMATE, SOCIAL } from '../content';

const wayIcons = { participar: Users, colaborar: Heart, difundir: Share2 } as const;

export default function Sumate() {
  return (
    <PageLayout title={SUMATE.pageTitle} label={SUMATE.pageLabel}>
      <p className="mb-12 text-lg leading-8 text-gray-600">{SUMATE.intro}</p>
      <div className="grid gap-4 md:grid-cols-3">
        {SUMATE.ways.map(({ key, title, description }) => {
          const Icon = wayIcons[key as keyof typeof wayIcons];
          return (
            <article key={key} className="border border-[#e6e1d8] bg-white p-8">
              <Icon className="mb-6 text-[#a17b3d]" size={30} />
              <h2 className="font-display text-2xl font-semibold text-[#14233b]">{title}</h2>
              <p className="mt-3 leading-7 text-gray-600">{description}</p>
            </article>
          );
        })}
      </div>
      <section className="mt-12 bg-[#14233b] p-8 text-white md:p-10">
        <h2 className="font-display text-3xl font-semibold">Conectá a través de los canales públicos</h2>
        <p className="mt-3 max-w-2xl leading-7 text-white/70">Las convocatorias y novedades se comunicarán por las redes oficiales.</p>
        <div className="mt-7 flex flex-wrap gap-3">
          <a href={SOCIAL.twitter.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 border border-white/30 px-5 py-3 text-sm font-semibold"><Twitter size={17} />{SOCIAL.twitter.handle}</a>
          <a href={SOCIAL.instagram.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 border border-white/30 px-5 py-3 text-sm font-semibold"><Instagram size={17} />{SOCIAL.instagram.handle}</a>
        </div>
      </section>
    </PageLayout>
  );
}
