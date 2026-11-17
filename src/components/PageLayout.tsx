import { ReactNode } from 'react';

type Props = { title: string; label?: string; children: ReactNode };

export default function PageLayout({ title, label, children }: Props) {
  return (
    <main className="min-h-[60vh] bg-[#fafaf8]">
      <section className="bg-[#1c2b62] px-6 py-16 text-white md:py-20">
        <div className="mx-auto max-w-7xl">
          {label && <p className="mb-4 text-xs font-bold uppercase tracking-[.24em] text-[#ffe900]">{label}</p>}
          <h1 className="max-w-4xl font-display text-4xl font-black leading-tight md:text-6xl">{title}</h1>
        </div>
      </section>
      <div className="mx-auto max-w-5xl px-6 py-14 md:py-20">{children}</div>
    </main>
  );
}
