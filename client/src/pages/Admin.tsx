import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { supabase } from "../lib/supabase";
import { setupDatabase, testConnection } from "../lib/database-setup";
import { InsertPostSchema, InsertPost, createSlug } from "../../../shared/blog-schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";
import { Save, Plus, Database, TestTube } from "lucide-react";

async function createPost(post: InsertPost) {
  const { data, error } = await supabase
    .from('posts')
    .insert([post])
    .select()
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

async function initializeTable() {
  try {
    // Step 1: Create the posts table if it doesn't exist
    const { error: tableError } = await supabase.rpc('create_posts_table', {
      sql: `
        CREATE TABLE IF NOT EXISTS posts (
          id SERIAL PRIMARY KEY,
          title TEXT NOT NULL,
          slug TEXT NOT NULL UNIQUE,
          content TEXT NOT NULL,
          author_name TEXT NOT NULL,
          image_url TEXT,
          published BOOLEAN DEFAULT true,
          created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
      `
    });

    // If RPC doesn't work, try direct SQL execution
    if (tableError) {
      console.log('RPC method failed, attempting direct SQL execution');
      
      // Try to create table directly
      const { error: directError } = await supabase
        .from('posts')
        .select('id')
        .limit(1);
      
      if (directError && directError.message.includes('relation "posts" does not exist')) {
        throw new Error('Posts table does not exist and cannot be created automatically. Please create it manually in Supabase Dashboard.');
      }
    }

    // Step 2: Configure Row Level Security
    const { error: rlsError } = await supabase.rpc('setup_posts_rls');
    
    if (rlsError) {
      console.log('RLS setup failed, table might already be configured or need manual setup');
    }

    return true;
  } catch (error) {
    console.error('Table initialization error:', error);
    throw error;
  }
}

export default function Admin() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [isInitializing, setIsInitializing] = useState(false);

  const form = useForm<InsertPost>({
    resolver: zodResolver(InsertPostSchema),
    defaultValues: {
      title: '',
      slug: '',
      content: '',
      author_name: '',
      image_url: '',
      published: true,
    },
  });

  const createPostMutation = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      toast({
        title: "تم بنجاح",
        description: "تم إنشاء المقال بنجاح",
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ['posts'] });
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        title: "خطأ",
        description: error.message,
      });
    },
  });

  const initializeMutation = useMutation({
    mutationFn: setupDatabase,
    onSuccess: (result) => {
      toast({
        title: "تم التهيئة",
        description: result.message,
      });
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        title: "خطأ في التهيئة",
        description: error.message,
      });
    },
  });

  const testConnectionMutation = useMutation({
    mutationFn: testConnection,
    onSuccess: (result) => {
      toast({
        title: "اختبار الاتصال ناجح",
        description: `تم الاتصال بقاعدة البيانات. عدد المقالات: ${result.count}`,
      });
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        title: "فشل اختبار الاتصال",
        description: error.message,
      });
    },
  });

  const handleTitleChange = (title: string) => {
    const slug = createSlug(title);
    form.setValue('slug', slug);
  };

  const onSubmit = (data: InsertPost) => {
    createPostMutation.mutate(data);
  };

  const handleInitialize = () => {
    setIsInitializing(true);
    initializeMutation.mutate();
    setIsInitializing(false);
  };

  const addSamplePosts = async () => {
    const samplePosts = [
      {
        title: "كيف يغير الذكاء الاصطناعي مستقبل العمل الحر",
        slug: "ai-future-freelancing",
        content: "يشهد عالم العمل الحر تطوراً جذرياً مع ظهور تقنيات الذكاء الاصطناعي. هذه التقنيات لا تهدد مستقبل المستقلين، بل تفتح أمامهم آفاقاً جديدة وتساعدهم على تقديم خدمات أكثر كفاءة وجودة.",
        author_name: "أحمد المستقل",
        image_url: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=400&fit=crop",
        published: true,
      },
      {
        title: "أدوات الذكاء الاصطناعي للمستقلين",
        slug: "ai-tools-freelancers",
        content: "في عصر الذكاء الاصطناعي، يجب على كل مستقل أن يكون على دراية بأهم الأدوات التي يمكن أن تساعده في تطوير عمله وزيادة كفاءته. من ChatGPT للكتابة إلى GitHub Copilot للبرمجة.",
        author_name: "سارة التقنية",
        image_url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=400&fit=crop",
        published: true,
      },
      {
        title: "استراتيجيات زيادة الدخل باستخدام AI",
        slug: "income-strategies-ai",
        content: "يمكن للمستقلين زيادة دخلهم بشكل كبير من خلال الاستفادة الذكية من تقنيات الذكاء الاصطناعي. تعلم كيفية تطبيق هذه الاستراتيجيات لتحقيق النجاح.",
        author_name: "محمد الخبير",
        image_url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
        published: true,
      },
    ];

    let successCount = 0;
    for (const post of samplePosts) {
      try {
        await createPost(post);
        successCount++;
      } catch (error) {
        console.error('Error creating sample post:', error);
      }
    }

    queryClient.invalidateQueries({ queryKey: ['posts'] });
    toast({
      title: "تم بنجاح",
      description: `تم إضافة ${successCount} مقالات من أصل ${samplePosts.length}`,
    });
  };

  return (
    <div className="flex-grow py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            لوحة إدارة المقالات
          </h1>
          <p className="text-gray-600">
            إضافة وإدارة مقالات المدونة
          </p>
        </div>

        {/* Database Management Section */}
        <div className="mb-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
          <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
            <Database className="w-5 h-5" />
            إدارة قاعدة البيانات
          </h2>
          <p className="text-gray-600 mb-4">
            إدارة اتصال قاعدة البيانات والمحتوى. استخدم هذه الأدوات لاختبار الاتصال وإضافة المحتوى النموذجي.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button
              onClick={() => testConnectionMutation.mutate()}
              disabled={testConnectionMutation.isPending}
              variant="outline"
              className="flex items-center gap-2"
            >
              <TestTube className="w-4 h-4" />
              {testConnectionMutation.isPending ? "جاري الاختبار..." : "اختبار الاتصال"}
            </Button>
            <Button
              onClick={handleInitialize}
              disabled={isInitializing || initializeMutation.isPending}
              variant="outline"
              className="flex items-center gap-2"
            >
              <Database className="w-4 h-4" />
              {(isInitializing || initializeMutation.isPending) ? "جاري التهيئة..." : "تهيئة قاعدة البيانات"}
            </Button>
            <Button
              onClick={addSamplePosts}
              disabled={createPostMutation.isPending}
              variant="secondary"
              className="flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              {createPostMutation.isPending ? "جاري الإضافة..." : "إضافة مقالات نموذجية"}
            </Button>
          </div>
        </div>

        {/* Create Post Form */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Plus className="w-6 h-6" />
            إضافة مقال جديد
          </h2>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>عنوان المقال</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        onChange={(e) => {
                          field.onChange(e);
                          handleTitleChange(e.target.value);
                        }}
                        placeholder="أدخل عنوان المقال"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="slug"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>رابط المقال (Slug)</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="سيتم إنشاؤه تلقائياً من العنوان" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="author_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>اسم الكاتب</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="أدخل اسم الكاتب" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="image_url"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>رابط الصورة (اختياري)</FormLabel>
                    <FormControl>
                      <Input {...field} value={field.value || ''} placeholder="https://example.com/image.jpg" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="content"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>محتوى المقال</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        rows={10}
                        placeholder="اكتب محتوى المقال هنا..."
                        className="resize-y"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="published"
                render={({ field }) => (
                  <FormItem className="flex items-center justify-between rounded-lg border p-4">
                    <div className="space-y-0.5">
                      <FormLabel className="text-base">نشر المقال</FormLabel>
                      <div className="text-sm text-gray-500">
                        هل تريد نشر المقال فوراً؟
                      </div>
                    </div>
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                disabled={createPostMutation.isPending}
                className="w-full"
              >
                {createPostMutation.isPending ? (
                  "جاري الحفظ..."
                ) : (
                  <>
                    <Save className="w-4 h-4 ml-2" />
                    حفظ المقال
                  </>
                )}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}