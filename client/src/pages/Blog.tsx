export default function Blog() {
  return (
    <div className="flex-grow flex items-center justify-center py-12 px-4">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
          المدونة
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          مقالات ونصائح مفيدة في مجال العمل الحر والتقنية
        </p>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <p className="text-gray-500">
            المحتوى قيد التطوير. سيتم إضافة المقالات قريباً.
          </p>
        </div>
      </div>
    </div>
  );
}
