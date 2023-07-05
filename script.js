var n1 = +prompt("1-sonni kiriting")
var n2 = +prompt("2-sonni kiriting")
var n3 = +prompt("3-sonni kiriting")
if((n2<n1 && n1<n3) || (n3<n1 && n1<n2)){
    alert("O'rta qiymat " + n1)
} else if((n1<n2 && n2<n3) || (n3<n2 && n2<n1)){
    alert("O'rtacha qiymat " + n2)
} else if((n1<n3 && n3<n2) || (n2<n3 && n3<n1)){
    alert("O'rtacha qiymat " + n3)
} else{
    alert("Nimadir xato ketib qoldi")
}