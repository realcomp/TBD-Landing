import http from 'http';
import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables manually
function loadEnv() {
    const envPath = path.resolve(__dirname, '.env.local');
    if (fs.existsSync(envPath)) {
        const env = fs.readFileSync(envPath, 'utf8');
        env.split('\n').forEach(line => {
            const [key, value] = line.split('=');
            if (key && value) {
                process.env[key.trim()] = value.trim().replace(/^["']|["']$/g, '');
            }
        });
    }
}

loadEnv();

const supabaseUrl = process.env.VITE_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceRoleKey) {
    console.error("Critical: SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY must be set in .env.local");
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);

const server = http.createServer(async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.statusCode = 204;
        res.end();
        return;
    }

    if (req.method === 'POST' && req.url === '/api/waitlist') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', async () => {
            try {
                const { email, policyAgree } = JSON.parse(body);

                if (policyAgree) {
                    console.log("Bot detected (honeypot filled)");
                    res.statusCode = 200;
                    res.end(JSON.stringify({ success: true, message: "Filtered" }));
                    return;
                }

                const now = new Date();
                const { error } = await supabase
                    .from('waiting_list')
                    .insert([
                        {
                            email,
                            date: now.toISOString().split('T')[0],
                            time: now.toTimeString().split(' ')[0],
                            invited: false,
                            link: req.headers['referer'] || 'direct'
                        }
                    ]);

                if (error) {
                    console.error("Supabase error:", error);
                    res.statusCode = 500;
                    res.end(JSON.stringify({ error: "Database error" }));
                    return;
                }

                res.statusCode = 200;
                res.end(JSON.stringify({ success: true }));
            } catch (err) {
                console.error("Request error:", err);
                res.statusCode = 400;
                res.end(JSON.stringify({ error: "Invalid request" }));
            }
        });
    } else {
        res.statusCode = 404;
        res.end('Not Found');
    }
});

const PORT = 3001;
server.listen(PORT, () => {
    console.log(`API Server running at http://localhost:${PORT}`);
});
