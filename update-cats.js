const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Replace the filter buttons first
const filterRegex = /<div class=\"product-filter reveal\">[\s\S]*?<\/div>/;
const newFilters = `<div class=\"product-filter reveal\">
        <button class=\"filter-btn active\" data-filter=\"all\">Hammasi</button>
        <button class=\"filter-btn\" data-filter=\"refraction\">Refraksiya</button>
        <button class=\"filter-btn\" data-filter=\"diagnostic\">Diagnostika</button>
        <button class=\"filter-btn\" data-filter=\"surgery\">Xirurgiya va IOL</button>
        <button class=\"filter-btn\" data-filter=\"lasers\">Oftalmologik lazerlar</button>
        <button class=\"filter-btn\" data-filter=\"lens-edger\">Linza kesish uskunalari</button>
        <button class=\"filter-btn\" data-filter=\"industrial-edger\">Sanoat linza uskunalari</button>
        <button class=\"filter-btn\" data-filter=\"peripheral\">Periferik uskunalar</button>
      </div>`;
html = html.replace(filterRegex, newFilters);

// Now update data-category for products based on the preceding divider.
// We'll split the products-grid content.
const gridStart = html.indexOf('<div class=\"products-grid\">');
const gridEnd = html.indexOf('</section>', gridStart);

let beforeGrid = html.substring(0, gridStart);
let gridContent = html.substring(gridStart, gridEnd);
let afterGrid = html.substring(gridEnd);

let currentCat = '';
let lines = gridContent.split('\n');
for (let i = 0; i < lines.length; i++) {
  let line = lines[i];
  
  // check if this line is a divider
  if (line.includes('category-divider')) {
    if (line.includes('categoryRefraction')) currentCat = 'refraction';
    else if (line.includes('categoryDiagnostic')) currentCat = 'diagnostic';
    else if (line.includes('categorySurgicalIol') || line.includes('id=\"surgical-iol\"')) currentCat = 'surgery';
    else if (line.includes('categoryOphthalmicLasers') || line.includes('id=\"ophthalmic-lasers\"')) currentCat = 'lasers';
    else if (line.includes('categoryLensEdger') || line.includes('id=\"lens-edger\"')) currentCat = 'lens-edger';
    else if (line.includes('categoryIndustrialEdger') || line.includes('id=\"industrial-edger\"')) currentCat = 'industrial-edger';
    else if (line.includes('categoryPeripheral') || line.includes('id=\"peripheral\"')) currentCat = 'peripheral';
  }
  
  // if it's a product card, update its data-category
  if (line.includes('class=\"product-card reveal\"') && currentCat) {
    line = line.replace(/data-category=\"[a-zA-Z-]+\"/, `data-category=\"${currentCat}\"`);
    lines[i] = line;
  }
}

html = beforeGrid + lines.join('\n') + afterGrid;

fs.writeFileSync('index.html', html);
console.log('Categories and filters updated perfectly!');
