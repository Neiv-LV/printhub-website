-- Supabase PostgreSQL Schema for Printhub CMS
-- Run this in Supabase SQL Editor

-- Enable RLS (Row Level Security)
ALTER DATABASE postgres SET "app.jwt_secret" TO 'your-jwt-secret';

-- ============================================
-- USERS TABLE (Extended from Supabase Auth)
-- ============================================
CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
    email TEXT,
    full_name TEXT,
    role TEXT DEFAULT 'viewer' CHECK (role IN ('super_admin', 'admin', 'editor', 'viewer')),
    avatar_url TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Policies for profiles
CREATE POLICY "Users can view own profile" ON public.profiles
    FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON public.profiles
    FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Admins can view all profiles" ON public.profiles
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM public.profiles 
            WHERE id = auth.uid() AND role IN ('super_admin', 'admin')
        )
    );

-- ============================================
-- SITE SETTINGS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS public.site_settings (
    id SERIAL PRIMARY KEY,
    key TEXT UNIQUE NOT NULL,
    value JSONB NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    updated_by UUID REFERENCES public.profiles(id)
);

-- Enable RLS
ALTER TABLE public.site_settings ENABLE ROW LEVEL SECURITY;

-- Anyone can read site settings
CREATE POLICY "Anyone can read site settings" ON public.site_settings
    FOR SELECT USING (true);

-- Only admins can update
CREATE POLICY "Admins can update site settings" ON public.site_settings
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM public.profiles 
            WHERE id = auth.uid() AND role IN ('super_admin', 'admin')
        )
    );

-- ============================================
-- PAGE CONTENT TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS public.page_content (
    id SERIAL PRIMARY KEY,
    page_slug TEXT NOT NULL, -- 'homepage', 'about', 'contact', etc.
    section_key TEXT NOT NULL, -- 'hero', 'features', 'stats', etc.
    content JSONB NOT NULL,
    is_published BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    updated_by UUID REFERENCES public.profiles(id),
    UNIQUE(page_slug, section_key)
);

-- Enable RLS
ALTER TABLE public.page_content ENABLE ROW LEVEL SECURITY;

-- Anyone can read published content
CREATE POLICY "Anyone can read published content" ON public.page_content
    FOR SELECT USING (is_published = true);

-- Admins can do everything
CREATE POLICY "Admins can manage page content" ON public.page_content
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM public.profiles 
            WHERE id = auth.uid() AND role IN ('super_admin', 'admin', 'editor')
        )
    );

-- ============================================
-- BLOG CATEGORIES TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS public.blog_categories (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    description TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.blog_categories ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read categories" ON public.blog_categories
    FOR SELECT USING (true);

CREATE POLICY "Admins can manage categories" ON public.blog_categories
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM public.profiles 
            WHERE id = auth.uid() AND role IN ('super_admin', 'admin', 'editor')
        )
    );

-- ============================================
-- BLOG POSTS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS public.blog_posts (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    excerpt TEXT,
    content TEXT,
    featured_image TEXT,
    category_id INTEGER REFERENCES public.blog_categories(id),
    author_id UUID REFERENCES public.profiles(id),
    status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'scheduled', 'archived')),
    published_at TIMESTAMPTZ,
    meta_title TEXT,
    meta_description TEXT,
    view_count INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

-- Anyone can read published posts
CREATE POLICY "Anyone can read published posts" ON public.blog_posts
    FOR SELECT USING (status = 'published');

-- Authors can manage their own posts
CREATE POLICY "Authors can manage own posts" ON public.blog_posts
    FOR ALL USING (author_id = auth.uid());

-- Admins can manage all posts
CREATE POLICY "Admins can manage all posts" ON public.blog_posts
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM public.profiles 
            WHERE id = auth.uid() AND role IN ('super_admin', 'admin')
        )
    );

-- ============================================
-- PRODUCT CATEGORIES TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS public.product_categories (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    description TEXT,
    icon TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.product_categories ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read product categories" ON public.product_categories
    FOR SELECT USING (true);

CREATE POLICY "Admins can manage product categories" ON public.product_categories
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM public.profiles 
            WHERE id = auth.uid() AND role IN ('super_admin', 'admin')
        )
    );

-- ============================================
-- PRODUCTS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS public.products (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    short_description TEXT,
    full_description TEXT,
    price DECIMAL(12, 2),
    sale_price DECIMAL(12, 2),
    category_id INTEGER REFERENCES public.product_categories(id),
    images JSONB DEFAULT '[]'::jsonb, -- Array of image URLs
    specs JSONB DEFAULT '{}'::jsonb, -- Key-value specifications
    is_active BOOLEAN DEFAULT true,
    is_featured BOOLEAN DEFAULT false,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;

-- Anyone can read active products
CREATE POLICY "Anyone can read active products" ON public.products
    FOR SELECT USING (is_active = true);

-- Admins can manage products
CREATE POLICY "Admins can manage products" ON public.products
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM public.profiles 
            WHERE id = auth.uid() AND role IN ('super_admin', 'admin')
        )
    );

