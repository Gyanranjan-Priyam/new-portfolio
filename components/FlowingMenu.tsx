import React from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';
import { LucideIcon } from 'lucide-react';

interface MenuItemProps {
  icon: LucideIcon;
  link: string;
  text: string;
  image: string;
}

interface FlowingMenuProps {
  items?: MenuItemProps[];
}

const FlowingMenu: React.FC<FlowingMenuProps> = ({ items = [] }) => {
  return (
    <div className="w-full h-full overflow-hidden bg-card">
      <nav className="flex flex-col h-full m-0 p-0">
        {items.map((item, idx) => (
          <MenuItem key={idx} {...item} />
        ))}
      </nav>
    </div>
  );
};

const MenuItem: React.FC<MenuItemProps> = ({ link, text, image, icon: Icon }) => {
  const itemRef = React.useRef<HTMLDivElement>(null);
  const marqueeRef = React.useRef<HTMLDivElement>(null);
  const marqueeInnerRef = React.useRef<HTMLDivElement>(null);

  const animationDefaults = { duration: 0.6, ease: 'power3.out' };

  const findClosestEdge = (mouseX: number, mouseY: number, width: number, height: number): 'top' | 'bottom' => {
    const topEdgeDist = Math.pow(mouseX - width / 2, 2) + Math.pow(mouseY, 2);
    const bottomEdgeDist = Math.pow(mouseX - width / 2, 2) + Math.pow(mouseY - height, 2);
    return topEdgeDist < bottomEdgeDist ? 'top' : 'bottom';
  };

  const handleMouseEnter = (ev: React.MouseEvent<HTMLAnchorElement>) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return;
    
    const rect = itemRef.current.getBoundingClientRect();
    const edge = findClosestEdge(ev.clientX - rect.left, ev.clientY - rect.top, rect.width, rect.height);

    const tl = gsap.timeline({ defaults: animationDefaults });
    
    // Set initial positions
    gsap.set(marqueeRef.current, { y: edge === 'top' ? '-100%' : '100%' });
    gsap.set(marqueeInnerRef.current, { y: edge === 'top' ? '100%' : '-100%' });
    
    // Animate in
    tl.to([marqueeRef.current, marqueeInnerRef.current], { 
      y: '0%',
      duration: 0.6,
      ease: 'power3.out'
    });
  };

  const handleMouseLeave = (ev: React.MouseEvent<HTMLAnchorElement>) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return;
    
    const rect = itemRef.current.getBoundingClientRect();
    const edge = findClosestEdge(ev.clientX - rect.left, ev.clientY - rect.top, rect.width, rect.height);

    const tl = gsap.timeline({ defaults: animationDefaults });
    
    // Animate out
    tl.to(marqueeRef.current, { 
      y: edge === 'top' ? '-100%' : '100%',
      duration: 0.6,
      ease: 'power3.in'
    })
    .to(marqueeInnerRef.current, {
      y: edge === 'top' ? '100%' : '-100%',
      duration: 0.6,
      ease: 'power3.in'
    }, 0);
  };

  const repeatedMarqueeContent = React.useMemo(() => {
    return Array.from({ length: 6 }).map((_, idx) => (
      <React.Fragment key={idx}>
        <span className="text-card uppercase font-bold text-[3vh] md:text-[4vh] leading-[1.2] px-4 whitespace-nowrap flex items-center gap-3">
          <Icon size={28} className="md:w-9 md:h-9 flex-shrink-0" />
          {text}
        </span>
        <div
          className="w-[120px] md:w-[180px] h-[5vh] md:h-[7vh] mx-4 rounded-lg bg-cover bg-center border-2 border-card flex-shrink-0"
          style={{ backgroundImage: `url(${image})` }}
        />
      </React.Fragment>
    ));
  }, [text, image]);

  return (
    <div className="flex-1 relative overflow-hidden border-b border-border bg-card" ref={itemRef}>
      <Link
        href={link}
        className="flex items-center justify-center gap-4 h-full relative cursor-pointer uppercase no-underline font-bold text-card-foreground text-[3vh] md:text-[4vh] transition-colors duration-300 hover:text-card focus:text-card-foreground focus-visible:text-card"
        style={{fontFamily: "var(--font-accent)"}}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Icon size={32} className="md:w-10 md:h-10" />
        {text}
      </Link>
      <div
        className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none bg-card-foreground"
        style={{ transform: 'translateY(100%)', fontFamily: "var(--font-accent)" }}
        ref={marqueeRef}
      >
        <div className="h-full w-[400%] flex" ref={marqueeInnerRef}>
          <div className="flex items-center relative h-full w-full will-change-transform animate-marquee">
            {repeatedMarqueeContent}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlowingMenu;

