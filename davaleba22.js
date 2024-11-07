// 1. შექმენით რიცხვების მასივი და თითოეული რიცხვისთვის foreach ციკლით დაბეჭდეთ მათი კვადრატი.

let arr=[2,3,4,5]
arr.forEach((num)=>console.log(num*num))

// 2. შექმენით ხილის სახელების მასივი და foreach ციკლით დაბეჭდეთ თითოეული ხილის სახელი.

let names=["nika","gio","valeri"]
names.forEach((names)=>console.log(names))

// 3. მასივში არსებული რიცხვების ჯამი გამოიანგარიშეთ foreach ციკლით.

let number=[1,2,3,4,5]
let nuli=0
number.forEach(function(number){
    nuli += number
})
console.log(nuli);


// 4. შექმენით მასივი სტუდენტების სახელებით და foreach ციკლით დაბეჭდეთ, რომელი სტუდენტი რომელ ადგილზეა.1
let namee=["nika","gio","valeri"]
namee.forEach((namee,i)=>console.log(`${namee} aris ${i+1}`))


// 5. შექმენით მასივი და მასში ჩაწერეთ მთელი რიცხვები. foreach ციკლით მხოლოდ ლუწი რიცხვები დაბეჭდეთ.

let numbers=[2,3,4,5,6]
numbers.forEach(function(numbers){
    if(numbers%2==0){
        console.log(numbers);
        
    }
})

// 6. შექმენით რიცხვების მასივი და map მეთოდის საშუალებით მიიღეთ მათი კვადრატების ახალი მასივი.

let arr1=[2,3,4,5,6]
let axali=arr1.map((num)=>num*num)
console.log(axali);


// 7. მასივში ჩაწერეთ სახელები და map მეთოდის გამოყენებით ყოველი სახელი ყველა ასოს პატარა ასოზე გადააკეთეთ.
let saxeli=["NIKA","GIO","VALRI"]
let psaxeli=saxeli.map((saxeli)=>saxeli.toLowerCase(saxeli))
console.log(psaxeli);


// 8. შექმენით რიცხვების მასივი და map მეთოდით მიიღეთ მასივი, სადაც ყველა რიცხვი 10-ზე გაიზარდა.
let ricxi=[1,2,3,4,5]
let plius=ricxi.map((num)=>num+10)
console.log(plius);


// 9. შექმენით ობიექტების მასივი, სადაც თითოეულ ობიექტში არის სტუდენტის სახელი და ქულა. map მეთოდით მიიღეთ ახალი მასივი მხოლოდ სტუდენტების სახელებით.



// 10. შექმენით რიცხვების მასივი და map მეთოდით მიიღეთ მასივი, რომელშიც ყველა ლუწი რიცხვი გაორმაგებულია, ხოლო კენტი არ შეცვლილა.
let arr2=[2,3,4,5,6]
let luwi=arr2.map(function(arr2){
    if(arr2%2==0){
        return arr2*2
    }else{
        return arr2
    }
})
console.log(luwi);


// 11. შექმენით რიცხვების მასივი და filter მეთოდით მიიღეთ მხოლოდ ლუწი რიცხვების მასივი.

let arr3=[2,3,4,5,6,7,8]
let ra=arr3.filter((arr3)=>arr3%2==0)
console.log(ra);

// 12. შექმენით სახელების მასივი და filter მეთოდით მხოლოდ ის სახელები ამოიღეთ, რომლებიც 5-ზე მეტ სიმბოლოს შეიცავს.

let sax=["nika","giorgi","valeri"]
let sax5=sax.filter((sax)=>sax.length>5)
console.log(sax5);

// 13. შექმენით რიცხვების მასივი და filter მეთოდით მხოლოდ დადებითი რიცხვები მიიღეთ.
let ri=[2,-3,-5,6]
let dri=ri.filter((ri)=>ri>0)
console.log(dri);

// 14. შექმენით ობიექტების მასივი, სადაც თითოეულ ობიექტში არის პროდუქტების სახელები და ფასები. filter მეთოდით მიიღეთ მხოლოდ ის პროდუქტები, რომელთა ფასი 100-ზე მეტია.



// 15. შექმენით რიცხვების მასივი და filter მეთოდით მიიღეთ ყველა რიცხვი, რომელიც 50-ს აღემატება.
let ric=[20,40,50,60,70]
let ricd=ric.filter((ric)=>ric>50)
console.log(ricd);

// 16. დაწერეთ კოდი, რომელიც while ციკლით 1-დან 10-მდე რიცხვებს დაბეჭდავს.
let i=0
while(i<10){
    i++
    console.log(i);
    
}


// 17. დაწერეთ პროგრამა, რომელიც while ციკლით მასივში არსებული რიცხვების ჯამს გამოიანგარიშებს.

let ricx=[1,2,34,5,6]
let jami1=0
let index=0
while(index<ricx.length){
    jami1+=ricx[index]
    index++
}
console.log(jami1);


// 18. შექმენით ცვლადი რიცხვით 1 და while ციკლით იმატეთ 2-ით, სანამ რიცხვი არ მიაღწევს 20-ს.
let ind=0
while(ind<20){
    ind+=2
    console.log(ind);
}

// 19. დაწერეთ პროგრამა, რომელიც while ციკლით რიცხვებს დაბეჭდავს 20-დან 10-მდე დაღმავალი თანმიმდევრობით.
let inde=20
while(inde>=10){
    console.log(inde);
    inde--
}


// 20. დაწერეთ პროგრამა, რომელიც while ციკლით მასივში ყველა ობიექტს გამოიკვლევს და თითოეული მათგანის სახელს დაბეჭდავს


