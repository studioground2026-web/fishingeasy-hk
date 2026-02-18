/* app.js */

const I18N = {
    zh: {
        tab_map: "\u5730\u5716",
        tab_dex: "\u6f01\u7372\u9650\u5236",
        tab_prep: "\u724c\u7167",
        tab_rules: "\u898f\u5247",
        tab_set: "\u8a2d\u5b9a",
        locate_me: "\u5b9a\u4f4d\u6211\u7684\u4f4d\u7f6e",
        locating: "\u6b63\u5728\u641c\u5c0b...",
        near_res: "\u63a5\u8fd1\u6c34\u5858\u7bc4\u570d\uff1a",
        safe_zone: "\u4e0d\u5728\u6c34\u5858\u7bc4\u570d",
        dex_subtitle: "\u9577\u5ea6\u7531\u9b5a\u982d\u6700\u524d\u7aef\u8d77\u8a08\u81f3\u9b5a\u5c3e\u6700\u672b\u7aef\u6b62",
        limit_size_title: "\u5c3a\u5bf8\u9650\u5236",
        limit_size_text: "\u9664\u4e86\u7372\u8c41\u514d\u9b5a\u985e\u5916\uff0c\u91e3\u7372\u4ee5\u4e0b\u9577\u5ea6\u7684\u9b5a\u985e\u5747\u9808\u653e\u56de\u6c34\u5858\u5167\uff1a360\u6beb\u7c73\u4ee5\u4e0b\u7684\u9c78\u9b5a\u3001300\u6beb\u7c73\u4ee5\u4e0b\u7684\u751f\u9b5a\u53ca\u5176\u4ed6180\u6beb\u7c73\u4ee5\u4e0b\u7684\u5404\u7a2e\u9b5a\u985e\u3002",
        limit_qty_title: "\u6578\u91cf\u9650\u5236",
        limit_qty_text: "\u9664\u4e86\u7372\u8c41\u514d\u9b5a\u985e\u5916\uff0c\u6bcf\u540d\u91e3\u9b5a\u4eba\u58eb\u4e00\u5929\u4e2d\u7684\u9b5a\u7372\uff0c\u4e0d\u5f97\u591a\u65bc\u9577\u5ea6360\u6beb\u7c73\u6216\u4ee5\u4e0a\u7684\u9c78\u9b5a\u5169\u5c3e\u3001300\u6beb\u7c73\u6216\u4ee5\u4e0a\u7684\u751f\u9b5a\u5169\u5c3e\uff0c\u4ee5\u53ca\u5176\u4ed6180\u6beb\u7c73\u4ee5\u4e0a\u6bcf\u7a2e\u9b5a\u985e\u5169\u5c3e\u3002",
        exempt_title: "\u7372\u8c41\u514d\u9b5a\u985e",
        exempt_family: "\u8c41\u514d\u5305\u62ec\uff1a\u9e97\u9b5a\u79d1\u6240\u6709\u7a2e\u3001\u68d8\u7532\u9bc9\u79d1\u6240\u6709\u7a2e\uff0c\u53ca\u7d05\u87af\u87af\u8766\u3002",
        exempt_notice: "\u91e3\u7372\u7372\u8c41\u514d\u9b5a\u985e\u4e0d\u8ad6\u6578\u91cf\u6216\u5927\u5c0f\u5747\u4e0d\u8981\u653e\u56de\u6c34\u5858\u5167\u3002",
        source_label: "\u8cc7\u6599\u4f86\u6e90\uff1a\u6c34\u52d9\u7f72\u300c\u91e3\u9b5a\u6a02\u300d",
        license_start: "\u724c\u7167\u751f\u6548\u65e5\u671f",
        days_left: "\u5929\u5269\u9918",
        checklist_title: "\u51fa\u767c\u524d\u5b89\u5168\u6aa2\u67e5",
        chk_license: "\u5df2\u651c\u5e36\u5be6\u9ad4\u724c\u7167",
        chk_lead: "\u6aa2\u67e5\u7121\u925b\u589c\uff08\u7981\u6b62\u4f7f\u7528\uff09",
        chk_rod: "\u50c5\u5e36\u4e00\u7aff\u4e00\u7d72\uff08\u7981\u6b62\u7db2\u6355\uff09",
        settings_lang: "\u8a9e\u8a00",
        settings_dark: "\u6df1\u8272\u6a21\u5f0f",
        settings_reset: "\u91cd\u8a2d\u6240\u6709\u8a2d\u5b9a",
        log_empty: "\u672a\u6709\u6f01\u7372\u65e5\u8a8c\uff0c\u6309 + \u65b0\u589e\u7b2c\u4e00\u7b46\u3002",
        log_add: "\u65b0\u589e\u6f01\u7372",
        log_save: "\u5132\u5b58",
        log_species_placeholder: "\u9b5a\u7a2e\u540d\u7a31",
        log_delete_confirm: "\u78ba\u5b9a\u522a\u9664\u9019\u7b46\u65e5\u8a8c\uff1f",
        share_btn: "\u5206\u4eab\u6230\u5229\u54c1",
        share_success: "\u5716\u7247\u5df2\u6e96\u5099\u597d",
        share_unsupported: "\u6b64\u88dd\u7f6e\u4e0d\u652f\u63f4\u76f4\u63a5\u5206\u4eab\uff0c\u5c07\u81ea\u52d5\u4e0b\u8f09\u5716\u7247\u3002"
    },
    en: {
        tab_map: "Map",
        tab_dex: "Catch Limits",
        tab_prep: "License",
        tab_rules: "Rules",
        tab_set: "Settings",
        locate_me: "Locate Me",
        locating: "Searching...",
        near_res: "Near Reservoir:",
        safe_zone: "Outside Zone",
        dex_subtitle: "Length is measured from head tip to tail end",
        limit_size_title: "Size Limit",
        limit_size_text: "Except exempted fish species, release fish back to reservoirs if below: Black Bass under 360 mm, Snakehead under 300 mm, and other fish under 180 mm.",
        limit_qty_title: "Quantity Limit",
        limit_qty_text: "Except exempted fish species, each angler per day may keep at most: 2 Black Bass at or above 360 mm, 2 Snakehead at or above 300 mm, and 2 fish per other species at or above 180 mm.",
        exempt_title: "Exempted Fish Species",
        exempt_family: "Exemptions include all species in Cichlidae and Loricariidae, plus Red Swamp Crayfish.",
        exempt_notice: "Do not return exempted fish species to reservoirs regardless of size or quantity.",
        source_label: "Source: WSD \"Fun of Fishing\"",
        license_start: "License Start Date",
        days_left: "Days Left",
        checklist_title: "Pre-trip Checklist",
        chk_license: "Physical License",
        chk_lead: "No Lead Sinkers",
        chk_rod: "One Rod Only",
        settings_lang: "Language",
        settings_dark: "Dark Mode",
        settings_reset: "Reset All",
        log_empty: "No catch logs yet. Tap + to add your first catch.",
        log_add: "Add Catch",
        log_save: "Save",
        log_species_placeholder: "Species (e.g. Huge Bass)",
        log_delete_confirm: "Delete this log entry?",
        share_btn: "Share Trophy",
        share_success: "Image is ready to share.",
        share_unsupported: "Direct share is not supported on this device. Downloading image instead."
    }
};

