 const complimentBtn = document.getElementById("complimentButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)


const fortuneBtn = document.getElementById("fortuneButton");

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
            .then(res => {
                const data = res.data;
                alert(data);
        });
    };
    
fortuneBtn.addEventListener('click', getFortune);

const numberBtn = document.getElementById("numberButton");
const numberText = document.getElementById("numberText");

const getNumber = () => {
    axios.get("http://localhost:4000/api/number")
        .then(res => {
            const number = res.data;
            numberText.textContent = number;
        });
};

numberBtn.addEventListener('click', getNumber);

const goalInput = document.getElementById("goalInput");
const addGoalButton = document.getElementById("addGoalButton");
const goalList = document.getElementById("goalList");

const addGoal = () => {
    const goal = goalInput.value.trim();
    if (goal) {
        axios.post("http://localhost:4000/api/goals", { goal })
            .then(res => {
                const newGoal = res.data;
                const listItem = document.createElement("li");
                listItem.textContent = newGoal;
                goalList.appendChild(listItem);
                goalInput.value = "";
            });
    }
};

addGoalButton.addEventListener('click', addGoal);


const quoteText = document.getElementById("quoteText");

const getQuoteOfTheDay = () => {
    axios.get("http://localhost:4000/api/quote")
        .then(res => {
            const quote = res.data;
            quoteText.textContent = quote;
        });
};

getQuoteOfTheDay();
