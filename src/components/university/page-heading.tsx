import { Link } from '@tanstack/react-router';
import { ChevronRight } from 'lucide-react';
export function PageHeading({ english, title, description }: { english: string; title: string; description: string }) { return <header className="page-heading"><div className="site-container"><div className="breadcrumb"><Link to="/">หน้าแรก</Link><ChevronRight size={13}/><span>{title}</span></div><p className="eyebrow">{english}</p><h1>{title}</h1><p className="page-description">{description}</p></div></header>; }
