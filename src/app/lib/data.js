export default async function getRequestApiTestData (where) {
  console.log('Incio --- getRequestApiTestData ', where)
  await new Promise((resolve) => setTimeout(resolve, 5000))
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await response.json()
  console.log('Finalizo ----- X --- getRe', where)
  // console.log('aquiiii es ', data)
  return data
}
