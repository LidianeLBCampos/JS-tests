function *Generador() {
    var i = 0;
    while(true)
    yield i
    i++
}

var gen = Generador() 
gen.next()
gen.next()
console.log(gen.next())