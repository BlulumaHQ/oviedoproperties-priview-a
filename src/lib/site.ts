export const SITE = {
  name: "Oviedo Properties",
  tagline: "Crafting Quality, Creating Legacy",
  phone: "778.218.2662",
  phoneHref: "tel:+17782182662",
  email: "info@oviedoproperties.com",
  emailHref: "mailto:info@oviedoproperties.com",
  address: "101-8310 130th Street, Surrey, BC, Canada, V3W 8J9",
  city: "Surrey, British Columbia",
  mapEmbed:
    "https://www.google.com/maps?q=101-8310+130th+Street+Surrey+BC+V3W+8J9&output=embed",
  description:
    "Oviedo Properties is an integrated development and construction company based in Surrey, British Columbia. Specializing in the investment, development, and management of diverse commercial, residential, and rental properties, we are dedicated to creating innovative and sustainable real estate solutions.",
};

export const NAV = [
  { to: "/residential", label: "Residential" },
  { to: "/commercial", label: "Commercial" },
  { to: "/rental", label: "Rental" },
  { to: "/company", label: "Company" },
  { to: "/customer-care", label: "Care" },
  { to: "/contact", label: "Contact" },
] as const;
