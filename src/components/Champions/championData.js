// An object containing all of my champion data

const origin = window.location.origin;

const championData = [
    {
        name: "Ahri",
        image: `${origin}/Images/avatars/Ahri_0.jpg`,
        splash: `${origin}/Images/splashes/Ahri_0.jpg`,
        title: "Nine-Tailed Fox",
        description: "Innately connected to the magic of the spirit realm, Ahri is a mysterious fox-like vastaya in search of her place in the world. Having become a somewhat reluctant and empathetic predator since entering mortal society, she prefers to manipulate her prey’s emotions before partaking of their life essence—receiving flashes of memory and insight from each soul she consumes.",
        role: "Mage",
        race: "Vastaya",
        region: "Ionia",
        position: "Mid",
        metrics: {
            agression: 7,
            laning: 6,
            cs: 5,
            teamFighting: 7,
            impact: 8,
            mastery: 6
        }
    },
    {
        name: "Akali",
        image: `${origin}/Images/avatars/Akali_0.jpg`,
        splash: `${origin}/Images/splashes/Ahri_0.jpg`,
        title: "The Rogue Assassin",
        description: "The r34 princess",
        role: "Assassin",
        race: "Human",
        region: "Ionia",
        position: "Mid",
        metrics: {
            agression: 10,
            laning: 4,
            cs: 4,
            teamFighting: 8,
            impact: 6,
            mastery: 6
        }
    },
    {
        name: "Lux",
        image: `${origin}/Images/avatars/Lux_0.jpg`,
        splash: `${origin}/Images/splashes/Ahri_0.jpg`,
        title: "The Lady of Luminosity",
        description: "A real easy way to brighten anyones day.",
        role: "Mage",
        race: "Human",
        region: "Demacia",
        position: "Mid",
        metrics: {
            agression: 10,
            laning: 7,
            cs: 6,
            teamFighting: 8,
            impact: 8,
            mastery: 5
        }
    },
    {
        name: "Teemo",
        image: `${origin}/Images/avatars/Teemo_0.jpg`,
        splash: `${origin}/Images/splashes/Ahri_0.jpg`,
        title: "The Swift Scout",
        description: "The physical manifestation of Satan himself",
        role: "Marksman",
        race: "Yordle",
        region: "Bandle City",
        position: "Top",
        metrics: {
            agression: 10,
            laning: 7,
            cs: 7,
            teamFighting: 8,
            impact: 5,
            mastery: 7
        }
    },
    {
        name: "Vi",
        image: `${origin}/Images/avatars/Vi_0.jpg`,
        splash: `${origin}/Images/splashes/Ahri_0.jpg`,
        title: "The Piltover Enforcer",
        description: "If you hit a wall, just keep punching!",
        role: "Fighter",
        race: "Human",
        region: "Piltover",
        position: "Jungle",
        metrics: {
            agression: 10,
            laning: 5,
            cs: 5,
            teamFighting: 8,
            impact: 7,
            mastery: 6
        }
    },
]

export default championData;