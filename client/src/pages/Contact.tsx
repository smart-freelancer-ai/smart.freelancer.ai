export default function Contact() {
  return (
    <div className="flex-grow flex items-center justify-center py-12 px-4">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
          تواصل معنا
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          نحن هنا للإجابة على جميع استفساراتك
        </p>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <p className="text-gray-500">
            نموذج التواصل قيد التطوير. سيتم إضافته قريباً.
          </p>
          <div className="mt-6 space-y-2">
            <p className="text-gray-700">
              البريد الإلكتروني: info@smartfreelancer.com
            </p>
            <p className="text-gray-700">
              الهاتف: +123 456 7890
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
