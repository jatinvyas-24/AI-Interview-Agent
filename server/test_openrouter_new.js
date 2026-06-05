import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import { askAi } from "./src/services/openRouter.service.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, ".env") });

console.log("OPENROUTER_API_KEY:", process.env.OPENROUTER_API_KEY ? "PRESENT" : "MISSING");
console.log("Key preview:", process.env.OPENROUTER_API_KEY ? process.env.OPENROUTER_API_KEY.slice(0, 15) + "..." : "NONE");

const testAi = async () => {
  try {
    console.log("Sending a test prompt to OpenRouter...");
    const response = await askAi([
      { role: "user", content: "Say hello in one word." }
    ]);
    console.log("SUCCESS! AI Response:", response);
  } catch (error) {
    console.error("FAILURE! Error calling OpenRouter:");
    console.error(error);
  }
};

testAi();
