// Frontend Application Logic for Netlify Static Portfolio
document.addEventListener('DOMContentLoaded', () => {
  const { profile, projects, experiences, skillCategories, testimonials } = portfolioData;

  let currentCategory = 'All';
  let activeModalProject = null;

  // Initialize Header & Profile UI
  renderProfileData(profile);
  renderCategoryTabs(profile, projects);
  renderProjects(projects, currentCategory);
  renderSkills(skillCategories);
  renderExperiences(experiences);
  renderTestimonials(testimonials);
  setupContactForm();
  setupMobileMenu();
  setupModalHandlers();

  // Re-run Lucide Icons to replace data-lucide tags
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // --- Render Profile Details ---
  function renderProfileData(p) {
    // Brand name & titles
    const brandNameEls = document.querySelectorAll('.profile-name');
    brandNameEls.forEach(el => el.textContent = p.name);

    const brandTitleEls = document.querySelectorAll('.profile-title');
    brandTitleEls.forEach(el => el.textContent = p.title);

    // Hero Badge
    const heroBadgeEl = document.getElementById('hero-badge-text');
    if (heroBadgeEl) heroBadgeEl.textContent = p.heroBadge;

    // Hero Headline
    const heroHeadlineEl = document.getElementById('hero-headline');
    if (heroHeadlineEl) heroHeadlineEl.innerHTML = p.heroHeadline;

    // Tagline
    const heroTaglineEl = document.getElementById('hero-tagline');
    if (heroTaglineEl) heroTaglineEl.textContent = p.tagline;

    // Metrics
    const metricExpValue = document.getElementById('metric-exp-val');
    const metricExpLabel = document.getElementById('metric-exp-lbl');
    if (metricExpValue) metricExpValue.textContent = p.yearsExperience;
    if (metricExpLabel) metricExpLabel.textContent = p.yearsExperienceLabel;

    const metricStoresValue = document.getElementById('metric-stores-val');
    const metricStoresLabel = document.getElementById('metric-stores-lbl');
    if (metricStoresValue) metricStoresValue.textContent = p.completedStores;
    if (metricStoresLabel) metricStoresLabel.textContent = p.completedStoresLabel;

    const metricRatingValue = document.getElementById('metric-rating-val');
    const metricRatingLabel = document.getElementById('metric-rating-lbl');
    if (metricRatingValue) metricRatingValue.textContent = p.clientSatisfaction;
    if (metricRatingLabel) metricRatingLabel.textContent = p.clientSatisfactionLabel;

    // Avatar
    const avatarEl = document.getElementById('profile-avatar');
    if (avatarEl) {
      avatarEl.src = p.avatarImage;
      avatarEl.alt = p.name;
    }

    // Availability
    const availabilityEl = document.getElementById('profile-availability');
    if (availabilityEl) availabilityEl.textContent = p.availability;

    // Contact info
    const contactEmailEl = document.getElementById('contact-email');
    if (contactEmailEl) contactEmailEl.textContent = p.email;

    const contactLocationEl = document.getElementById('contact-location');
    if (contactLocationEl) contactLocationEl.textContent = p.location;

    // Year in footer
    const currentYearEl = document.getElementById('current-year');
    if (currentYearEl) currentYearEl.textContent = new Date().getFullYear();
  }

  // --- Category Tabs ---
  function renderCategoryTabs(p, projs) {
    const tabsContainer = document.getElementById('category-tabs-container');
    if (!tabsContainer) return;

    const categories = ['All', ...(p.caseStudyCategories || Array.from(new Set(projs.map(i => i.category).filter(Boolean))))];

    tabsContainer.innerHTML = '';
    categories.forEach(cat => {
      const btn = document.createElement('button');
      btn.className = `px-4 py-2 rounded-xl text-sm font-medium transition-all ${
        currentCategory === cat
          ? 'bg-slate-900 text-white shadow-md'
          : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
      }`;
      btn.textContent = cat;
      btn.onclick = () => {
        currentCategory = cat;
        renderCategoryTabs(p, projs);
        renderProjects(projs, currentCategory);
      };
      tabsContainer.appendChild(btn);
    });
  }

  // --- Projects Grid ---
  function renderProjects(projs, category) {
    const grid = document.getElementById('projects-grid');
    if (!grid) return;

    const filtered = category === 'All' 
      ? projs 
      : projs.filter(p => p.category === category);

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div class="col-span-full py-16 text-center text-slate-500 bg-white rounded-2xl border border-slate-200">
          <p class="text-base font-medium">No projects found in this category.</p>
        </div>
      `;
      return;
    }

    grid.innerHTML = filtered.map(proj => {
      return `
        <div class="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between" id="card-${proj.id}">
          <div>
            <div class="relative aspect-video overflow-hidden bg-slate-100">
              <img 
                src="${proj.image}" 
                alt="${proj.title}"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div class="absolute top-4 left-4">
                <span class="px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-xs font-medium">
                  ${proj.category}
                </span>
              </div>
            </div>

            <div class="p-6 sm:p-8 space-y-4">
              <div class="text-xs font-semibold text-emerald-600 tracking-wide uppercase">${proj.client}</div>
              <h4 class="text-xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                ${proj.title}
              </h4>
              <p class="text-slate-600 text-sm line-clamp-2 leading-relaxed">
                ${proj.description}
              </p>

              <!-- Metrics Badges -->
              <div class="grid grid-cols-3 gap-3 pt-2">
                ${proj.metrics.map(m => `
                  <div class="p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-center">
                    <div class="text-base font-extrabold text-emerald-600">${m.value}</div>
                    <div class="text-[11px] text-slate-500 font-medium truncate">${m.label}</div>
                  </div>
                `).join('')}
              </div>

              <!-- Tech Stack Tags -->
              <div class="flex flex-wrap gap-1.5 pt-2">
                ${proj.technologies.slice(0, 4).map(tech => `
                  <span class="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-medium">
                    ${tech}
                  </span>
                `).join('')}
                ${proj.technologies.length > 4 ? `
                  <span class="px-2 py-1 rounded-md bg-slate-100 text-slate-500 text-xs">
                    +${proj.technologies.length - 4} more
                  </span>
                ` : ''}
              </div>
            </div>
          </div>

          <div class="px-6 sm:px-8 pb-6 pt-0 flex items-center justify-between border-t border-slate-100 mt-4">
            <button
              data-project-id="${proj.id}"
              class="open-modal-btn inline-flex items-center space-x-1.5 text-sm font-semibold text-emerald-600 hover:text-emerald-700 pt-4"
            >
              <span>View Case Study</span>
              <i data-lucide="chevron-right" class="w-4 h-4"></i>
            </button>
            <div class="flex items-center space-x-1 pt-4">
              ${proj.githubUrl ? `
                <a
                  href="${proj.githubUrl}"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
                  title="View Source Code on GitHub"
                  aria-label="View Source Code on GitHub"
                >
                  <!-- GitHub mark (inline SVG: Lucide no longer ships brand icons) -->
                  <svg viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4" aria-hidden="true">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                  </svg>
                </a>
              ` : ''}
              ${proj.storeUrl ? `
                <a
                  href="${proj.storeUrl}"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
                  title="Visit Store"
                >
                  <i data-lucide="external-link" class="w-4 h-4"></i>
                </a>
              ` : ''}
            </div>
          </div>
        </div>
      `;
    }).join('');

    // Attach modal click events
    grid.querySelectorAll('.open-modal-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-project-id');
        const proj = projs.find(p => p.id === id);
        if (proj) openModal(proj);
      });
    });

    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  // --- Skills Section ---
  function renderSkills(cats) {
    const container = document.getElementById('skills-container');
    if (!container) return;

    container.innerHTML = cats.map((cat, idx) => {
      const iconName = idx === 0 ? 'shopping-bag' : idx === 1 ? 'code' : 'cpu';
      return `
        <div class="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
          <div class="flex items-center space-x-3">
            <div class="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
              <i data-lucide="${iconName}" class="w-5 h-5"></i>
            </div>
            <h4 class="text-lg font-bold text-slate-900">${cat.title}</h4>
          </div>

          <div class="space-y-4">
            ${cat.skills.map(skill => `
              <div class="space-y-1.5">
                <div class="flex justify-between text-sm">
                  <span class="font-semibold text-slate-800">${skill.name}</span>
                  <span class="text-emerald-700 font-bold">${skill.level}%</span>
                </div>
                <div class="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                  <div 
                    class="h-full bg-emerald-600 rounded-full transition-all duration-1000"
                    style="width: ${skill.level}%"
                  ></div>
                </div>
                ${skill.description ? `
                  <p class="text-xs text-slate-500 pt-0.5">${skill.description}</p>
                ` : ''}
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }).join('');
  }

  // --- Experiences Timeline ---
  function renderExperiences(exps) {
    const container = document.getElementById('experience-container');
    if (!container) return;

    container.innerHTML = exps.map(exp => {
      return `
        <div class="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden">
          <div class="flex flex-col md:flex-row md:items-center justify-between mb-4">
            <div>
              <h4 class="text-xl font-bold text-slate-900">${exp.role}</h4>
              <div class="text-emerald-700 font-semibold text-sm">${exp.company}</div>
            </div>
            <div class="mt-2 md:mt-0 inline-flex items-center px-3 py-1 rounded-full bg-slate-200 text-slate-700 text-xs font-medium">
              ${exp.period}
            </div>
          </div>

          <p class="text-slate-600 text-sm mb-4 leading-relaxed">${exp.description}</p>

          <div class="space-y-2 mb-6">
            ${exp.highlights.map(item => `
              <div class="flex items-start space-x-2 text-sm text-slate-700">
                <i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-600 mt-0.5 shrink-0"></i>
                <span>${item}</span>
              </div>
            `).join('')}
          </div>

          <div class="flex flex-wrap gap-2 pt-4 border-t border-slate-200/60">
            ${exp.skillsUsed.map(skill => `
              <span class="px-3 py-1 rounded-md bg-white text-slate-700 text-xs font-medium border border-slate-200">
                ${skill}
              </span>
            `).join('')}
          </div>
        </div>
      `;
    }).join('');
  }

  // --- Testimonials ---
  function renderTestimonials(tests) {
    const container = document.getElementById('testimonials-container');
    if (!container) return;

    container.innerHTML = tests.map(test => {
      const stars = Array(test.rating).fill(0).map(() => `
        <i data-lucide="star" class="w-4 h-4 fill-current"></i>
      `).join('');

      return `
        <div class="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between space-y-6">
          <div class="space-y-4">
            <div class="flex items-center space-x-1 text-amber-400">
              ${stars}
            </div>
            <p class="text-slate-700 text-sm leading-relaxed italic">
              "${test.content}"
            </p>
          </div>

          <div class="flex items-center space-x-4 pt-4 border-t border-slate-100">
            <img 
              src="${test.avatar}" 
              alt="${test.clientName}"
              class="w-12 h-12 rounded-full object-cover"
              loading="lazy"
            />
            <div>
              <h5 class="font-bold text-slate-900 text-sm">${test.clientName}</h5>
              <div class="text-xs text-slate-500">${test.clientTitle}, <span class="text-emerald-700 font-medium">${test.company}</span></div>
              <div class="text-[11px] text-slate-400 mt-0.5">${test.projectTitle}</div>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  // --- Case Study Modal ---
  function setupModalHandlers() {
    const modal = document.getElementById('case-study-modal');
    const closeBtn = document.getElementById('modal-close-btn');
    const closeActionBtn = document.getElementById('modal-close-action-btn');

    if (closeBtn) closeBtn.onclick = closeModal;
    if (closeActionBtn) closeActionBtn.onclick = closeModal;

    if (modal) {
      modal.onclick = (e) => {
        if (e.target === modal) closeModal();
      };
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeModal();
    });
  }

  function openModal(proj) {
    activeModalProject = proj;
    const modal = document.getElementById('case-study-modal');
    if (!modal) return;

    document.getElementById('modal-category').textContent = proj.category;
    document.getElementById('modal-title').textContent = proj.title;
    document.getElementById('modal-image').src = proj.image;
    document.getElementById('modal-image').alt = proj.title;
    document.getElementById('modal-challenge').textContent = proj.challenge;
    document.getElementById('modal-solution').textContent = proj.solution;

    // Metrics
    const metricsContainer = document.getElementById('modal-metrics');
    metricsContainer.innerHTML = proj.metrics.map(m => `
      <div class="p-4 rounded-xl bg-emerald-50 border border-emerald-100 text-center">
        <div class="text-xl font-extrabold text-emerald-700">${m.value}</div>
        <div class="text-xs text-slate-600 font-medium">${m.label}</div>
      </div>
    `).join('');

    // Results
    const resultsContainer = document.getElementById('modal-results');
    resultsContainer.innerHTML = proj.results.map(r => `
      <li class="flex items-start space-x-2">
        <i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-600 mt-0.5 shrink-0"></i>
        <span>${r}</span>
      </li>
    `).join('');

    // Technologies
    const techContainer = document.getElementById('modal-tech');
    techContainer.innerHTML = proj.technologies.map(t => `
      <span class="px-3 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold">
        ${t}
      </span>
    `).join('');

    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';

    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  function closeModal() {
    const modal = document.getElementById('case-study-modal');
    if (!modal) return;
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = 'auto';
    activeModalProject = null;
  }

  // --- Contact Form (Netlify Compatible) ---
  function setupContactForm() {
    const form = document.getElementById('contact-form');
    const successCard = document.getElementById('contact-success-card');
    if (!form || !successCard) return;

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span>Sending...</span>`;

      // If running on Netlify with Netlify Forms, post form data
      try {
        const formData = new FormData(form);
        // Standard Netlify AJAX submission format
        await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams(formData).toString()
        }).catch(() => {
          // If running locally without Netlify backend, catch and continue
        });
      } catch (err) {
        console.log('Form submission completed locally');
      }

      form.classList.add('hidden');
      successCard.classList.remove('hidden');

      setTimeout(() => {
        form.reset();
        form.classList.remove('hidden');
        successCard.classList.add('hidden');
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        if (window.lucide) window.lucide.createIcons();
      }, 7000);
    });
  }

  // --- Mobile Navigation Menu ---
  function setupMobileMenu() {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const menuDropdown = document.getElementById('mobile-menu-dropdown');
    if (!menuBtn || !menuDropdown) return;

    menuBtn.addEventListener('click', () => {
      const isOpen = !menuDropdown.classList.contains('hidden');
      if (isOpen) {
        menuDropdown.classList.add('hidden');
      } else {
        menuDropdown.classList.remove('hidden');
      }
    });

    // Close mobile menu when clicking any link
    menuDropdown.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menuDropdown.classList.add('hidden');
      });
    });
  }
});
