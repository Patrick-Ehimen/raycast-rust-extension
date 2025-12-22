import { fetchSearchIndex } from "./src/api/rustdoc";

async function test() {
    console.log("Fetching index...");
    try {
        const items = await fetchSearchIndex();
        console.log(`Successfully fetched ${items.length} items.`);

        // Check for specific items
        const fs = items.find(i => i.name === "fs" && i.type === "module");
        const u32 = items.find(i => i.name === "u32" && i.type === "primitive");
        const print = items.find(i => i.name === "println!" && i.type === "macro");
        const pi = items.find(i => i.name === "PI" && i.type === "const"); // f64::consts::PI
        const vec = items.find(i => i.name === "Vec");

        console.log("Found module 'fs':", fs ? "YES" : "NO", fs?.url);
        console.log("Found primitive 'u32':", u32 ? "YES" : "NO", u32?.url);
        console.log("Found macro 'println!':", print ? "YES" : "NO", print?.url);
        console.log("Found const 'PI':", pi ? "YES" : "NO", pi?.url);
        console.log("Found Vec:", vec ? "YES" : "NO", vec?.type);

    } catch (e) {
        console.error("Failed:", e);
    }
}

test();
