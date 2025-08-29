// LIKE BUTTON START
const likeCounter = document.getElementById("like-btn");
const likeBtns = document.getElementsByClassName("like-btn");
let likeCount = 0; 
for (let btn of likeBtns) {
    btn.addEventListener("click", function () {
        likeCount++;
        likeCounter.textContent = likeCount;
    }); 
}
















// CALL BUTTON  START 
const coinsBtn =document.getElementById('coins');
const historyList = document.getElementById('history-list');
const clearBtn = document.getElementById('clear-btn');
const callButtons = document.querySelectorAll('.call-btn');
let coins = 100;
for(let btn of callButtons){
    btn.addEventListener('click', function(){
        const card = btn.closest('.card');
   
    const serviceName = card.querySelector('.name').innerText;
    const serviceNum = card.querySelector('.num').innerText;

    
    // COINS VALIDATION START
    if(coins >= 20){
        coins -= 20;
        coinsBtn.querySelector('span').textContent = coins;
        
        alert(`📞 Call ${serviceName} to ${serviceNum}`);

    }else{
        alert('❌ There are not enough coin to make a call')
        return;
    }
    
    const time = new Date().toLocaleTimeString();
            const li = document.createElement('li');
        li.className = 'history-card';
        li.innerHTML = `
            <div class="flex justify-between items-center rounded-lg shadow" >
                <div class="flex flex-col mt-2 py-1 pl-3">
                    <span class="font-bold mb-3 text-sm text-gray-800">${serviceName}</span>
                    <span class="text-gray-500">${serviceNum}</span>
                </div>
                <div class="text-gray-400 text-[12px]">${time}</div>
            </div>
        `;
        historyList.appendChild(li);

 });

}

// CLEAR BUTTON START
clearBtn.addEventListener('click', function(){
    historyList.innerHTML = ''; 
});

