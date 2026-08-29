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
  price?: string
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

export let MOCK_CATEGORIES: Category[] = [
  {
    "id": "cat-1",
    "name": "Carving Temple",
    "slug": "carving-temple",
    "description": "Intricately hand-carved white Makrana marble temples featuring traditional Rajasthani stone relief work and architectural pillars.",
    "banner_image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787817882/gbm-marble-handicrafts/carving-temple/teggufnaazs15ipmfknp.jpg",
    "parent_id": null,
    "sort_order": 1,
    "is_visible": true
  },
  {
    "id": "cat-2",
    "name": "Carving Work",
    "slug": "carving-work",
    "description": "Custom hand chisel relief stone carving work for walls, pillars, panels, and bespoke architectural elements.",
    "banner_image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787817901/gbm-marble-handicrafts/carving-work/q89zlxs68gw46gluomil.jpg",
    "parent_id": null,
    "sort_order": 2,
    "is_visible": true
  },
  {
    "id": "cat-3",
    "name": "Corin Temple",
    "slug": "corin-temple",
    "description": "Modern Corian material backlit temples and sleek mandir designs with precision CNC cutting and glowing illumination.",
    "banner_image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787817928/gbm-marble-handicrafts/corin-temple/xsijpo81d2alvpqdufhx.jpg",
    "parent_id": null,
    "sort_order": 3,
    "is_visible": true
  },
  {
    "id": "cat-4",
    "name": "Eley Work Temple",
    "slug": "eley-work-temple",
    "description": "Exquisite Pietra Dura gemstone inlay work temples adorned with semi-precious stone floral art.",
    "banner_image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787817934/gbm-marble-handicrafts/eley-work-temple/xszuujpkfcif9zeqv6mo.jpg",
    "parent_id": null,
    "sort_order": 4,
    "is_visible": true
  },
  {
    "id": "cat-5",
    "name": "Fountain",
    "slug": "fountain",
    "description": "Grand multi-tier carved marble fountains, water bowls, cascading waterfalls, and garden water features.",
    "banner_image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787817952/gbm-marble-handicrafts/fountain/eaim1ovyjk1ulyw3pppz.jpg",
    "parent_id": null,
    "sort_order": 5,
    "is_visible": true
  },
  {
    "id": "cat-6",
    "name": "God Statues",
    "slug": "god-statues",
    "description": "Divine handcrafted white Makrana marble deity idols including Lord Ganesha, Shiva, Krishna, Hanuman, and Ram Darbar.",
    "banner_image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818005/gbm-marble-handicrafts/god-statues/t3vcepigqrv49y6vq6sl.jpg",
    "parent_id": null,
    "sort_order": 6,
    "is_visible": true
  },
  {
    "id": "cat-7",
    "name": "Handicrafts Items",
    "slug": "handicrafts-items",
    "description": "Royal Rajasthani marble decorative items, painted minakari art, urlis, keyholders, and heritage home decor.",
    "banner_image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818711/gbm-marble-handicrafts/handicrafts-items/mmpkydguaxbfjttnxe25.jpg",
    "parent_id": null,
    "sort_order": 7,
    "is_visible": true
  },
  {
    "id": "cat-8",
    "name": "Jali Work Temple",
    "slug": "jali-work-temple",
    "description": "Lattice jali carved marble temples featuring delicate geometric and floral cutwork screening for home shrines.",
    "banner_image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818933/gbm-marble-handicrafts/jali-work-temple/wcdyz4csuzoezxou6w70.jpg",
    "parent_id": null,
    "sort_order": 8,
    "is_visible": true
  },
  {
    "id": "cat-9",
    "name": "Kitchen, Bar & Restro Counter",
    "slug": "kitchen-bar-restro",
    "description": "Bespoke carved white marble counter tops, bar counters, and luxury restaurant stone surfaces.",
    "banner_image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818978/gbm-marble-handicrafts/marble-table-top/uptqnngcke0f3qzbccwn.jpg",
    "parent_id": null,
    "sort_order": 9,
    "is_visible": true
  },
  {
    "id": "cat-10",
    "name": "Marble Basin",
    "slug": "marble-basin",
    "description": "Hand-turned counter-top marble wash basins, fluted sink bowls, and carved stone bathroom fixtures.",
    "banner_image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818935/gbm-marble-handicrafts/marble-basin/eknypzhxijakowi5knwj.jpg",
    "parent_id": null,
    "sort_order": 10,
    "is_visible": true
  },
  {
    "id": "cat-11",
    "name": "Marble Chhatri",
    "slug": "marble-chhatri",
    "description": "Heritage Rajasthani domed marble chhatris, garden pavilions, and stone canopy structures.",
    "banner_image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818948/gbm-marble-handicrafts/marble-chhatri/boezbmvvlgd0sizqeuxu.jpg",
    "parent_id": null,
    "sort_order": 11,
    "is_visible": true
  },
  {
    "id": "cat-12",
    "name": "Marble Fireplace",
    "slug": "marble-fire-place",
    "description": "Hand-carved classical white marble fireplace surrounds, mantels, and hearth architectural stone.",
    "banner_image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787817882/gbm-marble-handicrafts/carving-temple/teggufnaazs15ipmfknp.jpg",
    "parent_id": null,
    "sort_order": 12,
    "is_visible": true
  },
  {
    "id": "cat-13",
    "name": "Marble Jali Panel",
    "slug": "marble-jali-panel",
    "description": "Custom carved marble jali screens, partition wall lattice panels, and decorative stone grills.",
    "banner_image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818965/gbm-marble-handicrafts/marble-jali-panel/cfjmqjfams3j5w9zqmmw.jpg",
    "parent_id": null,
    "sort_order": 13,
    "is_visible": true
  },
  {
    "id": "cat-14",
    "name": "Marble Singhasan",
    "slug": "marble-singhasan",
    "description": "Royal carved marble thrones (singhasan) and raised pedestals for deity idols and pooja rooms.",
    "banner_image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818975/gbm-marble-handicrafts/marble-singhasan/poeoptocvkyr5gwmbn0r.jpg",
    "parent_id": null,
    "sort_order": 12,
    "is_visible": true
  },
  {
    "id": "cat-15",
    "name": "Marble Table Top",
    "slug": "marble-table-top",
    "description": "Custom Pietra Dura inlay and solid polished marble dining, coffee, and side table tops.",
    "banner_image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818978/gbm-marble-handicrafts/marble-table-top/uptqnngcke0f3qzbccwn.jpg",
    "parent_id": null,
    "sort_order": 13,
    "is_visible": true
  },
  {
    "id": "cat-16",
    "name": "Marble Tulsi Stand",
    "slug": "marble-tulsi-stand",
    "description": "Ornate white marble Tulsi Vrindavan planters and carved stands for courtyard and balcony devotion.",
    "banner_image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787819007/gbm-marble-handicrafts/marble-tulsi-stand/tcfqvlcoveoor3llux6c.jpg",
    "parent_id": null,
    "sort_order": 14,
    "is_visible": true
  },
  {
    "id": "cat-17",
    "name": "Painting Work Temple",
    "slug": "painting-work-temple",
    "description": "Hand-painted Meenakari gold leaf embossed marble temples and color decorated home mandirs.",
    "banner_image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787819020/gbm-marble-handicrafts/painting-work-temple/gfbdge0yggpwedvgmygz.jpg",
    "parent_id": null,
    "sort_order": 15,
    "is_visible": true
  },
  {
    "id": "cat-18",
    "name": "Statue",
    "slug": "statue",
    "description": "Custom human portrait statues, bust sculptures, animal statues, and artistic marble figures.",
    "banner_image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787819044/gbm-marble-handicrafts/statue/fd2pvpni87wykqtrritn.jpg",
    "parent_id": null,
    "sort_order": 16,
    "is_visible": true
  },
  {
    "id": "cat-19",
    "name": "Vedi Temple",
    "slug": "vedi-temple",
    "description": "Traditional marble havan vedi, pooja vedi temples, and sacred ritual altar structures.",
    "banner_image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787819081/gbm-marble-handicrafts/vedi-temple/xepogtkmei7nvo7sjxux.jpg",
    "parent_id": null,
    "sort_order": 17,
    "is_visible": true
  }
]

