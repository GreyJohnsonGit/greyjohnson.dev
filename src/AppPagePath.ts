import z from 'zod';

export const AppPagePath = z.enum([
  "/tool/mean",
  "/"
]);
export type AppPagePath = z.infer<typeof AppPagePath>;