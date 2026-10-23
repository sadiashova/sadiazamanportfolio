import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";
import { routeTree } from "@/routeTree.gen";
import { projects } from "@/data/projects";
import { validateContact } from "@/components/portfolio/Contact";

describe("portfolio", () => {
  it("has detail routes for all three projects with correct links", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });
    for (const slug of ["silentalert", "gatherly", "subsphere"]) {
      expect(router.matchRoutes(`/projects/${slug}`).at(-1)?.routeId).toBe("/projects/$slug");
    }
    expect(projects.find((p) => p.slug === "gatherly")?.live).toBe("https://gatherly-nine-alpha.vercel.app/");
    expect(projects.find((p) => p.slug === "subsphere")?.github).toBe("https://github.com/sadiashova/SubSphere");
  });
  it("rejects an invalid contact email", () => {
    expect(validateContact({ name: "Ann", email: "bad", subject: "Hello", message: "A long enough message" }).email).toBeDefined();
  });
});