const RESERVOIRS = [
    { id: 1, name: { zh: "萬宜水庫", en: "High Island Res." }, lat: 22.3758, lng: 114.3537 },
    { id: 2, name: { zh: "船灣淡水湖", en: "Plover Cove Res." }, lat: 22.4765, lng: 114.2587 },
    { id: 3, name: { zh: "石壁水塘", en: "Shek Pik Res." }, lat: 22.2319, lng: 113.8985 },
    { id: 4, name: { zh: "大欖涌水塘", en: "Tai Lam Chung Res." }, lat: 22.3820, lng: 114.0275 },
    { id: 5, name: { zh: "城門水塘", en: "Shing Mun Res." }, lat: 22.3859, lng: 114.1479 },
    { id: 6, name: { zh: "大潭篤水塘", en: "Tai Tam Tuk Res." }, lat: 22.2453, lng: 114.2184 },
    { id: 7, name: { zh: "薄扶林水塘", en: "Pok Fu Lam Res." }, lat: 22.2653, lng: 114.1378 },
    { id: 8, name: { zh: "香港仔上水塘", en: "Aberdeen Upper Res." }, lat: 22.2581, lng: 114.1650 },
    { id: 9, name: { zh: "九龍水塘", en: "Kowloon Res." }, lat: 22.3544, lng: 114.1550 },
    { id: 10, name: { zh: "大潭上水塘", en: "Tai Tam Upper Res." }, lat: 22.25244, lng: 114.20961 },
    { id: 11, name: { zh: "大潭中水塘", en: "Tai Tam Intermediate Res." }, lat: 22.2466, lng: 114.21045 },
    { id: 12, name: { zh: "大潭副水塘", en: "Tai Tam Byewash Res." }, lat: 22.24723, lng: 114.21497 },
    { id: 13, name: { zh: "石梨貝水塘", en: "Shek Lei Pui Res." }, lat: 22.35352, lng: 114.14689 },
    { id: 14, name: { zh: "下城門水塘", en: "Lower Shing Mun Res." }, lat: 22.36944, lng: 114.15972 },
    { id: 15, name: { zh: "香港仔下水塘", en: "Aberdeen Lower Res." }, lat: 22.2541, lng: 114.1579 },
    { id: 16, name: { zh: "九龍接收水塘", en: "Kowloon Reception Res." }, lat: 22.35111, lng: 114.14551 },
    { id: 17, name: { zh: "九龍副水塘", en: "Kowloon Byewash Res." }, lat: 22.3524, lng: 114.1475 }
];

