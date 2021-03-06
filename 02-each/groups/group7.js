// group7 [ @bogdan.ceu, @frederic.olive, @louise.foussat, @romain.reslinger, @nadia.djellali ]

const schoolParis = {
  city: "Paris",
  nbStudents: 51
}

// console.log(schoolParis)

const schoolList = [
  { city: "Paris", nbStudents: 51 },
  { city: "La Loupe", nbStudents: 15 },
  { city: "Biarritz", nbStudents: 0 }
]

// console.log(schoolList)

const printSchool = school => console.log(`${school.city} school has ${school.nbStudents} students`)

const showSchools = list => {
  // for (let i = 0; i < list.length; i++) {
  //   const school = list[i]

  //   console.log(`${school.city} school has ${school.nbStudents} students`)
  // }

  // for (let school of list) {
  //   console.log(`${school.city} school has ${school.nbStudents} students`)
  // }

  list.forEach(school => console.log(school))
}
showSchools(schoolList)
