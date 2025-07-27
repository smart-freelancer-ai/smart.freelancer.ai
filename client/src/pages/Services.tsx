import { 
  Brain, 
  TrendingUp, 
  PenTool, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Users, 
  Award, 
  Target,
  MessageSquare,
  Mail,
  Phone
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import SEOHead from "@/components/SEOHead";

export default function Services() {
  const services = [
    {
      icon: Brain,
      title: "تدريب على أدوات الذكاء الاصطناعي",
      description: "تعلم كيفية استخدام أحدث أدوات الذكاء الاصطناعي لتطوير مهاراتك وزيادة إنتاجيتك",
      features: [
        "تدريب شخصي مخصص",
        "أحدث أدوات AI في السوق",
        "شهادات معتمدة",
        "دعم مستمر لمدة 6 أشهر"
      ],
      pricing: "ابتداءً من 499 ريال",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: TrendingUp,
      title: "استشارات تحسين الإنتاجية",
      description: "تحليل شامل لسير عملك وتطوير استراتيجيات مخصصة لزيادة كفاءتك ودخلك",
      features: [
        "تحليل سير العمل الحالي",
        "خطة تحسين مخصصة",
        "متابعة دورية للنتائج",
        "ضمان زيادة الإنتاجية"
      ],
      pricing: "299 ريال/جلسة",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: PenTool,
      title: "خدمات إنتاج المحتوى بالذكاء الاصطناعي",
      description: "إنتاج محتوى عالي الجودة للشركات والأفراد باستخدام أحدث تقنيات الذكاء الاصطناعي",
      features: [
        "محتوى مخصص لجمهورك",
        "SEO محسن للوصول الأمثل",
        "تصاميم بصرية احترافية",
        "تسليم سريع ودقيق"
      ],
      pricing: "حسب نوع المحتوى",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: Zap,
      title: "حلول الأتمتة المخصصة",
      description: "تطوير أنظمة أتمتة مخصصة لتبسيط العمليات التجارية وتوفير الوقت والجهد",
      features: [
        "حلول مخصصة 100%",
        "تكامل مع الأنظمة الحالية",
        "تدريب على الاستخدام",
        "صيانة ودعم تقني"
      ],
      pricing: "اتصل للحصول على عرض",
      color: "from-orange-500 to-red-600"
    }
  ];

  const features = [
    {
      icon: Target,
      title: "دعم اللغة العربية",
      description: "جميع خدماتنا مصممة خصيصاً للسوق العربي"
    },
    {
      icon: Award,
      title: "نتائج مثبتة",
      description: "زيادة الإنتاجية بنسبة تصل إلى 300% للعملاء"
    },
    {
      icon: Users,
      title: "فريق خبراء",
      description: "متخصصون في الذكاء الاصطناعي والتقنية"
    },
    {
      icon: CheckCircle,
      title: "ضمان الجودة",
      description: "ضمان الرضا أو استرداد المبلغ كاملاً"
    }
  ];

  const testimonials = [
    {
      name: "أحمد المطيري",
      role: "مطور مواقع",
      content: "زادت إنتاجيتي بنسبة 250% بعد التدريب على أدوات الذكاء الاصطناعي",
      rating: 5
    },
    {
      name: "فاطمة السعيد",
      role: "كاتبة محتوى",
      content: "الاستشارات ساعدتني على مضاعفة دخلي في 3 أشهر فقط",
      rating: 5
    },
    {
      name: "محمد العتيبي",
      role: "مصمم جرافيك",
      content: "حلول الأتمتة وفرت لي 15 ساعة أسبوعياً من العمل الروتيني",
      rating: 5
    }
  ];

  const stats = [
    { number: "500+", label: "عميل راضٍ" },
    { number: "300%", label: "زيادة متوسط الإنتاجية" },
    { number: "50+", label: "مشروع مكتمل" },
    { number: "98%", label: "معدل رضا العملاء" }
  ];

  return (
    <div className="flex-grow">
      <SEOHead
        title="خدمات المستقل الذكي - حلول ذكاء اصطناعي متكاملة"
        description="اكتشف مجموعتنا الواسعة من خدمات الذكاء الاصطناعي المصممة خصيصًا لتلبية احتياجات عملك. من التدريب والاستشارات إلى إنتاج المحتوى والأتمتة، نقدم حلولًا مبتكرة لزيادة إنتاجيتك ونجاحك."
        keywords="خدمات الذكاء الاصطناعي, تدريب الذكاء الاصطناعي, استشارات الذكاء الاصطناعي, إنتاج محتوى بالذكاء الاصطناعي, أتمتة العمليات, حلول الذكاء الاصطناعي للشركات"
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            اطلق إمكانياتك مع قوة الذكاء الاصطناعي
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            نساعدك على تطوير مهاراتك وزيادة دخلك من خلال استخدام أحدث تقنيات الذكاء الاصطناعي في مجال العمل الحر
          </p>
          <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 font-semibold text-lg px-8 py-4">
            ابدأ رحلتك الآن
            <ArrowRight className="mr-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              خدماتنا الاحترافية
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              مجموعة شاملة من الخدمات المصممة لتطوير مهاراتك وزيادة نجاحك في عالم العمل الحر
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${service.color}`} />
                  <CardHeader className="pb-4">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold text-gray-900">{service.pricing}</span>
                      </div>
                      <Button className={`bg-gradient-to-r ${service.color} hover:opacity-90 text-white`}>
                        تعرف أكثر
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              لماذا تختار المستقل الذكي؟
            </h2>
            <p className="text-xl text-gray-600">
              مميزات تجعلنا الخيار الأمثل لتطوير مهاراتك المهنية
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-10 h-10 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-blue-100 text-lg">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ماذا يقول عملاؤنا
            </h2>
            <p className="text-xl text-gray-600">
              شهادات حقيقية من عملاء حققوا نجاحات ملموسة
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-500">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-indigo-900 via-blue-800 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            جاهز لتطوير مهاراتك وزيادة دخلك؟
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            ابدأ رحلتك نحو النجاح اليوم واكتشف كيف يمكن للذكاء الاصطناعي أن يغير مستقبلك المهني
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 font-semibold">
              <MessageSquare className="ml-2 h-5 w-5" />
              احجز استشارة مجانية
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
              <Phone className="ml-2 h-5 w-5" />
              اتصل بنا الآن
            </Button>
          </div>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center text-blue-100">
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <span>info@smartfreelancer.sa</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <span>+966 50 123 4567</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}