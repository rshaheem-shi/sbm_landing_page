export const GOLD = "#C9A227" as const;
export const MAROON = "#731C1C" as const;

const WA_MESSAGE =
  "Hello, I am interested in knowing more about the property you posted. Could you please share the property details.";

export const WA_LINK = `https://wa.me/919952228198?text=${encodeURIComponent(WA_MESSAGE)}`;

export const CONTACT_EMAIL = "rshaheem311@gmail.com";
export const CONTACT_PHONE = "+91 99522 28198";
export const CONTACT_ADDRESS =
  "Tuticorin Airport Road, Vagaikulam Toll Plaza, Tamil Nadu, India";

export const NAV_OFFSET_PX = 76;

export const CHART_DATA = [
  { year: "2019", value: 100 },
  { year: "2020", value: 118 },
  { year: "2021", value: 145 },
  { year: "2022", value: 188 },
  { year: "2023", value: 248 },
  { year: "2024", value: 318 },
  { year: "2025", value: 425 },
] as const;
