class MothershipCharGenerator {
    constructor() {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        this.type = urlParams.get('type');
        this.nightmares = [
            `- Your migraine is splitting your skull. A dog rushes towards you, its eyes full of loving devotion.\`   - The dog's head explodes into a crimson mist, coating your hands like an accusation.`,
            `- Your jaw unhinges as you vomit a torrent of earwigs.`,
            `- You are having sex with someone with the face of an ant; they regard you coldly and whisper something you can't quite hear.`,
            `- You draw a straight razor across your mother's eye.\`   - This is the right thing to do.\`   - She does not resist.`,
            `- There is a steady tick-tock of an egg-timer in your chest.\`   - You know something terrible will happen when it rings.\`   - There is no clear way to stop it.`,
            `- An amber scorpion crawls on your face.\`   - Your limbs are leaden anchors a million miles away.`,
            `- You swim frantically, uncertain of what direction you are swimming in.\`   - The water is like ink, your lungs are bursting.`,
            `- You look at your hands.\`   - They fall apart like puzzle pieces.\`   - You cannot stop thinking about your 7th birthday.`,
            `- A crowd of beautiful, slim, fashionable, and elegant people stare at you derisively.\`   - You drop your drink.\`   - They laugh with cruel sensual smiles.`,
            `- Your ribs swell to make space for the blind orgy of wasp larva.\`   - You think about motherhood as your flesh stretches to its breaking point.\`   - The larva burrow out and unfold their iridescent wings.`,
            `- You are in a pale room.\`   - You hear children's laughter.\`   - You cannot pinpoint the source.`,
            `- You feel the trapdoor spider making its home in your throat; you know what you have to do.\`   - Jamming the blade in is as simple as carving butter.\`   - You wiggle it around with satisfaction.\`   - You missed.`,
            `- A weathered hag sits on your chest, her mouth a hideous O of accusations.\`   - It won't stop dripping pale fluids on your face.`,
            `- You hear panicked screams in the darkness: they're growing fainter, you are running away.`,
            `- Pale hands press against darkened glass.\`   - You are surrounded.\`   - Alone.`,
            `- No matter how much you struggle or bat them away, the crows are relentlessly consuming your face.`,
            `- You smell moss and dirt.\`   - Inane stammering and chanting fills your ears.\`   - They are coming for you.`,
            `- Figures flit about in the hanging fabric.\`   - You can't quite make them out, they seem familiar.\`   - You aren't certain if you are the hunter or the quarry.`,
            `- Your fingernails tear from their moorings as you futilely scrabble against the rough wall.\`   - The hole atop the shaft, your only escape, is as distant as the sky.`,
            `- Your eyes melt, crawling down your face like limpid tears.\`   - Your skin starts sloughing off.\`   - Your muscles fall off with a meaty slap.\`   - Maybe this face is not yours.`,
            `- You feel the slender fingers encircle your throat; there are too many of them, they are far too long and thin.\`   - Everything smells like camphor.`,
            `- A carousel spins madly - the music hellish, discordant.\`   - The horses' eyes are meeting yours.`,
            `- You can smell the rot in your bones.\`   - You struggle to dig them out.`,
            `- Your face warps and shifts - stretching and pulling against its own definition.\`   - It becomes bovine.\`   - Your friends are leading to a grey, cement building.\`   - Everything smells like copper.`,
            `- Your fingers unwind like meaty corkscrews; they start anchoring you in place.\`   - The wind is cold.`,
            `- Your teeth blacken and rot.\`   - They crowd laughs uproariously.\`   - Nails drive through your putrid gums in a birth of pus and blood.\`   - You bite their faces away.\`   - They taste like cinnamon.`,
            `- A bulbous, fleshy eyeless face hunts you in the dark.\`   - Its steps are deliberate.\`   - It has already found you.`,
            `- A puppet gazes up at you.\`   - A mockery of human features - exaggerated, stretched.\`   - Its hands spring into action, manipulating your strings.\`   - You dance a macabre waltz.`,
            `- A red sun slowly rises.\`   - The light carbonizes your toes, feet, legs.\`   - You watch.\`   - The smell of cooking meat overwhelms you.`,
            `- You fight a current of blind, swollen, pale fish to reach the masticating maw.\`   - There is a smell of jasmine.`,
            `- Your wrist bends back.\`   - It keeps bending.\`   - Your hand is in your arm.`,
            `- The shambling figure is dark, save a chipped porcelain mask.\`   - The air is haze with the smell of candy and rot.`,
            `- Every door is labeled exit despite taking you back to the start of the corridor.\`   - You have been here before.`,
            `- You pin the fish down.\`   - You bash its gasping face with a hammer.\`   - You can't stop.\`   - You won't stop.`,
            `- The music is pleasantly generic; the waiting room sterile.\`   - How long have you been here? How long will you remain?`,
            `- The skeletal cats need to be fed.\`   - They yowl, they fornicate, they piss.\`   - The air is thick with ammonia, wet with humidity.\`   - You lose count.`,
            `- You sip wine as she nails your fingers to the table.\`   - You have long, elegant hands.`,
            `- You stab the featureless body with a baby doll head, over and over.\`   - A torrent of red ants crawls from the womb.`,
            `- Your fingers are jagged snarls of glass.\`   - You caress yourself.\`   - You can't feel how sticky your fingers are.`,
            `- The dinner party is lovely.\`   - Then you notice the centipedes crawling from your collar; hear the snide comments.`,
            `- The children dash ahead of you.\`   - Their rabbit masks are askew.\`   - You need to bring them home.\`   - You stumble.`,
            `- You feel them growing behind your eyes.\`   - Your vision dims.\`   - You are the host and they are nothing like you.`,
            `- The pliers are getting red hot.\`   - The air is damp and unctuous.\`   - You don't really need all those fingernails, not when you have so many toes.`,
            `- The ground is dry and desolate.\`   - Your drool pools by your face.\`   - You sink into the lukewarm puddle.`,
            `- It is cold.\`   - Your fingers blacken.\`   - You could snap them off if your hand could move.\`   - The cold scours everything away.`,
            `- You float in a void of deep space.\`   - A planet-sized foetus regards you with lugubrious, watery eyes.`,
            `- Poison gas fills the warrens.\`   - Blood seeps from their eyes as their despondent screams echo in your ears.\`   - Mocking laughter shakes your ribs like a bass note.`,
            `- He splatters his cravat with viscera when he cuts your hand off.\`   - You roll on the floor.\`   - You cauterize the stump with a hot plate.\`   - You line up your shot at the retreating figure.\`   - He spins around and shoots first.`,
            `- Your incisors won't stop growing.\`   - They pry your jaw apart, your mouth wider and wider, lips bleeding from the strain, teeth grinding into gums.\`   - The snap will be a relief.`,
            `- You feel it churning inside you.\`   - Wrapping itself in your entrails.\`   - Kicking against the stomach wall.\`   - Waiting to break free, you can feel the grin fill the hollow of your belly.`,
            `- Filthy, louse-ridden children pelt you with stones.\`   - They know what you did.`,
            `- You bash the figure across the face with a rock.\`   - Your hands seek purchase on their face and you confidently press your thumbs into the eye sockets.\`   - Your own tortured face grins back.`,
            `- The sinuous reptiles circle you warily, languid motions at incredible speed.\`   - Their tongues taste the air, taste your body, your sweat tying them to you.\`   - Any second they will close in, their snapping jaws slathered with miasma.`,
            `- You crush the nimbus-blue egg in your hand.\`   - Amidst the splintered shell fragments is the partially formed baby bird.\`   - It stares back at you with eyes like black marbles.\`   - Then you notice the teeth.`,
            `- Children with sunken eyes and rotted teeth chant, "SACRIFICE, SACRIFICE".\`   - They push you, you fall.\`   - Their faces fade in the distance.\`   - You keep falling.`,
            `- You trudge through a landscape blanketed in bones.\`   - They snap and crunch underfoot.\`   - Drifts of them knee deep and pulling you gradually under.\`   - They rattle as you descend.`,
            `- You walk towards the horizon.\`   - You pass a burning car and the air is thick with malodorous smog.\`   - Your skeleton stops walking and is left behind.\`   - Your shadow tells you your real bones have been replaced.`,
            `- You are in a pool.\`   - The water is warm.\`   - Tropical fish peck away at you.\`   - Each bite is a papercut.\`   - You feel your legs gradually vanishing one small bite at a time.\`   - You can't see an exit.`,
            `- You are lying on the beach tangled in nets.\`   - The tide keeps rising up towards your face, gradually but inexorably.\`   - Gulls squabble and circle in the baking sun.`,
            `- Your face is smothered in kisses, teeth scraping your brow.\`   - A sudden rough bite and pull on the cheek until it tears, leaving a hole.\`   - A tongue presses the fringes of the new oriface.`,
            `- You walk on broken glass, barefoot.\`   - The wet cracking of the shards is your only companion save a floating red lantern illuminating the seemingly endless expanse of glass.`,
            `- The person talking to you is so unpleasant the world seems to curdle from the rancidness of their presence.\`   - Their hand is on your knee.`,
            `- A robot regards you.\`   - It mirrors your motions.\`   - It mimics your emotions.\`   - It takes your name.`,
            `- You feel sick, feverish, desperate.\`   - The bullet lodged in your gut is necrotizing too fast, spiderwebs of dying, blackened, leaking flesh.`,
            `- You are digging up a skeleton, the bones are impossibly fine, elegant even.\`   - The face long and gaunt, mournful.\`   - The wings so wide they consume the sky.`,
            `- The hammer feels momentous, pitted surface spattered with rust.\`   - You see the children with lamb's faces.\`   - You silence their frenzied bleating.`,
            `- You bleed the pigs.\`   - All of them.\`   - In their fine jewelry and spotless dinner jackets.`,
            `- The bolt cutters pass through your joints roughly.\`   - The end announced by a smooth click.\`   - Your finger is discarded into the bucket.\`   - The bucket chews noisily.`,
            `- You claw at the glass, your husk withering.\`   - They dispassionately take notes on clipboards.\`   - You desiccate and blow away in a fine spray of dust.\`   - They nod, approving.`,
            `- The Leviathan blots out the sun.\`   - The air ruptures as it breathes in.\`   - Its multifaceted eyes gaze upon you uncomprehendingly.`,
            `- Unnaturally white teeth grin at you, gleaming.\`   - The smile is forced.\`   - The laughter is a blade dragged against glass.`,
            `- The sky is an ink black horizon of tentacles and blazing vermilion eyes.\`   - It falls upon you like an avalanche.\`   - Tentacles force their way into your eyes, your mouth, down your throat.\`   - Your need is not slaked.`,
            `- Your hands are bound behind your back.\`   - The burlap over your head is tight, sucking in with your breath - the smell of kerosene overpowering.\`   - You feel wet, tired.\`   - You hear the scratch of a match being struck.`,
            `- You clip your nails.\`   - You keep clipping them.\`   - It won't stop.\`   - You see bone.`,
            `- You're at the end of the dock.\`   - Everything stinks of salt and rotting fish.\`   - Your feet squelch pointlessly in the concrete.\`   - They smoke cigarettes and leer at you.\`   - They're coming over to push you.`,
            `- You follow the woman in the red damask dress through the hedge maze.\`   - She's just out of reach.\`   - Her scent, peach blossoms, wafts behind her.\`   - You corner her.\`   - She turns around.\`   - There is no face, just a sunken pit with fleshy teeth.`,
            `- Scabrous rats - wounds dripping with pus - crawl all over you.\`   - They smother you with their wet, stinking bodies, force your way into your mouth and explore you.\`   - Where are your arms?`,
            `- You drive the nails into your leg.\`   - 1-2-3-4...99-100.\`   - Aghast, you realize your pattern isn't symmetrical.\`   - You pry them out and start again - perfect this time.`,
            `- You see sharks circling in the wine dark sea.\`   - You are bleeding.\`   - It won't stop.`,
            `- The ship controls won't respond, all the systems are down.\`   - You are slowly drifting towards a sun.\`   - You perspire, your hands slipping as you struggle to stop the ponderous drift.`,
            `- You are beneath an immense pendulum.\`   - With each swing, you feel years drain away.\`   - Your teeth disintegrate, your nails grow and twist, your vision dims, your hair becomes dust.`,
            `- Your arms are dragged in opposite directions as they are fed into gears.\`   - You feel the crushing weight and the tears forming in your muscles.\`   - Everything reeks of grease and rust.`,
            `- The airlock is slowly opening.\`   - Behind the glass they point and laugh.\`   - Your face is wet with tears.\`   - They enjoy slices of cake.`,
            `- You are engulfed in flame.\`   - No one seems to notice.\`   - Even when you touch them, spreading the flame.\`   - Vacant eyes.`,
            `- You're bleeding from the mouth.\`   - Ropes of it suspended from your lips.\`   - The viscera moving of its own accord.`,
            `- You are crouched behind a crate.\`   - Pinned down by automatic arms fire.\`   - You can't clear the jam.`,
            `- There's a pulse grenade in your hands.\`   - You can't remember how to throw, your fingers are useless.\`   - Everyone is disappointed.`,
            `- The mouth in your torso is hungry.\`   - It wants your friends.\`   - There are rewards for compliance.`,
            `- The conversation is charming, civil, courteous.\`   - The problem is they're holding your hand in acid.`,
            `- A drill descends towards your eye.\`   - The whirr fills the air, gives it texture.\`   - They ask how you are feeling.`,
            `- No matter how many volts you deliver to the subject, he won't divulge the information.\`   - He can't last much longer, you hope.\`   - They are getting impatient.`,
            `- Your lips are being sewed shut.\`   - The needle dances in and out.\`   - There is something in your throat: you deserve this.`,
            `- You tear wrapping paper desperately from the gifts, shredded colorful paper piles up to your knees.\`   - The antidote is in one of these.\`   - It has to be.`,
            `- They deliver shocks to you.\`   - They ask you to prove you aren't a machine.\`   - They don't believe you.`,
            `- The snake is swallowing you.\`   - Everything smells of offal and carrion.\`   - It moves up your legs, relentless, devouring.`,
            `- Your fingers split and mutate into baby hands.\`   - The new hands repeat the process.\`   - They hands are getting heavy.`,
            `- Your arms become snakes.\`   - The snakes start biting you.\`   - You reach out towards your friends, to share.`,
            `- The walls are closing in.\`   - Only when you close your eyes.\`   - Remain vigilant.`,
            `- You keep trying to scoop your guts back in; glistening ropes of your intestines wriggling and slipping in your hands.\`   - You've shoveled so much in.\`   - There should be an end to this.`,
            `- It is hot.\`   - It is dark.\`   - It is cramped.\`   - It is dusty.\`   - You are trapped.`,
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
            `Gloves, Leather`,
            `Pamphlet: Zen and the Art of Cargo Arrangement`,
            `Pictorial Pornography, Dogeared, Well Thumbed`,
            `Brass Knuckles`,
            `Fuzzy Handcuffs`,
            `Journal of Grudges`,
            `Stylized Cigarette Case`,
            `Ball of Assorted Gauge Wire`,
            `Spanner`,
            `Switchblade, Ornamental`,
            `Green Apple Cigarettes, One Remaining`,
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
        // this.type = type;
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
            big_five: {
                Openness: ['LOW`      - Appreciates routine, practicality, established ideas.`      - Uninterested in abstractions, imagination or fantasy.`      - Gains fulfillment through perseverance.`      - Potentially characterized as pragmatic and data-driven.`      - Sometimes dogmatic and closed-minded.', 'HIGH`      - Appreciates art, emotion, adventure, unusual ideas.`      - High desire for imagination, curiosity, and variety of experience.`      - Intellectually curious.`      - Willing to try new things.`      - Likely to hold unconventional beliefs.`      - Potentially unpredictable and lacking focus.`      - Likely to engage in risky behavior or drug-taking.`      - Seeks self-actualization by seeking out intense, euphoric experiences.'][this.rollDie(2)-1],
                Conscientiousness: ['LOW`      - Flexibile and spontaneous.`      - Easy-going, relaxed.`      - Likely to act on personal impulses.`      - Preference for improvisation over planned behaviour.`      - May be described as sloppy or unreliable.`      - Potentially erratic.', 'HIGH`      - Self-disciplined, dutiful.`      - Strives for achievement against measures or outside expectations.`      - Likely to control, regulate, and direct personal impulses.`      - Potentially perceived as stubborn and/or focused.`      - Preference for planned rather than spontaneous behavior.'][this.rollDie(2)-1],
                Extroversion: ['LOW`      - Low social engagement and energy levels.`      - Described as quiet, low-key, deliberate, and less involved in the social world.`      - Lack of social involvement should not be confused with shyness or depression.`      - Independent of social world.`      - Needs minimal stimulation but requires time alone.`      - Reserved in social situations.', 'HIGH`      - Emotionally reactive to external activity/situations.`      - Pronounced engagement with the external world.`      - Enjoys interacting with people.`      - Perceived as full of energy.`      - Tends to be enthusiastic and action-oriented.`      - High group visibility.`      - Dominant in social settings.`      - Likes to talk, and assert themselves.'][this.rollDie(2)-1],
                Agreeableness: ['LOW`      - Places self-interest above getting along with others.`      - Generally unconcerned with others\' well-being, and unlikely to extend themselves for other people.`      - Skepticism about others\' motives causes suspicion, unfriendliness, and uncooperativeness.`      - Often competitive and/or challenging.`      - Potentially seen as argumentative or untrustworthy.', 'HIGH`      - Values getting along with others.`      - Generally considerate, kind, generous, trusting and trustworthy.`      - Seen as helpful, and willing to compromise their interests for others.`      - Has an optimistic view of human nature.'][this.rollDie(2)-1],
                Neuroticism: ['LOW`      - Hard to upset, low emotional reactivity.`      - Tends to be calm, emotionally stable, and free from persistent negative feelings.`      - Tends not to experience emotions in extreme highs and extreme lows.`      - Described as calm, level-headed, and optimistic.`      - Able to think clearly under stress.`      - Often sought out for guidance.', 'HIGH`      - Tends to experience negative emotions, such as anxiety, worry, fear, anger, frustration, envy, jealousy, guilt and loneliness.`      - Emotionally unstable, reactive and vulnerable to stress.`      - Flippant in the way they express emotion.`      - Likely to interpret ordinary situations as threatening, and minor frustrations as hopelessly difficult.`      - Often in a bad mood.`      - Potential problems with thinking clearly, making decisions, and coping effectively with stress.'][this.rollDie(2)-1],
            },
            moods: chance.pickset(moods, 3),
            descriptions: chance.pickset(descriptions, 3),
            stress: 2,
            resolve: 0,
        };
        switch (this.type) {
            case "npc":
                this.name = chance.name({ middle: 'true', prefix: 'true'});
                this.medical = {
                    age: chance.age(),
                    past: [],
                    current: []
                }
                this.weapons = weapons.filter(weapon => weapon["COST"] <= 500);
                this.attachments = attachments.filter(attachment => attachment["COST"] <= 600);
                this.clothing = chance.pickone(clothing.CLOTHING);
                this.vest = {
                    rating: chance.pickone(clothing.ARMOUR.PLATE.RATING.slice(0, 2)),
                    plate: chance.pickone(clothing.ARMOUR.PLATE.MATERIAL.slice(0, 2)),
                    style: chance.pickone(clothing.ARMOUR.VEST.STYLE.filter(style => style["COST"] <= 500)),
                    material: chance.pickone(clothing.ARMOUR.VEST.MATERIAL.filter(material => material["COST"] <= 500))
                };
                this.accessory = chance.pickset(clothing.ACCESSORY);
                this.weapon = chance.pickset(this.weapons);
                this.attachment = chance.pickset(this.attachments);
                break;
            case "soldier":
                this.name = chance.name({ middle: 'true', prefix: 'true', gender: 'male' });
                this.medical = {
                    age: chance.age({ type: 'adult' }),
                    past: [],
                    current: []
                }
                this.weapons = weapons.filter(weapon => weapon["COST"] <= 1000 && weapon["COST"] >= 500);
                this.attachments = attachments.filter(attachment => attachment["COST"] <= 750);
                this.clothing = clothing.CLOTHING[2];
                this.vest = {
                    rating: chance.pickone(clothing.ARMOUR.PLATE.RATING.slice(1, 4)),
                    plate: chance.pickone(clothing.ARMOUR.PLATE.MATERIAL.slice(1, 4)),
                    style: chance.pickone(clothing.ARMOUR.VEST.STYLE),
                    material: chance.pickone(clothing.ARMOUR.VEST.MATERIAL)
                };
                this.accessory = chance.pickset(clothing.ACCESSORY, 2);
                this.weapon = [chance.pickone(this.weapons), chance.pickone(this.weapons.filter(weapon => weapon["TYPE"] == "PISTOL"))];
                // console.log(this.weapon)
                this.attachment = chance.pickset(this.attachments, 3);
                break;
            default:
                this.name = chance.name({ middle: 'true', prefix: 'true', gender: 'male' });
                this.medical = {
                    age: chance.age({ type: 'adult' }),
                    past: [],
                    current: []
                }
                this.weapons = weapons.filter(weapon => weapon["COST"] <= 200 && weapon["COST"] >= 50);
                this.attachments = attachments.filter(attachment => attachment["COST"] <= 200 && attachment.COMPATIBILITY.includes(this.weapons[0].TYPE));
                this.clothing = chance.pickone(clothing.CLOTHING);
                this.vest = {
                    rating: chance.pickone(clothing.ARMOUR.PLATE.RATING.slice(0, 2)),
                    plate: chance.pickone(clothing.ARMOUR.PLATE.MATERIAL.slice(0, 2)),
                    style: chance.pickone(clothing.ARMOUR.VEST.STYLE.filter(style => style["COST"] <= 500)),
                    material: chance.pickone(clothing.ARMOUR.VEST.MATERIAL.filter(material => material["COST"] <= 500))
                };
                this.accessory = chance.pickset(clothing.ACCESSORY);
                this.weapon = chance.pickset(this.weapons);
                this.attachment = chance.pickset(this.attachments);
                break;
        }
        this.generate();
    }

