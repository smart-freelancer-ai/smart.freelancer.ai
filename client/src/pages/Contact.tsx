import { useState } from "react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Instagram, 
  Linkedin, 
  Twitter,
  ChevronDown,
  CheckCircle,
  Send,
  MessageCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const services = [
    { value: "ai-training", label: "تدريب على أدوات الذكاء الاصطناعي" },
    { value: "productivity", label: "استشارات تحسين الإنتاجية" },
    { value: "content", label: "خدمات إنتاج المحتوى" },
    { value: "automation", label: "حلول الأتمتة المخصصة" },
    { value: "general", label: "استفسار عام" }
  ];

  const faqs = [
    {
      question: "كم تستغرق دورة التدريب على الذكاء الاصطناعي؟",
      answer: "تتراوح مدة التدريب من 4-8 أسابيع حسب المستوى والاحتياجات. نقدم تدريباً مرناً يتناسب مع جدولك الزمني مع دعم مستمر لمدة 6 أشهر."
    },
    {
      question: "هل تقدمون استشارات مخصصة لحالتي الخاصة؟",
      answer: "نعم، نقدم استشارات مخصصة 100% بناءً على تحليل شامل لوضعك الحالي وأهدافك. كل عميل يحصل على خطة عمل فريدة."
    },
    {
      question: "ما هي تكلفة الخدمات المختلفة؟",
      answer: "تبدأ الاستشارات من 299 ريال للجلسة، والتدريب الشامل من 499 ريال. نقدم عروضاً خاصة للحزم المتكاملة."
    },
    {
      question: "هل يمكنني الحصول على ضمان استرداد المال؟",
      answer: "نعم، نقدم ضمان استرداد المال خلال 30 يوماً إذا لم تكن راضياً عن النتائج. نحن واثقون من جودة خدماتنا."
    },
    {
      question: "هل تدعمون اللغة العربية في جميع الخدمات؟",
      answer: "بالطبع، جميع خدماتنا متوفرة باللغة العربية مع مراعاة الثقافة المحلية والسوق السعودي."
    },
    {
      question: "كيف يمكنني البدء مع خدماتكم؟",
      answer: "يمكنك البدء بحجز استشارة مجانية مدتها 30 دقيقة لمناقشة احتياجاتك ووضع خطة العمل المناسبة."
    }
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "الاسم مطلوب";
    }

    if (!formData.email.trim()) {
      newErrors.email = "البريد الإلكتروني مطلوب";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "يرجى إدخال بريد إلكتروني صحيح";
    }

    if (!formData.message.trim()) {
      newErrors.message = "الرسالة مطلوبة";
    } else if (formData.message.length < 10) {
      newErrors.message = "يجب أن تكون الرسالة أكثر من 10 أحرف";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitted(true);
      toast({
        title: "تم إرسال رسالتك بنجاح!",
        description: "سنتواصل معك خلال 24 ساعة",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "حدث خطأ",
        description: "يرجى المحاولة مرة أخرى",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  return (
    <div className="flex-grow">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            تواصل معنا وابدأ رحلتك نحو النجاح
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            نحن هنا لمساعدتك في تحقيق أهدافك وتطوير مهاراتك. تواصل معنا اليوم واحصل على استشارة مجانية
          </p>
          
          {/* Contact Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Mail className="w-8 h-8 mx-auto mb-4 text-blue-300" />
              <h3 className="font-semibold mb-2">البريد الإلكتروني</h3>
              <p className="text-blue-100">info@smartfreelancer.ai</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Phone className="w-8 h-8 mx-auto mb-4 text-blue-300" />
              <h3 className="font-semibold mb-2">الهاتف</h3>
              <p className="text-blue-100">+966 50 123 4567</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Clock className="w-8 h-8 mx-auto mb-4 text-blue-300" />
              <h3 className="font-semibold mb-2">ساعات العمل</h3>
              <p className="text-blue-100">الأحد - الخميس: 9:00 ص - 6:00 م</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                    <MessageSquare className="w-6 h-6 text-blue-600" />
                    أرسل لنا رسالة
                  </CardTitle>
                  <CardDescription>
                    املأ النموذج أدناه وسنتواصل معك في أقرب وقت ممكن
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {submitted ? (
                    <div className="text-center py-8">
                      <CheckCircle className="w-16 h-16 mx-auto text-green-500 mb-4" />
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">تم إرسال رسالتك بنجاح!</h3>
                      <p className="text-gray-600 mb-6">شكراً لتواصلك معنا. سنرد عليك خلال 24 ساعة.</p>
                      <Button onClick={() => setSubmitted(false)} variant="outline">
                        إرسال رسالة أخرى
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Name Field */}
                      <div>
                        <Label htmlFor="name">الاسم الكامل *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          placeholder="أدخل اسمك الكامل"
                          className={errors.name ? "border-red-500" : ""}
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                      </div>

                      {/* Email Field */}
                      <div>
                        <Label htmlFor="email">البريد الإلكتروني *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="example@email.com"
                          className={errors.email ? "border-red-500" : ""}
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                      </div>

                      {/* Phone Field */}
                      <div>
                        <Label htmlFor="phone">رقم الهاتف</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          placeholder="+966 50 123 4567"
                        />
                      </div>

                      {/* Service Select */}
                      <div>
                        <Label htmlFor="service">الخدمة المهتم بها</Label>
                        <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="اختر الخدمة" />
                          </SelectTrigger>
                          <SelectContent>
                            {services.map((service) => (
                              <SelectItem key={service.value} value={service.value}>
                                {service.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Message Field */}
                      <div>
                        <Label htmlFor="message">الرسالة *</Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => handleInputChange("message", e.target.value)}
                          placeholder="اكتب رسالتك هنا..."
                          rows={5}
                          className={errors.message ? "border-red-500" : ""}
                        />
                        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                      </div>

                      {/* Submit Button */}
                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          "جاري الإرسال..."
                        ) : (
                          <>
                            أرسل رسالتك
                            <Send className="mr-2 h-5 w-5" />
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    معلومات التواصل
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">البريد الإلكتروني</h4>
                      <p className="text-gray-600">info@smartfreelancer.ai</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">الهاتف</h4>
                      <p className="text-gray-600">+966 50 123 4567</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">الموقع</h4>
                      <p className="text-gray-600">الرياض، المملكة العربية السعودية</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">ساعات العمل</h4>
                      <p className="text-gray-600">الأحد - الخميس: 9:00 ص - 6:00 م</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    تابعنا على وسائل التواصل
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4">
                    <Button variant="outline" size="icon" className="hover:bg-pink-50 hover:border-pink-300">
                      <Instagram className="w-5 h-5 text-pink-600" />
                    </Button>
                    <Button variant="outline" size="icon" className="hover:bg-blue-50 hover:border-blue-300">
                      <Linkedin className="w-5 h-5 text-blue-600" />
                    </Button>
                    <Button variant="outline" size="icon" className="hover:bg-sky-50 hover:border-sky-300">
                      <Twitter className="w-5 h-5 text-sky-600" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-indigo-50">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    هل تفضل التحدث مباشرة؟
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button size="lg" className="w-full bg-green-600 hover:bg-green-700">
                    <MessageCircle className="ml-2 h-5 w-5" />
                    تواصل عبر WhatsApp
                  </Button>
                  <Button size="lg" variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50">
                    <Phone className="ml-2 h-5 w-5" />
                    احجز استشارة مجانية
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              الأسئلة الشائعة
            </h2>
            <p className="text-xl text-gray-600">
              إجابات على أكثر الأسئلة التي نتلقاها من عملائنا
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Collapsible key={index}>
                <CollapsibleTrigger className="w-full">
                  <Card className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-gray-900 text-right flex-1">
                          {faq.question}
                        </h3>
                        <ChevronDown className="w-5 h-5 text-gray-500 transition-transform duration-200" />
                      </div>
                    </CardContent>
                  </Card>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <Card className="border-0 shadow-sm mt-2">
                    <CardContent className="p-6 pt-0">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </CardContent>
                  </Card>
                </CollapsibleContent>
              </Collapsible>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            جاهز للبدء؟
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            لا تتردد في التواصل معنا. نحن هنا لمساعدتك في تحقيق أهدافك
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 font-semibold">
              ابدأ الآن
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 font-semibold">
              احجز استشارة مجانية
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
