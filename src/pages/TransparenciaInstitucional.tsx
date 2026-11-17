import PageLayout from '../components/PageLayout';import { TRANSPARENCIA } from '../content';
export default function TransparenciaInstitucional(){return <PageLayout title={TRANSPARENCIA.pageTitle} label={TRANSPARENCIA.pageLabel}><div className="text-lg leading-relaxed text-gray-700">{TRANSPARENCIA.paragraphs.map((line,i)=><p key={i} className="mb-4">{line}</p>)}</div></PageLayout>}
