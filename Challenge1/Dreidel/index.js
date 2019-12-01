module.exports = async function (context, req) {
    const diceSides = ['נ', 'ג', 'ה', 'ש'];
    const selectedSide =  Math.floor(Math.random() * diceSides.length);
    context.res = {
        body: `You spun ${diceSides[selectedSide]}`
    };
};