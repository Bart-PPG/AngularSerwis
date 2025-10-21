export interface Car {
    brand :string
    model :string
    price :number
    isAvailable: boolean
    category: Category
}

export enum Category{
    SUV = "SUV",
    Sedan = "Sedan",
    Kompakt = "Kompakt",
    Sport = "Sport",
    Dostawczy = "Dostawczy",
}
