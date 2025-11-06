// Sample Property Data (for showcase only - not browsable)
const sampleProperties = [
  {
    id: 1,
    title: "Spacious 3 BHK in Eldeco Live by the Greens",
    builder: "Eldeco",
    type: "Apartment",
    bhk: "3 BHK",
    area: "1404 sq.ft.",
    price_rent: "₹35,000/month",
    price_sale: "₹1.48 Cr",
    purpose: "Rent",
    furnishing: "Semi-Furnished",
    floor: "12th Floor",
    total_floors: "22",
    image: "https://pplx-res.cloudinary.com/image/upload/v1762418504/pplx_project_search_images/f583067a9b4f90b57bca726cbc89212e5263d417.png",
    description: "Beautiful 3 BHK apartment in the prestigious Eldeco Live by the Greens. Located in Noida's greenest sector with 80% green cover. Features include spacious rooms, modern fittings, and access to world-class amenities including cricket academy by Rohit Sharma.",
    features: [
      "3 Bedrooms with attached bathrooms",
      "Spacious living and dining area",
      "Modular kitchen with chimney",
      "3 Balconies with garden view",
      "Wooden flooring in bedrooms",
      "Vitrified tiles in living area",
      "Reserved covered parking"
    ],
    amenities: [
      "Swimming Pool",
      "Gymnasium",
      "Cricket Ground & Academy",
      "Tennis Court",
      "Badminton Court",
      "Children Play Area",
      "Clubhouse (35,000 sq.ft.)",
      "Jogging Track",
      "24/7 Security with CCTV",
      "Power Backup",
      "Lift",
      "Landscaped Gardens"
    ]
  },
  {
    id: 2,
    title: "Luxury 4 BHK Penthouse - ATS Kingston Heath",
    builder: "ATS",
    type: "Penthouse",
    bhk: "4 BHK",
    area: "3200 sq.ft.",
    price_rent: "₹85,000/month",
    price_sale: "₹2.88 Cr",
    purpose: "Sale",
    furnishing: "Fully Furnished",
    floor: "26th Floor (Penthouse)",
    total_floors: "27",
    image: "https://pplx-res.cloudinary.com/image/upload/v1762418503/pplx_project_search_images/51eddcc24757e9e42de68605ad988476b7c1a558.png",
    description: "Exclusive penthouse in ATS Kingston Heath, Noida's first wellness project. Sprawling across 9 acres with focus on green living and wellness. Low density with only 52 units per acre. Features panoramic views of Sector 150.",
    features: [
      "4 Large bedrooms with walk-in wardrobes",
      "Master bedroom with jacuzzi",
      "Expansive living room with double height ceiling",
      "Premium modular kitchen with island",
      "4 Bathrooms with premium fittings",
      "Private terrace garden",
      "Maid room with separate bathroom",
      "Study room"
    ],
    amenities: [
      "Wellness Center",
      "Temperature Controlled Swimming Pool",
      "State-of-art Gymnasium",
      "Yoga & Meditation Center",
      "Indoor Games Room",
      "Clubhouse",
      "Landscaped Gardens (80% green)",
      "Children's Play Area",
      "24/7 Security",
      "Video Door Phone",
      "Reserved Parking (2 spaces)"
    ]
  },
  {
    id: 3,
    title: "Modern 2 BHK - ATS Pristine Phase 2",
    builder: "ATS",
    type: "Apartment",
    bhk: "2 BHK",
    area: "1095 sq.ft.",
    price_rent: "₹22,000/month",
    price_sale: "₹78.12 Lac",
    purpose: "Rent",
    furnishing: "Unfurnished",
    floor: "8th Floor",
    total_floors: "24",
    image: "https://pplx-res.cloudinary.com/image/upload/v1762418503/pplx_project_search_images/f1b25315c77ed4011bab5669f1dc28504f336928.png",
    description: "Ready to move 2 BHK apartment in ATS Pristine Phase 2. Low density project with just 900 meters from Noida Expressway. Perfect for young professionals and small families.",
    features: [
      "2 Bedrooms with ample storage",
      "2 Bathrooms with quality fittings",
      "Open kitchen design",
      "2 Balconies",
      "Marble flooring in living/dining",
      "Vitrified tiles in bedrooms"
    ],
    amenities: [
      "Swimming Pool",
      "Gymnasium",
      "Clubhouse",
      "Tennis Court",
      "Badminton Court",
      "Jogging Track",
      "Children's Play Area",
      "24/7 Security",
      "Power Backup",
      "Covered Parking",
      "Intercom Facility"
    ]
  },
  {
    id: 4,
    title: "Premium 3 BHK - Ace Parkway",
    builder: "Ace",
    type: "Apartment",
    bhk: "3 BHK",
    area: "1750 sq.ft.",
    price_rent: "₹42,000/month",
    price_sale: "₹1.26 Cr",
    purpose: "Rent",
    furnishing: "Fully Furnished",
    floor: "15th Floor",
    total_floors: "24",
    image: "https://pplx-res.cloudinary.com/image/upload/v1756487092/pplx_project_search_images/11695c16216f9a10973bf8521116136651ad8132.png",
    description: "Exquisite 3 BHK apartment in Ace Parkway designed by Padma Bhushan Hafeez Contractor. Art Deco themed architecture with interiors by Gauri Khan. Located on 3-side open corner plot with excellent ventilation.",
    features: [
      "3 Spacious bedrooms",
      "3 Bathrooms with premium fixtures",
      "Designer modular kitchen",
      "Elegant living and dining area",
      "3 Balconies",
      "Italian marble flooring",
      "Split AC in all rooms",
      "False ceiling with designer lighting"
    ],
    amenities: [
      "Temperature Controlled Indoor Pool",
      "51 Sports Facilities",
      "Premium Clubhouse",
      "Gymnasium with Trainer",
      "Squash Court",
      "Indoor Badminton",
      "Half Basketball Court",
      "Cricket Net Practice",
      "Yoga Studio",
      "Party Hall",
      "Children's Play Zone",
      "24/7 Security & CCTV",
      "Multi-level Parking"
    ]
  },
  {
    id: 5,
    title: "Affordable 2 BHK - Eldeco Live by the Greens",
    builder: "Eldeco",
    type: "Apartment",
    bhk: "2 BHK",
    area: "1137 sq.ft.",
    price_rent: "₹28,000/month",
    price_sale: "₹1.20 Cr",
    purpose: "Rent",
    furnishing: "Semi-Furnished",
    floor: "5th Floor",
    total_floors: "22",
    image: "https://pplx-res.cloudinary.com/image/upload/v1762418504/pplx_project_search_images/f583067a9b4f90b57bca726cbc89212e5263d417.png",
    description: "Well-ventilated 2 BHK apartment with river view in Eldeco Live by the Greens. Perfect for small families. Located in Sports City with access to Cric Kingdom Cricket Academy.",
    features: [
      "2 Bedrooms with wardrobes",
      "2 Bathrooms",
      "Modular kitchen",
      "Spacious living room",
      "2 Balconies with river view",
      "Vitrified tiles flooring"
    ],
    amenities: [
      "Cricket Academy by Rohit Sharma",
      "Swimming Pool",
      "Clubhouse",
      "Gymnasium",
      "Badminton Court",
      "Lawn Tennis Court",
      "Half Basketball Court",
      "Skating Rink",
      "Kids Play Area",
      "Jogging Track",
      "24/7 Security",
      "Reserved Parking"
    ]
  },
  {
    id: 6,
    title: "Luxurious 4 BHK - Ace Parkway",
    builder: "Ace",
    type: "Apartment",
    bhk: "4 BHK",
    area: "3220 sq.ft.",
    price_rent: "₹75,000/month",
    price_sale: "₹2.31 Cr",
    purpose: "Sale",
    furnishing: "Fully Furnished",
    floor: "18th Floor",
    total_floors: "24",
    image: "https://pplx-res.cloudinary.com/image/upload/v1756487092/pplx_project_search_images/11695c16216f9a10973bf8521116136651ad8132.png",
    description: "Ultra-luxurious 4 BHK apartment with French-themed ambiance. Designed by celebrity interior designer Gauri Khan. Features include smart home automation and premium imported fittings.",
    features: [
      "4 Bedrooms with walk-in closets",
      "4 Bathrooms + 1 Powder room",
      "Imported modular kitchen with appliances",
      "Separate living and family lounge",
      "Study room",
      "Maid room with bathroom",
      "3 Premium balconies",
      "Home automation system",
      "Italian marble throughout"
    ],
    amenities: [
      "Indoor Swimming Pool",
      "Spa & Jacuzzi",
      "World-class Gymnasium",
      "Squash & Tennis Court",
      "Indoor Sports Complex",
      "Banquet Hall",
      "Business Center",
      "Amphitheatre",
      "Landscaped Gardens",
      "Kids Zone with Activity Areas",
      "Multi-tier Security",
      "Basement + Stilt Parking"
    ]
  }
];

