---
type: project
status: 🟢 active
priority: 🟡 medium
area: [[Services]]
tags: [project, healthcare, telemedicine, react, tailwind-css, medical-assistance, france]
---

**Project Progress:** `$= const tasks = dv.current().file.tasks; const total = tasks.length; if (total === 0) { "No tasks found." } else { const completed = tasks.filter(t => t.completed).length; const percent = Math.round((completed / total) * 100); "<progress value='" + percent + "' max='100'></progress> <span style='font-size:smaller;color:var(--text-muted)'>" + percent + "% &nbsp;|&nbsp; " + (total - completed) + " left</span>"; }`


[Med-Evasan.com](https://www.med-evasan.com/) (also known as MED EVASAN or Medeva) is a prominent European medical assistance provider based in France, established in 1984. It specializes in offering a comprehensive range of medical services, particularly focused on **medical assistance, medical transport, telemedicine, and cost containment for individuals, expatriates, and companies.**

Here's an overview of their key services and characteristics:

**Core Services:**

1. **Medical Assistance (24/7):**
    
    - **Help Desk:** They operate a 24/7 trilingual (French, English, Arabic) help desk to assist with all communication, provide language support, and gather medical information from hospitals.
    - **Guarantee of Payment (GOP):** Med-Evasan can arrange GOPs for both inpatient and outpatient services, facilitating cashless medical treatment. They pride themselves on having the largest cashless service network in France.
    - **Appointment Arrangement:** They assist in arranging appointments with general practitioners, specialists, house call visits, and in-house teleconsultations.
    - **Hospital Admission:** They can help arrange hospital admissions, selecting appropriate facilities based on the patient's medical condition and specialty needs, leveraging their regional hospital footprint.
    - **COVID-19 Services:** They provide PCR tests, Antigen Detection Tests, and vaccine provision to patients.
2. **Medical Transport:**
    
    - **Ground Transport:** They arrange ground ambulance and taxi services across France, utilizing an extensive network of reliable suppliers.
    - **Air Ambulance:** Med-Evasan has significant experience in performing air ambulance missions, particularly in the Mediterranean region for evacuations from North Africa.
    - **Medical Escorts:** They provide internationally trained and registered medical escorts for patients, often staff with extensive experience in Accident & Emergency or ICU departments, who can accompany patients on medical transports.
    - **Remote and Complex Extraction/Evacuation:** Expertise in moving patients from remote or unstable locations, especially in the Middle East, in cooperation with dedicated teams and partners.
3. **Telemedicine:**
    
    - **Virtual Family Doctor:** This service provides a virtual family medicine solution for expatriates and frequent travelers, including an individual medical file accessible via QR code. An annual preventive consultation reviews past medical events and provides recommendations for the next 12 months. Patients have 24/7 access to the help desk for new medical events, and can request teleconsultations or second opinions.
    - **Teleconsultation:** Performed by doctors registered in France, with 24/7 trilingual logistical support for programming, during, and post-consultation.
    - **Telemedicine - Travel For Treatment:** They have developed a hospital network in France and Dubai to plan and organize medical concierge services, help select suitable hospitals, and transfer medical information.
4. **Cost Containment:**
    
    - Leveraging their on-the-ground presence and expertise in the local healthcare system, Med-Evasan acts as a mediator to ensure medical costs are customary and contained. This is achieved through a network of accredited providers and deep knowledge of local pricing, combined with medical input and analysis.
5. **Site Medicalization & Regulation:**
    
    - They organize full and customized medical services on-site for various events and locations, including festivals, cultural/sports events, exploration sites, construction sites, and isolated sites, ensuring duty of care.
6. **International Private Medical Insurance (IPMI):**
    
    - They can organize IPMI offering comprehensive coverage, a global network of providers, streamlined administration, and emergency support for expatriates.

**Company Profile:**

- **Established:** 1984
- **Location:** Headquartered in Marseille, France. They also have operations in the Middle East.
- **Market Position:** Described as the oldest and largest independent medical assistance and repatriation service company in France.
- **Compliance:** Delivers services in alignment with European and international regulations.
- **Partnerships:** Works daily with major assistance companies.

In essence, Med-Evasan is a comprehensive medical assistance partner for individuals, expatriates, and corporations, providing a wide array of services from routine medical coordination and telemedicine to complex medical evacuations and cost management, with a strong focus on accessibility, quality of care, and efficiency.


## Med-Evac App: Key Technologies and Packages Report

The Med-Evac application is a modern web application built with a comprehensive suite of frontend technologies centered around the React ecosystem. This report outlines the key packages and tools that power its functionality, user interface, and development process.

---

### Core Frontend Technologies (JavaScript & React Ecosystem)

The frontend is built primarily with **JavaScript** and the **React** library, enabling a dynamic and interactive user experience.

- **React (with React DOM):** (Most Important) The foundational JavaScript library for building the user interface. It allows for the creation of reusable components, leading to efficient development and a responsive user experience.
- **React Router DOM:** (Important) Manages navigation within the application, enabling a smooth single-page application (SPA) experience without full page reloads.
- **JavaScript (ES6+):** The core programming language used for all frontend logic and interactivity, with modern features utilized through the React ecosystem.

---

### Styling and UI Frameworks

The application's visual appearance and responsiveness are managed by a combination of modern styling tools and established UI frameworks.

- **Tailwind CSS (with PostCSS & Autoprefixer):** (Most Important) A utility-first CSS framework that allows for rapid UI development and customization. PostCSS and Autoprefixer ensure compatibility and optimization of styles across different web browsers.
    - `@tailwindcss/forms`: A plugin for Tailwind CSS to provide better default styling for form elements.
- **Bootstrap & React Bootstrap v5:** (Notable) These provide a set of pre-designed UI components (buttons, modals, navigation) that can accelerate development and ensure a consistent look and feel. Their use alongside Tailwind CSS suggests they might be used for specific components or layout structures.
- `radium`: A toolset for styling React components, potentially used for specific components requiring inline style management or advanced styling features not covered by Tailwind/Bootstrap.

---

### API Interaction & Data Handling

The application communicates with backend services and manages data primarily through the following:

- **Axios:** (Important) A widely-used JavaScript library for making HTTP requests to fetch or send data to servers, crucial for dynamic content and server interactions.

---

### UI Components, Animations & User Experience

A variety of libraries are employed to create an engaging, visually appealing, and performant user experience.

- **Framer Motion:** (Important) A powerful React animation library used to create fluid and complex animations and transitions, significantly enhancing the user interface.
- **Animation Libraries (`animate.css`, `aos`, `react-animation-on-scroll`, `react-animations`):** This suite of libraries provides pre-built CSS animations and tools to trigger animations on scroll or other events, contributing to a dynamic and engaging user experience.
- **Carousel/Slider Libraries (`swiper`, `react-slick`, `react-fast-marquee`):** Used for creating interactive carousels, sliders, or scrolling text/image marquees to present information effectively.
- **Lazy Loading Libraries (`react-lazy-load`, `react-lazy-load-image-component`, `react-lazyload`, `react-progressive-image`):** (Important for Performance) These tools improve initial page load times and performance by deferring the loading of images and other components until they are about to enter the user's viewport.
- **React Helmet:** Manages changes to the document head (e.g., page titles, meta descriptions), which is important for Search Engine Optimization (SEO) and browser tab information.
- **UI Utility Components:**
    - `react-countup`: Animates numerical data for a more engaging display of statistics.
    - `react-datepicker`: Provides a user-friendly interface for date selection.
    - `react-bootstrap-icons`: Integrates Bootstrap's icon set as React components.
    - `react-intersection-observer`, `react-visibility-sensor`: Help detect when elements are visible on screen, often used to trigger animations or lazy loading.
    - `react-fullscreen-loading`, `react-loading`: Provide visual feedback to users during data loading or processing times.
- `jquery`: While less common in modern React projects, its presence suggests it might be used for specific third-party plugins or legacy utility functions that require it.
- `prop-types`: Used for runtime type checking of props passed to React components, helping to catch bugs during development.

---

### Internationalization

To support a global audience, the application utilizes robust internationalization (i18n) libraries.

- **i18next & react-i18next:** (Important) A powerful internationalization framework and its React integration, allowing the application to be easily translated and adapted for multiple languages and locales.
    - `i18n`: A general i18n utility, likely supporting the core `i18next` setup.

---

### Build, Development, and Testing Tools

These tools are essential for the development lifecycle, from building the application to ensuring its quality and maintainability.

- **React Scripts (Create React App):** (Most Important) The core set of scripts and configurations used to build, run, and test the React application. It handles complex build setups, development server management, and testing configurations.
    - The `start`, `build`, and `test` scripts are configured with `--max_old_space_size=4096` to allocate more memory to the Node.js process, which can be necessary for larger projects during these operations.
- **Testing Library (`@testing-library/jest-dom`, `@testing-library/react`, `@testing-library/user-event`):** (Important) A suite of tools for writing user-centric tests for React components, ensuring the application behaves as expected from a user's perspective.
- **Web Vitals (`web-vitals`):** A library for measuring key web performance metrics, helping to identify and address performance bottlenecks.
- `@gumgum/react-script-tag`: Utility for dynamically adding `<script>` tags to the document, likely for integrating third-party scripts.

---

### Version Control

- **Git:** (Implied Standard) The application's codebase is managed using Git, the industry-standard version control system, enabling collaborative development, change tracking, and release management.
![[../Assets/Img/www.med-evasan.com_.png]]