function getArea(length, width, unit) {
    const area = width * length;
    return `${area} ${unit}`;
}

getArea(5, 17.5, 'sq m');