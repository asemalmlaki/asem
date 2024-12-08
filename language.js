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
      "project0-description":  `Report Features:<br>This report provides a comprehensive overview of new Muslims, including:<br>Accurate Statistics: Total number and percentage of new Muslims, categorized by gender and monthly distribution.<br> Data Filtering: Filter documents by status (Completed/In Progress) and data by office or nationality.<br>Direct Search: Access personal information using the ID number.<br> Cooperative Office Analysis: Total number of offices and percentage of new Muslims in each office.<br>Data Visualization: A map showing the distribution of new Muslims by nationality.<br>Bilingual Support: Available in both Arabic and English.<br>This report offers a detailed and comprehensive analysis of new Muslims, contributing to a better understanding of their situation and supporting informed decision-making.<br><a href="./pdf/وزارة الشؤون الاسلامية.pdf" class="pdf" target="_blank">For more details click here</a>`,
      "project1-description": `Report Features:<br>Displays the total number of committees meetings, recommendations and their implementation rate in the Guests of Allah Service Program.<br>
                               Allows data to be filtered by committee name.<br>
                               Displays for each committee:Total number of meetings, recommendations and implementation rate of recommendations.<br>
                               Remaining period from the last meeting.<br>
                               Displays the number of current and former members and the total.<br>
                               Displays the participating parties and the number of their members.<br>
                               <a href="./pdf/ضيوف الرحمن.pdf" class="pdf" target="_blank">For more details click here</a>`
                              ,
      "project2-description": `Report Features:<br>Comprehensive overview: Accurate statistics on field visits and the number of Ruqyah practitioners (including violators).<br>
                              In-depth analysis: Classification of practitioners by gender, nationality, and status (active, inactive, suspended).<br>
                              Visual representation:
                              Dashboard for the status of practitioners in each category.
                              Map of activity locations.<br>
                              Data filtering: List of practitioner professions to filter data as desired.<br>
                              Detailed search: A page for searching by ID number allows access to all practitioner data, including committee opinion, observations, report details, and participating entities.<br>
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
                              إحصائيات دقيقة عن إجمالي عدد ونسبة المسلمين الجدد حسب الجنس وتوزيعهم الشهري.<br>
                              فلترة الوثائق حسب حالتها (مكتملة/تحت الإجراء) و البيانات حسب المكتب أو الجنسية.<br>
                              بحث مباشر واستعراض المعلومات الشخصية باستخدام رقم الهوية.<br>
                              تحليل المكاتب ومعرفة اجمالي عدد المكاتب ونسبة المسلمين الجدد في كل مكتب.<br>
                              تصور بياني وخريطة توضح توزيع المسلمين الجدد حسب الجنسيات.<br>
                              دعم اللغة العربية والانجليزية في التقرير.<br>
                              <a href="./pdf/وزارة الشؤون الاسلامية.pdf" class="pdf" target="_blank">لمعرفة المزيد حول الاستفادة من التقرير</a>`,
      "project1-description": `مميزات التقرير:<br>
                              عرض إجمالي بعدد اللجان والتوصيات ومعدل تنفيذها في برنامج خدمة ضيوف الرحمن.<br>
                              إمكانية فلترة البيانات حسب اسم اللجنة.<br>
                              عرض لكل لجنة: إجمالي عدد الإجتماعات، التوصيات، ومعدل تنفيذ التوصيات.<br>
                              معرفة المدة المتبقية من آخر اجتماع.<br>
                              عرض عدد الأعضاء الحاليين والسابقين والإجمالي.<br>
                              عرض الجهات المشاركة وعدد أعضائها.<br>
                              <a href="./pdf/ضيوف الرحمن.pdf" class="pdf" target="_blank">لمعرفة المزيد حول الاستفادة من التقرير</a>`,
      "project2-description":`مميزات التقرير:<br>
                              معرفة عدد الزيارات الشهرية.<br>
                              إحصائيات دقيقة عن الزيارات الميدانية وعدد الممارسين للرقية الشرعية (بما فيهم المخالفين).<br>
                              تصنيف الممارسين حسب نوع النشاط  (راقي شرعي/ معالج شعبي/ مفسر أحلام).<br>
                              لوحة معلومات لمعرفة حالة الممارسين في كل مهنة(نشط/غير نشط/موقوف).<br>
                              خريطة توضح مواقع نشاط الممارسين.<br>
                              بحث مفصل: صفحة للبحث برقم الهوية تتيح الوصول إلى جميع بيانات الممارسين، بما في ذلك رأي اللجنة، والملاحظات، ومعدي التقرير، والجهات المشاركة.<br>
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


