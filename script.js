/*******Javascript Concat Metodu********/

/*Concat methodu iki veya daha fazla diziyi birleştirerek 
yeni bir dizi haline getirir*/

const dizi1=["a","b","c"]

const dizi2=[1,5,7]

const newArray=dizi1.concat(dizi2)

console.log(newArray)


/*-----------------------------------------*/

const number=[1,[2,5],[7,9]]

const icicediziekleme=number.concat([[10,15]])//dizi içine dizi şeklide ekler

console.log(icicediziekleme)

const ekleme=number.concat([55,55])//eleman şeklinde ekler
const ekleme2=number.concat(85,85)//eleman şeklinde ekler

console.log(ekleme)
console.log(ekleme2)