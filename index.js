addEventListener("fetch", event => {
    event.respondWith(handleRequest(event.request))
  })
  
  async function handleRequest(request) {
    let seed_str = request.url.split('?')[1].split('=')[1]
    let seed_num = 0
    for(let i in seed_str){
      seed_num += seed_str[i].charCodeAt()
    }
  
    const min = 1
    const max = 16
    let random_num = Math.floor(Math.random()*(max-min+1)+min) + seed_num
    random_num = random_num % max
  
    let url = 'https://img.1888866.xyz/' + random_num + '.webp'
  
    return fetch(url)
  }
  