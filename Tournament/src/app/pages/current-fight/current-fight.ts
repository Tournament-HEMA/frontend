// const requestURL=('https://jsonplaceholder.typicode.com/users')
// function sendRequest(method,url/*, body = null*/){
//   return new Promise((resolve,reject) => {
//     const xhr = new XMLHttpRequest()
//     xhr.open(method,url)
//     xhr.responseType='json'//один из способов парсить
//     //  xhr.setRequestHeader('Content-type','application/json')
//     xhr.onload = ()  =>   {
//       if(xhr.status>=400){
//         reject(xhr.response)
//       }else
//       {
//         resolve(xhr.response)
//       }
//     }
//     xhr.onerror=()=>{
//       reject(xhr.response)
//     }
//     xhr.send(JSON.stringify(xhr.response) )
//   })
//
// }
// sendRequest('GET',requestURL)
//   .then(data => console.log(data))
//   .catch(err => console.log(err))
// const body={
//   name:'Ivanov',
//   age:'20'
// }
// sendRequest('POST',requestURL,body)
//   .then(data => console.log(data))
//   .catch(err => console.log(err))
// console.log('start')
// /*window.*/setTimeout(function (){
//   console.log('Inside  ')
// },2000)
