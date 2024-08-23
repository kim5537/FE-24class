// //0-29
// // 인데스값인거 같은데 어떻게 해야할가.
// const quotes = (datas)=> {
//   const quote = document.querySelector(".quote")
//   const author = document.querySelector(".author")
//   let output = "";
//   const i = Math.random*28+1(datas.index)
//   datas.froEach((data)=>{
//     output += `${(datas)[i]}`

//   })
//   quote.innerHTML="output.ququote"
// }


// const init = async () => {
//   const datas = await fetch("https://dummyjson.com/quotes")
//   const quotes = await datas.json();
// }

// init();
//정답//////////////////////////////


const  quoteURL = "https://dummyjson.com/quotes";

fetch(quoteURL)
  .then((response)=>response.json())
  .then((data)=>{
    // console.log(data)
    //keu는 quotes를 가진 array
    const result = document.querySelector("#result");
    const random = Math.floor(Math.random()*30);
    result.querySelector(".quote").innerHTML = data.quotes[random].quote;
    result.querySelector(".author").innerHTML = `- ${data.quotes[random].author} -`;
  }).catch((err)=>console.log(err))

