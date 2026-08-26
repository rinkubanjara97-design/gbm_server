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
    description: 'Divine handcrafted white Makrana marble deity statues sculpted by master artisans from Rajasthan.',
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
    description: 'Intricately carved marble mandirs, jali shrines, and corian temples for home mandirs.',
    banner_image_url: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1200&auto=format&fit=crop',
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
    description: 'Bespoke marble table tops, Pietra Dura inlay panels, rangolis, and counter surfaces.',
    banner_image_url: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?q=80&w=1200&auto=format&fit=crop',
    parent_id: null,
    sort_order: 5,
    is_visible: true,
  },
  {
    id: 'cat-6',
    name: 'Marble Bowl / Urli',
    slug: 'marble-bowl-urli',
    description: 'Decorative floating flower urlis and hand-turned marble water bowls for entrance decor.',
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
    name: 'White Makrana Marble Lord Ganesha Statue with Gold Leafing',
    slug: 'white-makrana-marble-lord-ganesha-statue-gold-foil',
    category_id: 'cat-1',
    category_name: 'God Statues',
    category_slug: 'god-statues',
    description: 'Handcrafted from pure white Makrana marble, this majestic Lord Ganesha idol features intricate chisel relief carving and subtle 24K gold leafing. Sculpted by senior Rajasthani craftsmen.',
    material: 'Pure White Makrana Marble',
    size: '24" Height x 16" Width',
    finish: 'Natural Diamond Polish & Gold Accents',
    work_type: 'Hand Relief Carving',
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
    name: 'Royal Rajasthani Carved Marble Home Mandir Shrinathji Shard',
    slug: 'royal-heritage-carved-marble-home-temple',
    category_id: 'cat-3',
    category_name: 'Temple Items',
    category_slug: 'temple-items',
    description: 'An architectural home temple carved from white marble blocks featuring ornate pillars, floral jali lattice, and sculpted dome shikhar for home shrines.',
    material: 'Vietnam White Marble',
    size: '48" W x 24" D x 72" H',
    finish: 'Satin Hand Smooth Finish',
    work_type: 'Jali Lattice & Pillar Carving',
    is_featured: true,
    is_published: true,
    sort_order: 2,
    images: [
      {
        id: 'img-2-1',
        product_id: 'prod-2',
        image_url: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1000&auto=format&fit=crop',
        is_cover: true,
      },
    ],
  },
  {
    id: 'prod-3',
    name: 'Divine Radha Krishna White Marble Statue Pair',
    slug: 'divine-radha-krishna-marble-idol-pair',
    category_id: 'cat-1',
    category_name: 'God Statues',
    category_slug: 'god-statues',
    description: 'Depicting eternal divine grace, this Radha Krishna pair is carved from single-block white Makrana stone with expressive facial detailing.',
    material: 'Single Block White Marble',
    size: '36" Height (3 Feet)',
    finish: 'Matte Satin Polish',
    work_type: '3D Full Round Carving',
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
    name: 'Hand-Turned Fluted Marble Urli Bowl with Lotus Petals',
    slug: 'fluted-marble-urli-bowl-floating-lotus',
    category_id: 'cat-6',
    category_name: 'Marble Bowl / Urli',
    category_slug: 'marble-bowl-urli',
    description: 'An elegant hand-turned marble water bowl designed for floating flower petals, entrance foyers, and garden courtyards.',
    material: 'Statuario White Marble',
    size: '18" Diameter x 6" Height',
    finish: 'Honed Soft Touch',
    work_type: 'Hand Turning & Petal Cut Edge',
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
    name: 'Pietra Dura Floral Black Marble Inlay Table Top',
    slug: 'pietra-dura-floral-marble-inlay-dining-table-top',
    category_id: 'cat-5',
    category_name: 'Marble Items',
    category_slug: 'marble-items',
    description: 'Round dining table top inlaid with lapis lazuli, malachite, mother of pearl, and jasper stones set into natural black marble.',
    material: 'Black Marble & Gemstones',
    size: '48" Diameter',
    finish: 'High Gloss Diamond Polish',
    work_type: 'Pietra Dura Stone Inlay',
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
]

export const MOCK_ENQUIRIES: Enquiry[] = [
  {
    id: 'enq-1',
    name: 'Rajesh Sharma',
    phone: '9829012345',
    email: 'rajesh.sharma@example.com',
    message: 'Interested in ordering a custom 4ft white marble temple for our residence. Please share catalog and customization options.',
    product_id: 'prod-2',
    product_name: 'Royal Rajasthani Carved Marble Home Mandir',
    is_read: false,
    created_at: '2026-08-25T10:30:00Z',
  },
]
