import PageLayout from '../components/PageLayout';import { QUIEN_SOY } from '../content';
export default function QuienSoy(){return <PageLayout title={QUIEN_SOY.pageTitle} label={QUIEN_SOY.pageLabel}><div className="space-y-5 text-lg leading-relaxed text-gray-700">{QUIEN_SOY.paragraphs.map((p,i)=><p key={i}>{p}</p>)}</div></PageLayout>}
