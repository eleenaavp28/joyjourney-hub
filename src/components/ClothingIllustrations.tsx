// Women's product illustrations — realistic mockup style

export const LeggingsIllustration = () => (
  <svg viewBox="0 0 200 320" className="w-[75%] h-[75%]" fill="none" style={{ filter: "drop-shadow(0 8px 16px rgba(0,0,0,0.15))" }}>
    <defs>
      <pattern id="fabric-w1" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect width="4" height="4" fill="#D4A0B5" />
        <line x1="0" y1="2" x2="4" y2="2" stroke="#CFA0B0" strokeWidth="0.3" />
      </pattern>
      <linearGradient id="sheen-w1" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#D4A0B5" />
        <stop offset="40%" stopColor="#D4A0B5" />
        <stop offset="50%" stopColor="#E8C0D0" />
        <stop offset="60%" stopColor="#D4A0B5" />
        <stop offset="100%" stopColor="#C8909A" />
      </linearGradient>
    </defs>
    {/* Waistband */}
    <path d="M60,45 Q65,38 100,36 Q135,38 140,45 L138,62 Q100,58 62,62 Z" fill="#B08090" />
    <path d="M62,55 Q100,52 138,55" stroke="#A07080" strokeWidth="1" fill="none" />
    {/* Left leg */}
    <path d="M62,62 Q58,100 56,160 Q54,220 55,270 Q55,285 65,288 Q72,288 74,280 Q78,220 80,160 Q82,100 100,68" fill="url(#fabric-w1)" />
    {/* Right leg */}
    <path d="M100,68 Q118,100 120,160 Q122,220 126,280 Q128,288 135,288 Q145,285 145,270 Q146,220 144,160 Q142,100 138,62" fill="url(#fabric-w1)" />
    {/* Outer sheen stripe left */}
    <path d="M58,80 Q56,140 55,200 Q55,250 56,270" stroke="#E8C0D0" strokeWidth="4" fill="none" opacity="0.6" />
    {/* Outer sheen stripe right */}
    <path d="M142,80 Q144,140 145,200 Q145,250 144,270" stroke="#E8C0D0" strokeWidth="4" fill="none" opacity="0.6" />
    {/* Knee shadow left */}
    <path d="M62,175 Q72,180 78,175" stroke="#C090A0" strokeWidth="1.5" fill="none" opacity="0.5" />
    <path d="M64,182 Q70,186 76,182" stroke="#C090A0" strokeWidth="1" fill="none" opacity="0.3" />
    {/* Knee shadow right */}
    <path d="M122,175 Q130,180 138,175" stroke="#C090A0" strokeWidth="1.5" fill="none" opacity="0.5" />
    <path d="M124,182 Q130,186 136,182" stroke="#C090A0" strokeWidth="1" fill="none" opacity="0.3" />
    {/* Center seam */}
    <path d="M100,62 L100,68" stroke="#B08090" strokeWidth="1" />
  </svg>
);

export const SportsBraIllustration = () => (
  <svg viewBox="0 0 200 240" className="w-[75%] h-[75%]" fill="none" style={{ filter: "drop-shadow(0 8px 16px rgba(0,0,0,0.15))" }}>
    <defs>
      <pattern id="fabric-w2" width="6" height="6" patternUnits="userSpaceOnUse">
        <rect width="6" height="6" fill="#E8A090" />
        <rect width="6" height="1" fill="#E5A090" opacity="0.3" />
      </pattern>
    </defs>
    {/* Left strap */}
    <path d="M65,48 L58,78" stroke="#D49080" strokeWidth="6" strokeLinecap="round" />
    {/* Right strap */}
    <path d="M135,48 L142,78" stroke="#D49080" strokeWidth="6" strokeLinecap="round" />
    {/* Main bra body */}
    <path d="M48,85 Q45,78 58,75 L142,75 Q155,78 152,85 L152,140 Q152,155 140,158 L60,158 Q48,155 48,140 Z" fill="url(#fabric-w2)" />
    {/* Underwire curve */}
    <path d="M52,135 Q75,148 100,135 Q125,148 148,135" stroke="#D49080" strokeWidth="2" fill="none" />
    {/* Center seam */}
    <line x1="100" y1="80" x2="100" y2="155" stroke="#D49080" strokeWidth="1.5" opacity="0.6" />
    {/* Side seam left */}
    <path d="M52,85 L52,140" stroke="#D09585" strokeWidth="1" opacity="0.4" />
    {/* Side seam right */}
    <path d="M148,85 L148,140" stroke="#D09585" strokeWidth="1" opacity="0.4" />
    {/* BB brand mark */}
    <text x="100" y="118" textAnchor="middle" fontFamily="monospace" fontSize="11" fontWeight="bold" fill="#D49080" opacity="0.7">BB</text>
    {/* Bottom band */}
    <path d="M48,148 Q100,162 152,148 L152,158 Q100,170 48,158 Z" fill="#D49080" opacity="0.3" />
  </svg>
);

