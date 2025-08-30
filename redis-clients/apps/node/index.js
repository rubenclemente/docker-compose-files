const Redis = require("ioredis");

const host = process.env.REDIS_HOST || "localhost";
const port = process.env.REDIS_PORT || 6379;
const password = process.env.REDIS_PASSWORD || "";

const redis = new Redis({
  host,
  port,
  password,
});

async function testRedis() {
  try {
    console.log("🔗 Connecting to Redis...");
    await redis.set("hello", "world");
    const value = await redis.get("hello");
    console.log("✅ Redis says:", value);
  } catch (err) {
    console.error("❌ Redis connection failed:", err);
  } finally {
    redis.disconnect();
  }
}

testRedis();
