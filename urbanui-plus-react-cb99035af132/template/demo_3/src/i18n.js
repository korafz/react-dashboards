import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
      resources:{
          en: {
              translations: {
                "Messages":                     "Messages",
                "Mark send you a message":      "Mark send you a message",
                "1 Minutes ago":                "1 Minutes ago",
                "Cregh send you a message":     "Cregh send you a message",
                "15 Minutes ago":               "15 Minutes ago",
                "Profile picture updated":      "Profile picture updated",
                "18 Minutes ago":               "18 Minutes ago",
                "4 new messages":               "4 new messages",
                "FAQ":                          "FAQ",
                "New order recieved":           "New order recieved",
                "45 sec ago":                   "45 sec ago",
                "1 min ago":                    "1 min ago",
                "Kevin karvelle":               "Kevin karvelle",
                "View all":                     "View all",
                "See all notifications":        "See all notifications",
                "Status":                       "Status",
                "Trailing":                     "Trailing",
                "English":                      "English",
                "French":                       "French",
                "Chinese":                      "Chinese",
                "Russian":                      "Russian",
                "German":                       "German",

                "Antonio Olson":                "Antonio Olson",
                "Responsive Dashboard":         "Responsive Dashboard",
                "Template Pages":               "Template Pages",
                "Dashboard":                    "Dashboard",
                "Widgets":                      "Widgets",
                "RTL":                          "RTL",
                "UI Elements":                  "UI Elements",
                "Basic UI Elements":            "Basic UI Elements",
                "Accordions":                   "Accordions",
                "Buttons":                      "Buttons",
                "Badges":                       "Badges",
                "Breadcrumbs":                  "Breadcrumbs",
                "Dropdowns":                    "Dropdowns",
                "Modals":                       "Modals",
                "Progress bar":                 "Progress bar",
                "Pagination":                   "Pagination",
                "Tabs":                         "Tabs",
                "Typography":                   "Typography",
                "Tooltips":                     "Tooltips",
                "Advanced UI":                  "Advanced UI",
                "Clipboard":                    "Clipboard",
                "Context menu":                 "Context menu",
                "Sliders":                      "Sliders",
                "Carousel":                     "Carousel",
                "Loaders":                      "Loaders",
                "Form elements":                "Form elements",
                "Basic Elements":               "Basic Elements",
                "Advanced Elements":            "Advanced Elements",
                "Validation":                   "Validation",
                "Wizard":                       "Wizard",
                "Editors":                      "Editors",
                "Text editors":                 "Text editors",
                "Code editors":                 "Code editors",
                "Charts":                       "Charts",
                "Morris":                       "Morris",
                "Chartist":                     "Chartist",
                "Tables":                       "Tables",
                "Basic table":                  "Basic table",
                "Data table":                   "Data table",
                "Popups":                       "Popups",
                "Notifications":                "Notifications",
                "Material":                     "Material",
                "Flag icons":                   "Flag icons",
                "Font Awesome":                 "Font Awesome",
                "Simple Line Icons":            "Simple Line Icons",
                "Themify":                      "Themify",
                "Icons":                        "Icons",
                "Maps":                         "Maps",
                "Google Map":                   "Google Map",
                "Extra Pages":                  "Extra Pages",
                "User Pages":                   "User Pages",
                "Login":                        "Login",
                "Login 2":                      "Login 2",
                "Register":                     "Register",
                "Register 2":                   "Register 2",
                "Lockscreen":                   "Lockscreen",
                "Error Pages":                  "Error Pages",
                "General Pages":                "General Pages",
                "Blank Page":                   "Blank Page",
                "Profile":                      "Profile",
                "FAQ 2":                        "FAQ 2",
                "News grid":                    "News grid",
                "Timeline":                     "Timeline",
                "Search Results":               "Search Results",
                "E-commerce":                   "E-commerce",
                "Invoice":                      "Invoice",
                "Pricing Table":                "Pricing Table",
                "Orders":                       "Orders",
                "Portfolio":                    "Portfolio",
                "Applications":                 "Applications",
                "E-mail":                       "E-mail",
                "Calendar":                     "Calendar",
                "Help":                         "Help",
                "Documentation":                "Documentation",
                "Vector Maps":                  "Vector Maps",
                "Simple Maps":                  "Simple Maps",

                "SIDEBAR SKINS":                "SIDEBAR SKINS",
                "Dark":                         "Dark",
                "Default":                      "Default",
                "HEADER SKINS":                 "HEADER SKINS",
                "LAYOUT OPTIONS":               "LAYOUT OPTIONS",
                "Boxed Layout":                 "Boxed Layout",
                "Icon Menu":                    "Icon Menu",
                "Compact Menu":                 "Compact Menu",
                "Fixed Sidebar":                "Fixed Sidebar",
                "Hidden Sidebar":               "Hidden Sidebar",
                "Overlay Sidebar":              "Overlay Sidebar",

                "Create new document":          "Create new document",
                "Import documents":             "Import documents",
                "Add Prodcut":                  "Add Prodcut",
                "Sales Revenue":                "Sales Revenue",
                "TOTAL SALES":                  "TOTAL SALES",
                "TOTAL PROFIT":                 "TOTAL PROFIT",
                "Your sales monitoring dashboard template.":    "Your sales monitoring dashboard template.",
                "Learn more":                   "Learn more",
                "Get premium":                  "Get premium",
                "account!":                     "account!",
                "to optimize your selling product": "to optimize your selling product",
                "Enjoy the advantage of premium.":  "Enjoy the advantage of premium.",
                "Get Premium":                  "Get Premium",
                "Customers":                    "Customers",
                "August 01 - August 31":        "August 01 - August 31",
                "Avg customers/Day":            "Avg customers/Day",
                "Conversions":                  "Conversions",
                "ENTIRE APARTMENT":             "ENTIRE APARTMENT",
                "Cosy Studio flat in London":   "Cosy Studio flat in London",
                "Victoria Bedsit Studio Ensuite":   "Victoria Bedsit Studio Ensuite",
                "$6,144/night":                 "$6,144/night",
                "Fabulous Huge Room":           "Fabulous Huge Room",
                "$5,267/night":                 "$5,267/night",
                "This Month":                   "This Month",
                "Member Profit":                "Member Profit",
                "Average Weekly Profit":        "Average Weekly Profit",
                "Total Profit":                 "Total Profit",
                "Weekly Customer Orders":       "Weekly Customer Orders",
                "Issue Reports":                "Issue Reports",
                "System bugs and issues":       "System bugs and issues",
                "Financial management review":  "Financial management review",
                "Name":                         "Name",
                "Sale Rate":                    "Sale Rate",
                "Sortable Table":               "Sortable Table",
                "React Table":                  "React Table",
                "Actual":                       "Actual",
                "Variance":                     "Variance",
                "Jacob Jensen":                 "Jacob Jensen",
                "Cecelia Bradley":              "Cecelia Bradley",
                "Leah Sherman":                 "Leah Sherman",
                "Ina Curry":                    "Ina Curry",
                "Lida Fitzgerald":              "Lida Fitzgerald",
                "Stella Johnson":               "Stella Johnson",
                "Maria Ortiz":                  "Maria Ortiz",
                "Show more":                    "Show more",
                "Channel Sessions":             "Channel Sessions",
                "News Sessions":                "News Sessions",
                "Device Sessions":              "Device Sessions",
                "Upcoming events (3)":          "Upcoming events (3)",
                "23 september 2019":            "23 september 2019",
                "Tue, Mar 5, 9.30am":           "Tue, Mar 5, 9.30am",
                "Hey I attached some new PSD files…":   "Hey I attached some new PSD files…",
                "Mon, Mar 11, 4.30 PM":         "Mon, Mar 11, 4.30 PM",
                "Discuss performance with manager": "Discuss performance with manager",
                "Meeting with Alisa":           "Meeting with Alisa",
                "Schedule Meeting":             "Schedule Meeting",
                "Profile visits":               "Profile visits",
                "Bounce Rate":                  "Bounce Rate",
                "Browser Usage":                "Browser Usage",
                "Delivered":                    "Delivered",
                "15 Packages":                  "15 Packages",
                "Ordered":                      "Ordered",
                "72 Items":                     "72 Items",
                "Arrived":                      "Arrived",
                "34 Upgraded":                  "34 Upgraded",
                "Reported":                     "Reported",
                "72 Support":                   "72 Support",
                "Organic search":               "Organic search",
                "Refferral":                    "Refferral",
                "Social Media":                 "Social Media",
                "Page views":                   "Page views",
                "New users":                    "New users",
                "Bounce rate":                  "Bounce rate",
                "Iphone":                       "Iphone",
                "Samsung":                      "Samsung",
                "oneplus":                      "oneplus",

                "Hand-crafted & made with":     "Hand-crafted & made with",
                "Copyright © 2019":             "Copyright © 2019",
                ".All rights reserved.":        ".All rights reserved."
              }
          },
          ar: {
              translations: {
                "Messages":                     "رسائل",
                "Mark send you a message":      "مارك يرسل لك رسالة",
                "1 Minutes ago":                "منذ 1 دقيقة",
                "Cregh send you a message":     "كريغ نرسل لك رسالة",
                "15 Minutes ago":               "منذ 15 دقيقة",
                "Profile picture updated":      "تحديث صورة الملف الشخصي",
                "18 Minutes ago":               "منذ 18 دقيقة",
                "4 new messages":               "4 رسائل جديدة",
                "FAQ":                          "أسئلة مكررة",
                "New order recieved":           "تلقى طلب جديد",
                "Event today":                  "حدث اليوم",
                "Just a reminder that you have an event today": "مجرد تذكير بأن لديك حدث اليوم",
                "Settings":                     "الإعدادات",
                "Update dashboard":             "تحديث لوحة القيادة",
                "Launch Admin":                 "إطلاق المسؤول",
                "New admin wow!":               "مشرف جديد نجاح باهر!",             
                "45 sec ago":                   "قبل 45 ثانية",
                "1 min ago":                    "منذ دقيقة واحدة",
                "Kevin karvelle":               "كيفن كارفيل",
                "View all":                     " عرض الكل",
                "See all notifications":        "اطلع على جميع الإشعارات",
                "Status":                       "الحالة",
                "Trailing":                     "زائدة",
                "English":                      "إنجليزية",
                "French":                       "الفرنسية",
                "Chinese":                      "العربية",
                "Russian":                      "الروسية",
                "German":                       "ألمانية",
                "Spanish":                      "الأسبانية",

                "Antonio Olson":                "أنطونيو أولسون",
                "Olson jass":                   "أولسون جاس",
                "online":                       "عبر الانترنت",
                "Activity Log":                 "سجل النشاطات",
                "Signout":                      "خروج",
                "Responsive Dashboard":         "استجابة لوحة القيادة",
                "Template Pages":               ".كل الحقوق محفوظة.",
                "Dashboard":                    "لوحة القيادة",
                "RTL":                          "ار تي ال",
                "Widgets":                      "الحاجيات",
                "Apps":                         "تطبيقات",
                "Kanban Board":                 "كانبان بورد",
                "Todo List":                    "قائمة المهام",
                "Tickets":                      "تذاكر",
                "Sample Pages":                 "صفحات عينة",
                "Chats":                        "دردشات",
                "Gallery":                      "صالة عرض",
                "Forms":                        "نماذج",
                "Data":                        "البيانات",
                "UI Elements":                  "عناصر واجهة المستخدم",
                "Form Elements":                "نماذج",
                "Simple Line Icons":            "أيقونات خط بسيط",
                "Basic UI Elements":            "عناصر واجهة المستخدم الأساسية",
                "Accordions":                   "أكورديون",
                "Buttons":                      "زر",
                "Badges":                       "شارات",
                "Breadcrumbs":                  "فتات الخبز",
                "Dropdowns":                    "قائِمة مُنْسَدِلة",
                "Modals":                       "الحوار",
                "Progress bar":                 "شريط التقدم",
                "Pagination":                   "ترقيم الصفحات",
                "Tabs":                         "علامات التبويب",
                "Typography":                   "الاسلوب والظهور",
                "Tooltips":                     "تلميح",
                "Advanced UI":                  "واجهة المستخدم المتقدمة",
                "Clipboard":                    "الحافظة",
                "Context menu":                 "قائمة السياق",
                "Sliders":                      "الانزلاق",
                "Carousel":                     "دائري",
                "Loaders":                      "رافعاتs",
                "Form elements":                "نماذج",
                "Basic Elements":               "عناصر النموذج",
                "Advanced Elements":            "العناصر المتقدمة",
                "Validation":                   "التحقق من صحة",
                "Wizard":                       "ساحر",
                "Editors":                      "المحررين",
                "Text Editor":                  "محرري النصوص",
                "Code Editor":                  "محرري الكود",
                "Charts":                       "الرسوم البيانية",
                "Morris":                       "موريس",
                "Chartist":                     "الشارتية",
                "Tables":                       "الطاولةs",
                "Basic Table":                  "الجداول الأساسية",
                "Data Table":                   "جداول البيانات",
                "Sortable Table":               "الجداول القابلة للفرز",
                "React Table":                  "رد فعل الجدول",
                "Popups":                       "يظهر فجأة",
                "Notifications":                "إخطارات",
                "Material":                     "مواد",
                "Flag icons":                   "علم الرموز",
                "Font Awesome":                 "الخط رائع",
                "Themify":                      "Themify الرموز",
                "Icons":                        "الرموز",
                "Maps":                         "خرائط",
                "Vector Maps":                  "خرائط المتجهات",
                "Google Map":                   "خرائط جوجل",
                "Simple Maps":                  "خرائط بسيطة",

                "Extra Pages":                  "صفحات اضافية",
                "User Pages":                   "صفحات المستخدم",
                "Login":                        "تسجيل الدخول",
                "Login 2":                      " تسجيل الدخول 2 ",
                "Register":                     "سجل",
                "Register 2":                   " سجل 2 ",
                "Lockscreen":                   " قفل الشاشة ",
                "Error Pages":                  "صفحات خطأ",
                "General Pages":                "الصفحات العامة",
                "Blank Page":                   " صفحة فارغة ",
                "Profile":                      "الملف الشخصي ",
                "FAQ 2":                        " أسئلة مكررة 2 ",
                "News grid":                    " شبكة الأخبار ",
                "Timeline":                     " الجدول الزمني ",
                "Search Results":               " نتائج البحث ",
                "E-commerce":                   "التجارة الإلكترونية",
                "Invoice":                      " فاتورة ",
                "Pricing Table":                " جدول التسعير ",
                "Orders":                       " طلب ",
                "Portfolio":                    "محفظة",
                "Applications":                 "تطبيقات",
                "E-mail":                       "البريد الإلكتروني",
                "Calendar":                     "التقويم",
                "Help":                         "مساعدة",
                "Documentation":                "توثيق",

                "SIDEBAR SKINS":                "جلود الشريط الجانبي",
                "Dark":                         "الإفتراضي",
                "Default":                      "ضوء",
                "HEADER SKINS":                 "لون الرأس",
                "LAYOUT OPTIONS":               "خيارات التخطيط",
                "Boxed Layout":                 "عرض محاصر",
                "Icon Menu":                    "الرموز القائمة فقط",
                "Compact Menu":                 "القائمة المدمجة",
                "Fixed Sidebar":                "الشريط الجانبي ثابت",
                "Hidden Sidebar":               "الشريط الجانبي مخفي",
                "Overlay Sidebar":              "الشريط الجانبي تراكب",

                "Create new document":          "إنشاء وثيقة جديدة",
                "Import documents":             "استيراد المستندات",
                "Add Prodcut":                  "أضف منتج",
                "Sales Revenue":                "إيرادات المبيعات",
                "TOTAL SALES":                  "إجمالي المبيعات",
                "TOTAL PROFIT":                 "اجمالي الربح",
                "Your sales monitoring dashboard template.":    "المبيعات الخاص بك قالب رصد لوحة القيادة.",
                "Learn more":                   "أعرف أكثر",
                "Get premium":                  "إحصل على الأفضل",
                "account!":                     "الحساب!",
                "to optimize your selling product": "لتحسين المنتج الخاص بك بيع",
                "Enjoy the advantage of premium.":  "استمتع بميزة قسط التأمين.",
                "Get Premium":                  "إحصل على الأفضل",
                "Customers":                    "الزبائن",
                "August 01 - August 31":        "1 أغسطس - 31 أغسطس",
                "Avg customers/Day":            "متوسط ​​العملاء / اليوم",
                "Landing Page":                 "الصفحة المقصودة",
                "News Grid":                    " شبكة الأخبار ",
                "User Listing":                 "قائمة المستخدم",
                "Pricing":                      " جدول التسعير ",
                "Product Catalogue":            "كتالوج المنتج",
                "Project List":                 "قائمة المشروع",
                "Conversions":                  "التحويلات",
                "ENTIRE APARTMENT":             "شقة كاملة",
                "Cosy Studio flat in London":   "دافئ ستوديو شقة في لندن",
                "Victoria Bedsit Studio Ensuite":   "فيكتوريا بيدسيت ستوديو",
                "$6,144/night":                 "$ 6،144 / ليلة",
                "Fabulous Huge Room":           "غرفة ضخمة رائعة",
                "$5,267/night":                 "$ 5267 / ليلة",
                "This Month":                   "هذا الشهر",
                "Member Profit":                "ربح الأعضاء",
                "Average Weekly Profit":        "متوسط ​​الربح الأسبوعي",
                "Total Profit":                 "اجمالي الربح",
                "Weekly Customer Orders":       "طلبات العملاء الأسبوعية",
                "Issue Reports":                "تقارير الاصدارات",
                "System bugs and issues":       "أخطاء النظام والقضايا",
                "Financial management review":  "مراجعة الإدارة المالية",
                "Name":                         "اسم",
                "Sale Rate":                    "سعر البيع",
                "Actual":                       "فعلي",
                "Variance":                     "فرق",
                "Jacob Jensen":                 "يعقوب جنسن",
                "Cecelia Bradley":              "سيسيليا برادلي",
                "Leah Sherman":                 "ليا شيرمان",
                "Ina Curry":                    "اينا كاري",
                "Lida Fitzgerald":              "ليدا فيتزجيرالد",
                "Stella Johnson":               "ستيلا جونسون",
                "Maria Ortiz":                  "ماريا أورتيز",
                "Show more":                    "أظهر المزيد",
                "Channel Sessions":             "جلسات القناة",
                "News Sessions":                "جلسات الأخبار",
                "Device Sessions":              "جلسات الجهاز",
                "Upcoming events (3)":          "الأحداث القادمة (3)",
                "23 september 2019":            "23 سبتمبر 2019",
                "Tue, Mar 5, 9.30am":           "الثلاثاء 5 مارس ، الساعة 9.30 صباحًا",
                "Hey I attached some new PSD files…":   "مرحبًا ، أرفقت بعض ملفات PSD الجديدة ...",
                "Mon, Mar 11, 4.30 PM":         "الاثنين 11 مارس ، 4.30 م",
                "Discuss performance with manager": "مناقشة الأداء مع المدير",
                "Meeting with Alisa":           "لقاء مع أليسا",
                "Schedule Meeting":             "يرتب موعد للاجتماع",
                "Profile visits":               "زيارات الملف الشخصي",
                "Bounce Rate":                  "معدل الارتداد",
                "Browser Usage":                "استخدام المتصفح",
                "Delivered":                    "تم التوصيل",
                "15 Packages":                  "15 حزم",
                "Ordered":                      "أمر",
                "72 Items":                     "72 مادة",
                "Arrived":                      "وصل",
                "34 Upgraded":                  "34 ترقية",
                "Reported":                     "ذكرت",
                "72 Support":                   "72 الدعم",
                "Organic search":               "البحث العضوي",
                "Refferral":                    "إحالة",
                "Social Media":                 "وسائل الاجتماعي",
                "Page views":                   "مشاهدات الصفحة",
                "New users":                    "مستخدمون جدد",
                "Bounce rate":                  "معدل الارتداد",
                "Iphone":                       "ايفون",
                "Samsung":                      "سامسونج",
                "oneplus":                      "ون بلس",

                "Hand-crafted & made with":     "اليدوية والمصنوعة من",
                "Copyright © 2019":             "حقوق الطبع والنشر © 2019",
                ".All rights reserved.":        ".كل الحقوق محفوظة."



            }
          }
      },
      fallbackLng: "en",
      debug: true,

    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false
    }
  });

  export default i18n;