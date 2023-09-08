 const button = document.getElementById('btn');
const text = document.getElementById("text");
const changeText =()=>{
 　text.textContent="ボタンをクリックしました"
}
button.addEventListener("click", changeText);