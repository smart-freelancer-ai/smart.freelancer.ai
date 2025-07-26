import { Link } from "wouter";
import { Twitter, Linkedin, Mail, Phone } from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { href: "/", label: "الرئيسية" },
    { href: "/blog", label: "المدونة" },
    { href: "/services", label: "خدماتنا" },
    { href: "/contact", label: "تواصل معنا" },
    { href: "/privacy", label: "سياسة الخصوصية" },
    { href: "/terms", label: "شروط الاستخدام" },
  ];

  return (
    <footer className="bg-dark-nav text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Site Description Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">عن المستقل الذكي</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              منصة احترافية تقدم خدمات عالية الجودة في مختلف المجالات التقنية والإبداعية. 
              نسعى لتقديم أفضل الحلول المبتكرة لعملائنا الكرام.
            </p>
          </div>
          
          {/* Quick Links Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">روابط سريعة</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span className="text-gray-300 hover:text-blue-400 text-sm transition-colors duration-200 cursor-pointer">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Social Media Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">تابعنا</h3>
            <div className="flex space-x-reverse space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                aria-label="تويتر"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                aria-label="لينكد إن"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
            <div className="mt-4">
              <p className="text-gray-300 text-sm flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>البريد الإلكتروني:</span>
              </p>
              <a
                href="mailto:info@smartfreelancer.com"
                className="text-blue-400 hover:text-blue-300 transition-colors duration-200 text-sm mr-6"
              >
                info@smartfreelancer.com
              </a>
              
              <p className="text-gray-300 text-sm mt-2 flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>الهاتف:</span>
              </p>
              <a
                href="tel:+1234567890"
                className="text-blue-400 hover:text-blue-300 transition-colors duration-200 text-sm mr-6"
              >
                +123 456 7890
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright Section */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 المستقل الذكي. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
}
