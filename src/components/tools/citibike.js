const MANHATTAN_BELOW_60_NEIGHBORHOODS = new Set([
  "Chelsea-Hudson Yards",
  "Chinatown-Two Bridges",
  "East Midtown-Turtle Bay",
  "East Village",
  "Financial District-Battery Park City",
  "Gramercy",
  "Greenwich Village",
  "Hell's Kitchen",
  "Lower East Side",
  "Midtown South-Flatiron-Union Square",
  "Midtown-Times Square",
  "Murray Hill-Kips Bay",
  "SoHo-Little Italy-Hudson Square",
  "Stuyvesant Town-Peter Cooper Village",
  "The Battery-Governors Island-Ellis Island-Liberty Island",
  "Tribeca-Civic Center",
  "West Village"
]);

const isBelow60 = (neighborhood) => {
    return MANHATTAN_BELOW_60_NEIGHBORHOODS.has(neighborhood);
};

export { isBelow60, MANHATTAN_BELOW_60_NEIGHBORHOODS };