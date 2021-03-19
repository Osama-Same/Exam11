//Q1 -

const snorlaxData = {
  stats: [
    {
      stat: {
        url: "https://pokeapi.co/api/v2/stat/6/",
        name: "speed",
      },
      effort: 5,
      baseStat: 30,
    },
    {
      stat: {
        url: "https://pokeapi.co/api/v2/stat/5/",
        name: "special-defense",
      },
      effort: 2,
      baseStat: 110,
    },
    {
      stat: {
        url: "https://pokeapi.co/api/v2/stat/4/",
        name: "special-attack",
      },
      effort: 9,
      baseStat: 65,
    },
  ],
  name: "snorlax",
  weight: 4600,
};

const extractStat = (statName, arr) => {
    // Solution code here...
    let x =[]
    for (let key in statName) {
        if (statName.stat[key] === arr[key]) {
           
           x = statName[key].length
        }
        else
        return x = null
    }
    return x
  };
  

 // Q2 -

const characters = [
  {
    name: "Eddard",
    spouse: "Catelyn",
    children: ["Robb", "Sansa", "Arya", "Bran", "Rickon"],
    house: "Stark",
  },
  {
    name: "Jon",
    spouse: "Lysa",
    children: ["Robin"],
    house: "Arryn",
  },
  {
    name: "Cersei",
    spouse: "Robert",
    children: ["Joffrey", "Myrcella", "Tommen"],
    house: "Lannister",
  },
  {
    name: "Daenarys",
    spouse: "Khal Drogo",
    children: ["Drogon", "Rhaegal", "Viserion"],
    house: "Targaryen",
  },
  {
    name: "Mace",
    spouse: "Alerie",
    children: ["Margaery", "Loras"],
    house: "Tyrell",
  },
  {
    name: "Sansa",
    spouse: "Tyrion",
    house: "Stark",
  },
  {
    name: "Jon",
    spouse: null,
    house: "Snow",
  },
];

const countNumberOfChildren = (arr) => {
    // Solution code here...
    let x = 0
    for (let index = 0; index < arr.length; index++) {
         x+=arr[index].length
        
    }
    return x
  };

  const extractChildren = (arr) => {
    // Solution code here...
    let x =arr.split(' ')
    for (let index = 0; index < arr.length; index++) {
         if(arr[index].length ===characters.name.charAt("a"))
         {
               x = arr[index]
         }  
    }
    return x
  };


