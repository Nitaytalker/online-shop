class Ride {
    constructor(from, destination, starttime) {
        this.from = from;
        this.destination = destination;
        this.starttime = starttime;
    }
}
class Passanger {
    constructor(id, name, ride) {
        this.id = id;
        this.name = name;
        this.ride = ride;
    }
}

class Driver {
    constructor(id, name, isBusy, address, email, phoneNumber, CurrentRide = []) {
        this.id = id;
        this.name = name;
        this.isBusy = isBusy;
        this.address = address;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.CurrentRide = CurrentRide;
    }
    getDriverIfNotBusy() {
        if (this.isBusy) {
            return this;
        }
        return 0;
    }
    setDriverBusy() {
        this.isBusy = 1;
    }
    setDriverNotBust() {
        this.isBusy = 0;
    }
    setAddress(newaddress) {
        this.address = newaddress;
    }
    setEmail(newemail) {
        this.email = newemail;
    }
    setPhoneNumber(newphoneNumber) {
        this.phoneNumber = newphoneNumber;
    }
    deleteRide() {
        let ride = this.CurrentRide;
        this.CurrentRide = 0;
        return ride;
    }
}

class Station {
    constructor(drivers = [], rides = [], passangers = [], getBusyDrivers, getAvailableDrivers, getDriverByNmae) {
        this.drivers = drivers;
        this.rides = rides;
        this.passangers = passangers;
    }
    getFreeDriversArray() {
        const array = [];
        for (let driver of this.drivers) {
            if (driver.getDriverIfNotBusy() != 0) {
                array.push(driver.getDriverIfNotBusy());
            }
        }
        return array;
    }
    driverBusyByName(name) {
        for (let driver of this.drivers) {
            if (driver.name == name) {
                setDriverBusy();
                return;
            }
        }
    }
    newRide(from, destination) {
        let date = new Date;
        let str = ` ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
        this.rides.push(new Ride(from, destination, str));
        return (this.rides[this.rides.length - 1]);
    }
    GetDriverInfoById(id) {
        for (let driver of this.drivers) {
            if (driver.id == id) {
                return driver;
            }
        }
        return 0;
    }
    removeRideById(id) {
        let toDelete = 0;
        for (let driver of this.drivers) {
            if (driver.id == id) {
                toDelete = driver.deleteRide();
                continue;
            }
        }
        if (toDelete) {
            this.rides.splice(this.rides.indexOf(toDelete), 1);
            return 1;
        } else {
            return 0;
        }

    }
    newDriver(driver) {
        if (driver instanceof Driver) {
            this.drivers.push(driver);
            return 1;
        }
        return 0;
    }
    newPassangers(passangers) {
        if (passangers instanceof Passanger) {
            this.passangers.push(passangers);
            return 1;
        }
        return 0;
    }
    getDrivers() {
        return this.drivers;
    }
    numberOfDriver() {
        return this.drivers.length;
    }
    getDrivesIds() {
        let arrayIds = [];
        for (let driver of this.drivers) {
            arrayIds.push(driver.id);
        }
        return arrayIds;
    }
    setByIdBusyDriver(id, ride) {
        for (let driver of this.drivers) {
            if (driver.id == id) {
                driver.isBusy = 0;
                driver.CurrentRide.push(ride);
                return;
            }
        }
    }

}

const mydrivers = [
    new Driver(1, 'omer', 1, 'dimona', 'omer@gmail.com', '0521234567'),
    new Driver(2, 'tomer', 1, 'tel-aviv', 'tomer@gmail.com', '0521234567'),
    new Driver(3, 'nitay', 1, 'dimona', 'nitay@gmail.com', '0521234567'),
    new Driver(5, 'ohad', 1, 'beer-sheva', 'ohad@gmail.com', '0521234567'),
    new Driver(4, 'tal', 1, 'dimona', 'tal@gmail.com', '0521234567'),
    new Driver(6, 'ron', 1, 'beer-sheva', 'omer@gmail.com', '0521234567')
];

const mystation = new Station(mydrivers);
console.log(mystation);

const firstInfoDelete = document.getElementById('askuser');

function userRide() {

    const myDrivers = mystation.getFreeDriversArray();
    console.log(myDrivers);

    firstInfoDelete.innerHTML = `<form>
    <h3>Choose a driver</h3>`

    for (let driver of myDrivers) {
        if (driver.isBusy) {
            firstInfoDelete.innerHTML += ` <input type="radio" id="driver${driver.id}" name="vehicle1" value="${driver.id}">
            <label for="vehicle1"> ${driver.name}</label><br> `
        }

    }
    firstInfoDelete.innerHTML += ` <div class="input-group mb-3 text-center">
    <div class="col-2"></div>
    <div class="input-group-prepend text-center col-4">
      <span class="input-group-text" id="inputGroup-sizing-default">From</span>
      <input  id="fromid" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
    </div>

    <div class="input-group-prepend text-center col-4">
    <span class="input-group-text" id="inputGroup-sizing-default">Destination</span>
    <input id="destinationid" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
    </div>
    
  </div> `
    firstInfoDelete.innerHTML += ` <button onclick="fromToDestination()" type="button" class="btn btn-primary">OK</button>
    </form> <br>`;

}


function fromToDestination() {
    const fromIdInput = document.getElementById('fromid'),
        destinationId = document.getElementById('destinationid');
    let driverIds = mystation.getDrivesIds();
    let input = 0;
    let theInputId = 0;
    for (let id of driverIds) {
        input = document.getElementById(`driver${id}`);
        // console.log(input);
        // console.log(input);
        if (input.checked) {
            theInputId = input;
            continue;
        }
    }
    if (!theInputId) {
        alert('select driver');
        return;
    }
    // console.log(theInputId);
    //have id from user her 
    if (!fromIdInput.value) {
        alert('Enter the station from which you would like to board ');
        return;
    }
    if (!destinationId.value) {
        alert('Enter the address you want to reach ');
        return;
    }
    let newride = mystation.newRide(fromIdInput.value, destinationId.value);
    mystation.setByIdBusyDriver(theInputId.value, newride);
    console.log(mystation);
    // console.log(input);
    // input.innerHTML=''
    userRide();
    alert("The order has been placed ");

    //need use localstorage
    location.reload();
}

function userDriver() {
    firstInfoDelete.innerHTML += `<br> <div class="input-group mb-3 ">
    <div class= " col-4"> </div>
    <div class="input-group-prepend col-4">
      <span class="input-group-text" id="basic-addon1">id</span>
      <input id="driverid" type="text" class="form-control" placeholder="your id" aria-label="Username" aria-describedby="basic-addon1">
    </div>
    
  </div>
  <button onclick="inputDriverId()" type="button" class="btn btn-outline-primary text-center">OK</button>`;

}

function inputDriverId() {
    let driverid = document.getElementById('driverid');
    if (driverid.value == '') {
        alert('Please enter ID');
        return;
    }
    let driver = mystation.GetDriverInfoById(driverid.value);
    if (driver === 0) {
        alert('ID not found');
        return;
    }
    let status = driver.isBusy;
    if (status) {
        status = 'Not Busy'
    } else {
        status = " busy"
    }
    firstInfoDelete.innerHTML += `
    <div class= "col-4"> </div>
    <div class='col-4'>

   

     <div class="jumbotron jumbotron-fluid">

    <div class="container ">

      <h1 class="display-4">Hello ${driver.name}</h1>
      <p class="lead">id: ${driver.id}.</p>
      <p class="lead">status: ${status}.</p>
      <p class="lead">address: ${driver.address}.</p>
      <p class="lead">Email: ${driver.email}.</p>
      <p class="lead">Phone Number: ${driver.phoneNumber}.</p>
      <button onclick="driverWontSetNewItem(${driver.id})" type="button" class="btn btn-outline-primary">Change</button>

    </div>

    </div>
    

  </div> 
  `;
    //stop her-----------------------------------------------------------------------------------------------------------------------------
    //need now give user(driver) to set new value if he wont
}

const setNew= document.getElementById('setnew');

function driverWontSetNewItem(id) {
    let driver = mystation.GetDriverInfoById(id);
    console.log(driver);
    let activeBusy = '';
    let activeBusyValue=1;
    let NotactiveBusy='';
    let notactiveBusyValue=1;
    if(driver.isBusy){ 
        activeBusy='Not Busy';
        NotactiveBusy='Busy';
        notactiveBusyValue=0;
    }else{
        activeBusy='Busy';
        NotactiveBusy='Not Busy';
        activeBusyValue=0;
    }
    setNew.innerHTML = `
    <div class='col-12'>
    <div class="input-group flex-nowrap align-middle">
    <div class="col-4"></div>
    <div class="input-group-prepend col-4">
    <span class="input-group-text" id="addon-wrapping">email</span>
    <input id="newemail1" type="text" class="form-control" value="${driver.email}" aria-label="Username" aria-describedby="addon-wrapping">
    </div></div> </div>
     <div class='col-12'>
    <div class="input-group flex-nowrap align-middle">
    <div class="col-4"></div>
    <div class="input-group-prepend col-4">
    <span class="input-group-text" id="addon-wrapping">Address</span>
    <input id="newaddress1" type="text" class="form-control" value="${driver.address}" aria-label="Username" aria-describedby="addon-wrapping">
    </div> </div></div>
    <div class='col-12'>
    <div class="input-group flex-nowrap align-middle">
    <div class="col-4"></div>
    <div class="input-group-prepend col-4">
    <span class="input-group-text" id="addon-wrapping">Phone Number</span>
    <input id="newphoneNumber1" type="text" class="form-control" value="${driver.phoneNumber}" aria-label="Username" aria-describedby="addon-wrapping">
    </div> </div></div>
    <div class='col-12'>
  
    <div class="input-group mb-3">
    <div class="col-4"></div>
  <div class="input-group-prepend col-4">
    <label class="input-group-text" for="inputGroupSelect01">Options</label>
    <select class="custom-select " id="inputGroupSelect01">
    <option selected value="${activeBusyValue}">${activeBusy}</option>
    <option value="${notactiveBusyValue}">${NotactiveBusy}</option>
    
  </select>
  </div>
</div>
<div class='text-center'>
<button onclick="driverSetNewItemInput(${driver.id})" type="button" class="btn btn-outline-primary">Set New Info</button>
</div>
</div>


    `;
}

function driverSetNewItemInput(driverId) {
    console.log(driverId);
    let newEmail =document.getElementById('newemail1').value;
    let newAddress = document.getElementById('newaddress1').value;
    let newPhone = document.getElementById('newphoneNumber1').value;
    console.log(newEmail);
}

function userStationManager() {
    firstInfoDelete.innerHTML = ''; 
    
}