const EXEMPT_FISH = [
    { zh: "大口黑鱸", en: "Largemouth Black Bass", sci: "Micropterus salmoides", img: "https://www.wsd.gov.hk/filemanager/tc/content_1372/red-swamp-crayfish.jpg" },
    { zh: "金筆", en: "Indonesian Snakehead", sci: "Channa micropeltes", img: "https://www.wsd.gov.hk/filemanager/tc/content_1372/tilapia.jpg" },
    { zh: "齊氏非鯽", en: "Redbelly Tilapia", sci: "Coptodon sp.", img: "https://www.wsd.gov.hk/filemanager/tc/content_1372/armoured-catfishes.jpg" },
    { zh: "星點伴麗魚", en: "Jewelfish", sci: "Hemichromis sp.", img: "https://www.wsd.gov.hk/filemanager/tc/content_1372/common-pleco.jpg" },
    { zh: "縱帶黑麗魚", en: "Malawi Golden Cichlid", sci: "Melanochromis sp.", img: "https://www.wsd.gov.hk/filemanager/tc/content_1372/sailfin-catfish.jpg" },
    { zh: "莫桑比克口孵非鯽", en: "Mozambique Tilapia", sci: "Oreochromis sp.", img: "https://www.wsd.gov.hk/filemanager/tc/content_1372/suckermouth-catfish.jpg" },
    { zh: "尼羅口孵非鯽", en: "Nile Tilapia", sci: "Oreochromis sp.", img: "https://www.wsd.gov.hk/filemanager/tc/content_1372/suckermouth-catfish2.jpg" },
    { zh: "網紋獅頭（鵝頭）", en: "Redhead Cichlid", sci: "Vieja sp.", img: "https://www.wsd.gov.hk/filemanager/tc/content_1372/oscar.jpg" },
    { zh: "九間", en: "Zebra Tilapia", sci: "Heterotilapia sp.", img: "https://www.wsd.gov.hk/filemanager/tc/content_1372/midas-cichlid.jpg" },
    { zh: "珍珠石斑", en: "Jaguar Guapote", sci: "Parachromis sp.", img: "https://www.wsd.gov.hk/filemanager/tc/content_1372/jaguar-guapote.jpg" },
    { zh: "筍殼", en: "Marble Goby", sci: "Oxyeleotris marmorata", img: "https://www.wsd.gov.hk/filemanager/tc/content_1372/texas-cichlid.jpg" },
    { zh: "琵琶魚", en: "Suckermouth Catfishes", sci: "Pterygoplichthys sp.", img: "https://www.wsd.gov.hk/filemanager/tc/content_1372/texas-cichlid.jpg" }
];

let state = {
    lang: localStorage.getItem("fe_lang") || "zh",
    darkMode: localStorage.getItem("fe_dark") === "true",
    agreed: localStorage.getItem("fe_agreed") === "true",
    licenseDate: localStorage.getItem("fe_license") || new Date().toISOString().split("T")[0],
    checklist: JSON.parse(localStorage.getItem("fe_check") || "{\"chk_license\":false,\"chk_lead\":false,\"chk_rod\":false}")
};

let map;
let userMarker;
let pendingLogImageBase64 = "";
let currentDetailLogId = null;
let pendingLogSource = "";
let reservoirMarkers = [];
let reservoirMarkerById = new Map();

document.addEventListener("DOMContentLoaded", () => {
    applyTheme();
    applyLang();
    initMap();
    renderDex();
    renderLogs();
    renderChecklist();
    updateLicense();
    if (!state.agreed) document.getElementById("disclaimer-modal").classList.remove("hidden");
    switchTab("map");
    setTimeout(() => locateUser(), 200);
});

function switchTab(tabId) {
    document.querySelectorAll(".view-section").forEach((el) => {
        el.classList.add("hidden");
        if (el.id === "view-dex") el.classList.remove("flex");
    });
    const view = document.getElementById(`view-${tabId}`);
    view.classList.remove("hidden");
    if (tabId === "dex") view.classList.add("flex");

    document.querySelectorAll(".nav-btn").forEach((el) => el.classList.remove("text-primary", "active"));
    document.getElementById(`nav-${tabId}`).classList.add("text-primary", "active");

    if (tabId === "map" && map) setTimeout(() => map.invalidateSize(), 100);
}

function openSubpage(pageId) {
    document.querySelectorAll(".view-section").forEach((el) => {
        el.classList.add("hidden");
        if (el.id === "view-dex") el.classList.remove("flex");
    });
    const view = document.getElementById(`view-${pageId}`);
    if (view) view.classList.remove("hidden");
    document.querySelectorAll(".nav-btn").forEach((el) => el.classList.remove("text-primary", "active"));
    const navSet = document.getElementById("nav-set");
    if (navSet) navSet.classList.add("text-primary", "active");
}

