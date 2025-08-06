"use client";

import { useState, useEffect } from "react";

export default function Page() {
  const [activeSection, setActiveSection] = useState("about");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const sections = ["about", "projects", "skills", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 w-full">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-lg z-50 border-b border-gray-200 shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-primary to-purple text-transparent bg-clip-text">
              김개발
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-2">
              {[
                { id: "about", label: "About", color: "from-primary to-primary-light" },
                { id: "projects", label: "Projects", color: "from-secondary to-emerald-400" },
                { id: "skills", label: "Skills", color: "from-purple to-pink" },
                { id: "contact", label: "Contact", color: "from-accent to-orange-400" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full ${
                    activeSection === item.id
                      ? `bg-gradient-to-r ${item.color} text-white shadow-lg scale-105`
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden flex flex-col gap-1 p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="메뉴 토글"
            >
              <span className={`w-6 h-0.5 bg-gray-600 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <span className={`w-6 h-0.5 bg-gray-600 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-6 h-0.5 bg-gray-600 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-6 py-6 border-t border-gray-200 bg-white/50 backdrop-blur-sm rounded-2xl mx-4">
              <div className="flex flex-col space-y-3">
                {[
                  { id: "about", label: "About", color: "from-primary to-primary-light" },
                  { id: "projects", label: "Projects", color: "from-secondary to-emerald-400" },
                  { id: "skills", label: "Skills", color: "from-purple to-pink" },
                  { id: "contact", label: "Contact", color: "from-accent to-orange-400" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      scrollToSection(item.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`text-center py-3 px-6 mx-4 rounded-xl transition-all duration-300 font-medium ${
                      activeSection === item.id
                        ? `bg-gradient-to-r ${item.color} text-white shadow-lg`
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section id="about" className="relative pt-20 pb-32 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-br from-primary/20 to-purple/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative w-full flex justify-center">
          <div className="max-w-7xl w-full text-center animate-fade-in-up">
            <div className="mb-8">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-primary/10 to-purple/10 border border-primary/20 rounded-full text-primary font-medium text-sm mb-6">
                👋 안녕하세요!
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight leading-tight">
              <span className="block text-gray-800 mb-2">풀스택 개발자</span>
              <span className="block bg-gradient-to-r from-primary via-purple to-secondary bg-clip-text text-transparent">
                김개발
              </span>
              <span className="block text-gray-600 text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-4">
                입니다
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-4xl mx-auto">
              사용자 중심의 <span className="text-primary font-semibold">웹 애플리케이션</span>을 만드는 것을 좋아합니다.
              <br className="hidden sm:block" />
              <span className="text-secondary font-semibold">Modern JavaScript</span>와 
              <span className="text-purple font-semibold"> React 생태계</span>에 깊은 관심을 가지고 있으며,
              <br className="hidden md:block" />
              깔끔하고 효율적인 코드를 작성하려고 노력합니다.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <button className="w-full sm:w-auto bg-gradient-to-r from-primary to-primary-dark text-white px-8 sm:px-10 py-4 rounded-2xl hover:from-primary-dark hover:to-primary transition-all duration-300 font-semibold text-lg hover:scale-105 hover:shadow-2xl shadow-lg">
                📄 이력서 다운로드
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="w-full sm:w-auto border-2 border-primary/30 text-primary px-8 sm:px-10 py-4 rounded-2xl hover:bg-primary hover:text-white transition-all duration-300 font-semibold text-lg hover:scale-105 hover:shadow-xl"
              >
                💬 연락하기
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-primary/5 w-full flex justify-center">
        <div className="max-w-7xl w-full">
          <div className="text-center mb-16">
            <div className="inline-block">
              <span className="bg-gradient-to-r from-secondary to-emerald-400 bg-clip-text text-transparent text-lg font-semibold mb-4 block">
                💼 Portfolio
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-800">
                Projects
              </h2>
            </div>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              다양한 기술 스택을 활용해 구현한 프로젝트들입니다.
              <br className="hidden sm:block" />
              각각의 프로젝트는 사용자 경험과 기술적 완성도를 고려하여 개발되었습니다.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 max-w-6xl w-full justify-items-center">
                        {[
              {
                title: "🛒 E-Commerce Platform",
                description: "React와 Node.js로 구축한 풀스택 전자상거래 플랫폼",
                tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
                github: "#",
                demo: "#",
                gradient: "from-blue-500 to-purple-600",
                bgGradient: "from-blue-50 to-purple-50"
              },
              {
                title: "📋 Task Management App",
                description: "팀 협업을 위한 실시간 태스크 관리 애플리케이션",
                tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
                github: "#",
                demo: "#",
                gradient: "from-emerald-500 to-teal-600",
                bgGradient: "from-emerald-50 to-teal-50"
              },
              {
                title: "🌤️ Weather Dashboard",
                description: "반응형 날씨 대시보드 및 예보 시각화 도구",
                tech: ["Vue.js", "Chart.js", "Weather API"],
                github: "#",
                demo: "#",
                gradient: "from-amber-500 to-orange-600",
                bgGradient: "from-amber-50 to-orange-50"
              },
            ].map((project, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${project.bgGradient} p-6 sm:p-8 rounded-3xl border border-white/50 hover:border-white/80 transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 group backdrop-blur-sm w-full max-w-sm`}
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${project.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-white text-xl font-bold">
                    {index + 1}
                  </span>
                </div>
                
                <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed text-base sm:text-lg">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 sm:gap-3 mb-8">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-white/60 text-gray-700 text-xs sm:text-sm font-medium rounded-full hover:bg-white/80 transition-all duration-200 backdrop-blur-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${project.gradient} text-white rounded-xl hover:shadow-lg transition-all duration-200 font-medium text-sm hover:scale-105`}
                  >
                    🔗 GitHub
          </a>
          <a
                    href={project.demo}
                    className="flex items-center gap-2 px-4 py-2 bg-white/60 text-gray-700 rounded-xl hover:bg-white/80 transition-all duration-200 font-medium text-sm hover:scale-105 backdrop-blur-sm"
                  >
                    ✨ Demo
                  </a>
                </div>
              </div>
            ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white w-full flex justify-center">
        <div className="max-w-7xl w-full">
          <div className="text-center mb-16">
            <div className="inline-block">
              <span className="bg-gradient-to-r from-purple to-pink bg-clip-text text-transparent text-lg font-semibold mb-4 block">
                ⚡ Expertise
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-800">
                Skills
              </h2>
            </div>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              끊임없이 학습하고 발전시켜 나가는 기술 스택들입니다.
              <br className="hidden sm:block" />
              각 기술에 대한 숙련도와 경험을 바탕으로 최적의 솔루션을 제공합니다.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 max-w-6xl w-full justify-items-center">
            {[
              {
                category: "🎨 Frontend",
                icon: "🖥️",
                gradient: "from-blue-500 to-cyan-500",
                bgGradient: "from-blue-50 to-cyan-50",
                skills: [
                  { name: "JavaScript/TypeScript", level: 90, color: "from-yellow-400 to-orange-500" },
                  { name: "React/Next.js", level: 85, color: "from-blue-400 to-blue-600" },
                  { name: "Vue.js", level: 75, color: "from-green-400 to-green-600" },
                  { name: "Tailwind CSS", level: 80, color: "from-cyan-400 to-cyan-600" },
                ],
              },
              {
                category: "⚙️ Backend", 
                icon: "🔧",
                gradient: "from-emerald-500 to-teal-500",
                bgGradient: "from-emerald-50 to-teal-50",
                skills: [
                  { name: "Node.js", level: 80, color: "from-green-400 to-green-600" },
                  { name: "Python", level: 70, color: "from-blue-400 to-blue-600" },
                  { name: "MongoDB", level: 75, color: "from-green-400 to-green-600" },
                  { name: "PostgreSQL", level: 70, color: "from-blue-400 to-indigo-600" },
                ],
              },
              {
                category: "🛠️ Tools & Others",
                icon: "⚡",
                gradient: "from-purple-500 to-pink-500",
                bgGradient: "from-purple-50 to-pink-50",
                skills: [
                  { name: "Git/GitHub", level: 85, color: "from-gray-600 to-gray-800" },
                  { name: "Docker", level: 65, color: "from-blue-400 to-blue-600" },
                  { name: "AWS", level: 60, color: "from-orange-400 to-orange-600" },
                  { name: "Figma", level: 70, color: "from-purple-400 to-pink-500" },
                ],
              },
            ].map((skillGroup, index) => (
              <div key={index} className={`bg-gradient-to-br ${skillGroup.bgGradient} p-6 sm:p-8 rounded-3xl border border-white/50 hover:border-white/80 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group w-full max-w-sm`}>
                <div className="text-center mb-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${skillGroup.gradient} rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-2xl">{skillGroup.icon}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
                    {skillGroup.category}
                  </h3>
                </div>
                
                <div className="space-y-6">
                  {skillGroup.skills.map((skill) => (
                    <div key={skill.name} className="group/skill">
                      <div className="flex justify-between items-center mb-3">
                        <span className="font-medium text-gray-700 text-sm sm:text-base">
                          {skill.name}
                        </span>
                        <span className="text-gray-600 font-bold text-sm bg-white/60 px-2 py-1 rounded-full">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-white/60 rounded-full h-3 overflow-hidden backdrop-blur-sm">
                        <div
                          className={`bg-gradient-to-r ${skill.color} h-3 rounded-full transition-all duration-1000 ease-out group-hover/skill:shadow-lg`}
                          style={{ 
                            width: `${skill.level}%`,
                            transition: `width 1000ms ease-out ${index * 200}ms`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-accent/5 w-full flex justify-center">
        <div className="max-w-7xl w-full flex justify-center">
          <div className="max-w-4xl w-full text-center">
            <div className="mb-16">
              <div className="inline-block">
                <span className="bg-gradient-to-r from-accent to-orange-400 bg-clip-text text-transparent text-lg font-semibold mb-4 block">
                  💌 Get In Touch
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-800">
                  Contact
                </h2>
              </div>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                프로젝트에 대한 문의나 협업 제안이 있으시면 언제든 연락해주세요.
                <br className="hidden sm:block" />
                새로운 도전과 흥미로운 프로젝트를 함께 만들어가요!
              </p>
            </div>
            
            <div className="bg-white/80 p-8 sm:p-12 rounded-3xl border border-white/50 mb-12 shadow-2xl backdrop-blur-sm">
              <form className="space-y-6 sm:space-y-8">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      placeholder="이름"
                      className="w-full px-6 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-300 bg-white text-lg placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="이메일"
                      className="w-full px-6 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-300 bg-white text-lg placeholder-gray-400"
                    />
                  </div>
                </div>
                <div>
                  <textarea
                    placeholder="메시지를 입력해주세요..."
                    rows={6}
                    className="w-full px-6 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-300 bg-white resize-none text-lg placeholder-gray-400"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-primary-dark text-white py-4 sm:py-5 rounded-2xl hover:from-primary-dark hover:to-primary transition-all duration-300 font-semibold text-lg hover:scale-105 hover:shadow-2xl shadow-lg"
                >
                  🚀 메시지 보내기
                </button>
              </form>
            </div>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8">
              <a
                href="mailto:example@email.com"
                className="flex items-center gap-3 px-6 py-3 bg-white/60 hover:bg-white/80 text-gray-700 rounded-2xl transition-all duration-300 font-medium text-lg hover:scale-105 backdrop-blur-sm hover:shadow-lg"
              >
                📧 example@email.com
        </a>
        <a
                href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 bg-white/60 hover:bg-white/80 text-gray-700 rounded-2xl transition-all duration-300 font-medium text-lg hover:scale-105 backdrop-blur-sm hover:shadow-lg"
              >
                🐱 GitHub
        </a>
        <a
                href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 bg-white/60 hover:bg-white/80 text-gray-700 rounded-2xl transition-all duration-300 font-medium text-lg hover:scale-105 backdrop-blur-sm hover:shadow-lg"
              >
                💼 LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-800 to-gray-900 w-full flex justify-center">
        <div className="max-w-7xl w-full">
          <div className="text-center">
            <div className="mb-6">
              <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary-light to-secondary bg-clip-text text-transparent mb-4">
                김개발
              </h3>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                더 나은 웹 경험을 만들어가는 개발자
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 mb-8">
              <a
                href="mailto:example@email.com"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300"
              >
                📧 Email
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300"
              >
                🐱 GitHub
        </a>
        <a
                href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300"
              >
                💼 LinkedIn
              </a>
            </div>
            
            <div className="border-t border-gray-700 pt-8">
              <p className="text-gray-400 text-base sm:text-lg">
                © {new Date().getFullYear()} 김개발. All rights reserved.
              </p>
              <p className="text-gray-500 text-sm mt-2">
                Made with ❤️ using <span className="text-primary-light">Next.js</span> & <span className="text-secondary">Tailwind CSS</span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
