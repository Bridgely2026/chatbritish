"use client";

import Image from "next/image";
import { useState } from "react";

// A video facade: a poster and a play button. Nothing is requested from
// YouTube until the button is pressed; then the button is swapped for a
// youtube-nocookie player that starts playing. The poster is either
// public/founder-poster.webp (when it exists at build time) or typographic.
export default function FounderVideo({
  videoId,
  name,
  duration,
  posterSrc,
}: {
  videoId: string;
  name: string;
  duration: string;
  posterSrc: string | null;
}) {
  const [playing, setPlaying] = useState(false);
  const title = "Meet the coach behind Chat British";

  return (
    <div className="relative aspect-video overflow-hidden rounded-[14px] bg-surface text-ink shadow-[0_20px_44px_rgb(var(--c-shadow)/0.2)]">
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${encodeURIComponent(videoId)}?autoplay=1&rel=0`}
          title={name ? `${title}: ${name}` : title}
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
          className="absolute inset-0 h-full w-full border-0"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`Play the founder introduction${duration ? ` (${duration})` : ""}. The video loads from YouTube.`}
          className="group absolute inset-0 block h-full w-full text-left focus-visible:outline-offset-[-6px]"
        >
          {posterSrc ? (
            <Image src={posterSrc} alt="" fill sizes="(min-width: 980px) 600px, 100vw" className="object-cover" />
          ) : (
            <span className="absolute inset-0 flex flex-col justify-end p-[18px] min-[560px]:p-[26px]">
              <span className="block max-w-[12em] font-display text-[clamp(1.4rem,2.6vw,2rem)] font-semibold leading-[1.12] text-ink">
                {title}
              </span>
              {name && <span className="mt-1.5 block text-[15px] text-muted">{name}</span>}
            </span>
          )}
          {duration && (
            <span className="absolute left-[18px] top-[18px] rounded-[5px] bg-canvas/80 px-[9px] py-[3px] text-[13px] min-[560px]:left-[26px] min-[560px]:top-[26px]">
              {duration}
            </span>
          )}
          <span className="absolute right-[18px] top-[18px] grid h-[62px] w-[62px] place-items-center rounded-full bg-primary text-on-primary shadow-[0_0_0_8px_rgb(var(--c-primary)/0.22)] group-hover:bg-primary-dark min-[560px]:right-[26px] min-[560px]:top-[26px] min-[560px]:h-[76px] min-[560px]:w-[76px]">
            <svg viewBox="0 0 24 24" aria-hidden="true" className="ml-1 h-[30px] w-[30px]">
              <path d="M6 4 L20 12 L6 20 Z" fill="currentColor" />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
}