function initMap() {
    if (map || typeof L === "undefined") return;
    map = L.map("map", { zoomControl: false }).setView([22.35, 114.15], 11);
    window.map = map;

    const updateTileLayer = () => {
        const url = state.darkMode
            ? "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
            : "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
        map.eachLayer((layer) => { if (layer instanceof L.TileLayer) map.removeLayer(layer); });
        L.tileLayer(url, { attribution: "Â© OpenStreetMap" }).addTo(map);
    };
    updateTileLayer();
    window.updateMapTheme = updateTileLayer;
    renderReservoirMarkers();
}

function getNavigationUrl(res) {
    const ua = navigator.userAgent || "";
    const label = encodeURIComponent(res.name[state.lang]);
    if (/Android/i.test(ua)) return `geo:${res.lat},${res.lng}?q=${res.lat},${res.lng}(${label})`;
    if (/iPhone|iPad|iPod/i.test(ua)) return `https://maps.apple.com/?daddr=${res.lat},${res.lng}`;
    return `https://www.google.com/maps/dir/?api=1&destination=${res.lat},${res.lng}`;
}

function createReservoirPopup(res) {
    const navLabel = state.lang === "zh" ? "導航前往" : "Navigate";
    return `
        <div class="min-w-[180px]">
            <div style="font-weight:700;margin-bottom:8px;">${res.name[state.lang]}</div>
            <a href="${getNavigationUrl(res)}" target="_blank" rel="noopener noreferrer" style="display:inline-block;background:#2563EB;color:#fff;padding:6px 10px;border-radius:8px;text-decoration:none;font-size:12px;">${navLabel}</a>
        </div>
    `;
}

function renderReservoirMarkers() {
    if (!map) return;
    reservoirMarkers.forEach((m) => map.removeLayer(m));
    reservoirMarkers = [];
    reservoirMarkerById = new Map();
    RESERVOIRS.forEach((res) => {
        const marker = L.marker([res.lat, res.lng]).addTo(map).bindPopup(createReservoirPopup(res));
        reservoirMarkers.push(marker);
        reservoirMarkerById.set(res.id, marker);
    });
}

function locateUser() {
    const statusText = document.getElementById("status-text");
    const statusDot = document.getElementById("status-dot");
    statusText.innerText = I18N[state.lang].locating;
    statusDot.className = "w-2 h-2 rounded-full bg-yellow-400 animate-ping";
    if (!map) initMap();
    if (!map) return;
    map.once("locationerror", () => {
        // Keep app usable in preview mode (e.g., non-HTTPS or denied location).
        checkProximity(map.getCenter());
    });
    try {
        map.locate({ setView: true, maxZoom: 14 });
    } catch {
        checkProximity(map.getCenter());
    }
    map.once("locationfound", (e) => {
        if (userMarker) map.removeLayer(userMarker);
        userMarker = L.circleMarker(e.latlng, { radius: 8, color: "white", fillColor: "#2563EB", fillOpacity: 1 }).addTo(map);
        checkProximity(e.latlng);
    });
}

function checkProximity(latlng) {
    let nearest = null;
    let minDist = Infinity;
    RESERVOIRS.forEach((res) => {
        const dist = map.distance(latlng, [res.lat, res.lng]);
        if (dist < minDist) { minDist = dist; nearest = res; }
    });
    const statusText = document.getElementById("status-text");
    const statusDot = document.getElementById("status-dot");
    if (!nearest) return;
    statusText.innerText = `${I18N[state.lang].near_res} ${nearest.name[state.lang]}`;
    statusDot.className = "w-2 h-2 rounded-full bg-green-500";
    const marker = reservoirMarkerById.get(nearest.id);
    if (marker) {
        const target = marker.getLatLng();
        map.setView(target, map.getZoom(), { animate: true });
        setTimeout(() => marker.openPopup(), 220);
    }
    if (navigator.vibrate) navigator.vibrate(200);
}

