# London Scaffolding Website

This is the official website for London Scaffolding, built with [Astro](https://astro.build), [React](https://reactjs.org), and [Tailwind CSS](https://tailwindcss.com). It features a modern, high-performance design with integrated SEO and content management capabilities.

## 🚀 Getting Started

To work on this project locally, follow these steps:

1.  **Install Dependencies**:

    ```bash
    npm install
    ```

2.  **Start Development Server**:

    ```bash
    npm run dev
    ```

    The site will be available at `http://localhost:4321`.

3.  **Build for Production**:
    ```bash
    npm run build
    ```
    This generates the static files in the `dist/` directory.

---

## 📝 Content Management

This website uses a file-based Content Management System (CMS). All content is stored in the `src/content/` directory.

### 1. Adding a New Service

To add a new service page (e.g., "Industrial Scaffolding"):

1.  Create a new file in `src/content/services/` (e.g., `industrial-scaffolding.md`).
2.  Add the following frontmatter at the top of the file:

    ```markdown
    ---
    title: "Industrial Scaffolding"
    description: "Heavy-duty scaffolding solutions for industrial plants and factories."
    metaTitle: "Industrial Scaffolding Services London | London Scaffolding"
    metaDescription: "Expert industrial scaffolding services including..."
    faqs:
      - question: "Do you work in hazardous environments?"
        answer: "Yes, our team is fully trained for hazardous industrial sites."
    ---

    # Your Page Content Here

    Write the main content of the service page here using Markdown.
    ```

### 2. Adding a New Project

To showcase a new project in the portfolio:

1.  Add your project image to `src/assets/projects/` (e.g., `my-project.jpg`).
2.  Create a new file in `src/content/projects/` (e.g., `power-plant-repair.md`).
3.  Add the frontmatter:

    ```markdown
    ---
    title: "Power Plant Repair Access"
    description: "Complex access solution for emergency repairs."
    location: "East London"
    image: "../../assets/projects/my-project.jpg"
    metaTitle: "Power Plant Scaffolding Project - London Scaffolding"
    metaDescription: "Case study of our recent work at..."
    ---

    # Project Details

    Describe the challenges and solutions provided for this project.
    ```

### 3. Adding a New Coverage Area

To create a landing page for a specific location:

1.  Create a new file in `src/content/areas/` (e.g., `croydon-scaffolding.md`).
2.  Add the frontmatter:

    ```markdown
    ---
    title: "Scaffolding in Croydon"
    description: "Local scaffolding services for Croydon homeowners and businesses."
    metaTitle: "Scaffolding Companies Croydon | London Scaffolding"
    metaDescription: "Reliable scaffolding in Croydon. Call us for a quote..."
    mapEmbedUrl: "https://www.google.com/maps/embed?..."
    ---

    # Scaffolding Services in Croydon

    Tailored content for this specific location.
    ```

---

## 🔍 SEO Configuration

The website is pre-configured with advanced SEO features.

### 1. Global SEO Settings

To update global defaults (site name, default description, social image), edit:
**`src/components/SEOHead.astro`**

Look for the default props section:

```javascript
const {
  title = "London Scaffolding | Professional Scaffolding Services",
  description = "Expert scaffolding services in London...",
  image = "/images/og-default.jpg",
  // ...
} = Astro.props;
```

### 2. Page-Specific SEO

For every page (Service, Project, or Area), you can override the default SEO settings using the `metaTitle` and `metaDescription` fields in the frontmatter (as shown in the Content Management section above).

### 3. Sitemap & Robots.txt

- **Sitemap**: A `sitemap-index.xml` is automatically generated at `yourdomain.com/sitemap-index.xml` whenever you run `npm run build`. It includes all your pages automatically.
- **Robots.txt**: Located at `public/robots.txt`. You generally don't need to touch this unless you want to block specific crawlers.

### 4. Structured Data (Schema.org)

The site automatically implements `LocalBusiness` schema on all pages. Service pages also include `Service` schema, and area pages include `FAQPage` schema automatically based on the content you provide.

---

## 🛠 Technical Details

- **Framework**: Astro 4.0
- **UI Library**: React & Shadcn UI
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Static Site Generation (SSG) - easy to deploy to Netlify, Vercel, or any standard web host.

For further assistance, please contact the development team.