-- ============================================
-- CONTENT VERSIONS TABLE (Version History)
-- ============================================
CREATE TABLE IF NOT EXISTS public.content_versions (
    id SERIAL PRIMARY KEY,
    table_name TEXT NOT NULL,
    record_id INTEGER NOT NULL,
    content JSONB NOT NULL,
    version_number INTEGER NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    created_by UUID REFERENCES public.profiles(id)
);

-- Enable RLS
ALTER TABLE public.content_versions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admins can view versions" ON public.content_versions
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM public.profiles 
            WHERE id = auth.uid() AND role IN ('super_admin', 'admin', 'editor')
        )
    );

-- ============================================
-- MEDIA TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS public.media (
    id SERIAL PRIMARY KEY,
    file_name TEXT NOT NULL,
    file_path TEXT NOT NULL,
    file_type TEXT,
    file_size INTEGER,
    alt_text TEXT,
    uploaded_by UUID REFERENCES public.profiles(id),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.media ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read media" ON public.media
    FOR SELECT USING (true);

CREATE POLICY "Admins can manage media" ON public.media
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM public.profiles 
            WHERE id = auth.uid() AND role IN ('super_admin', 'admin', 'editor')
        )
    );

-- ============================================
-- FUNCTIONS & TRIGGERS
-- ============================================

-- Auto-create profile on user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.profiles (id, email, full_name)
    VALUES (NEW.id, NEW.email, NEW.raw_user_meta_data->>'full_name');
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE OR REPLACE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Update timestamp trigger
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_profiles_updated_at
    BEFORE UPDATE ON public.profiles
    FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER update_page_content_updated_at
    BEFORE UPDATE ON public.page_content
    FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER update_blog_posts_updated_at
    BEFORE UPDATE ON public.blog_posts
    FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER update_products_updated_at
    BEFORE UPDATE ON public.products
    FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- ============================================
-- INITIAL DATA
-- ============================================

-- Insert default site settings
INSERT INTO public.site_settings (key, value) VALUES
('site_name', '"Printhub"'),
('hotline', '"0906.688.013"'),
('address', '"123 Nguyễn Văn Cừ, Q.5, TP.HCM"'),
('social_facebook', '"https://facebook.com/printhub"'),
('social_zalo', '"https://zalo.me/84906688013"'),
('social_tiktok', '"https://tiktok.com/@printhub"')
ON CONFLICT (key) DO NOTHING;

-- Insert default blog categories
INSERT INTO public.blog_categories (name, slug, description) VALUES
('Kiến thức in ấn', 'kien-thuc-in-an', 'Các bài viết về kỹ thuật và kiến thức in PET'),
('Kinh doanh Local Brand', 'kinh-doanh-local-brand', 'Chia sẻ kinh nghiệm kinh doanh thời trang'),
('Xu hướng thiết kế', 'xu-huong-thiet-ke', 'Các xu hướng thiết kế áo thun mới nhất'),
('Tin tức Printhub', 'tin-tuc-printhub', 'Tin tức và cập nhật từ Printhub')
ON CONFLICT (slug) DO NOTHING;

-- Insert default product categories
INSERT INTO public.product_categories (name, slug, description, icon) VALUES
('Mực in', 'muc-in', 'Các loại mực in PET chất lượng cao', '🖨️'),
('Màng PET', 'mang-pet', 'Màng PET film chuyển nhiệt', '📄'),
('Bột chuyển nhiệt', 'bot-chuyen-nhiet', 'Bột DTF adhesive powder', '✨'),
('Dịch vụ in', 'dich-vu-in', 'Dịch vụ in ấn PET chuyển nhiệt', '👕')
ON CONFLICT (slug) DO NOTHING;

-- Insert homepage content
INSERT INTO public.page_content (page_slug, section_key, content) VALUES
('homepage', 'hero', '{
    "title": "In PET Chuyển Nhiệt",
    "highlight": "Đẳng Cấp Local Brand",
    "description": "Công nghệ in siêu tốc, màu sắc rực rỡ, độ bền vĩnh cửu. Đối tác tin cậy của hơn 500+ thương hiệu thời trang Việt Nam.",
    "badge": "Dẫn đầu xu hướng in ấn 2026",
    "cta_primary": "Gọi tư vấn ngay",
    "cta_secondary": "Xem bảng giá"
}'::jsonb),
('homepage', 'stats', '{
    "items": [
        {"value": "500+", "label": "Khách hàng"},
        {"value": "24h", "label": "Giao hàng"},
        {"value": "100%", "label": "Hài lòng"}
    ]
}'::jsonb),
('homepage', 'contact', '{
    "hotline": "0906.688.013",
    "website": "Printhub.com.vn",
    "address": "123 Nguyễn Văn Cừ, Q.5, TP.HCM"
}'::jsonb)
ON CONFLICT (page_slug, section_key) DO NOTHING;