function renderDex() {
    const t = I18N[state.lang];
    const cards = EXEMPT_FISH.map((fish) => `
        <article class="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
            <img src="${fish.img}" alt="${fish.en}" class="w-full h-44 object-cover bg-gray-100 dark:bg-gray-700">
            <div class="p-4">
                <h3 class="font-bold text-base">${fish.zh}</h3>
                <p class="text-sm text-gray-600 dark:text-gray-300">${fish.en}</p>
                <p class="text-xs text-gray-500 italic mt-1">${fish.sci}</p>
            </div>
        </article>
    `).join("");

    document.getElementById("fish-list").innerHTML = `
        <section>
            <h2 class="text-2xl font-bold mb-2" data-i18n="tab_dex">${t.tab_dex}</h2>
            <p class="text-sm text-gray-500" data-i18n="dex_subtitle">${t.dex_subtitle}</p>
        </section>
        <section class="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-700">
            <h3 class="font-bold text-lg mb-2">${t.limit_size_title}</h3>
            <p class="text-sm leading-relaxed text-gray-700 dark:text-gray-200">${t.limit_size_text}</p>
        </section>
        <section class="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-700">
            <h3 class="font-bold text-lg mb-2">${t.limit_qty_title}</h3>
            <p class="text-sm leading-relaxed text-gray-700 dark:text-gray-200">${t.limit_qty_text}</p>
        </section>
        <section class="bg-amber-50 dark:bg-amber-900/20 rounded-xl p-4 border border-amber-300/60 dark:border-amber-500/40">
            <h3 class="font-bold text-lg mb-2">${t.exempt_title}</h3>
            <p class="text-sm text-amber-900 dark:text-amber-100 mb-2">${t.exempt_family}</p>
            <p class="font-bold text-sm text-red-700 dark:text-red-300">${t.exempt_notice}</p>
            <a href="https://www.wsd.gov.hk/tc/customer-services/other-customer-services/fishing-in-reservoirs/fun-of-fishing/index.html" target="_blank" rel="noopener noreferrer" class="inline-block mt-2 text-xs underline text-primary">${t.source_label}</a>
        </section>
        <section class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            ${cards}
        </section>
    `;
}

function getLogs() {
    try {
        const parsed = JSON.parse(localStorage.getItem("fe_logs") || "[]");
        return Array.isArray(parsed) ? parsed : [];
    } catch {
        return [];
    }
}

function setLogs(logs) {
    localStorage.setItem("fe_logs", JSON.stringify(logs));
}

function escapeHtml(str) {
    return String(str)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#39;");
}

function formatDateYMD(timestamp) {
    if (!timestamp) return "";
    const asText = String(timestamp);
    if (/^\d{4}-\d{2}-\d{2}/.test(asText)) return asText.slice(0, 10);
    const d = new Date(timestamp);
    if (Number.isNaN(d.getTime())) return "";
    return d.toISOString().slice(0, 10);
}

function parseLatLng(text) {
    if (!text) return null;
    const match = String(text).trim().match(/(-?\d+(?:\.\d+)?)\s*,\s*(-?\d+(?:\.\d+)?)/);
    if (!match) return null;
    const lat = Number(match[1]);
    const lng = Number(match[2]);
    if (!Number.isFinite(lat) || !Number.isFinite(lng)) return null;
    if (lat < -90 || lat > 90 || lng < -180 || lng > 180) return null;
    return { lat, lng };
}

function renderLogs() {
    const listEl = document.getElementById("log-list");
    const emptyEl = document.getElementById("log-empty");
    if (!listEl || !emptyEl) return;
    const delLabel = state.lang === "zh" ? "刪除" : "Delete";

    const logs = getLogs().sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    if (!logs.length) {
        emptyEl.classList.remove("hidden");
        listEl.innerHTML = "";
        return;
    }

    emptyEl.classList.add("hidden");
    listEl.innerHTML = logs.map((log) => {
        const dateText = formatDateYMD(log.timestamp);
        return `
        <article onclick="openLogDetailModal('${log.id}')" class="bg-white dark:bg-gray-800 rounded-xl p-3 shadow-sm border border-gray-100 dark:border-gray-700 flex items-center gap-3 cursor-pointer">
            <img src="${log.imageBase64}" alt="catch photo" class="w-16 h-16 rounded-lg object-cover bg-gray-100 dark:bg-gray-700 shrink-0">
            <div class="min-w-0 flex-1">
                <p class="font-bold truncate">${escapeHtml(log.species || "-")}</p>
                <p class="text-sm text-gray-600 dark:text-gray-300">${Number(log.length)} cm</p>
            </div>
            <div class="text-right shrink-0">
                <p class="text-xs text-gray-500 mb-2">${dateText}</p>
                <button onclick="event.stopPropagation(); deleteLog('${log.id}')" class="text-xs px-2 py-1 rounded border border-red-300 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/30">${delLabel}</button>
            </div>
        </article>
        `;
    }).join("");
}

function startAddLog(source) {
    pendingLogSource = source;
    const input = document.getElementById("log-photo-input");
    if (!input) return;
    if (source === "camera") input.setAttribute("capture", "environment");
    else input.removeAttribute("capture");
    input.value = "";
    input.click();
}

function openLogModal() {
    const modal = document.getElementById("log-modal");
    if (!modal) return;
    modal.classList.remove("hidden");
    const dateInput = document.getElementById("log-date");
    if (dateInput && !dateInput.value) dateInput.value = new Date().toISOString().split("T")[0];
}

