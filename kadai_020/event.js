
const button = document.getElementById('btn');
const text = document.getElementById("text");
 
 const changeText =()=>{
    setTimeout(() => {
        console.log(text.textContent="ボタンをクリックしました");
      }, 2000);
   }
 button.addEventListener("click", changeText);


 