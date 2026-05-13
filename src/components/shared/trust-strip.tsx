import { TRUST_COMPANIES } from "@/components/shared/trust-strip.data";

const MARQUEE_DURATION = "30s";

export function TrustStrip() {
  // Dupliquer le contenu 3 fois pour un défilement infini fluide
  const duplicatedCompanies = [...TRUST_COMPANIES, ...TRUST_COMPANIES, ...TRUST_COMPANIES];

  return (
    <div className="w-full border-t border-b border-white/8 dark:border-slate-200/20 py-4">
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-33.333%); }
        }

        .trust-strip-track {
          animation: marquee ${MARQUEE_DURATION} linear infinite;
          animation-play-state: running;
          will-change: transform;
        }

        .trust-strip-track:hover {
          animation-play-state: paused;
        }

        .trust-strip-mask {
          mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
          -webkit-mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
        }
      `}</style>

      <div className="mx-auto flex w-full max-w-360 items-center gap-4 px-4 md:px-8 lg:px-12">
        <p className="whitespace-nowrap text-xs uppercase tracking-[0.3em] text-white/30 dark:text-slate-400 border-r border-white/10 pr-4">
          Ils m&apos;ont fait confiance :
        </p>

        <div className="trust-strip-mask overflow-hidden flex-1">
          <div
            className="trust-strip-track inline-flex min-w-[300%] items-center gap-6"
            role="marquee"
            aria-label="Entreprises avec lesquelles j'ai collaboré"
          >
            {duplicatedCompanies.map((company, index) => (
              <span key={`${company}-${index}`} className="inline-flex items-center whitespace-nowrap">
                <span className="transition-colors duration-200 ease-out text-white/50 hover:text-(--color-primary-600) dark:text-slate-400">
                  {company}
                </span>
                {index < duplicatedCompanies.length - 1 && (
                  <span aria-hidden="true" className="mx-2 text-white/20 dark:text-slate-300">
                    ·
                  </span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
