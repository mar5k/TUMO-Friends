db.students.remove({});
db.students.insertMany([{
  "email": "mark.petrosyan.y@tumo.rg",
  "firstName": "Mark",
  "lastName": "Petrosyan",
  "password": "password",
  "learningTargets": [
    "Animation",
    "Game Developdb.stutends.getIndexment",
    "Filmmaking"
  ],
  "location": "Yerevan"
}, {
  "email": "mesrobk2@gmail.com",
  "firstName": "Martin",
  "lastName": "Kyurkchyan",
  "password": "password",
  "learningTargets": [
    "Game Development",
  ],
  "location": "Gyumri"
}
])

db.students.createIndex({ lastName: "text", firstName: "text", location: "text" })
db.students.createIndex({ learningTargets: 1})
