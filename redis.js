const express = require("express");
const axios = require("axios");
const Redis = require("ioredis");

const app = express();
const port = 3000;
const redis = new Redis({
  host: process.env.REDIS_HOST || "127.0.0.1",
  port: parseInt(process.env.REDIS_PORT || "6379", 10),
//   password: process.env.REDIS_PASSWORD || "redispassword",
});

const cacheDuration = 10;

app.get("/todos", async (req, res) => {
  try {
    // Try to get the data from Redis cache
    const cachedData = await redis.get("todos");
    if (cachedData) {
      console.log("Data retrieved from cache");
      return res.send(JSON.parse(cachedData));
    }

    // If cache is empty, fetch data from the API
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    const data = response.data;

    // Store the data in Redis cache for 1 minute
    await redis.set("todos", JSON.stringify(data), "EX", cacheDuration);
    console.log("Data fetched from API and cached");

    res.send(data);
  } catch (error) {
    console.error("Error fetching data", error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

