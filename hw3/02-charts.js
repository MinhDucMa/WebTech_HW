const backgroundColors = [
  'rgba(54, 162, 235, 0.8)',
  'rgba(255, 206, 86, 0.8)',
  'rgba(255, 99, 132, 0.8)',
  'rgba(75, 192, 192, 0.8)',
  'rgba(153, 102, 255, 0.8)',
  'rgba(255, 159, 64, 0.8)',
  'rgba(199, 199, 199, 0.8)',
  'rgba(83, 102, 255, 0.8)',
  'rgba(40, 159, 64, 0.8)',
  'rgba(210, 199, 199, 0.8)',
  'rgba(78, 52, 199, 0.8)',
];

const borderColors = [
  'rgba(54, 162, 235, 1)',
  'rgba(255, 206, 86, 1)',
  'rgba(255, 99, 132, 1)',
  'rgba(75, 192, 192, 1)',
  'rgba(153, 102, 255, 1)',
  'rgba(255, 159, 64, 1)',
  'rgba(159, 159, 159, 1)',
  'rgba(83, 102, 255, 1)',
  'rgba(40, 159, 64, 1)',
  'rgba(210, 199, 199, 1)',
  'rgba(78, 52, 199, 1)',
];

// url for the Thrones API
const url = 'https://thronesapi.com/api/v2/Characters';

async function fetchAPI () {
  try {
    const response = await fetch(url);
    const data = await response.json();
    data.forEach((character) => {
      console.log(character.family);
    });
    return data;
  }
  catch (error) {
    console.log("ERROR MESSAGE: ", error);
  }
}

function countCharacterByHouse(characters){
  const characterByHouse = {};
  
  //|| houseStringReplace.includes(Object.keys(characterByHouse).substr(0,4))
  characters.forEach((character) => {
    const house = character.family.toLowerCase();
    const houseStringReplace = house.replace("house ", "");
    const houseSubString = houseStringReplace.substring(0,4);
    const matchingHouse =  Object.keys(characterByHouse).find(key => key.substring(0,4) === houseSubString);
    if(matchingHouse){
      characterByHouse[matchingHouse]++;
    }
    else{
      characterByHouse[houseStringReplace] = 1;
    }
  })
  return characterByHouse;
}

const renderChart = (data) => {
  const donutChart = document.querySelector('.donut-chart');
  const labels = Object.keys(data);
  const values = Object.values(data);

  new Chart(donutChart, {
    type: 'doughnut',
    data: {
      labels: labels,
      datasets: [
        {
          
          data: values,
          backgroundColor: backgroundColors,
          borderColor: borderColors,
          borderWidth: 1,
        },
      ],
    },
    options: {
      legend: {
        display: false
      }
    }
  });
};


(async() =>  {
  const characters = await fetchAPI();
  const characterCountByHouse = countCharacterByHouse(characters);
  renderChart(characterCountByHouse);
})();
// fetchAPI();
// renderChart();
