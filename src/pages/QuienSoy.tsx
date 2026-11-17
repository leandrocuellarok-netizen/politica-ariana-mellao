import PageLayout from '../components/PageLayout';
import { QUIEN_SOY } from '../content';

export default function QuienSoy() {
  return (
    <PageLayout title={QUIEN_SOY.pageTitle} label={QUIEN_SOY.pageLabel}>
      <div className="space-y-10 text-lg leading-relaxed text-gray-700">
        {QUIEN_SOY.sections.map((section) => (
          <section key={section.title} className="space-y-4">
            <h2 className="font-display text-2xl font-semibold text-[#14233b]">{section.title}</h2>
            {section.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </section>
        ))}
      </div>
    </PageLayout>
  );
}
