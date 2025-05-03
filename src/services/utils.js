export const formatTime = (time) =>{
    const floatTime = parseFloat(time)
    return floatTime.toFixed(2);    
}

export const formatSize = (size) =>{
    size = size/1000
    return size.toFixed(1);
}


export const sortRows = (rows, condition) => {

    switch (condition){
        case "Size":
            return rows.sort((a, b) => {
                const sizeA = a.response.content.size;
                const sizeB = b.response.content.size;
                return sizeB - sizeA;
            });
        case "Time":
            return rows.sort((a, b) => {
                const timeA = parseFloat(a.time);
                const timeB = parseFloat(b.time);
                return timeB - timeA;
            });
        default:
            return rows

    }
    
}