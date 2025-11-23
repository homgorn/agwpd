// Supabase Integration (Optional)
// Uncomment and configure to sync cases to Supabase

const { createClient } = require('@supabase/supabase-js');

// Configuration
const SUPABASE_URL = process.env.SUPABASE_URL || '';
const SUPABASE_KEY = process.env.SUPABASE_ANON_KEY || '';

// Initialize Supabase client
const supabase = SUPABASE_URL && SUPABASE_KEY
    ? createClient(SUPABASE_URL, SUPABASE_KEY)
    : null;

/**
 * Sync all cases to Supabase
 * Table structure:
 * - id (text, primary key)
 * - category (text)
 * - title (text)
 * - description (text)
 * - seo_title (text)
 * - seo_description (text)
 * - keywords (text)
 * - faq (jsonb)
 * - howto (jsonb)
 * - image_url (text)
 * - created_at (timestamp)
 * - updated_at (timestamp)
 */
async function syncToSupabase(cases) {
    if (!supabase) {
        console.log('Supabase not configured. Skipping sync.');
        return;
    }

    console.log('Syncing to Supabase...');

    try {
        for (const c of cases) {
            const data = {
                id: c.id,
                category: c.cat,
                category_name: c.categoryName,
                title: c.title,
                description: c.desc,
                seo_title: c.seo.title,
                seo_description: c.seo.description,
                keywords: c.seo.keywords,
                faq: c.faq,
                howto: c.howto,
                image_url: c.image.url,
                updated_at: new Date().toISOString()
            };

            // Upsert (insert or update)
            const { error } = await supabase
                .from('antigravity_cases')
                .upsert(data, { onConflict: 'id' });

            if (error) {
                console.error(`Error syncing ${c.id}:`, error.message);
            } else {
                console.log(`✓ Synced ${c.id}`);
            }
        }

        console.log('Supabase sync complete!');
    } catch (err) {
        console.error('Supabase sync failed:', err.message);
    }
}

module.exports = { syncToSupabase };
