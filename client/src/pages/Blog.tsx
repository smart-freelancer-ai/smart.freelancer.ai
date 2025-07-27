import { useQuery } from "@tanstack/react-query";
import { supabase } from "../lib/supabase";
import { Post } from "../../../shared/blog-schema";
import { Link } from "wouter";
import { Calendar, User, ExternalLink } from "lucide-react";
import SEOHead from "@/components/SEOHead";

async function fetchPosts(): Promise<Post[]> {
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .eq('published', true)
    .order('created_at', { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  return data || [];
}

export default function Blog() {
  const { data: posts, isLoading, error } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  });

  if (isLoading) {
    return (
      <div className="flex-grow flex items-center justify-center py-12 px-4">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">جاري تحميل المقالات...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex-grow flex items-center justify-center py-12 px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            المدونة
          </h1>
          <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
            <p className="text-red-600">
              حدث خطأ في تحميل المقالات. يرجى المحاولة مرة أخرى لاحقاً.
            </p>
            <p className="text-sm text-red-500 mt-2">
              {error instanceof Error ? error.message : 'خطأ غير معروف'}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-grow py-12 px-4">
      <SEOHead
        title="مدونة المستقل الذكي | مقالات ونصائح في الذكاء الاصطناعي والعمل الحر"
        description="اكتشف أحدث المقالات والنصائح حول كيفية استخدام الذكاء الاصطناعي لتعزيز مسيرتك المهنية كمستقل عربي."
      />
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            المدونة
          </h1>
          <p className="text-xl text-gray-600">
            مقالات ونصائح مفيدة في مجال العمل الحر والتقنية
          </p>
        </div>

        {posts && posts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
                {post.image_url && (
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image_url}
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
                    />
                  </div>
                )}

                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                    {post.title}
                  </h2>

                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{post.author_name}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>
                        {new Date(post.created_at).toLocaleDateString('ar-SA', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                    {post.content.substring(0, 150)}...
                  </p>

                  <Link href={`/blog/${post.slug}`}>
                    <span className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200 cursor-pointer">
                      اقرأ المزيد
                      <ExternalLink className="w-4 h-4" />
                    </span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center">
            <div className="bg-gray-50 p-12 rounded-lg">
              <p className="text-gray-500 text-lg">
                لا توجد مقالات منشورة حالياً
              </p>
              <p className="text-gray-400 mt-2">
                ترقب المقالات الجديدة قريباً
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}