export let MOCK_PRODUCTS: Product[] = [
  {
    "id": "prod-1",
    "name": "Carving Temple Design #1",
    "slug": "carving-temple-design-1",
    "category_id": "cat-1",
    "category_name": "Carving Temple",
    "category_slug": "carving-temple",
    "description": "Intricately hand-carved white Makrana marble temples featuring traditional Rajasthani stone relief work and architectural pillars. Custom sizes and design variations available upon inquiry.",
    "material": "Pure White Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "Natural Diamond Polish",
    "work_type": "Hand Relief Carving",
    "price": "₹85,000",
    "is_featured": true,
    "is_published": true,
    "sort_order": 1,
    "images": [
      {
        "id": "img-1-1",
        "product_id": "prod-1",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787817882/gbm-marble-handicrafts/carving-temple/teggufnaazs15ipmfknp.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-2",
    "name": "Carving Temple Design #2",
    "slug": "carving-temple-design-2",
    "category_id": "cat-1",
    "category_name": "Carving Temple",
    "category_slug": "carving-temple",
    "description": "Intricately hand-carved white Makrana marble temples featuring traditional Rajasthani stone relief work and architectural pillars. Custom sizes and design variations available upon inquiry.",
    "material": "Pure White Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "Natural Diamond Polish",
    "work_type": "Hand Relief Carving",
    "price": "₹87,500",
    "is_featured": true,
    "is_published": true,
    "sort_order": 2,
    "images": [
      {
        "id": "img-2-1",
        "product_id": "prod-2",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787817881/gbm-marble-handicrafts/carving-temple/dsggc3zthvvxsnp9pf9z.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-3",
    "name": "Carving Temple Design #3",
    "slug": "carving-temple-design-3",
    "category_id": "cat-1",
    "category_name": "Carving Temple",
    "category_slug": "carving-temple",
    "description": "Intricately hand-carved white Makrana marble temples featuring traditional Rajasthani stone relief work and architectural pillars. Custom sizes and design variations available upon inquiry.",
    "material": "Pure White Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "Natural Diamond Polish",
    "work_type": "Hand Relief Carving",
    "price": "₹90,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 3,
    "images": [
      {
        "id": "img-3-1",
        "product_id": "prod-3",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787817882/gbm-marble-handicrafts/carving-temple/tula9mophasdiqq43xva.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-4",
    "name": "Carving Temple Design #4",
    "slug": "carving-temple-design-4",
    "category_id": "cat-1",
    "category_name": "Carving Temple",
    "category_slug": "carving-temple",
    "description": "Intricately hand-carved white Makrana marble temples featuring traditional Rajasthani stone relief work and architectural pillars. Custom sizes and design variations available upon inquiry.",
    "material": "Pure White Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "Natural Diamond Polish",
    "work_type": "Hand Relief Carving",
    "price": "₹92,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 4,
    "images": [
      {
        "id": "img-4-1",
        "product_id": "prod-4",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787817882/gbm-marble-handicrafts/carving-temple/asfwcmvdi73arkb6g2mi.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-5",
    "name": "Carving Temple Design #5",
    "slug": "carving-temple-design-5",
    "category_id": "cat-1",
    "category_name": "Carving Temple",
    "category_slug": "carving-temple",
    "description": "Intricately hand-carved white Makrana marble temples featuring traditional Rajasthani stone relief work and architectural pillars. Custom sizes and design variations available upon inquiry.",
    "material": "Pure White Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "Natural Diamond Polish",
    "work_type": "Hand Relief Carving",
    "price": "₹95,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 5,
    "images": [
      {
        "id": "img-5-1",
        "product_id": "prod-5",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787817882/gbm-marble-handicrafts/carving-temple/rvvnmhwklmut9xjj0qdv.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-6",
    "name": "Carving Temple Design #6",
    "slug": "carving-temple-design-6",
    "category_id": "cat-1",
    "category_name": "Carving Temple",
    "category_slug": "carving-temple",
    "description": "Intricately hand-carved white Makrana marble temples featuring traditional Rajasthani stone relief work and architectural pillars. Custom sizes and design variations available upon inquiry.",
    "material": "Pure White Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "Natural Diamond Polish",
    "work_type": "Hand Relief Carving",
    "price": "₹97,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 6,
    "images": [
      {
        "id": "img-6-1",
        "product_id": "prod-6",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787817880/gbm-marble-handicrafts/carving-temple/k4sgqknm86lchod0i8ew.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-7",
    "name": "Carving Temple Design #7",
    "slug": "carving-temple-design-7",
    "category_id": "cat-1",
    "category_name": "Carving Temple",
    "category_slug": "carving-temple",
    "description": "Intricately hand-carved white Makrana marble temples featuring traditional Rajasthani stone relief work and architectural pillars. Custom sizes and design variations available upon inquiry.",
    "material": "Pure White Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "Natural Diamond Polish",
    "work_type": "Hand Relief Carving",
    "price": "₹1,00,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 7,
    "images": [
      {
        "id": "img-7-1",
        "product_id": "prod-7",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787817886/gbm-marble-handicrafts/carving-temple/vqcgc8js6zpz124xctcd.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-8",
    "name": "Carving Temple Design #8",
    "slug": "carving-temple-design-8",
    "category_id": "cat-1",
    "category_name": "Carving Temple",
    "category_slug": "carving-temple",
    "description": "Intricately hand-carved white Makrana marble temples featuring traditional Rajasthani stone relief work and architectural pillars. Custom sizes and design variations available upon inquiry.",
    "material": "Pure White Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "Natural Diamond Polish",
    "work_type": "Hand Relief Carving",
    "price": "₹1,02,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 8,
    "images": [
      {
        "id": "img-8-1",
        "product_id": "prod-8",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787817885/gbm-marble-handicrafts/carving-temple/vfsvn9naax7lfx0tbzdn.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-9",
    "name": "Carving Temple Design #9",
    "slug": "carving-temple-design-9",
    "category_id": "cat-1",
    "category_name": "Carving Temple",
    "category_slug": "carving-temple",
    "description": "Intricately hand-carved white Makrana marble temples featuring traditional Rajasthani stone relief work and architectural pillars. Custom sizes and design variations available upon inquiry.",
    "material": "Pure White Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "Natural Diamond Polish",
    "work_type": "Hand Relief Carving",
    "price": "₹1,05,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 9,
    "images": [
      {
        "id": "img-9-1",
        "product_id": "prod-9",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787817885/gbm-marble-handicrafts/carving-temple/hnauuvdkgzvlxenpgmwh.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-10",
    "name": "Carving Temple Design #10",
    "slug": "carving-temple-design-10",
    "category_id": "cat-1",
    "category_name": "Carving Temple",
    "category_slug": "carving-temple",
    "description": "Intricately hand-carved white Makrana marble temples featuring traditional Rajasthani stone relief work and architectural pillars. Custom sizes and design variations available upon inquiry.",
    "material": "Pure White Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "Natural Diamond Polish",
    "work_type": "Hand Relief Carving",
    "price": "₹1,07,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 10,
    "images": [
      {
        "id": "img-10-1",
        "product_id": "prod-10",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787817885/gbm-marble-handicrafts/carving-temple/mesmjs9zqvzrv2km3vau.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-11",
    "name": "Carving Temple Design #11",
    "slug": "carving-temple-design-11",
    "category_id": "cat-1",
    "category_name": "Carving Temple",
    "category_slug": "carving-temple",
    "description": "Intricately hand-carved white Makrana marble temples featuring traditional Rajasthani stone relief work and architectural pillars. Custom sizes and design variations available upon inquiry.",
    "material": "Pure White Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "Natural Diamond Polish",
    "work_type": "Hand Relief Carving",
    "price": "₹1,10,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 11,
    "images": [
      {
        "id": "img-11-1",
        "product_id": "prod-11",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787817885/gbm-marble-handicrafts/carving-temple/gxmmi6qn8fxx5qgq4npd.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-12",
    "name": "Carving Temple Design #12",
    "slug": "carving-temple-design-12",
    "category_id": "cat-1",
    "category_name": "Carving Temple",
    "category_slug": "carving-temple",
    "description": "Intricately hand-carved white Makrana marble temples featuring traditional Rajasthani stone relief work and architectural pillars. Custom sizes and design variations available upon inquiry.",
    "material": "Pure White Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "Natural Diamond Polish",
    "work_type": "Hand Relief Carving",
    "price": "₹1,12,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 12,
    "images": [
      {
        "id": "img-12-1",
        "product_id": "prod-12",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787817891/gbm-marble-handicrafts/carving-temple/ie09shiucs0evcbdbbkz.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-13",
    "name": "Carving Temple Design #13",
    "slug": "carving-temple-design-13",
    "category_id": "cat-1",
    "category_name": "Carving Temple",
    "category_slug": "carving-temple",
    "description": "Intricately hand-carved white Makrana marble temples featuring traditional Rajasthani stone relief work and architectural pillars. Custom sizes and design variations available upon inquiry.",
    "material": "Pure White Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "Natural Diamond Polish",
    "work_type": "Hand Relief Carving",
    "price": "₹1,15,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 13,
    "images": [
      {
        "id": "img-13-1",
        "product_id": "prod-13",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787817893/gbm-marble-handicrafts/carving-temple/tymzbza3cwlleprkxomp.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-14",
    "name": "Carving Temple Design #14",
    "slug": "carving-temple-design-14",
    "category_id": "cat-1",
    "category_name": "Carving Temple",
    "category_slug": "carving-temple",
    "description": "Intricately hand-carved white Makrana marble temples featuring traditional Rajasthani stone relief work and architectural pillars. Custom sizes and design variations available upon inquiry.",
    "material": "Pure White Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "Natural Diamond Polish",
    "work_type": "Hand Relief Carving",
    "price": "₹1,17,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 14,
    "images": [
      {
        "id": "img-14-1",
        "product_id": "prod-14",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787817894/gbm-marble-handicrafts/carving-temple/mvt7yhxefzcvqfn4gyid.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-15",
    "name": "Carving Temple Design #15",
    "slug": "carving-temple-design-15",
    "category_id": "cat-1",
    "category_name": "Carving Temple",
    "category_slug": "carving-temple",
    "description": "Intricately hand-carved white Makrana marble temples featuring traditional Rajasthani stone relief work and architectural pillars. Custom sizes and design variations available upon inquiry.",
    "material": "Pure White Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "Natural Diamond Polish",
    "work_type": "Hand Relief Carving",
    "price": "₹1,20,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 15,
    "images": [
      {
        "id": "img-15-1",
        "product_id": "prod-15",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787817895/gbm-marble-handicrafts/carving-temple/y9pnh0esoumbtrzupumh.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-16",
    "name": "Carving Temple Design #16",
    "slug": "carving-temple-design-16",
    "category_id": "cat-1",
    "category_name": "Carving Temple",
    "category_slug": "carving-temple",
    "description": "Intricately hand-carved white Makrana marble temples featuring traditional Rajasthani stone relief work and architectural pillars. Custom sizes and design variations available upon inquiry.",
    "material": "Pure White Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "Natural Diamond Polish",
    "work_type": "Hand Relief Carving",
    "price": "₹1,22,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 16,
    "images": [
      {
        "id": "img-16-1",
        "product_id": "prod-16",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787817894/gbm-marble-handicrafts/carving-temple/imsbq5mr6tevihnirpop.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-17",
    "name": "Carving Temple Design #17",
    "slug": "carving-temple-design-17",
    "category_id": "cat-1",
    "category_name": "Carving Temple",
    "category_slug": "carving-temple",
    "description": "Intricately hand-carved white Makrana marble temples featuring traditional Rajasthani stone relief work and architectural pillars. Custom sizes and design variations available upon inquiry.",
    "material": "Pure White Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "Natural Diamond Polish",
    "work_type": "Hand Relief Carving",
    "price": "₹1,25,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 17,
    "images": [
      {
        "id": "img-17-1",
        "product_id": "prod-17",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787817894/gbm-marble-handicrafts/carving-temple/xzjkeqbx1ebiptk7nfkr.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-18",
    "name": "Carving Temple Design #18",
    "slug": "carving-temple-design-18",
    "category_id": "cat-1",
    "category_name": "Carving Temple",
    "category_slug": "carving-temple",
    "description": "Intricately hand-carved white Makrana marble temples featuring traditional Rajasthani stone relief work and architectural pillars. Custom sizes and design variations available upon inquiry.",
    "material": "Pure White Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "Natural Diamond Polish",
    "work_type": "Hand Relief Carving",
    "price": "₹1,27,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 18,
    "images": [
      {
        "id": "img-18-1",
        "product_id": "prod-18",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787817894/gbm-marble-handicrafts/carving-temple/bitybfzg3xmrnyrhgc8r.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-19",
    "name": "Carving Temple Design #19",
    "slug": "carving-temple-design-19",
    "category_id": "cat-1",
    "category_name": "Carving Temple",
    "category_slug": "carving-temple",
    "description": "Intricately hand-carved white Makrana marble temples featuring traditional Rajasthani stone relief work and architectural pillars. Custom sizes and design variations available upon inquiry.",
    "material": "Pure White Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "Natural Diamond Polish",
    "work_type": "Hand Relief Carving",
    "price": "₹1,30,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 19,
    "images": [
      {
        "id": "img-19-1",
        "product_id": "prod-19",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787817897/gbm-marble-handicrafts/carving-temple/yevjsvyxaaldzljpwaiq.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-20",
    "name": "Carving Temple Design #20",
    "slug": "carving-temple-design-20",
    "category_id": "cat-1",
    "category_name": "Carving Temple",
    "category_slug": "carving-temple",
    "description": "Intricately hand-carved white Makrana marble temples featuring traditional Rajasthani stone relief work and architectural pillars. Custom sizes and design variations available upon inquiry.",
    "material": "Pure White Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "Natural Diamond Polish",
    "work_type": "Hand Relief Carving",
    "price": "₹1,32,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 20,
    "images": [
      {
        "id": "img-20-1",
        "product_id": "prod-20",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787817897/gbm-marble-handicrafts/carving-temple/p77nkrgehrxzmpfjor34.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-21",
    "name": "Carving Work Design #1",
    "slug": "carving-work-design-1",
    "category_id": "cat-2",
    "category_name": "Carving Work",
    "category_slug": "carving-work",
    "description": "Custom hand chisel relief stone carving work for walls, pillars, panels, and bespoke architectural elements. Custom sizes and design variations available upon inquiry.",
    "material": "Vietnam & Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "Satin Smooth",
    "work_type": "Chisel Carving Relief",
    "price": "₹35,000",
    "is_featured": true,
    "is_published": true,
    "sort_order": 1,
    "images": [
      {
        "id": "img-21-1",
        "product_id": "prod-21",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787817901/gbm-marble-handicrafts/carving-work/q89zlxs68gw46gluomil.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-22",
    "name": "Carving Work Design #2",
    "slug": "carving-work-design-2",
    "category_id": "cat-2",
    "category_name": "Carving Work",
    "category_slug": "carving-work",
    "description": "Custom hand chisel relief stone carving work for walls, pillars, panels, and bespoke architectural elements. Custom sizes and design variations available upon inquiry.",
    "material": "Vietnam & Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "Satin Smooth",
    "work_type": "Chisel Carving Relief",
    "price": "₹37,500",
    "is_featured": true,
    "is_published": true,
    "sort_order": 2,
    "images": [
      {
        "id": "img-22-1",
        "product_id": "prod-22",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787817904/gbm-marble-handicrafts/carving-work/vhyvtluhkrevoav4y4c7.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-23",
    "name": "Carving Work Design #3",
    "slug": "carving-work-design-3",
    "category_id": "cat-2",
    "category_name": "Carving Work",
    "category_slug": "carving-work",
    "description": "Custom hand chisel relief stone carving work for walls, pillars, panels, and bespoke architectural elements. Custom sizes and design variations available upon inquiry.",
    "material": "Vietnam & Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "Satin Smooth",
    "work_type": "Chisel Carving Relief",
    "price": "₹40,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 3,
    "images": [
      {
        "id": "img-23-1",
        "product_id": "prod-23",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787817901/gbm-marble-handicrafts/carving-work/wtyzbv2kscfy76bajg1o.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-24",
    "name": "Carving Work Design #4",
    "slug": "carving-work-design-4",
    "category_id": "cat-2",
    "category_name": "Carving Work",
    "category_slug": "carving-work",
    "description": "Custom hand chisel relief stone carving work for walls, pillars, panels, and bespoke architectural elements. Custom sizes and design variations available upon inquiry.",
    "material": "Vietnam & Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "Satin Smooth",
    "work_type": "Chisel Carving Relief",
    "price": "₹42,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 4,
    "images": [
      {
        "id": "img-24-1",
        "product_id": "prod-24",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787817902/gbm-marble-handicrafts/carving-work/uhvmhbzfkwq7rzonry9e.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-25",
    "name": "Carving Work Design #5",
    "slug": "carving-work-design-5",
    "category_id": "cat-2",
    "category_name": "Carving Work",
    "category_slug": "carving-work",
    "description": "Custom hand chisel relief stone carving work for walls, pillars, panels, and bespoke architectural elements. Custom sizes and design variations available upon inquiry.",
    "material": "Vietnam & Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "Satin Smooth",
    "work_type": "Chisel Carving Relief",
    "price": "₹45,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 5,
    "images": [
      {
        "id": "img-25-1",
        "product_id": "prod-25",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787817902/gbm-marble-handicrafts/carving-work/w9nphuvlsvihafowuzej.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-26",
    "name": "Carving Work Design #6",
    "slug": "carving-work-design-6",
    "category_id": "cat-2",
    "category_name": "Carving Work",
    "category_slug": "carving-work",
    "description": "Custom hand chisel relief stone carving work for walls, pillars, panels, and bespoke architectural elements. Custom sizes and design variations available upon inquiry.",
    "material": "Vietnam & Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "Satin Smooth",
    "work_type": "Chisel Carving Relief",
    "price": "₹47,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 6,
    "images": [
      {
        "id": "img-26-1",
        "product_id": "prod-26",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787817904/gbm-marble-handicrafts/carving-work/judkthth95pp4rht73yp.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-27",
    "name": "Carving Work Design #7",
    "slug": "carving-work-design-7",
    "category_id": "cat-2",
    "category_name": "Carving Work",
    "category_slug": "carving-work",
    "description": "Custom hand chisel relief stone carving work for walls, pillars, panels, and bespoke architectural elements. Custom sizes and design variations available upon inquiry.",
    "material": "Vietnam & Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "Satin Smooth",
    "work_type": "Chisel Carving Relief",
    "price": "₹50,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 7,
    "images": [
      {
        "id": "img-27-1",
        "product_id": "prod-27",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787817908/gbm-marble-handicrafts/carving-work/qz077s7rofrba8q1wv0f.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-28",
    "name": "Carving Work Design #8",
    "slug": "carving-work-design-8",
    "category_id": "cat-2",
    "category_name": "Carving Work",
    "category_slug": "carving-work",
    "description": "Custom hand chisel relief stone carving work for walls, pillars, panels, and bespoke architectural elements. Custom sizes and design variations available upon inquiry.",
    "material": "Vietnam & Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "Satin Smooth",
    "work_type": "Chisel Carving Relief",
    "price": "₹52,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 8,
    "images": [
      {
        "id": "img-28-1",
        "product_id": "prod-28",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787817908/gbm-marble-handicrafts/carving-work/qk3ysvcv9iiwe6ru523k.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-29",
    "name": "Carving Work Design #9",
    "slug": "carving-work-design-9",
    "category_id": "cat-2",
    "category_name": "Carving Work",
    "category_slug": "carving-work",
    "description": "Custom hand chisel relief stone carving work for walls, pillars, panels, and bespoke architectural elements. Custom sizes and design variations available upon inquiry.",
    "material": "Vietnam & Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "Satin Smooth",
    "work_type": "Chisel Carving Relief",
    "price": "₹55,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 9,
    "images": [
      {
        "id": "img-29-1",
        "product_id": "prod-29",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787817907/gbm-marble-handicrafts/carving-work/yahzwnxpgxpfxx83puh6.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-30",
    "name": "Carving Work Design #10",
    "slug": "carving-work-design-10",
    "category_id": "cat-2",
    "category_name": "Carving Work",
    "category_slug": "carving-work",
    "description": "Custom hand chisel relief stone carving work for walls, pillars, panels, and bespoke architectural elements. Custom sizes and design variations available upon inquiry.",
    "material": "Vietnam & Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "Satin Smooth",
    "work_type": "Chisel Carving Relief",
    "price": "₹57,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 10,
    "images": [
      {
        "id": "img-30-1",
        "product_id": "prod-30",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787817909/gbm-marble-handicrafts/carving-work/nuagbsmemh0vniew39n6.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-31",
    "name": "Carving Work Design #11",
    "slug": "carving-work-design-11",
    "category_id": "cat-2",
    "category_name": "Carving Work",
    "category_slug": "carving-work",
    "description": "Custom hand chisel relief stone carving work for walls, pillars, panels, and bespoke architectural elements. Custom sizes and design variations available upon inquiry.",
    "material": "Vietnam & Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "Satin Smooth",
    "work_type": "Chisel Carving Relief",
    "price": "₹60,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 11,
    "images": [
      {
        "id": "img-31-1",
        "product_id": "prod-31",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787817909/gbm-marble-handicrafts/carving-work/thuwxywm7tetjzoujxtx.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-32",
    "name": "Carving Work Design #12",
    "slug": "carving-work-design-12",
    "category_id": "cat-2",
    "category_name": "Carving Work",
    "category_slug": "carving-work",
    "description": "Custom hand chisel relief stone carving work for walls, pillars, panels, and bespoke architectural elements. Custom sizes and design variations available upon inquiry.",
    "material": "Vietnam & Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "Satin Smooth",
    "work_type": "Chisel Carving Relief",
    "price": "₹62,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 12,
    "images": [
      {
        "id": "img-32-1",
        "product_id": "prod-32",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787817910/gbm-marble-handicrafts/carving-work/oejzrl6uqkd9u9r2trhm.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-33",
    "name": "Carving Work Design #13",
    "slug": "carving-work-design-13",
    "category_id": "cat-2",
    "category_name": "Carving Work",
    "category_slug": "carving-work",
    "description": "Custom hand chisel relief stone carving work for walls, pillars, panels, and bespoke architectural elements. Custom sizes and design variations available upon inquiry.",
    "material": "Vietnam & Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "Satin Smooth",
    "work_type": "Chisel Carving Relief",
    "price": "₹65,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 13,
    "images": [
      {
        "id": "img-33-1",
        "product_id": "prod-33",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787817914/gbm-marble-handicrafts/carving-work/koa1ssnhp9xrdlmldplj.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-34",
    "name": "Carving Work Design #14",
    "slug": "carving-work-design-14",
    "category_id": "cat-2",
    "category_name": "Carving Work",
    "category_slug": "carving-work",
    "description": "Custom hand chisel relief stone carving work for walls, pillars, panels, and bespoke architectural elements. Custom sizes and design variations available upon inquiry.",
    "material": "Vietnam & Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "Satin Smooth",
    "work_type": "Chisel Carving Relief",
    "price": "₹67,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 14,
    "images": [
      {
        "id": "img-34-1",
        "product_id": "prod-34",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787817913/gbm-marble-handicrafts/carving-work/chak9qbkgfkyoo5gxftc.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-35",
    "name": "Carving Work Design #15",
    "slug": "carving-work-design-15",
    "category_id": "cat-2",
    "category_name": "Carving Work",
    "category_slug": "carving-work",
    "description": "Custom hand chisel relief stone carving work for walls, pillars, panels, and bespoke architectural elements. Custom sizes and design variations available upon inquiry.",
    "material": "Vietnam & Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "Satin Smooth",
    "work_type": "Chisel Carving Relief",
    "price": "₹70,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 15,
    "images": [
      {
        "id": "img-35-1",
        "product_id": "prod-35",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787817913/gbm-marble-handicrafts/carving-work/hshld30aumpq8qvucrro.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-36",
    "name": "Carving Work Design #16",
    "slug": "carving-work-design-16",
    "category_id": "cat-2",
    "category_name": "Carving Work",
    "category_slug": "carving-work",
    "description": "Custom hand chisel relief stone carving work for walls, pillars, panels, and bespoke architectural elements. Custom sizes and design variations available upon inquiry.",
    "material": "Vietnam & Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "Satin Smooth",
    "work_type": "Chisel Carving Relief",
    "price": "₹72,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 16,
    "images": [
      {
        "id": "img-36-1",
        "product_id": "prod-36",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787817915/gbm-marble-handicrafts/carving-work/suyecmrf2wj1b7yxumjk.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-37",
    "name": "Carving Work Design #17",
    "slug": "carving-work-design-17",
    "category_id": "cat-2",
    "category_name": "Carving Work",
    "category_slug": "carving-work",
    "description": "Custom hand chisel relief stone carving work for walls, pillars, panels, and bespoke architectural elements. Custom sizes and design variations available upon inquiry.",
    "material": "Vietnam & Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "Satin Smooth",
    "work_type": "Chisel Carving Relief",
    "price": "₹75,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 17,
    "images": [
      {
        "id": "img-37-1",
        "product_id": "prod-37",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787817915/gbm-marble-handicrafts/carving-work/fkbxoas6qg1okbkkjwzc.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-38",
    "name": "Carving Work Design #18",
    "slug": "carving-work-design-18",
    "category_id": "cat-2",
    "category_name": "Carving Work",
    "category_slug": "carving-work",
    "description": "Custom hand chisel relief stone carving work for walls, pillars, panels, and bespoke architectural elements. Custom sizes and design variations available upon inquiry.",
    "material": "Vietnam & Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "Satin Smooth",
    "work_type": "Chisel Carving Relief",
    "price": "₹77,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 18,
    "images": [
      {
        "id": "img-38-1",
        "product_id": "prod-38",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787817914/gbm-marble-handicrafts/carving-work/n9iogbwpgvodki800kmx.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-39",
    "name": "Carving Work Design #19",
    "slug": "carving-work-design-19",
    "category_id": "cat-2",
    "category_name": "Carving Work",
    "category_slug": "carving-work",
    "description": "Custom hand chisel relief stone carving work for walls, pillars, panels, and bespoke architectural elements. Custom sizes and design variations available upon inquiry.",
    "material": "Vietnam & Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "Satin Smooth",
    "work_type": "Chisel Carving Relief",
    "price": "₹80,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 19,
    "images": [
      {
        "id": "img-39-1",
        "product_id": "prod-39",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787817920/gbm-marble-handicrafts/carving-work/lsouhlvnqf7rtfiv2oip.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-40",
    "name": "Carving Work Design #20",
    "slug": "carving-work-design-20",
    "category_id": "cat-2",
    "category_name": "Carving Work",
    "category_slug": "carving-work",
    "description": "Custom hand chisel relief stone carving work for walls, pillars, panels, and bespoke architectural elements. Custom sizes and design variations available upon inquiry.",
    "material": "Vietnam & Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "Satin Smooth",
    "work_type": "Chisel Carving Relief",
    "price": "₹82,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 20,
    "images": [
      {
        "id": "img-40-1",
        "product_id": "prod-40",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787817919/gbm-marble-handicrafts/carving-work/ewcfo3csqnjig2tygz56.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-41",
    "name": "Carving Work Design #21",
    "slug": "carving-work-design-21",
    "category_id": "cat-2",
    "category_name": "Carving Work",
    "category_slug": "carving-work",
    "description": "Custom hand chisel relief stone carving work for walls, pillars, panels, and bespoke architectural elements. Custom sizes and design variations available upon inquiry.",
    "material": "Vietnam & Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "Satin Smooth",
    "work_type": "Chisel Carving Relief",
    "price": "₹85,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 21,
    "images": [
      {
        "id": "img-41-1",
        "product_id": "prod-41",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787817920/gbm-marble-handicrafts/carving-work/xixuyjylahozhlfdopqj.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-42",
    "name": "Carving Work Design #22",
    "slug": "carving-work-design-22",
    "category_id": "cat-2",
    "category_name": "Carving Work",
    "category_slug": "carving-work",
    "description": "Custom hand chisel relief stone carving work for walls, pillars, panels, and bespoke architectural elements. Custom sizes and design variations available upon inquiry.",
    "material": "Vietnam & Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "Satin Smooth",
    "work_type": "Chisel Carving Relief",
    "price": "₹87,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 22,
    "images": [
      {
        "id": "img-42-1",
        "product_id": "prod-42",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787817920/gbm-marble-handicrafts/carving-work/l7kb8isatvnp3ebrqzno.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-43",
    "name": "Carving Work Design #23",
    "slug": "carving-work-design-23",
    "category_id": "cat-2",
    "category_name": "Carving Work",
    "category_slug": "carving-work",
    "description": "Custom hand chisel relief stone carving work for walls, pillars, panels, and bespoke architectural elements. Custom sizes and design variations available upon inquiry.",
    "material": "Vietnam & Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "Satin Smooth",
    "work_type": "Chisel Carving Relief",
    "price": "₹90,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 23,
    "images": [
      {
        "id": "img-43-1",
        "product_id": "prod-43",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787817920/gbm-marble-handicrafts/carving-work/lxxu6diyqaexamrydb13.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-44",
    "name": "Carving Work Design #24",
    "slug": "carving-work-design-24",
    "category_id": "cat-2",
    "category_name": "Carving Work",
    "category_slug": "carving-work",
    "description": "Custom hand chisel relief stone carving work for walls, pillars, panels, and bespoke architectural elements. Custom sizes and design variations available upon inquiry.",
    "material": "Vietnam & Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "Satin Smooth",
    "work_type": "Chisel Carving Relief",
    "price": "₹92,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 24,
    "images": [
      {
        "id": "img-44-1",
        "product_id": "prod-44",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787817920/gbm-marble-handicrafts/carving-work/ch8txkgczqo2iaoes52n.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-45",
    "name": "Carving Work Design #25",
    "slug": "carving-work-design-25",
    "category_id": "cat-2",
    "category_name": "Carving Work",
    "category_slug": "carving-work",
    "description": "Custom hand chisel relief stone carving work for walls, pillars, panels, and bespoke architectural elements. Custom sizes and design variations available upon inquiry.",
    "material": "Vietnam & Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "Satin Smooth",
    "work_type": "Chisel Carving Relief",
    "price": "₹95,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 25,
    "images": [
      {
        "id": "img-45-1",
        "product_id": "prod-45",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787817923/gbm-marble-handicrafts/carving-work/gkbqzzelaoomfuyzw8v3.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-46",
    "name": "Carving Work Design #26",
    "slug": "carving-work-design-26",
    "category_id": "cat-2",
    "category_name": "Carving Work",
    "category_slug": "carving-work",
    "description": "Custom hand chisel relief stone carving work for walls, pillars, panels, and bespoke architectural elements. Custom sizes and design variations available upon inquiry.",
    "material": "Vietnam & Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "Satin Smooth",
    "work_type": "Chisel Carving Relief",
    "price": "₹97,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 26,
    "images": [
      {
        "id": "img-46-1",
        "product_id": "prod-46",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787817923/gbm-marble-handicrafts/carving-work/t11ndkr4kddxcv0e24wg.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-47",
    "name": "Carving Work Design #27",
    "slug": "carving-work-design-27",
    "category_id": "cat-2",
    "category_name": "Carving Work",
    "category_slug": "carving-work",
    "description": "Custom hand chisel relief stone carving work for walls, pillars, panels, and bespoke architectural elements. Custom sizes and design variations available upon inquiry.",
    "material": "Vietnam & Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "Satin Smooth",
    "work_type": "Chisel Carving Relief",
    "price": "₹1,00,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 27,
    "images": [
      {
        "id": "img-47-1",
        "product_id": "prod-47",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787817923/gbm-marble-handicrafts/carving-work/fh52liwhvyd9awlfsgbi.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-48",
    "name": "Corin Temple Design #1",
    "slug": "corin-temple-design-1",
    "category_id": "cat-3",
    "category_name": "Corin Temple",
    "category_slug": "corin-temple",
    "description": "Modern Corian material backlit temples and sleek mandir designs with precision CNC cutting and glowing illumination. Custom sizes and design variations available upon inquiry.",
    "material": "Solid Corian Surface",
    "size": "Custom Dimensions Available",
    "finish": "Matte Seamless Finish",
    "work_type": "CNC 3D Carving & Backlit",
    "price": "₹65,000",
    "is_featured": true,
    "is_published": true,
    "sort_order": 1,
    "images": [
      {
        "id": "img-48-1",
        "product_id": "prod-48",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787817928/gbm-marble-handicrafts/corin-temple/xsijpo81d2alvpqdufhx.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-49",
    "name": "Corin Temple Design #2",
    "slug": "corin-temple-design-2",
    "category_id": "cat-3",
    "category_name": "Corin Temple",
    "category_slug": "corin-temple",
    "description": "Modern Corian material backlit temples and sleek mandir designs with precision CNC cutting and glowing illumination. Custom sizes and design variations available upon inquiry.",
    "material": "Solid Corian Surface",
    "size": "Custom Dimensions Available",
    "finish": "Matte Seamless Finish",
    "work_type": "CNC 3D Carving & Backlit",
    "price": "₹67,500",
    "is_featured": true,
    "is_published": true,
    "sort_order": 2,
    "images": [
      {
        "id": "img-49-1",
        "product_id": "prod-49",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787817927/gbm-marble-handicrafts/corin-temple/vkp7ruhkt144ri7jmt3q.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-50",
    "name": "Corin Temple Design #3",
    "slug": "corin-temple-design-3",
    "category_id": "cat-3",
    "category_name": "Corin Temple",
    "category_slug": "corin-temple",
    "description": "Modern Corian material backlit temples and sleek mandir designs with precision CNC cutting and glowing illumination. Custom sizes and design variations available upon inquiry.",
    "material": "Solid Corian Surface",
    "size": "Custom Dimensions Available",
    "finish": "Matte Seamless Finish",
    "work_type": "CNC 3D Carving & Backlit",
    "price": "₹70,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 3,
    "images": [
      {
        "id": "img-50-1",
        "product_id": "prod-50",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787817927/gbm-marble-handicrafts/corin-temple/tv28dupxwsu3cblilwof.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-51",
    "name": "Corin Temple Design #4",
    "slug": "corin-temple-design-4",
    "category_id": "cat-3",
    "category_name": "Corin Temple",
    "category_slug": "corin-temple",
    "description": "Modern Corian material backlit temples and sleek mandir designs with precision CNC cutting and glowing illumination. Custom sizes and design variations available upon inquiry.",
    "material": "Solid Corian Surface",
    "size": "Custom Dimensions Available",
    "finish": "Matte Seamless Finish",
    "work_type": "CNC 3D Carving & Backlit",
    "price": "₹72,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 4,
    "images": [
      {
        "id": "img-51-1",
        "product_id": "prod-51",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787817927/gbm-marble-handicrafts/corin-temple/rwvgjtepphiqkldkohno.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-52",
    "name": "Corin Temple Design #5",
    "slug": "corin-temple-design-5",
    "category_id": "cat-3",
    "category_name": "Corin Temple",
    "category_slug": "corin-temple",
    "description": "Modern Corian material backlit temples and sleek mandir designs with precision CNC cutting and glowing illumination. Custom sizes and design variations available upon inquiry.",
    "material": "Solid Corian Surface",
    "size": "Custom Dimensions Available",
    "finish": "Matte Seamless Finish",
    "work_type": "CNC 3D Carving & Backlit",
    "price": "₹75,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 5,
    "images": [
      {
        "id": "img-52-1",
        "product_id": "prod-52",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787817927/gbm-marble-handicrafts/corin-temple/ye0ltzvvkgwrncevp6gk.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-53",
    "name": "Corin Temple Design #6",
    "slug": "corin-temple-design-6",
    "category_id": "cat-3",
    "category_name": "Corin Temple",
    "category_slug": "corin-temple",
    "description": "Modern Corian material backlit temples and sleek mandir designs with precision CNC cutting and glowing illumination. Custom sizes and design variations available upon inquiry.",
    "material": "Solid Corian Surface",
    "size": "Custom Dimensions Available",
    "finish": "Matte Seamless Finish",
    "work_type": "CNC 3D Carving & Backlit",
    "price": "₹77,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 6,
    "images": [
      {
        "id": "img-53-1",
        "product_id": "prod-53",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787817928/gbm-marble-handicrafts/corin-temple/ccred3yu53tbrtbofvoz.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-54",
    "name": "Corin Temple Design #7",
    "slug": "corin-temple-design-7",
    "category_id": "cat-3",
    "category_name": "Corin Temple",
    "category_slug": "corin-temple",
    "description": "Modern Corian material backlit temples and sleek mandir designs with precision CNC cutting and glowing illumination. Custom sizes and design variations available upon inquiry.",
    "material": "Solid Corian Surface",
    "size": "Custom Dimensions Available",
    "finish": "Matte Seamless Finish",
    "work_type": "CNC 3D Carving & Backlit",
    "price": "₹80,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 7,
    "images": [
      {
        "id": "img-54-1",
        "product_id": "prod-54",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787817930/gbm-marble-handicrafts/corin-temple/kbg0sj1qcc7xa8m9trdb.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-55",
    "name": "Corin Temple Design #8",
    "slug": "corin-temple-design-8",
    "category_id": "cat-3",
    "category_name": "Corin Temple",
    "category_slug": "corin-temple",
    "description": "Modern Corian material backlit temples and sleek mandir designs with precision CNC cutting and glowing illumination. Custom sizes and design variations available upon inquiry.",
    "material": "Solid Corian Surface",
    "size": "Custom Dimensions Available",
    "finish": "Matte Seamless Finish",
    "work_type": "CNC 3D Carving & Backlit",
    "price": "₹82,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 8,
    "images": [
      {
        "id": "img-55-1",
        "product_id": "prod-55",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787817930/gbm-marble-handicrafts/corin-temple/d2e7tkmovundinhifkxb.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-56",
    "name": "Corin Temple Design #9",
    "slug": "corin-temple-design-9",
    "category_id": "cat-3",
    "category_name": "Corin Temple",
    "category_slug": "corin-temple",
    "description": "Modern Corian material backlit temples and sleek mandir designs with precision CNC cutting and glowing illumination. Custom sizes and design variations available upon inquiry.",
    "material": "Solid Corian Surface",
    "size": "Custom Dimensions Available",
    "finish": "Matte Seamless Finish",
    "work_type": "CNC 3D Carving & Backlit",
    "price": "₹85,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 9,
    "images": [
      {
        "id": "img-56-1",
        "product_id": "prod-56",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787817931/gbm-marble-handicrafts/corin-temple/wotlsa8mbijyg56bcjio.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-57",
    "name": "Corin Temple Design #10",
    "slug": "corin-temple-design-10",
    "category_id": "cat-3",
    "category_name": "Corin Temple",
    "category_slug": "corin-temple",
    "description": "Modern Corian material backlit temples and sleek mandir designs with precision CNC cutting and glowing illumination. Custom sizes and design variations available upon inquiry.",
    "material": "Solid Corian Surface",
    "size": "Custom Dimensions Available",
    "finish": "Matte Seamless Finish",
    "work_type": "CNC 3D Carving & Backlit",
    "price": "₹87,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 10,
    "images": [
      {
        "id": "img-57-1",
        "product_id": "prod-57",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787817931/gbm-marble-handicrafts/corin-temple/s8dczgv7so4uritsosnk.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-58",
    "name": "Eley Work Temple Design #1",
    "slug": "eley-work-temple-design-1",
    "category_id": "cat-4",
    "category_name": "Eley Work Temple",
    "category_slug": "eley-work-temple",
    "description": "Exquisite Pietra Dura gemstone inlay work temples adorned with semi-precious stone floral art. Custom sizes and design variations available upon inquiry.",
    "material": "White Marble & Gemstones",
    "size": "Custom Dimensions Available",
    "finish": "High Gloss Diamond Polish",
    "work_type": "Pietra Dura Stone Inlay",
    "price": "₹95,000",
    "is_featured": true,
    "is_published": true,
    "sort_order": 1,
    "images": [
      {
        "id": "img-58-1",
        "product_id": "prod-58",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787817934/gbm-marble-handicrafts/eley-work-temple/xszuujpkfcif9zeqv6mo.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-59",
    "name": "Eley Work Temple Design #2",
    "slug": "eley-work-temple-design-2",
    "category_id": "cat-4",
    "category_name": "Eley Work Temple",
    "category_slug": "eley-work-temple",
    "description": "Exquisite Pietra Dura gemstone inlay work temples adorned with semi-precious stone floral art. Custom sizes and design variations available upon inquiry.",
    "material": "White Marble & Gemstones",
    "size": "Custom Dimensions Available",
    "finish": "High Gloss Diamond Polish",
    "work_type": "Pietra Dura Stone Inlay",
    "price": "₹97,500",
    "is_featured": true,
    "is_published": true,
    "sort_order": 2,
    "images": [
      {
        "id": "img-59-1",
        "product_id": "prod-59",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787817933/gbm-marble-handicrafts/eley-work-temple/iwlfb6q6dh1xcqhlgv7u.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-60",
    "name": "Eley Work Temple Design #3",
    "slug": "eley-work-temple-design-3",
    "category_id": "cat-4",
    "category_name": "Eley Work Temple",
    "category_slug": "eley-work-temple",
    "description": "Exquisite Pietra Dura gemstone inlay work temples adorned with semi-precious stone floral art. Custom sizes and design variations available upon inquiry.",
    "material": "White Marble & Gemstones",
    "size": "Custom Dimensions Available",
    "finish": "High Gloss Diamond Polish",
    "work_type": "Pietra Dura Stone Inlay",
    "price": "₹1,00,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 3,
    "images": [
      {
        "id": "img-60-1",
        "product_id": "prod-60",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787817933/gbm-marble-handicrafts/eley-work-temple/hqyfcqmdeeuhkzaxd6qw.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-61",
    "name": "Eley Work Temple Design #4",
    "slug": "eley-work-temple-design-4",
    "category_id": "cat-4",
    "category_name": "Eley Work Temple",
    "category_slug": "eley-work-temple",
    "description": "Exquisite Pietra Dura gemstone inlay work temples adorned with semi-precious stone floral art. Custom sizes and design variations available upon inquiry.",
    "material": "White Marble & Gemstones",
    "size": "Custom Dimensions Available",
    "finish": "High Gloss Diamond Polish",
    "work_type": "Pietra Dura Stone Inlay",
    "price": "₹1,02,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 4,
    "images": [
      {
        "id": "img-61-1",
        "product_id": "prod-61",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787817934/gbm-marble-handicrafts/eley-work-temple/oxufozmztvyvhoacr6h5.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-62",
    "name": "Eley Work Temple Design #5",
    "slug": "eley-work-temple-design-5",
    "category_id": "cat-4",
    "category_name": "Eley Work Temple",
    "category_slug": "eley-work-temple",
    "description": "Exquisite Pietra Dura gemstone inlay work temples adorned with semi-precious stone floral art. Custom sizes and design variations available upon inquiry.",
    "material": "White Marble & Gemstones",
    "size": "Custom Dimensions Available",
    "finish": "High Gloss Diamond Polish",
    "work_type": "Pietra Dura Stone Inlay",
    "price": "₹1,05,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 5,
    "images": [
      {
        "id": "img-62-1",
        "product_id": "prod-62",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787817934/gbm-marble-handicrafts/eley-work-temple/pqcm7nohudkrc9mlz4ug.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-63",
    "name": "Eley Work Temple Design #6",
    "slug": "eley-work-temple-design-6",
    "category_id": "cat-4",
    "category_name": "Eley Work Temple",
    "category_slug": "eley-work-temple",
    "description": "Exquisite Pietra Dura gemstone inlay work temples adorned with semi-precious stone floral art. Custom sizes and design variations available upon inquiry.",
    "material": "White Marble & Gemstones",
    "size": "Custom Dimensions Available",
    "finish": "High Gloss Diamond Polish",
    "work_type": "Pietra Dura Stone Inlay",
    "price": "₹1,07,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 6,
    "images": [
      {
        "id": "img-63-1",
        "product_id": "prod-63",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787817933/gbm-marble-handicrafts/eley-work-temple/qi7xymesbpri8kyvdnit.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-64",
    "name": "Eley Work Temple Design #7",
    "slug": "eley-work-temple-design-7",
    "category_id": "cat-4",
    "category_name": "Eley Work Temple",
    "category_slug": "eley-work-temple",
    "description": "Exquisite Pietra Dura gemstone inlay work temples adorned with semi-precious stone floral art. Custom sizes and design variations available upon inquiry.",
    "material": "White Marble & Gemstones",
    "size": "Custom Dimensions Available",
    "finish": "High Gloss Diamond Polish",
    "work_type": "Pietra Dura Stone Inlay",
    "price": "₹1,10,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 7,
    "images": [
      {
        "id": "img-64-1",
        "product_id": "prod-64",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787817936/gbm-marble-handicrafts/eley-work-temple/lhvly5neqmewjsjs1tea.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-65",
    "name": "Eley Work Temple Design #8",
    "slug": "eley-work-temple-design-8",
    "category_id": "cat-4",
    "category_name": "Eley Work Temple",
    "category_slug": "eley-work-temple",
    "description": "Exquisite Pietra Dura gemstone inlay work temples adorned with semi-precious stone floral art. Custom sizes and design variations available upon inquiry.",
    "material": "White Marble & Gemstones",
    "size": "Custom Dimensions Available",
    "finish": "High Gloss Diamond Polish",
    "work_type": "Pietra Dura Stone Inlay",
    "price": "₹1,12,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 8,
    "images": [
      {
        "id": "img-65-1",
        "product_id": "prod-65",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787817936/gbm-marble-handicrafts/eley-work-temple/fu6wxd9etjcetobq5ky7.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-66",
    "name": "Eley Work Temple Design #9",
    "slug": "eley-work-temple-design-9",
    "category_id": "cat-4",
    "category_name": "Eley Work Temple",
    "category_slug": "eley-work-temple",
    "description": "Exquisite Pietra Dura gemstone inlay work temples adorned with semi-precious stone floral art. Custom sizes and design variations available upon inquiry.",
    "material": "White Marble & Gemstones",
    "size": "Custom Dimensions Available",
    "finish": "High Gloss Diamond Polish",
    "work_type": "Pietra Dura Stone Inlay",
    "price": "₹1,15,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 9,
    "images": [
      {
        "id": "img-66-1",
        "product_id": "prod-66",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787817936/gbm-marble-handicrafts/eley-work-temple/cchyphirinj3kv9ue3eb.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-67",
    "name": "Eley Work Temple Design #10",
    "slug": "eley-work-temple-design-10",
    "category_id": "cat-4",
    "category_name": "Eley Work Temple",
    "category_slug": "eley-work-temple",
    "description": "Exquisite Pietra Dura gemstone inlay work temples adorned with semi-precious stone floral art. Custom sizes and design variations available upon inquiry.",
    "material": "White Marble & Gemstones",
    "size": "Custom Dimensions Available",
    "finish": "High Gloss Diamond Polish",
    "work_type": "Pietra Dura Stone Inlay",
    "price": "₹1,17,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 10,
    "images": [
      {
        "id": "img-67-1",
        "product_id": "prod-67",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787817937/gbm-marble-handicrafts/eley-work-temple/zlvubcx6ytzchvoidqkb.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-68",
    "name": "Eley Work Temple Design #11",
    "slug": "eley-work-temple-design-11",
    "category_id": "cat-4",
    "category_name": "Eley Work Temple",
    "category_slug": "eley-work-temple",
    "description": "Exquisite Pietra Dura gemstone inlay work temples adorned with semi-precious stone floral art. Custom sizes and design variations available upon inquiry.",
    "material": "White Marble & Gemstones",
    "size": "Custom Dimensions Available",
    "finish": "High Gloss Diamond Polish",
    "work_type": "Pietra Dura Stone Inlay",
    "price": "₹1,20,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 11,
    "images": [
      {
        "id": "img-68-1",
        "product_id": "prod-68",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787817936/gbm-marble-handicrafts/eley-work-temple/psn9wkmikvy0ysvmx8iq.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-69",
    "name": "Eley Work Temple Design #12",
    "slug": "eley-work-temple-design-12",
    "category_id": "cat-4",
    "category_name": "Eley Work Temple",
    "category_slug": "eley-work-temple",
    "description": "Exquisite Pietra Dura gemstone inlay work temples adorned with semi-precious stone floral art. Custom sizes and design variations available upon inquiry.",
    "material": "White Marble & Gemstones",
    "size": "Custom Dimensions Available",
    "finish": "High Gloss Diamond Polish",
    "work_type": "Pietra Dura Stone Inlay",
    "price": "₹1,22,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 12,
    "images": [
      {
        "id": "img-69-1",
        "product_id": "prod-69",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787817936/gbm-marble-handicrafts/eley-work-temple/awy08xzjs3inqfqjdoyl.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-70",
    "name": "Eley Work Temple Design #13",
    "slug": "eley-work-temple-design-13",
    "category_id": "cat-4",
    "category_name": "Eley Work Temple",
    "category_slug": "eley-work-temple",
    "description": "Exquisite Pietra Dura gemstone inlay work temples adorned with semi-precious stone floral art. Custom sizes and design variations available upon inquiry.",
    "material": "White Marble & Gemstones",
    "size": "Custom Dimensions Available",
    "finish": "High Gloss Diamond Polish",
    "work_type": "Pietra Dura Stone Inlay",
    "price": "₹1,25,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 13,
    "images": [
      {
        "id": "img-70-1",
        "product_id": "prod-70",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787817940/gbm-marble-handicrafts/eley-work-temple/srpjf4cqqsnmmpdhdcxj.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-71",
    "name": "Eley Work Temple Design #14",
    "slug": "eley-work-temple-design-14",
    "category_id": "cat-4",
    "category_name": "Eley Work Temple",
    "category_slug": "eley-work-temple",
    "description": "Exquisite Pietra Dura gemstone inlay work temples adorned with semi-precious stone floral art. Custom sizes and design variations available upon inquiry.",
    "material": "White Marble & Gemstones",
    "size": "Custom Dimensions Available",
    "finish": "High Gloss Diamond Polish",
    "work_type": "Pietra Dura Stone Inlay",
    "price": "₹1,27,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 14,
    "images": [
      {
        "id": "img-71-1",
        "product_id": "prod-71",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787817940/gbm-marble-handicrafts/eley-work-temple/itm6rmxweejjmgfltuxd.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-72",
    "name": "Eley Work Temple Design #15",
    "slug": "eley-work-temple-design-15",
    "category_id": "cat-4",
    "category_name": "Eley Work Temple",
    "category_slug": "eley-work-temple",
    "description": "Exquisite Pietra Dura gemstone inlay work temples adorned with semi-precious stone floral art. Custom sizes and design variations available upon inquiry.",
    "material": "White Marble & Gemstones",
    "size": "Custom Dimensions Available",
    "finish": "High Gloss Diamond Polish",
    "work_type": "Pietra Dura Stone Inlay",
    "price": "₹1,30,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 15,
    "images": [
      {
        "id": "img-72-1",
        "product_id": "prod-72",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787817940/gbm-marble-handicrafts/eley-work-temple/peainv9yi5icaeoqryu8.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-73",
    "name": "Eley Work Temple Design #16",
    "slug": "eley-work-temple-design-16",
    "category_id": "cat-4",
    "category_name": "Eley Work Temple",
    "category_slug": "eley-work-temple",
    "description": "Exquisite Pietra Dura gemstone inlay work temples adorned with semi-precious stone floral art. Custom sizes and design variations available upon inquiry.",
    "material": "White Marble & Gemstones",
    "size": "Custom Dimensions Available",
    "finish": "High Gloss Diamond Polish",
    "work_type": "Pietra Dura Stone Inlay",
    "price": "₹1,32,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 16,
    "images": [
      {
        "id": "img-73-1",
        "product_id": "prod-73",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787817945/gbm-marble-handicrafts/eley-work-temple/bxqjmd1hjqiwoj1trlve.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-74",
    "name": "Eley Work Temple Design #17",
    "slug": "eley-work-temple-design-17",
    "category_id": "cat-4",
    "category_name": "Eley Work Temple",
    "category_slug": "eley-work-temple",
    "description": "Exquisite Pietra Dura gemstone inlay work temples adorned with semi-precious stone floral art. Custom sizes and design variations available upon inquiry.",
    "material": "White Marble & Gemstones",
    "size": "Custom Dimensions Available",
    "finish": "High Gloss Diamond Polish",
    "work_type": "Pietra Dura Stone Inlay",
    "price": "₹1,35,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 17,
    "images": [
      {
        "id": "img-74-1",
        "product_id": "prod-74",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787817942/gbm-marble-handicrafts/eley-work-temple/pau2cljhs5scw3cwax1r.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-75",
    "name": "Eley Work Temple Design #18",
    "slug": "eley-work-temple-design-18",
    "category_id": "cat-4",
    "category_name": "Eley Work Temple",
    "category_slug": "eley-work-temple",
    "description": "Exquisite Pietra Dura gemstone inlay work temples adorned with semi-precious stone floral art. Custom sizes and design variations available upon inquiry.",
    "material": "White Marble & Gemstones",
    "size": "Custom Dimensions Available",
    "finish": "High Gloss Diamond Polish",
    "work_type": "Pietra Dura Stone Inlay",
    "price": "₹1,37,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 18,
    "images": [
      {
        "id": "img-75-1",
        "product_id": "prod-75",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787817942/gbm-marble-handicrafts/eley-work-temple/kmeqstsfwos8x62bt4pc.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-76",
    "name": "Eley Work Temple Design #19",
    "slug": "eley-work-temple-design-19",
    "category_id": "cat-4",
    "category_name": "Eley Work Temple",
    "category_slug": "eley-work-temple",
    "description": "Exquisite Pietra Dura gemstone inlay work temples adorned with semi-precious stone floral art. Custom sizes and design variations available upon inquiry.",
    "material": "White Marble & Gemstones",
    "size": "Custom Dimensions Available",
    "finish": "High Gloss Diamond Polish",
    "work_type": "Pietra Dura Stone Inlay",
    "price": "₹1,40,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 19,
    "images": [
      {
        "id": "img-76-1",
        "product_id": "prod-76",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787817949/gbm-marble-handicrafts/eley-work-temple/aljpy6cctgwccsofyg9p.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-77",
    "name": "Eley Work Temple Design #20",
    "slug": "eley-work-temple-design-20",
    "category_id": "cat-4",
    "category_name": "Eley Work Temple",
    "category_slug": "eley-work-temple",
    "description": "Exquisite Pietra Dura gemstone inlay work temples adorned with semi-precious stone floral art. Custom sizes and design variations available upon inquiry.",
    "material": "White Marble & Gemstones",
    "size": "Custom Dimensions Available",
    "finish": "High Gloss Diamond Polish",
    "work_type": "Pietra Dura Stone Inlay",
    "price": "₹1,42,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 20,
    "images": [
      {
        "id": "img-77-1",
        "product_id": "prod-77",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787817948/gbm-marble-handicrafts/eley-work-temple/iqpaloxlavrrzey3y1ui.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-78",
    "name": "Eley Work Temple Design #21",
    "slug": "eley-work-temple-design-21",
    "category_id": "cat-4",
    "category_name": "Eley Work Temple",
    "category_slug": "eley-work-temple",
    "description": "Exquisite Pietra Dura gemstone inlay work temples adorned with semi-precious stone floral art. Custom sizes and design variations available upon inquiry.",
    "material": "White Marble & Gemstones",
    "size": "Custom Dimensions Available",
    "finish": "High Gloss Diamond Polish",
    "work_type": "Pietra Dura Stone Inlay",
    "price": "₹1,45,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 21,
    "images": [
      {
        "id": "img-78-1",
        "product_id": "prod-78",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787817949/gbm-marble-handicrafts/eley-work-temple/dixbxcmh228yqcloiuoo.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-79",
    "name": "Eley Work Temple Design #22",
    "slug": "eley-work-temple-design-22",
    "category_id": "cat-4",
    "category_name": "Eley Work Temple",
    "category_slug": "eley-work-temple",
    "description": "Exquisite Pietra Dura gemstone inlay work temples adorned with semi-precious stone floral art. Custom sizes and design variations available upon inquiry.",
    "material": "White Marble & Gemstones",
    "size": "Custom Dimensions Available",
    "finish": "High Gloss Diamond Polish",
    "work_type": "Pietra Dura Stone Inlay",
    "price": "₹1,47,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 22,
    "images": [
      {
        "id": "img-79-1",
        "product_id": "prod-79",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787817950/gbm-marble-handicrafts/eley-work-temple/mzpunkdapzfgt5wiqlo5.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-80",
    "name": "Eley Work Temple Design #23",
    "slug": "eley-work-temple-design-23",
    "category_id": "cat-4",
    "category_name": "Eley Work Temple",
    "category_slug": "eley-work-temple",
    "description": "Exquisite Pietra Dura gemstone inlay work temples adorned with semi-precious stone floral art. Custom sizes and design variations available upon inquiry.",
    "material": "White Marble & Gemstones",
    "size": "Custom Dimensions Available",
    "finish": "High Gloss Diamond Polish",
    "work_type": "Pietra Dura Stone Inlay",
    "price": "₹1,50,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 23,
    "images": [
      {
        "id": "img-80-1",
        "product_id": "prod-80",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787817948/gbm-marble-handicrafts/eley-work-temple/xa22es1ptbmsawwc9tnj.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-81",
    "name": "Eley Work Temple Design #24",
    "slug": "eley-work-temple-design-24",
    "category_id": "cat-4",
    "category_name": "Eley Work Temple",
    "category_slug": "eley-work-temple",
    "description": "Exquisite Pietra Dura gemstone inlay work temples adorned with semi-precious stone floral art. Custom sizes and design variations available upon inquiry.",
    "material": "White Marble & Gemstones",
    "size": "Custom Dimensions Available",
    "finish": "High Gloss Diamond Polish",
    "work_type": "Pietra Dura Stone Inlay",
    "price": "₹1,52,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 24,
    "images": [
      {
        "id": "img-81-1",
        "product_id": "prod-81",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787817948/gbm-marble-handicrafts/eley-work-temple/iuipnit5dhxjtqqdgplq.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-82",
    "name": "Fountain Design #1",
    "slug": "fountain-design-1",
    "category_id": "cat-5",
    "category_name": "Fountain",
    "category_slug": "fountain",
    "description": "Grand multi-tier carved marble fountains, water bowls, cascading waterfalls, and garden water features. Custom sizes and design variations available upon inquiry.",
    "material": "Rajnagar White Marble",
    "size": "Custom Dimensions Available",
    "finish": "Water Resistant Polish",
    "work_type": "3D Tier Turning & Sculpting",
    "price": "₹45,000",
    "is_featured": true,
    "is_published": true,
    "sort_order": 1,
    "images": [
      {
        "id": "img-82-1",
        "product_id": "prod-82",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787817952/gbm-marble-handicrafts/fountain/eaim1ovyjk1ulyw3pppz.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-83",
    "name": "Fountain Design #2",
    "slug": "fountain-design-2",
    "category_id": "cat-5",
    "category_name": "Fountain",
    "category_slug": "fountain",
    "description": "Grand multi-tier carved marble fountains, water bowls, cascading waterfalls, and garden water features. Custom sizes and design variations available upon inquiry.",
    "material": "Rajnagar White Marble",
    "size": "Custom Dimensions Available",
    "finish": "Water Resistant Polish",
    "work_type": "3D Tier Turning & Sculpting",
    "price": "₹47,500",
    "is_featured": true,
    "is_published": true,
    "sort_order": 2,
    "images": [
      {
        "id": "img-83-1",
        "product_id": "prod-83",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787817953/gbm-marble-handicrafts/fountain/i3s0eq23hvla4k1hhafk.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-84",
    "name": "Fountain Design #3",
    "slug": "fountain-design-3",
    "category_id": "cat-5",
    "category_name": "Fountain",
    "category_slug": "fountain",
    "description": "Grand multi-tier carved marble fountains, water bowls, cascading waterfalls, and garden water features. Custom sizes and design variations available upon inquiry.",
    "material": "Rajnagar White Marble",
    "size": "Custom Dimensions Available",
    "finish": "Water Resistant Polish",
    "work_type": "3D Tier Turning & Sculpting",
    "price": "₹50,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 3,
    "images": [
      {
        "id": "img-84-1",
        "product_id": "prod-84",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787817952/gbm-marble-handicrafts/fountain/gzigzbfpf0gpcnvv893r.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-85",
    "name": "Fountain Design #4",
    "slug": "fountain-design-4",
    "category_id": "cat-5",
    "category_name": "Fountain",
    "category_slug": "fountain",
    "description": "Grand multi-tier carved marble fountains, water bowls, cascading waterfalls, and garden water features. Custom sizes and design variations available upon inquiry.",
    "material": "Rajnagar White Marble",
    "size": "Custom Dimensions Available",
    "finish": "Water Resistant Polish",
    "work_type": "3D Tier Turning & Sculpting",
    "price": "₹52,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 4,
    "images": [
      {
        "id": "img-85-1",
        "product_id": "prod-85",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787817953/gbm-marble-handicrafts/fountain/ynwznmb5obz9hrquycub.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-86",
    "name": "Fountain Design #5",
    "slug": "fountain-design-5",
    "category_id": "cat-5",
    "category_name": "Fountain",
    "category_slug": "fountain",
    "description": "Grand multi-tier carved marble fountains, water bowls, cascading waterfalls, and garden water features. Custom sizes and design variations available upon inquiry.",
    "material": "Rajnagar White Marble",
    "size": "Custom Dimensions Available",
    "finish": "Water Resistant Polish",
    "work_type": "3D Tier Turning & Sculpting",
    "price": "₹55,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 5,
    "images": [
      {
        "id": "img-86-1",
        "product_id": "prod-86",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787817953/gbm-marble-handicrafts/fountain/rtpd3glcvbowbpyryj3q.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-87",
    "name": "Fountain Design #6",
    "slug": "fountain-design-6",
    "category_id": "cat-5",
    "category_name": "Fountain",
    "category_slug": "fountain",
    "description": "Grand multi-tier carved marble fountains, water bowls, cascading waterfalls, and garden water features. Custom sizes and design variations available upon inquiry.",
    "material": "Rajnagar White Marble",
    "size": "Custom Dimensions Available",
    "finish": "Water Resistant Polish",
    "work_type": "3D Tier Turning & Sculpting",
    "price": "₹57,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 6,
    "images": [
      {
        "id": "img-87-1",
        "product_id": "prod-87",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787817953/gbm-marble-handicrafts/fountain/i3o6qf9az4sg2fglfbqf.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-88",
    "name": "Fountain Design #7",
    "slug": "fountain-design-7",
    "category_id": "cat-5",
    "category_name": "Fountain",
    "category_slug": "fountain",
    "description": "Grand multi-tier carved marble fountains, water bowls, cascading waterfalls, and garden water features. Custom sizes and design variations available upon inquiry.",
    "material": "Rajnagar White Marble",
    "size": "Custom Dimensions Available",
    "finish": "Water Resistant Polish",
    "work_type": "3D Tier Turning & Sculpting",
    "price": "₹60,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 7,
    "images": [
      {
        "id": "img-88-1",
        "product_id": "prod-88",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787817955/gbm-marble-handicrafts/fountain/nancsrivahq0id3ygfqn.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-89",
    "name": "Fountain Design #8",
    "slug": "fountain-design-8",
    "category_id": "cat-5",
    "category_name": "Fountain",
    "category_slug": "fountain",
    "description": "Grand multi-tier carved marble fountains, water bowls, cascading waterfalls, and garden water features. Custom sizes and design variations available upon inquiry.",
    "material": "Rajnagar White Marble",
    "size": "Custom Dimensions Available",
    "finish": "Water Resistant Polish",
    "work_type": "3D Tier Turning & Sculpting",
    "price": "₹62,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 8,
    "images": [
      {
        "id": "img-89-1",
        "product_id": "prod-89",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787817955/gbm-marble-handicrafts/fountain/ioliez7hiqrpavji9tdk.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-90",
    "name": "Fountain Design #9",
    "slug": "fountain-design-9",
    "category_id": "cat-5",
    "category_name": "Fountain",
    "category_slug": "fountain",
    "description": "Grand multi-tier carved marble fountains, water bowls, cascading waterfalls, and garden water features. Custom sizes and design variations available upon inquiry.",
    "material": "Rajnagar White Marble",
    "size": "Custom Dimensions Available",
    "finish": "Water Resistant Polish",
    "work_type": "3D Tier Turning & Sculpting",
    "price": "₹65,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 9,
    "images": [
      {
        "id": "img-90-1",
        "product_id": "prod-90",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787817955/gbm-marble-handicrafts/fountain/nonggur4hyes00h2pmwu.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-91",
    "name": "Fountain Design #10",
    "slug": "fountain-design-10",
    "category_id": "cat-5",
    "category_name": "Fountain",
    "category_slug": "fountain",
    "description": "Grand multi-tier carved marble fountains, water bowls, cascading waterfalls, and garden water features. Custom sizes and design variations available upon inquiry.",
    "material": "Rajnagar White Marble",
    "size": "Custom Dimensions Available",
    "finish": "Water Resistant Polish",
    "work_type": "3D Tier Turning & Sculpting",
    "price": "₹67,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 10,
    "images": [
      {
        "id": "img-91-1",
        "product_id": "prod-91",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787817955/gbm-marble-handicrafts/fountain/klhri2umwwnzeb46i6ii.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-92",
    "name": "Fountain Design #11",
    "slug": "fountain-design-11",
    "category_id": "cat-5",
    "category_name": "Fountain",
    "category_slug": "fountain",
    "description": "Grand multi-tier carved marble fountains, water bowls, cascading waterfalls, and garden water features. Custom sizes and design variations available upon inquiry.",
    "material": "Rajnagar White Marble",
    "size": "Custom Dimensions Available",
    "finish": "Water Resistant Polish",
    "work_type": "3D Tier Turning & Sculpting",
    "price": "₹70,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 11,
    "images": [
      {
        "id": "img-92-1",
        "product_id": "prod-92",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787817955/gbm-marble-handicrafts/fountain/fc7pg8am3lxb23nvw8wr.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-93",
    "name": "Fountain Design #12",
    "slug": "fountain-design-12",
    "category_id": "cat-5",
    "category_name": "Fountain",
    "category_slug": "fountain",
    "description": "Grand multi-tier carved marble fountains, water bowls, cascading waterfalls, and garden water features. Custom sizes and design variations available upon inquiry.",
    "material": "Rajnagar White Marble",
    "size": "Custom Dimensions Available",
    "finish": "Water Resistant Polish",
    "work_type": "3D Tier Turning & Sculpting",
    "price": "₹72,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 12,
    "images": [
      {
        "id": "img-93-1",
        "product_id": "prod-93",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787817955/gbm-marble-handicrafts/fountain/misllnjkrtpuyxyuftoj.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-94",
    "name": "Fountain Design #13",
    "slug": "fountain-design-13",
    "category_id": "cat-5",
    "category_name": "Fountain",
    "category_slug": "fountain",
    "description": "Grand multi-tier carved marble fountains, water bowls, cascading waterfalls, and garden water features. Custom sizes and design variations available upon inquiry.",
    "material": "Rajnagar White Marble",
    "size": "Custom Dimensions Available",
    "finish": "Water Resistant Polish",
    "work_type": "3D Tier Turning & Sculpting",
    "price": "₹75,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 13,
    "images": [
      {
        "id": "img-94-1",
        "product_id": "prod-94",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787817957/gbm-marble-handicrafts/fountain/o4wo9u29fpxbh3m6aptj.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-95",
    "name": "Fountain Design #14",
    "slug": "fountain-design-14",
    "category_id": "cat-5",
    "category_name": "Fountain",
    "category_slug": "fountain",
    "description": "Grand multi-tier carved marble fountains, water bowls, cascading waterfalls, and garden water features. Custom sizes and design variations available upon inquiry.",
    "material": "Rajnagar White Marble",
    "size": "Custom Dimensions Available",
    "finish": "Water Resistant Polish",
    "work_type": "3D Tier Turning & Sculpting",
    "price": "₹77,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 14,
    "images": [
      {
        "id": "img-95-1",
        "product_id": "prod-95",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787817957/gbm-marble-handicrafts/fountain/o6pk3ulnov8difxhxmuw.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-96",
    "name": "Fountain Design #15",
    "slug": "fountain-design-15",
    "category_id": "cat-5",
    "category_name": "Fountain",
    "category_slug": "fountain",
    "description": "Grand multi-tier carved marble fountains, water bowls, cascading waterfalls, and garden water features. Custom sizes and design variations available upon inquiry.",
    "material": "Rajnagar White Marble",
    "size": "Custom Dimensions Available",
    "finish": "Water Resistant Polish",
    "work_type": "3D Tier Turning & Sculpting",
    "price": "₹80,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 15,
    "images": [
      {
        "id": "img-96-1",
        "product_id": "prod-96",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787817958/gbm-marble-handicrafts/fountain/iwyhtps8karqntfrmt3p.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-97",
    "name": "Fountain Design #16",
    "slug": "fountain-design-16",
    "category_id": "cat-5",
    "category_name": "Fountain",
    "category_slug": "fountain",
    "description": "Grand multi-tier carved marble fountains, water bowls, cascading waterfalls, and garden water features. Custom sizes and design variations available upon inquiry.",
    "material": "Rajnagar White Marble",
    "size": "Custom Dimensions Available",
    "finish": "Water Resistant Polish",
    "work_type": "3D Tier Turning & Sculpting",
    "price": "₹82,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 16,
    "images": [
      {
        "id": "img-97-1",
        "product_id": "prod-97",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787817958/gbm-marble-handicrafts/fountain/ksexcrgsz79krtoonayw.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-98",
    "name": "Fountain Design #17",
    "slug": "fountain-design-17",
    "category_id": "cat-5",
    "category_name": "Fountain",
    "category_slug": "fountain",
    "description": "Grand multi-tier carved marble fountains, water bowls, cascading waterfalls, and garden water features. Custom sizes and design variations available upon inquiry.",
    "material": "Rajnagar White Marble",
    "size": "Custom Dimensions Available",
    "finish": "Water Resistant Polish",
    "work_type": "3D Tier Turning & Sculpting",
    "price": "₹85,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 17,
    "images": [
      {
        "id": "img-98-1",
        "product_id": "prod-98",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787817958/gbm-marble-handicrafts/fountain/ybavt6wgorltbhm1tmwl.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-99",
    "name": "Fountain Design #18",
    "slug": "fountain-design-18",
    "category_id": "cat-5",
    "category_name": "Fountain",
    "category_slug": "fountain",
    "description": "Grand multi-tier carved marble fountains, water bowls, cascading waterfalls, and garden water features. Custom sizes and design variations available upon inquiry.",
    "material": "Rajnagar White Marble",
    "size": "Custom Dimensions Available",
    "finish": "Water Resistant Polish",
    "work_type": "3D Tier Turning & Sculpting",
    "price": "₹87,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 18,
    "images": [
      {
        "id": "img-99-1",
        "product_id": "prod-99",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787817957/gbm-marble-handicrafts/fountain/rtd6i9d9mhwjjhghj8la.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-100",
    "name": "Fountain Design #19",
    "slug": "fountain-design-19",
    "category_id": "cat-5",
    "category_name": "Fountain",
    "category_slug": "fountain",
    "description": "Grand multi-tier carved marble fountains, water bowls, cascading waterfalls, and garden water features. Custom sizes and design variations available upon inquiry.",
    "material": "Rajnagar White Marble",
    "size": "Custom Dimensions Available",
    "finish": "Water Resistant Polish",
    "work_type": "3D Tier Turning & Sculpting",
    "price": "₹90,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 19,
    "images": [
      {
        "id": "img-100-1",
        "product_id": "prod-100",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787817960/gbm-marble-handicrafts/fountain/z7fbwxq5kxxziwn8bdil.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-101",
    "name": "Fountain Design #20",
    "slug": "fountain-design-20",
    "category_id": "cat-5",
    "category_name": "Fountain",
    "category_slug": "fountain",
    "description": "Grand multi-tier carved marble fountains, water bowls, cascading waterfalls, and garden water features. Custom sizes and design variations available upon inquiry.",
    "material": "Rajnagar White Marble",
    "size": "Custom Dimensions Available",
    "finish": "Water Resistant Polish",
    "work_type": "3D Tier Turning & Sculpting",
    "price": "₹92,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 20,
    "images": [
      {
        "id": "img-101-1",
        "product_id": "prod-101",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787817977/gbm-marble-handicrafts/fountain/ulx0ftxvd1juj9enb6mo.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-102",
    "name": "Fountain Design #21",
    "slug": "fountain-design-21",
    "category_id": "cat-5",
    "category_name": "Fountain",
    "category_slug": "fountain",
    "description": "Grand multi-tier carved marble fountains, water bowls, cascading waterfalls, and garden water features. Custom sizes and design variations available upon inquiry.",
    "material": "Rajnagar White Marble",
    "size": "Custom Dimensions Available",
    "finish": "Water Resistant Polish",
    "work_type": "3D Tier Turning & Sculpting",
    "price": "₹95,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 21,
    "images": [
      {
        "id": "img-102-1",
        "product_id": "prod-102",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787817994/gbm-marble-handicrafts/fountain/xynht53aiqz8pc2uxkmd.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-103",
    "name": "God Statues Design #1",
    "slug": "god-statues-design-1",
    "category_id": "cat-6",
    "category_name": "God Statues",
    "category_slug": "god-statues",
    "description": "Divine handcrafted white Makrana marble deity idols including Lord Ganesha, Shiva, Krishna, Hanuman, and Ram Darbar. Custom sizes and design variations available upon inquiry.",
    "material": "Pure White Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "Gold Emboss & Diamond Polish",
    "work_type": "Master Hand Carving",
    "price": "₹55,000",
    "is_featured": true,
    "is_published": true,
    "sort_order": 1,
    "images": [
      {
        "id": "img-103-1",
        "product_id": "prod-103",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818005/gbm-marble-handicrafts/god-statues/t3vcepigqrv49y6vq6sl.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-104",
    "name": "God Statues Design #2",
    "slug": "god-statues-design-2",
    "category_id": "cat-6",
    "category_name": "God Statues",
    "category_slug": "god-statues",
    "description": "Divine handcrafted white Makrana marble deity idols including Lord Ganesha, Shiva, Krishna, Hanuman, and Ram Darbar. Custom sizes and design variations available upon inquiry.",
    "material": "Pure White Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "Gold Emboss & Diamond Polish",
    "work_type": "Master Hand Carving",
    "price": "₹57,500",
    "is_featured": true,
    "is_published": true,
    "sort_order": 2,
    "images": [
      {
        "id": "img-104-1",
        "product_id": "prod-104",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818006/gbm-marble-handicrafts/god-statues/xqgzpv0fjicmzm2girst.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-105",
    "name": "God Statues Design #3",
    "slug": "god-statues-design-3",
    "category_id": "cat-6",
    "category_name": "God Statues",
    "category_slug": "god-statues",
    "description": "Divine handcrafted white Makrana marble deity idols including Lord Ganesha, Shiva, Krishna, Hanuman, and Ram Darbar. Custom sizes and design variations available upon inquiry.",
    "material": "Pure White Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "Gold Emboss & Diamond Polish",
    "work_type": "Master Hand Carving",
    "price": "₹60,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 3,
    "images": [
      {
        "id": "img-105-1",
        "product_id": "prod-105",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818005/gbm-marble-handicrafts/god-statues/lnd5yy8pllsyyfiqhze9.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-106",
    "name": "God Statues Design #4",
    "slug": "god-statues-design-4",
    "category_id": "cat-6",
    "category_name": "God Statues",
    "category_slug": "god-statues",
    "description": "Divine handcrafted white Makrana marble deity idols including Lord Ganesha, Shiva, Krishna, Hanuman, and Ram Darbar. Custom sizes and design variations available upon inquiry.",
    "material": "Pure White Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "Gold Emboss & Diamond Polish",
    "work_type": "Master Hand Carving",
    "price": "₹62,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 4,
    "images": [
      {
        "id": "img-106-1",
        "product_id": "prod-106",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818005/gbm-marble-handicrafts/god-statues/xzgy3r2euvzy0mkdid0w.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-107",
    "name": "God Statues Design #5",
    "slug": "god-statues-design-5",
    "category_id": "cat-6",
    "category_name": "God Statues",
    "category_slug": "god-statues",
    "description": "Divine handcrafted white Makrana marble deity idols including Lord Ganesha, Shiva, Krishna, Hanuman, and Ram Darbar. Custom sizes and design variations available upon inquiry.",
    "material": "Pure White Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "Gold Emboss & Diamond Polish",
    "work_type": "Master Hand Carving",
    "price": "₹65,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 5,
    "images": [
      {
        "id": "img-107-1",
        "product_id": "prod-107",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818005/gbm-marble-handicrafts/god-statues/ctyfzgww07fcdbscovam.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-108",
    "name": "God Statues Design #6",
    "slug": "god-statues-design-6",
    "category_id": "cat-6",
    "category_name": "God Statues",
    "category_slug": "god-statues",
    "description": "Divine handcrafted white Makrana marble deity idols including Lord Ganesha, Shiva, Krishna, Hanuman, and Ram Darbar. Custom sizes and design variations available upon inquiry.",
    "material": "Pure White Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "Gold Emboss & Diamond Polish",
    "work_type": "Master Hand Carving",
    "price": "₹67,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 6,
    "images": [
      {
        "id": "img-108-1",
        "product_id": "prod-108",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818004/gbm-marble-handicrafts/god-statues/azvsyurguqtarhm6fk4w.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-109",
    "name": "God Statues Design #7",
    "slug": "god-statues-design-7",
    "category_id": "cat-6",
    "category_name": "God Statues",
    "category_slug": "god-statues",
    "description": "Divine handcrafted white Makrana marble deity idols including Lord Ganesha, Shiva, Krishna, Hanuman, and Ram Darbar. Custom sizes and design variations available upon inquiry.",
    "material": "Pure White Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "Gold Emboss & Diamond Polish",
    "work_type": "Master Hand Carving",
    "price": "₹70,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 7,
    "images": [
      {
        "id": "img-109-1",
        "product_id": "prod-109",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818009/gbm-marble-handicrafts/god-statues/wqxf8wd2vxsw46e84ujy.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-110",
    "name": "God Statues Design #8",
    "slug": "god-statues-design-8",
    "category_id": "cat-6",
    "category_name": "God Statues",
    "category_slug": "god-statues",
    "description": "Divine handcrafted white Makrana marble deity idols including Lord Ganesha, Shiva, Krishna, Hanuman, and Ram Darbar. Custom sizes and design variations available upon inquiry.",
    "material": "Pure White Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "Gold Emboss & Diamond Polish",
    "work_type": "Master Hand Carving",
    "price": "₹72,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 8,
    "images": [
      {
        "id": "img-110-1",
        "product_id": "prod-110",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818009/gbm-marble-handicrafts/god-statues/h0dlpvildcezpx9wmoce.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-111",
    "name": "God Statues Design #9",
    "slug": "god-statues-design-9",
    "category_id": "cat-6",
    "category_name": "God Statues",
    "category_slug": "god-statues",
    "description": "Divine handcrafted white Makrana marble deity idols including Lord Ganesha, Shiva, Krishna, Hanuman, and Ram Darbar. Custom sizes and design variations available upon inquiry.",
    "material": "Pure White Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "Gold Emboss & Diamond Polish",
    "work_type": "Master Hand Carving",
    "price": "₹75,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 9,
    "images": [
      {
        "id": "img-111-1",
        "product_id": "prod-111",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818008/gbm-marble-handicrafts/god-statues/fzyejhhum5rhzvnucbnu.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-112",
    "name": "God Statues Design #10",
    "slug": "god-statues-design-10",
    "category_id": "cat-6",
    "category_name": "God Statues",
    "category_slug": "god-statues",
    "description": "Divine handcrafted white Makrana marble deity idols including Lord Ganesha, Shiva, Krishna, Hanuman, and Ram Darbar. Custom sizes and design variations available upon inquiry.",
    "material": "Pure White Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "Gold Emboss & Diamond Polish",
    "work_type": "Master Hand Carving",
    "price": "₹77,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 10,
    "images": [
      {
        "id": "img-112-1",
        "product_id": "prod-112",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818009/gbm-marble-handicrafts/god-statues/wi5fxgd6pyn8awrhkcet.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-113",
    "name": "God Statues Design #11",
    "slug": "god-statues-design-11",
    "category_id": "cat-6",
    "category_name": "God Statues",
    "category_slug": "god-statues",
    "description": "Divine handcrafted white Makrana marble deity idols including Lord Ganesha, Shiva, Krishna, Hanuman, and Ram Darbar. Custom sizes and design variations available upon inquiry.",
    "material": "Pure White Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "Gold Emboss & Diamond Polish",
    "work_type": "Master Hand Carving",
    "price": "₹80,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 11,
    "images": [
      {
        "id": "img-113-1",
        "product_id": "prod-113",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818009/gbm-marble-handicrafts/god-statues/fomko6caac1qoxdcqedx.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-114",
    "name": "God Statues Design #12",
    "slug": "god-statues-design-12",
    "category_id": "cat-6",
    "category_name": "God Statues",
    "category_slug": "god-statues",
    "description": "Divine handcrafted white Makrana marble deity idols including Lord Ganesha, Shiva, Krishna, Hanuman, and Ram Darbar. Custom sizes and design variations available upon inquiry.",
    "material": "Pure White Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "Gold Emboss & Diamond Polish",
    "work_type": "Master Hand Carving",
    "price": "₹82,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 12,
    "images": [
      {
        "id": "img-114-1",
        "product_id": "prod-114",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818010/gbm-marble-handicrafts/god-statues/qvnhcis8hd0s4c7pjeru.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-115",
    "name": "God Statues Design #13",
    "slug": "god-statues-design-13",
    "category_id": "cat-6",
    "category_name": "God Statues",
    "category_slug": "god-statues",
    "description": "Divine handcrafted white Makrana marble deity idols including Lord Ganesha, Shiva, Krishna, Hanuman, and Ram Darbar. Custom sizes and design variations available upon inquiry.",
    "material": "Pure White Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "Gold Emboss & Diamond Polish",
    "work_type": "Master Hand Carving",
    "price": "₹85,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 13,
    "images": [
      {
        "id": "img-115-1",
        "product_id": "prod-115",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818011/gbm-marble-handicrafts/god-statues/fulxjcgwopb5ew9n5dnw.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-116",
    "name": "God Statues Design #14",
    "slug": "god-statues-design-14",
    "category_id": "cat-6",
    "category_name": "God Statues",
    "category_slug": "god-statues",
    "description": "Divine handcrafted white Makrana marble deity idols including Lord Ganesha, Shiva, Krishna, Hanuman, and Ram Darbar. Custom sizes and design variations available upon inquiry.",
    "material": "Pure White Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "Gold Emboss & Diamond Polish",
    "work_type": "Master Hand Carving",
    "price": "₹87,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 14,
    "images": [
      {
        "id": "img-116-1",
        "product_id": "prod-116",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818012/gbm-marble-handicrafts/god-statues/qdwsy757pjmjpafiokow.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-117",
    "name": "God Statues Design #15",
    "slug": "god-statues-design-15",
    "category_id": "cat-6",
    "category_name": "God Statues",
    "category_slug": "god-statues",
    "description": "Divine handcrafted white Makrana marble deity idols including Lord Ganesha, Shiva, Krishna, Hanuman, and Ram Darbar. Custom sizes and design variations available upon inquiry.",
    "material": "Pure White Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "Gold Emboss & Diamond Polish",
    "work_type": "Master Hand Carving",
    "price": "₹90,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 15,
    "images": [
      {
        "id": "img-117-1",
        "product_id": "prod-117",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818012/gbm-marble-handicrafts/god-statues/kg1msisod8njltxzicas.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-118",
    "name": "God Statues Design #16",
    "slug": "god-statues-design-16",
    "category_id": "cat-6",
    "category_name": "God Statues",
    "category_slug": "god-statues",
    "description": "Divine handcrafted white Makrana marble deity idols including Lord Ganesha, Shiva, Krishna, Hanuman, and Ram Darbar. Custom sizes and design variations available upon inquiry.",
    "material": "Pure White Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "Gold Emboss & Diamond Polish",
    "work_type": "Master Hand Carving",
    "price": "₹92,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 16,
    "images": [
      {
        "id": "img-118-1",
        "product_id": "prod-118",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818011/gbm-marble-handicrafts/god-statues/svaruyjplmaof9uv4pzf.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-119",
    "name": "God Statues Design #17",
    "slug": "god-statues-design-17",
    "category_id": "cat-6",
    "category_name": "God Statues",
    "category_slug": "god-statues",
    "description": "Divine handcrafted white Makrana marble deity idols including Lord Ganesha, Shiva, Krishna, Hanuman, and Ram Darbar. Custom sizes and design variations available upon inquiry.",
    "material": "Pure White Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "Gold Emboss & Diamond Polish",
    "work_type": "Master Hand Carving",
    "price": "₹95,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 17,
    "images": [
      {
        "id": "img-119-1",
        "product_id": "prod-119",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818011/gbm-marble-handicrafts/god-statues/xpoxwwasbd6xxpmmdmxj.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-120",
    "name": "God Statues Design #18",
    "slug": "god-statues-design-18",
    "category_id": "cat-6",
    "category_name": "God Statues",
    "category_slug": "god-statues",
    "description": "Divine handcrafted white Makrana marble deity idols including Lord Ganesha, Shiva, Krishna, Hanuman, and Ram Darbar. Custom sizes and design variations available upon inquiry.",
    "material": "Pure White Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "Gold Emboss & Diamond Polish",
    "work_type": "Master Hand Carving",
    "price": "₹97,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 18,
    "images": [
      {
        "id": "img-120-1",
        "product_id": "prod-120",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818012/gbm-marble-handicrafts/god-statues/pqttilcbrjx9b1xfywzk.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-121",
    "name": "God Statues Design #19",
    "slug": "god-statues-design-19",
    "category_id": "cat-6",
    "category_name": "God Statues",
    "category_slug": "god-statues",
    "description": "Divine handcrafted white Makrana marble deity idols including Lord Ganesha, Shiva, Krishna, Hanuman, and Ram Darbar. Custom sizes and design variations available upon inquiry.",
    "material": "Pure White Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "Gold Emboss & Diamond Polish",
    "work_type": "Master Hand Carving",
    "price": "₹1,00,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 19,
    "images": [
      {
        "id": "img-121-1",
        "product_id": "prod-121",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818014/gbm-marble-handicrafts/god-statues/firy7xro1uasui6hrlru.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-122",
    "name": "God Statues Design #20",
    "slug": "god-statues-design-20",
    "category_id": "cat-6",
    "category_name": "God Statues",
    "category_slug": "god-statues",
    "description": "Divine handcrafted white Makrana marble deity idols including Lord Ganesha, Shiva, Krishna, Hanuman, and Ram Darbar. Custom sizes and design variations available upon inquiry.",
    "material": "Pure White Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "Gold Emboss & Diamond Polish",
    "work_type": "Master Hand Carving",
    "price": "₹1,02,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 20,
    "images": [
      {
        "id": "img-122-1",
        "product_id": "prod-122",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818014/gbm-marble-handicrafts/god-statues/ffe0sm6qbwzngf1c144c.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-123",
    "name": "God Statues Design #21",
    "slug": "god-statues-design-21",
    "category_id": "cat-6",
    "category_name": "God Statues",
    "category_slug": "god-statues",
    "description": "Divine handcrafted white Makrana marble deity idols including Lord Ganesha, Shiva, Krishna, Hanuman, and Ram Darbar. Custom sizes and design variations available upon inquiry.",
    "material": "Pure White Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "Gold Emboss & Diamond Polish",
    "work_type": "Master Hand Carving",
    "price": "₹1,05,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 21,
    "images": [
      {
        "id": "img-123-1",
        "product_id": "prod-123",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818014/gbm-marble-handicrafts/god-statues/tx1xzeg7vhlet4z9gjsz.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-124",
    "name": "God Statues Design #22",
    "slug": "god-statues-design-22",
    "category_id": "cat-6",
    "category_name": "God Statues",
    "category_slug": "god-statues",
    "description": "Divine handcrafted white Makrana marble deity idols including Lord Ganesha, Shiva, Krishna, Hanuman, and Ram Darbar. Custom sizes and design variations available upon inquiry.",
    "material": "Pure White Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "Gold Emboss & Diamond Polish",
    "work_type": "Master Hand Carving",
    "price": "₹1,07,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 22,
    "images": [
      {
        "id": "img-124-1",
        "product_id": "prod-124",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818014/gbm-marble-handicrafts/god-statues/ofnwm2cevgk4eafojtmh.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-125",
    "name": "God Statues Design #23",
    "slug": "god-statues-design-23",
    "category_id": "cat-6",
    "category_name": "God Statues",
    "category_slug": "god-statues",
    "description": "Divine handcrafted white Makrana marble deity idols including Lord Ganesha, Shiva, Krishna, Hanuman, and Ram Darbar. Custom sizes and design variations available upon inquiry.",
    "material": "Pure White Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "Gold Emboss & Diamond Polish",
    "work_type": "Master Hand Carving",
    "price": "₹1,10,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 23,
    "images": [
      {
        "id": "img-125-1",
        "product_id": "prod-125",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818014/gbm-marble-handicrafts/god-statues/w9zqvm6fd5kgylqjkhhw.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-126",
    "name": "God Statues Design #24",
    "slug": "god-statues-design-24",
    "category_id": "cat-6",
    "category_name": "God Statues",
    "category_slug": "god-statues",
    "description": "Divine handcrafted white Makrana marble deity idols including Lord Ganesha, Shiva, Krishna, Hanuman, and Ram Darbar. Custom sizes and design variations available upon inquiry.",
    "material": "Pure White Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "Gold Emboss & Diamond Polish",
    "work_type": "Master Hand Carving",
    "price": "₹1,12,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 24,
    "images": [
      {
        "id": "img-126-1",
        "product_id": "prod-126",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818014/gbm-marble-handicrafts/god-statues/j2qgiuay2dcvmxljdpv9.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-127",
    "name": "God Statues Design #25",
    "slug": "god-statues-design-25",
    "category_id": "cat-6",
    "category_name": "God Statues",
    "category_slug": "god-statues",
    "description": "Divine handcrafted white Makrana marble deity idols including Lord Ganesha, Shiva, Krishna, Hanuman, and Ram Darbar. Custom sizes and design variations available upon inquiry.",
    "material": "Pure White Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "Gold Emboss & Diamond Polish",
    "work_type": "Master Hand Carving",
    "price": "₹1,15,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 25,
    "images": [
      {
        "id": "img-127-1",
        "product_id": "prod-127",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818019/gbm-marble-handicrafts/god-statues/bi6kjnnpyavsugkzrkeu.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-128",
    "name": "God Statues Design #26",
    "slug": "god-statues-design-26",
    "category_id": "cat-6",
    "category_name": "God Statues",
    "category_slug": "god-statues",
    "description": "Divine handcrafted white Makrana marble deity idols including Lord Ganesha, Shiva, Krishna, Hanuman, and Ram Darbar. Custom sizes and design variations available upon inquiry.",
    "material": "Pure White Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "Gold Emboss & Diamond Polish",
    "work_type": "Master Hand Carving",
    "price": "₹1,17,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 26,
    "images": [
      {
        "id": "img-128-1",
        "product_id": "prod-128",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818018/gbm-marble-handicrafts/god-statues/daomvmf9c4gr6f1ztmei.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-129",
    "name": "God Statues Design #27",
    "slug": "god-statues-design-27",
    "category_id": "cat-6",
    "category_name": "God Statues",
    "category_slug": "god-statues",
    "description": "Divine handcrafted white Makrana marble deity idols including Lord Ganesha, Shiva, Krishna, Hanuman, and Ram Darbar. Custom sizes and design variations available upon inquiry.",
    "material": "Pure White Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "Gold Emboss & Diamond Polish",
    "work_type": "Master Hand Carving",
    "price": "₹1,20,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 27,
    "images": [
      {
        "id": "img-129-1",
        "product_id": "prod-129",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818018/gbm-marble-handicrafts/god-statues/enhge8aq8cgqpbnciake.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-130",
    "name": "God Statues Design #28",
    "slug": "god-statues-design-28",
    "category_id": "cat-6",
    "category_name": "God Statues",
    "category_slug": "god-statues",
    "description": "Divine handcrafted white Makrana marble deity idols including Lord Ganesha, Shiva, Krishna, Hanuman, and Ram Darbar. Custom sizes and design variations available upon inquiry.",
    "material": "Pure White Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "Gold Emboss & Diamond Polish",
    "work_type": "Master Hand Carving",
    "price": "₹1,22,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 28,
    "images": [
      {
        "id": "img-130-1",
        "product_id": "prod-130",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818018/gbm-marble-handicrafts/god-statues/k1gk4k0pwddp87ojes1d.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-131",
    "name": "God Statues Design #29",
    "slug": "god-statues-design-29",
    "category_id": "cat-6",
    "category_name": "God Statues",
    "category_slug": "god-statues",
    "description": "Divine handcrafted white Makrana marble deity idols including Lord Ganesha, Shiva, Krishna, Hanuman, and Ram Darbar. Custom sizes and design variations available upon inquiry.",
    "material": "Pure White Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "Gold Emboss & Diamond Polish",
    "work_type": "Master Hand Carving",
    "price": "₹1,25,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 29,
    "images": [
      {
        "id": "img-131-1",
        "product_id": "prod-131",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818018/gbm-marble-handicrafts/god-statues/g0pq66qfvvxv7ztyqaat.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-132",
    "name": "God Statues Design #30",
    "slug": "god-statues-design-30",
    "category_id": "cat-6",
    "category_name": "God Statues",
    "category_slug": "god-statues",
    "description": "Divine handcrafted white Makrana marble deity idols including Lord Ganesha, Shiva, Krishna, Hanuman, and Ram Darbar. Custom sizes and design variations available upon inquiry.",
    "material": "Pure White Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "Gold Emboss & Diamond Polish",
    "work_type": "Master Hand Carving",
    "price": "₹1,27,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 30,
    "images": [
      {
        "id": "img-132-1",
        "product_id": "prod-132",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818018/gbm-marble-handicrafts/god-statues/oyo9meihjifxsyondtvl.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-133",
    "name": "God Statues Design #31",
    "slug": "god-statues-design-31",
    "category_id": "cat-6",
    "category_name": "God Statues",
    "category_slug": "god-statues",
    "description": "Divine handcrafted white Makrana marble deity idols including Lord Ganesha, Shiva, Krishna, Hanuman, and Ram Darbar. Custom sizes and design variations available upon inquiry.",
    "material": "Pure White Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "Gold Emboss & Diamond Polish",
    "work_type": "Master Hand Carving",
    "price": "₹1,30,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 31,
    "images": [
      {
        "id": "img-133-1",
        "product_id": "prod-133",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818021/gbm-marble-handicrafts/god-statues/yrwembwyt4rtkq8onsgo.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-134",
    "name": "God Statues Design #32",
    "slug": "god-statues-design-32",
    "category_id": "cat-6",
    "category_name": "God Statues",
    "category_slug": "god-statues",
    "description": "Divine handcrafted white Makrana marble deity idols including Lord Ganesha, Shiva, Krishna, Hanuman, and Ram Darbar. Custom sizes and design variations available upon inquiry.",
    "material": "Pure White Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "Gold Emboss & Diamond Polish",
    "work_type": "Master Hand Carving",
    "price": "₹1,32,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 32,
    "images": [
      {
        "id": "img-134-1",
        "product_id": "prod-134",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818022/gbm-marble-handicrafts/god-statues/kq51xn8b94m4gzhfp46o.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-135",
    "name": "God Statues Design #33",
    "slug": "god-statues-design-33",
    "category_id": "cat-6",
    "category_name": "God Statues",
    "category_slug": "god-statues",
    "description": "Divine handcrafted white Makrana marble deity idols including Lord Ganesha, Shiva, Krishna, Hanuman, and Ram Darbar. Custom sizes and design variations available upon inquiry.",
    "material": "Pure White Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "Gold Emboss & Diamond Polish",
    "work_type": "Master Hand Carving",
    "price": "₹1,35,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 33,
    "images": [
      {
        "id": "img-135-1",
        "product_id": "prod-135",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818022/gbm-marble-handicrafts/god-statues/aetcunggyfguigv8gujq.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-136",
    "name": "God Statues Design #34",
    "slug": "god-statues-design-34",
    "category_id": "cat-6",
    "category_name": "God Statues",
    "category_slug": "god-statues",
    "description": "Divine handcrafted white Makrana marble deity idols including Lord Ganesha, Shiva, Krishna, Hanuman, and Ram Darbar. Custom sizes and design variations available upon inquiry.",
    "material": "Pure White Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "Gold Emboss & Diamond Polish",
    "work_type": "Master Hand Carving",
    "price": "₹1,37,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 34,
    "images": [
      {
        "id": "img-136-1",
        "product_id": "prod-136",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818023/gbm-marble-handicrafts/god-statues/j6lgvbr0pooubmosz4pp.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-137",
    "name": "God Statues Design #35",
    "slug": "god-statues-design-35",
    "category_id": "cat-6",
    "category_name": "God Statues",
    "category_slug": "god-statues",
    "description": "Divine handcrafted white Makrana marble deity idols including Lord Ganesha, Shiva, Krishna, Hanuman, and Ram Darbar. Custom sizes and design variations available upon inquiry.",
    "material": "Pure White Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "Gold Emboss & Diamond Polish",
    "work_type": "Master Hand Carving",
    "price": "₹1,40,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 35,
    "images": [
      {
        "id": "img-137-1",
        "product_id": "prod-137",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818022/gbm-marble-handicrafts/god-statues/rfxidq9otamoxe9t6lkr.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-138",
    "name": "God Statues Design #36",
    "slug": "god-statues-design-36",
    "category_id": "cat-6",
    "category_name": "God Statues",
    "category_slug": "god-statues",
    "description": "Divine handcrafted white Makrana marble deity idols including Lord Ganesha, Shiva, Krishna, Hanuman, and Ram Darbar. Custom sizes and design variations available upon inquiry.",
    "material": "Pure White Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "Gold Emboss & Diamond Polish",
    "work_type": "Master Hand Carving",
    "price": "₹1,42,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 36,
    "images": [
      {
        "id": "img-138-1",
        "product_id": "prod-138",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818023/gbm-marble-handicrafts/god-statues/e4y2ux7dpachil2i1f5y.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-139",
    "name": "God Statues Design #37",
    "slug": "god-statues-design-37",
    "category_id": "cat-6",
    "category_name": "God Statues",
    "category_slug": "god-statues",
    "description": "Divine handcrafted white Makrana marble deity idols including Lord Ganesha, Shiva, Krishna, Hanuman, and Ram Darbar. Custom sizes and design variations available upon inquiry.",
    "material": "Pure White Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "Gold Emboss & Diamond Polish",
    "work_type": "Master Hand Carving",
    "price": "₹1,45,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 37,
    "images": [
      {
        "id": "img-139-1",
        "product_id": "prod-139",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818026/gbm-marble-handicrafts/god-statues/qfykuvjdkqbfjznjuruq.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-140",
    "name": "God Statues Design #38",
    "slug": "god-statues-design-38",
    "category_id": "cat-6",
    "category_name": "God Statues",
    "category_slug": "god-statues",
    "description": "Divine handcrafted white Makrana marble deity idols including Lord Ganesha, Shiva, Krishna, Hanuman, and Ram Darbar. Custom sizes and design variations available upon inquiry.",
    "material": "Pure White Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "Gold Emboss & Diamond Polish",
    "work_type": "Master Hand Carving",
    "price": "₹1,47,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 38,
    "images": [
      {
        "id": "img-140-1",
        "product_id": "prod-140",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818026/gbm-marble-handicrafts/god-statues/n2j7f3sgacexxezysqn5.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-141",
    "name": "God Statues Design #39",
    "slug": "god-statues-design-39",
    "category_id": "cat-6",
    "category_name": "God Statues",
    "category_slug": "god-statues",
    "description": "Divine handcrafted white Makrana marble deity idols including Lord Ganesha, Shiva, Krishna, Hanuman, and Ram Darbar. Custom sizes and design variations available upon inquiry.",
    "material": "Pure White Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "Gold Emboss & Diamond Polish",
    "work_type": "Master Hand Carving",
    "price": "₹1,50,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 39,
    "images": [
      {
        "id": "img-141-1",
        "product_id": "prod-141",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818027/gbm-marble-handicrafts/god-statues/d7xobvxvqm29aawrbmkj.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-142",
    "name": "God Statues Design #40",
    "slug": "god-statues-design-40",
    "category_id": "cat-6",
    "category_name": "God Statues",
    "category_slug": "god-statues",
    "description": "Divine handcrafted white Makrana marble deity idols including Lord Ganesha, Shiva, Krishna, Hanuman, and Ram Darbar. Custom sizes and design variations available upon inquiry.",
    "material": "Pure White Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "Gold Emboss & Diamond Polish",
    "work_type": "Master Hand Carving",
    "price": "₹1,52,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 40,
    "images": [
      {
        "id": "img-142-1",
        "product_id": "prod-142",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818026/gbm-marble-handicrafts/god-statues/yi0wbtl9vvta0mffda35.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-143",
    "name": "God Statues Design #41",
    "slug": "god-statues-design-41",
    "category_id": "cat-6",
    "category_name": "God Statues",
    "category_slug": "god-statues",
    "description": "Divine handcrafted white Makrana marble deity idols including Lord Ganesha, Shiva, Krishna, Hanuman, and Ram Darbar. Custom sizes and design variations available upon inquiry.",
    "material": "Pure White Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "Gold Emboss & Diamond Polish",
    "work_type": "Master Hand Carving",
    "price": "₹1,55,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 41,
    "images": [
      {
        "id": "img-143-1",
        "product_id": "prod-143",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818027/gbm-marble-handicrafts/god-statues/slwlxtzxp5ik6vpczgpt.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-144",
    "name": "God Statues Design #42",
    "slug": "god-statues-design-42",
    "category_id": "cat-6",
    "category_name": "God Statues",
    "category_slug": "god-statues",
    "description": "Divine handcrafted white Makrana marble deity idols including Lord Ganesha, Shiva, Krishna, Hanuman, and Ram Darbar. Custom sizes and design variations available upon inquiry.",
    "material": "Pure White Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "Gold Emboss & Diamond Polish",
    "work_type": "Master Hand Carving",
    "price": "₹1,57,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 42,
    "images": [
      {
        "id": "img-144-1",
        "product_id": "prod-144",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818026/gbm-marble-handicrafts/god-statues/qowd96u5nptkhip7xcuh.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-145",
    "name": "God Statues Design #43",
    "slug": "god-statues-design-43",
    "category_id": "cat-6",
    "category_name": "God Statues",
    "category_slug": "god-statues",
    "description": "Divine handcrafted white Makrana marble deity idols including Lord Ganesha, Shiva, Krishna, Hanuman, and Ram Darbar. Custom sizes and design variations available upon inquiry.",
    "material": "Pure White Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "Gold Emboss & Diamond Polish",
    "work_type": "Master Hand Carving",
    "price": "₹1,60,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 43,
    "images": [
      {
        "id": "img-145-1",
        "product_id": "prod-145",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818031/gbm-marble-handicrafts/god-statues/qgxbkkc3fyaqku7dnjzg.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-146",
    "name": "God Statues Design #44",
    "slug": "god-statues-design-44",
    "category_id": "cat-6",
    "category_name": "God Statues",
    "category_slug": "god-statues",
    "description": "Divine handcrafted white Makrana marble deity idols including Lord Ganesha, Shiva, Krishna, Hanuman, and Ram Darbar. Custom sizes and design variations available upon inquiry.",
    "material": "Pure White Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "Gold Emboss & Diamond Polish",
    "work_type": "Master Hand Carving",
    "price": "₹1,62,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 44,
    "images": [
      {
        "id": "img-146-1",
        "product_id": "prod-146",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818032/gbm-marble-handicrafts/god-statues/xtgbybjwvtp7zjrlocvn.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-147",
    "name": "God Statues Design #45",
    "slug": "god-statues-design-45",
    "category_id": "cat-6",
    "category_name": "God Statues",
    "category_slug": "god-statues",
    "description": "Divine handcrafted white Makrana marble deity idols including Lord Ganesha, Shiva, Krishna, Hanuman, and Ram Darbar. Custom sizes and design variations available upon inquiry.",
    "material": "Pure White Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "Gold Emboss & Diamond Polish",
    "work_type": "Master Hand Carving",
    "price": "₹1,65,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 45,
    "images": [
      {
        "id": "img-147-1",
        "product_id": "prod-147",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818086/gbm-marble-handicrafts/god-statues/oxbirjlagbyt61mzuiwe.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-148",
    "name": "God Statues Design #46",
    "slug": "god-statues-design-46",
    "category_id": "cat-6",
    "category_name": "God Statues",
    "category_slug": "god-statues",
    "description": "Divine handcrafted white Makrana marble deity idols including Lord Ganesha, Shiva, Krishna, Hanuman, and Ram Darbar. Custom sizes and design variations available upon inquiry.",
    "material": "Pure White Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "Gold Emboss & Diamond Polish",
    "work_type": "Master Hand Carving",
    "price": "₹1,67,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 46,
    "images": [
      {
        "id": "img-148-1",
        "product_id": "prod-148",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818057/gbm-marble-handicrafts/god-statues/zckerm1hk9imbqdxv2wr.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-149",
    "name": "God Statues Design #47",
    "slug": "god-statues-design-47",
    "category_id": "cat-6",
    "category_name": "God Statues",
    "category_slug": "god-statues",
    "description": "Divine handcrafted white Makrana marble deity idols including Lord Ganesha, Shiva, Krishna, Hanuman, and Ram Darbar. Custom sizes and design variations available upon inquiry.",
    "material": "Pure White Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "Gold Emboss & Diamond Polish",
    "work_type": "Master Hand Carving",
    "price": "₹1,70,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 47,
    "images": [
      {
        "id": "img-149-1",
        "product_id": "prod-149",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818080/gbm-marble-handicrafts/god-statues/vkfwvprcwys77wvnhqhl.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-150",
    "name": "God Statues Design #48",
    "slug": "god-statues-design-48",
    "category_id": "cat-6",
    "category_name": "God Statues",
    "category_slug": "god-statues",
    "description": "Divine handcrafted white Makrana marble deity idols including Lord Ganesha, Shiva, Krishna, Hanuman, and Ram Darbar. Custom sizes and design variations available upon inquiry.",
    "material": "Pure White Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "Gold Emboss & Diamond Polish",
    "work_type": "Master Hand Carving",
    "price": "₹1,72,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 48,
    "images": [
      {
        "id": "img-150-1",
        "product_id": "prod-150",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818080/gbm-marble-handicrafts/god-statues/lkjfj6nvv2zdbdhavhqe.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-151",
    "name": "God Statues Design #49",
    "slug": "god-statues-design-49",
    "category_id": "cat-6",
    "category_name": "God Statues",
    "category_slug": "god-statues",
    "description": "Divine handcrafted white Makrana marble deity idols including Lord Ganesha, Shiva, Krishna, Hanuman, and Ram Darbar. Custom sizes and design variations available upon inquiry.",
    "material": "Pure White Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "Gold Emboss & Diamond Polish",
    "work_type": "Master Hand Carving",
    "price": "₹1,75,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 49,
    "images": [
      {
        "id": "img-151-1",
        "product_id": "prod-151",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818135/gbm-marble-handicrafts/god-statues/jbnivndldb3jnwerkqit.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-152",
    "name": "God Statues Design #50",
    "slug": "god-statues-design-50",
    "category_id": "cat-6",
    "category_name": "God Statues",
    "category_slug": "god-statues",
    "description": "Divine handcrafted white Makrana marble deity idols including Lord Ganesha, Shiva, Krishna, Hanuman, and Ram Darbar. Custom sizes and design variations available upon inquiry.",
    "material": "Pure White Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "Gold Emboss & Diamond Polish",
    "work_type": "Master Hand Carving",
    "price": "₹1,77,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 50,
    "images": [
      {
        "id": "img-152-1",
        "product_id": "prod-152",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818161/gbm-marble-handicrafts/god-statues/bra2c91saaqnrs7urw7q.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-153",
    "name": "God Statues Design #51",
    "slug": "god-statues-design-51",
    "category_id": "cat-6",
    "category_name": "God Statues",
    "category_slug": "god-statues",
    "description": "Divine handcrafted white Makrana marble deity idols including Lord Ganesha, Shiva, Krishna, Hanuman, and Ram Darbar. Custom sizes and design variations available upon inquiry.",
    "material": "Pure White Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "Gold Emboss & Diamond Polish",
    "work_type": "Master Hand Carving",
    "price": "₹1,80,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 51,
    "images": [
      {
        "id": "img-153-1",
        "product_id": "prod-153",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818202/gbm-marble-handicrafts/god-statues/dkz2wmhhzlwya0fnace7.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-154",
    "name": "God Statues Design #52",
    "slug": "god-statues-design-52",
    "category_id": "cat-6",
    "category_name": "God Statues",
    "category_slug": "god-statues",
    "description": "Divine handcrafted white Makrana marble deity idols including Lord Ganesha, Shiva, Krishna, Hanuman, and Ram Darbar. Custom sizes and design variations available upon inquiry.",
    "material": "Pure White Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "Gold Emboss & Diamond Polish",
    "work_type": "Master Hand Carving",
    "price": "₹1,82,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 52,
    "images": [
      {
        "id": "img-154-1",
        "product_id": "prod-154",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818183/gbm-marble-handicrafts/god-statues/ej6w51imaen41c10vfkh.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-155",
    "name": "God Statues Design #53",
    "slug": "god-statues-design-53",
    "category_id": "cat-6",
    "category_name": "God Statues",
    "category_slug": "god-statues",
    "description": "Divine handcrafted white Makrana marble deity idols including Lord Ganesha, Shiva, Krishna, Hanuman, and Ram Darbar. Custom sizes and design variations available upon inquiry.",
    "material": "Pure White Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "Gold Emboss & Diamond Polish",
    "work_type": "Master Hand Carving",
    "price": "₹1,85,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 53,
    "images": [
      {
        "id": "img-155-1",
        "product_id": "prod-155",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818192/gbm-marble-handicrafts/god-statues/wbtj9yqoxylldeuscffe.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-156",
    "name": "God Statues Design #54",
    "slug": "god-statues-design-54",
    "category_id": "cat-6",
    "category_name": "God Statues",
    "category_slug": "god-statues",
    "description": "Divine handcrafted white Makrana marble deity idols including Lord Ganesha, Shiva, Krishna, Hanuman, and Ram Darbar. Custom sizes and design variations available upon inquiry.",
    "material": "Pure White Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "Gold Emboss & Diamond Polish",
    "work_type": "Master Hand Carving",
    "price": "₹1,87,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 54,
    "images": [
      {
        "id": "img-156-1",
        "product_id": "prod-156",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818201/gbm-marble-handicrafts/god-statues/tsjfffnclytfswqu7is3.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-157",
    "name": "God Statues Design #55",
    "slug": "god-statues-design-55",
    "category_id": "cat-6",
    "category_name": "God Statues",
    "category_slug": "god-statues",
    "description": "Divine handcrafted white Makrana marble deity idols including Lord Ganesha, Shiva, Krishna, Hanuman, and Ram Darbar. Custom sizes and design variations available upon inquiry.",
    "material": "Pure White Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "Gold Emboss & Diamond Polish",
    "work_type": "Master Hand Carving",
    "price": "₹1,90,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 55,
    "images": [
      {
        "id": "img-157-1",
        "product_id": "prod-157",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818281/gbm-marble-handicrafts/god-statues/o4bkxcnjjepgtxxdvp9r.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-158",
    "name": "God Statues Design #56",
    "slug": "god-statues-design-56",
    "category_id": "cat-6",
    "category_name": "God Statues",
    "category_slug": "god-statues",
    "description": "Divine handcrafted white Makrana marble deity idols including Lord Ganesha, Shiva, Krishna, Hanuman, and Ram Darbar. Custom sizes and design variations available upon inquiry.",
    "material": "Pure White Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "Gold Emboss & Diamond Polish",
    "work_type": "Master Hand Carving",
    "price": "₹1,92,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 56,
    "images": [
      {
        "id": "img-158-1",
        "product_id": "prod-158",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818274/gbm-marble-handicrafts/god-statues/fthqtkuwtx1xvoggdcaw.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-159",
    "name": "God Statues Design #57",
    "slug": "god-statues-design-57",
    "category_id": "cat-6",
    "category_name": "God Statues",
    "category_slug": "god-statues",
    "description": "Divine handcrafted white Makrana marble deity idols including Lord Ganesha, Shiva, Krishna, Hanuman, and Ram Darbar. Custom sizes and design variations available upon inquiry.",
    "material": "Pure White Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "Gold Emboss & Diamond Polish",
    "work_type": "Master Hand Carving",
    "price": "₹1,95,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 57,
    "images": [
      {
        "id": "img-159-1",
        "product_id": "prod-159",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818287/gbm-marble-handicrafts/god-statues/scxsenz1qm04qtnqp5iz.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-160",
    "name": "God Statues Design #58",
    "slug": "god-statues-design-58",
    "category_id": "cat-6",
    "category_name": "God Statues",
    "category_slug": "god-statues",
    "description": "Divine handcrafted white Makrana marble deity idols including Lord Ganesha, Shiva, Krishna, Hanuman, and Ram Darbar. Custom sizes and design variations available upon inquiry.",
    "material": "Pure White Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "Gold Emboss & Diamond Polish",
    "work_type": "Master Hand Carving",
    "price": "₹1,97,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 58,
    "images": [
      {
        "id": "img-160-1",
        "product_id": "prod-160",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818276/gbm-marble-handicrafts/god-statues/fw4qnxswlc0odlqxmktj.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-161",
    "name": "God Statues Design #59",
    "slug": "god-statues-design-59",
    "category_id": "cat-6",
    "category_name": "God Statues",
    "category_slug": "god-statues",
    "description": "Divine handcrafted white Makrana marble deity idols including Lord Ganesha, Shiva, Krishna, Hanuman, and Ram Darbar. Custom sizes and design variations available upon inquiry.",
    "material": "Pure White Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "Gold Emboss & Diamond Polish",
    "work_type": "Master Hand Carving",
    "price": "₹2,00,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 59,
    "images": [
      {
        "id": "img-161-1",
        "product_id": "prod-161",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818319/gbm-marble-handicrafts/god-statues/ko7ljc8edhoba2dq9wjm.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-162",
    "name": "God Statues Design #60",
    "slug": "god-statues-design-60",
    "category_id": "cat-6",
    "category_name": "God Statues",
    "category_slug": "god-statues",
    "description": "Divine handcrafted white Makrana marble deity idols including Lord Ganesha, Shiva, Krishna, Hanuman, and Ram Darbar. Custom sizes and design variations available upon inquiry.",
    "material": "Pure White Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "Gold Emboss & Diamond Polish",
    "work_type": "Master Hand Carving",
    "price": "₹2,02,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 60,
    "images": [
      {
        "id": "img-162-1",
        "product_id": "prod-162",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818306/gbm-marble-handicrafts/god-statues/pkfqyzark0yimcjof48y.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-163",
    "name": "God Statues Design #61",
    "slug": "god-statues-design-61",
    "category_id": "cat-6",
    "category_name": "God Statues",
    "category_slug": "god-statues",
    "description": "Divine handcrafted white Makrana marble deity idols including Lord Ganesha, Shiva, Krishna, Hanuman, and Ram Darbar. Custom sizes and design variations available upon inquiry.",
    "material": "Pure White Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "Gold Emboss & Diamond Polish",
    "work_type": "Master Hand Carving",
    "price": "₹2,05,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 61,
    "images": [
      {
        "id": "img-163-1",
        "product_id": "prod-163",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818383/gbm-marble-handicrafts/god-statues/cowv9chrajkijbkbpelq.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-164",
    "name": "God Statues Design #62",
    "slug": "god-statues-design-62",
    "category_id": "cat-6",
    "category_name": "God Statues",
    "category_slug": "god-statues",
    "description": "Divine handcrafted white Makrana marble deity idols including Lord Ganesha, Shiva, Krishna, Hanuman, and Ram Darbar. Custom sizes and design variations available upon inquiry.",
    "material": "Pure White Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "Gold Emboss & Diamond Polish",
    "work_type": "Master Hand Carving",
    "price": "₹2,07,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 62,
    "images": [
      {
        "id": "img-164-1",
        "product_id": "prod-164",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818421/gbm-marble-handicrafts/god-statues/sntz3umz7rexf0spcyw4.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-165",
    "name": "God Statues Design #63",
    "slug": "god-statues-design-63",
    "category_id": "cat-6",
    "category_name": "God Statues",
    "category_slug": "god-statues",
    "description": "Divine handcrafted white Makrana marble deity idols including Lord Ganesha, Shiva, Krishna, Hanuman, and Ram Darbar. Custom sizes and design variations available upon inquiry.",
    "material": "Pure White Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "Gold Emboss & Diamond Polish",
    "work_type": "Master Hand Carving",
    "price": "₹2,10,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 63,
    "images": [
      {
        "id": "img-165-1",
        "product_id": "prod-165",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818420/gbm-marble-handicrafts/god-statues/deianuq029zfnsqgkg75.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-166",
    "name": "God Statues Design #64",
    "slug": "god-statues-design-64",
    "category_id": "cat-6",
    "category_name": "God Statues",
    "category_slug": "god-statues",
    "description": "Divine handcrafted white Makrana marble deity idols including Lord Ganesha, Shiva, Krishna, Hanuman, and Ram Darbar. Custom sizes and design variations available upon inquiry.",
    "material": "Pure White Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "Gold Emboss & Diamond Polish",
    "work_type": "Master Hand Carving",
    "price": "₹2,12,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 64,
    "images": [
      {
        "id": "img-166-1",
        "product_id": "prod-166",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818400/gbm-marble-handicrafts/god-statues/o35utbtodfvtfht1xidg.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-167",
    "name": "God Statues Design #65",
    "slug": "god-statues-design-65",
    "category_id": "cat-6",
    "category_name": "God Statues",
    "category_slug": "god-statues",
    "description": "Divine handcrafted white Makrana marble deity idols including Lord Ganesha, Shiva, Krishna, Hanuman, and Ram Darbar. Custom sizes and design variations available upon inquiry.",
    "material": "Pure White Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "Gold Emboss & Diamond Polish",
    "work_type": "Master Hand Carving",
    "price": "₹2,15,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 65,
    "images": [
      {
        "id": "img-167-1",
        "product_id": "prod-167",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818421/gbm-marble-handicrafts/god-statues/iifnm57kmimqt59nxaix.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-168",
    "name": "God Statues Design #66",
    "slug": "god-statues-design-66",
    "category_id": "cat-6",
    "category_name": "God Statues",
    "category_slug": "god-statues",
    "description": "Divine handcrafted white Makrana marble deity idols including Lord Ganesha, Shiva, Krishna, Hanuman, and Ram Darbar. Custom sizes and design variations available upon inquiry.",
    "material": "Pure White Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "Gold Emboss & Diamond Polish",
    "work_type": "Master Hand Carving",
    "price": "₹2,17,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 66,
    "images": [
      {
        "id": "img-168-1",
        "product_id": "prod-168",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818419/gbm-marble-handicrafts/god-statues/zb8a2jlggoe0jvbxet3o.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-169",
    "name": "God Statues Design #67",
    "slug": "god-statues-design-67",
    "category_id": "cat-6",
    "category_name": "God Statues",
    "category_slug": "god-statues",
    "description": "Divine handcrafted white Makrana marble deity idols including Lord Ganesha, Shiva, Krishna, Hanuman, and Ram Darbar. Custom sizes and design variations available upon inquiry.",
    "material": "Pure White Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "Gold Emboss & Diamond Polish",
    "work_type": "Master Hand Carving",
    "price": "₹2,20,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 67,
    "images": [
      {
        "id": "img-169-1",
        "product_id": "prod-169",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818538/gbm-marble-handicrafts/god-statues/jkwojsou2o06lu4lm980.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-170",
    "name": "God Statues Design #68",
    "slug": "god-statues-design-68",
    "category_id": "cat-6",
    "category_name": "God Statues",
    "category_slug": "god-statues",
    "description": "Divine handcrafted white Makrana marble deity idols including Lord Ganesha, Shiva, Krishna, Hanuman, and Ram Darbar. Custom sizes and design variations available upon inquiry.",
    "material": "Pure White Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "Gold Emboss & Diamond Polish",
    "work_type": "Master Hand Carving",
    "price": "₹2,22,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 68,
    "images": [
      {
        "id": "img-170-1",
        "product_id": "prod-170",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818535/gbm-marble-handicrafts/god-statues/rd0eyoumjptgrjipm8lf.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-171",
    "name": "God Statues Design #69",
    "slug": "god-statues-design-69",
    "category_id": "cat-6",
    "category_name": "God Statues",
    "category_slug": "god-statues",
    "description": "Divine handcrafted white Makrana marble deity idols including Lord Ganesha, Shiva, Krishna, Hanuman, and Ram Darbar. Custom sizes and design variations available upon inquiry.",
    "material": "Pure White Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "Gold Emboss & Diamond Polish",
    "work_type": "Master Hand Carving",
    "price": "₹2,25,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 69,
    "images": [
      {
        "id": "img-171-1",
        "product_id": "prod-171",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818449/gbm-marble-handicrafts/god-statues/l9sofddnvklw9yp2seor.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-172",
    "name": "God Statues Design #70",
    "slug": "god-statues-design-70",
    "category_id": "cat-6",
    "category_name": "God Statues",
    "category_slug": "god-statues",
    "description": "Divine handcrafted white Makrana marble deity idols including Lord Ganesha, Shiva, Krishna, Hanuman, and Ram Darbar. Custom sizes and design variations available upon inquiry.",
    "material": "Pure White Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "Gold Emboss & Diamond Polish",
    "work_type": "Master Hand Carving",
    "price": "₹2,27,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 70,
    "images": [
      {
        "id": "img-172-1",
        "product_id": "prod-172",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818578/gbm-marble-handicrafts/god-statues/lulxkb9r3xcvyztwk3zk.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-173",
    "name": "God Statues Design #71",
    "slug": "god-statues-design-71",
    "category_id": "cat-6",
    "category_name": "God Statues",
    "category_slug": "god-statues",
    "description": "Divine handcrafted white Makrana marble deity idols including Lord Ganesha, Shiva, Krishna, Hanuman, and Ram Darbar. Custom sizes and design variations available upon inquiry.",
    "material": "Pure White Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "Gold Emboss & Diamond Polish",
    "work_type": "Master Hand Carving",
    "price": "₹2,30,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 71,
    "images": [
      {
        "id": "img-173-1",
        "product_id": "prod-173",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818577/gbm-marble-handicrafts/god-statues/rsjjsuf8zngdwsw8gbrg.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-174",
    "name": "God Statues Design #72",
    "slug": "god-statues-design-72",
    "category_id": "cat-6",
    "category_name": "God Statues",
    "category_slug": "god-statues",
    "description": "Divine handcrafted white Makrana marble deity idols including Lord Ganesha, Shiva, Krishna, Hanuman, and Ram Darbar. Custom sizes and design variations available upon inquiry.",
    "material": "Pure White Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "Gold Emboss & Diamond Polish",
    "work_type": "Master Hand Carving",
    "price": "₹2,32,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 72,
    "images": [
      {
        "id": "img-174-1",
        "product_id": "prod-174",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818581/gbm-marble-handicrafts/god-statues/zu5qsr7e4scn5za7ck3u.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-175",
    "name": "God Statues Design #73",
    "slug": "god-statues-design-73",
    "category_id": "cat-6",
    "category_name": "God Statues",
    "category_slug": "god-statues",
    "description": "Divine handcrafted white Makrana marble deity idols including Lord Ganesha, Shiva, Krishna, Hanuman, and Ram Darbar. Custom sizes and design variations available upon inquiry.",
    "material": "Pure White Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "Gold Emboss & Diamond Polish",
    "work_type": "Master Hand Carving",
    "price": "₹2,35,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 73,
    "images": [
      {
        "id": "img-175-1",
        "product_id": "prod-175",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818608/gbm-marble-handicrafts/god-statues/rzi1kvpoaqz3x8mugrep.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-176",
    "name": "God Statues Design #74",
    "slug": "god-statues-design-74",
    "category_id": "cat-6",
    "category_name": "God Statues",
    "category_slug": "god-statues",
    "description": "Divine handcrafted white Makrana marble deity idols including Lord Ganesha, Shiva, Krishna, Hanuman, and Ram Darbar. Custom sizes and design variations available upon inquiry.",
    "material": "Pure White Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "Gold Emboss & Diamond Polish",
    "work_type": "Master Hand Carving",
    "price": "₹2,37,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 74,
    "images": [
      {
        "id": "img-176-1",
        "product_id": "prod-176",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818609/gbm-marble-handicrafts/god-statues/ftu5lpizqwok4ym4ovgl.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-177",
    "name": "God Statues Design #75",
    "slug": "god-statues-design-75",
    "category_id": "cat-6",
    "category_name": "God Statues",
    "category_slug": "god-statues",
    "description": "Divine handcrafted white Makrana marble deity idols including Lord Ganesha, Shiva, Krishna, Hanuman, and Ram Darbar. Custom sizes and design variations available upon inquiry.",
    "material": "Pure White Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "Gold Emboss & Diamond Polish",
    "work_type": "Master Hand Carving",
    "price": "₹2,40,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 75,
    "images": [
      {
        "id": "img-177-1",
        "product_id": "prod-177",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818632/gbm-marble-handicrafts/god-statues/t0exvretzpylpmmhhsh2.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-178",
    "name": "God Statues Design #76",
    "slug": "god-statues-design-76",
    "category_id": "cat-6",
    "category_name": "God Statues",
    "category_slug": "god-statues",
    "description": "Divine handcrafted white Makrana marble deity idols including Lord Ganesha, Shiva, Krishna, Hanuman, and Ram Darbar. Custom sizes and design variations available upon inquiry.",
    "material": "Pure White Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "Gold Emboss & Diamond Polish",
    "work_type": "Master Hand Carving",
    "price": "₹2,42,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 76,
    "images": [
      {
        "id": "img-178-1",
        "product_id": "prod-178",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818674/gbm-marble-handicrafts/god-statues/pm7f5idr2rsjcjgpzvxp.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-179",
    "name": "Handicrafts Items Design #1",
    "slug": "handicrafts-items-design-1",
    "category_id": "cat-7",
    "category_name": "Handicrafts Items",
    "category_slug": "handicrafts-items",
    "description": "Royal Rajasthani marble decorative items, painted minakari art, urlis, keyholders, and heritage home decor. Custom sizes and design variations available upon inquiry.",
    "material": "Italian & Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "24K Gold Leafing",
    "work_type": "Meenakari Paint & Carving",
    "price": "₹12,500",
    "is_featured": true,
    "is_published": true,
    "sort_order": 1,
    "images": [
      {
        "id": "img-179-1",
        "product_id": "prod-179",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818711/gbm-marble-handicrafts/handicrafts-items/mmpkydguaxbfjttnxe25.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-180",
    "name": "Handicrafts Items Design #2",
    "slug": "handicrafts-items-design-2",
    "category_id": "cat-7",
    "category_name": "Handicrafts Items",
    "category_slug": "handicrafts-items",
    "description": "Royal Rajasthani marble decorative items, painted minakari art, urlis, keyholders, and heritage home decor. Custom sizes and design variations available upon inquiry.",
    "material": "Italian & Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "24K Gold Leafing",
    "work_type": "Meenakari Paint & Carving",
    "price": "₹15,000",
    "is_featured": true,
    "is_published": true,
    "sort_order": 2,
    "images": [
      {
        "id": "img-180-1",
        "product_id": "prod-180",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818742/gbm-marble-handicrafts/handicrafts-items/ylgzq3etifu3eniebc4k.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-181",
    "name": "Handicrafts Items Design #3",
    "slug": "handicrafts-items-design-3",
    "category_id": "cat-7",
    "category_name": "Handicrafts Items",
    "category_slug": "handicrafts-items",
    "description": "Royal Rajasthani marble decorative items, painted minakari art, urlis, keyholders, and heritage home decor. Custom sizes and design variations available upon inquiry.",
    "material": "Italian & Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "24K Gold Leafing",
    "work_type": "Meenakari Paint & Carving",
    "price": "₹17,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 3,
    "images": [
      {
        "id": "img-181-1",
        "product_id": "prod-181",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818732/gbm-marble-handicrafts/handicrafts-items/l7oahpvg3i8mmomxkgsk.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-182",
    "name": "Handicrafts Items Design #4",
    "slug": "handicrafts-items-design-4",
    "category_id": "cat-7",
    "category_name": "Handicrafts Items",
    "category_slug": "handicrafts-items",
    "description": "Royal Rajasthani marble decorative items, painted minakari art, urlis, keyholders, and heritage home decor. Custom sizes and design variations available upon inquiry.",
    "material": "Italian & Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "24K Gold Leafing",
    "work_type": "Meenakari Paint & Carving",
    "price": "₹20,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 4,
    "images": [
      {
        "id": "img-182-1",
        "product_id": "prod-182",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818710/gbm-marble-handicrafts/handicrafts-items/xdn3rwb4nxrxudvih8bp.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-183",
    "name": "Handicrafts Items Design #5",
    "slug": "handicrafts-items-design-5",
    "category_id": "cat-7",
    "category_name": "Handicrafts Items",
    "category_slug": "handicrafts-items",
    "description": "Royal Rajasthani marble decorative items, painted minakari art, urlis, keyholders, and heritage home decor. Custom sizes and design variations available upon inquiry.",
    "material": "Italian & Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "24K Gold Leafing",
    "work_type": "Meenakari Paint & Carving",
    "price": "₹22,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 5,
    "images": [
      {
        "id": "img-183-1",
        "product_id": "prod-183",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818737/gbm-marble-handicrafts/handicrafts-items/mhzu9bcswcuhlp0mrrpe.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-184",
    "name": "Handicrafts Items Design #6",
    "slug": "handicrafts-items-design-6",
    "category_id": "cat-7",
    "category_name": "Handicrafts Items",
    "category_slug": "handicrafts-items",
    "description": "Royal Rajasthani marble decorative items, painted minakari art, urlis, keyholders, and heritage home decor. Custom sizes and design variations available upon inquiry.",
    "material": "Italian & Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "24K Gold Leafing",
    "work_type": "Meenakari Paint & Carving",
    "price": "₹25,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 6,
    "images": [
      {
        "id": "img-184-1",
        "product_id": "prod-184",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818727/gbm-marble-handicrafts/handicrafts-items/yaelrlry1tk5w9rb1v0u.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-185",
    "name": "Handicrafts Items Design #7",
    "slug": "handicrafts-items-design-7",
    "category_id": "cat-7",
    "category_name": "Handicrafts Items",
    "category_slug": "handicrafts-items",
    "description": "Royal Rajasthani marble decorative items, painted minakari art, urlis, keyholders, and heritage home decor. Custom sizes and design variations available upon inquiry.",
    "material": "Italian & Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "24K Gold Leafing",
    "work_type": "Meenakari Paint & Carving",
    "price": "₹27,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 7,
    "images": [
      {
        "id": "img-185-1",
        "product_id": "prod-185",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818806/gbm-marble-handicrafts/handicrafts-items/ovsaqjikxoilveiynzfz.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-186",
    "name": "Handicrafts Items Design #8",
    "slug": "handicrafts-items-design-8",
    "category_id": "cat-7",
    "category_name": "Handicrafts Items",
    "category_slug": "handicrafts-items",
    "description": "Royal Rajasthani marble decorative items, painted minakari art, urlis, keyholders, and heritage home decor. Custom sizes and design variations available upon inquiry.",
    "material": "Italian & Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "24K Gold Leafing",
    "work_type": "Meenakari Paint & Carving",
    "price": "₹30,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 8,
    "images": [
      {
        "id": "img-186-1",
        "product_id": "prod-186",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818850/gbm-marble-handicrafts/handicrafts-items/rn4von0fhrdsy4mdwvlm.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-187",
    "name": "Handicrafts Items Design #9",
    "slug": "handicrafts-items-design-9",
    "category_id": "cat-7",
    "category_name": "Handicrafts Items",
    "category_slug": "handicrafts-items",
    "description": "Royal Rajasthani marble decorative items, painted minakari art, urlis, keyholders, and heritage home decor. Custom sizes and design variations available upon inquiry.",
    "material": "Italian & Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "24K Gold Leafing",
    "work_type": "Meenakari Paint & Carving",
    "price": "₹32,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 9,
    "images": [
      {
        "id": "img-187-1",
        "product_id": "prod-187",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818835/gbm-marble-handicrafts/handicrafts-items/arwtmcmakdy0ciwcy2f4.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-188",
    "name": "Handicrafts Items Design #10",
    "slug": "handicrafts-items-design-10",
    "category_id": "cat-7",
    "category_name": "Handicrafts Items",
    "category_slug": "handicrafts-items",
    "description": "Royal Rajasthani marble decorative items, painted minakari art, urlis, keyholders, and heritage home decor. Custom sizes and design variations available upon inquiry.",
    "material": "Italian & Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "24K Gold Leafing",
    "work_type": "Meenakari Paint & Carving",
    "price": "₹35,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 10,
    "images": [
      {
        "id": "img-188-1",
        "product_id": "prod-188",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818859/gbm-marble-handicrafts/handicrafts-items/cfh7hnihxq4bi9av7iog.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-189",
    "name": "Handicrafts Items Design #11",
    "slug": "handicrafts-items-design-11",
    "category_id": "cat-7",
    "category_name": "Handicrafts Items",
    "category_slug": "handicrafts-items",
    "description": "Royal Rajasthani marble decorative items, painted minakari art, urlis, keyholders, and heritage home decor. Custom sizes and design variations available upon inquiry.",
    "material": "Italian & Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "24K Gold Leafing",
    "work_type": "Meenakari Paint & Carving",
    "price": "₹37,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 11,
    "images": [
      {
        "id": "img-189-1",
        "product_id": "prod-189",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818843/gbm-marble-handicrafts/handicrafts-items/cflzfcsjvxszw5le8vt6.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-190",
    "name": "Handicrafts Items Design #12",
    "slug": "handicrafts-items-design-12",
    "category_id": "cat-7",
    "category_name": "Handicrafts Items",
    "category_slug": "handicrafts-items",
    "description": "Royal Rajasthani marble decorative items, painted minakari art, urlis, keyholders, and heritage home decor. Custom sizes and design variations available upon inquiry.",
    "material": "Italian & Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "24K Gold Leafing",
    "work_type": "Meenakari Paint & Carving",
    "price": "₹40,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 12,
    "images": [
      {
        "id": "img-190-1",
        "product_id": "prod-190",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818851/gbm-marble-handicrafts/handicrafts-items/g7hzfmcqcir2zdsgvysp.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-191",
    "name": "Handicrafts Items Design #13",
    "slug": "handicrafts-items-design-13",
    "category_id": "cat-7",
    "category_name": "Handicrafts Items",
    "category_slug": "handicrafts-items",
    "description": "Royal Rajasthani marble decorative items, painted minakari art, urlis, keyholders, and heritage home decor. Custom sizes and design variations available upon inquiry.",
    "material": "Italian & Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "24K Gold Leafing",
    "work_type": "Meenakari Paint & Carving",
    "price": "₹42,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 13,
    "images": [
      {
        "id": "img-191-1",
        "product_id": "prod-191",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818924/gbm-marble-handicrafts/handicrafts-items/rggpvy2p7ap1mwke47a1.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-192",
    "name": "Handicrafts Items Design #14",
    "slug": "handicrafts-items-design-14",
    "category_id": "cat-7",
    "category_name": "Handicrafts Items",
    "category_slug": "handicrafts-items",
    "description": "Royal Rajasthani marble decorative items, painted minakari art, urlis, keyholders, and heritage home decor. Custom sizes and design variations available upon inquiry.",
    "material": "Italian & Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "24K Gold Leafing",
    "work_type": "Meenakari Paint & Carving",
    "price": "₹45,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 14,
    "images": [
      {
        "id": "img-192-1",
        "product_id": "prod-192",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818913/gbm-marble-handicrafts/handicrafts-items/etn9rsokvvludw2hdrvo.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-193",
    "name": "Handicrafts Items Design #15",
    "slug": "handicrafts-items-design-15",
    "category_id": "cat-7",
    "category_name": "Handicrafts Items",
    "category_slug": "handicrafts-items",
    "description": "Royal Rajasthani marble decorative items, painted minakari art, urlis, keyholders, and heritage home decor. Custom sizes and design variations available upon inquiry.",
    "material": "Italian & Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "24K Gold Leafing",
    "work_type": "Meenakari Paint & Carving",
    "price": "₹47,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 15,
    "images": [
      {
        "id": "img-193-1",
        "product_id": "prod-193",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818929/gbm-marble-handicrafts/handicrafts-items/guezgax0vmq4gn6mlhxy.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-194",
    "name": "Handicrafts Items Design #16",
    "slug": "handicrafts-items-design-16",
    "category_id": "cat-7",
    "category_name": "Handicrafts Items",
    "category_slug": "handicrafts-items",
    "description": "Royal Rajasthani marble decorative items, painted minakari art, urlis, keyholders, and heritage home decor. Custom sizes and design variations available upon inquiry.",
    "material": "Italian & Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "24K Gold Leafing",
    "work_type": "Meenakari Paint & Carving",
    "price": "₹50,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 16,
    "images": [
      {
        "id": "img-194-1",
        "product_id": "prod-194",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818896/gbm-marble-handicrafts/handicrafts-items/g4keuiztg1na59ifhsax.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-195",
    "name": "Handicrafts Items Design #17",
    "slug": "handicrafts-items-design-17",
    "category_id": "cat-7",
    "category_name": "Handicrafts Items",
    "category_slug": "handicrafts-items",
    "description": "Royal Rajasthani marble decorative items, painted minakari art, urlis, keyholders, and heritage home decor. Custom sizes and design variations available upon inquiry.",
    "material": "Italian & Makrana Marble",
    "size": "Custom Dimensions Available",
    "finish": "24K Gold Leafing",
    "work_type": "Meenakari Paint & Carving",
    "price": "₹52,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 17,
    "images": [
      {
        "id": "img-195-1",
        "product_id": "prod-195",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818917/gbm-marble-handicrafts/handicrafts-items/dwda8kgyouvh6p4pumlv.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-196",
    "name": "Jali Work Temple Design #1",
    "slug": "jali-work-temple-design-1",
    "category_id": "cat-8",
    "category_name": "Jali Work Temple",
    "category_slug": "jali-work-temple",
    "description": "Lattice jali carved marble temples featuring delicate geometric and floral cutwork screening for home shrines. Custom sizes and design variations available upon inquiry.",
    "material": "White Marble",
    "size": "Custom Dimensions Available",
    "finish": "Fine Chisel Polish",
    "work_type": "Lattice Jali Cutwork",
    "price": "₹75,000",
    "is_featured": true,
    "is_published": true,
    "sort_order": 1,
    "images": [
      {
        "id": "img-196-1",
        "product_id": "prod-196",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818933/gbm-marble-handicrafts/jali-work-temple/wcdyz4csuzoezxou6w70.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-197",
    "name": "Jali Work Temple Design #2",
    "slug": "jali-work-temple-design-2",
    "category_id": "cat-8",
    "category_name": "Jali Work Temple",
    "category_slug": "jali-work-temple",
    "description": "Lattice jali carved marble temples featuring delicate geometric and floral cutwork screening for home shrines. Custom sizes and design variations available upon inquiry.",
    "material": "White Marble",
    "size": "Custom Dimensions Available",
    "finish": "Fine Chisel Polish",
    "work_type": "Lattice Jali Cutwork",
    "price": "₹77,500",
    "is_featured": true,
    "is_published": true,
    "sort_order": 2,
    "images": [
      {
        "id": "img-197-1",
        "product_id": "prod-197",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818932/gbm-marble-handicrafts/jali-work-temple/zgtu4sj6chmpmqikuhsv.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-198",
    "name": "Marble Basin Design #1",
    "slug": "marble-basin-design-1",
    "category_id": "cat-10",
    "category_name": "Marble Basin",
    "category_slug": "marble-basin",
    "description": "Hand-turned counter-top marble wash basins, fluted sink bowls, and carved stone bathroom fixtures. Custom sizes and design variations available upon inquiry.",
    "material": "Statuario White Stone",
    "size": "Custom Dimensions Available",
    "finish": "Sealed Water Polish",
    "work_type": "Hand Lathe Turning",
    "price": "₹18,500",
    "is_featured": true,
    "is_published": true,
    "sort_order": 1,
    "images": [
      {
        "id": "img-198-1",
        "product_id": "prod-198",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818935/gbm-marble-handicrafts/marble-basin/eknypzhxijakowi5knwj.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-199",
    "name": "Marble Basin Design #2",
    "slug": "marble-basin-design-2",
    "category_id": "cat-10",
    "category_name": "Marble Basin",
    "category_slug": "marble-basin",
    "description": "Hand-turned counter-top marble wash basins, fluted sink bowls, and carved stone bathroom fixtures. Custom sizes and design variations available upon inquiry.",
    "material": "Statuario White Stone",
    "size": "Custom Dimensions Available",
    "finish": "Sealed Water Polish",
    "work_type": "Hand Lathe Turning",
    "price": "₹21,000",
    "is_featured": true,
    "is_published": true,
    "sort_order": 2,
    "images": [
      {
        "id": "img-199-1",
        "product_id": "prod-199",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818935/gbm-marble-handicrafts/marble-basin/xedo4oa2wau8c6qlsvq9.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-200",
    "name": "Marble Basin Design #3",
    "slug": "marble-basin-design-3",
    "category_id": "cat-10",
    "category_name": "Marble Basin",
    "category_slug": "marble-basin",
    "description": "Hand-turned counter-top marble wash basins, fluted sink bowls, and carved stone bathroom fixtures. Custom sizes and design variations available upon inquiry.",
    "material": "Statuario White Stone",
    "size": "Custom Dimensions Available",
    "finish": "Sealed Water Polish",
    "work_type": "Hand Lathe Turning",
    "price": "₹23,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 3,
    "images": [
      {
        "id": "img-200-1",
        "product_id": "prod-200",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818937/gbm-marble-handicrafts/marble-basin/gaowuagvw4dz5neptefy.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-201",
    "name": "Marble Basin Design #4",
    "slug": "marble-basin-design-4",
    "category_id": "cat-10",
    "category_name": "Marble Basin",
    "category_slug": "marble-basin",
    "description": "Hand-turned counter-top marble wash basins, fluted sink bowls, and carved stone bathroom fixtures. Custom sizes and design variations available upon inquiry.",
    "material": "Statuario White Stone",
    "size": "Custom Dimensions Available",
    "finish": "Sealed Water Polish",
    "work_type": "Hand Lathe Turning",
    "price": "₹26,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 4,
    "images": [
      {
        "id": "img-201-1",
        "product_id": "prod-201",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818936/gbm-marble-handicrafts/marble-basin/fefgtggwnuuo2w11gjyg.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-202",
    "name": "Marble Basin Design #5",
    "slug": "marble-basin-design-5",
    "category_id": "cat-10",
    "category_name": "Marble Basin",
    "category_slug": "marble-basin",
    "description": "Hand-turned counter-top marble wash basins, fluted sink bowls, and carved stone bathroom fixtures. Custom sizes and design variations available upon inquiry.",
    "material": "Statuario White Stone",
    "size": "Custom Dimensions Available",
    "finish": "Sealed Water Polish",
    "work_type": "Hand Lathe Turning",
    "price": "₹28,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 5,
    "images": [
      {
        "id": "img-202-1",
        "product_id": "prod-202",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818937/gbm-marble-handicrafts/marble-basin/vc6mvxzqjataodbikzis.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-203",
    "name": "Marble Basin Design #6",
    "slug": "marble-basin-design-6",
    "category_id": "cat-10",
    "category_name": "Marble Basin",
    "category_slug": "marble-basin",
    "description": "Hand-turned counter-top marble wash basins, fluted sink bowls, and carved stone bathroom fixtures. Custom sizes and design variations available upon inquiry.",
    "material": "Statuario White Stone",
    "size": "Custom Dimensions Available",
    "finish": "Sealed Water Polish",
    "work_type": "Hand Lathe Turning",
    "price": "₹31,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 6,
    "images": [
      {
        "id": "img-203-1",
        "product_id": "prod-203",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818937/gbm-marble-handicrafts/marble-basin/qpa4hk9vdqw19mn5641v.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-204",
    "name": "Marble Basin Design #7",
    "slug": "marble-basin-design-7",
    "category_id": "cat-10",
    "category_name": "Marble Basin",
    "category_slug": "marble-basin",
    "description": "Hand-turned counter-top marble wash basins, fluted sink bowls, and carved stone bathroom fixtures. Custom sizes and design variations available upon inquiry.",
    "material": "Statuario White Stone",
    "size": "Custom Dimensions Available",
    "finish": "Sealed Water Polish",
    "work_type": "Hand Lathe Turning",
    "price": "₹33,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 7,
    "images": [
      {
        "id": "img-204-1",
        "product_id": "prod-204",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818940/gbm-marble-handicrafts/marble-basin/iw58uwhvekls9txrg61u.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-205",
    "name": "Marble Basin Design #8",
    "slug": "marble-basin-design-8",
    "category_id": "cat-10",
    "category_name": "Marble Basin",
    "category_slug": "marble-basin",
    "description": "Hand-turned counter-top marble wash basins, fluted sink bowls, and carved stone bathroom fixtures. Custom sizes and design variations available upon inquiry.",
    "material": "Statuario White Stone",
    "size": "Custom Dimensions Available",
    "finish": "Sealed Water Polish",
    "work_type": "Hand Lathe Turning",
    "price": "₹36,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 8,
    "images": [
      {
        "id": "img-205-1",
        "product_id": "prod-205",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818941/gbm-marble-handicrafts/marble-basin/ro7pobcnuyp3yeexjieq.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-206",
    "name": "Marble Basin Design #9",
    "slug": "marble-basin-design-9",
    "category_id": "cat-10",
    "category_name": "Marble Basin",
    "category_slug": "marble-basin",
    "description": "Hand-turned counter-top marble wash basins, fluted sink bowls, and carved stone bathroom fixtures. Custom sizes and design variations available upon inquiry.",
    "material": "Statuario White Stone",
    "size": "Custom Dimensions Available",
    "finish": "Sealed Water Polish",
    "work_type": "Hand Lathe Turning",
    "price": "₹38,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 9,
    "images": [
      {
        "id": "img-206-1",
        "product_id": "prod-206",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818940/gbm-marble-handicrafts/marble-basin/kyxoqmzhn2ryd4g9oiiu.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-207",
    "name": "Marble Basin Design #10",
    "slug": "marble-basin-design-10",
    "category_id": "cat-10",
    "category_name": "Marble Basin",
    "category_slug": "marble-basin",
    "description": "Hand-turned counter-top marble wash basins, fluted sink bowls, and carved stone bathroom fixtures. Custom sizes and design variations available upon inquiry.",
    "material": "Statuario White Stone",
    "size": "Custom Dimensions Available",
    "finish": "Sealed Water Polish",
    "work_type": "Hand Lathe Turning",
    "price": "₹41,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 10,
    "images": [
      {
        "id": "img-207-1",
        "product_id": "prod-207",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818940/gbm-marble-handicrafts/marble-basin/y82dnuy3rqk8zlv8sfze.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-208",
    "name": "Marble Basin Design #11",
    "slug": "marble-basin-design-11",
    "category_id": "cat-10",
    "category_name": "Marble Basin",
    "category_slug": "marble-basin",
    "description": "Hand-turned counter-top marble wash basins, fluted sink bowls, and carved stone bathroom fixtures. Custom sizes and design variations available upon inquiry.",
    "material": "Statuario White Stone",
    "size": "Custom Dimensions Available",
    "finish": "Sealed Water Polish",
    "work_type": "Hand Lathe Turning",
    "price": "₹43,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 11,
    "images": [
      {
        "id": "img-208-1",
        "product_id": "prod-208",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818940/gbm-marble-handicrafts/marble-basin/wpjoqbms7gj3kgemotyv.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-209",
    "name": "Marble Basin Design #12",
    "slug": "marble-basin-design-12",
    "category_id": "cat-10",
    "category_name": "Marble Basin",
    "category_slug": "marble-basin",
    "description": "Hand-turned counter-top marble wash basins, fluted sink bowls, and carved stone bathroom fixtures. Custom sizes and design variations available upon inquiry.",
    "material": "Statuario White Stone",
    "size": "Custom Dimensions Available",
    "finish": "Sealed Water Polish",
    "work_type": "Hand Lathe Turning",
    "price": "₹46,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 12,
    "images": [
      {
        "id": "img-209-1",
        "product_id": "prod-209",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818941/gbm-marble-handicrafts/marble-basin/gbhey6pflqzgaftgzu6e.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-210",
    "name": "Marble Basin Design #13",
    "slug": "marble-basin-design-13",
    "category_id": "cat-10",
    "category_name": "Marble Basin",
    "category_slug": "marble-basin",
    "description": "Hand-turned counter-top marble wash basins, fluted sink bowls, and carved stone bathroom fixtures. Custom sizes and design variations available upon inquiry.",
    "material": "Statuario White Stone",
    "size": "Custom Dimensions Available",
    "finish": "Sealed Water Polish",
    "work_type": "Hand Lathe Turning",
    "price": "₹48,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 13,
    "images": [
      {
        "id": "img-210-1",
        "product_id": "prod-210",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818943/gbm-marble-handicrafts/marble-basin/arvxevtvuke2ccqezgf2.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-211",
    "name": "Marble Basin Design #14",
    "slug": "marble-basin-design-14",
    "category_id": "cat-10",
    "category_name": "Marble Basin",
    "category_slug": "marble-basin",
    "description": "Hand-turned counter-top marble wash basins, fluted sink bowls, and carved stone bathroom fixtures. Custom sizes and design variations available upon inquiry.",
    "material": "Statuario White Stone",
    "size": "Custom Dimensions Available",
    "finish": "Sealed Water Polish",
    "work_type": "Hand Lathe Turning",
    "price": "₹51,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 14,
    "images": [
      {
        "id": "img-211-1",
        "product_id": "prod-211",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818943/gbm-marble-handicrafts/marble-basin/akwmthk7pcspi3ytmjnh.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-212",
    "name": "Marble Basin Design #15",
    "slug": "marble-basin-design-15",
    "category_id": "cat-10",
    "category_name": "Marble Basin",
    "category_slug": "marble-basin",
    "description": "Hand-turned counter-top marble wash basins, fluted sink bowls, and carved stone bathroom fixtures. Custom sizes and design variations available upon inquiry.",
    "material": "Statuario White Stone",
    "size": "Custom Dimensions Available",
    "finish": "Sealed Water Polish",
    "work_type": "Hand Lathe Turning",
    "price": "₹53,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 15,
    "images": [
      {
        "id": "img-212-1",
        "product_id": "prod-212",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818943/gbm-marble-handicrafts/marble-basin/vxkwjsku5dp2e2h6xbl8.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-213",
    "name": "Marble Basin Design #16",
    "slug": "marble-basin-design-16",
    "category_id": "cat-10",
    "category_name": "Marble Basin",
    "category_slug": "marble-basin",
    "description": "Hand-turned counter-top marble wash basins, fluted sink bowls, and carved stone bathroom fixtures. Custom sizes and design variations available upon inquiry.",
    "material": "Statuario White Stone",
    "size": "Custom Dimensions Available",
    "finish": "Sealed Water Polish",
    "work_type": "Hand Lathe Turning",
    "price": "₹56,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 16,
    "images": [
      {
        "id": "img-213-1",
        "product_id": "prod-213",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818943/gbm-marble-handicrafts/marble-basin/qymsugfdyn7qr6j8cfzv.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-214",
    "name": "Marble Basin Design #17",
    "slug": "marble-basin-design-17",
    "category_id": "cat-10",
    "category_name": "Marble Basin",
    "category_slug": "marble-basin",
    "description": "Hand-turned counter-top marble wash basins, fluted sink bowls, and carved stone bathroom fixtures. Custom sizes and design variations available upon inquiry.",
    "material": "Statuario White Stone",
    "size": "Custom Dimensions Available",
    "finish": "Sealed Water Polish",
    "work_type": "Hand Lathe Turning",
    "price": "₹58,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 17,
    "images": [
      {
        "id": "img-214-1",
        "product_id": "prod-214",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818943/gbm-marble-handicrafts/marble-basin/yejbp5rb3wnob4k8keoq.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-215",
    "name": "Marble Basin Design #18",
    "slug": "marble-basin-design-18",
    "category_id": "cat-10",
    "category_name": "Marble Basin",
    "category_slug": "marble-basin",
    "description": "Hand-turned counter-top marble wash basins, fluted sink bowls, and carved stone bathroom fixtures. Custom sizes and design variations available upon inquiry.",
    "material": "Statuario White Stone",
    "size": "Custom Dimensions Available",
    "finish": "Sealed Water Polish",
    "work_type": "Hand Lathe Turning",
    "price": "₹61,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 18,
    "images": [
      {
        "id": "img-215-1",
        "product_id": "prod-215",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818943/gbm-marble-handicrafts/marble-basin/vvhheaeoha3pqc7vqvfu.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-216",
    "name": "Marble Basin Design #19",
    "slug": "marble-basin-design-19",
    "category_id": "cat-10",
    "category_name": "Marble Basin",
    "category_slug": "marble-basin",
    "description": "Hand-turned counter-top marble wash basins, fluted sink bowls, and carved stone bathroom fixtures. Custom sizes and design variations available upon inquiry.",
    "material": "Statuario White Stone",
    "size": "Custom Dimensions Available",
    "finish": "Sealed Water Polish",
    "work_type": "Hand Lathe Turning",
    "price": "₹63,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 19,
    "images": [
      {
        "id": "img-216-1",
        "product_id": "prod-216",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818945/gbm-marble-handicrafts/marble-basin/naevtw2y4lfntugrvkyq.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-217",
    "name": "Marble Chhatri Design #1",
    "slug": "marble-chhatri-design-1",
    "category_id": "cat-11",
    "category_name": "Marble Chhatri",
    "category_slug": "marble-chhatri",
    "description": "Heritage Rajasthani domed marble chhatris, garden pavilions, and stone canopy structures. Custom sizes and design variations available upon inquiry.",
    "material": "Red Sandstone & White Marble",
    "size": "Custom Dimensions Available",
    "finish": "Natural Stone Polish",
    "work_type": "Dome Architecture Carving",
    "price": "₹1,50,000",
    "is_featured": true,
    "is_published": true,
    "sort_order": 1,
    "images": [
      {
        "id": "img-217-1",
        "product_id": "prod-217",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818948/gbm-marble-handicrafts/marble-chhatri/boezbmvvlgd0sizqeuxu.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-218",
    "name": "Marble Chhatri Design #2",
    "slug": "marble-chhatri-design-2",
    "category_id": "cat-11",
    "category_name": "Marble Chhatri",
    "category_slug": "marble-chhatri",
    "description": "Heritage Rajasthani domed marble chhatris, garden pavilions, and stone canopy structures. Custom sizes and design variations available upon inquiry.",
    "material": "Red Sandstone & White Marble",
    "size": "Custom Dimensions Available",
    "finish": "Natural Stone Polish",
    "work_type": "Dome Architecture Carving",
    "price": "₹1,52,500",
    "is_featured": true,
    "is_published": true,
    "sort_order": 2,
    "images": [
      {
        "id": "img-218-1",
        "product_id": "prod-218",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818948/gbm-marble-handicrafts/marble-chhatri/uo7vkxqnt62whwxvavvk.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-219",
    "name": "Marble Chhatri Design #3",
    "slug": "marble-chhatri-design-3",
    "category_id": "cat-11",
    "category_name": "Marble Chhatri",
    "category_slug": "marble-chhatri",
    "description": "Heritage Rajasthani domed marble chhatris, garden pavilions, and stone canopy structures. Custom sizes and design variations available upon inquiry.",
    "material": "Red Sandstone & White Marble",
    "size": "Custom Dimensions Available",
    "finish": "Natural Stone Polish",
    "work_type": "Dome Architecture Carving",
    "price": "₹1,55,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 3,
    "images": [
      {
        "id": "img-219-1",
        "product_id": "prod-219",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818948/gbm-marble-handicrafts/marble-chhatri/gurcd11vl49qazot8vfu.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-220",
    "name": "Marble Chhatri Design #4",
    "slug": "marble-chhatri-design-4",
    "category_id": "cat-11",
    "category_name": "Marble Chhatri",
    "category_slug": "marble-chhatri",
    "description": "Heritage Rajasthani domed marble chhatris, garden pavilions, and stone canopy structures. Custom sizes and design variations available upon inquiry.",
    "material": "Red Sandstone & White Marble",
    "size": "Custom Dimensions Available",
    "finish": "Natural Stone Polish",
    "work_type": "Dome Architecture Carving",
    "price": "₹1,57,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 4,
    "images": [
      {
        "id": "img-220-1",
        "product_id": "prod-220",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818948/gbm-marble-handicrafts/marble-chhatri/qch76ixinqs5bulpe0bu.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-221",
    "name": "Marble Chhatri Design #5",
    "slug": "marble-chhatri-design-5",
    "category_id": "cat-11",
    "category_name": "Marble Chhatri",
    "category_slug": "marble-chhatri",
    "description": "Heritage Rajasthani domed marble chhatris, garden pavilions, and stone canopy structures. Custom sizes and design variations available upon inquiry.",
    "material": "Red Sandstone & White Marble",
    "size": "Custom Dimensions Available",
    "finish": "Natural Stone Polish",
    "work_type": "Dome Architecture Carving",
    "price": "₹1,60,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 5,
    "images": [
      {
        "id": "img-221-1",
        "product_id": "prod-221",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818948/gbm-marble-handicrafts/marble-chhatri/yhv0m71nzvhohoddbhpg.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-222",
    "name": "Marble Chhatri Design #6",
    "slug": "marble-chhatri-design-6",
    "category_id": "cat-11",
    "category_name": "Marble Chhatri",
    "category_slug": "marble-chhatri",
    "description": "Heritage Rajasthani domed marble chhatris, garden pavilions, and stone canopy structures. Custom sizes and design variations available upon inquiry.",
    "material": "Red Sandstone & White Marble",
    "size": "Custom Dimensions Available",
    "finish": "Natural Stone Polish",
    "work_type": "Dome Architecture Carving",
    "price": "₹1,62,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 6,
    "images": [
      {
        "id": "img-222-1",
        "product_id": "prod-222",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818948/gbm-marble-handicrafts/marble-chhatri/viwh8iosp4okvpplogt2.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-223",
    "name": "Marble Chhatri Design #7",
    "slug": "marble-chhatri-design-7",
    "category_id": "cat-11",
    "category_name": "Marble Chhatri",
    "category_slug": "marble-chhatri",
    "description": "Heritage Rajasthani domed marble chhatris, garden pavilions, and stone canopy structures. Custom sizes and design variations available upon inquiry.",
    "material": "Red Sandstone & White Marble",
    "size": "Custom Dimensions Available",
    "finish": "Natural Stone Polish",
    "work_type": "Dome Architecture Carving",
    "price": "₹1,65,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 7,
    "images": [
      {
        "id": "img-223-1",
        "product_id": "prod-223",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818953/gbm-marble-handicrafts/marble-chhatri/qi9yzom8i59ulf2lgjhk.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-224",
    "name": "Marble Chhatri Design #8",
    "slug": "marble-chhatri-design-8",
    "category_id": "cat-11",
    "category_name": "Marble Chhatri",
    "category_slug": "marble-chhatri",
    "description": "Heritage Rajasthani domed marble chhatris, garden pavilions, and stone canopy structures. Custom sizes and design variations available upon inquiry.",
    "material": "Red Sandstone & White Marble",
    "size": "Custom Dimensions Available",
    "finish": "Natural Stone Polish",
    "work_type": "Dome Architecture Carving",
    "price": "₹1,67,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 8,
    "images": [
      {
        "id": "img-224-1",
        "product_id": "prod-224",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818951/gbm-marble-handicrafts/marble-chhatri/hoppnfssjz1mz60rztk8.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-225",
    "name": "Marble Chhatri Design #9",
    "slug": "marble-chhatri-design-9",
    "category_id": "cat-11",
    "category_name": "Marble Chhatri",
    "category_slug": "marble-chhatri",
    "description": "Heritage Rajasthani domed marble chhatris, garden pavilions, and stone canopy structures. Custom sizes and design variations available upon inquiry.",
    "material": "Red Sandstone & White Marble",
    "size": "Custom Dimensions Available",
    "finish": "Natural Stone Polish",
    "work_type": "Dome Architecture Carving",
    "price": "₹1,70,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 9,
    "images": [
      {
        "id": "img-225-1",
        "product_id": "prod-225",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818952/gbm-marble-handicrafts/marble-chhatri/xurx77ne3ktut9nf21pf.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-226",
    "name": "Marble Chhatri Design #10",
    "slug": "marble-chhatri-design-10",
    "category_id": "cat-11",
    "category_name": "Marble Chhatri",
    "category_slug": "marble-chhatri",
    "description": "Heritage Rajasthani domed marble chhatris, garden pavilions, and stone canopy structures. Custom sizes and design variations available upon inquiry.",
    "material": "Red Sandstone & White Marble",
    "size": "Custom Dimensions Available",
    "finish": "Natural Stone Polish",
    "work_type": "Dome Architecture Carving",
    "price": "₹1,72,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 10,
    "images": [
      {
        "id": "img-226-1",
        "product_id": "prod-226",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818951/gbm-marble-handicrafts/marble-chhatri/zg05bywb0hhbwctqsmrm.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-227",
    "name": "Marble Chhatri Design #11",
    "slug": "marble-chhatri-design-11",
    "category_id": "cat-11",
    "category_name": "Marble Chhatri",
    "category_slug": "marble-chhatri",
    "description": "Heritage Rajasthani domed marble chhatris, garden pavilions, and stone canopy structures. Custom sizes and design variations available upon inquiry.",
    "material": "Red Sandstone & White Marble",
    "size": "Custom Dimensions Available",
    "finish": "Natural Stone Polish",
    "work_type": "Dome Architecture Carving",
    "price": "₹1,75,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 11,
    "images": [
      {
        "id": "img-227-1",
        "product_id": "prod-227",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818952/gbm-marble-handicrafts/marble-chhatri/ofu8u5knzatsdowt8p4g.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-228",
    "name": "Marble Chhatri Design #12",
    "slug": "marble-chhatri-design-12",
    "category_id": "cat-11",
    "category_name": "Marble Chhatri",
    "category_slug": "marble-chhatri",
    "description": "Heritage Rajasthani domed marble chhatris, garden pavilions, and stone canopy structures. Custom sizes and design variations available upon inquiry.",
    "material": "Red Sandstone & White Marble",
    "size": "Custom Dimensions Available",
    "finish": "Natural Stone Polish",
    "work_type": "Dome Architecture Carving",
    "price": "₹1,77,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 12,
    "images": [
      {
        "id": "img-228-1",
        "product_id": "prod-228",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818952/gbm-marble-handicrafts/marble-chhatri/lqroqwiqxg3dktajdked.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-229",
    "name": "Marble Chhatri Design #13",
    "slug": "marble-chhatri-design-13",
    "category_id": "cat-11",
    "category_name": "Marble Chhatri",
    "category_slug": "marble-chhatri",
    "description": "Heritage Rajasthani domed marble chhatris, garden pavilions, and stone canopy structures. Custom sizes and design variations available upon inquiry.",
    "material": "Red Sandstone & White Marble",
    "size": "Custom Dimensions Available",
    "finish": "Natural Stone Polish",
    "work_type": "Dome Architecture Carving",
    "price": "₹1,80,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 13,
    "images": [
      {
        "id": "img-229-1",
        "product_id": "prod-229",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818956/gbm-marble-handicrafts/marble-chhatri/if7rgfd3wloiivjot5zu.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-230",
    "name": "Marble Chhatri Design #14",
    "slug": "marble-chhatri-design-14",
    "category_id": "cat-11",
    "category_name": "Marble Chhatri",
    "category_slug": "marble-chhatri",
    "description": "Heritage Rajasthani domed marble chhatris, garden pavilions, and stone canopy structures. Custom sizes and design variations available upon inquiry.",
    "material": "Red Sandstone & White Marble",
    "size": "Custom Dimensions Available",
    "finish": "Natural Stone Polish",
    "work_type": "Dome Architecture Carving",
    "price": "₹1,82,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 14,
    "images": [
      {
        "id": "img-230-1",
        "product_id": "prod-230",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818956/gbm-marble-handicrafts/marble-chhatri/dqd0lyhenvmagfcbafqh.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-231",
    "name": "Marble Chhatri Design #15",
    "slug": "marble-chhatri-design-15",
    "category_id": "cat-11",
    "category_name": "Marble Chhatri",
    "category_slug": "marble-chhatri",
    "description": "Heritage Rajasthani domed marble chhatris, garden pavilions, and stone canopy structures. Custom sizes and design variations available upon inquiry.",
    "material": "Red Sandstone & White Marble",
    "size": "Custom Dimensions Available",
    "finish": "Natural Stone Polish",
    "work_type": "Dome Architecture Carving",
    "price": "₹1,85,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 15,
    "images": [
      {
        "id": "img-231-1",
        "product_id": "prod-231",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818956/gbm-marble-handicrafts/marble-chhatri/mgfnjqpqpft0jed73u85.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-232",
    "name": "Marble Chhatri Design #16",
    "slug": "marble-chhatri-design-16",
    "category_id": "cat-11",
    "category_name": "Marble Chhatri",
    "category_slug": "marble-chhatri",
    "description": "Heritage Rajasthani domed marble chhatris, garden pavilions, and stone canopy structures. Custom sizes and design variations available upon inquiry.",
    "material": "Red Sandstone & White Marble",
    "size": "Custom Dimensions Available",
    "finish": "Natural Stone Polish",
    "work_type": "Dome Architecture Carving",
    "price": "₹1,87,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 16,
    "images": [
      {
        "id": "img-232-1",
        "product_id": "prod-232",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818958/gbm-marble-handicrafts/marble-chhatri/wd4gmmft3pw2097rdpiq.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-233",
    "name": "Marble Chhatri Design #17",
    "slug": "marble-chhatri-design-17",
    "category_id": "cat-11",
    "category_name": "Marble Chhatri",
    "category_slug": "marble-chhatri",
    "description": "Heritage Rajasthani domed marble chhatris, garden pavilions, and stone canopy structures. Custom sizes and design variations available upon inquiry.",
    "material": "Red Sandstone & White Marble",
    "size": "Custom Dimensions Available",
    "finish": "Natural Stone Polish",
    "work_type": "Dome Architecture Carving",
    "price": "₹1,90,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 17,
    "images": [
      {
        "id": "img-233-1",
        "product_id": "prod-233",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818957/gbm-marble-handicrafts/marble-chhatri/ybldwg3cnwaajmqybajw.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-234",
    "name": "Marble Chhatri Design #18",
    "slug": "marble-chhatri-design-18",
    "category_id": "cat-11",
    "category_name": "Marble Chhatri",
    "category_slug": "marble-chhatri",
    "description": "Heritage Rajasthani domed marble chhatris, garden pavilions, and stone canopy structures. Custom sizes and design variations available upon inquiry.",
    "material": "Red Sandstone & White Marble",
    "size": "Custom Dimensions Available",
    "finish": "Natural Stone Polish",
    "work_type": "Dome Architecture Carving",
    "price": "₹1,92,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 18,
    "images": [
      {
        "id": "img-234-1",
        "product_id": "prod-234",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818957/gbm-marble-handicrafts/marble-chhatri/dteg4h7gecjr8psvi7xs.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-235",
    "name": "Marble Chhatri Design #19",
    "slug": "marble-chhatri-design-19",
    "category_id": "cat-11",
    "category_name": "Marble Chhatri",
    "category_slug": "marble-chhatri",
    "description": "Heritage Rajasthani domed marble chhatris, garden pavilions, and stone canopy structures. Custom sizes and design variations available upon inquiry.",
    "material": "Red Sandstone & White Marble",
    "size": "Custom Dimensions Available",
    "finish": "Natural Stone Polish",
    "work_type": "Dome Architecture Carving",
    "price": "₹1,95,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 19,
    "images": [
      {
        "id": "img-235-1",
        "product_id": "prod-235",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818963/gbm-marble-handicrafts/marble-chhatri/iepdz12ipahmgana6qk5.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-236",
    "name": "Marble Chhatri Design #20",
    "slug": "marble-chhatri-design-20",
    "category_id": "cat-11",
    "category_name": "Marble Chhatri",
    "category_slug": "marble-chhatri",
    "description": "Heritage Rajasthani domed marble chhatris, garden pavilions, and stone canopy structures. Custom sizes and design variations available upon inquiry.",
    "material": "Red Sandstone & White Marble",
    "size": "Custom Dimensions Available",
    "finish": "Natural Stone Polish",
    "work_type": "Dome Architecture Carving",
    "price": "₹1,97,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 20,
    "images": [
      {
        "id": "img-236-1",
        "product_id": "prod-236",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818962/gbm-marble-handicrafts/marble-chhatri/mbkw5ntjjpnmjebrxvbv.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-237",
    "name": "Marble Jali Panel Design #1",
    "slug": "marble-jali-panel-design-1",
    "category_id": "cat-13",
    "category_name": "Marble Jali Panel",
    "category_slug": "marble-jali-panel",
    "description": "Custom carved marble jali screens, partition wall lattice panels, and decorative stone grills. Custom sizes and design variations available upon inquiry.",
    "material": "Banswara White Marble",
    "size": "Custom Dimensions Available",
    "finish": "Matte Smooth",
    "work_type": "Precision Pierced Cutwork",
    "price": "₹22,000",
    "is_featured": true,
    "is_published": true,
    "sort_order": 1,
    "images": [
      {
        "id": "img-237-1",
        "product_id": "prod-237",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818965/gbm-marble-handicrafts/marble-jali-panel/cfjmqjfams3j5w9zqmmw.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-238",
    "name": "Marble Jali Panel Design #2",
    "slug": "marble-jali-panel-design-2",
    "category_id": "cat-13",
    "category_name": "Marble Jali Panel",
    "category_slug": "marble-jali-panel",
    "description": "Custom carved marble jali screens, partition wall lattice panels, and decorative stone grills. Custom sizes and design variations available upon inquiry.",
    "material": "Banswara White Marble",
    "size": "Custom Dimensions Available",
    "finish": "Matte Smooth",
    "work_type": "Precision Pierced Cutwork",
    "price": "₹24,500",
    "is_featured": true,
    "is_published": true,
    "sort_order": 2,
    "images": [
      {
        "id": "img-238-1",
        "product_id": "prod-238",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818965/gbm-marble-handicrafts/marble-jali-panel/idxbwh263sshg8gnyr2n.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-239",
    "name": "Marble Jali Panel Design #3",
    "slug": "marble-jali-panel-design-3",
    "category_id": "cat-13",
    "category_name": "Marble Jali Panel",
    "category_slug": "marble-jali-panel",
    "description": "Custom carved marble jali screens, partition wall lattice panels, and decorative stone grills. Custom sizes and design variations available upon inquiry.",
    "material": "Banswara White Marble",
    "size": "Custom Dimensions Available",
    "finish": "Matte Smooth",
    "work_type": "Precision Pierced Cutwork",
    "price": "₹27,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 3,
    "images": [
      {
        "id": "img-239-1",
        "product_id": "prod-239",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818968/gbm-marble-handicrafts/marble-jali-panel/ld3dgt9esebi6obzdyfl.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-240",
    "name": "Marble Jali Panel Design #4",
    "slug": "marble-jali-panel-design-4",
    "category_id": "cat-13",
    "category_name": "Marble Jali Panel",
    "category_slug": "marble-jali-panel",
    "description": "Custom carved marble jali screens, partition wall lattice panels, and decorative stone grills. Custom sizes and design variations available upon inquiry.",
    "material": "Banswara White Marble",
    "size": "Custom Dimensions Available",
    "finish": "Matte Smooth",
    "work_type": "Precision Pierced Cutwork",
    "price": "₹29,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 4,
    "images": [
      {
        "id": "img-240-1",
        "product_id": "prod-240",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818968/gbm-marble-handicrafts/marble-jali-panel/prwpjmgc1sohubgxjzho.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-241",
    "name": "Marble Jali Panel Design #5",
    "slug": "marble-jali-panel-design-5",
    "category_id": "cat-13",
    "category_name": "Marble Jali Panel",
    "category_slug": "marble-jali-panel",
    "description": "Custom carved marble jali screens, partition wall lattice panels, and decorative stone grills. Custom sizes and design variations available upon inquiry.",
    "material": "Banswara White Marble",
    "size": "Custom Dimensions Available",
    "finish": "Matte Smooth",
    "work_type": "Precision Pierced Cutwork",
    "price": "₹32,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 5,
    "images": [
      {
        "id": "img-241-1",
        "product_id": "prod-241",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818966/gbm-marble-handicrafts/marble-jali-panel/ik4f58i4uyakkwfxippv.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-242",
    "name": "Marble Jali Panel Design #6",
    "slug": "marble-jali-panel-design-6",
    "category_id": "cat-13",
    "category_name": "Marble Jali Panel",
    "category_slug": "marble-jali-panel",
    "description": "Custom carved marble jali screens, partition wall lattice panels, and decorative stone grills. Custom sizes and design variations available upon inquiry.",
    "material": "Banswara White Marble",
    "size": "Custom Dimensions Available",
    "finish": "Matte Smooth",
    "work_type": "Precision Pierced Cutwork",
    "price": "₹34,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 6,
    "images": [
      {
        "id": "img-242-1",
        "product_id": "prod-242",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818968/gbm-marble-handicrafts/marble-jali-panel/sfdchxhjoj10jzquykkq.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-243",
    "name": "Marble Jali Panel Design #7",
    "slug": "marble-jali-panel-design-7",
    "category_id": "cat-13",
    "category_name": "Marble Jali Panel",
    "category_slug": "marble-jali-panel",
    "description": "Custom carved marble jali screens, partition wall lattice panels, and decorative stone grills. Custom sizes and design variations available upon inquiry.",
    "material": "Banswara White Marble",
    "size": "Custom Dimensions Available",
    "finish": "Matte Smooth",
    "work_type": "Precision Pierced Cutwork",
    "price": "₹37,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 7,
    "images": [
      {
        "id": "img-243-1",
        "product_id": "prod-243",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818972/gbm-marble-handicrafts/marble-jali-panel/ercyqyygumyxzysj517f.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-244",
    "name": "Marble Jali Panel Design #8",
    "slug": "marble-jali-panel-design-8",
    "category_id": "cat-13",
    "category_name": "Marble Jali Panel",
    "category_slug": "marble-jali-panel",
    "description": "Custom carved marble jali screens, partition wall lattice panels, and decorative stone grills. Custom sizes and design variations available upon inquiry.",
    "material": "Banswara White Marble",
    "size": "Custom Dimensions Available",
    "finish": "Matte Smooth",
    "work_type": "Precision Pierced Cutwork",
    "price": "₹39,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 8,
    "images": [
      {
        "id": "img-244-1",
        "product_id": "prod-244",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818972/gbm-marble-handicrafts/marble-jali-panel/fke1npp9jrmlrpwprskj.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-245",
    "name": "Marble Jali Panel Design #9",
    "slug": "marble-jali-panel-design-9",
    "category_id": "cat-13",
    "category_name": "Marble Jali Panel",
    "category_slug": "marble-jali-panel",
    "description": "Custom carved marble jali screens, partition wall lattice panels, and decorative stone grills. Custom sizes and design variations available upon inquiry.",
    "material": "Banswara White Marble",
    "size": "Custom Dimensions Available",
    "finish": "Matte Smooth",
    "work_type": "Precision Pierced Cutwork",
    "price": "₹42,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 9,
    "images": [
      {
        "id": "img-245-1",
        "product_id": "prod-245",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818973/gbm-marble-handicrafts/marble-jali-panel/ukq169gvnbivwmbis7gs.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-246",
    "name": "Marble Jali Panel Design #10",
    "slug": "marble-jali-panel-design-10",
    "category_id": "cat-13",
    "category_name": "Marble Jali Panel",
    "category_slug": "marble-jali-panel",
    "description": "Custom carved marble jali screens, partition wall lattice panels, and decorative stone grills. Custom sizes and design variations available upon inquiry.",
    "material": "Banswara White Marble",
    "size": "Custom Dimensions Available",
    "finish": "Matte Smooth",
    "work_type": "Precision Pierced Cutwork",
    "price": "₹44,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 10,
    "images": [
      {
        "id": "img-246-1",
        "product_id": "prod-246",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818973/gbm-marble-handicrafts/marble-jali-panel/yjqtpkyjlgoxom3vqwpb.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-247",
    "name": "Marble Singhasan Design #1",
    "slug": "marble-singhasan-design-1",
    "category_id": "cat-14",
    "category_name": "Marble Singhasan",
    "category_slug": "marble-singhasan",
    "description": "Royal carved marble thrones (singhasan) and raised pedestals for deity idols and pooja rooms. Custom sizes and design variations available upon inquiry.",
    "material": "Makrana Sangemarmar",
    "size": "Custom Dimensions Available",
    "finish": "Gold Accents",
    "work_type": "Royal Lion & Peacock Relief",
    "price": "₹28,000",
    "is_featured": true,
    "is_published": true,
    "sort_order": 1,
    "images": [
      {
        "id": "img-247-1",
        "product_id": "prod-247",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818975/gbm-marble-handicrafts/marble-singhasan/poeoptocvkyr5gwmbn0r.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-248",
    "name": "Marble Singhasan Design #2",
    "slug": "marble-singhasan-design-2",
    "category_id": "cat-14",
    "category_name": "Marble Singhasan",
    "category_slug": "marble-singhasan",
    "description": "Royal carved marble thrones (singhasan) and raised pedestals for deity idols and pooja rooms. Custom sizes and design variations available upon inquiry.",
    "material": "Makrana Sangemarmar",
    "size": "Custom Dimensions Available",
    "finish": "Gold Accents",
    "work_type": "Royal Lion & Peacock Relief",
    "price": "₹30,500",
    "is_featured": true,
    "is_published": true,
    "sort_order": 2,
    "images": [
      {
        "id": "img-248-1",
        "product_id": "prod-248",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818975/gbm-marble-handicrafts/marble-singhasan/hrxdefefncnkfnp9be3j.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-249",
    "name": "Marble Singhasan Design #3",
    "slug": "marble-singhasan-design-3",
    "category_id": "cat-14",
    "category_name": "Marble Singhasan",
    "category_slug": "marble-singhasan",
    "description": "Royal carved marble thrones (singhasan) and raised pedestals for deity idols and pooja rooms. Custom sizes and design variations available upon inquiry.",
    "material": "Makrana Sangemarmar",
    "size": "Custom Dimensions Available",
    "finish": "Gold Accents",
    "work_type": "Royal Lion & Peacock Relief",
    "price": "₹33,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 3,
    "images": [
      {
        "id": "img-249-1",
        "product_id": "prod-249",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818975/gbm-marble-handicrafts/marble-singhasan/k9jlkpviw5yj4oppajgc.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-250",
    "name": "Marble Singhasan Design #4",
    "slug": "marble-singhasan-design-4",
    "category_id": "cat-14",
    "category_name": "Marble Singhasan",
    "category_slug": "marble-singhasan",
    "description": "Royal carved marble thrones (singhasan) and raised pedestals for deity idols and pooja rooms. Custom sizes and design variations available upon inquiry.",
    "material": "Makrana Sangemarmar",
    "size": "Custom Dimensions Available",
    "finish": "Gold Accents",
    "work_type": "Royal Lion & Peacock Relief",
    "price": "₹35,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 4,
    "images": [
      {
        "id": "img-250-1",
        "product_id": "prod-250",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818974/gbm-marble-handicrafts/marble-singhasan/i15idosvktmfkq73uxnc.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-251",
    "name": "Marble Singhasan Design #5",
    "slug": "marble-singhasan-design-5",
    "category_id": "cat-14",
    "category_name": "Marble Singhasan",
    "category_slug": "marble-singhasan",
    "description": "Royal carved marble thrones (singhasan) and raised pedestals for deity idols and pooja rooms. Custom sizes and design variations available upon inquiry.",
    "material": "Makrana Sangemarmar",
    "size": "Custom Dimensions Available",
    "finish": "Gold Accents",
    "work_type": "Royal Lion & Peacock Relief",
    "price": "₹38,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 5,
    "images": [
      {
        "id": "img-251-1",
        "product_id": "prod-251",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818976/gbm-marble-handicrafts/marble-singhasan/tlon9ns1g5wz4s6v9zmi.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-252",
    "name": "Marble Table Top Design #1",
    "slug": "marble-table-top-design-1",
    "category_id": "cat-15",
    "category_name": "Marble Table Top",
    "category_slug": "marble-table-top",
    "description": "Custom Pietra Dura inlay and solid polished marble dining, coffee, and side table tops. Custom sizes and design variations available upon inquiry.",
    "material": "Black Marble & Lapis Lazuli",
    "size": "Custom Dimensions Available",
    "finish": "Mirror Gloss Finish",
    "work_type": "Pietra Dura Inlay Art",
    "price": "₹62,000",
    "is_featured": true,
    "is_published": true,
    "sort_order": 1,
    "images": [
      {
        "id": "img-252-1",
        "product_id": "prod-252",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818978/gbm-marble-handicrafts/marble-table-top/uptqnngcke0f3qzbccwn.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-253",
    "name": "Marble Table Top Design #2",
    "slug": "marble-table-top-design-2",
    "category_id": "cat-15",
    "category_name": "Marble Table Top",
    "category_slug": "marble-table-top",
    "description": "Custom Pietra Dura inlay and solid polished marble dining, coffee, and side table tops. Custom sizes and design variations available upon inquiry.",
    "material": "Black Marble & Lapis Lazuli",
    "size": "Custom Dimensions Available",
    "finish": "Mirror Gloss Finish",
    "work_type": "Pietra Dura Inlay Art",
    "price": "₹64,500",
    "is_featured": true,
    "is_published": true,
    "sort_order": 2,
    "images": [
      {
        "id": "img-253-1",
        "product_id": "prod-253",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818978/gbm-marble-handicrafts/marble-table-top/djzcppuqodwsehkmwapp.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-254",
    "name": "Marble Table Top Design #3",
    "slug": "marble-table-top-design-3",
    "category_id": "cat-15",
    "category_name": "Marble Table Top",
    "category_slug": "marble-table-top",
    "description": "Custom Pietra Dura inlay and solid polished marble dining, coffee, and side table tops. Custom sizes and design variations available upon inquiry.",
    "material": "Black Marble & Lapis Lazuli",
    "size": "Custom Dimensions Available",
    "finish": "Mirror Gloss Finish",
    "work_type": "Pietra Dura Inlay Art",
    "price": "₹67,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 3,
    "images": [
      {
        "id": "img-254-1",
        "product_id": "prod-254",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818978/gbm-marble-handicrafts/marble-table-top/verkcmdk6oc39yaus1bt.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-255",
    "name": "Marble Table Top Design #4",
    "slug": "marble-table-top-design-4",
    "category_id": "cat-15",
    "category_name": "Marble Table Top",
    "category_slug": "marble-table-top",
    "description": "Custom Pietra Dura inlay and solid polished marble dining, coffee, and side table tops. Custom sizes and design variations available upon inquiry.",
    "material": "Black Marble & Lapis Lazuli",
    "size": "Custom Dimensions Available",
    "finish": "Mirror Gloss Finish",
    "work_type": "Pietra Dura Inlay Art",
    "price": "₹69,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 4,
    "images": [
      {
        "id": "img-255-1",
        "product_id": "prod-255",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818978/gbm-marble-handicrafts/marble-table-top/rltuyw3goo8xkrho4ath.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-256",
    "name": "Marble Table Top Design #5",
    "slug": "marble-table-top-design-5",
    "category_id": "cat-15",
    "category_name": "Marble Table Top",
    "category_slug": "marble-table-top",
    "description": "Custom Pietra Dura inlay and solid polished marble dining, coffee, and side table tops. Custom sizes and design variations available upon inquiry.",
    "material": "Black Marble & Lapis Lazuli",
    "size": "Custom Dimensions Available",
    "finish": "Mirror Gloss Finish",
    "work_type": "Pietra Dura Inlay Art",
    "price": "₹72,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 5,
    "images": [
      {
        "id": "img-256-1",
        "product_id": "prod-256",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818978/gbm-marble-handicrafts/marble-table-top/hynuwywzsjdck6stypaa.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-257",
    "name": "Marble Table Top Design #6",
    "slug": "marble-table-top-design-6",
    "category_id": "cat-15",
    "category_name": "Marble Table Top",
    "category_slug": "marble-table-top",
    "description": "Custom Pietra Dura inlay and solid polished marble dining, coffee, and side table tops. Custom sizes and design variations available upon inquiry.",
    "material": "Black Marble & Lapis Lazuli",
    "size": "Custom Dimensions Available",
    "finish": "Mirror Gloss Finish",
    "work_type": "Pietra Dura Inlay Art",
    "price": "₹74,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 6,
    "images": [
      {
        "id": "img-257-1",
        "product_id": "prod-257",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818982/gbm-marble-handicrafts/marble-table-top/lc577rppfzmzjf1uos0a.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-258",
    "name": "Marble Table Top Design #7",
    "slug": "marble-table-top-design-7",
    "category_id": "cat-15",
    "category_name": "Marble Table Top",
    "category_slug": "marble-table-top",
    "description": "Custom Pietra Dura inlay and solid polished marble dining, coffee, and side table tops. Custom sizes and design variations available upon inquiry.",
    "material": "Black Marble & Lapis Lazuli",
    "size": "Custom Dimensions Available",
    "finish": "Mirror Gloss Finish",
    "work_type": "Pietra Dura Inlay Art",
    "price": "₹77,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 7,
    "images": [
      {
        "id": "img-258-1",
        "product_id": "prod-258",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818985/gbm-marble-handicrafts/marble-table-top/s6fazlobppylritppt8c.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-259",
    "name": "Marble Table Top Design #8",
    "slug": "marble-table-top-design-8",
    "category_id": "cat-15",
    "category_name": "Marble Table Top",
    "category_slug": "marble-table-top",
    "description": "Custom Pietra Dura inlay and solid polished marble dining, coffee, and side table tops. Custom sizes and design variations available upon inquiry.",
    "material": "Black Marble & Lapis Lazuli",
    "size": "Custom Dimensions Available",
    "finish": "Mirror Gloss Finish",
    "work_type": "Pietra Dura Inlay Art",
    "price": "₹79,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 8,
    "images": [
      {
        "id": "img-259-1",
        "product_id": "prod-259",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818986/gbm-marble-handicrafts/marble-table-top/uypyg6gmjr3kmkpbzp9t.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-260",
    "name": "Marble Table Top Design #9",
    "slug": "marble-table-top-design-9",
    "category_id": "cat-15",
    "category_name": "Marble Table Top",
    "category_slug": "marble-table-top",
    "description": "Custom Pietra Dura inlay and solid polished marble dining, coffee, and side table tops. Custom sizes and design variations available upon inquiry.",
    "material": "Black Marble & Lapis Lazuli",
    "size": "Custom Dimensions Available",
    "finish": "Mirror Gloss Finish",
    "work_type": "Pietra Dura Inlay Art",
    "price": "₹82,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 9,
    "images": [
      {
        "id": "img-260-1",
        "product_id": "prod-260",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818985/gbm-marble-handicrafts/marble-table-top/qm92f5f4jjfpi74mrkzl.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-261",
    "name": "Marble Table Top Design #10",
    "slug": "marble-table-top-design-10",
    "category_id": "cat-15",
    "category_name": "Marble Table Top",
    "category_slug": "marble-table-top",
    "description": "Custom Pietra Dura inlay and solid polished marble dining, coffee, and side table tops. Custom sizes and design variations available upon inquiry.",
    "material": "Black Marble & Lapis Lazuli",
    "size": "Custom Dimensions Available",
    "finish": "Mirror Gloss Finish",
    "work_type": "Pietra Dura Inlay Art",
    "price": "₹84,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 10,
    "images": [
      {
        "id": "img-261-1",
        "product_id": "prod-261",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818985/gbm-marble-handicrafts/marble-table-top/svbmtz1ucwzyq434pej3.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-262",
    "name": "Marble Table Top Design #11",
    "slug": "marble-table-top-design-11",
    "category_id": "cat-15",
    "category_name": "Marble Table Top",
    "category_slug": "marble-table-top",
    "description": "Custom Pietra Dura inlay and solid polished marble dining, coffee, and side table tops. Custom sizes and design variations available upon inquiry.",
    "material": "Black Marble & Lapis Lazuli",
    "size": "Custom Dimensions Available",
    "finish": "Mirror Gloss Finish",
    "work_type": "Pietra Dura Inlay Art",
    "price": "₹87,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 11,
    "images": [
      {
        "id": "img-262-1",
        "product_id": "prod-262",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818987/gbm-marble-handicrafts/marble-table-top/sbemvurxysdreiek9npb.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-263",
    "name": "Marble Table Top Design #12",
    "slug": "marble-table-top-design-12",
    "category_id": "cat-15",
    "category_name": "Marble Table Top",
    "category_slug": "marble-table-top",
    "description": "Custom Pietra Dura inlay and solid polished marble dining, coffee, and side table tops. Custom sizes and design variations available upon inquiry.",
    "material": "Black Marble & Lapis Lazuli",
    "size": "Custom Dimensions Available",
    "finish": "Mirror Gloss Finish",
    "work_type": "Pietra Dura Inlay Art",
    "price": "₹89,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 12,
    "images": [
      {
        "id": "img-263-1",
        "product_id": "prod-263",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818986/gbm-marble-handicrafts/marble-table-top/k9sokolt0s9n3os0vxg2.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-264",
    "name": "Marble Table Top Design #13",
    "slug": "marble-table-top-design-13",
    "category_id": "cat-15",
    "category_name": "Marble Table Top",
    "category_slug": "marble-table-top",
    "description": "Custom Pietra Dura inlay and solid polished marble dining, coffee, and side table tops. Custom sizes and design variations available upon inquiry.",
    "material": "Black Marble & Lapis Lazuli",
    "size": "Custom Dimensions Available",
    "finish": "Mirror Gloss Finish",
    "work_type": "Pietra Dura Inlay Art",
    "price": "₹92,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 13,
    "images": [
      {
        "id": "img-264-1",
        "product_id": "prod-264",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818990/gbm-marble-handicrafts/marble-table-top/xxlmxb4sm1gmtftjzgwx.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-265",
    "name": "Marble Table Top Design #14",
    "slug": "marble-table-top-design-14",
    "category_id": "cat-15",
    "category_name": "Marble Table Top",
    "category_slug": "marble-table-top",
    "description": "Custom Pietra Dura inlay and solid polished marble dining, coffee, and side table tops. Custom sizes and design variations available upon inquiry.",
    "material": "Black Marble & Lapis Lazuli",
    "size": "Custom Dimensions Available",
    "finish": "Mirror Gloss Finish",
    "work_type": "Pietra Dura Inlay Art",
    "price": "₹94,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 14,
    "images": [
      {
        "id": "img-265-1",
        "product_id": "prod-265",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818990/gbm-marble-handicrafts/marble-table-top/kxt6yvj7wkwxhhifhojy.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-266",
    "name": "Marble Table Top Design #15",
    "slug": "marble-table-top-design-15",
    "category_id": "cat-15",
    "category_name": "Marble Table Top",
    "category_slug": "marble-table-top",
    "description": "Custom Pietra Dura inlay and solid polished marble dining, coffee, and side table tops. Custom sizes and design variations available upon inquiry.",
    "material": "Black Marble & Lapis Lazuli",
    "size": "Custom Dimensions Available",
    "finish": "Mirror Gloss Finish",
    "work_type": "Pietra Dura Inlay Art",
    "price": "₹97,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 15,
    "images": [
      {
        "id": "img-266-1",
        "product_id": "prod-266",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787818990/gbm-marble-handicrafts/marble-table-top/hnqkoxrhiasv1uz3pmaf.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-267",
    "name": "Marble Table Top Design #16",
    "slug": "marble-table-top-design-16",
    "category_id": "cat-15",
    "category_name": "Marble Table Top",
    "category_slug": "marble-table-top",
    "description": "Custom Pietra Dura inlay and solid polished marble dining, coffee, and side table tops. Custom sizes and design variations available upon inquiry.",
    "material": "Black Marble & Lapis Lazuli",
    "size": "Custom Dimensions Available",
    "finish": "Mirror Gloss Finish",
    "work_type": "Pietra Dura Inlay Art",
    "price": "₹99,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 16,
    "images": [
      {
        "id": "img-267-1",
        "product_id": "prod-267",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787819004/gbm-marble-handicrafts/marble-table-top/hmdsmyb3jvlcsfcibapv.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-268",
    "name": "Marble Tulsi Stand Design #1",
    "slug": "marble-tulsi-stand-design-1",
    "category_id": "cat-16",
    "category_name": "Marble Tulsi Stand",
    "category_slug": "marble-tulsi-stand",
    "description": "Ornate white marble Tulsi Vrindavan planters and carved stands for courtyard and balcony devotion. Custom sizes and design variations available upon inquiry.",
    "material": "White Makrana Stone",
    "size": "Custom Dimensions Available",
    "finish": "Weatherproof Polish",
    "work_type": "Vrindavan Chisel Relief",
    "price": "₹16,500",
    "is_featured": true,
    "is_published": true,
    "sort_order": 1,
    "images": [
      {
        "id": "img-268-1",
        "product_id": "prod-268",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787819007/gbm-marble-handicrafts/marble-tulsi-stand/tcfqvlcoveoor3llux6c.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-269",
    "name": "Marble Tulsi Stand Design #2",
    "slug": "marble-tulsi-stand-design-2",
    "category_id": "cat-16",
    "category_name": "Marble Tulsi Stand",
    "category_slug": "marble-tulsi-stand",
    "description": "Ornate white marble Tulsi Vrindavan planters and carved stands for courtyard and balcony devotion. Custom sizes and design variations available upon inquiry.",
    "material": "White Makrana Stone",
    "size": "Custom Dimensions Available",
    "finish": "Weatherproof Polish",
    "work_type": "Vrindavan Chisel Relief",
    "price": "₹19,000",
    "is_featured": true,
    "is_published": true,
    "sort_order": 2,
    "images": [
      {
        "id": "img-269-1",
        "product_id": "prod-269",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787819010/gbm-marble-handicrafts/marble-tulsi-stand/rnbt9iir8lnxyvlrmkfv.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-270",
    "name": "Marble Tulsi Stand Design #3",
    "slug": "marble-tulsi-stand-design-3",
    "category_id": "cat-16",
    "category_name": "Marble Tulsi Stand",
    "category_slug": "marble-tulsi-stand",
    "description": "Ornate white marble Tulsi Vrindavan planters and carved stands for courtyard and balcony devotion. Custom sizes and design variations available upon inquiry.",
    "material": "White Makrana Stone",
    "size": "Custom Dimensions Available",
    "finish": "Weatherproof Polish",
    "work_type": "Vrindavan Chisel Relief",
    "price": "₹21,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 3,
    "images": [
      {
        "id": "img-270-1",
        "product_id": "prod-270",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787819008/gbm-marble-handicrafts/marble-tulsi-stand/px3rdicuxgddfrcz68zg.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-271",
    "name": "Marble Tulsi Stand Design #4",
    "slug": "marble-tulsi-stand-design-4",
    "category_id": "cat-16",
    "category_name": "Marble Tulsi Stand",
    "category_slug": "marble-tulsi-stand",
    "description": "Ornate white marble Tulsi Vrindavan planters and carved stands for courtyard and balcony devotion. Custom sizes and design variations available upon inquiry.",
    "material": "White Makrana Stone",
    "size": "Custom Dimensions Available",
    "finish": "Weatherproof Polish",
    "work_type": "Vrindavan Chisel Relief",
    "price": "₹24,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 4,
    "images": [
      {
        "id": "img-271-1",
        "product_id": "prod-271",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787819011/gbm-marble-handicrafts/marble-tulsi-stand/lzpi3vkq3uhy7it5xkfq.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-272",
    "name": "Marble Tulsi Stand Design #5",
    "slug": "marble-tulsi-stand-design-5",
    "category_id": "cat-16",
    "category_name": "Marble Tulsi Stand",
    "category_slug": "marble-tulsi-stand",
    "description": "Ornate white marble Tulsi Vrindavan planters and carved stands for courtyard and balcony devotion. Custom sizes and design variations available upon inquiry.",
    "material": "White Makrana Stone",
    "size": "Custom Dimensions Available",
    "finish": "Weatherproof Polish",
    "work_type": "Vrindavan Chisel Relief",
    "price": "₹26,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 5,
    "images": [
      {
        "id": "img-272-1",
        "product_id": "prod-272",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787819012/gbm-marble-handicrafts/marble-tulsi-stand/zigkzk1xwrenyik4gprf.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-273",
    "name": "Painting Work Temple Design #1",
    "slug": "painting-work-temple-design-1",
    "category_id": "cat-17",
    "category_name": "Painting Work Temple",
    "category_slug": "painting-work-temple",
    "description": "Hand-painted Meenakari gold leaf embossed marble temples and color decorated home mandirs. Custom sizes and design variations available upon inquiry.",
    "material": "Makrana Marble & Oil Colors",
    "size": "Custom Dimensions Available",
    "finish": "Varnish Protected",
    "work_type": "Gold Leafing & Paint Art",
    "price": "₹92,000",
    "is_featured": true,
    "is_published": true,
    "sort_order": 1,
    "images": [
      {
        "id": "img-273-1",
        "product_id": "prod-273",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787819020/gbm-marble-handicrafts/painting-work-temple/gfbdge0yggpwedvgmygz.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-274",
    "name": "Painting Work Temple Design #2",
    "slug": "painting-work-temple-design-2",
    "category_id": "cat-17",
    "category_name": "Painting Work Temple",
    "category_slug": "painting-work-temple",
    "description": "Hand-painted Meenakari gold leaf embossed marble temples and color decorated home mandirs. Custom sizes and design variations available upon inquiry.",
    "material": "Makrana Marble & Oil Colors",
    "size": "Custom Dimensions Available",
    "finish": "Varnish Protected",
    "work_type": "Gold Leafing & Paint Art",
    "price": "₹94,500",
    "is_featured": true,
    "is_published": true,
    "sort_order": 2,
    "images": [
      {
        "id": "img-274-1",
        "product_id": "prod-274",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787819019/gbm-marble-handicrafts/painting-work-temple/tszbfsyiv4ejprfhogin.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-275",
    "name": "Painting Work Temple Design #3",
    "slug": "painting-work-temple-design-3",
    "category_id": "cat-17",
    "category_name": "Painting Work Temple",
    "category_slug": "painting-work-temple",
    "description": "Hand-painted Meenakari gold leaf embossed marble temples and color decorated home mandirs. Custom sizes and design variations available upon inquiry.",
    "material": "Makrana Marble & Oil Colors",
    "size": "Custom Dimensions Available",
    "finish": "Varnish Protected",
    "work_type": "Gold Leafing & Paint Art",
    "price": "₹97,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 3,
    "images": [
      {
        "id": "img-275-1",
        "product_id": "prod-275",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787819019/gbm-marble-handicrafts/painting-work-temple/eyynkighkr8teyr82ltu.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-276",
    "name": "Painting Work Temple Design #4",
    "slug": "painting-work-temple-design-4",
    "category_id": "cat-17",
    "category_name": "Painting Work Temple",
    "category_slug": "painting-work-temple",
    "description": "Hand-painted Meenakari gold leaf embossed marble temples and color decorated home mandirs. Custom sizes and design variations available upon inquiry.",
    "material": "Makrana Marble & Oil Colors",
    "size": "Custom Dimensions Available",
    "finish": "Varnish Protected",
    "work_type": "Gold Leafing & Paint Art",
    "price": "₹99,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 4,
    "images": [
      {
        "id": "img-276-1",
        "product_id": "prod-276",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787819019/gbm-marble-handicrafts/painting-work-temple/wr6phbzymctiaup2odyc.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-277",
    "name": "Statue Design #1",
    "slug": "statue-design-1",
    "category_id": "cat-18",
    "category_name": "Statue",
    "category_slug": "statue",
    "description": "Custom human portrait statues, bust sculptures, animal statues, and artistic marble figures. Custom sizes and design variations available upon inquiry.",
    "material": "Single Block White Marble",
    "size": "Custom Dimensions Available",
    "finish": "Fine Diamond Buffing",
    "work_type": "Realist Portrait Sculpting",
    "price": "₹75,000",
    "is_featured": true,
    "is_published": true,
    "sort_order": 1,
    "images": [
      {
        "id": "img-277-1",
        "product_id": "prod-277",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787819044/gbm-marble-handicrafts/statue/fd2pvpni87wykqtrritn.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-278",
    "name": "Statue Design #2",
    "slug": "statue-design-2",
    "category_id": "cat-18",
    "category_name": "Statue",
    "category_slug": "statue",
    "description": "Custom human portrait statues, bust sculptures, animal statues, and artistic marble figures. Custom sizes and design variations available upon inquiry.",
    "material": "Single Block White Marble",
    "size": "Custom Dimensions Available",
    "finish": "Fine Diamond Buffing",
    "work_type": "Realist Portrait Sculpting",
    "price": "₹77,500",
    "is_featured": true,
    "is_published": true,
    "sort_order": 2,
    "images": [
      {
        "id": "img-278-1",
        "product_id": "prod-278",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787819048/gbm-marble-handicrafts/statue/gx42los9lmyubjykxnbt.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-279",
    "name": "Statue Design #3",
    "slug": "statue-design-3",
    "category_id": "cat-18",
    "category_name": "Statue",
    "category_slug": "statue",
    "description": "Custom human portrait statues, bust sculptures, animal statues, and artistic marble figures. Custom sizes and design variations available upon inquiry.",
    "material": "Single Block White Marble",
    "size": "Custom Dimensions Available",
    "finish": "Fine Diamond Buffing",
    "work_type": "Realist Portrait Sculpting",
    "price": "₹80,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 3,
    "images": [
      {
        "id": "img-279-1",
        "product_id": "prod-279",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787819045/gbm-marble-handicrafts/statue/vsywc3bzhcqts4lfbnj7.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-280",
    "name": "Statue Design #4",
    "slug": "statue-design-4",
    "category_id": "cat-18",
    "category_name": "Statue",
    "category_slug": "statue",
    "description": "Custom human portrait statues, bust sculptures, animal statues, and artistic marble figures. Custom sizes and design variations available upon inquiry.",
    "material": "Single Block White Marble",
    "size": "Custom Dimensions Available",
    "finish": "Fine Diamond Buffing",
    "work_type": "Realist Portrait Sculpting",
    "price": "₹82,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 4,
    "images": [
      {
        "id": "img-280-1",
        "product_id": "prod-280",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787819048/gbm-marble-handicrafts/statue/e6oufvssupjphjxurzk1.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-281",
    "name": "Statue Design #5",
    "slug": "statue-design-5",
    "category_id": "cat-18",
    "category_name": "Statue",
    "category_slug": "statue",
    "description": "Custom human portrait statues, bust sculptures, animal statues, and artistic marble figures. Custom sizes and design variations available upon inquiry.",
    "material": "Single Block White Marble",
    "size": "Custom Dimensions Available",
    "finish": "Fine Diamond Buffing",
    "work_type": "Realist Portrait Sculpting",
    "price": "₹85,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 5,
    "images": [
      {
        "id": "img-281-1",
        "product_id": "prod-281",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787819062/gbm-marble-handicrafts/statue/hvvx4pbpozocauhcvu3x.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-282",
    "name": "Statue Design #6",
    "slug": "statue-design-6",
    "category_id": "cat-18",
    "category_name": "Statue",
    "category_slug": "statue",
    "description": "Custom human portrait statues, bust sculptures, animal statues, and artistic marble figures. Custom sizes and design variations available upon inquiry.",
    "material": "Single Block White Marble",
    "size": "Custom Dimensions Available",
    "finish": "Fine Diamond Buffing",
    "work_type": "Realist Portrait Sculpting",
    "price": "₹87,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 6,
    "images": [
      {
        "id": "img-282-1",
        "product_id": "prod-282",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787819058/gbm-marble-handicrafts/statue/dr0zhgfpi7jduvzqsto0.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-283",
    "name": "Statue Design #7",
    "slug": "statue-design-7",
    "category_id": "cat-18",
    "category_name": "Statue",
    "category_slug": "statue",
    "description": "Custom human portrait statues, bust sculptures, animal statues, and artistic marble figures. Custom sizes and design variations available upon inquiry.",
    "material": "Single Block White Marble",
    "size": "Custom Dimensions Available",
    "finish": "Fine Diamond Buffing",
    "work_type": "Realist Portrait Sculpting",
    "price": "₹90,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 7,
    "images": [
      {
        "id": "img-283-1",
        "product_id": "prod-283",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787819078/gbm-marble-handicrafts/statue/thlmum03o2zwkbwwuxll.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-284",
    "name": "Statue Design #8",
    "slug": "statue-design-8",
    "category_id": "cat-18",
    "category_name": "Statue",
    "category_slug": "statue",
    "description": "Custom human portrait statues, bust sculptures, animal statues, and artistic marble figures. Custom sizes and design variations available upon inquiry.",
    "material": "Single Block White Marble",
    "size": "Custom Dimensions Available",
    "finish": "Fine Diamond Buffing",
    "work_type": "Realist Portrait Sculpting",
    "price": "₹92,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 8,
    "images": [
      {
        "id": "img-284-1",
        "product_id": "prod-284",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787819070/gbm-marble-handicrafts/statue/nijc2wjscupx2jx0nlmf.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-285",
    "name": "Statue Design #9",
    "slug": "statue-design-9",
    "category_id": "cat-18",
    "category_name": "Statue",
    "category_slug": "statue",
    "description": "Custom human portrait statues, bust sculptures, animal statues, and artistic marble figures. Custom sizes and design variations available upon inquiry.",
    "material": "Single Block White Marble",
    "size": "Custom Dimensions Available",
    "finish": "Fine Diamond Buffing",
    "work_type": "Realist Portrait Sculpting",
    "price": "₹95,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 9,
    "images": [
      {
        "id": "img-285-1",
        "product_id": "prod-285",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787819078/gbm-marble-handicrafts/statue/dohbow0k7ji87mt2huik.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-286",
    "name": "Statue Design #10",
    "slug": "statue-design-10",
    "category_id": "cat-18",
    "category_name": "Statue",
    "category_slug": "statue",
    "description": "Custom human portrait statues, bust sculptures, animal statues, and artistic marble figures. Custom sizes and design variations available upon inquiry.",
    "material": "Single Block White Marble",
    "size": "Custom Dimensions Available",
    "finish": "Fine Diamond Buffing",
    "work_type": "Realist Portrait Sculpting",
    "price": "₹97,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 10,
    "images": [
      {
        "id": "img-286-1",
        "product_id": "prod-286",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787819071/gbm-marble-handicrafts/statue/b5iurzirjzq9ol254d9u.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-287",
    "name": "Vedi Temple Design #1",
    "slug": "vedi-temple-design-1",
    "category_id": "cat-19",
    "category_name": "Vedi Temple",
    "category_slug": "vedi-temple",
    "description": "Traditional marble havan vedi, pooja vedi temples, and sacred ritual altar structures. Custom sizes and design variations available upon inquiry.",
    "material": "Heat Resistant White Stone",
    "size": "Custom Dimensions Available",
    "finish": "Natural Untreated Polish",
    "work_type": "Sacred Geometry Carving",
    "price": "₹42,000",
    "is_featured": true,
    "is_published": true,
    "sort_order": 1,
    "images": [
      {
        "id": "img-287-1",
        "product_id": "prod-287",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787819081/gbm-marble-handicrafts/vedi-temple/xepogtkmei7nvo7sjxux.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-288",
    "name": "Vedi Temple Design #2",
    "slug": "vedi-temple-design-2",
    "category_id": "cat-19",
    "category_name": "Vedi Temple",
    "category_slug": "vedi-temple",
    "description": "Traditional marble havan vedi, pooja vedi temples, and sacred ritual altar structures. Custom sizes and design variations available upon inquiry.",
    "material": "Heat Resistant White Stone",
    "size": "Custom Dimensions Available",
    "finish": "Natural Untreated Polish",
    "work_type": "Sacred Geometry Carving",
    "price": "₹44,500",
    "is_featured": true,
    "is_published": true,
    "sort_order": 2,
    "images": [
      {
        "id": "img-288-1",
        "product_id": "prod-288",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787819081/gbm-marble-handicrafts/vedi-temple/xnddxikch5gcd3uii5mi.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-289",
    "name": "Vedi Temple Design #3",
    "slug": "vedi-temple-design-3",
    "category_id": "cat-19",
    "category_name": "Vedi Temple",
    "category_slug": "vedi-temple",
    "description": "Traditional marble havan vedi, pooja vedi temples, and sacred ritual altar structures. Custom sizes and design variations available upon inquiry.",
    "material": "Heat Resistant White Stone",
    "size": "Custom Dimensions Available",
    "finish": "Natural Untreated Polish",
    "work_type": "Sacred Geometry Carving",
    "price": "₹47,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 3,
    "images": [
      {
        "id": "img-289-1",
        "product_id": "prod-289",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787819083/gbm-marble-handicrafts/vedi-temple/wptq6cjq994pb2fihyxa.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-290",
    "name": "Vedi Temple Design #4",
    "slug": "vedi-temple-design-4",
    "category_id": "cat-19",
    "category_name": "Vedi Temple",
    "category_slug": "vedi-temple",
    "description": "Traditional marble havan vedi, pooja vedi temples, and sacred ritual altar structures. Custom sizes and design variations available upon inquiry.",
    "material": "Heat Resistant White Stone",
    "size": "Custom Dimensions Available",
    "finish": "Natural Untreated Polish",
    "work_type": "Sacred Geometry Carving",
    "price": "₹49,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 4,
    "images": [
      {
        "id": "img-290-1",
        "product_id": "prod-290",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787819086/gbm-marble-handicrafts/vedi-temple/wviu52bbuu1lbbtatksg.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-291",
    "name": "Vedi Temple Design #5",
    "slug": "vedi-temple-design-5",
    "category_id": "cat-19",
    "category_name": "Vedi Temple",
    "category_slug": "vedi-temple",
    "description": "Traditional marble havan vedi, pooja vedi temples, and sacred ritual altar structures. Custom sizes and design variations available upon inquiry.",
    "material": "Heat Resistant White Stone",
    "size": "Custom Dimensions Available",
    "finish": "Natural Untreated Polish",
    "work_type": "Sacred Geometry Carving",
    "price": "₹52,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 5,
    "images": [
      {
        "id": "img-291-1",
        "product_id": "prod-291",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787819086/gbm-marble-handicrafts/vedi-temple/w9llypuwt2ut6qiyufiw.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-292",
    "name": "Vedi Temple Design #6",
    "slug": "vedi-temple-design-6",
    "category_id": "cat-19",
    "category_name": "Vedi Temple",
    "category_slug": "vedi-temple",
    "description": "Traditional marble havan vedi, pooja vedi temples, and sacred ritual altar structures. Custom sizes and design variations available upon inquiry.",
    "material": "Heat Resistant White Stone",
    "size": "Custom Dimensions Available",
    "finish": "Natural Untreated Polish",
    "work_type": "Sacred Geometry Carving",
    "price": "₹54,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 6,
    "images": [
      {
        "id": "img-292-1",
        "product_id": "prod-292",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787819085/gbm-marble-handicrafts/vedi-temple/xsliq1rmfcdqai3idgm7.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-293",
    "name": "Vedi Temple Design #7",
    "slug": "vedi-temple-design-7",
    "category_id": "cat-19",
    "category_name": "Vedi Temple",
    "category_slug": "vedi-temple",
    "description": "Traditional marble havan vedi, pooja vedi temples, and sacred ritual altar structures. Custom sizes and design variations available upon inquiry.",
    "material": "Heat Resistant White Stone",
    "size": "Custom Dimensions Available",
    "finish": "Natural Untreated Polish",
    "work_type": "Sacred Geometry Carving",
    "price": "₹57,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 7,
    "images": [
      {
        "id": "img-293-1",
        "product_id": "prod-293",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787819092/gbm-marble-handicrafts/vedi-temple/mx3ffs6ndokipo3ttgr8.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-294",
    "name": "Vedi Temple Design #8",
    "slug": "vedi-temple-design-8",
    "category_id": "cat-19",
    "category_name": "Vedi Temple",
    "category_slug": "vedi-temple",
    "description": "Traditional marble havan vedi, pooja vedi temples, and sacred ritual altar structures. Custom sizes and design variations available upon inquiry.",
    "material": "Heat Resistant White Stone",
    "size": "Custom Dimensions Available",
    "finish": "Natural Untreated Polish",
    "work_type": "Sacred Geometry Carving",
    "price": "₹59,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 8,
    "images": [
      {
        "id": "img-294-1",
        "product_id": "prod-294",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787819091/gbm-marble-handicrafts/vedi-temple/kmd2ycmxrmh1thei9o1p.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-295",
    "name": "Vedi Temple Design #9",
    "slug": "vedi-temple-design-9",
    "category_id": "cat-19",
    "category_name": "Vedi Temple",
    "category_slug": "vedi-temple",
    "description": "Traditional marble havan vedi, pooja vedi temples, and sacred ritual altar structures. Custom sizes and design variations available upon inquiry.",
    "material": "Heat Resistant White Stone",
    "size": "Custom Dimensions Available",
    "finish": "Natural Untreated Polish",
    "work_type": "Sacred Geometry Carving",
    "price": "₹62,000",
    "is_featured": false,
    "is_published": true,
    "sort_order": 9,
    "images": [
      {
        "id": "img-295-1",
        "product_id": "prod-295",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787819090/gbm-marble-handicrafts/vedi-temple/kghlt3fpe4nu8n4efwzm.jpg",
        "is_cover": true
      }
    ]
  },
  {
    "id": "prod-296",
    "name": "Vedi Temple Design #10",
    "slug": "vedi-temple-design-10",
    "category_id": "cat-19",
    "category_name": "Vedi Temple",
    "category_slug": "vedi-temple",
    "description": "Traditional marble havan vedi, pooja vedi temples, and sacred ritual altar structures. Custom sizes and design variations available upon inquiry.",
    "material": "Heat Resistant White Stone",
    "size": "Custom Dimensions Available",
    "finish": "Natural Untreated Polish",
    "work_type": "Sacred Geometry Carving",
    "price": "₹64,500",
    "is_featured": false,
    "is_published": true,
    "sort_order": 10,
    "images": [
      {
        "id": "img-296-1",
        "product_id": "prod-296",
        "image_url": "https://res.cloudinary.com/fl6gqfor/image/upload/v1787819091/gbm-marble-handicrafts/vedi-temple/mpmzqmv4b4gdbaanoshb.jpg",
        "is_cover": true
      }
    ]
  }
]

export const MOCK_ENQUIRIES: Enquiry[] = [
  {
    id: 'enq-1',
    name: 'Rajesh Sharma',
    phone: '9829012345',
    email: 'rajesh.sharma@example.com',
    message: 'Interested in ordering a custom 4ft white marble temple for our residence. Please share catalog and customization options.',
    product_id: 'prod-1',
    product_name: 'Carving Temple Design #1',
    is_read: false,
    created_at: '2026-08-25T10:30:00Z',
  },
]
