// Helper function for resolving the image path to a regions
// splash art given a specific champion object. 
// Champion objects store their region name in object.region
// and usually as a string, which is fine for simple names like
// "Demacia" but not so much for places such as "Bandle City".
// Image files use underscores in place of spaces, so the image
// would be "bandle_city", not "Bandle City". This function 
// resolves this.

export default function resolveRegion(region){
    // Make a copy of the string in all lowercase
    let str = region.toLowerCase();

    // split the name at the spaces and join the elements of
    // the resulting array with an underscore
    // "bandle city" => ["bandle", "city"] -> "bandle_city"
    let replacedStr = str.split(" ").join('_');
    console.log(replacedStr)

    return replacedStr;
}