// helper function to grab the img url of the passed role
// Pass a string role
// Return an image url corresponding to the passed role
/*
Assassin
Fighter
Mage
Marksman
Support
Tank
*/

export default function resolveRole(role){
    const str = role.toLowerCase();
    switch(str){
        case "assassin":
            return "https://universe.leagueoflegends.com/images/role_icon_assassin.png";
        case "fighter":
            return "https://universe.leagueoflegends.com/images/role_icon_fighter.png";
        case "mage":
            return "https://universe.leagueoflegends.com/images/role_icon_mage.png";
        case "marksman":
            return "https://universe.leagueoflegends.com/images/role_icon_marksman.png";
        case "support":
            return "https://universe.leagueoflegends.com/images/role_icon_support.png";
        case "tank":
            return "https://universe.leagueoflegends.com/images/role_icon_tank.png";
        default:
            return "https://universe.leagueoflegends.com/images/role_icon_tank.png"
    }
}