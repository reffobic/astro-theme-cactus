# Portfolio Management Guide

This guide provides instructions for managing and updating your portfolio website.

## Table of Contents
- [Adding/Editing CS Projects](#addingediting-cs-projects)
- [Adding/Editing Design Work](#addingediting-design-work)
- [Updating Site Information](#updating-site-information)
- [Adding/Updating Pages](#addingupdating-pages)
- [Theme Customization](#theme-customization)
- [Building & Deployment](#building--deployment)

## Customizing the Logo

You can customize the logo in the header with your own image or text. The logo includes a hover effect that removes the grayscale filter.

### Option 1: Using an Image Logo
1. **Add your logo file** to the `public/` directory (e.g., `public/logo.svg` or `public/logo.png`)
2. **Update the header** in `src/components/layout/Header.astro`:
   ```astro
   <a
     href="/"
     class="inline-flex items-center grayscale hover:grayscale-0 transition-all duration-300 sm:relative sm:inline-block"
   >
     <img 
       src="/logo.svg" 
       alt="Your Name" 
       class="me-3 h-10 w-10 sm:absolute sm:-start-18 sm:me-0 sm:h-20 sm:w-20"
     />
     <span class="text-xl font-bold sm:text-2xl">{siteConfig.title}</span>
   </a>
   ```

### Option 2: Text-Only Logo
1. **Update the header** in `src/components/layout/Header.astro`:
   ```astro
   <a
     href="/"
     class="inline-flex items-center group"
   >
     <span class="text-xl font-bold sm:text-2xl group-hover:text-[color:var(--color-link)] transition-colors duration-300">
       {siteConfig.title}
     </span>
   </a>
   ```

### Customizing the Hover Effect
- For images: Adjust the `grayscale` and `hover:grayscale-0` classes
- For text: Modify the `group-hover:text-[color:var(--color-link)]` class
- Adjust transition timing with `duration-300` (300ms)

### Notes:
- SVG files are recommended for best quality and performance
- The logo is responsive with different sizes for mobile and desktop
- The site title is pulled from `site.config.ts`

## Adding/Editing CS Projects

1. **Location**: `src/data/projects.ts`
2. **Structure**:
   ```typescript
   {
     title: "Project Title",
     date: "Month YYYY",  // e.g., "Aug 2025"
     description: "Project description",
     githubUrl: "https://github.com/yourusername/project-name",
     media: {
       type: 'image' | 'video',
       url: "/path/to/media.jpg",
       alt: "Description of the media"
     },
     tags: ["Tag1", "Tag2", "Tag3"]
   }
   ```
3. **Media Files**:
   - Place images in `public/images/projects/`
   - Place videos in `public/videos/`

## Adding/Editing Design Work

1. **Location**: `src/data/designs.ts`
2. **Structure**:
   ```typescript
   {
     title: "Design Project Title",
     date: "Month YYYY",
     description: "Project description",
     category: "Category Name",  // e.g., "Branding", "UI/UX", "Print"
     images: [
       {
         url: "/images/designs/folder/image.jpg",
         alt: "Description of image",
         thumbnail: true  // Set for the main thumbnail image
       }
     ],
     tags: ["Tag1", "Tag2"],
     client: "Client Name"  // Optional
   }
   ```
3. **Media Files**:
   - Place design assets in `public/images/designs/`
   - Organize by project folders (e.g., `brand-identity/`, `app-ui/`)

## Updating Site Information

1. **Site Configuration**: `src/site.config.ts`
   - Update site title, description, author, etc.
   - Modify navigation menu items

2. **Social Links**: `src/config.ts` (if exists) or in the theme configuration
   - Update GitHub, LinkedIn, email, etc.

3. **About Page**: `src/pages/about.astro`
   - Update your bio, skills, and personal information

## Adding/Updating Pages

1. **Create a new page**:
   - Add a new `.astro` file in `src/pages/`
   - Use the following template:
     ```astro
     ---
     import PageLayout from "@/layouts/Base.astro";
     
     const meta = {
       title: "Page Title",
       description: "Page description"
     };
     ---
     
     <PageLayout meta={meta}>
       <!-- Your page content -->
     </PageLayout>
     ```

2. **Update navigation**:
   - Add/remove items in `site.config.ts` under `menuLinks`

## Theme Customization

1. **Colors**:
   - Edit CSS variables in `src/styles/global.css`
   - Look for `:root` and `[data-theme="dark"]` sections

2. **Typography**:
   - Update font imports in `src/layouts/Base.astro`
   - Modify typography styles in `global.css`

3. **Layout**:
   - Main layout: `src/layouts/Base.astro`
   - Header: `src/components/layout/Header.astro`
   - Footer: `src/components/layout/Footer.astro`

## Building & Deployment

1. **Local Development**:
   ```bash
   npm install
   npm run dev
   ```
   - Runs at `http://localhost:4321`

2. **Building for Production**:
   ```bash
   npm run build
   ```
   - Outputs to `dist/` directory

3. **Deployment**:
   - The site is configured for static deployment
   - Can be deployed to Vercel, Netlify, or any static hosting service

## Adding New Features

1. **Components**:
   - Create new `.astro` files in `src/components/`
   - Import and use them in your pages

2. **Styles**:
   - Add global styles in `src/styles/`
   - Use Tailwind CSS for utility classes
   - For component-specific styles, use `<style>` blocks in component files

## Helpful Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run format` - Format code with Prettier
- `npm run lint` - Run ESLint

## Troubleshooting

- **Styles not updating?** Try clearing your browser cache
- **Build errors?** Check the terminal output for specific error messages
- **Component not rendering?** Ensure you've imported and used it correctly

---

Remember to commit your changes to version control regularly and push to your repository to keep everything backed up!