let currentFilter = {};

// Initialize


document.addEventListener('DOMContentLoaded', function() {
  initNavigation();
  renderFeaturedProperties();
  initFAQ();
});

// FAQ Toggle Functionality
function initFAQ() {
  const faqItems = document.querySelectorAll('.faq-warm-item');
  
  faqItems.forEach(item => {
    item.addEventListener('click', function() {
      // Toggle active class
      this.classList.toggle('active');
    });
  });
}

// Navigation
function initNavigation() {
  // Enable "Call Me Back" button scroll
  const callbackLinks = document.querySelectorAll('a[href="#callback"], .btn--cta');
  callbackLinks.forEach(link => {
    link.addEventListener('click', function(e){
      e.preventDefault();
      const section = document.getElementById('callback');
      if(section) {
        const y = section.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({top: y, behavior: 'smooth'});
      }
    });
  });

  const navLinks = document.querySelectorAll('.nav-link');
  const navbar = document.getElementById('navbar');
  
  // Smooth scroll and active state
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      
      if (targetSection) {
        const offset = 80;
        const targetPosition = targetSection.offsetTop - offset;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
        
        navLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
        
        // Close mobile menu
        document.getElementById('navMenu').classList.remove('active');
      }
    });
  });
  
  // Navbar scroll effect
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');
  
  hamburger.addEventListener('click', function() {
    navMenu.classList.toggle('active');
  });
}

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    const offset = 80;
    const targetPosition = section.offsetTop - offset;
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  }
}

