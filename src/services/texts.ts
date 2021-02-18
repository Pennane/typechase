import { Text } from '../typechase'

const texts = [
    `Always look on the bright side of life. Always look on the light side of life. If life seems jolly rotten, there's something you've forgotten, and that's to laugh and smile and dance and sing. When you're feeling in the dumps, don't be silly chumps; just purse your lips and whistle, that's the thing.`,
    `All right, but apart from the sanitation, medicine, education, wine, public order, irrigation, roads, the fresh water system and public health, what have the Romans ever done for us`,
    `Whenever life gets you down, Mrs. Brown, and things seem hard or tough, and people are stupid, obnoxious, or daft, and you feel that you've had quite enough, just remember that you're standing on a planet that's evolving, and revolving at 900 miles an hour. That's orbiting at 90 miles a second, so it's reckoned, a sun that is the source of all our power. The sun and you and me and all the stars that we can see are moving a million miles a day in an outer spiral arm at 40,000 miles an hour in a galaxy we call the Milky Way.`,
    `Arthur: The Lady of the Lake, her arm clad in the purest shimmering samite held aloft Excalibur from the bosom of the water, signifying by divine providence that I, Arthur, was to carry Excalibur. That is why I am your king! Dennis: Listen, strange women lying in ponds distributing swords is no basis for a system of government. Supreme executive power derives from a mandate from the masses, not from some farcical aquatic ceremony.`,
    `All right, but apart from the sanitation, the medicine, education, wine, public order, irrigation, roads, the fresh-water system, and public health, what have the Romans ever done for us?`,
    `And as the Black Beast lurched forward, escape for Arthur and his knights seemed hopeless, when suddenly, the animator suffered a fatal heart attack!`,
    `The Lady of the Lake, her arm clad in the purest shimmering samite held aloft Excalibur from the bosom of the water, signifying by divine providence that I, Arthur, was to carry Excalibur. That is why I am your king.`,
    `And Saint Attila raised the hand grenade up on high, saying, 'O Lord, bless this thy hand grenade, that with it thou mayst blow thine enemies to tiny bits in thy mercy.' And the Lord did grin. And the people did feast upon the lambs and sloths and carp and anchovies and orangutans and breakfast cereals and fruit bats and large chunks...`,
    `This new learning amazes me, Sir Bedevere. Explain again how sheep's bladders may be employed to prevent earthquakes.`,
    `We're knights of the Round Table, we dance whene'er we're able. We do routines and chorus scenes with footwork impeccable. We dine well here in Camelot. We eat ham and jam and Spam a lot.`,
    `You fight with the strength of many men Sir Knight. I am Arthur, King of the Britons. I seek the finest and the bravest Knights in the land to join me in my court at Camelot. You have proved yourself worthy. Will you join me? You make me sad. So be it. Come Patsy.`,
    `Once in a lifetime there comes a motion picture which changes the whole history of motion pictures. A picture so stunning in its effect, so vast in its impact that it profoundly affects the lives of all who see it.`,
    `I don't want to talk to you no more, you empty-headed animal food trough wiper! I fart in your general direction! Your mother was a hamster and your father smelt of elderberries!`,
    `We're knights of the Round Table, we dance whene'er we're able. We do routines and chorus scenes with footwork impeccable. We dine well here in Camelot. We eat ham and jam and Spam a lot. We're knights of the Round Table, our shows are formidable. But many times we're given rhymes that are quite unsingable. We're opera mad in Camelot, we sing from the diaphragm a lot. In war we're tough and able, quite indefatigable. Between our quests we sequin vests and impersonate Clark Gable. It's a busy life in Camelot. I have to push the pram a lot.`,
    `You don\'t frighten us, English pig dogs. Go and boil your bottoms, you sons of a silly person. I blow my nose at you, so-called "Arthur King," you and all your silly English Knights.`,
    `Oh, what sad times are these when passing ruffians can say Ni at will to old ladies. There is a pestilence upon this land, nothing is sacred. Even those who arrange and design shrubberies are under considerable economic stress in this period in history.`,
    `Everyone said I was daft to build a castle on a swamp, but I built it all the same, just to show them. It sank into the swamp. So I built a second one. That sank into the swamp. So I built a third. That burned down, fell over, then sank into the swamp. But the fourth one stayed up. And that's what you're going to get, Lad, the strongest castle in all of England.`,
    `King, eh? Very nice. And how'd you get that, eh? By exploiting the workers. By hanging on to outdated imperialist dogma which perpetuates the economic and social differences in our society.`,
    `Everyone said I was daft to build a castle on a swamp, but I built it all the same, just to show them. It sank into the swamp. So I built a second one. That sank into the swamp. So I built a third. That burned down, fell over, then sank into the swamp. But the fourth one stayed up!`,
    `It's hard to believe when your mind is lost and in need, and all you can picture is a memory inside of someone else's sheets. A prayer that nothing will keep; a hope that light will seek before the dark sinks too deep, or at least the sinking feeling inside of me will decrease when the release of perceived dreams burn in the flame of feeling free.`,
    `Come ride with me through the veins of history. I'll show you how god falls asleep on the job. And how can we win when fools can be kings. Don't waste your time or time will waste you.`,
    `Time grabs you by the wrist, directs you where to go. So make the best of this test, and don't ask why; it's not a question, but a lesson learned in time. It's something unpredictable, but in the end it's right. I hope you had the time of your life.`,
    `Here comes the rain again, falling from the stars. Drenched in my pain again, becoming who we are. As my memory rests but never forgets what I lost. Wake me up when September ends.`,
    `Summer has come and passed. The innocent can never last. Wake me up when September ends. Ring out the bells again like we did when spring began.`,
    `Any finite number divided by infinity is as near to nothing as makes no odds, so the average population of all the planets in the Universe can be said to be zero. From this it follows that the population of the whole Universe is also zero, and that any people you may meet from time to time are merely the products of a deranged imagination.`,
    `Space is big. Really big. You just won't believe how vastly hugely mindbogglingly big it is. I mean you may think it's a long way down the road to the chemist, but that's just peanuts to space.`,
    `Well, I mean, yes idealism, yes the dignity of pure research, yes the pursuit of truth in all its forms, but there comes a point I'm afraid where you begin to suspect, that the entire multidimensional infinity of the Universe is almost certainly being run by a bunch of maniacs. And if it comes to a choice between spending yet another ten million years finding that out, and on the other hand just taking the money and running, then I for one could do with the exercise.`,
    `Bypasses are devices that allow some people to dash from point A to point B very fast while other people dash from point B to point A very fast. People living at point C, being a point directly in between, are often given to wonder what's so great about point A that so many people from point B are so keen to get there, and what's so great about point B that so many people from point A are so keen to get there. They often wish that people would just once and for all work out where the hell they wanted to be.`,
    `The ships hung in the sky in much the same way that bricks don't.`,
    `They often wish that people would just once and for all work out where the hell they wanted to be.`,
    `here is a theory which states that if anybody ever discovers exactly what the Universe is for and why it is here, it will instantly disappear and be replaced by something even more bizarre and inexplicable. There is another theory which states that this has already happened.`,
    `There is a theory which states that if anybody ever discovers exactly what the Universe is for and why it is here, it will instantly disappear and be replaced by something even more bizarre and inexplicable.`,
    `I wish I was like you, easily amused. Find my nest of salt. Everything is my fault. I'll take all the blame. Aqua seafoam shame. Sunburn with freezer burn. Choking on the ashes of her enemy. In the sun. In the sun I feel as one. In the sun. In the sun. Married, married, married! Buried!`,
    `Traveling through hyperspace ain't like dusting crops, boy! Without precise calculations we could fly right through a star, or bounce too close to a supernova and that'd end your trip real quick, wouldn't it?`,
    `Let the past die. Kill it, if you have to. That's the only way to become what you are meant to be.`,
    `My turn. Kwyjibo. K-W-Y-J-I-B-O, 22 points, plus triple word score, plus 50 points for using all my letters. Game's over, I'm outta here.`,
    `Who lives in a pineapple under the sea? Spongebob Squarepants!`,
    `She wants me to take responsibility for everything that went wrong in our relationship! She goes on for five pages about how I was "unfaithful" to her! We were on a break!`,
    `It's so relieving to know that you're leaving as soon as you get paid. It's so relaxing to hear you're asking wherever you get your way. It's so soothing to know that you'll sue me, this is starting to sound the same. I miss the comfort in being sad.`,
    `I'll have two number 9s, a number 9 large, a number 6 with extra dip, a number 7, two number 45s, one with cheese, and a large soda.`,
    `There's only one religion: The Funk, and only one language: The Funk. And only one hairstyle: The Funk. All I've eaten for the last ten years has been The Funk. And when I go to the bathroom, guess what I do? I do The Funk. Doo-doo The Funk, y'all!`,
    `Look! If you had one shot, or one opportunity, to seize everything you ever wanted, in one moment, would you capture it? Or just let it slip?`,
    `If I have to hear one more time that you did this for the family...`,
    `You clearly don't know who you're talking to, so let me clue you in. I am not in danger, I am the danger.`,
    `You clearly don't know who you're talking to, so let me clue you in. I am not in danger, Skyler. I am the danger. A guy opens his door and gets shot and you think that of me? No. I am the one who knocks!`,
    `If you're committed enough, you can make any story work. I once told a woman I was Kevin Costner, and it worked because I believed it.`,
    `And the waitress is practicing politics as the businessmen slowly get stoned. Yes, they're sharing a drink they call loneliness but it's better than drinking alone.`,
    `Pressure pushing down on me. Pressing down on you, no man ask for. Under pressure that burns a building down. Splits a family in two. Puts people on streets.`,
    `Look up here, man, I'm in danger. I've got nothing left to lose. I'm so high it makes my brain whirl. Dropped my cell phone down below. Ain't that just like me?`,
    `Holy Diver. You've been down too long in the midnight sea. Oh what's becoming of me. Ride the tiger. You can see his stripes but you know he's clean. Oh don't you see what I mean. Gotta get away. Holy Diver, yeah. Shiny diamonds. Like the eyes of a cat in the black and blue. Something is coming for you`,
    `Is this the real life? Is this just fantasy? Caught in a landslide, no escape from reality. Open your eyes, look up to the skies and see. I'm just a poor boy, I need no sympathy. Because I'm easy come, easy go, little high, little low. Any way the wind blows doesn't really matter to me.`,
    `I see a little silhouetto of a man. Scaramouche, Scaramouche, will you do the Fandango? Thunderbolt and lightning, very, very fright'ning me. Galileo, Galileo, Galileo, figaro, magnifico. I'm just a poor boy, nobody loves me. He's just a poor boy from a poor family. Spare him his life from this monstrosity.`,
    `Once you free your mind about a concept of harmony and music being correct you can do whatever you want. So, nobody told me what to do, and there was no preconception of what to do.`,
    `Last night, I had a dream about you. In this dream I'm dancing right beside you, and it looked like everyone was having fun; the kind of feeling I've waited so long.`,
    `I know you don't get a chance to take a break this often. I know your life is speeding and it isn't stopping. Here, take my shirt and just go ahead and wipe up all sweat, sweat, sweat. Lose yourself to dance.`,
    `Ra, Ra, Rasputin: Lover of the Russian Queen. There was a cat that really was gone. Ra, Ra, Rasputin: Russia's greatest love machine. It was a shame how he carried on.`,
    `It costs 20 US dollars.`,
    `Business men say association association.`,
    `It is during our darkest moments that we must focus to see the light.`,
    `Whoever is happy will make others happy too.`,
    `You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.`,
    `The real test is not whether you avoid this failure, because you won't. It's whether you let it harden or shame you into inaction, or whether you learn from it; whether you choose to persevere.`,
    `Here's Johnny!`,
    `Keep your friends close, but your enemies closer.`,
    `Come as you are, as you were, as I want you to be. As a friend, as a friend, as a known enemy. Take your time, hurry up. The choice is yours, don't be late. Take a rest as a friend, as an old memoria.`,
    `Can I get a kiss? And can you make it last forever? I said I'm 'bout to go war, and I don't know if I'ma see you again.`,
    `So go and dance yourself clean. Go and dance yourself clean, yeah. You're blowing Marxism to pieces. Baby, they're arguments, the pieces.`,
    `Living life like this, hope little Bobby never fight like this. Stab a dude with a knife like this. All about the money on a night like this. Run up in the crib, put a bullet in your rib.`,
    `Oh my baby how beautiful you are. Oh my darling completely torn apart. You´re gone with the sin my baby and beautiful you are. So gone with the sin my darling.`,
    `Don't touch me sussie boy heard you need a bandage. Glance at my bank statement, think I really manage. These chains a couple 'k' yeah I do this every day. Let me pull up on your bih I'm kinda cutthroat`,
    `I'm too tired to be bored. I'm too bored to be tired. And the silence is so deafening. It's like picking at a sore. I'm too mental to go crazy. I'm too drunk to be pure.And my mind is playing tricks on me. And I can't sleep tonight 'cause I'm so tired.`,
    `In the beginning God created the heavens and the earth. Now the earth was formless and empty, darkness was over the surface of the deep, and the Spirit of God was hovering over the waters.`,
    `And God said, “Let there be light,” and there was light. God saw that the light was good, and he separated the light from the darkness. God called the light “day,” and the darkness he called “night.” And there was evening, and there was morning—the first day.`,
    `I was religious as a little boy. Couple of poems to God that I wrote. Didn't eat a apple 'til I was ten. And I wished I was on Noah's boat. Really thought Moses would like me. I bet he would laugh at all my jokes.`,
    `Only thing that really stuck with me, and sticks with me, is this: God created the world. He put so much work until he got it. But on that 7th day, he did what the frick he wanted.`,
    `Banjo's great on repeat. The kids want to play but they'll have to be patient. The wife can't help tapping her feet. It's a genuine home entertainment revelation.`,
    `I'm calling, I'm calling. Calling on you to say. I want you, I want you. Baby, all night, all day. I want you, I want you. Different towns to run to. Baby come to me, ha-ha-ha. Giving talk to me.`,
    `We pulled up on a bunch of working girls and asked them what they working with. Look at me, I got the blunt in my mouth. Usually I'm drug-free, but, shit, I'm with the homies`,
    `She's a model and she's looking good. I'd like to take her home that's understood. She plays hard to get, she smiles from time to time. It only takes a camera to change her mind.`,
    `She's going out tonight but drinking just champagne and she has been checking nearly all the men. She's playing her game and you can hear them say. She is looking good, for beauty we will pay.`,
    `She's posing for consumer products now and then. For every camera she gives the best she can. I saw her on the cover of a magazine. Now, she's a big success, I want to meet her again.`,
    `New York, I love you but you're bringing me down. New York, you're safer and you're wasting my time. Our records all show you are filthy but fine.`,
    `Look through a faithless eye. Are you afraid to die? It scares the hell out of me and the end is all I can see.`,
    `I thought I had it all together but I was led astray the day you walked away.You were the clock that was ticking in my home. Changed my state of mind but love's so hard to find.`,
    `I love that woman. I love her more than sharks love blood.`,
    `From this moment on you are a rock. You absorb nothing, you say nothing, and nothing breaks you.`,
    `Power is a lot like real estate. It's all about location, location, location. The closer you are to the source, the higher your property value.`,
    `Friends make the worst enemies.`,
    `When the money's coming your way, you don't ask questions.`,
    `The road to power is paved with hypocrisy, and casualties. Never regret.`,
    `My left stroke just went viral. Right stroke put lil baby in a spiral. Soprano C, we like to keep it on a high note. Its levels to it, you and I know, bitch, be humble.`,
    `I'm sick and tired of being tired. Can't pick a side, the Gemini. Prophesize if we live or not. Promise momma not to fear nobody. Seen black turn em Burgundy`,
    `Pimping and posing, look what I drove in. Having these hoes and I know that I'm chosen. I live by the code and me and my bros. My dollars ain't folding, you was never the homie`,
    `Just promise me you'll tell this story when you make it big. And if I die before your album drop I hope`,
    `When the lights shut off and it's my turn to settle down. My main concern; promise that you will sing about me`,
    `Life to me like a box of chocolate. Quid pro quo, something for something, that's the obvious. Oh shit. Flow's so sick. Don't you swallow it. Biting my style, you're salmonella poison positive`,
    `I can just alleviate the rap industry politics. Milk the game up, never lactose intolerant`,
    `And once upon a time in a city so divine called West Side Compton, there stood a little ninja. He was five foot something. God bless the kid. Took his homie to the show and this is what they said.`
]

type TextTransformation = [RegExp | string, string]

const transformations: TextTransformation[] = [
    [/[\“\”\„\‟\〝\〞\〟\＂]/g, '"'],
    [/[\‘\’\‚\‛\＇]/g, "'"],
    [/(\r\n|\r|\n)/g, ' '],
    [/ {2,}/g, ' ']
]

const parseTexts = (texts: string[]): Text[] => {
    return texts.map((text, index) => {
        let parsedContent = text.trim()

        if (!parsedContent.endsWith('.')) {
            parsedContent = parsedContent.concat('.')
        }

        transformations.forEach((x) => (parsedContent = parsedContent.replaceAll(x[0], x[1])))

        return {
            id: String(index),
            content: parsedContent,
            description: 'a description',
            added: Date.now(),
            likes: 0,
            stats: {
                totalChases: 0,
                averageWpm: null,
                highestWpm: null
            }
        }
    })
}

const parsedTexts = parseTexts(texts)

export const getAll = (): Text[] => {
    return parsedTexts
}

export const getById = (id: string): Text | null => {
    const text = parsedTexts.find((text) => text.id === id)
    if (!text) return null
    return text
}
