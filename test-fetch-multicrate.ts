import { fetchSearchIndex } from "./src/api/rustdoc";

async function test() {
    console.log("Fetching index...");
    // Mock global fetch if needed (but used node-fetch in src)
    try {
        const items = await fetchSearchIndex();
        console.log(`Successfully fetched ${items.length} items.`);

        const vec = items.find(i => i.name === "Vec" || i.path.includes("::Vec"));
        const string = items.find(i => i.name === "String");
        const option = items.find(i => i.name === "Option");

        console.log("Found Vec:", vec ? "YES" : "NO", vec?.url);
        console.log("Found String:", string ? "YES" : "NO", string?.url);
        console.log("Found Option:", option ? "YES" : "NO", option?.url);

        if (items.length > 0) {
            console.log("\nSome random items:");
            console.log(items.slice(0, 3));
        }
    } catch (e) {
        console.error("Failed:", e);
    }
}

test();
