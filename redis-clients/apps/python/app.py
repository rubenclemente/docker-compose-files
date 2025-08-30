import os
import redis

host = os.getenv("REDIS_HOST", "localhost")
port = int(os.getenv("REDIS_PORT", 6379))
password = os.getenv("REDIS_PASSWORD", "")

print("🔗 Connecting to Redis...")

try:
    r = redis.Redis(host=host, port=port, password=password, decode_responses=True)

    # Test a SET/GET
    r.set("hello", "world")
    value = r.get("hello")

    print(f"✅ Redis says: {value}")
except Exception as e:
    print(f"❌ Redis connection failed: {e}")
