# Image Organization Guide for Karoli Banquet Project

## Frontend Images (`/frontend/public/`)

### 1. **Hall Images** (`/images/halls/`)

- `grand-hall.jpg` - Main image for Grand Hall
- `royal-hall.jpg` - Main image for Royal Hall
- `classic-hall.jpg` - Main image for Classic Hall
- `grand-hall-layout.jpg` - Layout diagram for Grand Hall
- `royal-hall-interior.jpg` - Interior shots
- etc.

### 2. **Gallery Images** (`/images/gallery/`)

- **Weddings** (`/weddings/`): `wedding1.jpg`, `wedding2.jpg`, etc.
- **Birthdays** (`/birthdays/`): `birthday1.jpg`, `birthday2.jpg`, etc.
- **Corporate** (`/corporate/`): `corporate1.jpg`, `corporate2.jpg`, etc.

### 3. **Hero Videos** (`/videos/`)

- `banquet-hero.mp4` - Main hero section background video
- `virtual-tour.mp4` - Virtual hall tours

### 4. **General Images** (`/images/`)

- `logo.png` - Company logo
- `hero-bg.jpg` - Fallback hero background
- `testimonial-bg.jpg` - Background for testimonials section

## Backend Images (for production)

### Upload Directory (`/backend/uploads/`)

```
/backend/uploads/
  ├── halls/           # Uploaded hall images
  ├── gallery/         # User-uploaded gallery images
  ├── profiles/        # User profile pictures
  └── documents/       # Invoices, contracts, etc.
```

## How Images Are Referenced in Code:

### In React Components:

```jsx
// Public folder images (static)
<img src="/images/halls/grand-hall.jpg" alt="Grand Hall" />

// For dynamic images from backend
<img src={`${API_URL}/uploads/halls/${hall.image}`} alt={hall.name} />
```

### Current Image References to Replace:

1. **HeroSection.js**: `/videos/banquet-hero.mp4`
2. **HallList.js**: `/images/grand-hall.jpg`, `/images/royal-hall.jpg`, `/images/classic-hall.jpg`
3. **Gallery.js**: `/images/wedding1.jpg`, `/images/birthday1.jpg`, etc.

## Recommended Image Specifications:

- **Hall Images**: 1200x800px, JPG/PNG
- **Gallery Images**: 800x600px, JPG
- **Hero Video**: 1920x1080p, MP4
- **Logo**: 200x80px, PNG (transparent background)

Place your actual images in these folders and they'll be automatically served by React!
