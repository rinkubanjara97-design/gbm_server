-- =========================================================
-- GBM Marble Handicrafts Database Schema
-- Supabase Postgres DDL
-- =========================================================

-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- 1. Categories Table (Supports parent-child hierarchy for subcategories)
create table if not exists categories (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  slug text unique not null,
  description text,
  banner_image_url text,
  parent_id uuid references categories(id) on delete cascade, -- null = top-level category
  sort_order int default 0,
  is_visible boolean default true,
  created_at timestamptz default now()
);

-- 2. Products Table
create table if not exists products (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  slug text unique not null,
  category_id uuid references categories(id) on delete restrict not null,
  description text,
  material text, -- e.g. Pure Makrana Marble, Black Marble, Italian Marble, Teak Wood
  size text,     -- e.g. 24" x 18" x 36" (Height: 3 ft)
  finish text,   -- e.g. High Polish, Gold Emboss, Antique Finish, Natural
  work_type text,-- e.g. Hand Carving, Inlay Work, Meenakari Painting, Jali Cut
  is_featured boolean default false,
  is_published boolean default true,
  sort_order int default 0,
  created_at timestamptz default now()
);

-- 3. Product Images Table
create table if not exists product_images (
  id uuid primary key default uuid_generate_v4(),
  product_id uuid references products(id) on delete cascade not null,
  cloudinary_public_id text,
  image_url text not null,
  is_cover boolean default false,
  sort_order int default 0
);

-- 4. Enquiries Table (Contact Form & WhatsApp Enquiry Submissions)
create table if not exists enquiries (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  phone text,
  email text,
  message text,
  product_id uuid references products(id) on delete set null,
  is_read boolean default false,
  created_at timestamptz default now()
);

-- Indexing for performance
create index if not exists idx_products_category on products(category_id);
create index if not exists idx_products_slug on products(slug);
create index if not exists idx_categories_slug on categories(slug);
create index if not exists idx_categories_parent on categories(parent_id);

-- Row Level Security (RLS)
alter table categories enable row level security;
alter table products enable row level security;
alter table product_images enable row level security;
alter table enquiries enable row level security;

-- RLS Policies
-- Public Read Access for Published Content
create policy "Allow public read on visible categories" on categories
  for select using (is_visible = true);

create policy "Allow public read on published products" on products
  for select using (is_published = true);

create policy "Allow public read on product images" on product_images
  for select using (true);

-- Public Insert for Enquiries (Allow visitors to send messages)
create policy "Allow public insert on enquiries" on enquiries
  for insert with check (true);

-- Admin Access Policies (Full CRUD for authenticated users)
create policy "Admin full access on categories" on categories
  for all to authenticated using (true) with check (true);

create policy "Admin full access on products" on products
  for all to authenticated using (true) with check (true);

create policy "Admin full access on product_images" on product_images
  for all to authenticated using (true) with check (true);

create policy "Admin full access on enquiries" on enquiries
  for all to authenticated using (true) with check (true);

-- Seed Categories (19 Categories from Workspace Catalog)
insert into categories (name, slug, description, banner_image_url, sort_order, is_visible) values
  ('Carving Temple', 'carving-temple', 'Intricately hand-carved white marble temples featuring traditional Rajasthani stone relief work and architectural pillars.', 'https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1200&auto=format&fit=crop', 1, true),
  ('Carving Work', 'carving-work', 'Custom hand chisel relief stone carving work for walls, pillars, panels, and bespoke architectural elements.', 'https://images.unsplash.com/photo-1608889175638-9322300c46e8?q=80&w=1200&auto=format&fit=crop', 2, true),
  ('Corin Temple', 'corin-temple', 'Modern Corian material backlit temples and sleek mandir designs with precision CNC cutting and glowing illumination.', 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop', 3, true),
  ('Eley Work Temple', 'eley-work-temple', 'Exquisite Pietra Dura gemstone inlay work temples adorned with semi-precious stone floral art.', 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?q=80&w=1200&auto=format&fit=crop', 4, true),
  ('Fountain', 'fountain', 'Grand multi-tier carved marble fountains, water bowls, cascading waterfalls, and garden water features.', 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=1200&auto=format&fit=crop', 5, true),
  ('God Statues', 'god-statues', 'Divine handcrafted white Makrana marble deity idols including Lord Ganesha, Shiva, Krishna, Hanuman, and Ram Darbar.', 'https://images.unsplash.com/photo-1608889175638-9322300c46e8?q=80&w=1200&auto=format&fit=crop', 6, true),
  ('Handicrafts Items', 'handicrafts-items', 'Royal Rajasthani marble decorative items, painted minakari art, urlis, keyholders, and heritage home decor.', 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=1200&auto=format&fit=crop', 7, true),
  ('Jali Work Temple', 'jali-work-temple', 'Lattice jali carved marble temples featuring delicate geometric and floral cutwork screening for home shrines.', 'https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1200&auto=format&fit=crop', 8, true),
  ('Kitchen, Bar, Restro...', 'kitchen-bar-restro', 'Luxury marble bar counters, kitchen island tops, restaurant stone tables, mortared bowls, and serving platters.', 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1200&auto=format&fit=crop', 9, true),
  ('Marble Basin', 'marble-basin', 'Hand-turned counter-top marble wash basins, fluted sink bowls, and carved stone bathroom fixtures.', 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200&auto=format&fit=crop', 10, true),
  ('Marble Chhatri', 'marble-chhatri', 'Heritage Rajasthani domed marble chhatris, garden pavilions, and stone canopy structures.', 'https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?q=80&w=1200&auto=format&fit=crop', 11, true),
  ('Marble Fire Place', 'marble-fire-place', 'Majestic hand-carved marble fireplace mantels, surrounds, and ornate living room hearth designs.', 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop', 12, true),
  ('Marble Jali Panel', 'marble-jali-panel', 'Custom carved marble jali screens, partition wall lattice panels, and decorative stone grills.', 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?q=80&w=1200&auto=format&fit=crop', 13, true),
  ('Marble Singhasan', 'marble-singhasan', 'Royal carved marble thrones (singhasan) and raised pedestals for deity idols and pooja rooms.', 'https://images.unsplash.com/photo-1608889175638-9322300c46e8?q=80&w=1200&auto=format&fit=crop', 14, true),
  ('Marble Table Top', 'marble-table-top', 'Custom Pietra Dura inlay and solid polished marble dining, coffee, and side table tops.', 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=1200&auto=format&fit=crop', 15, true),
  ('Marble Tulsi Stand', 'marble-tulsi-stand', 'Ornate white marble Tulsi Vrindavan planters and carved stands for courtyard and balcony devotion.', 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?q=80&w=1200&auto=format&fit=crop', 16, true),
  ('Painting Work Temple', 'painting-work-temple', 'Hand-painted Meenakari gold leaf embossed marble temples and color decorated home mandirs.', 'https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1200&auto=format&fit=crop', 17, true),
  ('Statue', 'statue', 'Custom human portrait statues, bust sculptures, animal statues, and artistic marble figures.', 'https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1200&auto=format&fit=crop', 18, true),
  ('Vedi Temple', 'vedi-temple', 'Traditional marble havan vedi, pooja vedi temples, and sacred ritual altar structures.', 'https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?q=80&w=1200&auto=format&fit=crop', 19, true)
on conflict (slug) do nothing;
