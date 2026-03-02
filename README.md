
  
</head>
<body>
    <div class="text-center">
        <h1>🛡️ Vima Margadarshan (विमा मार्गदर्शन)</h1>
        <p><strong>Marathi Insurance Information Portal</strong></p>
        <p>A modern, responsive web portal explaining health, term, and car insurance in simple Marathi. Built with React, Vite, TypeScript, and Tailwind CSS.</p>
        <p>
            <a href="#features">Features</a> • 
            <a href="#quick-start">Quick Start</a> • 
            <a href="#customization">Customization</a> • 
            <a href="#roadmap">Roadmap</a>
        </p>
    </div>
    <h2 id="quick-start">🚀 Quick Start</h2>
    <h3>Prerequisites</h3>
    <ul>
        <li>Node.js 18+</li>
        <li>npm or yarn</li>
    </ul>
    <h3>Setup Instructions</h3>
    <ol>
        <li>
            <strong>Clone the repository and install dependencies:</strong>
            <pre><code>npm install</code></pre>
        </li>
        <li>
            <strong>Start the development server:</strong>
            <pre><code>npm run dev</code></pre>
            <p>Open <strong>http://localhost:5173</strong> in your browser to view the app.</p>
        </li>
        <li>
            <strong>Build for production:</strong>
            <pre><code>npm run build</code></pre>
        </li>
        <li>
            <strong>Preview the production build:</strong>
            <pre><code>npm run preview</code></pre>
        </li>
    </ol>
    <h2 id="project-structure">📁 Project Structure</h2>
    <pre><code>src/
