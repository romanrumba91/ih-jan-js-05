//Objetos
//no primitivo, propiedades y valores

const mexico ={

    comida: "Tacos" //propiedad comida y valor tacos
}
console.log(mexico.comida)

 //bracket notation

 console.log(mexico["comida"])

 const olympicsRecords ={

athletics100Men : "Justin Gatlin",
athleticsLongJumpMen : "Mike Powel",
swimming200Men: "Michael Phelps", 
"swimming 200 Women": "Ariarne Titmus"

 }

 console.log(olympicsRecords.athletics100Men)
 console.log(olympicsRecords["athletics100Men"])
 console.log(olympicsRecords["swimming 200 Women"])

 // agregar propiedades

 const refresco = {
    nombre: "Coca Cola",
    color: " Oscuro",
    precio: 12,
    tamano: [600, 1000]

 }

 refresco.envase = "Plastico"

 console.log(refresco)

 refresco["competidor"] = "Pepsi"

 console.log(refresco)