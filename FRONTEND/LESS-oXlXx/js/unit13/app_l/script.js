let cars_prices = [50000, 40000, 45000, 23456];
let cars_brands = ['Mercedes', 'BMW', 'Audi', 'Ford']

let len = cars_brands.length;
cars_brands[len - 1] = 'Ferrari';

// добавление в массив
cars_brands[len] = 'Lamborghini';

// пересчет длины (обязаны пересчитывать после каждого раза когда нам нужно записать в массив)
len = cars_brands.length;
cars_brands[len] = 'Bugatti';

// пересчет длины в [] можем писать любые выражения и пересчитывать прямо в []
cars_brands[cars_brands.length] = 'Subaru';
cars_brands[9] = 'Tesla';

console.log(cars_brands);
