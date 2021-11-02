// A helper function for resolving a champions mastery
// Pass the numerical mastery level
// Return the URL associated with the mastery icon

export default function resolveMastery(level){
    switch(level){
        case 1:
            return "https://static.wikia.nocookie.net/leagueoflegends/images/d/d8/Champion_Mastery_Level_1_Flair.png"
        case 2:
            return "https://static.wikia.nocookie.net/leagueoflegends/images/4/4d/Champion_Mastery_Level_2_Flair.png"
        case 3:
            return "https://static.wikia.nocookie.net/leagueoflegends/images/e/e5/Champion_Mastery_Level_3_Flair.png"
        case 4:
            return "https://static.wikia.nocookie.net/leagueoflegends/images/b/b6/Champion_Mastery_Level_4_Flair.png"
        case 5:
            return "https://static.wikia.nocookie.net/leagueoflegends/images/9/96/Champion_Mastery_Level_5_Flair.png"
        case 6:
            return "https://static.wikia.nocookie.net/leagueoflegends/images/b/be/Champion_Mastery_Level_6_Flair.png"
        case 7:
            return "https://static.wikia.nocookie.net/leagueoflegends/images/7/7a/Champion_Mastery_Level_7_Flair.png"
        default:
            return "https://static.wikia.nocookie.net/leagueoflegends/images/d/d8/Champion_Mastery_Level_1_Flair.png"
    }
}