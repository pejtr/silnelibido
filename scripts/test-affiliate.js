const baseUrl = "https://www.proerecta.cz/produkty/";
const queryParams = {
  utm_source: "facebook",
  utm_medium: "cpc",
  utm_campaign: "summer_sale",
  a_aid: "5d5a767017fee",
  a_bid: "fd5e6b0c"
};

const url = new URL(baseUrl);

Object.keys(queryParams).forEach(key => {
  const value = queryParams[key];
  if (value) {
    url.searchParams.append(key, value);
  }
});

console.log("Base URL:", baseUrl);
console.log("Query Params:", JSON.stringify(queryParams, null, 2));
console.log("Result URL:", url.toString());

const expectedUrl = "https://www.proerecta.cz/produkty/?utm_source=facebook&utm_medium=cpc&utm_campaign=summer_sale&a_aid=5d5a767017fee&a_bid=fd5e6b0c";

if (url.toString() === expectedUrl) {
  console.log("✅ TEST PASSED");
} else {
  console.log("❌ TEST FAILED");
  console.log("Expected:", expectedUrl);
  console.log("Actual:  ", url.toString());
}
