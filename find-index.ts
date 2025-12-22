import fetch from "node-fetch";

const base = "https://doc.rust-lang.org/";
const stdBase = "https://doc.rust-lang.org/std/";
const suffix = "1.92.0";

const candidates = [
    `search-index.js`,
    `search-index${suffix}.js`,
    `search-index-${suffix}.js`,
    `search-index-std.js`,
    `search-index-std-${suffix}.js`,
    `search-index-${suffix}-std.js`,
    `std/search-index.js`,
    `std/search-index${suffix}.js`,
    `std/search-index-${suffix}.js`,
    `search-index/std.js`,
    `search-index/std-${suffix}.js`
];

async function check() {
    for (const c of candidates) {
        const url = base + c;
        console.log("Checking", url);
        try {
            const res = await fetch(url, { method: "HEAD" });
            if (res.ok) {
                console.log("FOUND:", url);
                return;
            }
        } catch (e) { }
    }
    console.log("None found.");
}

check();
