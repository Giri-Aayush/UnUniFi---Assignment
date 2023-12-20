const fs = require("fs");
const _ = require("lodash");

// Load the exported variables from Figma
const data = require("./exportedVariables.json");

// Define the fields that contain colors and their respective Tailwind keywords
const COLOR_FIELDS = {
  "Main Green": "main-green",
  "Primary Blue": "primary-blue",
  "White Blue": "white-blue",
  "Primary White": "primary-white",
  "Main Black": "main-black",
  "Blue Gray": "blue-gray",
  "Gray Glass": "gray-glass",
  "Main Red": "main-red",
};

// Define the fields that contain spacing, border radius, etc.
// const SPACING_FIELD = "Spacing";
// const BORDER_RADIUS_FIELD = "Radius";

// Define the order of border radius values. Your Figma variables can be just a subset of these (e.g. mine has only sm, base, xl)
// const BORDER_RADIUS_ORDER = [
//   "xs",
//   "sm",
//   "md",
//   "base",
//   "lg",
//   "xl",
//   "2xl",
//   "3xl",
// ];

const processedData = {
  theme: {
    colors: {},
    // spacing: {},
    // borderRadius: {},
  },
};

// Process colors
Object.entries(COLOR_FIELDS).forEach(([field, keyword]) => {
  if (data?.[field]) {
    processedData.theme.colors[keyword] = data?.[field]?.["$value"];
  }
});

// // Process spacing
// if (data.body[SPACING_FIELD]) {
//   Object.entries(data.body[SPACING_FIELD])
//     .sort(([keyA], [keyB]) => parseFloat(keyA) - parseFloat(keyB))
//     .forEach(([key, value]) => {
//       processedData.theme.spacing[
//         key.replace(",", ".")
//       ] = `${value["$value"]}px`;
//     });
// }

// // Process border radius
// if (data.body[BORDER_RADIUS_FIELD]) {
//   BORDER_RADIUS_ORDER.forEach((orderKey) => {
//     if (data.body[BORDER_RADIUS_FIELD][orderKey]) {
//       processedData.theme.borderRadius[
//         orderKey
//       ] = `${data.body[BORDER_RADIUS_FIELD][orderKey]["$value"]}px`;
//     }
//   });
// }

fs.writeFileSync(
  "./variableOutput.js",
  "module.exports = " + JSON.stringify(processedData, null, 2),
  "utf-8"
);
console.log(
  "Processing completed successfully. Output written to 'variableOutput.js'."
);
