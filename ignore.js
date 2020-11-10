const urls = ["https://jsonplaceholder.typicode.com/users",
"https://jsonplaceholder.typicode.com/posts",
"https://jsonplaceholder.typicode.com/albums"]

// Promise.all(urls.map(curr => fetch(curr).then(data => {return data.json()}))).then(console.log)

// async function getArr() {
//   for await(let url of urls) {
//     return await fetch(url).then(data => data.json())
//   }
// }

// getArr().then(console.log)

async function getNewArr() {
  return Promise.all(urls.map(curr => fetch(curr).then(data => {return data.json()}))).then(console.log)
}

getNewArr().then(console.log)