
const calculator = {
    numbers: 0,
    add(num){
        this.numbers+=num;
        return this;
    },
    result(){
        console.log(this.numbers);
        return this;
    },
    mul(num){
        this.numbers=this.numbers*num;
        return this;
    },
    div(num){
        if(num!=0){
            this.numbers=this.numbers/num;
            return this;
        }
        return this;
    },
    reset(){
        this.numbers=0;
        return this;
    }
   
};

calculator.add(1);
calculator.add(2);
calculator.result();//3
calculator.mul(10);
calculator.result();//30
calculator.div(3);
calculator.result();//10

calculator.reset();

calculator.add(1).add(2).result(); //3
calculator.mul(10).result(); //30
calculator.div(3).result(); //10


//Ex
//1- Create array of 5 students
//   {id, name, courses, avg}
//2- For each student - print her details
//   ID: X, Name: X, Courses: X, Average: X

const students = [  
     {id:456789 , name: 'nitay', courses:'a', average:70},
     {id:123456 , name: 'ohad', courses:'b', average:72},
    {id:457812 , name: 'shahar', courses:'aa', average:99},
    {id:124578 , name: 'micahel', courses:'d', average:75},
    {id:546726 , name: 'amit', courses:'c', average:80}
];

const nitay = {id:456789 , name: 'nitay', courses:'a', average:70},
ohad= {id:123456 , name: 'ohad', courses:'b', average:72},
shahar= {id:457812 , name: 'shahar', courses:'aa', average:99},
micahel={id:124578 , name: 'micahel', courses:'d', average:75},
amit={id:546726 , name: 'amit', courses:'c', average:80};
