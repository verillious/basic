class MothershipCharGenerator {
    constructor() {
        this.nightmares = [
            `- Your migraine is splitting your skull. A dog rushes towards you, its eyes full of loving devotion.\n   - The dog's head explodes into a crimson mist, coating your hands like an accusation.`,
            `- Your jaw unhinges as you vomit a torrent of earwigs.`,
            `- You are having sex with someone with the face of an ant; they regard you coldly and whisper something you can't quite hear.`,
            `- You draw a straight razor across your mother's eye.\n   - This is the right thing to do.\n   - She does not resist.`,
            `- There is a steady tick-tock of an egg-timer in your chest.\n   - You know something terrible will happen when it rings.\n   - There is no clear way to stop it.`,
            `- An amber scorpion crawls on your face.\n   - Your limbs are leaden anchors a million miles away.`,
            `- You swim frantically, uncertain of what direction you are swimming in.\n   - The water is like ink, your lungs are bursting.`,
            `- You look at your hands.\n   - They fall apart like puzzle pieces.\n   - You cannot stop thinking about your 7th birthday.`,
            `- A crowd of beautiful, slim, fashionable, and elegant people stare at you derisively.\n   - You drop your drink.\n   - They laugh with cruel sensual smiles.`,
            `- Your ribs swell to make space for the blind orgy of wasp larva.\n   - You think about motherhood as your flesh stretches to its breaking point.\n   - The larva burrow out and unfold their iridescent wings.`,
            `- You are in a pale room.\n   - You hear children's laughter.\n   - You cannot pinpoint the source.`,
            `- You feel the trapdoor spider making its home in your throat; you know what you have to do.\n   - Jamming the blade in is as simple as carving butter.\n   - You wiggle it around with satisfaction.\n   - You missed.`,
            `- A weathered hag sits on your chest, her mouth a hideous O of accusations.\n   - It won't stop dripping pale fluids on your face.`,
            `- You hear panicked screams in the darkness: they're growing fainter, you are running away.`,
            `- Pale hands press against darkened glass.\n   - You are surrounded.\n   - Alone.`,
            `- No matter how much you struggle or bat them away, the crows are relentlessly consuming your face.`,
            `- You smell moss and dirt.\n   - Inane stammering and chanting fills your ears.\n   - They are coming for you.`,
            `- Figures flit about in the hanging fabric.\n   - You can't quite make them out, they seem familiar.\n   - You aren't certain if you are the hunter or the quarry.`,
            `- Your fingernails tear from their moorings as you futilely scrabble against the rough wall.\n   - The hole atop the shaft, your only escape, is as distant as the sky.`,
            `- Your eyes melt, crawling down your face like limpid tears.\n   - Your skin starts sloughing off.\n   - Your muscles fall off with a meaty slap.\n   - Maybe this face is not yours.`,
            `- You feel the slender fingers encircle your throat; there are too many of them, they are far too long and thin.\n   - Everything smells like camphor.`,
            `- A carousel spins madly - the music hellish, discordant.\n   - The horses' eyes are meeting yours.`,
            `- You can smell the rot in your bones.\n   - You struggle to dig them out.`,
            `- Your face warps and shifts - stretching and pulling against its own definition.\n   - It becomes bovine.\n   - Your friends are leading to a grey, cement building.\n   - Everything smells like copper.`,
            `- Your fingers unwind like meaty corkscrews; they start anchoring you in place.\n   - The wind is cold.`,
            `- Your teeth blacken and rot.\n   - They crowd laughs uproariously.\n   - Nails drive through your putrid gums in a birth of pus and blood.\n   - You bite their faces away.\n   - They taste like cinnamon.`,
            `- A bulbous, fleshy eyeless face hunts you in the dark.\n   - Its steps are deliberate.\n   - It has already found you.`,
            `- A puppet gazes up at you.\n   - A mockery of human features - exaggerated, stretched.\n   - Its hands spring into action, manipulating your strings.\n   - You dance a macabre waltz.`,
            `- A red sun slowly rises.\n   - The light carbonizes your toes, feet, legs.\n   - You watch.\n   - The smell of cooking meat overwhelms you.`,
            `- You fight a current of blind, swollen, pale fish to reach the masticating maw.\n   - There is a smell of jasmine.`,
            `- Your wrist bends back.\n   - It keeps bending.\n   - Your hand is in your arm.`,
            `- The shambling figure is dark, save a chipped porcelain mask.\n   - The air is haze with the smell of candy and rot.`,
            `- Every door is labeled exit despite taking you back to the start of the corridor.\n   - You have been here before.`,
            `- You pin the fish down.\n   - You bash its gasping face with a hammer.\n   - You can't stop.\n   - You won't stop.`,
            `- The music is pleasantly generic; the waiting room sterile.\n   - How long have you been here? How long will you remain?`,
            `- The skeletal cats need to be fed.\n   - They yowl, they fornicate, they piss.\n   - The air is thick with ammonia, wet with humidity.\n   - You lose count.`,
            `- You sip wine as she nails your fingers to the table.\n   - You have long, elegant hands.`,
            `- You stab the featureless body with a baby doll head, over and over.\n   - A torrent of red ants crawls from the womb.`,
            `- Your fingers are jagged snarls of glass.\n   - You caress yourself.\n   - You can't feel how sticky your fingers are.`,
            `- The dinner party is lovely.\n   - Then you notice the centipedes crawling from your collar; hear the snide comments.`,
            `- The children dash ahead of you.\n   - Their rabbit masks are askew.\n   - You need to bring them home.\n   - You stumble.`,
            `- You feel them growing behind your eyes.\n   - Your vision dims.\n   - You are the host and they are nothing like you.`,
            `- The pliers are getting red hot.\n   - The air is damp and unctuous.\n   - You don't really need all those fingernails, not when you have so many toes.`,
            `- The ground is dry and desolate.\n   - Your drool pools by your face.\n   - You sink into the lukewarm puddle.`,
            `- It is cold.\n   - Your fingers blacken.\n   - You could snap them off if your hand could move.\n   - The cold scours everything away.`,
            `- You float in a void of deep space.\n   - A planet-sized foetus regards you with lugubrious, watery eyes.`,
            `- Poison gas fills the warrens.\n   - Blood seeps from their eyes as their despondent screams echo in your ears.\n   - Mocking laughter shakes your ribs like a bass note.`,
            `- He splatters his cravat with viscera when he cuts your hand off.\n   - You roll on the floor.\n   - You cauterize the stump with a hot plate.\n   - You line up your shot at the retreating figure.\n   - He spins around and shoots first.`,
            `- Your incisors won't stop growing.\n   - They pry your jaw apart, your mouth wider and wider, lips bleeding from the strain, teeth grinding into gums.\n   - The snap will be a relief.`,
            `- You feel it churning inside you.\n   - Wrapping itself in your entrails.\n   - Kicking against the stomach wall.\n   - Waiting to break free, you can feel the grin fill the hollow of your belly.`,
            `- Filthy, louse-ridden children pelt you with stones.\n   - They know what you did.`,
            `- You bash the figure across the face with a rock.\n   - Your hands seek purchase on their face and you confidently press your thumbs into the eye sockets.\n   - Your own tortured face grins back.`,
            `- The sinuous reptiles circle you warily, languid motions at incredible speed.\n   - Their tongues taste the air, taste your body, your sweat tying them to you.\n   - Any second they will close in, their snapping jaws slathered with miasma.`,
            `- You crush the nimbus-blue egg in your hand.\n   - Amidst the splintered shell fragments is the partially formed baby bird.\n   - It stares back at you with eyes like black marbles.\n   - Then you notice the teeth.`,
            `- Children with sunken eyes and rotted teeth chant, "SACRIFICE, SACRIFICE".\n   - They push you, you fall.\n   - Their faces fade in the distance.\n   - You keep falling.`,
            `- You trudge through a landscape blanketed in bones.\n   - They snap and crunch underfoot.\n   - Drifts of them knee deep and pulling you gradually under.\n   - They rattle as you descend.`,
            `- You walk yowards the horizon.\n   - You pass a burning car and the air is thick with malodorous smog.\n   - Your skeleton stops walking and is left behind.\n   - Your shadow tells you your real bones have been replaced.`,
            `- You are in a pool.\n   - The water is warm.\n   - Tropical fish peck away at you.\n   - Each bite is a papercut.\n   - You feel your legs gradually vanishing one small bite at a time.\n   - You can't see an exit.`,
            `- You are lying on the beach tangled in nets.\n   - The tide keeps rising up towards your face, gradually but inexorably.\n   - Gulls squabble and circle in the baking sun.`,
            `- Your face is smothered in kisses, teeth scraping your brow.\n   - A sudden rough bite and pull on the cheek until it tears, leaving a hole.\n   - A tongue presses the fringes of the new oriface.`,
            `- You walk on broken glass, barefoot.\n   - The wet cracking of the shards is your only companion save a floating red lantern illuminating the seemingly endless expanse of glass.`,
            `- The person talking to you is so unpleasant the world seems to curdle from the rancidness of their presence.\n   - Their hand is on your knee.`,
            `- A robot regards you.\n   - It mirrors your motions.\n   - It mimics your emotions.\n   - It takes your name.`,
            `- You feel sick, feverish, desperate.\n   - The bullet lodged in your gut is necrotizing too fast, spiderwebs of dying, blackened, leaking flesh.`,
            `- You are digging up a skeleton, the bones are impossibly fine, elegant even.\n   - The face long and gaunt, mournful.\n   - The wings so wide they consume the sky.`,
            `- The hammer feels momentous, pitted surface spattered with rust.\n   - You see the children with lamb's faces.\n   - You silence their frenzied bleating.`,
            `- You bleed the pigs.\n   - All of them.\n   - In their fine jewelry and spotless dinner jackets.`,
            `- The bolt cutters pass through your joints roughly.\n   - The end announced by a smooth click.\n   - Your finger is discarded into the bucket.\n   - The bucket chews noisily.`,
            `- You claw at the glass, your husk withering.\n   - They dispassionately take notes on clipboards.\n   - You desiccate and blow away in a fine spray of dust.\n   - They nod, approving.`,
            `- The Leviathan blots out the sun.\n   - The air ruptures as it breathes in.\n   - Its multifaceted eyes gaze upon you uncomprehendingly.`,
            `- Unnaturally white teeth grin at you, gleaming.\n   - The smile is forced.\n   - The laughter is a blade dragged against glass.`,
            `- The sky is an ink black horizon of tentacles and blazing vermilion eyes.\n   - It falls upon you like an avalanche.\n   - Tentacles force their way into your eyes, your mouth, down your throat.\n   - Your need is not slaked.`,
            `- Your hands are bound behind your back.\n   - The burlap over your head is tight, sucking in with your breath - the smell of kerosene overpowering.\n   - You feel wet, tired.\n   - You hear the scratch of a match being struck.`,
            `- You clip your nails.\n   - You keep clipping them.\n   - It won't stop.\n   - You see bone.`,
            `- You're at the end of the dock.\n   - Everything stinks of salt and rotting fish.\n   - Your feet squelch pointlessly in the concrete.\n   - They smoke cigarettes and leer at you.\n   - They're coming over to push you.`,
            `- You follow the woman in the red damask dress through the hedge maze.\n   - She's just out of reach.\n   - Her scent, peach blossoms, wafts behind her.\n   - You corner her.\n   - She turns around.\n   - There is no face, just a sunken pit with fleshy teeth.`,
            `- Scabrous rats - wounds dripping with pus - crawl all over you.\n   - They smother you with their wet, stinking bodies, force your way into your mouth and explore you.\n   - Where are your arms?`,
            `- You drive the nails into your leg.\n   - 1-2-3-4...99-100.\n   - Aghast, you realize your pattern isn't symmetrical.\n   - You pry them out and start again - perfect this time.`,
            `- You see sharks circling in the wine dark sea.\n   - You are bleeding.\n   - It won't stop.`,
            `- The ship controls won't respond, all the systems are down.\n   - You are slowly drifting towards a sun.\n   - You perspire, your hands slipping as you struggle to stop the ponderous drift.`,
            `- You are beneath an immense pendulum.\n   - With each swing, you feel years drain away.\n   - Your teeth disintegrate, your nails grow and twist, your vision dims, your hair becomes dust.`,
            `- Your arms are dragged in opposite directions as they are fed into gears.\n   - You feel the crushing weight and the tears forming in your muscles.\n   - Everything reeks of grease and rust.`,
            `- The airlock is slowly opening.\n   - Behind the glass they point and laugh.\n   - Your face is wet with tears.\n   - They enjoy slices of cake.`,
            `- You are engulfed in flame.\n   - No one seems to notice.\n   - Even when you touch them, spreading the flame.\n   - Vacant eyes.`,
            `- You're bleeding from the mouth.\n   - Ropes of it suspended from your lips.\n   - The viscera moving of its own accord.`,
            `- You are crouched behind a crate.\n   - Pinned down by automatic arms fire.\n   - You can't clear the jam.`,
            `- There's a pulse grenade in your hands.\n   - You can't remember how to throw, your fingers are useless.\n   - Everyone is disappointed.`,
            `- The mouth in your torso is hungry.\n   - It wants your friends.\n   - There are rewards for compliance.`,
            `- The conversation is charming, civil, courteous.\n   - The problem is they're holding your hand in acid.`,
            `- A drill descends towards your eye.\n   - The whirr fills the air, gives it texture.\n   - They ask how you are feeling.`,
            `- No matter how many volts you deliver to the subject, he won't divulge the information.\n   - He can't last much longer, you hope.\n   - They are getting impatient.`,
            `- Your lips are being sewed shut.\n   - The needle dances in and out.\n   - There is something in your throat: you deserve this.`,
            `- You tear wrapping paper desperately from the gifts, shredded colorful paper piles up to your knees.\n   - The antidote is in one of these.\n   - It has to be.`,
            `- They deliver shocks to you.\n   - They ask you to prove you aren't a machine.\n   - They don't believe you.`,
            `- The snake is swallowing you.\n   - Everything smells of offal and carrion.\n   - It moves up your legs, relentless, devouring.`,
            `- Your fingers split and mutate into baby hands.\n   - The new hands repeat the process.\n   - They hands are getting heavy.`,
            `- Your arms become snakes.\n   - The snakes start biting you.\n   - You reach out towards your friends, to share.`,
            `- The walls are closing in.\n   - Only when you close your eyes.\n   - Remain vigilant.`,
            `- You keep trying to scoop your guts back in; glistening ropes of your intestines wriggling and slipping in your hands.\n   - You've shoveled so much in.\n   - There should be an end to this.`,
            `- It is hot.\n   - It is dark.\n   - It is cramped.\n   - It is dusty.\n   - You are trapped.`,
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
        this.stats = {
            Strength: {score: 10, bonus: 0},
            Dexterity: {score: 10, bonus: 0},
            Constitution: {score: 10, bonus: 0},
            Intelligence: {score: 10, bonus: 0},
            Wisdom: {score: 10, bonus: 0},
            Charisma: {score: 10, bonus: 0}
        };
        this.statBonuses = ['+0','+0','+0','-3','-2','-2','-1','-1','-1','+0','+0','+0','+0','+1','+1','+1','+2','+2','+3'];
        this.saves = {
            physical: 0,
            evasion: 0,
            mental: 0,
        };
        this.currentSkills = [];
        this.skills = ['Exertion', 'Interaction', 'Academics', 'Engineering', 'Combat', 'Vehicles', 'Survival'];
        this.loadout = "";
        this.pyschology = {
            Openness: ['LOW`      - Appreciates routine, practicality, established ideas.`      - Uninterested in abstractions, imagination or fantasy.`      - Gains fulfillment through perseverance.`      - Potentially characterized as pragmatic and data-driven.`      - Sometimes dogmatic and closed-minded.', 'HIGH`      - Appreciates art, emotion, adventure, unusual ideas.`      - High desire for imagination, curiosity, and variety of experience.`      - Intellectually curious.`      - Willing to try new things.`      - Likely to hold unconventional beliefs.`      - Potentially unpredictable and lacking focus.`      - Likely to engage in risky behavior or drug-taking.`      - Seeks self-actualization by seeking out intense, euphoric experiences.'][this.rollDie(2)-1],
            Conscientiousness: ['LOW`      - Flexibile and spontaneous.`      - Easy-going, relaxed.`      - Likely to act on personal impulses.`      - Preference for improvisation over planned behaviour.`      - May be described as sloppy or unreliable.`      - Potentially erratic.', 'HIGH`      - Self-disciplined, dutiful.`      - Strives for achievement against measures or outside expectations.`      - Likely to control, regulate, and direct personal impulses.`      - Potentially perceived as stubborn and/or focused.`      - Preference for planned rather than spontaneous behavior.'][this.rollDie(2)-1],
            Extroversion: ['LOW`      - Low social engagement and energy levels.`      - Described as quiet, low-key, deliberate, and less involved in the social world.`      - Lack of social involvement should not be confused with shyness or depression.`      - Independent of social world.`      - Needs minimal stimulation but requires time alone.`      - Reserved in social situations.', 'HIGH`      - Emotionally reactive to external activity/situations.`      - Pronounced engagement with the external world.`      - Enjoys interacting with people.`      - Perceived as full of energy.`      - Tends to be enthusiastic and action-oriented.`      - High group visibility.`      - Dominant in social settings.`      - Likes to talk, and assert themselves.'][this.rollDie(2)-1],
            Agreeableness: ['LOW`      - Places self-interest above getting along with others.`      - Generally unconcerned with others\' well-being, and unlikely to extend themselves for other people.`      - Skepticism about others\' motives causes suspicion, unfriendliness, and uncooperativeness.`      - Often competitive and/or challenging.`      - Potentially seen as argumentative or untrustworthy.', 'HIGH`      - Values getting along with others.`      - Generally considerate, kind, generous, trusting and trustworthy.`      - Seen as helpful, and willing to compromise their interests for others.`      - Has an optimistic view of human nature.'][this.rollDie(2)-1],
            Neuroticism: ['LOW`      - Hard to upset, low emotional reactivity.`      - Tends to be calm, emotionally stable, and free from persistent negative feelings.`      - Tends not to experience emotions in extreme highs and extreme lows.`      - Described as calm, level-headed, and optimistic.`      - Able to think clearly under stress.`      - Often sought out for guidance.', 'HIGH`      - Tends to experience negative emotions, such as anxiety, worry, fear, anger, frustration, envy, jealousy, guilt and loneliness.`      - Emotionally unstable, reactive and vulnerable to stress.`      - Flippant in the way they express emotion.`      - Likely to interpret ordinary situations as threatening, and minor frustrations as hopelessly difficult.`      - Often in a bad mood.`      - Potential problems with thinking clearly, making decisions, and coping effectively with stress.'][this.rollDie(2)-1],
        };
        this.weapons = weapons.filter(weapon => weapon["COST"] <= 200 && weapon["COST"] >= 100);
        this.weapon = this.weapons[this.rollDie(this.weapons.length) - 1];
        this.generate();
    }

    setStat(stat, value) {
        if (!(stat in this.stats)) return;

        if (value >= 3 && value <= 18) {
            this.stats[stat].score = value;
        } else {
            this.stats[stat].score = 0;
        }
        this.stats[stat].bonus = this.statBonuses[value];
    }

    generate() {
        this.setStat("Strength", this.rollStat());
        this.setStat("Dexterity", this.rollStat());
        this.setStat("Constitution", this.rollStat());
        this.setStat("Intelligence", this.rollStat());
        this.setStat("Wisdom", this.rollStat());
        this.setStat("Charisma", this.rollStat());
        this.currentSkills = this.shuffle(this.skills).slice(0, 2);
        this.loadout += `   - ${this.weapon["WEAPON"]}\n`;
        for (var key in this.weapon) {
            if (key != "WEAPON" && key != "AVG DAM" && key != "COST") {
                this.loadout += `      - ${key.padEnd(13, ' ')}:    ${String(this.weapon[key]).padEnd(2, ' ')} \n`;
            }
        }
        this.loadout += `   - ${this.rollDie(4) - 1} spare mags\n`
        this.loudout += `   - ${ ['machete', 'scalpel', 'crowbar'][this.rollDie(3) - 1] }\n`;
        this.loadout += `   - ${['flare gun', 'Binoculars', 'Flashlight'][this.rollDie(3) - 1]}\n`;
        this.loadout += `   - ${['Automed (2)', 'Pain pills (2)', 'Random Drug (2)'][this.rollDie(3) - 1]}\n`;
        this.loadout += "   - stimpak (1)\n";
        this.loadout += `   - ${['standard clothing', 'Type 1 steel vest random style', 'tactical clothing'][this.rollDie(3) - 1]}\n`;

        this.patch = this.patches[this.rollDie(100)];
        this.nightmare = this.nightmares[this.rollDie(100)];
        this.trinket = this.trinkets[this.rollDie(100)];

        this.loadout += `   - patch: ${this.patch} (1)\n`;
        this.loadout += `   - trinket: ${this.trinket} (1)\n`;
        this.health = this.rollDie(6)
        console.log(this.health);
        this.health += Number(this.stats.Constitution.bonus);

        this.output = "\n// HEILIKON PERSONNEL RECORD\n";

        this.output += `   - ${chance.name({ middle: 'true', prefix: 'true' })}\n`;
        this.output += `   - ${chance.profession()}\n`;
        this.output += `// Stat profile\n`;
        for (var key in this.stats){
            this.output += `   - ${key.padEnd(16, ' ')}:    ${String(this.stats[key].score).padEnd(2, ' ')} ${this.stats[key].bonus}\n`;
        }
        this.output += `// Skillset\n`;
        for (var i = 0; i < this.currentSkills.length; i++){
            this.output += `   - ${this.currentSkills[i]}\n`;
        }
        this.output += `// Loadout\n`;
        this.output += `${this.loadout}`;
        this.output += `// Medical history\n`;
        this.output += `   - ${'HP'.padEnd(16, ' ')}:    ${String(this.health).padEnd(2, ' ')}\n`;
        this.output += `// Appearance\n`
        this.output += `   @2\n`
        this.output += `// Psychology\n`;
        this.output += `// Most recent nightmare\n`;
        this.output += `   ${this.nightmare}\n`;
        this.output += `// Personality profile\n`
        for (var key in this.pyschology){
            this.output += `   - ${key}: ${this.pyschology[key]}\n`;
        }
        this.output += ``

    }

    rollStat() {
        return this.rollDie(6) + this.rollDie(6) + this.rollDie(6);
    }

    rollDie(sides) {
        if (sides === 0) return 0;
        let value = Math.floor((Math.random() * sides) + 1);
        return value;
    }

    shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    getTrinket() {
        return this.trinkets[this.rollDie(100)-1];
    }

    getPatch() {
        return this.patches[this.rollDie(100)-1];
    }

    getNightmare() {
        return this.nightmares[this.rollDie(100)-1];
    }
}