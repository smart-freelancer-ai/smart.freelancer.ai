import { 
  CheckCircle, 
  Users, 
  Brain, 
  TrendingUp, 
  PenTool, 
  Zap, 
  ArrowRight, 
  Play, 
  X, 
  Star, 
  User, 
  Target, 
  MessageSquare, 
  Shield, 
  Award 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "../lib/supabase";

export default function Home() {
  // Fetch latest blog posts
  const { data: posts, isLoading } = useQuery({
    queryKey: ['latest-posts'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .eq('published', true)
        .order('created_at', { ascending: false })
        .limit(3);
      
      if (error) throw error;
      return data;
    },
  });

  const services = [
    {
      icon: Brain,
      title: "تدريب AI",
      description: "تعلم أحدث أدوات الذكاء الاصطناعي",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: TrendingUp,
      title: "استشارات الإنتاجية",
      description: "خطط مخصصة لزيادة كفاءتك",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: PenTool,
      title: "إنتاج المحتوى",
      description: "محتوى احترافي بالذكاء الاصطناعي",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: Zap,
      title: "حلول الأتمتة",
      description: "أتمتة العمليات وتوفير الوقت",
      color: "from-orange-500 to-red-600"
    }
  ];

  const steps = [
    {
      number: "01",
      title: "تعلم الأدوات",
      description: "احصل على تدريب شامل على أحدث أدوات الذكاء الاصطناعي",
      icon: Brain
    },
    {
      number: "02", 
      title: "طبق الاستراتيجيات",
      description: "اتبع خطط العمل المثبتة لتحسين سير العمل",
      icon: Target
    },
    {
      number: "03",
      title: "ضاعف دخلك",
      description: "اجني ثمار التطوير مع زيادة ملحوظة في الدخل",
      icon: TrendingUp
    }
  ];

  const stats = [
    { number: "500+", label: "مستقل نجح معنا" },
    { number: "300%", label: "زيادة في الإنتاجية" },
    { number: "50+", label: "مشروع مكتمل" },
    { number: "98%", label: "معدل رضا العملاء" }
  ];

  return (
    <div className="flex-grow">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-transparent" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                حول شغفك إلى دخل مضاعف مع الذكاء الاصطناعي
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
                انضم إلى المئات من المستقلين العرب الذين ضاعفوا دخلهم باستخدام أحدث تقنيات الذكاء الاصطناعي
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 font-semibold text-lg px-8 py-4">
                  ابدأ رحلتك المجانية
                  <ArrowRight className="mr-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 font-semibold text-lg px-8 py-4">
                  <Play className="ml-2 h-5 w-5" />
                  شاهد كيف يعمل
                </Button>
              </div>
              <div className="flex items-center gap-6 text-blue-100">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>بدء مجاني تماماً</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>دعم باللغة العربية</span>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/20">
                <div className="space-y-4">
                  <div className="h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full w-3/4"></div>
                  <div className="h-4 bg-gradient-to-r from-green-400 to-blue-400 rounded-full w-1/2"></div>
                  <div className="h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full w-5/6"></div>
                  <div className="text-center py-6">
                    <Brain className="w-16 h-16 mx-auto text-blue-300 mb-4" />
                    <span className="text-blue-100">الذكاء الاصطناعي في العمل</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                تحديات العمل الحر التي نحلها لك
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <X className="w-4 h-4 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">دخل محدود ومتقلب</h3>
                    <p className="text-gray-600">صعوبة في زيادة الأسعار والوصول لعملاء أفضل</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <X className="w-4 h-4 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">وقت مهدور في المهام الروتينية</h3>
                    <p className="text-gray-600">ساعات طويلة في أعمال لا تضيف قيمة حقيقية</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <X className="w-4 h-4 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">منافسة شديدة مع أسعار منخفضة</h3>
                    <p className="text-gray-600">صعوبة في التميز وسط آلاف المستقلين الآخرين</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
                <Brain className="w-16 h-16 text-blue-600 mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  الحل: الذكاء الاصطناعي
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  نعلمك كيفية استخدام أدوات الذكاء الاصطناعي لأتمتة المهام الروتينية، تحسين جودة العمل، وزيادة الإنتاجية بنسبة تصل إلى 300%.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">وفر 15+ ساعة أسبوعياً</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">ضاعف جودة عملك</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">تميز عن المنافسين</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              خدماتنا التي تضمن نجاحك
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              مجموعة شاملة من الخدمات المصممة خصيصاً لتطوير المستقلين العرب
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 border-0 bg-white group">
                  <CardHeader className="pb-4">
                    <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${service.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-gray-900 mb-2">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>

          <div className="text-center">
            <Link href="/services">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4">
                اطلع على جميع الخدمات
                <ArrowRight className="mr-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Success Stories/Results */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              نتائج حقيقية، نجاحات مثبتة
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              أرقام تتحدث عن نفسها من عملائنا الذين حققوا نجاحات ملموسة
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="group">
                <div className="text-4xl md:text-6xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-blue-100 text-lg">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-xl italic mb-6">
                  "بفضل تدريبات المستقل الذكي، تمكنت من زيادة دخلي من 2000 ريال إلى 8000 ريال شهرياً في 4 أشهر فقط. الذكاء الاصطناعي غير حياتي المهنية تماماً."
                </blockquote>
                <div>
                  <div className="font-semibold text-lg">أحمد المطيري</div>
                  <div className="text-blue-100">مطور مواقع، الرياض</div>
                </div>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center mb-4">
                  <User className="w-16 h-16 text-white" />
                </div>
                <div className="text-2xl font-bold mb-2">زيادة 400%</div>
                <div className="text-blue-100">في الدخل الشهري</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              كيف تبدأ رحلة النجاح؟
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              ثلاث خطوات بسيطة تفصلك عن مضاعفة دخلك
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="text-center relative">
                  {/* Connection Line */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-20 left-1/2 w-full h-0.5 bg-gradient-to-r from-blue-200 to-indigo-200 z-0" />
                  )}
                  
                  <div className="relative z-10 bg-white">
                    <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center relative">
                      <IconComponent className="w-8 h-8 text-blue-600" />
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        {step.number}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              أحدث المقالات والنصائح
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              تابع آخر الأخبار والنصائح في عالم الذكاء الاصطناعي والعمل الحر
            </p>
          </div>

          {isLoading ? (
            <div className="grid md:grid-cols-3 gap-8">
              {[...Array(3)].map((_, i) => (
                <Card key={i} className="border-0 shadow-lg">
                  <div className="h-48 bg-gray-200 animate-pulse rounded-t-lg" />
                  <CardContent className="p-6">
                    <div className="h-4 bg-gray-200 rounded animate-pulse mb-4" />
                    <div className="h-6 bg-gray-200 rounded animate-pulse mb-2" />
                    <div className="h-4 bg-gray-200 rounded animate-pulse w-2/3" />
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {posts?.map((post) => (
                <Card key={post.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
                  <div className="h-48 bg-gradient-to-br from-blue-100 to-indigo-100 relative overflow-hidden">
                    {post.image_url ? (
                      <img 
                        src={post.image_url} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <PenTool className="w-12 h-12 text-blue-600" />
                      </div>
                    )}
                  </div>
                  <CardContent className="p-6">
                    <div className="text-sm text-blue-600 mb-2">{post.author_name}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed line-clamp-3">
                      {post.content.substring(0, 100)}...
                    </p>
                    <div className="mt-4">
                      <Link href={`/blog/${post.slug}`} className="text-blue-600 hover:text-blue-700 font-semibold">
                        اقرأ المزيد ←
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          <div className="text-center">
            <Link href="/blog">
              <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4">
                اقرأ جميع المقالات
                <ArrowRight className="mr-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-indigo-900 via-blue-800 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            ابدأ رحلتك نحو النجاح اليوم
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-2xl mx-auto">
            انضم إلى مجتمع المستقلين الناجحين واكتشف كيف يمكن للذكاء الاصطناعي أن يغير مستقبلك المهني
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 font-semibold text-xl px-10 py-5">
              ابدأ الآن مجاناً
              <ArrowRight className="mr-2 h-6 w-6" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 font-semibold text-xl px-10 py-5">
              <MessageSquare className="ml-2 h-6 w-6" />
              تحدث مع خبير
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex items-center justify-center gap-3">
              <Shield className="w-6 h-6 text-green-400" />
              <span className="text-blue-100">ضمان الأمان 100%</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Users className="w-6 h-6 text-green-400" />
              <span className="text-blue-100">دعم فني 24/7</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Award className="w-6 h-6 text-green-400" />
              <span className="text-blue-100">ضمان استرداد المال</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
