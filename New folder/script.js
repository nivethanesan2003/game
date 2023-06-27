//https://www.superheroapi.com/api.php/252343527251523/245
//json.image.url
//json.results[0].image.url


const getSuperHero=(name) => {  
  
  
    const NameDiv = document.getElementById('name')
    const Intelligence = document.getElementById('intel')
    const strength= document.getElementById('strength')
    const speed = document.getElementById('speed')
    const durability = document.getElementById('durability')
    const power = document.getElementById('power')
    const combat = document.getElementById('combat') 
      fetch(`https://www.superheroapi.com/api.php/252343527251523/search/${name}`).then(response=>response.json()).then(json=>{
      document.getElementById('HeroImage').innerHTML =`<img src="${json.results[0].image.url}" height=300px width=300px/>`
  
    NameDiv.innerText = `Name :${json.results[0].name}`
    Intelligence.innerText = `Intellegence :${json.results[0].powerstats['intelligence']}`
    strength.innerText = `Strength :${json.results[0].powerstats['strength']}`                        
    speed.innerText = `Speed :${json.results[0].powerstats['speed']}`
    durability.innerText = `Durability :${json.results[0].powerstats['durability']}`   
    power.innerText = `Power :${json.results[0].powerstats['power']}`
    combat.innerText = `Combat :${json.results[0].powerstats['combat']}`    
    })
  
                                
                            
  }
  const getRandomSuperHro=(rand)=>{
    const NameDiv = document.getElementById('name')
    const Intelligence = document.getElementById('intel')
    const strength= document.getElementById('strength')
    const speed = document.getElementById('speed')
    const durability = document.getElementById('durability')
    const power = document.getElementById('power')
    const combat = document.getElementById('combat') 
    
  fetch(`https://www.superheroapi.com/api.php/252343527251523/${rand}`).then(response=>response.json()).then(json=>{
      document.getElementById('HeroImage').innerHTML =`<img src="${json.image.url}" height=300px width=300px/>`
    
    NameDiv.innerText = `Name :${json.name}`
    Intelligence.innerText = `Intellegence:${json.powerstats['intelligence']}`
    strength.innerText = `Strength :${json.powerstats['strength']}`                        
    speed.innerText = `Speed :${json.powerstats['speed']}`
    durability.innerText = `Durability :${json.powerstats['durability']}`   
    power.innerText = `Power :${json.powerstats['power']}`
    combat.innerText = `Combat :${json.powerstats['combat']}`  
  
  
  })}
  
  const random =()=>{
    
  rand = Math.floor(Math.random()*732) 
  return rand
  }
  const btn = document.getElementById('btn')
  btn.onclick=()=>{  
    random()
    getRandomSuperHro(random())
  }
  const search = document.getElementById('search')
  const searchInput = document.getElementById('searchInput')
  
  search.onclick=()=>getSuperHero(`${searchInput.value}`)
  
  
  
  