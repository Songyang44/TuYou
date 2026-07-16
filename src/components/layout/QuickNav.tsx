import { useEffect, useRef, useState } from 'react';
import './QuickNav.css';

export interface QuickNavSection {
  id: string;
  label: string;
}

interface QuickNavProps {
  sections: QuickNavSection[];
}

/** 页面内「模块快速定位」组件：右侧竖排锚点 + 滚动高亮，移动端收起为顶部横向条。 */
export default function QuickNav({ sections }: QuickNavProps) {
  const [activeId, setActiveId] = useState(sections[0]?.id);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const elements = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => Boolean(el));

    observerRef.current?.disconnect();
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: [0, 1] },
    );

    elements.forEach((el) => observerRef.current?.observe(el));
    return () => observerRef.current?.disconnect();
  }, [sections]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setActiveId(id);
  };

  if (sections.length === 0) return null;

  return (
    <nav className="quick-nav" aria-label="模块快速定位">
      <div className="quick-nav-track">
        {sections.map((s) => (
          <button
            key={s.id}
            className={`quick-nav-item ${activeId === s.id ? 'is-active' : ''}`}
            onClick={() => scrollTo(s.id)}
          >
            <span className="quick-nav-dot" />
            <span className="quick-nav-label">{s.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}
