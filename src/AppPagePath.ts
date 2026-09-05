import z from 'zod';

export const AppPagePath = z.enum([
  "/tool/mean",
  "/notes/example-lesson",
  "/"
]);
export type AppPagePath = z.infer<typeof AppPagePath>;