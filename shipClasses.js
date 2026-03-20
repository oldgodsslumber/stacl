// ============================================================
// Star Trek Adventures: Captain's Log – Ship Class Data
// Sources:
//   [1] STA Solo RPG v1.3.pdf  (main book)
//   [2] Captains_Log_Solo Supplemental_v1.0.pdf
//
// NOTES:
//   • No ship stat blocks list specific pre-assigned talents.
//     Each ship gets a number of talents equal to its Scale,
//     chosen freely from the talent list on pp.170-173 [1].
//     The 'talents' array below is therefore left empty ([])
//     for user selection, with any book-noted default suggestions
//     in comments.
//   • "Centaur" appears in the d20 roll matrix (p.143 [1]) but
//     has NO dedicated stat block in either book.
//   • Odyssey class has Scale 7 as printed [1 p.160].
//   • 32nd Century (Discovery) ships use IMT-C rules:
//     roll 3d20, use best 2; lower stats offset by extra die.
//   • Departments max 5, Systems max 12 (per milestone rules).
// ============================================================

const shipClasses = [

  // ─────────────────────────────────────────────
  //  ENTERPRISE ERA  (22nd Century)
  // ─────────────────────────────────────────────

  {
    name: 'Daedalus',
    source: 'STA Solo RPG v1.3',
    era: 'Enterprise Era',
    scale: 3,
    // Systems
    comms: 7, computers: 7, engines: 7, sensors: 8, structure: 10, weapons: 10,
    // Departments
    command: 2, conn: 2, security: 1, engineering: 5, science: 4, medicine: 2,
    talents: [],   // choose up to Scale (3) from talent list
    trait: 'United Earth / Federation Starship',
    notes: 'Primary patrol/colony support/exploration craft; served into mid-23rd century active, late 24th century civilian.'
  },

  {
    name: 'Intrepid (22nd Century)',
    source: 'STA Solo RPG v1.3',
    era: 'Enterprise Era',
    scale: 3,
    comms: 6, computers: 5, engines: 7, sensors: 6, structure: 5, weapons: 5,
    command: 2, conn: 3, security: 3, engineering: 2, science: 3, medicine: 1,
    talents: [],
    trait: 'United Earth Starship',
    notes: 'Smaller NX-derived design; became indispensable during Earth-Romulan War.'
  },

  {
    name: 'J-Class / Y-Class',
    source: 'STA Solo RPG v1.3',
    era: 'Enterprise Era',
    scale: 2,
    comms: 5, computers: 5, engines: 6, sensors: 7, structure: 8, weapons: 4,
    command: 1, conn: 3, security: 1, engineering: 4, science: 1, medicine: 4,
    talents: [],
    trait: 'United Earth Starship, Civilian Starship',
    notes: 'UESPA cargo hauler; operated by "boomer" merchant families.'
  },

  {
    name: 'NX',
    source: 'STA Solo RPG v1.3',
    era: 'Enterprise Era',
    scale: 3,
    comms: 6, computers: 6, engines: 6, sensors: 6, structure: 6, weapons: 6,
    command: 3, conn: 2, security: 2, engineering: 3, science: 3, medicine: 2,
    talents: [],
    trait: 'United Earth / Federation Starship, State of the Art',
    notes: 'Served during Earth-Romulan War; phased out post-war due to high resource demands.'
  },

  {
    name: 'Warp Delta',
    source: 'STA Solo RPG v1.3',
    era: 'Enterprise Era',
    scale: 3,
    comms: 6, computers: 5, engines: 6, sensors: 6, structure: 5, weapons: 7,
    command: 2, conn: 3, security: 4, engineering: 3, science: 1, medicine: 2,
    talents: [],
    trait: 'United Earth Starship',
    notes: 'Heavily armed nimble patrol vessel; retired from Starfleet in 2190.'
  },

  // ─────────────────────────────────────────────
  //  ORIGINAL SERIES ERA  (23rd Century)
  // ─────────────────────────────────────────────

  {
    name: 'Antares',
    source: 'STA Solo RPG v1.3',
    era: 'Original Series Era',
    scale: 2,
    comms: 8, computers: 8, engines: 7, sensors: 8, structure: 7, weapons: 6,
    command: 1, conn: 3, security: 1, engineering: 4, science: 3, medicine: 3,
    talents: [],
    trait: 'Federation Starship',
    notes: 'Common trade-route and fleet-support vessel; continued civilian service into early 24th century.'
  },

  {
    name: 'Archer',
    source: 'STA Solo RPG v1.3',
    era: 'Original Series Era',
    scale: 3,
    comms: 9, computers: 8, engines: 10, sensors: 9, structure: 6, weapons: 6,
    command: 2, conn: 4, security: 2, engineering: 2, science: 3, medicine: 1,
    talents: [],
    trait: 'Federation Starship',
    notes: 'Next-generation pathfinder; advanced impulse drives and RCS thruster suite.'
  },

  {
    name: 'Cardenas',
    source: 'STA Solo RPG v1.3',
    era: 'Original Series Era',
    scale: 4,
    comms: 7, computers: 6, engines: 9, sensors: 8, structure: 6, weapons: 7,
    command: 2, conn: 3, security: 3, engineering: 2, science: 3, medicine: 1,
    talents: [],
    trait: 'Federation Starship',
    notes: 'High-speed intercept and first-contact vessel; prestigious posting in early 23rd century.'
  },

  // NOTE: "Centaur" appears in the d20 roll matrix (OSE, result 4) but
  // has NO stat block in this book. Omitted; use Miranda stats as proxy.

  {
    name: 'Constellation',
    source: 'STA Solo RPG v1.3',
    era: 'Original Series Era',
    // Book indexes this as p.154 (alongside Cheyenne on p.160); confirmed stats p.160
    // The Constellation class is listed under TNG Era in the stats section
    // but was developed mid-2280s bridging OSE/TNG – ERA assigned as below per context
    era: 'Next Generation Era',
    scale: 4,
    comms: 10, computers: 9, engines: 11, sensors: 11, structure: 9, weapons: 8,
    command: 2, conn: 4, security: 3, engineering: 2, science: 2, medicine: 1,
    talents: [],
    trait: 'Federation Starship',
    notes: 'Developed mid-2280s; high-warp intercept against Klingon incursions.'
  },

  {
    name: 'Constitution',
    source: 'STA Solo RPG v1.3',
    era: 'Original Series Era',
    scale: 4,
    comms: 8, computers: 8, engines: 8, sensors: 8, structure: 7, weapons: 7,
    command: 3, conn: 2, security: 3, engineering: 2, science: 3, medicine: 2,
    talents: [],
    trait: 'Federation Starship',
    notes: 'Legendary five-year mission explorer; testbed for new technologies in early 2270s.'
  },

  {
    name: 'Crossfield',
    source: 'STA Solo RPG v1.3',
    era: 'Original Series Era',
    scale: 4,
    comms: 7, computers: 8, engines: 8, sensors: 8, structure: 8, weapons: 7,
    command: 1, conn: 2, security: 2, engineering: 4, science: 4, medicine: 2,
    talents: [],
    trait: 'Federation Starship, Experimental',
    notes: 'Built in secret to test displacement-activated spore hub drive (Stamets/Straal). Launched 2255.'
  },

  {
    name: 'Engle',
    source: 'STA Solo RPG v1.3',
    era: 'Original Series Era',
    scale: 3,
    comms: 8, computers: 8, engines: 10, sensors: 7, structure: 6, weapons: 6,
    command: 2, conn: 3, security: 2, engineering: 2, science: 2, medicine: 4,
    talents: [],
    trait: 'Federation Starship',
    notes: 'Smaller, efficient high-velocity vessel; strong legacy with Starfleet Medical.'
  },

  {
    // Listed as "Excelsior" on OSE roll table (result 9) but stat block is TNG Era
    // The Excelsior launched 2285 – bridges OSE/TNG
    name: 'Excelsior',
    source: 'STA Solo RPG v1.3',
    era: 'Next Generation Era',
    scale: 5,
    comms: 8, computers: 8, engines: 10, sensors: 10, structure: 9, weapons: 8,
    command: 4, conn: 1, security: 2, engineering: 4, science: 2, medicine: 2,
    talents: [],
    trait: 'Federation Starship, The Great Experiment',
    notes: '"Great Experiment"; transwarp failed 2285, redesigned with highly modular replacement systems.'
  },

  {
    name: 'Hiawatha',
    source: 'STA Solo RPG v1.3',
    era: 'Original Series Era',
    scale: 3,
    comms: 8, computers: 8, engines: 6, sensors: 9, structure: 8, weapons: 5,
    command: 2, conn: 2, security: 2, engineering: 1, science: 3, medicine: 5,
    talents: [],
    trait: 'Federation Starship',
    notes: 'Integral medical/disaster-relief vessel; modular design; new construction ceased 2303.'
  },

  {
    name: 'Hoover',
    source: 'STA Solo RPG v1.3',
    era: 'Original Series Era',
    scale: 4,
    comms: 6, computers: 8, engines: 8, sensors: 7, structure: 7, weapons: 8,
    command: 1, conn: 2, security: 3, engineering: 4, science: 3, medicine: 2,
    talents: [],
    trait: 'Federation Starship',
    notes: 'Destroyer; testbed for new technologies; widely known for versatility to Starship Design Bureau.'
  },

  {
    name: 'Magee',
    source: 'STA Solo RPG v1.3',
    era: 'Original Series Era',
    scale: 3,
    comms: 7, computers: 9, engines: 7, sensors: 10, structure: 6, weapons: 5,
    command: 2, conn: 2, security: 1, engineering: 4, science: 5, medicine: 2,
    talents: [],
    trait: 'Federation Starship',
    notes: 'Experimental warp coil repeater design; limited service life; demobilized by 2245.'
  },

  {
    name: 'Malachowski',
    source: 'STA Solo RPG v1.3',
    era: 'Original Series Era',
    scale: 3,
    comms: 7, computers: 6, engines: 6, sensors: 8, structure: 8, weapons: 10,
    command: 2, conn: 2, security: 5, engineering: 3, science: 2, medicine: 1,
    talents: [],
    trait: 'Federation Starship',
    notes: 'Escort; built at colony world shipyards; used along Klingon Neutral Zone and Tzenkethi border.'
  },

  {
    name: 'Miranda',
    source: 'STA Solo RPG v1.3',
    era: 'Original Series Era',
    scale: 4,
    comms: 7, computers: 8, engines: 8, sensors: 9, structure: 8, weapons: 8,
    command: 3, conn: 3, security: 2, engineering: 2, science: 3, medicine: 2,
    talents: [],
    trait: 'Federation Starship',
    notes: 'Multipurpose patrol/combat cruiser; designed using Constitution-refit systems philosophy (2264).'
  },

  {
    name: 'Nimitz',
    source: 'STA Solo RPG v1.3',
    era: 'Original Series Era',
    scale: 4,
    comms: 10, computers: 7, engines: 7, sensors: 7, structure: 7, weapons: 7,
    command: 5, conn: 1, security: 3, engineering: 1, science: 3, medicine: 1,
    talents: [],
    trait: 'Federation Starship',
    notes: 'Large single-hulled heavy weapons platform from Operation Next Step; extensively used in Federation-Klingon War late 2250s.'
  },

  {
    name: 'Oberth',
    source: 'STA Solo RPG v1.3',
    era: 'Original Series Era',
    scale: 3,
    comms: 8, computers: 9, engines: 8, sensors: 9, structure: 7, weapons: 6,
    command: 1, conn: 3, security: 2, engineering: 3, science: 4, medicine: 2,
    talents: [],
    trait: 'Federation Starship',
    notes: 'Launched 2269; science vessel; difficult to refit in late 2290s; mostly civilian/research use thereafter.'
  },

  {
    name: 'Scout Type',
    source: 'STA Solo RPG v1.3',
    era: 'Original Series Era',
    scale: 4,
    comms: 7, computers: 9, engines: 9, sensors: 10, structure: 8, weapons: 6,
    command: 2, conn: 4, security: 1, engineering: 3, science: 4, medicine: 2,
    talents: [],
    trait: 'Federation Starship',
    notes: 'Companion design to Constitution class; saucer + single large warp nacelle; short-mission duration scout.'
  },

  {
    name: 'Shepard',
    source: 'STA Solo RPG v1.3',
    era: 'Original Series Era',
    scale: 3,
    comms: 6, computers: 7, engines: 9, sensors: 8, structure: 8, weapons: 7,
    command: 2, conn: 2, security: 3, engineering: 3, science: 3, medicine: 2,
    talents: [],
    trait: 'Federation Starship',
    notes: 'Developed alongside Walker class in Operation Next Step; compact, mass-producible.'
  },

  {
    name: 'Soyuz',
    source: 'STA Solo RPG v1.3',
    era: 'Original Series Era',
    scale: 4,
    comms: 8, computers: 10, engines: 9, sensors: 10, structure: 10, weapons: 10,
    command: 2, conn: 2, security: 4, engineering: 2, science: 3, medicine: 2,
    talents: [],
    trait: 'Federation Starship',
    notes: 'Impressive warship and explorer; border starbases and active reserve near Klingon/Romulan borders.'
  },

  {
    name: 'Sydney',
    source: 'STA Solo RPG v1.3',
    era: 'Original Series Era',
    scale: 4,
    comms: 9, computers: 7, engines: 9, sensors: 9, structure: 10, weapons: 7,
    command: 2, conn: 4, security: 2, engineering: 2, science: 2, medicine: 3,
    talents: [],
    trait: 'Federation Starship',
    notes: 'Colonial transport; Luna Shipyards; highly adaptable; Starfleet logistics + civilian use from 2279.'
  },

  {
    name: 'Walker',
    source: 'STA Solo RPG v1.3',
    era: 'Original Series Era',
    scale: 3,
    comms: 7, computers: 8, engines: 7, sensors: 10, structure: 7, weapons: 6,
    command: 2, conn: 2, security: 2, engineering: 3, science: 3, medicine: 3,
    talents: [],
    trait: 'Federation Starship',
    notes: 'Operation Next Step; launched 2195; multirole explorer; paved way for Federation expansion; retired 2265.'
  },

  // ─────────────────────────────────────────────
  //  NEXT GENERATION ERA  (24th Century)
  // ─────────────────────────────────────────────

  {
    name: 'Akira',
    source: 'STA Solo RPG v1.3',
    era: 'Next Generation Era',
    scale: 5,
    comms: 9, computers: 9, engines: 10, sensors: 10, structure: 10, weapons: 11,
    command: 3, conn: 1, security: 4, engineering: 2, science: 2, medicine: 3,
    talents: [],
    trait: 'Federation Starship',
    notes: 'Heavy armed combat/patrol cruiser with exploration capability; immediately ordered into wide production.'
  },

  {
    name: 'Ambassador',
    source: 'STA Solo RPG v1.3',
    era: 'Next Generation Era',
    scale: 5,
    comms: 9, computers: 10, engines: 9, sensors: 11, structure: 10, weapons: 9,
    command: 3, conn: 3, security: 2, engineering: 2, science: 3, medicine: 2,
    talents: [],
    trait: 'Federation Starship',
    notes: 'Launched 2335; exploration workhorse; design techniques became basis for Galaxy class.'
  },

  {
    name: 'Challenger',
    source: 'STA Solo RPG v1.3',
    era: 'Next Generation Era',
    scale: 4,
    comms: 8, computers: 10, engines: 12, sensors: 11, structure: 9, weapons: 8,
    command: 1, conn: 3, security: 2, engineering: 4, science: 3, medicine: 2,
    talents: [],
    trait: 'Federation Starship',
    notes: 'First design with advanced warp field repeaters; pioneered subspace-friendly high-warp travel.'
  },

  {
    name: 'Cheyenne',
    source: 'STA Solo RPG v1.3',
    era: 'Next Generation Era',
    scale: 4,
    comms: 10, computers: 10, engines: 10, sensors: 9, structure: 9, weapons: 9,
    command: 1, conn: 4, security: 2, engineering: 4, science: 2, medicine: 2,
    talents: [],
    trait: 'Federation Starship',
    notes: 'Proof-of-concept design; surprisingly versatile; initially used as high-speed couriers.'
  },

  {
    name: 'Defiant',
    source: 'STA Solo RPG v1.3',
    era: 'Next Generation Era',
    scale: 3,
    comms: 9, computers: 9, engines: 8, sensors: 9, structure: 8, weapons: 13,
    command: 2, conn: 3, security: 5, engineering: 2, science: 1, medicine: 2,
    talents: [],
    trait: 'Federation Starship',
    notes: 'Purpose-built warship; developed pre-Wolf 359 but first constructed 2371; massive redesigns for anti-Borg role.'
  },

  {
    name: 'Freedom',
    source: 'STA Solo RPG v1.3',
    era: 'Next Generation Era',
    scale: 4,
    comms: 10, computers: 9, engines: 11, sensors: 11, structure: 8, weapons: 10,
    command: 3, conn: 2, security: 3, engineering: 2, science: 3, medicine: 1,
    talents: [],
    trait: 'Federation Starship',
    notes: 'Extensive Dominion War service; largely serves Andorian and Tellar Prime Fleets; expected active until 2450.'
  },

  {
    name: 'Galaxy',
    source: 'STA Solo RPG v1.3',
    era: 'Next Generation Era',
    scale: 6,
    comms: 9, computers: 11, engines: 10, sensors: 10, structure: 10, weapons: 10,
    command: 3, conn: 2, security: 2, engineering: 2, science: 3, medicine: 3,
    talents: [],
    trait: 'Federation Starship',
    notes: 'Designed to surpass all prior exploration/science vessels; crew well-being philosophy; civilian dependents allowed.'
  },

  {
    name: 'Intrepid',
    source: 'STA Solo RPG v1.3',
    era: 'Next Generation Era',
    scale: 4,
    comms: 9, computers: 11, engines: 11, sensors: 10, structure: 8, weapons: 8,
    command: 2, conn: 4, security: 2, engineering: 2, science: 4, medicine: 1,
    talents: [],
    trait: 'Federation Starship, Top of the Line (2370s)',
    notes: 'Returned Starfleet to exploration goals; renewed interest after U.S.S. Voyager return 2378.'
  },

  {
    name: 'Nebula',
    source: 'STA Solo RPG v1.3',
    era: 'Next Generation Era',
    scale: 5,
    comms: 11, computers: 11, engines: 10, sensors: 8, structure: 9, weapons: 9,
    command: 4, conn: 1, security: 2, engineering: 4, science: 2, medicine: 2,
    talents: [],
    trait: 'Federation Starship',
    notes: 'Yoyodyne Propulsion Systems; Miranda-level modularity; Mission Pod trait reflects installed pod.'
  },

  {
    name: 'New Orleans',
    source: 'STA Solo RPG v1.3',
    era: 'Next Generation Era',
    scale: 4,
    comms: 10, computers: 10, engines: 10, sensors: 10, structure: 8, weapons: 9,
    command: 2, conn: 3, security: 1, engineering: 4, science: 4, medicine: 2,
    talents: [],
    trait: 'Federation Starship',
    notes: 'Compact non-modular hull; built ~25% faster than Nebula class.'
  },

  {
    name: 'Niagara',
    source: 'STA Solo RPG v1.3',
    era: 'Next Generation Era',
    scale: 5,
    comms: 9, computers: 9, engines: 11, sensors: 10, structure: 9, weapons: 9,
    command: 2, conn: 3, security: 2, engineering: 2, science: 4, medicine: 1,
    talents: [],
    trait: 'Federation Starship, Cutting Edge (2358-2360)',
    notes: 'Yoyodyne Proxima production; speed-priority assignments similar to Constellation class.'
  },

  {
    name: 'Norway',
    source: 'STA Solo RPG v1.3',
    era: 'Next Generation Era',
    scale: 4,
    comms: 9, computers: 9, engines: 10, sensors: 11, structure: 10, weapons: 9,
    command: 2, conn: 2, security: 2, engineering: 3, science: 2, medicine: 4,
    talents: [],
    trait: 'Federation Starship',
    notes: 'Rapid medical/emergency responder; compact wedge hull; approved for all Federation shipyards.'
  },

  {
    name: 'Nova',
    source: 'STA Solo RPG v1.3',
    era: 'Next Generation Era',
    scale: 3,
    comms: 10, computers: 10, engines: 10, sensors: 10, structure: 8, weapons: 8,
    command: 2, conn: 2, security: 2, engineering: 2, science: 4, medicine: 3,
    talents: [],
    trait: 'Federation Starship',
    notes: 'Small science/exploration vessel; inspired the Intrepid class design.'
  },

  {
    name: 'Olympic',
    source: 'STA Solo RPG v1.3',
    era: 'Next Generation Era',
    scale: 4,
    comms: 10, computers: 11, engines: 10, sensors: 11, structure: 9, weapons: 7,
    command: 2, conn: 2, security: 2, engineering: 1, science: 3, medicine: 5,
    talents: [],
    trait: 'Federation Starship, Non-Combatant',
    notes: 'Dedicated humanitarian/medical vessel; limited production from 2368; critical Dominion War role.'
  },

  {
    name: 'Raven Type',
    source: 'STA Solo RPG v1.3',
    era: 'Next Generation Era',
    scale: 2,
    comms: 11, computers: 11, engines: 8, sensors: 11, structure: 7, weapons: 5,
    command: 2, conn: 2, security: 1, engineering: 3, science: 5, medicine: 3,
    talents: [],
    trait: 'Federation Starship',
    notes: 'Federation Science Council civilian deep-space research vessel for scientists and dependents.'
  },

  {
    name: 'Saber',
    source: 'STA Solo RPG v1.3',
    era: 'Next Generation Era',
    scale: 3,
    comms: 10, computers: 9, engines: 11, sensors: 10, structure: 9, weapons: 9,
    command: 2, conn: 4, security: 4, engineering: 2, science: 1, medicine: 2,
    talents: [],
    trait: 'Federation Starship',
    notes: 'Patrol/anti-piracy vessel with basic survey capabilities; Federation border presence.'
  },

  {
    name: 'Springfield',
    source: 'STA Solo RPG v1.3',
    era: 'Next Generation Era',
    scale: 4,
    comms: 10, computers: 10, engines: 10, sensors: 12, structure: 8, weapons: 8,
    command: 2, conn: 2, security: 3, engineering: 3, science: 3, medicine: 2,
    talents: [],
    trait: 'Federation Starship',
    notes: 'Popular with new member worlds for indigenous crewing; launched ~2350s.'
  },

  {
    name: 'Steamrunner',
    source: 'STA Solo RPG v1.3',
    era: 'Next Generation Era',
    scale: 4,
    comms: 9, computers: 9, engines: 11, sensors: 10, structure: 9, weapons: 9,
    command: 1, conn: 3, security: 3, engineering: 3, science: 3, medicine: 2,
    talents: [],
    trait: 'Federation Starship',
    notes: 'Multi-role: light escort, interceptor, electronic warfare, surveillance; detached secondary hull between nacelles.'
  },

  // ─────────────────────────────────────────────
  //  PICARD ERA  (25th Century)
  // ─────────────────────────────────────────────

  {
    name: 'Gagarin',
    source: 'STA Solo RPG v1.3',
    era: 'Picard Era',
    scale: 5,
    comms: 9, computers: 9, engines: 12, sensors: 10, structure: 9, weapons: 12,
    command: 2, conn: 3, security: 4, engineering: 3, science: 1, medicine: 2,
    talents: [],
    trait: 'Federation Starship',
    notes: 'Battlecruiser; part of post-isolationism new-construction wave facing 25th century uncertainty.'
  },

  {
    name: 'Inquiry',
    source: 'STA Solo RPG v1.3',
    era: 'Picard Era',
    scale: 5,
    comms: 10, computers: 10, engines: 10, sensors: 11, structure: 10, weapons: 9,
    command: 4, conn: 2, security: 2, engineering: 2, science: 3, medicine: 2,
    talents: [],
    trait: 'Federation Starship',
    notes: 'Evolved from Vesta-class success; improved sustained cruising velocity over QSD; began replacing Mirandas.'
  },

  {
    name: 'Luna',
    source: 'STA Solo RPG v1.3',
    era: 'Picard Era',
    scale: 5,
    comms: 10, computers: 10, engines: 10, sensors: 12, structure: 8, weapons: 8,
    command: 2, conn: 2, security: 2, engineering: 3, science: 4, medicine: 2,
    talents: [],
    trait: 'Federation Starship',
    notes: 'Heavy explorer developed in parallel with Intrepid; larger research facilities, more computer power, longer mission duration.'
  },

  {
    name: 'Odyssey',
    source: 'STA Solo RPG v1.3',
    era: 'Picard Era',
    scale: 7,   // as printed in book (unusual – larger than Galaxy Scale 6)
    comms: 11, computers: 11, engines: 10, sensors: 10, structure: 11, weapons: 10,
    command: 3, conn: 2, security: 4, engineering: 3, science: 2, medicine: 2,
    talents: [],
    trait: 'Federation Starship',
    notes: 'Admiralty response to Borg/Dominion/Reman massive-ship threat; ambitious heavy-cruiser program.'
  },

  {
    name: 'Pathfinder',
    source: 'STA Solo RPG v1.3',
    era: 'Picard Era',
    scale: 4,
    comms: 9, computers: 11, engines: 11, sensors: 11, structure: 9, weapons: 9,
    command: 2, conn: 4, security: 2, engineering: 2, science: 4, medicine: 1,
    talents: [],
    trait: 'Federation Starship',
    notes: 'Versatile research/exploration platform also viable as defense; product of turn-of-25th-century design philosophy.'
  },

  {
    name: 'Prometheus',
    source: 'STA Solo RPG v1.3',
    era: 'Picard Era',
    scale: 4,
    comms: 9, computers: 9, engines: 10, sensors: 9, structure: 10, weapons: 12,
    command: 3, conn: 1, security: 4, engineering: 3, science: 2, medicine: 2,
    talents: [],
    trait: 'Federation Starship, Top of the Line (2375-2380)',
    notes: 'Tactical combat vessel capable of deep-space independent operations; Multi-Vector Assault Mode capable.'
  },

  {
    name: 'Reliant',
    source: 'STA Solo RPG v1.3',
    era: 'Picard Era',
    scale: 4,
    comms: 10, computers: 10, engines: 10, sensors: 10, structure: 10, weapons: 10,
    command: 2, conn: 3, security: 2, engineering: 2, science: 2, medicine: 4,
    talents: [],
    trait: 'Federation Starship',
    notes: 'Purpose-designed logistical and operational support backbone; Miranda replacement designed as support ship from inception.'
  },

  {
    name: 'Ross',
    source: 'STA Solo RPG v1.3',
    era: 'Picard Era',
    scale: 6,
    comms: 10, computers: 10, engines: 11, sensors: 10, structure: 10, weapons: 9,
    command: 2, conn: 2, security: 2, engineering: 3, science: 3, medicine: 3,
    talents: [],
    trait: 'Federation Starship',
    notes: 'Evolution of Galaxy-class large long-range explorer; incorporates 2370s tactical/computational advances.'
  },

  {
    name: 'Sovereign',
    source: 'STA Solo RPG v1.3',
    era: 'Picard Era',
    scale: 6,
    comms: 10, computers: 9, engines: 10, sensors: 10, structure: 9, weapons: 10,
    command: 4, conn: 1, security: 3, engineering: 2, science: 3, medicine: 2,
    talents: [],
    trait: 'Federation Starship',
    notes: 'Development began 2368; equipped for Borg/Dominion/Klingon threats; deep-space capable.'
  },

  {
    name: 'Sutherland',
    source: 'STA Solo RPG v1.3',
    era: 'Picard Era',
    scale: 5,
    comms: 11, computers: 11, engines: 10, sensors: 14, structure: 10, weapons: 10,
    command: 2, conn: 2, security: 2, engineering: 4, science: 3, medicine: 2,
    talents: [],
    trait: 'Federation Starship',
    notes: 'Long-range medium exploration/survey cruiser; generational evolution from Nebula; turn-of-century technologies.'
  },

  {
    name: 'Vesta',
    source: 'STA Solo RPG v1.3',
    era: 'Picard Era',
    scale: 6,
    comms: 10, computers: 12, engines: 12, sensors: 10, structure: 9, weapons: 9,
    command: 2, conn: 3, security: 2, engineering: 3, science: 3, medicine: 2,
    talents: [],
    trait: 'Federation Starship, State of the Art (2380s)',
    notes: 'Quantum slipstream drive; production disrupted by Utopia Planitia attack 2385; exploring Federation borders in cardinal directions.'
  },

  // ─────────────────────────────────────────────
  //  DISCOVERY ERA  (32nd Century)
  //  All ships have IMT-C trait:
  //  Roll 3d20, use best 2. On 3rd die success → advantage;
  //  on 3rd die complication → extra complication.
  // ─────────────────────────────────────────────

  {
    name: 'Angelou',
    source: 'STA Solo RPG v1.3',
    era: 'Discovery (32nd Century) Era',
    scale: 5,
    comms: 7, computers: 6, engines: 6, sensors: 7, structure: 8, weapons: 6,
    command: 2, conn: 2, security: 2, engineering: 3, science: 3, medicine: 3,
    talents: [],
    trait: 'Federation Starship, IMT-C',
    notes: 'Deep-space colonization ship with large enclosed biosphere reproducing planetary conditions.'
  },

  {
    name: 'Eisenberg',
    source: 'STA Solo RPG v1.3',
    era: 'Discovery (32nd Century) Era',
    scale: 4,
    comms: 7, computers: 7, engines: 7, sensors: 6, structure: 6, weapons: 6,
    command: 4, conn: 2, security: 2, engineering: 3, science: 2, medicine: 2,
    talents: [],
    trait: 'Federation Starship, IMT-C',
    notes: 'Designed to project diplomatic power and martial strength.'
  },

  {
    name: 'Friendship',
    source: 'STA Solo RPG v1.3',
    era: 'Discovery (32nd Century) Era',
    scale: 4,
    comms: 6, computers: 6, engines: 7, sensors: 7, structure: 6, weapons: 6,
    command: 2, conn: 3, security: 2, engineering: 3, science: 3, medicine: 2,
    talents: [],
    trait: 'Federation Starship, IMT-C',
    notes: 'Multirole explorer/cruiser; maintained trade ways and communications during the Burn.'
  },

  {
    name: 'Janeway',
    source: 'STA Solo RPG v1.3',
    era: 'Discovery (32nd Century) Era',
    scale: 4,
    comms: 7, computers: 6, engines: 7, sensors: 8, structure: 6, weapons: 5,
    command: 2, conn: 2, security: 2, engineering: 3, science: 4, medicine: 2,
    talents: [],
    trait: 'Federation Starship, IMT-C',
    notes: 'State-of-the-art deep-space explorer; advanced multi-vector slipstream propulsion; first to attempt leaving the galaxy.'
  },

  {
    name: 'Kirk',
    source: 'STA Solo RPG v1.3',
    era: 'Discovery (32nd Century) Era',
    scale: 4,
    comms: 6, computers: 6, engines: 7, sensors: 6, structure: 6, weapons: 8,
    command: 3, conn: 2, security: 3, engineering: 3, science: 2, medicine: 2,
    talents: [],
    trait: 'Federation Starship, IMT-C',
    notes: 'Core of Starfleet battle squadrons; integrated martial traditions from multiple 32nd-century Federation polities.'
  },

  // ─────────────────────────────────────────────
  //  LOWER DECKS ERA  (2370s–2380s)
  //  Source: Captains_Log_Solo Supplemental_v1.0.pdf
  // ─────────────────────────────────────────────

  {
    name: 'California',
    source: 'Captains_Log_Solo Supplemental_v1.0',
    era: 'Lower Decks Era (2370s-2380s)',
    scale: 4,
    comms: 10, computers: 10, engines: 8, sensors: 9, structure: 10, weapons: 8,
    command: 2, conn: 2, security: 2, engineering: 3, science: 3, medicine: 3,
    talents: [],
    trait: 'Federation Starship, Dependable',
    notes: 'Dependable front-line workhorse; dedicated cetacean crew section; multiple shuttlebays; phased to civilian use mid-25th century.'
  },

  {
    name: 'Ganashia',
    source: 'Captains_Log_Solo Supplemental_v1.0',
    era: 'Lower Decks Era (2370s-2380s)',
    scale: 5,
    comms: 9, computers: 9, engines: 10, sensors: 11, structure: 10, weapons: 9,
    command: 3, conn: 4, security: 2, engineering: 3, science: 2, medicine: 1,
    talents: [],
    trait: 'Federation Starship, Andorian Starship, Tellarite Starship',
    notes: 'Joint Andorian-Tellarite redesign of Earth-Romulan War-era frame; "Ganashia" combines words for "service" in both languages.'
  },

  {
    name: 'Obena',
    source: 'Captains_Log_Solo Supplemental_v1.0',
    era: 'Lower Decks Era (2370s-2380s)',
    scale: 5,
    comms: 9, computers: 9, engines: 12, sensors: 10, structure: 10, weapons: 9,
    command: 2, conn: 3, security: 2, engineering: 3, science: 3, medicine: 2,
    talents: [],
    trait: 'Federation Starship, State-of-the-Art (2381)',
    notes: 'Spiritual successor to Excelsior transwarp; standard warp + quantum slipstream (318+ ly/hr); multiple fusion reactors; U.S.S. da Vinci recorded 322 ly/hr.'
  },

  {
    name: 'Osler',
    source: 'Captains_Log_Solo Supplemental_v1.0',
    era: 'Lower Decks Era (2370s-2380s)',
    scale: 3,
    comms: 9, computers: 9, engines: 11, sensors: 9, structure: 8, weapons: 10,
    command: 2, conn: 3, security: 4, engineering: 2, science: 3, medicine: 1,
    talents: [],
    trait: 'Federation Starship, Andorian Starship',
    notes: 'Andorian Intelligence covert operations vessel; named for Andorian word for "spy"; minimal crew capable; limited Starfleet use from 2380.'
  },

  {
    name: 'Parliament',
    source: 'Captains_Log_Solo Supplemental_v1.0',
    era: 'Lower Decks Era (2370s-2380s)',
    scale: 5,
    comms: 9, computers: 9, engines: 11, sensors: 10, structure: 11, weapons: 9,
    command: 3, conn: 2, security: 2, engineering: 4, science: 2, medicine: 2,
    talents: [],
    trait: 'Federation Starship',
    notes: 'Multi-profile cruiser; Luna-class-style large saucer + underslung secondary hull; off-axis quantum torpedo launchers; reinforced structural framing.'
  },

  {
    name: "T'Kalat",
    source: 'Captains_Log_Solo Supplemental_v1.0',
    era: 'Lower Decks Era (2370s-2380s)',
    scale: 6,
    comms: 9, computers: 10, engines: 10, sensors: 12, structure: 9, weapons: 9,
    command: 2, conn: 2, security: 2, engineering: 3, science: 4, medicine: 2,
    talents: [],
    trait: 'Federation Starship, Vulcan Starship',
    notes: 'Vulcan High Command heavy explorer; launched from Vulcan home system 2375; under Vulcan Confederacy control rather than Starfleet.'
  },

];

