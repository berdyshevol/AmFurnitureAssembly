import type { NextConfig } from "next";

// Pages that have a markdown copy for AI agents (see lib/llm-content.ts).
const mdPages = "about|services|pricing|gallery|testimonials|contact|blog";
const acceptsMarkdown = [
  { type: "header" as const, key: "accept", value: "(.*)text/markdown(.*)" },
];

const nextConfig: NextConfig = {
  async rewrites() {
    return {
      // Run before pages so `Accept: text/markdown` on a page URL gets markdown instead of HTML.
      beforeFiles: [
        { source: "/", has: acceptsMarkdown, destination: "/md" },
        { source: `/:page(${mdPages})`, has: acceptsMarkdown, destination: "/md/:page" },
        { source: "/blog/:slug", has: acceptsMarkdown, destination: "/md/blog/:slug" },
      ],
      afterFiles: [
        { source: "/index.md", destination: "/md" },
        { source: `/:page(${mdPages})\\.md`, destination: "/md/:page" },
        { source: "/blog/:slug([^/]+)\\.md", destination: "/md/blog/:slug" },
      ],
      fallback: [],
    };
  },
};

export default nextConfig;
