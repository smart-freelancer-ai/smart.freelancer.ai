import { z } from "zod";

export const PostSchema = z.object({
  id: z.number(),
  title: z.string(),
  slug: z.string(),
  content: z.string(),
  author_name: z.string(),
  image_url: z.string().nullable(),
  published: z.boolean(),
  created_at: z.string(),
});

export const InsertPostSchema = z.object({
  title: z.string().min(1, "العنوان مطلوب"),
  slug: z.string().min(1, "الرابط مطلوب"),
  content: z.string().min(10, "المحتوى يجب أن يكون أكثر من 10 أحرف"),
  author_name: z.string().min(1, "اسم الكاتب مطلوب"),
  image_url: z.string().url("رابط الصورة غير صحيح").optional().nullable(),
  published: z.boolean().default(true),
});

export type Post = z.infer<typeof PostSchema>;
export type InsertPost = z.infer<typeof InsertPostSchema>;

// Utility function to create slug from Arabic title
export function createSlug(title: string): string {
  return title
    .trim()
    .toLowerCase()
    .replace(/[\u0600-\u06FF\s]+/g, '-') // Replace Arabic chars and spaces with hyphens
    .replace(/[^\w\-]+/g, '') // Remove non-word chars except hyphens
    .replace(/\-\-+/g, '-') // Replace multiple hyphens with single hyphen
    .replace(/^-+/, '') // Remove leading hyphens
    .replace(/-+$/, ''); // Remove trailing hyphens
}