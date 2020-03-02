class MothershipCharGenerator {
    constructor() {
        this.classes = {
            none: {
                name: "Not Set",
            },
            teamster: {
                name: "teamster",
                special: [
                    "+5 to strength and speed.",
                    "Once per session, you may reroll a roll on the panic table.",
                    "Gain 1XP whenever you first set foot on an undiscovered planet."],
                saves: {
                    sanity: 30,
                    fear: 35,
                    body: 30,
                    armor: 35,
                },
            },
            scientist: {
                name: "scientist",
                special: [
                    "+10 to intellect",
                    "Whenever you fail a Sanity Save, every friendly player gains 1 Stress",
                    "Gain 1XP whenever you bring a piece of alien technology, or living organism, aboard the ship for study."],
                saves: {
                    sanity: 40,
                    fear: 25,
                    body: 25,
                    armor: 30,
                },
            },
            android: {
                name: "android",
                special: [
                    "+5 to speed and intellect",
                    "Fear saves made in your presence have disadvantage.",
                    "Gain 1XP whenever you interface with a piece of alien technology or with a higher intelligence."],

                saves: {
                    sanity: 20,
                    fear: 85,
                    body: 40,
                    armor: 25,
                },
            },
            marine: {
                name: "marine",
                special: [
                    "+5 to combat",
                    "+5 to combat when a friendly marine is nearby",
                    "Whenever you panic, every nearby friendly player must make a fear save.",
                    "Gain 1XP for killing an enemy."],
                saves: {
                    sanity: 25,
                    fear: 30,
                    body: 35,
                    armor: 40,
                },
            },
        };
        this.nightmares = [
            `Your migraine is splitting your skull. A dog rushes towards you, its eyes full of loving devotion. The dog's head explodes into a crimson mist, coating your hands like an accusation.`,
            `Your jaw unhinges as you vomit a torrent of earwigs.`,
            `You are having sex with someone with the face of an ant; they regard you coldly and whisper something you can't quite hear.`,
            `You draw a straight razor across your mother's eye. This is the right thing to do. She does not resist.`,
            `There is a steady tick-tock of an egg-timer in your chest. You know something terrible will happen when it rings. There is no clear way to stop it.`,
            `An amber scorpion crawls on your face. Your limbs are leaden anchors a million miles away.`,
            `You swim frantically, uncertain of what direction you are swimming in. The water is like ink, your lungs are bursting.`,
            `You look at your hands. They fall apart like puzzle pieces. You cannot stop thinking about your 7th birthday.`,
            `A crowd of beautiful, slim, fashionable, and elegant people stare at you derisively. You drop your drink. They laugh with cruel sensual smiles.`,
            `Your ribs swell to make space for the blind orgy of wasp larva. You think about motherhood as your flesh stretches to its breaking point. The larva burrow out and unfold their iridescent wings.`,
            `You are in a pale room. You hear children's laughter. You cannot pinpoint the source.`,
            `You feel the trapdoor spider making its home in your throat; you know what you have to do. Jamming the blade in is as simple as carving butter. You wiggle it around with satisfaction. You missed.`,
            `A weathered hag sits on your chest, her mouth a hideous O of accusations. It won't stop dripping pale fluids on your face.`,
            `You hear panicked screams in the darkness: they're growing fainter, you are running away.`,
            `Pale hands press against darkened glass. You are surrounded. Alone.`,
            `No matter how much you struggle or bat them away, the crows are relentlessly consuming your face.`,
            `You smell moss and dirt. Inane stammering and chanting fills your ears. They are coming for you.`,
            `Figures flit about in the hanging fabric. You can't quite make them out, they seem familiar. You aren't certain if you are the hunter or the quarry.`,
            `Your fingernails tear from their moorings as you futilely scrabble against the rough wall. The hole atop the shaft, your only escape, is as distant as the sky.`,
            `Your eyes melt, crawling down your face like limpid tears. Your skin starts sloughing off. Your muscles fall off with a meaty slap. Maybe this face is not yours.`,
            `You feel the slender fingers encircle your throat; there are too many of them, they are far too long and thin. Everything smells like camphor.`,
            `A carousel spins madly - the music hellish, discordant. The horses' eyes are meeting yours.`,
            `You can smell the rot in your bones. You struggle to dig them out.`,
            `Your face warps and shifts - stretching and pulling against its own definition. It becomes bovine. Your friends are leading to a grey, cement building. Everything smells like copper.`,
            `Your fingers unwind like meaty corkscrews; they start anchoring you in place. The wind is cold.`,
            `Your teeth blacken and rot. They crowd laughs uproariously. Nails drive through your putrid gums in a birth of pus and blood. You bite their faces away. They taste like cinnamon.`,
            `A bulbous, fleshy eyeless face hunts you in the dark. Its steps are deliberate. It has already found you.`,
            `A puppet gazes up at you. A mockery of human features - exaggerated, stretched. Its hands spring into action, manipulating your strings. You dance a macabre waltz.`,
            `A red sun slowly rises. The light carbonizes your toes, feet, legs. You watch. The smell of cooking meat overwhelms you.`,
            `You fight a current of blind, swollen, pale fish to reach the masticating maw. There is a smell of jasmine.`,
            `Your wrist bends back. It keeps bending. Your hand is in your arm.`,
            `The shambling figure is dark, save a chipped porcelain mask. The air is haze with the smell of candy and rot.`,
            `Every door is labeled exit despite taking you back to the start of the corridor. You have been here before.`,
            `You pin the fish down. You bash its gasping face with a hammer. You can't stop. You won't stop.`,
            `The music is pleasantly generic; the waiting room sterile. How long have you been here? How long will you remain?`,
            `The skeletal cats need to be fed. They yowl, they fornicate, they piss. The air is thick with ammonia, wet with humidity. You lose count.`,
            `You sip wine as she nails your fingers to the table. You have long, elegant hands.`,
            `You stab the featureless body with a baby doll head, over and over. A torrent of red ants crawls from the womb.`,
            `Your fingers are jagged snarls of glass. You caress yourself. You can't feel how sticky your fingers are.`,
            `The dinner party is lovely. Then you notice the centipedes crawling from your collar; hear the snide comments.`,
            `The children dash ahead of you. Their rabbit masks are askew. You need to bring them home. You stumble.`,
            `You feel them growing behind your eyes. Your vision dims. You are the host and they are nothing like you.`,
            `The pliers are getting red hot. The air is damp and unctuous. You don't really need all those fingernails, not when you have so many toes.`,
            `The ground is dry and desolate. Your drool pools by your face. You sink into the lukewarm puddle.`,
            `It is cold. Your fingers blacken. You could snap them off if your hand could move. The cold scours everything away.`,
            `You float in a void of deep space. A planet-sized foetus regards you with lugubrious, watery eyes.`,
            `Poison gas fills the warrens. Blood seeps from their eyes as their despondent screams echo in your ears. Mocking laughter shakes your ribs like a bass note.`,
            `He splatters his cravat with viscera when he cuts your hand off. You roll on the floor. You cauterize the stump with a hot plate. You line up your shot at the retreating figure. He spins around and shoots first.`,
            `Your incisors won't stop growing. They pry your jaw apart, your mouth wider and wider, lips bleeding from the strain, teeth grinding into gums. The snap will be a relief.`,
            `You feel it churning inside you. Wrapping itself in your entrails. Kicking against the stomach wall. Waiting to break free, you can feel the grin fill the hollow of your belly.`,
            `Filthy, louse-ridden children pelt you with stones. They know what you did.`,
            `You bash the figure across the face with a rock. Your hands seek purchase on their face and you confidently press your thumbs into the eye sockets. Your own tortured face grins back.`,
            `The sinuous reptiles circle you warily, languid motions at incredible speed. Their tongues taste the air, taste your body, your sweat tying them to you. Any second they will close in, their snapping jaws slathered with miasma.`,
            `You crush the nimbus-blue egg in your hand. Amidst the splintered shell fragments is the partially formed baby bird. It stares back at you with eyes like black marbles. Then you notice the teeth.`,
            `Children with sunken eyes and rotted teeth chant, "SACRIFICE, SACRIFICE". They push you, you fall. Their faces fade in the distance. You keep falling.`,
            `You trudge through a landscape blanketed in bones. They snap and crunch underfoot. Drifts of them knee deep and pulling you gradually under. They rattle as you descend.`,
            `You walk yowards the horizon. You pass a burning car and the air is thick with malodorous smog. Your skeleton stops walking and is left behind. Your shadow tells you your real bones have been replaced.`,
            `You are in a pool. The water is warm. Tropical fish peck away at you. Each bite is a papercut. You feel your legs gradually vanishing one small bite at a time. You can't see an exit.`,
            `You are lying on the beach tangled in nets. The tide keeps rising up towards your face, gradually but inexorably. Gulls squabble and circle in the baking sun.`,
            `Your face is smothered in kisses, teeth scraping your brow. A sudden rough bite and pull on the cheek until it tears, leaving a hole. A tongue presses the fringes of the new oriface.`,
            `You walk on broken glass, barefoot. The wet cracking of the shards is your only companion save a floating red lantern illuminating the seemingly endless expanse of glass.`,
            `The person talking to you is so unpleasant the world seems to curdle from the rancidness of their presence. Their hand is on your knee.`,
            `A robot regards you. It mirrors your motions. It mimics your emotions. It takes your name.`,
            `You feel sick, feverish, desperate. The bullet lodged in your gut is necrotizing too fast, spiderwebs of dying, blackened, leaking flesh.`,
            `You are digging up a skeleton, the bones are impossibly fine, elegant even. The face long and gaunt, mournful. The wings so wide they consume the sky.`,
            `The hammer feels momentous, pitted surface spattered with rust. You see the children with lamb's faces. You silence their frenzied bleating.`,
            `You bleed the pigs. All of them. In their fine jewelry and spotless dinner jackets.`,
            `The bolt cutters pass through your joints roughly. The end announced by a smooth click. Your finger is discarded into the bucket. The bucket chews noisily.`,
            `You claw at the glass, your husk withering. They dispassionately take notes on clipboards. You desiccate and blow away in a fine spray of dust. They nod, approving.`,
            `The Leviathan blots out the sun. The air ruptures as it breathes in. Its multifaceted eyes gaze upon you uncomprehendingly.`,
            `Unnaturally white teeth grin at you, gleaming. The smile is forced. The laughter is a blade dragged against glass.`,
            `The sky is an ink black horizon of tentacles and blazing vermilion eyes. It falls upon you like an avalanche. Tentacles force their way into your eyes, your mouth, down your throat. Your need is not slaked.`,
            `Your hands are bound behind your back. The burlap over your head is tight, sucking in with your breath - the smell of kerosene overpowering. You feel wet, tired. You hear the scratch of a match being struck.`,
            `You clip your nails. You keep clipping them. It won't stop. You see bone.`,
            `You're at the end of the dock. Everything stinks of salt and rotting fish. Your feet squelch pointlessly in the concrete. They smoke cigarettes and leer at you. They're coming over to push you.`,
            `You follow the woman in the red damask dress through the hedge maze. She's just out of reach. Her scent, peach blossoms, wafts behind her. You corner her. She turns around. There is no face, just a sunken pit with fleshy teeth.`,
            `Scabrous rats - wounds dripping with pus - crawl all over you. They smother you with their wet, stinking bodies, force your way into your mouth and explore you. Where are your arms?`,
            `You drive the nails into your leg. 1-2-3-4...99-100. Aghast, you realize your pattern isn't symmetrical. You pry them out and start again - perfect this time.`,
            `You see sharks circling in the wine dark sea. You are bleeding. It won't stop.`,
            `The ship controls won't respond, all the systems are down. You are slowly drifting towards a sun. You perspire, your hands slipping as you struggle to stop the ponderous drift.`,
            `You are beneath an immense pendulum. With each swing, you feel years drain away. Your teeth disintegrate, your nails grow and twist, your vision dims, your hair becomes dust.`,
            `Your arms are dragged in opposite directions as they are fed into gears. You feel the crushing weight and the tears forming in your muscles. Everything reeks of grease and rust.`,
            `The airlock is slowly opening. Behind the glass they point and laugh. Your face is wet with tears. They enjoy slices of cake.`,
            `You are engulfed in flame. No one seems to notice. Even when you touch them, spreading the flame. Vacant eyes.`,
            `You're bleeding from the mouth. Ropes of it suspended from your lips. The viscera moving of its own accord.`,
            `You are crouched behind a crate. Pinned down by automatic arms fire. You can't clear the jam.`,
            `There's a pulse grenade in your hands. You can't remember how to throw, your fingers are useless. Everyone is disappointed.`,
            `The mouth in your torso is hungry. It wants your friends. There are rewards for compliance.`,
            `The conversation is charming, civil, courteous. The problem is they're holding your hand in acid.`,
            `A drill descends towards your eye. The whirr fills the air, gives it texture. They ask how you are feeling.`,
            `No matter how many volts you deliver to the subject, he won't divulge the information. He can't last much longer, you hope. They are getting impatient.`,
            `Your lips are being sewed shut. The needle dances in and out. There is something in your throat: you deserve this.`,
            `You tear wrapping paper desperately from the gifts, shredded colorful paper piles up to your knees. The antidote is in one of these. It has to be.`,
            `They deliver shocks to you. They ask you to prove you aren't a machine. They don't believe you.`,
            `The snake is swallowing you. Everything smells of offal and carrion. It moves up your legs, relentless, devouring.`,
            `Your fingers split and mutate into baby hands. The new hands repeat the process. They hands are getting heavy.`,
            `Your arms become snakes. The snakes start biting you. You reach out towards your friends, to share.`,
            `The walls are closing in. Only when you close your eyes. Remain vigilant.`,
            `You keep trying to scoop your guts back in; glistening ropes of your intestines wriggling and slipping in your hands. You've shoveled so much in. There should be an end to this.`,
            `It is hot. It is dark. It is cramped. It is dusty. You are trapped.`,
        ];
        this.trinkets = [
            `Preserved Insectile Aberration`,
            `Faded Green Poker Chip`,
            `Antique Company Script (Asteroid Mine)`,
            `Dessicated Husk Doll`,
            `Alien Pressed Flower (common)`,
            `Necklace of Shell Casings`,
            `Corroded Android Logic Core`,
            `Pamphlet: Signs of Parasitical Infection`,
            `Manual: Treat Your Rifle Like A Lady`,
            `Bone Knife`,
            `Calendar: Alien Pin-Up Art`,
            `Dog Tags (Heirloom)`,
            `Holographic Serpentine Dancer`,
            `Snake Whiskey`,
            `Medical Container, Purple Powder`,
            `Pills: Male Enhancement, Shoddy`,
            `Casino Playing Cards`,
            `Lagomorph Foot`,
            `Moonstone Ring`,
            `Manual: Mining Safety and You`,
            `Pamphlet: Against Human Simulacrum`,
            `Animal Skull, 3 Eyes, Curled Horns`,
            `Bartender's Certification (Expired)`,
            `Bent Wrench`,
            `Prospecting Mug, Dented`,
            `Eerie Mask`,
            `Vantablack Marble`,
            `Ivory Dice`,
            `Tarot Cards, Worn, Pyrite Gilded edges`,
            `Bag of Assorted Teeth`,
            `Ashes (A Relative)`,
            `DNR Beacon Necklace`,
            `Cigarettes (Grinning Skull)`,
            `Pills: Areca Nut`,
            `Rejected Application (Colony Ship)`,
            `Pamphlet: Android Overlords`,
            `Smut (Seditious): The Captain, Ordered`,
            `Key (Childhood Home)`,
            `Manual: Panic: Harbinger of Catastrophe`,
            `Token: "Is Your Morale Improving?"`,
            `Phosphorescent Sticks, Neon`,
            `Pamphlet: The Indifferent Stars`,
            `Calendar: Military Battles`,
            `Manual: Rich Captain, Poor Captain`,
            `Campaign Poster (Home Planet)`,
            `Pendant: Shell Fragments Suspended in Plastic`,
            `Titanium Toothpick`,
            `Gloves, Leather (Xenomorph Hide)`,
            `Pamphlet: Zen and the Art of Cargo Arrangement`,
            `Pictorial Pornography, Dogeared, Well Thumbed`,
            `Brass Knuckles`,
            `Fuzzy Handcuffs`,
            `Journal of Grudges`,
            `Stylized Cigarette Case`,
            `Ball of Assorted Gauge Wire`,
            `Spanner`,
            `Switchblade, Ornamental`,
            `Powdered Xenomorph Horn`,
            `Bonsai Tree`,
            `Golf Club (Putter)`,
            `Trilobite Fossil`,
            `Pamphlet: A Girl In Every Port`,
            `Patched Overalls, Personalized`,
            `Fleshy Thing Sealed in a Murky Jar`,
            `Spiked Bracelet`,
            `Harmonica`,
            `Manual: Spacefarer's Almanac (out of date)`,
            `Faded Photograph, A Windswept Heath`,
            `Stress Ball reads: Zero Stress in Zero G`,
            `Manual: Moonshining With Gun Oil & Fuel`,
            `Gyroscope, Bent, Tin`,
            `Coffee Cup, Chipped, HAPPINESS IS MANDATORY`,
            `Darts, Magnetic`,
            `Spray Paint`,
            `Wanted Poster, Weathered`,
            `Locket, Hair Braid`,
            `Pick, Miniature`,
            `Blanket, Fire Retardant`,
            `Hooded Parka, Fleece-Lined`,
            `BB Gun`,
            `Flint Hatchet`,
            `Pendant: Two Astronauts form a Skull`,
            `Rubik's Cube`,
            `Manual: Survival: Eat Soup With A Knife`,
            `Sputnik Pin`,
            `Ushanka`,
            `Trucker Cap, Mesh, Grey Alien Logo`,
            `Menthol Balm`,
            `Pith Helmet`,
            `10x10 Tarp`,
            `I Ching, Missing Sticks`,
            `Kukri`,
            `Trench Shovel`,
            `Shiv, Sharpened Butter Knife`,
            `Taxidermied Cat`,
            `Pamphlet: Interpreting Sheep Dreams`,
            `Pair of Shot Glasses, Spent Shotgun Shells`,
            `Opera Glasses`,
            `Pamphlet: The Relic of Flesh`,
            `Miniature Chess Set, Bone, Pieces Missing`,
        ];
        this.patches = [
            `"#1 Worker"`,
            `Security Guard patch`,
            `Blood Type (Reference Patch)`,
            `Red Shirt Logo`,
            `"Don't Run, You'll Only Die Tired" Backpatch`,
            `Poker Hand: Dead Mans Hand*`,
            `Biohazard Symbol`,
            `Mr. Yuck`,
            `Nuclear Symbol`,
            `"Eat The Rich"`,
            `"Be Sure: Doubletap"`,
            `Flame Emoji`,
            `Smiley Face (Glow in the Dark)`,
            `"Smile: Big Brother is Watching"`,
            `Jolly Roger`,
            `Viking Skull`,
            `"APEX PREDATOR" (Sabertooth Skull)`,
            `Pin-Up Girl (Ace of Spades)`,
            `Queen of Hearts`,
            `Pin-Up Girl (Mechanic)`,
            `BOHICA`,
            `Front Towards Enemy (Claymore Mine)`,
            `Pin-Up Girl (Riding Missile)`,
            `FUBAR`,
            `"I'm A (Love) Machine"`,
            `Medic Patch (Skull and Crossbones on Logo)`,
            `HELLO MY NAME IS:`,
            `"Powered By Coffee"`,
            `"Take Me To Your Leader" (UFO)`,
            `"DO YOUR JOB"`,
            `"Take My Life (Please)"`,
            `"All Out of Fucks To Give" (Astronaut with Turned Out Pockets)`,
            `Allergic To Bullshit (Medical Style Patch)`,
            `"Fix Me First" (Caduceus)`,
            `"Upstanding Citizen"`,
            `NASA Logo`,
            `"Cowboy Up" (Crossed Revolvers)`,
            `Dove in Crosshairs`,
            `Chibi Cthulhu`,
            `"Welcome to the DANGER ZONE"`,
            `Skull and Crossed Wrenches`,
            `Pin-Up Girl (Succubus)`,
            `"DILLIGAF?"`,
            `"DRINK / FIGHT / FUCK"`,
            `"Work Hard / Party Harder"`,
            `Mudflap Girl`,
            `Fun Meter (reading: bad time)`,
            `"GAME OVER" (Bride & Groom)`,
            `Heart`,
            `"IMPROVE / ADAPT / OVERCOME"`,
            `"SUCK IT UP"`,
            `HMFIC`,
            `"Troubleshooter"`,
            `"IF I'M RUNNING KEEP UP" Backpatch`,
            `Crossed Hammers with Wings`,
            `"Keep Well Lubricated"`,
            `Soviet Hammer & Sickle`,
            `"Plays Well With Others"`,
            `"Live Free and Die"`,
            `Pin-Up Girl (Nurse): "The Louder You Scream the Faster I Come"`,
            `"Meat Bag"`,
            `"I Am Not A Robot"`,
            `Red Gear`,
            `"I Can't Fix Stupid"`,
            `"Space IS My Home" (Sad Astronaut)`,
            `All Seeing Eye`,
            `"Do I LOOK Like An Expert?"`,
            `"NOMAD"`,
            `"I'm Not A Rocket Scientist / But You're An Idiot"`,
            `"LONER"`,
            `"I Am My Brothers Keeper"`,
            `"Mama Tried"`,
            `Black Widow Spider`,
            `"My Other Ride Married You"`,
            `"One Size Fits All" (Grenade)`,
            `Grim Reaper Backpatch`,
            `("Get Fucked", in Russian)`,
            `"Smooth Operator"`,
            `Atom Symbol`,
            `"For Science!"`,
            `"Actually, I Am A Rocket Scientist"`,
            `"Help Wanted"`,
            `Princess`,
            `"I Like My Tools Clean / And My Women Dirty"`,
            `"GOOD BOY"`,
            `Dice (Snake Eyes)`,
            `"Travel To Distant Exotic Places / Meet Unusual Things / Get Eaten"`,
            `"Good" (Brain)`,
            `"Bad Bitch"`,
            `"Too Pretty To Die"`,
            `"Fuck Forever" (Roses)`,
            `Icarus`,
            `"Girls Best Friend" (Diamond)`,
            `Risk of Electrocution Symbol`,
            `Inverted Cross`,
            `"Do You Sign My Paychecks?" Backpatch`,
            `"I (heart) Myself"`,
            `Double Cherry`,
            `"Volunteer"`,
            `"Solve Et Coagula" (Baphomet)`,
        ];
        this.class = this.classes["teamster"];
        this.level = 0;
        this.maxhealth = 0;
        this.stress = 2;
        this.resolve = 0;
        this.stats = {
            strength: 0,
            speed: 0,
            intellect: 0,
            combat: 0,
        };
        this.saves = {
            sanity: 0,
            fear: 0,
            body: 0,
            armor: 0,
        };
        this.currentskills = [];
        this.skills = {
            'linguistics': {
                'cost': 1,
                'pre_requisites': [],
            },
            'biology': {
                'cost': 1,
                'pre_requisites': [],
            },
            'first_aid': {
                'cost': 1,
                'pre_requisites': [],
            },
            'hydroponics': {
                'cost': 1,
                'pre_requisites': [],
            },
            'geology': {
                'cost': 1,
                'pre_requisites': [],
            },
            'zero_g': {
                'cost': 1,
                'pre_requisites': [],
            },
            'scavenging': {
                'cost': 1,
                'pre_requisites': [],
            },
            'heavy_machinery': {
                'cost': 1,
                'pre_requisites': [],
            },
            'computers': {
                'cost': 1,
                'pre_requisites': [],
            },
            'mechanical_repair': {
                'cost': 1,
                'pre_requisites': [],
            },
            'driving': {
                'cost': 1,
                'pre_requisites': [],
            },
            'piloting': {
                'cost': 1,
                'pre_requisites': [],
            },
            'mathematics': {
                'cost': 1,
                'pre_requisites': [],
            },
            'art': {
                'cost': 1,
                'pre_requisites': [],
            },
            'archeology': {
                'cost': 1,
                'pre_requisites': [],
            },
            'theology': {
                'cost': 1,
                'pre_requisites': [],
            },
            'military_training': {
                'cost': 1,
                'pre_requisites': [],
            },
            'rimwise': {
                'cost': 1,
                'pre_requisites': [],
            },
            'athletics': {
                'cost': 1,
                'pre_requisites': [],
            },
            'chemistry': {
                'cost': 1,
                'pre_requisites': [],
            },
            'psychology': {
                'cost': 2,
                'pre_requisites': ['biology'],
            },
            'genetics': {
                'cost': 2,
                'pre_requisites': ['biology'],
            },
            'pathology': {
                'cost': 2,
                'pre_requisites': ['first_aid'],
            },
            'botany': {
                'cost': 2,
                'pre_requisites': ['hydroponics'],
            },
            'planetology': {
                'cost': 2,
                'pre_requisites': ['geology'],
            },
            'asteroid_mining': {
                'cost': 2,
                'pre_requisites': ['geology', 'zero_g', 'scavenging', 'piloting'],
            },
            'jury_rigging': {
                'cost': 2,
                'pre_requisites': ['scavenging', 'mechanical_repair'],
            },
            'engineering': {
                'cost': 2,
                'pre_requisites': ['heavy_machinery', 'mechanical_repair', 'computers'],
            },
            'hacking': {
                'cost': 2,
                'pre_requisites': ['computers'],
            },
            'vehicle_specialization': {
                'cost': 2,
                'pre_requisites': ['mechanical_repair', 'piloting', 'driving'],
            },
            'astrogation': {
                'cost': 2,
                'pre_requisites': ['piloting'],
            },
            'physics': {
                'cost': 2,
                'pre_requisites': ['mathematics'],
            },
            'mysticism': {
                'cost': 2,
                'pre_requisites': ['art', 'archaeology', 'theology'],
            },
            'tactics': {
                'cost': 2,
                'pre_requisites': ['military_training'],
            },
            'gunnery': {
                'cost': 2,
                'pre_requisites': ['military_training'],
            },
            'firearms': {
                'cost': 2,
                'pre_requisites': ['military_training', 'rimwise'],
            },
            'cqc': {
                'cost': 2,
                'pre_requisites': ['athletics', 'rimwise', 'military_training'],
            },
            'explosives': {
                'cost': 2,
                'pre_requisites': ['military_training', 'chemistry'],
            },
            'sophontology': {
                'cost': 3,
                'pre_requisites': ['psychology', 'linguistics'],
            },
            'xenobiology': {
                'cost': 3,
                'pre_requisites': ['genetics', 'pathology', 'botany'],
            },
            'cybernetics': {
                'cost': 3,
                'pre_requisites': ['jury_rigging', 'engineering'],
            },
            'robotics': {
                'cost': 3,
                'pre_requisites': ['engineering'],
            },
            'ai': {
                'cost': 3,
                'pre_requisites': ['hacking', 'engineering'],
            },
            'command': {
                'cost': 3,
                'pre_requisites': ['vehicle_specialization', 'tactics'],
            },
            'hyperspace': {
                'cost': 3,
                'pre_requisites': ['astrogation', 'physics', 'mysticism'],
            },
            'xenoesotericism': {
                'cost': 3,
                'pre_requisites': ['mysticism'],
            },
            'weapon_specialization': {
                'cost': 3,
                'pre_requisites': ['gunnery', 'firearms', 'ccq', 'explosives'],
            },
        };
    }

    setClass(className) {
        this.class = this.classes[className];
        this.update();
    }

    setLevel(level) {
        if (level >= 0 && level <= 10) {
            this.level = level;
        } else {
            this.level = 0;
        }
    }

    setStat(stat, value) {
        if (!(stat in this.stats)) return;

        if (value >= 3 && value <= 85) {
            this.stats[stat] = value;
        } else {
            this.stats[stat] = 0;
        }
    }

    setSave(save, value) {
        if (!(save in this.saves)) return;

        if (value >= 3 && value <= 85) {
            this.saves[save] = value;
        } else {
            this.saves[save] = 0;
        }
    }

    update() {
        this.setSave("sanity", this.class.saves.sanity);
        this.setSave("fear", this.class.saves.fear);
        this.setSave("body", this.class.saves.body);
        this.setSave("armor", this.class.saves.armor);
        this.maxhealth = this.stats.strength * 2;
    }

    generate() {
        this.setStat("strength", this.rollStat());
        this.setStat("speed", this.rollStat());
        this.setStat("intellect", this.rollStat());
        this.setStat("combat", this.rollStat());
        this.patch = this.patches[this.rollDie(100)];
        this.nightmare = this.nightmares[this.rollDie(100)];
    }

    rollStat() {
        return this.rollDie(10) + this.rollDie(10) + this.rollDie(10) + this.rollDie(10) + this.rollDie(10) + this.rollDie(10);
    }

    rollDie(sides) {
        if (sides === 0) return 0;
        let value = Math.floor((Math.random() * sides) + 1);
        return value;
    }

    getTrinket() {
        return this.trinkets[this.rollDie(100)];
    }

    getPatch() {
        return this.patches[this.rollDie(100)];
    }

    getNightmare() {
        return this.nightmares[this.rollDie(100)];
    }

    skillAllowed(skill) {
        for (pre in this.skills[skill].pre_requisites) {
            if (pre in this.currentskills) {
                return true
            }
        }
        return false
    }
}