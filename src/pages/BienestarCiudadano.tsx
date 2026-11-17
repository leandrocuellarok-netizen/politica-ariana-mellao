import PageLayout from '../components/PageLayout';import { BIENESTAR } from '../content';
export default function BienestarCiudadano(){return <PageLayout title={BIENESTAR.pageTitle} label={BIENESTAR.pageLabel}><div className="space-y-5 text-lg leading-relaxed text-gray-700">{BIENESTAR.paragraphs.map((p,i)=><p key={i}>{p}</p>)}</div></PageLayout>}
