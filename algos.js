// 1637. Widest Vertical Area Between Two Points Containing No Points


// Given n points on a 2D plane where points[i] = [xi, yi], Return the widest vertical area between two points such that no points are inside the area.

// A vertical area is an area of fixed-width extending infinitely along the y-axis (i.e., infinite height). The widest vertical area is the one with the maximum width.

// Note that points on the edge of a vertical area are not considered included in the area.

var maxWidthOfVerticalArea = function(points) {

    let x = []
    let max = 0
    
    for(array of points){
        x.push(array[0])
    }

    x.sort((a,b) => a-b)

    for(let i = 0; i < x.length; i++){
        let sum = x[i] - x[i-1]
        if(sum > max){
            max = sum
        }
    }

    return max
};