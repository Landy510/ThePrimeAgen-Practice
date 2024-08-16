export default function two_crystal_balls(breaks: boolean[]): number {
    const jumpAmount = Math.floor(Math.sqrt(breaks.length)); // traverse with jumpAmount

    // Use Ball-A to test the first height that would make the ball break
    let i = 0;
    for(; i < breaks.length; i+=jumpAmount) {
        if(breaks[i]) break;
    }

    i -= jumpAmount; // step back with jumpAmount
    // Use Ball-B to test the first height that would make the ball break within (i-=jumpAmount, i]
    for(let j = 0; j < jumpAmount && i < breaks.length; j++, i++) {
        if(breaks[i]) return i
    }
    
    return -1;
}