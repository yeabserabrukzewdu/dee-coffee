// This file acts as a Vercel serverless function.
// It securely reads the environment variables on the server and sends them to the client.
// The client will fetch this endpoint at /api/config to get the necessary keys.

export default function handler(req, res) {
  // Check if the environment variables are set
  if (!process.env.SUPABASE_URL || !process.env.SUPABASE_KEY) {
    return res.status(500).json({ error: 'Supabase environment variables are not set on the server.' });
  }

  // Send the public keys to the client
  res.status(200).json({
    supabaseUrl: process.env.SUPABASE_URL,
    supabaseKey: process.env.SUPABASE_KEY,
  });
}