export const JacketIllustration = () => (
  <svg viewBox="0 0 220 300" className="w-[75%] h-[75%]" fill="none" style={{ filter: "drop-shadow(0 8px 16px rgba(0,0,0,0.15))" }}>
    <defs>
      <linearGradient id="jacket-side" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#A890C0" />
        <stop offset="100%" stopColor="#C0A8D8" />
      </linearGradient>
    </defs>
    {/* Hood folded at collar */}
    <path d="M70,48 Q80,35 110,33 Q140,35 150,48 L148,62 Q110,55 72,62 Z" fill="#B098C8" />
    <path d="M75,50 Q110,42 145,50" stroke="#A088B8" strokeWidth="1.5" fill="none" />
    {/* Left side panel */}
    <path d="M52,68 L48,250 Q48,260 58,262 L105,265 L108,68 Z" fill="url(#jacket-side)" />
    {/* Right side panel */}
    <path d="M112,68 L115,265 Q162,262 172,260 Q172,250 168,68 Z" fill="url(#jacket-side)" />
    {/* Main body overlay */}
    <path d="M62,62 Q110,55 158,62 L155,255 Q110,260 65,255 Z" fill="#C0A8D8" />
    {/* Left sleeve */}
    <path d="M52,65 L28,75 Q18,80 20,92 L30,180 Q32,190 40,188 L52,185 Z" fill="#C0A8D8" />
    {/* Right sleeve */}
    <path d="M168,65 L192,75 Q202,80 200,92 L190,180 Q188,190 180,188 L168,185 Z" fill="#C0A8D8" />
    {/* Side panel lines */}
    <path d="M72,68 L70,255" stroke="#A890C0" strokeWidth="1.5" opacity="0.5" />
    <path d="M148,68 L150,255" stroke="#A890C0" strokeWidth="1.5" opacity="0.5" />
    {/* Zip teeth */}
    <line x1="110" y1="55" x2="110" y2="255" stroke="#E8E0F0" strokeWidth="3" />
    {[...Array(25)].map((_, i) => (
      <line key={i} x1="108" y1={60 + i * 8} x2="112" y2={60 + i * 8} stroke="#D0C8E0" strokeWidth="1.5" />
    ))}
    {/* Left hip pocket */}
    <rect x="72" y="185" width="30" height="20" rx="3" stroke="#B098C8" strokeWidth="1.5" fill="none" opacity="0.6" />
    {/* Right hip pocket */}
    <rect x="118" y="185" width="30" height="20" rx="3" stroke="#B098C8" strokeWidth="1.5" fill="none" opacity="0.6" />
  </svg>
);