function closeLogModal() {
    const modal = document.getElementById("log-modal");
    if (modal) modal.classList.add("hidden");
    const form = document.querySelector("#log-modal form");
    if (form) form.reset();
    const preview = document.getElementById("log-photo-preview");
    if (preview) {
        preview.src = "";
        preview.classList.add("hidden");
    }
    pendingLogImageBase64 = "";
    pendingLogSource = "";
}

async function handleLogPhotoChange(event) {
    const file = event.target.files && event.target.files[0];
    if (!file) return;
    pendingLogImageBase64 = await compressImage(file);
    openLogModal();
    const preview = document.getElementById("log-photo-preview");
    if (!preview) return;
    preview.src = pendingLogImageBase64;
    preview.classList.remove("hidden");
    await autofillLogLocation(file);
}

function getCurrentLocationText() {
    return new Promise((resolve) => {
        if (!navigator.geolocation) return resolve("");
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                const lat = pos.coords.latitude.toFixed(5);
                const lng = pos.coords.longitude.toFixed(5);
                resolve(`${lat}, ${lng}`);
            },
            () => resolve(""),
            { enableHighAccuracy: true, timeout: 8000, maximumAge: 0 }
        );
    });
}

function readExifGPSFromArrayBuffer(buffer) {
    const view = new DataView(buffer);
    if (view.getUint16(0, false) !== 0xffd8) return "";
    let offset = 2;

    while (offset < view.byteLength) {
        const marker = view.getUint16(offset, false);
        offset += 2;
        if ((marker & 0xff00) !== 0xff00) break;
        const size = view.getUint16(offset, false);
        if (marker === 0xffe1) {
            const exifStart = offset + 2;
            if (view.getUint32(exifStart, false) !== 0x45786966) return "";
            const tiff = exifStart + 6;
            const little = view.getUint16(tiff, false) === 0x4949;
            const get16 = (o) => view.getUint16(o, little);
            const get32 = (o) => view.getUint32(o, little);
            const ifd0 = tiff + get32(tiff + 4);
            const entries = get16(ifd0);
            let gpsIfd = 0;
            for (let i = 0; i < entries; i += 1) {
                const e = ifd0 + 2 + i * 12;
                if (get16(e) === 0x8825) gpsIfd = tiff + get32(e + 8);
            }
            if (!gpsIfd) return "";

            const gpsEntries = get16(gpsIfd);
            let latRef = "", lonRef = "", lat = null, lon = null;
            const readRational3 = (valOffset) => {
                const out = [];
                for (let i = 0; i < 3; i += 1) {
                    const n = get32(valOffset + i * 8);
                    const d = get32(valOffset + i * 8 + 4) || 1;
                    out.push(n / d);
                }
                return out;
            };
            for (let i = 0; i < gpsEntries; i += 1) {
                const e = gpsIfd + 2 + i * 12;
                const tag = get16(e);
                const type = get16(e + 2);
                const count = get32(e + 4);
                const val = e + 8;
                if (tag === 1 && type === 2) latRef = String.fromCharCode(view.getUint8(val));
                if (tag === 3 && type === 2) lonRef = String.fromCharCode(view.getUint8(val));
                if (tag === 2 && type === 5 && count === 3) lat = readRational3(tiff + get32(val));
                if (tag === 4 && type === 5 && count === 3) lon = readRational3(tiff + get32(val));
            }
            if (!lat || !lon) return "";
            let latVal = lat[0] + lat[1] / 60 + lat[2] / 3600;
            let lonVal = lon[0] + lon[1] / 60 + lon[2] / 3600;
            if (latRef === "S") latVal *= -1;
            if (lonRef === "W") lonVal *= -1;
            return `${latVal.toFixed(5)}, ${lonVal.toFixed(5)}`;
        }
        offset += size;
    }
    return "";
}

async function getExifLocationText(file) {
    try {
        const buf = await file.arrayBuffer();
        return readExifGPSFromArrayBuffer(buf);
    } catch {
        return "";
    }
}

async function autofillLogLocation(file) {
    const input = document.getElementById("log-location");
    if (!input) return;
    if (pendingLogSource === "camera") {
        input.value = await getCurrentLocationText();
        return;
    }
    if (pendingLogSource === "upload") {
        input.value = await getExifLocationText(file);
    }
}

function compressImage(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
            const img = new Image();
            img.onload = () => {
                const maxWidth = 800;
                let { width, height } = img;
                if (width > maxWidth) {
                    height = Math.round((height * maxWidth) / width);
                    width = maxWidth;
                }
                const canvas = document.createElement("canvas");
                canvas.width = width;
                canvas.height = height;
                const ctx = canvas.getContext("2d");
                if (!ctx) return reject(new Error("Canvas unavailable"));
                ctx.drawImage(img, 0, 0, width, height);
                resolve(canvas.toDataURL("image/jpeg", 0.7));
            };
            img.onerror = reject;
            img.src = reader.result;
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}

