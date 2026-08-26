export interface Category {
  id: string
  name: string
  slug: string
  description?: string
  banner_image_url?: string
  parent_id?: string | null
  sort_order?: number
  is_visible?: boolean
  children?: Category[]
}

export interface ProductImage {
  id: string
  product_id: string
  image_url: string
  cloudinary_public_id?: string
  is_cover: boolean
  sort_order?: number
}

export interface Product {
  id: string
  name: string
  slug: string
  category_id: string
  category_name?: string
  category_slug?: string
  description: string
  material: string
  size: string
  finish: string
  work_type: string
  is_featured: boolean
  is_published: boolean
  sort_order?: number
  images: ProductImage[]
}

export interface Enquiry {
  id: string
  name: string
  phone: string
  email: string
  message: string
  product_id?: string
  product_name?: string
  is_read: boolean
  created_at: string
}

export const MOCK_CATEGORIES: Category[] = [
  {
    id: 'cat-1',
    name: 'God Statues',
    slug: 'god-statues',
    description: 'Divine handcrafted marble deity statues sculpted by master artisans from Rajasthan.',
    banner_image_url: 'https://images.unsplash.com/photo-1608889175638-9322300c46e8?q=80&w=1200&auto=format&fit=crop',
    parent_id: null,
    sort_order: 1,
    is_visible: true,
    children: [
      { id: 'cat-1-1', name: 'Ganpati Statues', slug: 'ganpati-statues', parent_id: 'cat-1' },
      { id: 'cat-1-2', name: 'Krishna Statues', slug: 'krishna-statues', parent_id: 'cat-1' },
      { id: 'cat-1-3', name: 'Ram Darbar', slug: 'ram-darbar', parent_id: 'cat-1' },
      { id: 'cat-1-4', name: 'Hanuman Statues', slug: 'hanuman-statues', parent_id: 'cat-1' },
      { id: 'cat-1-5', name: 'Shiv & Parivar', slug: 'shiv-parivar', parent_id: 'cat-1' },
      { id: 'cat-1-6', name: 'Shrinathji Statues', slug: 'shrinathji-statues', parent_id: 'cat-1' },
    ],
  },
  {
    id: 'cat-2',
    name: 'Goddess Statues',
    slug: 'goddess-statues',
    description: 'Elegantly carved Goddess marble idols representing grace, purity, and divine power.',
    banner_image_url: 'https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?q=80&w=1200&auto=format&fit=crop',
    parent_id: null,
    sort_order: 2,
    is_visible: true,
    children: [
      { id: 'cat-2-1', name: 'Durga Mata', slug: 'durga-mata', parent_id: 'cat-2' },
      { id: 'cat-2-2', name: 'Lakshmi Mata', slug: 'lakshmi-mata', parent_id: 'cat-2' },
      { id: 'cat-2-3', name: 'Saraswati Mata', slug: 'saraswati-mata', parent_id: 'cat-2' },
      { id: 'cat-2-4', name: 'Kali Mata', slug: 'kali-mata', parent_id: 'cat-2' },
    ],
  },
  {
    id: 'cat-3',
    name: 'Temple Items',
    slug: 'temple-items',
    description: 'Intricately carved marble mandirs, jali shrines, and corian temples for modern homes.',
    banner_image_url: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1200&auto=format&fit=crop',
    parent_id: null,
    sort_order: 3,
    is_visible: true,
    children: [
      { id: 'cat-3-1', name: 'Carving Temple', slug: 'carving-temple', parent_id: 'cat-3' },
      { id: 'cat-3-2', name: 'Inlay Temple', slug: 'inlay-temple', parent_id: 'cat-3' },
      { id: 'cat-3-3', name: 'Corian Temple', slug: 'corian-temple', parent_id: 'cat-3' },
      { id: 'cat-3-4', name: 'Jali Work Temple', slug: 'jali-work-temple', parent_id: 'cat-3' },
    ],
  },
  {
    id: 'cat-4',
    name: 'Animal Statues',
    slug: 'animal-statues',
    description: 'Royal Rajasthani marble animal figures including Elephants, Cow & Calf, and Lions.',
    banner_image_url: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1200&auto=format&fit=crop',
    parent_id: null,
    sort_order: 4,
    is_visible: true,
  },
  {
    id: 'cat-5',
    name: 'Marble Items',
    slug: 'marble-items',
    description: 'Bespoke marble table tops, inlay panels, rangolis, and architectural counter surfaces.',
    banner_image_url: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?q=80&w=1200&auto=format&fit=crop',
    parent_id: null,
    sort_order: 5,
    is_visible: true,
  },
  {
    id: 'cat-6',
    name: 'Marble Bowl / Urli',
    slug: 'marble-bowl-urli',
    description: 'Decorative floating flower urlis and carved marble water bowls for luxury entrance decor.',
    banner_image_url: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?q=80&w=1200&auto=format&fit=crop',
    parent_id: null,
    sort_order: 6,
    is_visible: true,
  },
  {
    id: 'cat-7',
    name: 'Wooden Art',
    slug: 'wooden-art',
    description: 'Vintage Rajasthani carved wooden furniture, wall hanging plates, Gangaur figures & doors.',
    banner_image_url: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=1200&auto=format&fit=crop',
    parent_id: null,
    sort_order: 7,
    is_visible: true,
  },
  {
    id: 'cat-8',
    name: 'Meenakari & Brass Art',
    slug: 'meenakari-brass-art',
    description: 'Exquisite hand-painted Meenakari vases, lanterns, and antique Dhokra brass artifacts.',
    banner_image_url: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=1200&auto=format&fit=crop',
    parent_id: null,
    sort_order: 8,
    is_visible: true,
  },
]

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 'prod-1',
    name: 'White Makrana Marble Lord Ganesha Statue with Gold Foil',
    slug: 'white-makrana-marble-lord-ganesha-statue-gold-foil',
    category_id: 'cat-1',
    category_name: 'God Statues',
    category_slug: 'god-statues',
    description: 'Handcrafted from pure white Makrana marble, this majestic Lord Ganesha idol features intricate hand carving and 24K gold foil embellishments. Perfect for home mandirs, luxury villas, and corporate reception areas.',
    material: 'Pure White Makrana Marble',
    size: '24 Inches Height (2.0 Feet)',
    finish: 'Mirror Gloss Polish with Gold Emboss Work',
    work_type: 'Hand Carving & Gold Meenakari Painting',
    is_featured: true,
    is_published: true,
    sort_order: 1,
    images: [
      {
        id: 'img-1-1',
        product_id: 'prod-1',
        image_url: 'https://images.unsplash.com/photo-1608889175638-9322300c46e8?q=80&w=1000&auto=format&fit=crop',
        is_cover: true,
      },
      {
        id: 'img-1-2',
        product_id: 'prod-1',
        image_url: 'https://images.unsplash.com/photo-1621252179027-94459d278660?q=80&w=1000&auto=format&fit=crop',
        is_cover: false,
      },
    ],
  },
  {
    id: 'prod-2',
    name: 'Royal Heritage Carved Marble Home Temple (Mandir)',
    slug: 'royal-heritage-carved-marble-home-temple',
    category_id: 'cat-3',
    category_name: 'Temple Items',
    category_slug: 'temple-items',
    description: 'A grand architectural marble temple with ornate pillars, floral jali work, and dome shikhar. Crafted by senior Rajasthani artisans to create a peaceful sacred ambience in your residence.',
    material: 'Premium Vietnam & Sangemarmar Marble',
    size: 'Width: 48", Depth: 24", Height: 72" (6 Feet)',
    finish: 'Natural Smooth Satin Polish',
    work_type: 'Ornate Relief Carving & Jali Cut Work',
    is_featured: true,
    is_published: true,
    sort_order: 2,
    images: [
      {
        id: 'img-2-1',
        product_id: 'prod-2',
        image_url: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1000&auto=format&fit=crop',
        is_cover: true,
      },
      {
        id: 'img-2-2',
        product_id: 'prod-2',
        image_url: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1000&auto=format&fit=crop',
        is_cover: false,
      },
    ],
  },
  {
    id: 'prod-3',
    name: 'Divine Radha Krishna Marble Idol Pair',
    slug: 'divine-radha-krishna-marble-idol-pair',
    category_id: 'cat-1',
    category_name: 'God Statues',
    category_slug: 'god-statues',
    description: 'Depicting eternal divine love, this Radha Krishna pair is carved from single-block white marble. Expressive facial detailing, flowing attire, and delicate peacock feather crown work.',
    material: 'Single Block First Quality White Marble',
    size: '36 Inches Height (3.0 Feet)',
    finish: 'Polyurethane Gloss & Pastel Color Work',
    work_type: '3D Full Round Carving & Fine Detailing',
    is_featured: true,
    is_published: true,
    sort_order: 3,
    images: [
      {
        id: 'img-3-1',
        product_id: 'prod-3',
        image_url: 'https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?q=80&w=1000&auto=format&fit=crop',
        is_cover: true,
      },
    ],
  },
  {
    id: 'prod-4',
    name: 'Fluted Marble Urli Bowl with Floating Lotus Pattern',
    slug: 'fluted-marble-urli-bowl-floating-lotus',
    category_id: 'cat-6',
    category_name: 'Marble Bowl / Urli',
    category_slug: 'marble-bowl-urli',
    description: 'An elegant hand-turned marble bowl designed for entryways, foyer tables, and resort courtyards. Fill with water and floating flowers or candles for an enchanting ambiance.',
    material: 'Italian Statuario Marble',
    size: 'Diameter: 18", Height: 6"',
    finish: 'Honed Matte Touch',
    work_type: 'Hand Turning & Petal Edge Carving',
    is_featured: true,
    is_published: true,
    sort_order: 4,
    images: [
      {
        id: 'img-4-1',
        product_id: 'prod-4',
        image_url: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?q=80&w=1000&auto=format&fit=crop',
        is_cover: true,
      },
    ],
  },
  {
    id: 'prod-5',
    name: 'Pietra Dura Floral Marble Inlay Dining Table Top',
    slug: 'pietra-dura-floral-marble-inlay-dining-table-top',
    category_id: 'cat-5',
    category_name: 'Marble Items',
    category_slug: 'marble-items',
    description: 'Inspired by Mughal architectural heritage, this round dining table top features lapis lazuli, malachite, mother of pearl, and jasper stones inlaid into jet-black marble.',
    material: 'Black Marble with Semi-Precious Gemstones',
    size: 'Diameter: 48 Inches (4 Feet)',
    finish: 'High Gloss Diamond Polish',
    work_type: 'Pietra Dura (Pachikari Inlay Work)',
    is_featured: true,
    is_published: true,
    sort_order: 5,
    images: [
      {
        id: 'img-5-1',
        product_id: 'prod-5',
        image_url: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?q=80&w=1000&auto=format&fit=crop',
        is_cover: true,
      },
    ],
  },
  {
    id: 'prod-6',
    name: 'Traditional Royal Kamdhenu Cow & Calf Marble Statue',
    slug: 'traditional-royal-kamdhenu-cow-calf-marble-statue',
    category_id: 'cat-4',
    category_name: 'Animal Statues',
    category_slug: 'animal-statues',
    description: 'Symbolizing prosperity and abundance, Kamdhenu with her calf is meticulously carved with traditional jewelry and ornaments painted in vibrant colors.',
    material: 'White Marble',
    size: 'Length: 20", Height: 15"',
    finish: 'Polished with Gold Work',
    work_type: 'Detailed relief carving & painting',
    is_featured: false,
    is_published: true,
    sort_order: 6,
    images: [
      {
        id: 'img-6-1',
        product_id: 'prod-6',
        image_url: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1000&auto=format&fit=crop',
        is_cover: true,
      },
    ],
  },
  {
    id: 'prod-7',
    name: 'Vintage Carved Teak Wood Jharokha Wall Frame',
    slug: 'vintage-carved-teak-wood-jharokha-wall-frame',
    category_id: 'cat-7',
    category_name: 'Wooden Art',
    category_slug: 'wooden-art',
    description: 'An authentic Rajasthani wooden balcony window frame with distress antique finish. Adds royal palace charm to modern living rooms or hotel lobbies.',
    material: 'Seasoned Teak Wood',
    size: 'Width: 24", Height: 36"',
    finish: 'Antique Walnut & Brass Accent',
    work_type: 'Traditional Wood Joinery & Floral Carving',
    is_featured: false,
    is_published: true,
    sort_order: 7,
    images: [
      {
        id: 'img-7-1',
        product_id: 'prod-7',
        image_url: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=1000&auto=format&fit=crop',
        is_cover: true,
      },
    ],
  },
  {
    id: 'prod-8',
    name: 'Handcrafted Meenakari Peacock Flower Vase',
    slug: 'handcrafted-meenakari-peacock-flower-vase',
    category_id: 'cat-8',
    category_name: 'Meenakari & Brass Art',
    category_slug: 'meenakari-brass-art',
    description: 'Vibrant hand-enamelled brass vase displaying intricate peacock and floral motifs in royal blue, green, and gold colors.',
    material: 'Solid Brass with Enamel Painting',
    size: 'Height: 18 Inches',
    finish: 'Protective Clear Lacquer Coating',
    work_type: 'Minakari (Enameling) & Metal Carving',
    is_featured: false,
    is_published: true,
    sort_order: 8,
    images: [
      {
        id: 'img-8-1',
        product_id: 'prod-8',
        image_url: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=1000&auto=format&fit=crop',
        is_cover: true,
      },
    ],
  },
]

export const MOCK_ENQUIRIES: Enquiry[] = [
  {
    id: 'enq-1',
    name: 'Rajesh Sharma',
    phone: '9829012345',
    email: 'rajesh.sharma@example.com',
    message: 'Interested in ordering a 4ft custom white marble mandir for our new home in Delhi. Please share catalog and customization options.',
    product_id: 'prod-2',
    product_name: 'Royal Heritage Carved Marble Home Temple (Mandir)',
    is_read: false,
    created_at: '2026-08-25T10:30:00Z',
  },
  {
    id: 'enq-2',
    name: 'Ananya Gupta',
    phone: '9876543210',
    email: 'ananya.g@example.com',
    message: 'Can you export the Pietra Dura inlay table top to Dubai? What is the shipping timeline?',
    product_id: 'prod-5',
    product_name: 'Pietra Dura Floral Marble Inlay Dining Table Top',
    is_read: true,
    created_at: '2026-08-24T14:15:00Z',
  },
]
