import z from 'zod';

export const AppPagePath = z.enum([
  "/tool/mean",
  "/notes/stats-l001-catquant",
  "/notes/stats-l002-catdata",
  "/notes/stats-l003-catextra",
  "/notes/alg-l001-realnums",
  "/"
]);
export type AppPagePath = z.infer<typeof AppPagePath>;