async function saveLog(event) {
    if (event) event.preventDefault();
    const speciesEl = document.getElementById("log-species");
    const lengthEl = document.getElementById("log-length");
    const weightEl = document.getElementById("log-weight");
    const locationEl = document.getElementById("log-location");
    const dateEl = document.getElementById("log-date");
    const fileEl = document.getElementById("log-photo-input");
    if (!speciesEl || !lengthEl || !weightEl || !locationEl || !dateEl || !fileEl) return;

    if (!pendingLogImageBase64 && fileEl.files && fileEl.files[0]) {
        pendingLogImageBase64 = await compressImage(fileEl.files[0]);
    }
    if (!pendingLogImageBase64) return;

    const chosenDate = dateEl.value || new Date().toISOString().split("T")[0];
    const ts = new Date(`${chosenDate}T12:00:00`).toISOString();
    const entry = {
        id: `${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
        timestamp: ts,
        imageBase64: pendingLogImageBase64,
        species: speciesEl.value.trim(),
        length: Number(lengthEl.value),
        weight: Number(weightEl.value),
        locationName: locationEl.value.trim()
    };

    const logs = getLogs();
    logs.push(entry);
    setLogs(logs);
    closeLogModal();
    renderLogs();
}

function deleteLog(id) {
    const t = I18N[state.lang];
    if (!confirm(t.log_delete_confirm)) return;
    const logs = getLogs().filter((item) => item.id !== id);
    setLogs(logs);
    renderLogs();
    if (currentDetailLogId === id) closeLogDetailModal();
}

function openLogDetailModal(id) {
    const logs = getLogs();
    const log = logs.find((item) => item.id === id);
    if (!log) return;
    currentDetailLogId = id;

    const modal = document.getElementById("log-detail-modal");
    const image = document.getElementById("log-detail-image");
    const species = document.getElementById("log-detail-species");
    const metrics = document.getElementById("log-detail-metrics");
    const date = document.getElementById("log-detail-date");
    const location = document.getElementById("log-detail-location");
    const mapWrap = document.getElementById("log-detail-map-wrap");
    const mapFrame = document.getElementById("log-detail-map");
    const shareBtn = document.getElementById("log-share-btn");
    if (!modal || !image || !species || !metrics || !date || !location || !mapWrap || !mapFrame || !shareBtn) return;

    image.src = log.imageBase64;
    species.innerText = log.species || "-";
    metrics.innerText = `${Number(log.length)} cm · ${Number(log.weight || 0)} kg`;
    date.innerText = formatDateYMD(log.timestamp);
    location.innerText = log.locationName ? log.locationName : "";
    const coords = parseLatLng(log.locationName);
    if (coords) {
        mapFrame.src = `https://www.openstreetmap.org/export/embed.html?bbox=${coords.lng - 0.01}%2C${coords.lat - 0.01}%2C${coords.lng + 0.01}%2C${coords.lat + 0.01}&layer=mapnik&marker=${coords.lat}%2C${coords.lng}`;
        mapWrap.classList.remove("hidden");
    } else {
        mapFrame.removeAttribute("src");
        mapWrap.classList.add("hidden");
    }
    shareBtn.onclick = () => generateShareImage(id);
    modal.classList.remove("hidden");
}

function closeLogDetailModal() {
    const modal = document.getElementById("log-detail-modal");
    if (modal) modal.classList.add("hidden");
    currentDetailLogId = null;
}

function loadImage(src) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = src;
    });
}

async function generateShareImage(logId) {
    const t = I18N[state.lang];
    const log = getLogs().find((item) => item.id === logId);
    if (!log) return;

    const canvas = document.getElementById("share-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = await loadImage(log.imageBase64);
    const cw = canvas.width;
    const ch = canvas.height;

    ctx.clearRect(0, 0, cw, ch);
    const scale = Math.max(cw / img.width, ch / img.height);
    const dw = img.width * scale;
    const dh = img.height * scale;
    const dx = (cw - dw) / 2;
    const dy = (ch - dh) / 2;
    ctx.drawImage(img, dx, dy, dw, dh);

    const grad = ctx.createLinearGradient(0, ch * 0.5, 0, ch);
    grad.addColorStop(0, "rgba(0,0,0,0)");
    grad.addColorStop(1, "rgba(0,0,0,0.75)");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, cw, ch);

    ctx.fillStyle = "#FFFFFF";
    ctx.textAlign = "left";
    ctx.font = "bold 48px sans-serif";
    ctx.fillText(log.species || "-", 56, ch - 220);
    ctx.font = "bold 48px sans-serif";
    ctx.fillText(`${Number(log.length)} cm · ${Number(log.weight || 0)} kg`, 56, ch - 118);
    ctx.font = "500 38px sans-serif";
    ctx.fillText(formatDateYMD(log.timestamp), 56, ch - 58);

    ctx.textAlign = "right";
    ctx.font = "bold 32px sans-serif";
    ctx.fillText("釣魚易 FishingEasy HK", cw - 40, ch - 24);

    const blob = await new Promise((resolve) => canvas.toBlob(resolve, "image/jpeg", 0.92));
    if (!blob) return;
    const file = new File([blob], `fishingeasy_trophy_${Date.now()}.jpg`, { type: "image/jpeg" });
    const shareText = state.lang === "zh"
        ? `漁獲日誌：${log.species || "-"} (${Number(log.length)}cm)。 #釣魚易`
        : `Catch Log: ${log.species || "-"} (${Number(log.length)}cm). #FishingEasyHK`;

    if (navigator.share && navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({ files: [file], title: "FishingEasyHK Share", text: shareText });
        alert(t.share_success);
        return;
    }

    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = file.name;
    a.click();
    URL.revokeObjectURL(url);
    alert(t.share_unsupported);
}

