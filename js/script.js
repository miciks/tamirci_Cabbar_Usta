let customerYear = prompt("Kaç Yıllık müşterisiniz?");
let brandOfCar = prompt("Please enter your brand of car:", "BMW or Audi or VW ")
let colorOfCar = prompt("Please enter your color of car", "RED or BLACK")
let yearOfCar = prompt("Please enter your model of car:", "2009")





if (customerYear>5) {
    alert("lütfen aracınızı 1 nolu Servis Peronuna getiriniz")
}
else if (brandOfCar=="BMW" && colorOfCar=="RED" && (yearOfCar<2019 || yearOfCar>2010)) {
    alert("Lütfen aracınızı 2 nolu Servis peronuna getiriniz")
}
else if (brandOfCar=="Audi" && (yearOfCar<2010 && yearOfCar>2005) || (yearOfCar<2020 && yearOfCar>2014)) {
    alert("Lütfen aracınızı 3 nolu Servis peronuna getiriniz")
}
else if (brandOfCar=="VW" && colorOfCar=="BLACK" && (yearOfCar<2018 || yearOfCar>2001)) {
    alert("Lütfen aracınızı 4 nolu Servis peronuna getiriniz")
}
else if (brandOfCar=="BMW" && colorOfCar=="BLACK" && yearOfCar>2022) {
    alert("Lütfen aracınızı 5 nolu Servis peronuna getiriniz")
}
else {
    alert("THANKS for coming this service, But we can't fix your car")
}