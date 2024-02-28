export default async function getRequestApiTestData () {
  console.log('a entrooo aquiiii ')
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await response.json()
  console.log(' y salgo aquiii')
  return data
}
