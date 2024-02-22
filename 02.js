// function work() { ////시간이 오래걸리는 무거운 작업을 실행하는 함수
//     const start = Date.now();
//     for (let i = 0; i < 1000000000; i++) { 

//     }
//     const end =Date.now()
//     console.log(end - start + 'ms')
//   }
  
//   work();
//   console.log('다음작업') ///순서를 예측 해보세요
  


//-------------------------------------------------------------------------



  //  work(); 함수가 실행하는 동안 다른걸 먼저 실행하고 싶다면?
  // 비동기로 호출해야하니까 setTimeout 함수를 사용한다




//   function work() { 
//     setTimeout( () => {
//         const start = Date.now();
//     for (let i = 0; i < 1000000000; i++) { 

//     }
//     const end =Date.now()
//     console.log(end - start + 'ms')
// }, 0) //0ms 이후 실행하겠다는 의미
    
//   }
  
//   console.log('작업시작')
//   work();
  
//   console.log('다음작업') ///순서를 예측 해보세요



//-------------------------------------------------------------------------



  ///만약 work();함수가 끝나면 바로 실행하도록 하는 작업을 하려면?
  //그럴땐 콜백함수를 파라미터로 전달을 하면 된다
  

  
//   function work(callback) { 
//     setTimeout( () => {
//         const start = Date.now();
//     for (let i = 0; i < 1000000000; i++) { 

//     }
//     const end =Date.now()
//     console.log(end - start + 'ms')
//     callback(end - start)
// }, 0) //0ms 이후 실행하겠다는 의미
    
//   }
  
//   console.log('작업시작')
//   work((ms) => {
//     console.log('작업이 끝났어요!')
//     console.log(ms + 'ms걸렸다고 해요')
//   })
//   console.log('다음작업') ///순서를 예측 해보세요


//비동기함수는 주로
//Ajax wep API요청
//암호화/복호화
//파일읽기
//작업예약등 을 수행하는데 사용된다

//--------------------------------------------------------------------------

//비동기작업은 콜백함수로 작성 할 수 있지만 이를 좀 더 편하게
//하기위해 프로미스라는 것이 생겼다
//프로미스를 사용하면 코드의 가독성이 좋고 결과를 예측하기 쉽다

//예제
//숫자 n을 파라미터로 가져와서 5번에 걸쳐서
//1초마다 1씩 더해서 출력해주는 작업을 수행하는 setTimeout 만들자

  // function increaseAndPrint(n,callback){
  //   setTimeout(()=>{
  //       const increased = n +1
  //       console.log(increased)

  //       if(callback) {
  //           callback(increased)
  //       }
  //   },1000)
  // }


  // increaseAndPrint(0,n =>{
  //   increaseAndPrint(n,n=>{
  //       increaseAndPrint(n,n=>{
  //           increaseAndPrint(n,n=>{
  //               increaseAndPrint(n,n=>{
  //                   console.log('작업끝')
  //               })
  //           })
  //       })

  //   })
  // })

  //이렇게 비동기적으로 연달아서 해야하는 작업이 많은 경우 콜백으로 처리하게 된다면
  //쓰기도 어렵고 보기도 어렵다 이런 코드를 콜백지옥이라 부른다


  //프로미스를 사용한다면?



  // 프로미스 작성한는 법
  // const myPromise = new Promise((resolve,reject)=>{
  //   setTimeout(() => {
  //       // resolve('result')
  //       reject(new Error())
  //   }, 1000);
  // })

  // myPromise.then(result=>{  //then을 이용해 프로미스가 끝나고 이행할 함수를 설정 할 수 있다
  //   console.log(result)
  // }).catch(e=>{
  //   console.error('error')
  // })






  //프로미스를 만드는 함수


//     function increaseAndPrint(n){
//         return new Promise((resolve,reject)=>{
//             setTimeout(()=>{
//                 const value = n + 1
//                 if (value === 5){
//                     const error = new Error()  ///value가 5가 된다면 에러를 반환
//                     error.name = 'valueisFive' //에러에 네이밍 가능
//                     reject(error)
//                     return
//                 }
//                 console.log(value)
//                 resolve(value)
//             },1000)
//   })
  
// }


// increaseAndPrint(0)
// .then(increaseAndPrint)
// .then(increaseAndPrint)
// .then(increaseAndPrint)
// .then(increaseAndPrint)
// .then(increaseAndPrint)
// .catch(e=>{
//     console.error(e)
// })


//프로미스를 사용하면 콜백함수처럼 코드의 깊이가 길어지지 않는다
//하지만 then으로 이어지기 떄문에 어떤 부분에서 에러가 발생했는지 파악하기어렵고
//then으로 이어지기 때문에 특정 조건에 따라 분기를 나누기 어렵다

//그렇기 때문에 사용하는 문법이 async , await 이다


// async , await 는 프로미스를 더 쉽게 사용하기 위해 나옴


// function sleep (ms) {
//     return new Promise (resolve => setTimeout(resolve,ms))
// }


// async function process(){         ///앞부분에 async 를 붙이고
//     console.log('안녕하세요')
//     await sleep(4000)             /// 프로미스 앞 부분에 await 붙인다 프로미스를 기다리는 작업을  .then 을 하지 않아도 await으로 기다려 줄 수 있다 
//     console.log('반갑습니다')

// } // 이 함수 하나만으로 흐름을 파악하기 쉽다

// process()


// ///-----------------------------------------------------------------------------

// // async는 프로미스를 반환한다


// function sleep (ms) {
//     return new Promise (resolve => setTimeout(resolve,ms))
// }


// async function process(){        
//     console.log('안녕하세요')
//     await sleep(1000)             
//     console.log('반갑습니다')
//     return true

// } 

// process().then(value => {
//     console.log(value)
// })

// //----------------------------------------------------------
// //화살표 함수로 async함수 여러개 작성하기


// function sleep (ms) {
//     return new Promise (resolve => setTimeout(resolve,ms))
// }


// const getDog = async () => {
//     await sleep(1000)     
//     return '강아지'
// }


// const getRabbit = async () => {
//     await sleep(500)     
//     return '토끼'
// }


// const getTurtle = async () => {
//     await sleep(3000)     
//     return '거북이'
// }

// async function process(){
//     const dog = await getDog()
//     console.log(dog)

//     const rabbit = await getRabbit()
//     console.log(rabbit)

//     const turtle = await getTurtle()
//     console.log(turtle)

// }

// process()

//이렇게 하면 프로미스가 순차적으로 실행이 된다
//여러개의 프로미스를 한번에 실행하고 싶을 떈  Promise all 을 사용한다


//--------------------------------------------------------------------

// function sleep (ms) {
//     return new Promise (resolve => setTimeout(resolve,ms))
// }


// const getDog = async () => {
//     await sleep(1000)     
//     return '강아지'
// }


// const getRabbit = async () => {
//     await sleep(500)     
//     return '토끼'
// }


// const getTurtle = async () => {
//     await sleep(3000)     
//     return '거북이'
// }

// async function process(){
//     const results = await Promise.race([getDog(),getRabbit(),getTurtle()])
//     console.log(results)
// }

// process()