export const LongSleeveIllustration = () => (
  <svg viewBox="0 0 220 280" className="w-[75%] h-[75%]" fill="none" style={{ filter: "drop-shadow(0 8px 16px rgba(0,0,0,0.15))" }}>
    <defs>
      <pattern id="ribbing-w4" width="200" height="8" patternUnits="userSpaceOnUse">
        <rect width="200" height="8" fill="transparent" />
        <line x1="0" y1="7" x2="200" y2="7" stroke="#D8A890" strokeWidth="0.8" opacity="0.4" />
      </pattern>
    </defs>
    {/* Crew neck */}
    <path d="M85,42 Q110,52 135,42" stroke="#D8A890" strokeWidth="3" fill="none" />
    <path d="M88,40 Q110,48 132,40" stroke="#DDB0A0" strokeWidth="1.5" fill="none" />
    {/* Main body */}
    <path d="M68,50 Q110,42 152,50 L148,240 Q110,245 72,240 Z" fill="#EEC0A8" />
    {/* Ribbing overlay */}
    <path d="M68,50 Q110,42 152,50 L148,240 Q110,245 72,240 Z" fill="url(#ribbing-w4)" />
    {/* Left sleeve */}
    <path d="M68,52 L25,68 Q15,72 16,82 L22,185 Q24,195 34,192 L55,188 Q60,120 68,80 Z" fill="#D8A890" />
    {/* Right sleeve */}
    <path d="M152,52 L195,68 Q205,72 204,82 L198,185 Q196,195 186,192 L165,188 Q160,120 152,80 Z" fill="#D8A890" />
    {/* Left cuff */}
    <rect x="20" y="182" width="18" height="12" rx="3" fill="#D0A088" />
    {/* Right cuff */}
    <rect x="182" y="182" width="18" height="12" rx="3" fill="#D0A088" />
    {/* Body hem */}
    <path d="M72,236 Q110,242 148,236 L148,244 Q110,250 72,244 Z" fill="#D8A890" opacity="0.5" />
  </svg>
);

// Men's product illustrations

export const ShortsIllustration = () => (
  <svg viewBox="0 0 200 200" className="w-[75%] h-[75%]" fill="none" style={{ filter: "drop-shadow(0 8px 16px rgba(0,0,0,0.2))" }}>
    {/* Waistband */}
    <path d="M45,45 Q100,38 155,45 L153,62 Q100,56 47,62 Z" fill="#3A3530" />
    {/* Drawstring eyelets */}
    <circle cx="90" cy="50" r="2.5" stroke="#555" strokeWidth="1" fill="none" />
    <circle cx="110" cy="50" r="2.5" stroke="#555" strokeWidth="1" fill="none" />
    {/* Drawstring */}
    <path d="M90,50 Q95,56 100,54 Q105,56 110,50" stroke="#555" strokeWidth="1" fill="none" />
    <path d="M86,52 L82,62" stroke="#555" strokeWidth="0.8" />
    <path d="M114,52 L118,62" stroke="#555" strokeWidth="0.8" />
    {/* Left leg panel */}
    <path d="M47,62 L42,148 Q42,158 52,160 L95,162 L100,62 Z" fill="#2A2522" />
    {/* Right leg panel */}
    <path d="M100,62 L105,162 L148,160 Q158,158 158,148 L153,62 Z" fill="#2A2522" />
    {/* Inner liner peek left */}
    <path d="M50,150 Q70,160 92,155" stroke="#1A1A2E" strokeWidth="3" fill="none" opacity="0.6" />
    {/* Inner liner peek right */}
    <path d="M108,155 Q130,160 150,150" stroke="#1A1A2E" strokeWidth="3" fill="none" opacity="0.6" />
    {/* Side split left */}
    <path d="M44,138 L42,155" stroke="#1A1210" strokeWidth="2" />
    {/* Side split right */}
    <path d="M156,138 L158,155" stroke="#1A1210" strokeWidth="2" />
    {/* Reflective stripe left */}
    <path d="M46,65 L43,148" stroke="#7B93F5" strokeWidth="3" opacity="0.8" />
    {/* Reflective stripe right */}
    <path d="M154,65 L157,148" stroke="#7B93F5" strokeWidth="3" opacity="0.8" />
    {/* Center seam */}
    <line x1="100" y1="62" x2="100" y2="162" stroke="#1E1E1E" strokeWidth="1" opacity="0.5" />
  </svg>
);