// Render Featured Properties
function renderFeaturedProperties() {
  const grid = document.getElementById('propertiesGrid');
  if (!grid) return;
  
  grid.innerHTML = '';
  
  // Show all 6 featured properties
  // PRICES REDUCED BY 10% - All properties now more affordable
  const featuredProperties = [
    {
      id: 1,
      title: "Spacious 3 BHK in Eldeco Live by the Greens",
      builder: "Eldeco",
      config: "3 BHK • 1404 sq.ft. • Floor 12",
      originalPrice: "₹35,000",
      price: "₹31,500/month",
      savings: "10% OFF",
      features: "River View • Swimming Pool • Garden Balcony"
    },
    {
      id: 2,
      title: "Luxury 4 BHK Penthouse - ATS Kingston Heath",
      builder: "ATS",
      config: "4 BHK • 3200 sq.ft. • Penthouse",
      originalPrice: "₹85,000",
      price: "₹76,500/month",
      savings: "10% OFF",
      features: "Penthouse • Wellness Center • Private Pool"
    },
    {
      id: 3,
      title: "Modern 2 BHK - ATS Pristine Phase 2",
      builder: "ATS",
      config: "2 BHK • 1095 sq.ft. • Floor 8",
      originalPrice: "₹22,000",
      price: "₹19,800/month",
      savings: "10% OFF",
      features: "Ready to Move • New Project • Low Density"
    },
    {
      id: 4,
      title: "Premium 3 BHK - Ace Parkway",
      builder: "Ace",
      config: "3 BHK • 1750 sq.ft. • Floor 15",
      originalPrice: "₹42,000",
      price: "₹37,800/month",
      savings: "10% OFF",
      features: "Art Deco Design • Temperature Pool • 51 Sports"
    },
    {
      id: 5,
      title: "Affordable 2 BHK - Eldeco Live by the Greens",
      builder: "Eldeco",
      config: "2 BHK • 1137 sq.ft. • Floor 5",
      originalPrice: "₹28,000",
      price: "₹25,200/month",
      savings: "10% OFF",
      features: "River View • Cricket Academy • New Launch"
    },
    {
      id: 6,
      title: "Luxurious 4 BHK - Ace Parkway",
      builder: "Ace",
      config: "4 BHK • 3220 sq.ft. • Floor 18",
      originalPrice: "₹75,000",
      price: "₹67,500/month",
      savings: "10% OFF",
      features: "Fully Furnished • Premium Design • Best Location"
    }
  ];
  
  featuredProperties.forEach(property => {
    const card = createFeaturedPropertyCard(property);
    grid.appendChild(card);
  });
}

