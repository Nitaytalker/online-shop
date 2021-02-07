class Assembled{
    constructor(city,year){
        this.city=city;
        this.year=year;
    }
}

class Car {  //1
    constructor(model,plateNo,maxKPH,assembled){
        this.model=model;
        this.plateNo=plateNo;
        this.maxKPH=maxKPH;
        this.assembled=assembled;
        Car.cars.push(this);
    }
    static cars = [];

    static compareMaxKPH(car1,car2){       //2
        return car1.maxKPH > car2.maxKPH;
    }

    update (model,plateNo,maxKPH,city,year){
        this.model=model;
        this.plateNo=plateNo;
        this.maxKPH=maxKPH;
        this.assembled.city=city;
        this.assembled.year=year;
    }

    static getCarsCreated(){
        function byYear(car1,car2){
            return car1.assembled.year - car2.assembled.year;
        }
        return Car.cars.sort(byYear);
    }

    static carsSortBymaxKPH(){
        function byKPH(car1,car2){
            return car1.maxKPH - car2.maxKPH;
        }
        return Car.cars.sort(byKPH);
    }

    static topSpeed(maxYear){
        const array = {};
        for(let car of Car.cars){
            let city1 =car.assembled.city;
            if(!array[city1]){
                array[city1] = [];
                // if(car.assembled.year<maxYear)
                array[city1].push(car) ;
            }
            if(array[city1][0].maxKPH< car.maxKPH){
                array[city1].pop();
                array[city1].push(car) ;
            }
        }
        return array;
    }
}

class CarsFactory{
    constructor(cars=[]){
        this.cars=cars;
    }
   
        static addNewCar(model,plateNo,maxKPH,city,year){
        const newCar = new Car(model,plateNo,maxKPH,new Assembled(city , year));
        
        return newCar;
    }
    updateCarByPlateNumber(number,model,plateNo,maxKPH,city,year){
        for(let car of this.cars){
            if(car.plateNo == number){
                car.update(model,plateNo,maxKPH,city,year)
                return;
            }
        }
    }
    addCars(newCars){
        for (let index = 0; index < newCars.length; index++) {
            this.cars.push(newCars[index]);
           
        }
    }
}

const myCars =[
    new Car(2020 , 1234 , 200 ,new Assembled('japan',2020)),
    new Car(2010 , 124234 , 207 ,new Assembled('usa',2015)),
    new Car(2019 , 47852 , 240 ,new Assembled('israel',2017))
];
// console.log(myCars);

if(Car.compareMaxKPH(myCars[0],myCars[1])){             //3
    if(Car.compareMaxKPH(myCars[0],myCars[2])){
        console.log(`car in index 0 is the fast car`);
    }else{
        console.log(`car in index 2 is the fast car`);
    }
}else{
    if(Car.compareMaxKPH(myCars[1],myCars[2])){
        console.log(`car in index 1 is the fast car`);
    }else{
        console.log(`car in index 2 is the fast car`);
    }
}

const myCarsFactory= new CarsFactory(); //4
myCarsFactory.cars.push( CarsFactory.addNewCar(2019 , 47852 , 240 ,'israel',2017))  //5
myCarsFactory.updateCarByPlateNumber(47852,2019 , 47852 , 245 ,'israel',2018)  //6

// console.log(CarsFactory.addNewCar(2019 , 47852 , 240 ,'israel',2017)); 
// console.log(myCarsFactory);

const new7Cars = [ 
    new Car(2020 , 1234 , 200 ,new Assembled('japan',2020)),
    new Car(2010 , 124234 , 207 ,new Assembled('usa',2015)),
    new Car(2011 , 45275 , 210 ,new Assembled('brazil',2012)),
    new Car(2021 , 411254 , 300 ,new Assembled('china',2021)),
    new Car(2015 , 789546 , 270 ,new Assembled('japan',2016)),
    new Car(2017 , 38425 , 230 ,new Assembled('usa',2017)),
    new Car(2020 , 978554 , 260 ,new Assembled('japan',2020)),
    
]
myCarsFactory.addCars(new7Cars);
// console.log(Car.cars); // 7

const allCreatedCars = Car.getCarsCreated();
// console.log(allCreatedCars); //8

const carsSortmaxKPH =  Car.carsSortBymaxKPH();
// console.log(carsSortmaxKPH); //9

const topSpeed = Car.topSpeed(2020);
console.log(topSpeed); //10
