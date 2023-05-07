const { createApp } = Vue
createApp({
data() {
return {
frutas: [
{ nombre: "naranja", cantidad: 10 },
{ nombre: "banana", cantidad: 0 },
{ nombre: "durazno", cantidad: 3 }
],
nuevaFruta: ''
}
},
methods: {
agregarFruta() {
this.frutas.push({ nombre:
this.nuevaFruta, cantidad: 0 })
}
}
}).mount('#app')

