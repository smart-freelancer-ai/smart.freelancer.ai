import { CheckCircle, Users, Layout } from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: CheckCircle,
      title: "خدمات احترافية",
      description: "نقدم خدمات عالية الجودة تلبي احتياجاتك المهنية بأفضل المعايير"
    },
    {
      icon: Users,
      title: "فريق متخصص",
      description: "فريق من المختصين ذوي الخبرة الواسعة في مختلف المجالات"
    },
    {
      icon: Layout,
      title: "حلول مبتكرة",
      description: "نبتكر حلولاً عملية وفعالة لتحقيق أهدافك بأسرع وقت ممكن"
    }
  ];

  return (
    <div className="flex-grow flex items-center justify-center py-12 px-4">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
          الصفحة الرئيسية لمشروع المستقل الذكي
        </h1>
        
        {/* Features Section */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
                <div className="text-blue-600 mb-4 flex justify-center">
                  <IconComponent className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
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
    </div>
  );
}
