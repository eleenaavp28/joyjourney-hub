// Women's illustrations

export const LeggingsIllustration = () => (
  <svg viewBox="0 0 120 200" className="w-[60%] h-[60%]" fill="none">
    {/* Waistband */}
    <rect x="30" y="30" width="60" height="12" rx="3" fill="#B06880" />
    {/* Left leg */}
    <rect x="33" y="42" width="24" height="130" rx="8" fill="#C4809A" />
    {/* Right leg */}
    <rect x="63" y="42" width="24" height="130" rx="8" fill="#C4809A" />
    {/* Left stripe */}
    <rect x="33" y="42" width="4" height="130" rx="2" fill="#E8DCFF" />
    {/* Right stripe */}
    <rect x="83" y="42" width="4" height="130" rx="2" fill="#E8DCFF" />
  </svg>
);

export const SportsBraIllustration = () => (
  <svg viewBox="0 0 120 140" className="w-[60%] h-[60%]" fill="none">
    {/* Main body */}
    <rect x="20" y="50" width="80" height="45" rx="12" fill="#E8A898" />
    {/* Left strap */}
    <line x1="35" y1="50" x2="25" y2="20" stroke="#D4927A" strokeWidth="4" strokeLinecap="round" />
    {/* Right strap */}
    <line x1="85" y1="50" x2="95" y2="20" stroke="#D4927A" strokeWidth="4" strokeLinecap="round" />
    {/* Center seam */}
    <line x1="60" y1="55" x2="60" y2="90" stroke="#D4927A" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const JacketIllustration = () => (
  <svg viewBox="0 0 140 200" className="w-[60%] h-[60%]" fill="none">
    {/* Main body - wider at shoulders, narrower at waist */}
    <path d="M30,40 L25,30 L50,25 L90,25 L115,30 L110,40 L105,160 Q70,165 35,160 Z" rx="8" fill="#B89ACC" />
    {/* Zip line */}
    <line x1="70" y1="30" x2="70" y2="155" stroke="#9878B0" strokeWidth="3" strokeLinecap="round" />
    {/* Left pocket */}
    <rect x="38" y="120" width="22" height="14" rx="3" fill="#9878B0" opacity="0.6" />
    {/* Right pocket */}
    <rect x="80" y="120" width="22" height="14" rx="3" fill="#9878B0" opacity="0.6" />
  </svg>
);

export const LongSleeveIllustration = () => (
  <svg viewBox="0 0 160 180" className="w-[60%] h-[60%]" fill="none">
    {/* Main body */}
    <rect x="50" y="35" width="60" height="110" rx="10" fill="#E8B4A0" />
    {/* Left sleeve */}
    <rect x="10" y="40" width="45" height="18" rx="6" fill="#D4A090" transform="rotate(-10, 50, 48)" />
    {/* Right sleeve */}
    <rect x="105" y="40" width="45" height="18" rx="6" fill="#D4A090" transform="rotate(10, 110, 48)" />
    {/* Ribbed lines */}
    <line x1="58" y1="65" x2="102" y2="65" stroke="#D4A090" strokeWidth="1.5" opacity="0.5" />
    <line x1="58" y1="80" x2="102" y2="80" stroke="#D4A090" strokeWidth="1.5" opacity="0.5" />
    <line x1="58" y1="95" x2="102" y2="95" stroke="#D4A090" strokeWidth="1.5" opacity="0.5" />
    <line x1="58" y1="110" x2="102" y2="110" stroke="#D4A090" strokeWidth="1.5" opacity="0.5" />
    <line x1="58" y1="125" x2="102" y2="125" stroke="#D4A090" strokeWidth="1.5" opacity="0.5" />
  </svg>
);

// Men's illustrations

export const ShortsIllustration = () => (
  <svg viewBox="0 0 120 120" className="w-[60%] h-[60%]" fill="none">
    {/* Waistband */}
    <rect x="20" y="25" width="80" height="12" rx="3" fill="#3D3530" />
    {/* Main shorts body */}
    <rect x="22" y="37" width="76" height="55" rx="8" fill="#2A2522" />
    {/* Center seam */}
    <line x1="60" y1="37" x2="60" y2="92" stroke="#3D3530" strokeWidth="2" />
    {/* Left split */}
    <line x1="28" y1="82" x2="28" y2="92" stroke="#7B93F5" strokeWidth="2" strokeLinecap="round" />
    {/* Right split */}
    <line x1="92" y1="82" x2="92" y2="92" stroke="#7B93F5" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const TShirtIllustration = () => (
  <svg viewBox="0 0 140 160" className="w-[60%] h-[60%]" fill="none">
    {/* Main body */}
    <rect x="40" y="40" width="60" height="95" rx="8" fill="#2A2522" />
    {/* Left sleeve */}
    <rect x="10" y="42" width="35" height="25" rx="6" fill="#1E1E1E" />
    {/* Right sleeve */}
    <rect x="95" y="42" width="35" height="25" rx="6" fill="#1E1E1E" />
    {/* Crew neck */}
    <path d="M55,40 Q70,50 85,40" stroke="#1E1E1E" strokeWidth="3" fill="none" />
    {/* X motif */}
    <line x1="52" y1="60" x2="88" y2="105" stroke="#7B93F5" strokeWidth="3" strokeLinecap="round" />
    <line x1="88" y1="60" x2="52" y2="105" stroke="#7B93F5" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

export const VestIllustration = () => (
  <svg viewBox="0 0 120 170" className="w-[60%] h-[60%]" fill="none">
    {/* Main body with wider shoulders */}
    <path d="M25,35 L20,30 L40,25 L80,25 L100,30 L95,35 L90,145 Q60,150 30,145 Z" fill="#1E2A3A" />
    {/* Armhole left */}
    <path d="M25,35 Q18,60 30,80" stroke="#0F0F0F" strokeWidth="3" fill="none" />
    {/* Armhole right */}
    <path d="M95,35 Q102,60 90,80" stroke="#0F0F0F" strokeWidth="3" fill="none" />
    {/* Zip line */}
    <line x1="60" y1="30" x2="60" y2="140" stroke="#7B93F5" strokeWidth="2.5" strokeLinecap="round" />
    {/* Left chest pocket */}
    <rect x="35" y="50" width="18" height="14" rx="2" stroke="#7B93F5" strokeWidth="1.5" fill="none" />
    {/* Right chest pocket */}
    <rect x="67" y="50" width="18" height="14" rx="2" stroke="#7B93F5" strokeWidth="1.5" fill="none" />
  </svg>
);

export const CompressionTightIllustration = () => (
  <svg viewBox="0 0 120 200" className="w-[60%] h-[60%]" fill="none">
    {/* Waistband */}
    <rect x="30" y="25" width="60" height="12" rx="3" fill="#3D3530" />
    {/* Left leg */}
    <rect x="33" y="37" width="24" height="140" rx="8" fill="#2C2018" />
    {/* Right leg */}
    <rect x="63" y="37" width="24" height="140" rx="8" fill="#2C2018" />
    {/* Left stripe */}
    <line x1="34" y1="37" x2="34" y2="177" stroke="#7B93F5" strokeWidth="2.5" strokeLinecap="round" />
    {/* Right stripe */}
    <line x1="86" y1="37" x2="86" y2="177" stroke="#7B93F5" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);