function createFeaturedPropertyCard(property) {
  const card = document.createElement('div');
  card.className = 'property-card';
  
  const whatsappMessage = `Hi Namaskaar Properties - I'm interested in ${property.title}`;
  const whatsappUrl = `https://wa.me/917668137438?text=${encodeURIComponent(whatsappMessage)}`;
  const callUrl = 'tel:+917668137438';
  
  // Use placeholder image with builder color
  const builderColors = {
    'Eldeco': '#10B981',
    'ATS': '#FF6B35',
    'Ace': '#1A2F5A'
  };
  const builderColor = builderColors[property.builder] || '#1A2F5A';
  
  // Show visible images using available property images
  const propertyImages = {
    'Eldeco': 'https://pplx-res.cloudinary.com/image/upload/v1762418504/pplx_project_search_images/f583067a9b4f90b57bca726cbc89212e5263d417.png',
    'ATS': 'https://pplx-res.cloudinary.com/image/upload/v1762418503/pplx_project_search_images/51eddcc24757e9e42de68605ad988476b7c1a558.png',
    'Ace': 'https://pplx-res.cloudinary.com/image/upload/v1756487092/pplx_project_search_images/11695c16216f9a10973bf8521116136651ad8132.png'
  };
  
  const imageUrl = propertyImages[property.builder] || propertyImages['Eldeco'];
  
  card.innerHTML = `
    <div class="property-image">
      <img src="${imageUrl}" alt="${property.title}" style="width: 100%; height: 100%; object-fit: cover;">
      <span class="builder-badge" style="background: ${builderColor};">${property.builder}</span>
    </div>
    <div class="property-content">
      <div style="font-size: 12px; color: var(--orange-primary); font-weight: 700; text-transform: uppercase; margin-bottom: 8px;">${property.builder}</div>
      <h3 class="property-title">${property.title}</h3>
      <div class="property-specs">${property.config}</div>
      <div class="property-price">
        ${property.originalPrice ? `<span style="font-size: 16px; text-decoration: line-through; color: var(--dark-gray); font-weight: 500; margin-right: 8px;">${property.originalPrice}</span>` : ''}
        ${property.price}
        ${property.savings ? `<span style="display: inline-block; background: #10B981; color: white; font-size: 11px; padding: 4px 8px; border-radius: 4px; margin-left: 8px; font-weight: 700;">${property.savings}</span>` : ''}
      </div>
      <div class="property-features-text">${property.features}</div>
      <div class="property-buttons">
        <a href="${whatsappUrl}" target="_blank" class="btn btn--whatsapp" style="text-decoration: none;">WhatsApp for Details</a>
        <a href="${callUrl}" class="btn btn--outline" style="text-decoration: none;">Call Now</a>
      </div>
    </div>
  `;
  
  return card;
}







// Contact Form
function handleContactSubmit(e) {
  e.preventDefault();
  
  const name = document.getElementById('contactName').value;
  const phone = document.getElementById('contactPhone').value;
  const email = document.getElementById('contactEmail').value;
  const propertyType = document.getElementById('contactPropertyType').value;
  const message = document.getElementById('contactMessage').value;
  
  // Validation
  if (!name || !phone || !email) {
    alert('Please fill in all required fields');
    return;
  }
  
  // Phone validation
  const phoneRegex = /^[0-9]{10}$/;
  if (!phoneRegex.test(phone)) {
    alert('Please enter a valid 10-digit phone number');
    return;
  }
  
  // Success message
  alert(`Thank you ${name}! We have received your inquiry and will contact you shortly at ${phone}.`);
  
  // Reset form
  document.getElementById('contactForm').reset();
}

function contactNow(propertyTitle) {
  scrollToSection('contact');
  
  // Pre-fill message
  setTimeout(() => {
    const messageField = document.getElementById('contactMessage');
    if (messageField) {
      messageField.value = `I am interested in: ${propertyTitle}`;
    }
  }, 500);
}