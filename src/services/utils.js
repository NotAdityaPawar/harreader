export const formatTime = (time) =>{
    const floatTime = parseFloat(time)
    return floatTime.toFixed(2);    
}

export const formatSize = (size) =>{
    size = size/1000
    return size.toFixed(1);
}


export const sortRows = (rows, condition, isAscending) => {

    switch (condition){
        case "Size":
            return rows.sort((a, b) => {
                const sizeA = a.response.content.size;
                const sizeB = b.response.content.size;
                return isAscending ? sizeB - sizeA : sizeA - sizeB;
            });
        case "Time":
            return rows.sort((a, b) => {
                const timeA = parseFloat(a.time);
                const timeB = parseFloat(b.time);
                return isAscending ? timeB - timeA: timeA - timeB;
            });

        case "ID":
            console.log("in the id")
            return rows.sort((a, b) => {
                const idA = a.id;
                const idB = b.id;
                return isAscending ? idB - idA: idA - idB;
            });
        default:
            return rows

    }
    
}