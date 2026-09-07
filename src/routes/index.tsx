import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PRX — Artist · Creative · Storyteller" },
      {
        name: "description",
        content:
          "Welcome to my world. Cinematic portfolio of PRX — artist, creative, storyteller.",
      },
      { property: "og:title", content: "PRX — Artist · Creative · Storyteller" },
      {
        property: "og:description",
        content: "Welcome to my world. Cinematic portfolio of PRX.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  useEffect(() => {
    window.location.replace("/site/index.html");
  }, []);

  return (
    <main style={{ minHeight: "100vh", background: "#000" }}>
      <h1 className="sr-only">PRX — Artist, Creative, Storyteller</h1>
    </main>
  );
}