export const TShirtIllustration = () => (
  <svg viewBox="0 0 220 280" className="w-[75%] h-[75%]" fill="none" style={{ filter: "drop-shadow(0 8px 16px rgba(0,0,0,0.2))" }}>
    <defs>
      <pattern id="fabric-m2" width="8" height="8" patternUnits="userSpaceOnUse">
        <rect width="8" height="8" fill="#252220" />
        <rect width="8" height="1" fill="#282520" opacity="0.3" />
      </pattern>
    </defs>
    {/* Crew neck ribbing */}
    <path d="M85,45 Q110,55 135,45" stroke="#1E1E1E" strokeWidth="4" fill="none" />
    <path d="M87,43 Q110,51 133,43" stroke="#2A2828" strokeWidth="2" fill="none" />
    {/* Main body — relaxed fit */}
    <path d="M62,52 Q110,42 158,52 L155,242 Q110,250 65,242 Z" fill="url(#fabric-m2)" />
    {/* Left sleeve with hem fold */}
    <path d="M62,52 L22,68 Q12,74 15,85 L28,130 Q32,138 42,135 L60,128 Z" fill="#252220" />
    <path d="M28,126 Q36,134 44,130" stroke="#1E1E1E" strokeWidth="1.5" fill="none" />
    {/* Right sleeve with hem fold */}
    <path d="M158,52 L198,68 Q208,74 205,85 L192,130 Q188,138 178,135 L160,128 Z" fill="#252220" />
    <path d="M192,126 Q184,134 176,130" stroke="#1E1E1E" strokeWidth="1.5" fill="none" />
    {/* Mountain graphic */}
    <path d="M75,140 L95,105 L110,125 L125,100 L145,140" stroke="#7B93F5" strokeWidth="2.5" fill="none" strokeLinejoin="round" />
    <path d="M82,140 L100,115 L110,128 L120,112 L138,140" stroke="#7B93F5" strokeWidth="1.5" fill="none" opacity="0.4" strokeLinejoin="round" />
    {/* BB ATHLETICS text */}
    <text x="110" y="158" textAnchor="middle" fontFamily="monospace" fontSize="8" letterSpacing="3" fill="#7B93F5" opacity="0.9">BB ATHLETICS</text>
    {/* Fabric wrinkle shadows */}
    <path d="M80,180 Q90,185 85,195" stroke="#1E1E1E" strokeWidth="1" fill="none" opacity="0.4" />
    <path d="M140,175 Q130,182 135,190" stroke="#1E1E1E" strokeWidth="1" fill="none" opacity="0.4" />
    <path d="M100,200 Q110,205 105,215" stroke="#1E1E1E" strokeWidth="0.8" fill="none" opacity="0.3" />
  </svg>
);

export const VestIllustration = () => (
  <svg viewBox="0 0 200 280" className="w-[75%] h-[75%]" fill="none" style={{ filter: "drop-shadow(0 8px 16px rgba(0,0,0,0.2))" }}>
    <defs>
      <pattern id="quilt-m3" width="20" height="20" patternUnits="userSpaceOnUse">
        <rect width="20" height="20" fill="transparent" />
        <line x1="0" y1="0" x2="20" y2="20" stroke="#243040" strokeWidth="0.5" opacity="0.3" />
        <line x1="20" y1="0" x2="0" y2="20" stroke="#243040" strokeWidth="0.5" opacity="0.3" />
      </pattern>
    </defs>
    {/* High collar */}
    <path d="M75,30 Q100,25 125,30 L123,50 Q100,45 77,50 Z" fill="#1A2535" />
    <line x1="100" y1="28" x2="100" y2="48" stroke="#7B93F5" strokeWidth="2" />
    {/* Main body */}
    <path d="M55,55 Q100,45 145,55 L140,245 Q100,252 60,245 Z" fill="#1A2535" />
    {/* Quilted pattern overlay */}
    <path d="M55,55 Q100,45 145,55 L140,245 Q100,252 60,245 Z" fill="url(#quilt-m3)" />
    {/* Side panels */}
    <path d="M55,55 L50,245 Q50,248 60,245 L55,55" fill="#243040" opacity="0.6" />
    <path d="M145,55 L150,245 Q150,248 140,245 L145,55" fill="#243040" opacity="0.6" />
    {/* Armhole curves left */}
    <path d="M55,55 Q42,80 48,115" stroke="#0F1520" strokeWidth="3" fill="none" />
    {/* Armhole curves right */}
    <path d="M145,55 Q158,80 152,115" stroke="#0F1520" strokeWidth="3" fill="none" />
    {/* Center zip */}
    <line x1="100" y1="48" x2="100" y2="245" stroke="#7B93F5" strokeWidth="2.5" />
    {[...Array(24)].map((_, i) => (
      <line key={i} x1="98" y1={52 + i * 8} x2="102" y2={52 + i * 8} stroke="#5A73D5" strokeWidth="1" />
    ))}
    {/* Left chest zip pocket */}
    <rect x="65" y="75" width="28" height="20" rx="2" stroke="#7B93F5" strokeWidth="1.2" fill="none" />
    <circle cx="92" cy="85" r="2" fill="#7B93F5" opacity="0.6" />
    {/* Right chest zip pocket */}
    <rect x="107" y="75" width="28" height="20" rx="2" stroke="#7B93F5" strokeWidth="1.2" fill="none" />
    <circle cx="108" cy="85" r="2" fill="#7B93F5" opacity="0.6" />
    {/* Reflective strip at shoulders */}
    <path d="M58,55 Q100,47 142,55" stroke="#7B93F5" strokeWidth="3" opacity="0.5" />
  </svg>
);