function renderChecklist() {
    const container = document.getElementById("rules-checklist-container");
    if (!container) return;
    const items = ["chk_license", "chk_lead", "chk_rod"];
    container.innerHTML = items.map((key) => `
        <label class="flex items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-600 transition">
            <input type="checkbox" onchange="toggleCheck('${key}')" ${state.checklist[key] ? "checked" : ""}
                class="form-checkbox h-6 w-6 text-primary rounded border-gray-300 focus:ring-primary">
            <span class="ml-4 text-lg font-medium text-gray-700 dark:text-gray-200">${I18N[state.lang][key]}</span>
        </label>
    `).join("");
}

function toggleCheck(key) {
    state.checklist[key] = !state.checklist[key];
    localStorage.setItem("fe_check", JSON.stringify(state.checklist));
}

function updateLicense() {
    const input = document.getElementById("license-date");
    const display = document.getElementById("days-left");
    if (document.activeElement !== input) input.value = state.licenseDate;
    state.licenseDate = input.value;
    localStorage.setItem("fe_license", state.licenseDate);

    const start = new Date(state.licenseDate);
    const end = new Date(start);
    end.setFullYear(end.getFullYear() + 3);
    const diff = Math.ceil((end - new Date()) / (1000 * 60 * 60 * 24));
    display.innerText = diff < 0 ? "0" : String(diff);
    display.parentElement.className = diff < 0 ? "flex items-baseline gap-2 text-red-200" : "flex items-baseline gap-2";
}

function applyTheme() {
    const btn = document.getElementById("btn-dark").firstElementChild;
    if (state.darkMode) {
        document.documentElement.classList.add("dark");
        btn.classList.add("translate-x-6");
        document.getElementById("btn-dark").className = "w-12 h-6 bg-blue-600 rounded-full relative transition duration-300";
    } else {
        document.documentElement.classList.remove("dark");
        btn.classList.remove("translate-x-6");
        document.getElementById("btn-dark").className = "w-12 h-6 bg-gray-300 rounded-full relative transition duration-300";
    }
    if (window.updateMapTheme) window.updateMapTheme();
}

function toggleDark() {
    state.darkMode = !state.darkMode;
    localStorage.setItem("fe_dark", state.darkMode);
    applyTheme();
}

function applyLang() {
    const t = I18N[state.lang];
    document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.getAttribute("data-i18n");
        if (t[key]) el.innerText = t[key];
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
        const key = el.getAttribute("data-i18n-placeholder");
        if (t[key]) el.setAttribute("placeholder", t[key]);
    });
    document.getElementById("btn-zh").className = `px-3 py-1 rounded text-sm font-bold transition ${state.lang === "zh" ? "bg-white text-primary shadow" : "text-gray-500"}`;
    document.getElementById("btn-en").className = `px-3 py-1 rounded text-sm font-bold transition ${state.lang === "en" ? "bg-white text-primary shadow" : "text-gray-500"}`;
    renderDex();
    renderLogs();
    renderChecklist();
    renderReservoirMarkers();
    if (userMarker) checkProximity(userMarker.getLatLng());
    document.querySelectorAll("[data-lang]").forEach((el) => {
        el.classList.toggle("hidden", el.getAttribute("data-lang") !== state.lang);
    });
    if (map) {
        map.closePopup();
        setTimeout(() => map.invalidateSize(), 0);
    }
}

function setLang(lang) {
    state.lang = lang;
    localStorage.setItem("fe_lang", lang);
    applyLang();
}

function acceptDisclaimer() {
    state.agreed = true;
    localStorage.setItem("fe_agreed", "true");
    document.getElementById("disclaimer-modal").classList.add("hidden");
}

function resetApp() {
    if (confirm("Reset all data?")) {
        localStorage.clear();
        location.reload();
    }
}
