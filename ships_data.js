const SHIP_CLASSES = [

  // ── ENTERPRISE ERA ──────────────────────────────────────────────────────────

  {
    name: 'Daedalus',
    era: 'Enterprise Era',
    scale: 3,
    comms: 7, computers: 7, engines: 7, sensors: 8, structure: 10, weapons: 10,
    command: 2, conn: 2, security: 1, engineering: 5, science: 4, medicine: 2,
    talent: '',
    trait: 'United Earth / Federation Starship; primary patrol, colony support, and exploration craft that served Starfleet before the NX class and continued in civilian roles into the late 24th century.'
  },
  {
    name: 'Intrepid (22nd Century)',
    era: 'Enterprise Era',
    scale: 3,
    comms: 6, computers: 5, engines: 7, sensors: 6, structure: 5, weapons: 5,
    command: 2, conn: 3, security: 3, engineering: 2, science: 3, medicine: 1,
    talent: '',
    trait: 'United Earth Starship; built on NX-class technology in a smaller, less resource-intensive spaceframe that proved indispensable during the Earth-Romulan War.'
  },
  {
    name: 'J-Class / Y-Class',
    era: 'Enterprise Era',
    scale: 2,
    comms: 5, computers: 5, engines: 6, sensors: 7, structure: 8, weapons: 4,
    command: 1, conn: 3, security: 1, engineering: 4, science: 1, medicine: 4,
    talent: '',
    trait: 'United Earth Starship, Civilian Starship; easy-to-build cargo haulers operated by multi-generational "boomer" families who lived and worked aboard them for months or years at a time.'
  },
  {
    name: 'NX',
    era: 'Enterprise Era',
    scale: 3,
    comms: 6, computers: 6, engines: 6, sensors: 6, structure: 6, weapons: 6,
    command: 3, conn: 2, security: 2, engineering: 3, science: 3, medicine: 2,
    talent: '',
    trait: 'United Earth / Federation Starship, State of the Art; served Earth\'s Starfleet during the Earth-Romulan War but was phased out after the war due to its complexity and high resource demands.'
  },
  {
    name: 'Warp Delta',
    era: 'Enterprise Era',
    scale: 3,
    comms: 6, computers: 5, engines: 6, sensors: 6, structure: 5, weapons: 7,
    command: 2, conn: 3, security: 4, engineering: 3, science: 1, medicine: 2,
    talent: '',
    trait: 'United Earth Starship; a heavily armed and nimble vessel that held off pirates and was relegated to Sol system patrols after the founding of the Federation before retiring from Starfleet in 2190.'
  },

  // ── ORIGINAL SERIES ERA ─────────────────────────────────────────────────────

  {
    name: 'Antares',
    era: 'Original Series',
    scale: 2,
    comms: 8, computers: 8, engines: 7, sensors: 8, structure: 7, weapons: 6,
    command: 1, conn: 3, security: 1, engineering: 4, science: 3, medicine: 3,
    talent: '',
    trait: 'Federation Starship; a small, easy-to-maintain vessel designed by Copernicus Shipyards that became a common sight on trade routes and continued to serve in the civilian sector long after its Starfleet service life ended.'
  },
  {
    name: 'Archer',
    era: 'Original Series',
    scale: 3,
    comms: 9, computers: 8, engines: 10, sensors: 9, structure: 6, weapons: 6,
    command: 2, conn: 4, security: 2, engineering: 2, science: 3, medicine: 1,
    talent: '',
    trait: 'Federation Starship; a next-generation pathfinder designed for long-range scouting with some of the most advanced impulse drives and RCS thruster suites yet installed on a Starfleet vessel.'
  },
  {
    name: 'Cardenas',
    era: 'Original Series',
    scale: 4,
    comms: 7, computers: 6, engines: 9, sensors: 8, structure: 6, weapons: 7,
    command: 2, conn: 3, security: 3, engineering: 2, science: 3, medicine: 1,
    talent: '',
    trait: 'Federation Starship; a prestigious early 23rd-century posting whose speed made it Starfleet\'s first choice for rapid intercepts along the Klingon and Romulan Neutral Zones and urgent first-contact missions.'
  },
  {
    name: 'Constitution',
    era: 'Original Series',
    scale: 4,
    comms: 8, computers: 8, engines: 8, sensors: 8, structure: 7, weapons: 7,
    command: 3, conn: 2, security: 3, engineering: 2, science: 3, medicine: 2,
    talent: '',
    trait: 'Federation Starship; the legendary class that defined Starfleet to many polities through its famous five-year missions, later serving as a testbed for new technologies developed from those missions.'
  },
  {
    name: 'Crossfield',
    era: 'Original Series',
    scale: 4,
    comms: 7, computers: 8, engines: 8, sensors: 8, structure: 8, weapons: 7,
    command: 1, conn: 2, security: 2, engineering: 4, science: 4, medicine: 2,
    talent: '',
    trait: 'Federation Starship, Experimental; produced in secret solely to test the theoretical displacement-activated spore hub drive developed by Doctors Paul Stamets and Justin Straal.'
  },
  {
    name: 'Engle',
    era: 'Original Series',
    scale: 3,
    comms: 8, computers: 8, engines: 10, sensors: 7, structure: 6, weapons: 6,
    command: 2, conn: 3, security: 2, engineering: 2, science: 2, medicine: 4,
    talent: '',
    trait: 'Federation Starship; a smaller, energy-efficient high-speed vessel well-regarded by its crews and remembered fondly by lives saved through its prominent role with Starfleet Medical.'
  },
  {
    name: 'Hiawatha',
    era: 'Original Series',
    scale: 3,
    comms: 8, computers: 8, engines: 6, sensors: 9, structure: 8, weapons: 5,
    command: 2, conn: 2, security: 2, engineering: 1, science: 3, medicine: 5,
    talent: '',
    trait: 'Federation Starship; an extraordinarily successful and highly modular design that proved integral to Starfleet\'s response to multiple crises and continued active service until new spaceframe production ceased in 2303.'
  },
  {
    name: 'Hoover',
    era: 'Original Series',
    scale: 4,
    comms: 6, computers: 8, engines: 8, sensors: 7, structure: 7, weapons: 8,
    command: 1, conn: 2, security: 3, engineering: 4, science: 3, medicine: 2,
    talent: '',
    trait: 'Federation Starship; a destroyer whose crews became experts in their systems through decades of serving as the Starship Design Bureau\'s premier testbed for new technologies and engineering techniques.'
  },
  {
    name: 'Magee',
    era: 'Original Series',
    scale: 3,
    comms: 7, computers: 9, engines: 7, sensors: 10, structure: 6, weapons: 5,
    command: 2, conn: 2, security: 1, engineering: 4, science: 5, medicine: 2,
    talent: '',
    trait: 'Federation Starship; an experimental design utilizing novel warp coil repeaters that ultimately revealed its limitations early, leading Starfleet to halt new construction by 2245 while the class found a longer life in civilian service.'
  },
  {
    name: 'Malachowski',
    era: 'Original Series',
    scale: 3,
    comms: 7, computers: 6, engines: 6, sensors: 8, structure: 8, weapons: 10,
    command: 2, conn: 2, security: 5, engineering: 3, science: 2, medicine: 1,
    talent: '',
    trait: 'Federation Starship; an escort class built at colony-world shipyards across the Federation and heavily deployed along the Klingon Neutral Zone and Tzenkethi Coalition border.'
  },
  {
    name: 'Miranda',
    era: 'Original Series',
    scale: 4,
    comms: 7, computers: 8, engines: 8, sensors: 9, structure: 8, weapons: 8,
    command: 3, conn: 3, security: 2, engineering: 2, science: 3, medicine: 2,
    talent: '',
    trait: 'Federation Starship; a dual-purpose patrol and combat vessel conceived to counter advanced Klingon D7s, radically redesigned using Constitution-refit philosophy to become a beloved multipurpose cruiser.'
  },
  {
    name: 'Nimitz',
    era: 'Original Series',
    scale: 4,
    comms: 10, computers: 7, engines: 7, sensors: 7, structure: 7, weapons: 7,
    command: 5, conn: 1, security: 3, engineering: 1, science: 3, medicine: 1,
    talent: '',
    trait: 'Federation Starship; a large single-hulled warship with heavy weapon emplacements, highly prized by commodores along the Klingon Neutral Zone who credited its size and firepower with keeping the peace.'
  },
  {
    name: 'Oberth',
    era: 'Original Series',
    scale: 3,
    comms: 8, computers: 9, engines: 8, sensors: 9, structure: 7, weapons: 6,
    command: 1, conn: 3, security: 2, engineering: 3, science: 4, medicine: 2,
    talent: '',
    trait: 'Federation Starship; a short-lived but successful science vessel that rapidly became difficult to refit as technology advanced, transitioning to civilian and Advanced Starship Design Bureau use.'
  },
  {
    name: 'Scout type',
    era: 'Original Series',
    scale: 4,
    comms: 7, computers: 9, engines: 9, sensors: 10, structure: 8, weapons: 6,
    command: 2, conn: 4, security: 1, engineering: 3, science: 4, medicine: 2,
    talent: '',
    trait: 'Federation Starship; designed in conjunction with the Constitution class, featuring a saucer primary hull and neck connecting to a single large warp nacelle, optimized for short mission duration operations.'
  },
  {
    name: 'Shepard',
    era: 'Original Series',
    scale: 3,
    comms: 6, computers: 7, engines: 9, sensors: 8, structure: 8, weapons: 7,
    command: 2, conn: 2, security: 3, engineering: 3, science: 3, medicine: 2,
    talent: '',
    trait: 'Federation Starship; a compact, lower-mass companion to the Walker class developed under Operation Next Step, able to slip out of existing drydocks easily despite being longer than its sister ship.'
  },
  {
    name: 'Soyuz',
    era: 'Original Series',
    scale: 4,
    comms: 8, computers: 10, engines: 9, sensors: 10, structure: 10, weapons: 10,
    command: 2, conn: 2, security: 4, engineering: 2, science: 3, medicine: 2,
    talent: '',
    trait: 'Federation Starship; an impressive ship of war also capable of exploration, typically assigned to border starbases for security or kept in active reserve near the Klingon and Romulan Empires.'
  },
  {
    name: 'Sydney',
    era: 'Original Series',
    scale: 4,
    comms: 9, computers: 7, engines: 9, sensors: 9, structure: 10, weapons: 7,
    command: 2, conn: 4, security: 2, engineering: 2, science: 2, medicine: 3,
    talent: '',
    trait: 'Federation Starship; a boxy, angular but highly effective transport designed to move large groups of colonists with their equipment and supplies, serving Starfleet and civilian agencies in multiple configurations into the late 24th century.'
  },
  {
    name: 'Walker',
    era: 'Original Series',
    scale: 3,
    comms: 7, computers: 8, engines: 7, sensors: 10, structure: 7, weapons: 6,
    command: 2, conn: 2, security: 2, engineering: 3, science: 3, medicine: 3,
    talent: '',
    trait: 'Federation Starship; one of the first spaceframes from Operation Next Step, tasked as a multirole explorer performing the same duties later made famous by Constitution- and Galaxy-class vessels, helping the Federation grow from barely twenty to over seventy allied species.'
  },

  // ── NEXT GENERATION ERA ─────────────────────────────────────────────────────

  {
    name: 'Akira',
    era: 'Next Generation',
    scale: 5,
    comms: 9, computers: 9, engines: 10, sensors: 10, structure: 10, weapons: 11,
    command: 3, conn: 1, security: 4, engineering: 2, science: 2, medicine: 3,
    talent: '',
    trait: 'Federation Starship; a heavily armed, combat-capable starship capable of patrol assignments and direct combat action while still contributing to exploration, ordered into wide production after its immediate success.'
  },
  {
    name: 'Ambassador',
    era: 'Next Generation',
    scale: 5,
    comms: 9, computers: 10, engines: 9, sensors: 11, structure: 10, weapons: 9,
    command: 3, conn: 3, security: 2, engineering: 2, science: 3, medicine: 2,
    talent: '',
    trait: 'Federation Starship; launched in 2335 as an indispensable exploration vessel whose engineering techniques and technologies became the foundational basis for the Galaxy class.'
  },
  {
    name: 'Challenger',
    era: 'Next Generation',
    scale: 4,
    comms: 8, computers: 10, engines: 12, sensors: 11, structure: 9, weapons: 8,
    command: 1, conn: 3, security: 2, engineering: 4, science: 3, medicine: 2,
    talent: '',
    trait: 'Federation Starship; one of the first designs to use advanced warp field repeaters, demonstrating a lack of subspace damage at high velocities and pioneering procedures that influenced later subspace-friendly starship designs.'
  },
  {
    name: 'Cheyenne',
    era: 'Next Generation',
    scale: 4,
    comms: 10, computers: 10, engines: 10, sensors: 9, structure: 9, weapons: 9,
    command: 1, conn: 4, security: 2, engineering: 4, science: 2, medicine: 2,
    talent: '',
    trait: 'Federation Starship; initially a proof-of-concept to modernize the Constellation class, it proved so surprisingly versatile that Starfleet ordered it into production as a high-speed courier serving Human colonies in the Federation core.'
  },
  {
    name: 'Constellation',
    era: 'Next Generation',
    scale: 4,
    comms: 10, computers: 9, engines: 11, sensors: 11, structure: 9, weapons: 8,
    command: 2, conn: 4, security: 3, engineering: 2, science: 2, medicine: 1,
    talent: '',
    trait: 'Federation Starship; developed in the mid-2280s to intercept Klingon incursions at high warp and survive until reinforcements arrived, later widely used by Starfleet for speed-priority assignments.'
  },
  {
    name: 'Defiant',
    era: 'Next Generation',
    scale: 3,
    comms: 9, computers: 9, engines: 8, sensors: 9, structure: 8, weapons: 13,
    command: 2, conn: 3, security: 5, engineering: 2, science: 1, medicine: 2,
    talent: '',
    trait: 'Federation Starship; the first Starfleet warship designed from the ground up, originally conceived to fight the Borg and completed after massive redesigns in 2371, an extremely powerful vessel for its small scale.'
  },
  {
    name: 'Excelsior',
    era: 'Next Generation',
    scale: 5,
    comms: 8, computers: 8, engines: 10, sensors: 10, structure: 9, weapons: 8,
    command: 4, conn: 1, security: 2, engineering: 4, science: 2, medicine: 2,
    talent: '',
    trait: 'Federation Starship, The Great Experiment; the failed transwarp propulsion was replaced with highly modular standard warp systems, making future improvements a simple task at even the newest Federation member worlds.'
  },
  {
    name: 'Freedom',
    era: 'Next Generation',
    scale: 4,
    comms: 10, computers: 9, engines: 11, sensors: 11, structure: 8, weapons: 10,
    command: 3, conn: 2, security: 3, engineering: 2, science: 3, medicine: 1,
    talent: '',
    trait: 'Federation Starship; saw extensive use during the Dominion War and later inside the remnants of the Romulan Star Empire, with the majority serving in the Andorian and Tellar Prime Fleets and expected to remain active until at least 2450.'
  },
  {
    name: 'Galaxy',
    era: 'Next Generation',
    scale: 6,
    comms: 9, computers: 11, engines: 10, sensors: 10, structure: 10, weapons: 10,
    command: 3, conn: 2, security: 2, engineering: 2, science: 3, medicine: 3,
    talent: '',
    trait: 'Federation Starship; designed to surpass every previous exploration vessel using the most advanced 2350s technologies, and the first class to routinely house civilian dependents and volunteers aboard for long-duration deep space assignments.'
  },
  {
    name: 'Intrepid',
    era: 'Next Generation',
    scale: 4,
    comms: 9, computers: 11, engines: 11, sensors: 10, structure: 8, weapons: 8,
    command: 2, conn: 4, security: 2, engineering: 2, science: 4, medicine: 1,
    talent: '',
    trait: 'Federation Starship, Top of the Line (2370s); a symbol of Starfleet\'s return to exploration and science goals, renewed in passion after the return of U.S.S. Voyager to Federation space in 2378.'
  },
  {
    name: 'Nebula',
    era: 'Next Generation',
    scale: 5,
    comms: 11, computers: 11, engines: 10, sensors: 8, structure: 9, weapons: 9,
    command: 4, conn: 1, security: 2, engineering: 4, science: 2, medicine: 2,
    talent: '',
    trait: 'Federation Starship; produced by Yoyodyne Propulsion Systems to preserve the best elements of the Miranda class, it proved even more adaptable than the aging Miranda though full replacement was halted by the Dominion War.'
  },
  {
    name: 'New Orleans',
    era: 'Next Generation',
    scale: 4,
    comms: 10, computers: 10, engines: 10, sensors: 10, structure: 8, weapons: 9,
    command: 2, conn: 3, security: 1, engineering: 4, science: 4, medicine: 2,
    talent: '',
    trait: 'Federation Starship; a considerably compact, non-modular design that was far quicker to build than comparable vessels, taking nearly a quarter the construction time of a Nebula class.'
  },
  {
    name: 'Niagara',
    era: 'Next Generation',
    scale: 5,
    comms: 9, computers: 9, engines: 11, sensors: 10, structure: 9, weapons: 9,
    command: 2, conn: 3, security: 2, engineering: 2, science: 4, medicine: 1,
    talent: '',
    trait: 'Federation Starship, Cutting Edge (2358-2360); produced by Yoyodyne Propulsion Systems of Proxima in limited numbers, used by Starfleet in the same high-speed priority assignments as the older Constellation class.'
  },
  {
    name: 'Norway',
    era: 'Next Generation',
    scale: 4,
    comms: 9, computers: 9, engines: 10, sensors: 11, structure: 10, weapons: 9,
    command: 2, conn: 2, security: 2, engineering: 3, science: 2, medicine: 4,
    talent: '',
    trait: 'Federation Starship; designed to fill the lack of rapid medical and emergency responders with a compact wedge-shaped hull, approved for production at all Federation shipyards as a capable general-purpose cruiser as well.'
  },
  {
    name: 'Nova',
    era: 'Next Generation',
    scale: 3,
    comms: 10, computers: 10, engines: 10, sensors: 10, structure: 8, weapons: 8,
    command: 2, conn: 2, security: 2, engineering: 2, science: 4, medicine: 3,
    talent: '',
    trait: 'Federation Starship; a small, easy-to-maintain science and exploration vessel fitted with the best sensor and scientific equipment possible in a compact spaceframe, serving as the direct inspiration for the Intrepid class.'
  },
  {
    name: 'Olympic',
    era: 'Next Generation',
    scale: 4,
    comms: 10, computers: 11, engines: 10, sensors: 11, structure: 9, weapons: 7,
    command: 2, conn: 2, security: 2, engineering: 1, science: 3, medicine: 5,
    talent: '',
    trait: 'Federation Starship, Non-Combatant; a dedicated medical vessel that began limited production in 2368 across the Federation, immediately impacting fleet operations during the Dominion War and the disasters of the following decades.'
  },
  {
    name: 'Raven type',
    era: 'Next Generation',
    scale: 2,
    comms: 11, computers: 11, engines: 8, sensors: 11, structure: 7, weapons: 5,
    command: 2, conn: 2, security: 1, engineering: 3, science: 5, medicine: 3,
    talent: '',
    trait: 'Federation Starship; designed by the Federation Science Council to house civilian scientists, students, and dependents on deep space missions, ensuring that non-Starfleet researchers had a unique perspective on cutting-edge exploratory science.'
  },
  {
    name: 'Saber',
    era: 'Next Generation',
    scale: 3,
    comms: 10, computers: 9, engines: 11, sensors: 10, structure: 9, weapons: 9,
    command: 2, conn: 4, security: 4, engineering: 2, science: 1, medicine: 2,
    talent: '',
    trait: 'Federation Starship; a hybrid patrol and survey vessel designed to maintain a persistent presence on the edges of Federation space to respond to raiders and piracy.'
  },
  {
    name: 'Springfield',
    era: 'Next Generation',
    scale: 4,
    comms: 10, computers: 10, engines: 10, sensors: 12, structure: 8, weapons: 8,
    command: 2, conn: 2, security: 3, engineering: 3, science: 3, medicine: 2,
    talent: '',
    trait: 'Federation Starship; a popular vessel for new member worlds to produce in the 2350s, often crewed entirely by members of their own species in a tradition similar to the Constitution class of the 23rd century.'
  },
  {
    name: 'Steamrunner',
    era: 'Next Generation',
    scale: 4,
    comms: 9, computers: 9, engines: 11, sensors: 10, structure: 9, weapons: 9,
    command: 1, conn: 3, security: 3, engineering: 3, science: 3, medicine: 2,
    talent: '',
    trait: 'Federation Starship; a low-mass, fast design filling multiple roles including light escort, interceptor, electronic warfare, and surveillance, with an angular saucer primary hull and a detached secondary hull suspended between two warp nacelles.'
  },

  // ── DS9 / VOYAGER ERA (treated as part of Next Generation era entry above where applicable)
  // Note: Defiant, Intrepid, Sovereign, Prometheus appear in this timeframe
  // They are listed under their canonical era per the PDF

  // ── PICARD ERA ──────────────────────────────────────────────────────────────

  {
    name: 'Gagarin',
    era: 'Picard Era',
    scale: 5,
    comms: 9, computers: 9, engines: 12, sensors: 10, structure: 9, weapons: 12,
    command: 2, conn: 3, security: 4, engineering: 3, science: 1, medicine: 2,
    talent: '',
    trait: 'Federation Starship; one of several battlecruiser designs ordered by a Starfleet shedding its isolationism and preparing to face a new century of uncertainty.'
  },
  {
    name: 'Inquiry',
    era: 'Picard Era',
    scale: 5,
    comms: 10, computers: 10, engines: 10, sensors: 11, structure: 10, weapons: 9,
    command: 4, conn: 2, security: 2, engineering: 2, science: 3, medicine: 2,
    talent: '',
    trait: 'Federation Starship; an automated and adaptive exploration cruiser built on Vesta-class success, optimizing for improved sustained cruising velocity rather than quantum slipstream, and rapidly replacing the aging Miranda class.'
  },
  {
    name: 'Luna',
    era: 'Picard Era',
    scale: 5,
    comms: 10, computers: 10, engines: 10, sensors: 12, structure: 8, weapons: 8,
    command: 2, conn: 2, security: 2, engineering: 3, science: 4, medicine: 2,
    talent: '',
    trait: 'Federation Starship; a heavy explorer developed in parallel with the Intrepid class, offering larger research facilities, greater computer processing power, and longer mission duration capability.'
  },
  {
    name: 'Odyssey',
    era: 'Picard Era',
    scale: 7,
    comms: 11, computers: 11, engines: 10, sensors: 10, structure: 11, weapons: 10,
    command: 3, conn: 2, security: 4, engineering: 3, science: 2, medicine: 2,
    talent: '',
    trait: 'Federation Starship; an ambitious and massive design program response to Borg, Dominion, and Reman warships that were outclassing the Federation\'s heavy cruisers on both defensive and offensive capability.'
  },
  {
    name: 'Pathfinder',
    era: 'Picard Era',
    scale: 4,
    comms: 9, computers: 11, engines: 11, sensors: 11, structure: 9, weapons: 9,
    command: 2, conn: 4, security: 2, engineering: 2, science: 4, medicine: 1,
    talent: '',
    trait: 'Federation Starship; the Admiralty\'s answer to building a versatile starship useful both as a defense platform and excelling at research and exploration, produced as new construction shifted from pure research ships to cruisers and escorts.'
  },
  {
    name: 'Prometheus',
    era: 'Picard Era',
    scale: 4,
    comms: 9, computers: 9, engines: 10, sensors: 9, structure: 10, weapons: 12,
    command: 3, conn: 1, security: 4, engineering: 3, science: 2, medicine: 2,
    talent: '',
    trait: 'Federation Starship, Top of the Line (2375-2380); a drastic step away from conventional late-24th-century Starfleet designs, a tactical combat vessel capable of independent deep space operations with multi-vector assault capability.'
  },
  {
    name: 'Reliant',
    era: 'Picard Era',
    scale: 4,
    comms: 10, computers: 10, engines: 10, sensors: 10, structure: 10, weapons: 10,
    command: 2, conn: 3, security: 2, engineering: 2, science: 2, medicine: 4,
    talent: '',
    trait: 'Federation Starship; designed from inception as a support ship to serve as the backbone of Starfleet\'s logistical and operational support corps, unlike the Miranda which transitioned to support duties after being outclassed in combat.'
  },
  {
    name: 'Ross',
    era: 'Picard Era',
    scale: 6,
    comms: 10, computers: 10, engines: 11, sensors: 10, structure: 10, weapons: 9,
    command: 2, conn: 2, security: 2, engineering: 3, science: 3, medicine: 3,
    talent: '',
    trait: 'Federation Starship; an evolution of the large, long-range Galaxy-class explorer, incorporating important advancements in Starfleet\'s tactical and computational systems developed in the 2370s.'
  },
  {
    name: 'Sovereign',
    era: 'Picard Era',
    scale: 6,
    comms: 10, computers: 9, engines: 10, sensors: 10, structure: 9, weapons: 10,
    command: 4, conn: 1, security: 3, engineering: 2, science: 3, medicine: 2,
    talent: '',
    trait: 'Federation Starship; developed from 2368 to better equip deep-space vessels against hostile and technologically advanced powers like the Borg, with its development further accelerated by rising tensions with the Dominion and Klingon Empire.'
  },
  {
    name: 'Sutherland',
    era: 'Picard Era',
    scale: 5,
    comms: 11, computers: 11, engines: 10, sensors: 14, structure: 10, weapons: 10,
    command: 2, conn: 2, security: 2, engineering: 4, science: 3, medicine: 2,
    talent: '',
    trait: 'Federation Starship; a long-range medium exploration and survey cruiser in the tradition of the Miranda, Constellation, and Nebula classes, representing a generational evolution from the Nebula class with turn-of-the-century technologies.'
  },
  {
    name: 'Vesta',
    era: 'Picard Era',
    scale: 6,
    comms: 10, computers: 12, engines: 12, sensors: 10, structure: 9, weapons: 9,
    command: 2, conn: 3, security: 2, engineering: 3, science: 3, medicine: 2,
    talent: '',
    trait: 'Federation Starship, State of the Art (2380s); equipped with quantum slipstream drives that allow it to explore outward from the Federation borders in all cardinal directions, with production continuing at non-Utopia Planitia shipyards after the Mars disaster of 2385.'
  },

  // ── 32nd CENTURY (DISCOVERY ERA) ────────────────────────────────────────────

  {
    name: 'Angelou',
    era: '32nd Century',
    scale: 5,
    comms: 7, computers: 6, engines: 6, sensors: 7, structure: 8, weapons: 6,
    command: 2, conn: 2, security: 2, engineering: 3, science: 3, medicine: 3,
    talent: '',
    trait: 'Federation Starship, IMT-C; originally designed as deep space colonization ships, built around a large enclosed biosphere capable of reproducing any number of planetary conditions found on Federation worlds.'
  },
  {
    name: 'Eisenberg',
    era: '32nd Century',
    scale: 4,
    comms: 7, computers: 7, engines: 7, sensors: 6, structure: 6, weapons: 6,
    command: 4, conn: 2, security: 2, engineering: 3, science: 2, medicine: 2,
    talent: '',
    trait: 'Federation Starship, IMT-C; a vessel designed to improve the Federation\'s ability to project both diplomatic power and its martial strength when needed.'
  },
  {
    name: 'Friendship',
    era: '32nd Century',
    scale: 4,
    comms: 6, computers: 6, engines: 7, sensors: 7, structure: 6, weapons: 6,
    command: 2, conn: 3, security: 2, engineering: 3, science: 3, medicine: 2,
    talent: '',
    trait: 'Federation Starship, IMT-C; Starfleet\'s multirole explorer and cruiser intended to maintain trade routes and keep communications open during the difficult time of the Burn.'
  },
  {
    name: 'Janeway',
    era: '32nd Century',
    scale: 4,
    comms: 7, computers: 6, engines: 7, sensors: 8, structure: 6, weapons: 5,
    command: 2, conn: 2, security: 2, engineering: 3, science: 4, medicine: 2,
    talent: '',
    trait: 'Federation Starship, IMT-C; a state-of-the-art deep space explorer utilizing advanced multi-vector slipstream propulsion, designed to be the first vessel to leave the Galaxy and re-contact Federation exploration vessels dispatched to the Magellanic Clouds.'
  },
  {
    name: 'Kirk',
    era: '32nd Century',
    scale: 4,
    comms: 6, computers: 6, engines: 7, sensors: 6, structure: 6, weapons: 8,
    command: 3, conn: 2, security: 3, engineering: 3, science: 2, medicine: 2,
    talent: '',
    trait: 'Federation Starship, IMT-C; intended as the core of Starfleet battle squadrons, integrating lessons from the martial traditions of multiple polities that joined the 32nd-century Federation.'
  },

  // ── LOWER DECKS ERA (DS9 / Voyager era per timeline, supplemental PDF) ──────

  {
    name: 'California',
    era: 'DS9 / Voyager',
    scale: 4,
    comms: 10, computers: 10, engines: 8, sensors: 9, structure: 10, weapons: 8,
    command: 2, conn: 2, security: 2, engineering: 3, science: 3, medicine: 3,
    talent: '',
    trait: 'Federation Starship, Dependable; a dependable workhorse used in front-line roles until the mid-25th century, notable for a dedicated cetacean officer section and multiple shuttlebays accommodating both cetacean and humanoid crew.'
  },
  {
    name: 'Ganashia',
    era: 'DS9 / Voyager',
    scale: 5,
    comms: 9, computers: 9, engines: 10, sensors: 11, structure: 10, weapons: 9,
    command: 3, conn: 4, security: 2, engineering: 3, science: 2, medicine: 1,
    talent: '',
    trait: 'Federation Starship, Andorian Starship, Tellarite Starship; a joint Andorian-Tellarite redesign of an Earth-Romulan War-era spaceframe, named with a combined word from both languages meaning "service," designed to be adaptable to both species\' crews.'
  },
  {
    name: 'Obena',
    era: 'DS9 / Voyager',
    scale: 5,
    comms: 9, computers: 9, engines: 12, sensors: 10, structure: 10, weapons: 9,
    command: 2, conn: 3, security: 2, engineering: 3, science: 3, medicine: 2,
    talent: '',
    trait: 'Federation Starship, State-of-the-art (2381); the spiritual successor to the Excelsior\'s Great Experiment, equipped with both a standard warp drive capable of warp 9.988 and a quantum slipstream generator achieving over 318 light-years per hour.'
  },
  {
    name: 'Osler',
    era: 'DS9 / Voyager',
    scale: 3,
    comms: 9, computers: 9, engines: 11, sensors: 9, structure: 8, weapons: 10,
    command: 2, conn: 3, security: 4, engineering: 2, science: 3, medicine: 1,
    talent: '',
    trait: 'Federation Starship, Andorian Starship; a covert operations vessel produced for the Andorian Imperial Guard from 2377, named after the Andorian word for spy and capable of minimal-crew deniable operations.'
  },
  {
    name: 'Parliament',
    era: 'DS9 / Voyager',
    scale: 5,
    comms: 9, computers: 9, engines: 11, sensors: 10, structure: 11, weapons: 9,
    command: 3, conn: 2, security: 2, engineering: 4, science: 2, medicine: 2,
    talent: '',
    trait: 'Federation Starship; a multi-profile cruiser with a large saucer primary hull deployed across the Federation, notable for reinforced structural framing, SIF generators 40% stronger than comparable vessels, and an off-axis quantum torpedo launch system capable of firing in any direction.'
  },
  {
    name: 'T\'Kalat',
    era: 'DS9 / Voyager',
    scale: 6,
    comms: 9, computers: 10, engines: 10, sensors: 12, structure: 9, weapons: 9,
    command: 2, conn: 2, security: 2, engineering: 3, science: 4, medicine: 2,
    talent: '',
    trait: 'Federation Starship, Vulcan Starship; a cutting-edge heavy explorer launched from the Vulcan home system in 2375 under Vulcan Confederacy control, designed to remedy Starfleet\'s reassignment of science and exploration vessels during rising tensions with the Cardassians and Dominion.'
  },

];
