import { CardLocal } from "./CardLocal"


const testDataLocal = [
   {
      "id": 1,
      "name": "Gimnasio XYZ",
      "description": "Un gimnasio con las mejores instalaciones",
      "phone": "123456789",
      "opening_start": "10:00:00",
      "opening_end": "18:00:00",
      "isActivate": true,
      "image": "./src/assets/imgTemp/local1.jfif",
      "location": {
         "address": "Calle Principal #123",
         "city": "Lima",
         "country": "Peru"
      },
      "created_at": "2024-08-01T12:00:00Z",
      "updated_at": "2024-08-01T12:00:00Z"
   },
   {
      "id": 2,
      "name": "Gimnasio XYZ",
      "description": "Un gimnasio con las mejores instalaciones",
      "phone": "123456789",
      "opening_start": "10:00:00",
      "opening_end": "18:00:00",
      "isActivate": true,
      "image": "./src/assets/imgTemp/local2.jfif",
      "location": {
         "address": "Calle Principal #123",
         "city": "Lima",
         "country": "Peru"
      },
      "created_at": "2024-08-01T12:00:00Z",
      "updated_at": "2024-08-01T12:00:00Z"
   },
   {
      "id": 3,
      "name": "Gimnasio XYZ",
      "description": "Un gimnasio con las mejores instalaciones",
      "phone": "123456789",
      "opening_start": "10:00:00",
      "opening_end": "18:00:00",
      "isActivate": true,
      "image": "./src/assets/imgTemp/local3.jfif",
      "location": {
         "address": "Calle Principal #123",
         "city": "Lima",
         "country": "Peru"
      },
      "created_at": "2024-08-01T12:00:00Z",
      "updated_at": "2024-08-01T12:00:00Z"
   },
   {
      "id": 4,
      "name": "Un gimnasio con las mejores instalaciones",
      "description": "Un gimnasio con las mejores instalaciones",
      "phone": "123456789",
      "opening_start": "10:00:00",
      "opening_end": "18:00:00",
      "isActivate": true,
      "image": "./src/assets/imgTemp/local3.jfif",
      "location": {
         "address": "Calle Principal #123",
         "city": "Lima",
         "country": "Peru"
      },
      "created_at": "2024-08-01T12:00:00Z",
      "updated_at": "2024-08-01T12:00:00Z"
   }
]

export const Locals = () => {
   return (
      <section className="flex-1 grid gap-5 " style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(15rem, 1fr))' }}>
         {
            testDataLocal.map((local) => (
               <CardLocal
                  key={local.id}
                  image={local.image}
                  location={local.location}
                  name={local.name}
                  opening_end={local.opening_end}
                  opening_start={local.opening_start}
                  textBt={'Inscríbete ya'}
               />
            ))
         }
      </section>
   )
}
