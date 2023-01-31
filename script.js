var randomId;

function getData(id) {
  fetch(`https://api.adviceslip.com/advice/${id}`)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      document.getElementById('text-advice').textContent =
        '"' + result.slip.advice + '"';
    })
    .catch((err) => {
      console.log(err);
    });
}
// function randomGenerator() {
//     return new Promise((resolve, reject) => {
//         return Math.floor(Math.random() * 301).then(res => {
//             this.getData(this.randomId);
//             console.log("response", res);
//             resolve(res)
//             console.log("randomGenerator", this.randomId);
//         }).then(
//             () => {
//                 document.getElementById('advice').insertAdjacentText(right, String(this.randomId));
//             }
//         )
//             .catch(err => reject(err));
//     })
// }
function randomGenerator() {
  this.randomId = Math.floor(Math.random() * 101);
  console.log(this.randomId);
  this.getData(this.randomId);
  document.getElementById('advice').textContent = this.randomId;
}