    setStat(stat, value) {
        if (!(stat in this.stats)) return;

        if (value >= 3) {
            {
                if (value <= 18) {
                    this.stats[stat].score = value;
                } else {
                    this.stats[stat].score = 18;
                }
            }
        } else {
            this.stats[stat].score = 3;
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
        this.currentSkills = chance.pickset(this.skills, 2);
        this.currentSkills.push('UNSPECIFIED SPECIALISATION');
        // console.log(this.weapon);
        for (var i = 0; i < this.weapon.length; i++){
            // console.log(this.weapon[i])
            this.loadout += `   - ${this.weapon[i]["WEAPON"]}\``;
            for (var key in this.weapon[i]) {
                if (key != "COST" && key != "NAME" && key != "WEAPON" && key != "AVG DAM" && key != "AUTO" && key != "BURST" && this.weapon[i][key] != "N/A" && this.weapon[i][key] != "N") {
                    this.loadout += `      - ${key.padEnd(13, ' ')}:    ${String(this.weapon[i][key]).padStart(3, ' ')} \``;
                }
            }
        }
        this.loadout += `      - ATTACHMENTS\``;
        for (var i = 0; i < this.attachment.length; i++) {
            this.loadout += `         - ${this.attachment[i].NAME.padEnd(13, ' ')}\``
            for (var key in this.attachment[i]) {
                if (key != "COST" && key != "NAME" && key != "COMPATIBILITY") {
                    this.loadout += `            - ${key.padEnd(7, ' ')}:    ${String(this.attachment[i][key]).padStart(3, ' ')} \``;
                }
            }
        }

        this.loadout += `   - ${this.clothing["NAME"]}\``;
        for (var key in this.clothing) {
            if (key != "COST" && key != "NAME") {
                this.loadout += `      - ${key.padEnd(13, ' ')}:    ${String(this.clothing[key]).padStart(3, ' ')} \``;
            }
        }
        for (var i = 0; i < this.accessory.length; i++) {
            this.loadout += `   - ${this.accessory[i]["NAME"]}\``;
            for (var key in this.accessory[i]) {
                if (key != "COST" && key != "NAME") {
                    this.loadout += `      - ${key.padEnd(13, ' ')}:    ${String(this.accessory[i][key]).padStart(3, ' ')} \``;
                }
            }
        }


        this.loadout += `   - ${this.vest.rating.NAME} ${this.vest.plate.NAME} VEST [${this.vest.style.NAME}, ${this.vest.material.NAME}]\``
        this.loadout += `      - ${'AP'.padEnd(13, ' ')}:    ${String(Math.max(0, Number(this.vest.rating.AP) + Number(this.vest.plate.AP) + Number(this.vest.style.AP) + Number(this.vest.material.AP))).padStart(3, ' ')}\``
        this.loadout += `      - ${'ENC'.padEnd(13, ' ')}:    ${String(Math.max(0, Number(this.vest.rating.ENC) + Number(this.vest.plate.ENC) + Number(this.vest.style.ENC) + Number(this.vest.material.ENC))).padStart(3, ' ')}\``

        for (var key in this.vest) {
            if (this.vest[key].SPECIAL != "") {
                this.loadout += `      - ${this.vest[key].SPECIAL}\``;
            }
        }

        this.loadout += `   - spare mags (${chance.d4() - 1})\``
        this.loudout += `   - ${['machete', 'scalpel', 'crowbar'][this.rollDie(3) - 1] }\``;
        this.loadout += `   - ${['flare gun', 'Binoculars', 'Flashlight'][this.rollDie(3) - 1]}\``;
        this.loadout += `   - ${['IFAK', 'METATOOL', 'SURVIVAL KIT'][this.rollDie(3) - 1]}\``;
        this.loadout += `   - SLURRY PACK (3)\``
        this.loadout += `   - 24HR AIR FILTER (3)\``
        this.loadout += `   - CREDSTICK (${chance.d100() * 30}CR)\``
        var drug = chance.pickone(drugs);
        this.loadout += `   - ${chance.pickone(['Automed (2)', 'Pain pills (2)'])}\``;
        this.loadout += `   - ${drug["DRUG"]} (2)\``;
        this.loadout += "   - stimpak\`";

        this.patch = this.patches[chance.d100() -1];
        this.nightmare = this.nightmares[chance.d100() -1];
        this.trinket = this.trinkets[chance.d100() -1];

        this.loadout += `   - patch: ${this.patch}\``;
        this.loadout += `   - trinket: ${this.trinket}\``;
        this.health = this.rollDie(6)
        this.health += Number(this.stats.Constitution.bonus);
        this.health = Math.max(1, this.health);

        for (var i = 0; i < 2; i++) {
                this.medical.past.push(chance.pickone(icd.chapters))
        };
        for (var i = 0; i < 1; i++) {
                this.medical.current.push(chance.pickone(icd.chapters))
        };

        this.saves.physical = 15 - Math.max(this.stats.Strength.bonus, this.stats.Constitution.bonus);
        this.saves.mental = 15 - Math.max(this.stats.Wisdom.bonus, this.stats.Charisma.bonus);
        this.saves.evasion = 15 - Math.max(this.stats.Dexterity.bonus, this.stats.Intelligence.bonus);
        this.output = "\`// HEILIKON PERSONNEL RECORD\`";

        this.output += `   - ${this.name}\``;
        this.output += `   - ${chance.profession()}\``;
        this.output += `// Stat profile\``;
        for (var key in this.stats){
            this.output += `   - ${key.padEnd(16, ' ')}:    ${String(this.stats[key].score).padStart(3, ' ')} ${this.stats[key].bonus}\``;
        }
        this.output += `// Skillset\``;
        for (var i = 0; i < this.currentSkills.length; i++){
            this.output += `   - ${this.currentSkills[i]}\``;
        }
        this.output += `// Loadout\``;
        this.output += `${this.loadout}`;
        this.output += `// Medical history\``;
        this.output += `   - ${'HP'.padEnd(16, ' ')}:    ${String(this.health).padStart(3, ' ')}\``;
        this.output += `   - ${'STRESS'.padEnd(16, ' ')}:    ${String(this.pyschology.stress).padStart(3, ' ')}\``;
        this.output += `   - ${'RESOLVE'.padEnd(16, ' ')}:    ${String(this.pyschology.resolve).padStart(3, ' ')}\``;
        this.output += `   - ${'Saves'}\``;
        this.output += `      - ${'Physical'.padEnd(13, ' ')}:    ${String(this.saves.physical).padStart(3, ' ')}\``;
        this.output += `      - ${'Mental'.padEnd(13, ' ')}:    ${String(this.saves.mental).padStart(3, ' ')}\``;
        this.output += `      - ${'Evasion'.padEnd(13, ' ')}:    ${String(this.saves.evasion).padStart(3, ' ')}\``;
        this.output += `   - ${'Age'.padEnd(16, ' ')}:    ${String(this.medical.age).padStart(3, ' ')}\``;
        this.output += `   - Past Conditions\``;
        if (this.medical.past.length > 0) {
            for (var i = 0; i < this.medical.past.length; i++){
                this.output += `      - ${this.medical.past[i].name}\``;
                var block = chance.pickone(this.medical.past[i].blocks)
                var disease = chance.pickone(block.diseases)
                this.output += `         - ${block.name}\``;
                this.output += `            - ${disease.code}: ${disease.name} \``;
                if (disease.diseases != undefined && disease.diseases.length != 0) {
                    var condition = chance.pickone(disease.diseases);
                    this.output += `               - ${condition.code}: ${condition.name}\``;
                }
            }
        } else {
            this.output += `      - NONE\``;
        }

        this.output += `   - Current Conditions\``;
        if (this.medical.current.length > 0) {
            for (var i = 0; i < this.medical.current.length; i++){
                this.output += `      - ${this.medical.current[i].name}\``;
                var block = chance.pickone(this.medical.current[i].blocks)
                var disease = chance.pickone(block.diseases)
                this.output += `         - ${block.name}\``;
                this.output += `            - ${disease.code}: ${disease.name} \``;
                if (disease.diseases != undefined && disease.diseases.length != 0) {
                    var condition = chance.pickone(disease.diseases);
                    this.output += `               - ${condition.code}: ${condition.name}\``;
                }

            }
        } else {
            this.output += `      - NONE\``;
        }

        this.output += `// Appearance\``
        this.output += `   @2`
        this.output += `// Psychology\``;
        this.output += `// Favourite quote\``;
        this.output += `   - ${chance.pickone(quotes)}\``;
        this.output += `// Most recent nightmare\``;
        this.output += `   ${this.nightmare}\``;
        this.output += `// Personality profile\``
        this.output += `   - recent moods\``
        for (var i = 0; i < this.pyschology.moods.length; i++){
            this.output += `      - ${this.pyschology.moods[i]}\``;
        }
        this.output += `   - descriptions\``
        for (var i = 0; i < this.pyschology.descriptions.length; i++){
            this.output += `      - ${this.pyschology.descriptions[i]}\``;
        }
        for (var key in this.pyschology.big_five){
            this.output += `   - ${key}: ${this.pyschology.big_five[key]}\``;
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