const users = [
    {
      "_id": "sty001",
      "firstname": "Elena",
      "lastname": "Vargas",
      "email": "elena.vargas@email.com",
      "bio": "With over 15 years behind the chair, Elena is known for her effortless, lived-in color and precision cutting. She believes hair should move naturally and make you feel confident—never overworked. When she’s not creating soft dimension and texture, you’ll find her mentoring new stylists and sipping oat milk lattes.",
      "imageUrl": "https://example.com/images/stylists/elena-vargas.jpg", 
      "clients": [
        {
          "_id": "4",
          "firstname": "Sierra",
          "lastname": "Woods",
          "phone": "(916) 555-1198",
          "email": "sierra.woods@email.com",
          "likes": 198,
          "imageUrl": "/images/makeup-1.jpg",
          "tags": ["makeup", "style"], 
          "stylistId":"sty001"
        },
        {
          "_id": "6",
          "firstname": "Zoe",
          "lastname": "Peterson",
          "phone": "(916) 555-7821",
          "email": "zoe.peterson@email.com",
          "likes": 250,
          "imageUrl": "/images/makeup-3.jpg",
          "tags": ["style", "makeup"], 
          "stylistId":"sty001"
        },
        {
          "_id": "8",
          "firstname": "Faith",
          "lastname": "Reynolds",
          "phone": "(916) 555-8823",
          "email": "faith.reynolds@email.com",
          "likes": 143,
          "imageUrl": "/images/short-curls-4.jpg",
          "tags": ["haircut", "color"], 
          "stylistId":"sty001"
        },
        {
          "_id": "9",
          "firstname": "Ariana",
          "lastname": "Mitchell",
          "phone": "(916) 555-5042",
          "email": "ariana.mitchell@email.com",
          "likes": 221,
          "imageUrl": "/images/short-curls.jpg",
          "tags": ["haircut", "style"],
          "stylistId":"sty001"
        },
      ]
    },
    {
      "_id": "sty002",
      "firstname": "Marcus",
      "lastname": "Reed",
      "email": "marcus.reed@email.com",
      "bio": "Marcus is a master barber and stylist who brings classic technique and modern edge to every cut. His chair is known for precision fades, clean lines, and conversation that feels like catching up with an old friend. A Sacramento native, Marcus blends old-school barbering with contemporary styling for a timeless look that lasts.",
      "imageUrl": "https://example.com/images/stylists/marcus-reed.jpg", 
      "clients": [
        {
          "_id": "3",
          "firstname": "Darius",
          "lastname": "Bennett",
          "phone": "(916) 555-4460",
          "email": "darius.bennett@email.com",
          "likes": 312,
          "imageUrl": "/images/curly-fade.jpg",
          "tags": ["haircut"], 
          "stylistId":"sty002"
        },
        {
          "_id": "5",
          "firstname": "Malik",
          "lastname": "Turner",
          "phone": "(916) 555-7711",
          "email": "malik.turner@email.com",
          "likes": 174,
          "imageUrl": "/images/mens-2.jpg",
          "tags": ["haircut"], 
          "stylistId":"sty002"
        },
        {
          "_id": "0",
          "firstname": "Julian",
          "lastname": "Ramsey",
          "phone": "(916) 555-8849",
          "email": "julian.ramsey@email.com",
          "likes": 289,
          "imageUrl": "/images/mens-1.jpg",
          "tags": ["haircut"], 
          "stylistId":"sty002"
        }
      ]
    },
    {
      "_id": "sty003",
      "firstname": "Talia",
      "lastname": "Nguyen",
      "email": "talia.nguyen@mail.com",
      "bio": "Talia is a colorist and makeup artist with a flair for vibrant transformations and soft glam. From subtle balayage to creative color, she loves helping clients express themselves authentically. Her approach is equal parts artistry and care—she makes every client feel seen, styled, and celebrated.",
      "imageUrl": "https://example.com/images/stylists/talia-nguyen.jpg", 
      "clients": [
        {
          "_id": "1",
          "firstname": "Naomi",
          "lastname": "Greene",
          "phone": "(916) 555-3021",
          "email": "naomi.greene@email.com",
          "likes": 147,
          "imageUrl": "/images/butterfly-braid-updo.webp",
          "tags": ["style"], 
          "stylistId":"sty003"
        },
        {
          "_id": "2",
          "firstname": "Jasmine",
          "lastname": "Carter",
          "phone": "(916) 555-9845",
          "email": "jasmine.carter@email.com",
          "likes": 238,
          "imageUrl": "/images/ombre-2.jpg",
          "tags": ["style", "color", "haircut"], 
          "stylistId":"sty003"
        },
        {
          "_id": "7",
          "firstname": "Camila",
          "lastname": "Ross",
          "phone": "(916) 555-6038",
          "email": "camila.ross@email.com",
          "likes": 329,
          "imageUrl": "/images/updo-3.jpg",
          "tags": ["makeup", "style"], 
          "stylistId":"sty003"
        },
      ]
    }
]

export default users