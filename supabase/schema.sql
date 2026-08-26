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
