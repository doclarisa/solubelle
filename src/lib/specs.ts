// Single source of truth for product specs, regulatory claims, and commercial
// terms referenced across the marketing site. Update values here only —
// every page should render from these constants so figures stay consistent.

export const SPECS = {
  dissolution: {
    // Full dissolution in hot water
    hotWaterTemp: '140°F (60°C)+',
    hotWaterTime: '2–5 minutes',
    hotWaterFull: 'Dissolves completely in hot water (140°F/60°C+) in 2–5 minutes',
    // Full dissolution in cold / room-temperature water (slow — this is what
    // makes the bags rain- and produce-moisture resistant in normal use)
    coldWaterTime: '10–30 minutes',
    rainResistant:
      'Rain-resistant under normal conditions — light rain, wet produce, and damp hands won\'t dissolve the bag. Full dissolution requires sustained contact with hot water (140°F/60°C+) and takes 2–5 minutes.',
  },

  capacity: {
    standard: '12 lbs',
    heavyDuty: '20 lbs',
  },

  moq: {
    wholesale: '500 units',
    customBranded: '1,000 units',
  },

  leadTime: {
    customBranded: '4–6 weeks',
  },

  fda: 'food-grade safe — certification available upon request',
  fdaShort: 'Food-grade safe',

  caBagLaw: {
    name: 'California SB 270 & SB 1053 Compliance',
    desc: "Our bags meet the material and labeling requirements of California's reusable and single-use carryout bag laws (SB 270 and SB 1053). Suitable for retail use in California and states with similar legislation.",
  },
} as const;
