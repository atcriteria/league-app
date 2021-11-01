// An object containing all of my champion data

const origin = window.location.origin;

const championData = [
    {
        name: "Ahri",
        image: `${origin}/Images/avatars/ahri`,
        title: "Nine-Tailed Fox",
        description: "cute fox go skrrt",
        role: "Mage",
        race: "Vastaya",
        region: "Ionia",
        position: "Mid",
        metrics: {
            agreesion: 7,
            laning: 6,
            cs: 5,
            teamFighting: 7
        }
    },
]

export default championData;