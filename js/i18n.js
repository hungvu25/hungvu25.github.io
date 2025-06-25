// Đối tượng lưu trữ bản dịch cho EN và VI
const translations = {
  en: {
    nav_objective: "Career Objective",
    nav_education: "Education",
    nav_experience: "Work Experience",
    nav_projects: "Projects",
    nav_tools: "Tools",
    nav_skills: "Skills",
    nav_soft_skills: "Soft Skills",
    nav_contact: "Contact",
    objective_title: "🎯 Career Objective",
    objective_slogan: "🎮 \"Turning imagination into interactive worlds!\"",
    objective_1: "🌟 <b>Passionate</b> about crafting unique, immersive game experiences that spark joy and curiosity.",
    objective_2: "🛠️ <b>Learning</b> game development fundamentals: programming, design, and storytelling.",
    objective_3: "🚀 <b>Driven</b> to grow, collaborate, and contribute to creative projects with a never-stop-learning mindset.",
    objective_4: "✨ <b>Goal:</b> Become a game developer who inspires and connects people through play!",
    education_title: "🎓 Education",
    education_school: "Ho Chi Minh City University of Transport (UTH)",
    education_major_label: "Major:",
    education_major: "Information Technology",
    education_program_label: "Program:",
    education_program: "Bachelor of Information Technology – High-Quality Program",
    education_institute_label: "Institute:",
    education_institute: "High-Quality Training Institute",
    education_duration_label: "Duration:",
    education_duration: "2023 – 2027",
    education_year_label: "Year:",
    education_year: "Year 2 (since Nov 2023)",
    education_gpa_label: "GPA:",
    education_gpa: "3.0 / 4.0",
    // Work Experience
    experience_title: "💼 Work Experience",
    experience_role: "Freelance Game Developer",
    experience_type_label: "Type:",
    experience_type: "Personal Projects / Freelance (Remote)",
    experience_time_label: "Time:",
    experience_time: "2024 – Present",
    experience_1: "Built small 2D games using Unity and C#",
    experience_2: "Applied object-oriented programming and game mechanics",
    experience_3: "Worked independently to practice and apply core game development skills",
    // Projects
    projects_title: "📁 Projects",
    project_voidseeker_title: "Void Seeker (2024)",
    project_voidseeker_desc: "A 2D roguelike top-down shooter made with Unity. Features: random enemy spawning, item drops, core RPG elements.",
    project_voidseeker_btn: "View on Itch.io",
    // Tools
    tools_title: "🧰 Tools",
    tool_unity: "Unity (C#)",
    tool_vscode: "Visual Studio Code",
    tool_git: "Git/GitHub",
    // Skills
    skills_title: "🧠 Skills",
    skills_programming: "Programming Languages",
    skills_game: "Game & Engine Skills",
    skills_foundation: "Foundational Concepts",
    skills_tools: "Tools & Frameworks",
    skills_soft: "Soft Skills",
    badge_csharp: "C#",
    badge_python: "Python",
    badge_unity: "Unity",
    badge_gamemech: "Game mechanics",
    badge_oop: "OOP fundamentals",
    badge_git: "Git",
    badge_vscode: "VS Code",
    badge_teamwork: "Teamwork",
    badge_selflearning: "Self-learning",
    badge_timemanagement: "Time Management",
    // Skill bar labels
    skill_csharp: "C#",
    skill_python: "Python (basic)",
    skill_unity: "Unity script",
    skill_gamemech: "Game mechanics",
    skill_oop: "OOP fundamentals",
    // Soft Skills
    soft_skills_title: "🤝 Soft Skills",
    soft_skill_teamwork: "Teamwork",
    soft_skill_selflearning: "Self-learning",
    soft_skill_timemanagement: "Time Management",
    // Contact
    contact_title: "✉️ Contact",
    contact_name_placeholder: "Your Name",
    contact_email_placeholder: "Your Email",
    contact_message_placeholder: "Your Message",
    contact_send_btn: "Send",
    contact_desc: "Feel free to reach out for collaboration, questions, or just to say hi!",
    contact_success: "Your message has been sent successfully!",
    contact_error: "Failed to send message. Please try again later.",
    contact_invalid_email: "Please enter a valid email address.",
    contact_required: "Please fill out all required fields."
  },
  vi: {
    nav_objective: "Mục tiêu nghề nghiệp",
    nav_education: "Học vấn",
    nav_experience: "Kinh nghiệm làm việc",
    nav_projects: "Dự án",
    nav_tools: "Công cụ",
    nav_skills: "Kỹ năng",
    nav_soft_skills: "Kỹ năng mềm",
    nav_contact: "Liên hệ",
    objective_title: "🎯 Mục tiêu nghề nghiệp",
    objective_slogan: "🎮 \"Biến trí tưởng tượng thành thế giới tương tác!\"",
    objective_1: "🌟 <b>Đam mê</b> tạo ra trải nghiệm game độc đáo, cuốn hút, mang lại niềm vui và sự tò mò.",
    objective_2: "🛠️ <b>Học hỏi</b> nền tảng phát triển game: lập trình, thiết kế, kể chuyện.",
    objective_3: "🚀 <b>Luôn phát triển</b>, hợp tác và đóng góp cho các dự án sáng tạo với tinh thần không ngừng học hỏi.",
    objective_4: "✨ <b>Mục tiêu:</b> Trở thành lập trình viên game truyền cảm hứng và kết nối mọi người qua trò chơi!",
    education_title: "🎓 Học vấn",
    education_school: "Đại học Giao thông Vận tải TP.HCM (UTH)",
    education_major_label: "Chuyên ngành:",
    education_major: "Công nghệ thông tin",
    education_program_label: "Chương trình:",
    education_program: "Cử nhân CNTT – Chất lượng cao",
    education_institute_label: "Viện:",
    education_institute: "Viện đào tạo chất lượng cao",
    education_duration_label: "Thời gian:",
    education_duration: "2023 – 2027",
    education_year_label: "Năm:",
    education_year: "Năm 2 (từ 11/2023)",
    education_gpa_label: "GPA:",
    education_gpa: "3.0 / 4.0",
    // Work Experience
    experience_title: "💼 Kinh nghiệm làm việc",
    experience_role: "Lập trình viên game tự do",
    experience_type_label: "Hình thức:",
    experience_type: "Dự án cá nhân / Freelance (Làm từ xa)",
    experience_time_label: "Thời gian:",
    experience_time: "2024 – Nay",
    experience_1: "Xây dựng các game 2D nhỏ bằng Unity và C#",
    experience_2: "Áp dụng lập trình hướng đối tượng và cơ chế game",
    experience_3: "Tự học, tự thực hành các kỹ năng cốt lõi về phát triển game",
    // Projects
    projects_title: "📁 Dự án",
    project_voidseeker_title: "Void Seeker (2024)",
    project_voidseeker_desc: "Game bắn súng góc nhìn trên xuống, phong cách roguelike, phát triển bằng Unity. Tính năng: sinh quái ngẫu nhiên, rơi vật phẩm, yếu tố RPG.",
    project_voidseeker_btn: "Xem trên Itch.io",
    // Tools
    tools_title: "🧰 Công cụ",
    tool_unity: "Unity (C#)",
    tool_vscode: "Visual Studio Code",
    tool_git: "Git/GitHub",
    // Skills
    skills_title: "🧠 Kỹ năng",
    skills_programming: "Ngôn ngữ lập trình",
    skills_game: "Kỹ năng Game & Engine",
    skills_foundation: "Kiến thức nền tảng",
    skills_tools: "Công cụ & Framework",
    skills_soft: "Kỹ năng mềm",
    badge_csharp: "C#",
    badge_python: "Python",
    badge_unity: "Unity",
    badge_gamemech: "Cơ chế game",
    badge_oop: "Lập trình OOP",
    badge_git: "Git",
    badge_vscode: "VS Code",
    badge_teamwork: "Làm việc nhóm",
    badge_selflearning: "Tự học",
    badge_timemanagement: "Quản lý thời gian",
    // Skill bar labels
    skill_csharp: "C#",
    skill_python: "Python (cơ bản)",
    skill_unity: "Unity script",
    skill_gamemech: "Cơ chế game",
    skill_oop: "Lập trình OOP",
    // Soft Skills
    soft_skills_title: "🤝 Kỹ năng mềm",
    soft_skill_teamwork: "Làm việc nhóm",
    soft_skill_selflearning: "Tự học",
    soft_skill_timemanagement: "Quản lý thời gian",
    // Contact
    contact_title: "✉️ Liên hệ",
    contact_name_placeholder: "Tên của bạn",
    contact_email_placeholder: "Email của bạn",
    contact_message_placeholder: "Lời nhắn của bạn",
    contact_send_btn: "Gửi",
    contact_desc: "Hãy liên hệ nếu bạn muốn hợp tác, có câu hỏi hoặc chỉ đơn giản là muốn chào hỏi!",
    contact_success: "Gửi tin nhắn thành công!",
    contact_error: "Gửi tin nhắn thất bại. Vui lòng thử lại sau.",
    contact_invalid_email: "Vui lòng nhập địa chỉ email hợp lệ.",
    contact_required: "Vui lòng điền đầy đủ các trường bắt buộc."
  }
};

function setLanguage(lang) {
  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    var key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });
  // Lưu ngôn ngữ vào localStorage
  localStorage.setItem('lang', lang);
}

document.addEventListener('DOMContentLoaded', function() {
  // Gán sự kiện cho nút chuyển ngôn ngữ
  document.querySelectorAll('.lang-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      setLanguage(this.getAttribute('data-lang'));
    });
  });
  // Tự động chọn ngôn ngữ đã lưu hoặc mặc định là EN
  var lang = localStorage.getItem('lang') || 'en';
  setLanguage(lang);
});
