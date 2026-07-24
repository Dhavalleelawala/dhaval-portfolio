import { useEffect } from "react";

const SITE_URL = "https://dhavalleelawala.xyz/";
const DEFAULT_TITLE = "Dhaval Leelawala | Full Stack Developer Portfolio — MERN Stack Expert";

export default function SeoManager({ profile }) {
  useEffect(() => {
    const name = profile?.name || "Dhaval Leelawala";
    document.title = `${name} | Full Stack Developer Portfolio — MERN Stack Expert`;

    const setMeta = (selector, content) => {
      const el = document.querySelector(selector);
      if (el && content) el.setAttribute("content", content);
    };

    setMeta('meta[name="description"]', `Official portfolio of ${name} — Full Stack Developer from Surat, Gujarat. MERN stack, React, Node.js, MongoDB projects and contact.`);
    setMeta('meta[property="og:title"]', `${name} | Full Stack Developer Portfolio`);
    setMeta('meta[name="twitter:title"]', `${name} | Full Stack Developer`);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = SITE_URL;
  }, [profile]);

  return null;
}

export { DEFAULT_TITLE, SITE_URL };
