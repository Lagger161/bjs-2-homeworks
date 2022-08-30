function parseCount (parse) {
    if (isNaN(Number.parseInt(parse))) {
        const parseCountError = new Error("Невалидное значение");
        throw parseCountError;
    } else {
    return Number.parseInt(parse)
    }
}

function validateCount(parse) {
    try {
        return parseCount(parse);
    } catch(error) {
        return error;
    }
}

class Triangle {
    constructor(a, b, c) {
        if ((a + b) < c || (b + c)< a || (a + c) < b) {
            throw new Error ("Треугольник с такими сторонами не существует");
        } else {
            this.a = a;
            this.b = b;
            this.c = c;
        }
    }


getPerimeter() {
    return this.a + this.b + this.c
}

getArea() {
    let halfPerimeter = this.getPerimeter() / 2;
    let areaPerimetr = halfPerimeter * (halfPerimeter - this.a) * (halfPerimeter - this.b) * (halfPerimeter - this.c);
    return +(Math.sqrt(areaPerimetr).toFixed(3))
}
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (error) {
        return {
            getArea(){
                return "Ошибка! Треугольник не существует"
        },
        getPerimeter() {
                return "Ошибка! Треугольник не существует"
            }
        }
    }
}