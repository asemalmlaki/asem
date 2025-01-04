// تعيين النصوص باللغتين
const translations = {
    en: {
      "home-link": "Home",
      "services-link": "Services",
      "projects-link": "Projects",
      "skills-link": "Skills",
      "contact-link": "Contact",
      "header-title": "Hello, I'm Asem<br><span>Data Analyst - Power BI</span>",
      "job-title": "Data Analyst - Power BI",
      "header-description": "I seek to use my experience in collecting, organizing, and analyzing data in Power BI to support strategic decision making and improve business performance.",
      "view-work-btn": "View my work",
      "services-title": "Services",
      "create-reports-title": "Create Reports",
      "create-reports-description": "Create dynamic reports using Power BI that help make strategic decisions and improve work quality.",
      "data-analysis-title": "Data Analysis",
      "data-analysis-description": "Review and audit data and improve database quality, allowing for better decision making.",
      "programming-title": "Programming",
      "programming-description": "(coming soon...)",
      "projects-title": "Projects",
      "project0-description":  `Report Features:<br>The report aims to provide accurate statistics and advanced analysis on the phenomenon of embracing Islam using Power BI. It features features such as data filtering, graphical visualizations, and bilingual support, which contribute to improving the follow-up of new Muslims, enhancing the efficiency of administrative work, and making effective strategic decisions.<br><a href="./pdf/وزارة الشؤون الاسلامية.pdf" class="pdf" target="_blank">For more details click here</a>`,
      "project1-description": `Report Features:<br>The report aims to analyze the performance of the Guests of God Service Program using Power BI, by providing accurate statistics on committees and meetings and the percentage of implementing recommendations to improve administrative performance, make informed decisions, enhance cooperation, and save time and effort to improve the quality of services provided.<br>
                               <a href="./pdf/ضيوف الرحمن.pdf" class="pdf" target="_blank">For more details click here</a>`
                              ,
      "project2-description": `Report Features:<br>The report aims to monitor and regulate the work of practitioners of Sharia ruqyah using Power BI. It also provides accurate statistics and analyses of activities and violations, while enhancing transparency and regulation to improve oversight, support decision-making, and develop services provided to the community.<br>
                              <a href="./pdf/امارة منطقة مكة المكرمة -محافظة جدة.pdf" class="pdf" target="_blank">For more details click here</a>`
                              ,
      "skills-title": "Skills",
      "Contact-title": "Contact",
      "Phone": "Phone",
      "email": "Email"
    },
    ar: {
      "home-link": "الرئيسية",
      "services-link": "الخدمات",
      "projects-link": "المشاريع",
      "skills-link": "المهارات",
      "contact-link": "التواصل",
      "header-title": "مرحباً، أنا عاصم<br><span>محلل بيانات - Power BI</span>",
      "job-title": "محلل بيانات - Power BI",
      "header-description": "أستخدام خبرتي في جمع وتنظيم وتحليل البيانات عبر Power BI لدعم اتخاذ القرارات الاستراتيجية وتحسين الأداء.",
      "view-work-btn": "شاهد أعمالي",
      "services-title": "الخدمات",
      "create-reports-title": "إنشاء تقارير",
      "create-reports-description": "إنشاء تقارير ديناميكية باستخدام Power BI تساعد في اتخاذ القرارات الاستراتيجية وتحسين جودة العمل.",
      "data-analysis-title": "تحليل البيانات",
      "data-analysis-description": "مراجعة وتدقيق البيانات وتحسين جودة قواعد البيانات للسماح باتخاذ قرارات أفضل.",
      "programming-title": "البرمجة",
      "programming-description": "(قريباً...)",
      "projects-title": "المشاريع",
      "project0-description": `مميزات التقرير:<br>
                              يهدف التقرير إلى تقديم إحصائيات دقيقة وتحليلات متقدمة عن ظاهرة اعتناق الإسلام باستخدام Power BI، ويتميز بخصائص مثل تصفية البيانات والتصورات الرسومية ودعم اللغة الثنائية، مما يساهم في تحسين متابعة المسلمين الجدد، وتعزيز كفاءة العمل الإداري، واتخاذ القرارات الاستراتيجية الفعالة.<br>
                              <a href="./pdf/وزارة الشؤون الاسلامية.pdf" class="pdf" target="_blank">لمعرفة المزيد حول الاستفادة من التقرير</a>`,
      "project1-description": `مميزات التقرير:<br>
                             يهدف التقرير إلى تحليل أداء برنامج خدمة ضيوف الرحمن باستخدام برنامج Power BI، وذلك من خلال توفير إحصائيات دقيقة عن اللجان والاجتماعات ونسبة تنفيذ التوصيات لتحسين الأداء الإداري واتخاذ القرارات المدروسة وتعزيز التعاون وتوفير الوقت والجهد لتحسين جودة الخدمات المقدمة.<br>
                              <a href="./pdf/ضيوف الرحمن.pdf" class="pdf" target="_blank">لمعرفة المزيد حول الاستفادة من التقرير</a>`,
      "project2-description":`مميزات التقرير:<br>
                              يهدف التقرير إلى مراقبة وتنظيم عمل ممارسي الرقية الشرعية  باستخدام برنامج Power BI، كما يوفر إحصائيات وتحليلات دقيقة عن الأنشطة والمخالفات، مع تعزيز الشفافية والتنظيم لتحسين الرقابة ودعم اتخاذ القرار وتطوير الخدمات المقدمة للمجتمع.<br>
                              <a href="./pdf/امارة منطقة مكة المكرمة -محافظة جدة.pdf" class="pdf" target="_blank">لمعرفة المزيد حول الاستفادة من التقرير</a>`,
      "skills-title": "المهارات",
      "Contact-title": "التواصل",
      "Phone": "هاتف",
      "email": "البريد الإلكتروني"
    }
  };
  
  // تحديد اللغة الحالية كافتراضية
  let currentLanguage = 'ar';
  
  // دالة لتغيير اللغة
  function changeLanguage(lang) {
    for (const id in translations[lang]) {
      const element = document.getElementById(id);
      if (element) {
        if (element.querySelector("i")) {
          // إذا كانت هناك أيقونة بداخل العنصر، قم بتغيير النص دون التأثير على الأيقونة
          const icon = element.querySelector("i").outerHTML; // حفظ الأيقونة
          element.innerHTML = icon + " " + translations[lang][id]; // إدراج الأيقونة مع النص الجديد
        } else {
          // تغيير النص كاملاً إذا لم يكن هناك أيقونة
          element.innerHTML = translations[lang][id];
        }
      }
    }
  

    // تغيير الخط عبر تعديل فئة body
    if (lang === 'ar') {
      document.body.classList.add('arabic');
      document.body.classList.remove('english');
    } else {
      document.body.classList.add('english');
      document.body.classList.remove('arabic');
    }
  }
  
  // إضافة مستمع للحدث لتبديل اللغة عند النقر
  document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("toggle-language-btn");
    
    toggleButton.addEventListener("click", function() {
      // تبديل اللغة
      currentLanguage = currentLanguage === 'en' ? 'ar' : 'en';
      changeLanguage(currentLanguage);
      
      // تغيير نص الزر بناءً على اللغة الحالية
      toggleButton.innerText = currentLanguage === 'en' ? " " : " ";
    });
  
    // تفعيل اللغة الافتراضية عند التحميل
    changeLanguage(currentLanguage);
  });
  if (lang === 'ar') {
    document.documentElement.dir = 'rtl';
    document.body.style.textAlign = 'right';
} else {
    document.documentElement.dir = 'ltr';
    document.body.style.textAlign = 'left';
}


