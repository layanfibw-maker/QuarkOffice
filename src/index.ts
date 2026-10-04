import { appInfo } from "./appInfo.js";

console.log(`Welcome to ${appInfo.name}!`);
console.log(`Version: ${appInfo.version}`);
console.log(`Tagline: ${appInfo.tagline}`);
console.log(`Focus: ${appInfo.features.join(", ")}`);