export const CompressionTightIllustration = () => (
  <svg viewBox="0 0 200 320" className="w-[75%] h-[75%]" fill="none" style={{ filter: "drop-shadow(0 8px 16px rgba(0,0,0,0.2))" }}>
    <defs>
      <pattern id="fabric-m4" width="6" height="6" patternUnits="userSpaceOnUse">
        <rect width="6" height="6" fill="#201A18" />
        <line x1="0" y1="3" x2="6" y2="3" stroke="#251E1C" strokeWidth="0.4" opacity="0.3" />
      </pattern>
    </defs>
    {/* Wide performance waistband */}
    <path d="M55,30 Q100,24 145,30 L143,52 Q100,46 57,52 Z" fill="#2C2520" />
    <path d="M58,38 Q100,33 142,38" stroke="#3A3530" strokeWidth="1" fill="none" opacity="0.5" />
    <path d="M58,45 Q100,40 142,45" stroke="#3A3530" strokeWidth="1" fill="none" opacity="0.5" />
    {/* Left leg */}
    <path d="M57,52 Q54,100 52,160 Q50,220 52,275 Q52,290 62,292 Q70,292 72,285 Q76,220 78,160 Q80,100 100,58" fill="url(#fabric-m4)" />
    {/* Right leg */}
    <path d="M100,58 Q120,100 122,160 Q124,220 128,285 Q130,292 138,292 Q148,290 148,275 Q150,220 148,160 Q146,100 143,52" fill="url(#fabric-m4)" />
    {/* Flatlock seam left */}
    <path d="M65,60 Q62,120 60,180 Q58,240 60,280" stroke="#2A2420" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.5" />
    {/* Flatlock seam right */}
    <path d="M135,60 Q138,120 140,180 Q142,240 140,280" stroke="#2A2420" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.5" />
    {/* Reflective stripe left — hip to ankle */}
    <path d="M55,55 Q52,120 51,180 Q50,240 53,282" stroke="#7B93F5" strokeWidth="3" opacity="0.8" />
    {/* Reflective stripe right — hip to ankle */}
    <path d="M145,55 Q148,120 149,180 Q150,240 147,282" stroke="#7B93F5" strokeWidth="3" opacity="0.8" />
    {/* Mesh panel behind left knee */}
    <rect x="56" y="185" width="18" height="25" rx="5" fill="#1A1412" opacity="0.5" />
    <line x1="58" y1="190" x2="72" y2="190" stroke="#2A2420" strokeWidth="0.5" opacity="0.4" />
    <line x1="58" y1="195" x2="72" y2="195" stroke="#2A2420" strokeWidth="0.5" opacity="0.4" />
    <line x1="58" y1="200" x2="72" y2="200" stroke="#2A2420" strokeWidth="0.5" opacity="0.4" />
    <line x1="58" y1="205" x2="72" y2="205" stroke="#2A2420" strokeWidth="0.5" opacity="0.4" />
    {/* Mesh panel behind right knee */}
    <rect x="126" y="185" width="18" height="25" rx="5" fill="#1A1412" opacity="0.5" />
    <line x1="128" y1="190" x2="142" y2="190" stroke="#2A2420" strokeWidth="0.5" opacity="0.4" />
    <line x1="128" y1="195" x2="142" y2="195" stroke="#2A2420" strokeWidth="0.5" opacity="0.4" />
    <line x1="128" y1="200" x2="142" y2="200" stroke="#2A2420" strokeWidth="0.5" opacity="0.4" />
    <line x1="128" y1="205" x2="142" y2="205" stroke="#2A2420" strokeWidth="0.5" opacity="0.4" />
  </svg>
);