// ─────────────────────────────────────────────
// TALENT LIST  (pp.170-173, STA Solo RPG v1.3)
// Each ship gets talents equal to its Scale.
// ─────────────────────────────────────────────
const talentList = [
  'Ablative Armor',                        // any era
  'Ablative Field Projector',              // 25th Century+
  'Adaptable Energy Weapons',             // 24th Century+
  'Advanced Emergency Crew Holograms',    // 2380+
  'Advanced Medical Ward/Sickbay',
  'Advanced Research Facilities',
  'Advanced Sensor Suites',
  'Advanced Shields',
  'Advanced Transporters',                 // 24th Century+
  'Automated Defenses',                    // 23rd Century+
  'Backup EPS Conduits',
  "Captain's Yacht",
  'Cloaked Mines',                         // non-Federation
  'Cloaking Device',                       // non-Federation
  'Command Ship',
  'Dedicated Subspace Transceiver Array',
  'Deluxe Galley',
  'Diplomatic Suites',
  'Dual Environment',                      // 24th Century+
  'Electronic Warfare Systems',
  'Emergency Medical Hologram',            // 2370+
  'Extensive Shuttlebays',
  'Fast Targeting Systems',
  'High-Resolution Sensors',
  'High-Power Tractor Beam',
  'Improved Damage Control',
  'Improved Hull Integrity',
  'Improved Impulse Drive',
  'Improved Power Systems',
  'Improved Reaction Control System',
  'Improved Shield Recharge',
  'Improved Warp Drive',
  'Independent Phaser Supply',
  'Modular Laboratories',
  'Multi-Vector Assault Mode',
  'Point Defense System',
  'Quantum Torpedoes',
  'Rapid-Fire Torpedo Launcher',
  'Regenerative Hull',                     // 25th Century+
  'Rugged Design',
  'Saucer Separation',
  'Secondary Reactors',
  'Self-Replicating Mines',                // 2371+
  'Siphoning Shields',
  'Slim Sensor Silhouette',
  'Tachyon Detection Field',               // 25th Century+
  'Variable Geometry Warp Field',
  'Versatile Tractor Beam',                // 25th Century+
  'Wormhole Relay System',                 // 2371+
];

// Export for use in Node.js / bundlers
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { shipClasses, talentList };
}
