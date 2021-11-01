// An object containing all of my champion data

const origin = window.location.origin;

const championData = [
    {
        name: "Ahri",
        image: `${origin}/Images/avatars/Ahri_0.jpg`,
        title: "Nine-Tailed Fox",
        description: "cute fox go skrrt",
        role: "Mage",
        race: "Vastaya",
        region: "Ionia",
        position: "Mid",
        metrics: {
            agression: 7,
            laning: 6,
            cs: 5,
            teamFighting: 7
        }
    },
    {
        name: "Akali",
        image: `${origin}/Images/avatars/Akali_0.jpg`,
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
            teamFighting: 8
        }
    },
]

export default championData;