├── components/
│   ├── Header.tsx        # Responsive nav with mobile menu
│   └── Footer.tsx        # Footer with IRDAI, HDFC ERGO, Tata AIG links
├── pages/
│   ├── Home.tsx          # Hero, feature cards, testimonial, CTA
│   ├── HealthInsurance.tsx
│   ├── TermInsurance.tsx
│   ├── CarInsurance.tsx
│   ├── Blog.tsx          # Blog listing with 4 sample posts
│   ├── FAQ.tsx           # Filterable accordion FAQ (15 questions)
│   ├── About.tsx         # Team, values, disclaimer
│   └── Contact.tsx       # Validated form + WhatsApp integration
├── App.tsx               # React Router v6 routing
├── main.tsx              # Entry point
└── index.css             # Tailwind + custom design tokens</code></pre>
    <h2 id="design-system">🎨 Design System</h2>
    <h3>Colors</h3>
    <ul>
        <li>🟠 <strong>Saffron</strong> (<code>saffron-*</code>): Primary CTA, accents — inspired by Maharashtra.</li>
        <li>🟤 <strong>Earth</strong> (<code>earth-*</code>): Text, backgrounds — warm and trustworthy.</li>
        <li>🟢 <strong>Forest Green</strong> (<code>forest-*</code>): Accent for positive/coverage indicators.</li>
    </ul>
    <h3>Typography</h3>
    <p>Optimized for Devanagari script via Google Fonts:</p>
    <ul>
        <li><strong>Display</strong>: <code>Noto Serif Devanagari</code> — Used for headings.</li>
        <li><strong>Body</strong>: <code>Noto Sans Devanagari</code> — Used for paragraphs and UI elements.</li>
    </ul>
    <h3>Core Components (CSS Classes)</h3>
    <table>
        <thead>
            <tr>
                <th>Class</th>
                <th>Usage</th>
            </tr>
        </thead>
        <tbody>
            <tr><td><code>.card</code></td><td>Rounded card with hover shadow</td></tr>
            <tr><td><code>.btn-primary</code></td><td>Saffron filled primary button</td></tr>
            <tr><td><code>.btn-outline</code></td><td>Bordered outline button</td></tr>
            <tr><td><code>.btn-whatsapp</code></td><td>Green WhatsApp CTA button</td></tr>
            <tr><td><code>.form-input</code></td><td>Consistent, accessible form fields</td></tr>
            <tr><td><code>.section-title</code></td><td>H2 section headings</td></tr>
            <tr><td><code>.section-wrap</code></td><td>Centered container for main content</td></tr>
            <tr><td><code>.page-hero</code></td><td>Top hero section styling</td></tr>
            <tr><td><code>.prose-mar</code></td><td>Typography optimized for Marathi long-form content</td></tr>
            <tr><td><code>.tag</code></td><td>Badge or category label</td></tr>
        </tbody>
    </table>
    <h2 id="features">✅ Features — Phase 1</h2>
    <ul class="task-list">
        <li><input type="checkbox" checked disabled> All 8 core pages with full Marathi content.</li>
        <li><input type="checkbox" checked disabled> Responsive mobile-first design.</li>
        <li><input type="checkbox" checked disabled> React Router v6 routing with automatic scroll-to-top.</li>
        <li><input type="checkbox" checked disabled> Fixed header with mobile hamburger menu.</li>
        <li><input type="checkbox" checked disabled> Contact form with client-side validation.</li>
        <li><input type="checkbox" checked disabled> WhatsApp deep-link integration across all pages.</li>
        <li><input type="checkbox" checked disabled> Footer with essential links (IRDAI, HDFC ERGO, Tata AIG).</li>
        <li><input type="checkbox" checked disabled> SEO-friendly <code>&lt;html lang="mr"&gt;</code> + meta tags.</li>
        <li><input type="checkbox" checked disabled> Filterable FAQ accordion (15 questions across 4 categories).</li>
        <li><input type="checkbox" checked disabled> Blog listing with sample posts.</li>
        <li><input type="checkbox" checked disabled> Devanagari-optimized typography.</li>
        <li><input type="checkbox" checked disabled> Smooth scroll animations (fade-up, fade-in).</li>
    </ul>
    <h2 id="customization">🔧 Customization</h2>
    <h3>Update WhatsApp Number</h3>
    <p>Search the codebase and replace the placeholder <code>919876543210</code> with your actual WhatsApp number (include the country code, omit the <code>+</code> sign).</p>
    <h3>Add Blog Posts</h3>
    <p>Navigate to <code>src/pages/Blog.tsx</code> and add new entries to the <code>posts</code> array.</p>
    <h3>Add FAQ Questions</h3>
    <p>Navigate to <code>src/pages/FAQ.tsx</code> and add to the <code>faqs</code> array. Ensure you use an existing <code>category</code> string for proper filtering.</p>
    <h3>Change Brand Colors</h3>
    <p>Open <code>tailwind.config.js</code> and modify the values under <code>theme.extend.colors</code>.</p>
    <h2 id="roadmap">🗺️ Phase 2 Roadmap</h2>
    <ul class="task-list">
        <li><input type="checkbox" disabled> Markdown-based CMS for blog posts (e.g., Contentlayer).</li>
        <li><input type="checkbox" disabled> Global search within articles and FAQs.</li>
        <li><input type="checkbox" disabled> Marathi ↔ English language toggle.</li>
        <li><input type="checkbox" disabled> YouTube video embedding section for video guides.</li>
        <li><input type="checkbox" disabled> Newsletter / lead capture integration (Mailchimp, etc.).</li>
        <li><input type="checkbox" disabled> ARIA improvements and strict focus states for accessibility.</li>
        <li><input type="checkbox" disabled> <code>sitemap.xml</code> + <code>robots.txt</code> generation for SEO.</li>
        <li><input type="checkbox" disabled> Google Analytics / Plausible privacy-friendly analytics integration.</li>
    </ul>
    <h2 id="dependencies">📦 Dependencies</h2>
    <table>
        <thead>
            <tr>
                <th>Package</th>
                <th>Version</th>
                <th>Purpose</th>
            </tr>
        </thead>
        <tbody>
            <tr><td><code>react</code></td><td><code>18.x</code></td><td>Core UI framework</td></tr>
            <tr><td><code>react-dom</code></td><td><code>18.x</code></td><td>DOM rendering</td></tr>
            <tr><td><code>react-router-dom</code></td><td><code>6.x</code></td><td>Client-side page routing</td></tr>
            <tr><td><code>lucide-react</code></td><td><code>^0.344.0</code></td><td>SVG icons</td></tr>
            <tr><td><code>tailwindcss</code></td><td><code>3.x</code></td><td>Utility-first CSS</td></tr>
            <tr><td><code>vite</code></td><td><code>5.x</code></td><td>Frontend build tool</td></tr>
            <tr><td><code>typescript</code></td><td><code>5.x</code></td><td>Static type checking</td></tr>
        </tbody>
    </table>
    <blockquote>
        <h3>⚠️ Disclaimer</h3>
        <p>This portal is created for <strong>educational purposes only</strong> and is not affiliated with any specific insurance company. All insurance advice and final decisions should be made after consulting with an officially IRDAI-registered agent or broker.</p>
    </blockquote>

</body>
</html>
