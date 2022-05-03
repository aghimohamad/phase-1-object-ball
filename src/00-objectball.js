function gameObject() {
  const obj = {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assits: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1,
        },
        "Reggie Evens": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assits: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7,
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assits: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15,
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assits: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5,
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assits: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1,
        },
      },
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assits: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2,
        },
        "Bismack Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assits: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10,
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assits: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5,
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assits: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0,
        },
        "Brendan Hayword": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assits: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12,
        },
      },
    },
  };
  return obj;
}

function numPointsScored(name){
    let obj = gameObject()
    for (let T in obj){
        let teamObj = obj[T] ;
        for (let k in teamObj){
          let data = teamObj[k];
        if(typeof data === 'object'){
          

            for(let pl in data){
              if (pl === name){
                  let det = data[pl]
                  console.log(det['points'])
              }
                  
            }
        }
          
        }
    }
}

numPointsScored("Brendan Hayword")


function shoeSize(name){
  let obj = gameObject()
  for (let T in obj){
      let teamObj = obj[T] ;
      for (let k in teamObj){
        let data = teamObj[k];
      if(typeof data === 'object'){
        

          for(let pl in data){
            if (pl === name){
                let det = data[pl]
                console.log(det['shoe'])
            }
                
          }
      }
        
      }
  }
}

shoeSize("Brendan Hayword")

function teamColor(name){
  let obj = gameObject()
  for (let T in obj){
      let teamObj = obj[T] ;
      if (teamObj['teamName'] === name){
          return teamObj['colors']
      }
  }
}

console.log(teamColor("Brooklyn Nets"))


function teamNames(){
  let arr = []
  let obj = gameObject()
  for (let T in obj){
      // let teamObj = obj[T] ;
      // console.log(T)
       arr.push(obj[T]['teamName'])
  }
  return arr 
}

console.log(teamNames())


function playerNumbers(name){
  let obj = gameObject()
  let arr = []
  for (let T in obj){
      let teamObj = obj[T] ;
      // console.log(teamObj)
      if (teamObj['teamName'] === name) {
          let players = teamObj['players'];
          // console.log(players)
      for (let k in players){
          let num = players[k]
          arr.push(num['number'])
      }
      }
}
  return arr
}

playerNumbers("Charlotte Hornets")

function playerStats(name){
  let obj = gameObject()
      for (let t in obj){
          let teamObj = obj[t]
          for (team in teamObj){
              let val = teamObj[team]
              if (typeof val === 'object'){
                  for (pl in val){
                     if (pl === name){
                        return val[pl]
                     }
                  }
              }
          }
      }
     
}

console.log(playerStats("Alan Anderson"))