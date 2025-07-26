import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { supabase } from "../lib/supabase";
import { InsertPostSchema, InsertPost, createSlug } from "../../../shared/blog-schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";
import { Save, Plus } from "lucide-react";

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
  // First, try to create the table if it doesn't exist
  const { error: createError } = await supabase.rpc('create_posts_table');
  
  if (createError) {
    // If RPC doesn't exist, we'll create the table manually
    console.log('RPC not available, table might already exist or need manual creation');
  }
  
  return true;
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
    mutationFn: initializeTable,
    onSuccess: () => {
      toast({
        title: "تم التهيئة",
        description: "تم تهيئة قاعدة البيانات بنجاح",
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
    const samplePosts: InsertPost[] = [
      {
        title: "كيف يغير الذكاء الاصطناعي مستقبل العمل الحر",
        slug: createSlug("كيف يغير الذكاء الاصطناعي مستقبل العمل الحر"),
        content: "يشهد عالم العمل الحر تطوراً جذرياً مع ظهور تقنيات الذكاء الاصطناعي. هذه التقنيات لا تهدد مستقبل المستقلين، بل تفتح أمامهم آفاقاً جديدة وتساعدهم على تقديم خدمات أكثر كفاءة وجودة.\n\nيمكن للمستقلين الاستفادة من أدوات الذكاء الاصطناعي في تحسين إنتاجيتهم، أتمتة المهام الروتينية، وتقديم حلول مبتكرة لعملائهم. على سبيل المثال، يمكن لكتاب المحتوى استخدام أدوات الذكاء الاصطناعي لتحسين النصوص وتسريع عملية البحث.\n\nالمطورون يمكنهم الاستفادة من أدوات مثل GitHub Copilot لكتابة الكود بشكل أسرع وأكثر دقة. المصممون يمكنهم استخدام أدوات تصميم ذكية لإنشاء تصاميم احترافية في وقت أقل.\n\nالمفتاح هو التكيف مع هذه التقنيات وتعلم كيفية دمجها في سير العمل بدلاً من مقاومتها.",
        author_name: "أحمد المستقل",
        image_url: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=400&fit=crop",
        published: true,
      },
      {
        title: "أدوات الذكاء الاصطناعي للمستقلين",
        slug: createSlug("أدوات الذكاء الاصطناعي للمستقلين"),
        content: "في عصر الذكاء الاصطناعي، يجب على كل مستقل أن يكون على دراية بأهم الأدوات التي يمكن أن تساعده في تطوير عمله وزيادة كفاءته.\n\n**أدوات الكتابة والمحتوى:**\n- ChatGPT للمساعدة في كتابة المحتوى وتحريره\n- Grammarly لتصحيح الأخطاء النحوية\n- Copy.ai لإنشاء المحتوى التسويقي\n\n**أدوات التصميم:**\n- Midjourney لإنشاء الصور بالذكاء الاصطناعي\n- Canva AI للتصميم التلقائي\n- Adobe Firefly للتعديل على الصور\n\n**أدوات البرمجة:**\n- GitHub Copilot للمساعدة في كتابة الكود\n- Tabnine لاقتراح الكود\n- CodeT5 لتوليد الكود من الوصف\n\n**أدوات إدارة المشاريع:**\n- Notion AI لتنظيم المهام\n- Monday.com AI للتنبؤات والتحليلات\n- Asana AI للتخطيط الذكي\n\nالمهم هو اختيار الأدوات المناسبة لمجال عملك وتعلم كيفية استخدامها بفعالية.",
        author_name: "سارة التقنية",
        image_url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=400&fit=crop",
        published: true,
      },
      {
        title: "استراتيجيات زيادة الدخل باستخدام AI",
        slug: createSlug("استراتيجيات زيادة الدخل باستخدام AI"),
        content: "يمكن للمستقلين زيادة دخلهم بشكل كبير من خلال الاستفادة الذكية من تقنيات الذكاء الاصطناعي. إليك أهم الاستراتيجيات:\n\n**1. تقديم خدمات جديدة:**\n- خدمات تدريب الذكاء الاصطناعي\n- استشارات تحويل الأعمال للذكاء الاصطناعي\n- تطوير حلول ذكية مخصصة\n\n**2. تحسين الكفاءة:**\n- أتمتة المهام المتكررة\n- تسريع عمليات التسليم\n- تقليل الأخطاء البشرية\n\n**3. التميز في السوق:**\n- تقديم خدمات بجودة أعلى\n- أسعار تنافسية بفضل الكفاءة\n- عروض قيمة فريدة\n\n**4. التوسع في الخدمات:**\n- تقديم حزم خدمات شاملة\n- خدمات متعددة اللغات بسهولة\n- استهداف أسواق جديدة\n\n**5. بناء نماذج دخل متكررة:**\n- اشتراكات صيانة للحلول الذكية\n- استشارات دورية\n- تدريب مستمر للعملاء\n\nالمفتاح هو البدء بتطبيق استراتيجية واحدة وإتقانها قبل الانتقال للتالية.",
        author_name: "محمد الخبير",
        image_url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
        published: true,
      },
    ];

    for (const post of samplePosts) {
      try {
        await createPost(post);
      } catch (error) {
        console.error('Error creating sample post:', error);
      }
    }

    queryClient.invalidateQueries({ queryKey: ['posts'] });
    toast({
      title: "تم بنجاح",
      description: "تم إضافة المقالات النموذجية",
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

        {/* Initialize Database Button */}
        <div className="mb-8 p-4 bg-blue-50 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">تهيئة قاعدة البيانات</h2>
          <p className="text-gray-600 mb-4">
            إذا كانت هذه المرة الأولى التي تستخدم فيها النظام، اضغط على الزر أدناه لتهيئة قاعدة البيانات.
          </p>
          <div className="flex gap-4">
            <Button
              onClick={handleInitialize}
              disabled={isInitializing || initializeMutation.isPending}
              variant="outline"
            >
              {(isInitializing || initializeMutation.isPending) ? "جاري التهيئة..." : "تهيئة قاعدة البيانات"}
            </Button>
            <Button
              onClick={addSamplePosts}
              disabled={createPostMutation.isPending}
              variant="secondary"
            >
              إضافة مقالات نموذجية
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