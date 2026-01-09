import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.VITE_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceRoleKey) {
    console.error("Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY");
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);

const server = Bun.serve({
    port: 3001,
    async fetch(req) {
        const url = new URL(req.url);

        if (req.method === "POST" && url.pathname === "/api/waitlist") {
            try {
                const { email, policyAgree } = await req.json();

                // Honeypot check
                if (policyAgree) {
                    console.log("Bot detected (honeypot filled)");
                    return Response.json({ success: true, message: "Filtered" });
                }

                const now = new Date();
                const { error } = await supabase
                    .from("waiting_list")
                    .insert([
                        {
                            email,
                            date: now.toISOString().split("T")[0],
                            time: now.toTimeString().split(" ")[0],
                            invited: false,
                            link: req.headers.get("referer") || "direct"
                        }
                    ]);

                if (error) {
                    console.error("Supabase error:", error);
                    return Response.json({ error: "Database error" }, { status: 500 });
                }

                return Response.json({ success: true });
            } catch (err) {
                console.error("Request error:", err);
                return Response.json({ error: "Invalid request" }, { status: 400 });
            }
        }

        return new Response("Not Found", { status: 404 });
    },
});

console.log(`API Server running at http://localhost:${server.port}`);
