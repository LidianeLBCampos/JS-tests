let conjunto = new Set()
conjunto.add(1)
conjunto.add(2)
conjunto.add(3)

conjunto.forEach(e => console.log(e*e))
console.log(conjunto.size)
console.log(conjunto.delete(3))
console.log(conjunto)
