
var options = {
  series: [2, 3],
  chart: {
  type: 'donut',
},
labels: ['Petrol','Diesel'],
dataLabels: {
  enabled: false
},
colors:['#F30A13', '#5B40C5'],
responsive: [{
  breakpoint: 480,
  options: {
    chart: {
      width: 270
    },
    legend: {
      position: 'right'
    }
  },
  
}]
};

var chart = new ApexCharts(document.querySelector("#generator-chart"), options);
chart.render();

var options = {
  series: [1, 5],
  chart: {
  type: 'donut',
  size: '25%'
},
labels: [ 'Solar', 'Wind'],
dataLabels: {
  enabled: false
},
colors:['#62C7FF', '#FBB500'],
responsive: [{
  breakpoint: 480,
  options: {
    chart: {
      width: 270
    },
    legend: {
      position: 'right'
    }
  }
}]
};

var chartwo = new ApexCharts(document.querySelector("#renewable-chart"), options);
chartwo.render();

let generatorChart = document.querySelector("#generator-chart");
let renewableChart = document.querySelector("#renewable-chart");
let select = document.querySelector("#inputGroupSelect01");

function onChangeGenerator (event){
  let eventValue = event.target.value;
  if (eventValue === "January"){
    chart.updateOptions({
      series: [2, 3],
      colors:['#F30A13', '#5B40C5']
  })
  chartwo.updateOptions({
    series: [1, 5],
    colors:['#62C7FF', '#FBB500']
})
}
  else if (eventValue === "February"){
    chart.updateOptions({
      series: [5, 2],
      colors:['#FF5733', '#8E44AD']
  })
  chartwo.updateOptions({
    series: [2, 4],
    colors:['#EB1D36', '#1C2833']
  })
  }

  else if (eventValue === "March"){
    chart.updateOptions({
      series: [7, 5],
      colors:['#4A235A', '#F1C40F']
  })
  chartwo.updateOptions({
    series: [6, 3],
    colors:['#154360', '#943126']
  })
  }

  else if (eventValue === "April"){
    chart.updateOptions({
      series: [7, 2],
      colors:['#186A3B', '#F1C40F']
  })
  chartwo.updateOptions({
    series: [5, 3],
    colors:['#EB984E', '#A04000']
  })
  }

  else if (eventValue === "May"){
    chart.updateOptions({
      series: [9, 5],
      colors:['#0B5345', '#E74C3C']
  })
  chartwo.updateOptions({
    series: [7, 6],
    colors:['#78281F', '#A04000']
  })
  }

  else if (eventValue === "June"){
    chart.updateOptions({
      series: [5, 8],
      colors:['#BA4A00', '#E74C3C']
  })
  chartwo.updateOptions({
    series: [9, 4],
    colors:['#154360', '#145A32']
  })
  }

  else 
    chart.updateOptions({
      series: [5, 7],
      colors:['#F30A13', '#5B40C5']
  })
  chartwo.updateOptions({
    series: [1, 4],
    colors:['#154360', '#145A32']
  })
  
}

select.addEventListener("change", onChangeGenerator);

const t = new Date();
let time = t.toLocaleString();
let dataDate = t.toDateString();
document.querySelector('.time').innerHTML = time;
document.querySelector('.time-one').innerHTML = time;
document.querySelector('.time-two').innerHTML = time;
document.querySelector('.data-date').textContent =  dataDate;
document.querySelector('.data-date-two').textContent =  dataDate;
document.querySelector('.data-date-three').textContent =  dataDate;
document.querySelector('.data-date-four').textContent =  dataDate;
document.querySelector('.data-date-five').textContent =  dataDate;
document.querySelector('.data-date-six').textContent =  dataDate;
document.querySelector('.data-date-seven').textContent =  dataDate;
document.querySelector('.data-date-eight').textContent =  dataDate;


var options = {
  series: [{
    name: "Average Voltage",
    data: [275, 1000, 520, 1250, 515, 998, 700, 1200, 270, 2200, 100, 1300, 900]
}],
  chart: {
  height: 350,
  type: 'line',
  zoom: {
    enabled: false
  }
},
dataLabels: {
  enabled: false
},
stroke: {
  curve: 'smooth',
  width: 1.5
},
title: {
  text: 'Average Voltage',
  align: 'left'
},
grid: {
  row: {
    colors: ['transparent'], // takes an array which will be repeated on columns
    opacity: 0.5
  },
},
xaxis: {
  categories: ['1', '5', '7', '9', '11', '13', '15', '18', '21', '24', '26', '28', '30'],
}
};

var charthree = new ApexCharts(document.querySelector("#chart-analytics-one"), options);
charthree.render();

let chartAnalyticsOne = document.querySelector("#chart-analytics-one");
let inlineRadio = document.querySelector(".inlineRadio");
let dataText = document.querySelector(".data-text")

function onChangeData (event){
  let eventValue = event.target.value;
  if (eventValue === "Days"){
    charthree.updateOptions({
      series: [{
        data:  [275, 1000, 520, 1250, 515, 998, 700, 1200, 270, 2200, 100, 1300, 900]
    }],
      xaxis: {
        categories: ['1', '5', '7', '9', '11', '13', '15', '18', '21', '24', '26', '28', '30']
      }
    }) 
    dataText.textContent = "Data current:" + " " + "Monday - Sunday"
  }

  else if (eventValue === "Weeks"){
    charthree.updateOptions({
      series: [{
        data:  [1000,  1250, 515, 998]
    }],
      xaxis: {
        categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4']
      }
    }) 

    dataText.textContent = "Data current:" + " " + "Week 1 - Week 4"
  }

  else  {
    charthree.updateOptions({
      series: [{
        data:  [1000,  1250, 515, 998, 670, 280, 450, 210, 890, 270, 1450, 700]
    }],
      xaxis: {
        categories: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
      }
    }) 
    dataText.textContent = "Data current:" + " " + "January - December"
  }

}

inlineRadio.addEventListener("click", onChangeData);


var options = {
  series: [{
    name: "Average Current",
    data: [140, 215, 230, 300, 240, 400,240, 300, 200, 230, 290,180, 260, 300,210, 190, 500, 100, 50, 200,240,230,320, 400, 240, 610, 240, 230, 270, 300]
}],
  chart: {
  height: 350,
  type: 'line',
  zoom: {
    enabled: false
  }
},
dataLabels: {
  enabled: false
},
stroke: {
  curve: 'straight',
  width:1
},
title: {
  text: 'Average Current',
  align: 'left'
},
grid: {
  row: {
    colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
    opacity: 0.5
  },
  // padding:{
  //   left: 0,
  // },
},
xaxis: {
  categories: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
}, 
yaxis:{
  min:0,
  max:2500,
  tickAmount:10,
  // labels:{
  //   offsetX: -25,
  // },
},

};

var chartFour = new ApexCharts(document.querySelector("#chart-analytics-two"), options);
chartFour.render();


let chartAnalyticsTwo = document.querySelector("#chart-analytics-two");
let inlineRadioTwo = document.querySelector(".inlineRadioTwo");
let dataTextTwo = document.querySelector(".data-text-two")



function onChangeDataTwo (event){
  let eventValue = event.target.value;
  if (eventValue === "Days"){
    chartFour.updateOptions({
      series: [{
        data:  [140, 215, 230, 300, 240, 400,240, 250, 200, 230, 190,350, 260, 300,210, 120, 500, 100, 250, 680,240,330,320, 400, 240, 550, 240, 740, 270, 300]
    }]
  
    }) 
    dataTextTwo.textContent = "Data current:" + " " + "Monday - Sunday"
  }

  else if (eventValue === "Weeks"){
    chartFour.updateOptions({
      series: [{
        data:  [140, 215, 230, 300, 240, 400,240, 300, 200, 230, 400,180, 260, 500,210, 190, 750, 100, 50, 200,240,230,320, 400, 240, 610, 240, 750, 500, 720]
    }]
    }) 

    dataTextTwo.textContent = "Data current:" + " " + "Week 1 - Week 4"
  }

  else  {
    chartFour.updateOptions({
      series: [{
        data:[140, 215, 230, 300, 240, 400,240, 300, 200, 230, 290,180, 260, 300,210, 190, 500, 100, 50, 200,240,230,320, 400, 240, 610, 240, 230, 270, 300]
    }]
    }) 
    dataTextTwo.textContent = "Data current:" + " " + "January - December"
  }

}

inlineRadioTwo.addEventListener("click", onChangeDataTwo);


var options = {
  series: [{
    name: "Average Temperature",
    data: [140, 215, 230, 300, 240, 400,240, 300, 200, 230,180, 260, 300,210, 500, 100, 50, 200,240,320, 400, 240, 610, 240, 230, 270, 300]
}],
  chart: {
  height: 350,
  type: 'line',
  zoom: {
    enabled: false
  }
},
dataLabels: {
  enabled: false
},
stroke: {
  curve: 'straight',
  width:1,
  colors:'#ED1C24'
  
},
title: {
  text: 'Average Temperature',
  align: 'left'
},
grid: {
  row: {
    colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
    opacity: 0.5
  },
},
xaxis: {
  categories: [1,2,3,4,5,6,7,8,9,10,12,13,15,16,18,19,20,21,22,23,24,25,26,27,28,29,30],
}, 
yaxis:{
  min:0,
  max:2500,
  tickAmount:10,
},
};

var chartFive = new ApexCharts(document.querySelector("#chart-analytics-three"), options);
chartFive.render();

let chartAnalyticsThree = document.querySelector("#chart-analytics-three");
let inlineRadioThree = document.querySelector(".inlineRadioThree");
let dataTextThree = document.querySelector(".data-text-three")

function onChangeDataThree (event){
  let eventValue = event.target.value;
  if (eventValue === "Days"){
    chartFive.updateOptions({
      series: [{
        data:  [140, 215, 230, 300, 240, 400,240, 300, 200, 230,180, 260, 300,210, 500, 100, 50, 200,240,320, 400, 240, 610, 240, 230, 270, 300]
    }]
  
    }) 
    dataTextThree.textContent = "Data current:" + " " + "Monday - Sunday"
  }

  else if (eventValue === "Weeks"){
    chartFive.updateOptions({
      series: [{
        data:  [140, 215, 230, 300, 240, 400,240, 300, 200, 230, 400, 260, 500,210, 190, 100, 50, 200,240,320, 400, 240, 610, 240, 750, 500, 720]
    }]
    }) 

    dataTextThree.textContent = "Data current:" + " " + "Week 1 - Week 4"
  }

  else  {
    chartFive.updateOptions({
      series: [{
        data:[140, 215, 230, 300, 240, 400,240, 300, 200, 230, 290,180, 260, 210, 190, 500, 100, 200,240,230,320, 240, 610, 240, 230, 270, 300]
    }]
    }) 
    dataTextThree.textContent = "Data current:" + " " + "January - December"
  }

}

inlineRadioThree.addEventListener("click", onChangeDataThree);


var options = {
  series: [{
    name: "Average Frequency",
    data: [5, 250, 400, 350, 400, 300, 10, 700 ]
}],
  chart: {
  height: 350,
  type: 'line',
  zoom: {
    enabled: false
  }
},
dataLabels: {
  enabled: false
},
stroke: {
  curve: 'straight',
  width:1.5
},
title: {
  text: 'Average Frequency',
  align: 'left'
},
grid: {
  row: {
    colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
    opacity: 0.5
  },
},
xaxis: {
  categories: [1, 3, 5,10,15,20,25,30],
},
yaxis:{
  min:0,
  max:2500,
  tickAmount:10,
},
};

var chartSix = new ApexCharts(document.querySelector("#chart-analytics-four"), options);
chartSix.render();

let chartAnalyticsFour = document.querySelector("#chart-analytics-four");
let inlineRadioFour = document.querySelector(".inlineRadioFour");
let dataTextFour = document.querySelector(".data-text-four")

function onChangeDataFour (event){
  let eventValue = event.target.value;
  if (eventValue === "Days"){
    chartSix.updateOptions({
      series: [{
        data:[5, 250, 400, 350, 400, 300, 10, 700 ]
    }]
  
    }) 
    dataTextFour.textContent = "Data current:" + " " + "Monday - Sunday"
  }

  else if (eventValue === "Weeks"){
    chartSix.updateOptions({
      series: [{
        data:  [4, 350, 450, 350, 700, 250, 35, 650 ]
    }]
    }) 

    dataTextFour.textContent = "Data current:" + " " + "Week 1 - Week 4"
  }

  else  {
    chartSix.updateOptions({
      series: [{
        data:[2, 200, 390, 350, 500, 300, 15, 800 ]
    }]
    }) 
    dataTextFour.textContent = "Data current:" + " " + "January - December"
  }

}

inlineRadioFour.addEventListener("click", onChangeDataFour);

var options = {
  series: [{
    name: "Fuel Usage",
    data: [140, 215, 230, 300, 240, 400,240, 300, 200, 230,180, 260, 300,210, 500, 100, 50, 200,240,320, 400, 240, 610, 240, 230, 270, 300]
}],
  chart: {
  height: 350,
  type: 'line',
  zoom: {
    enabled: false
  }
},
dataLabels: {
  enabled: false
},
stroke: {
  curve: 'straight',
  width:1,
  colors:'#ED1C24'
  
},
title: {
  text: 'Fuel Usage',
  align: 'left'
},
grid: {
  row: {
    colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
    opacity: 0.5
  },
},
xaxis: {
  categories: [1,2,3,4,5,6,7,8,9,10,12,13,15,16,18,19,20,21,22,23,24,25,26,27,28,29,30],
}, 
yaxis:{
  min:0,
  max:2500,
  tickAmount:10,
},
};

var chartSeven = new ApexCharts(document.querySelector("#chart-analytics-five"), options);
chartSeven.render();

let chartAnalyticsFive = document.querySelector("#chart-analytics-five");
let inlineRadioFive = document.querySelector(".inlineRadioFive");
let dataTextFive = document.querySelector(".data-text-five")

function onChangeDataFive (event){
  let eventValue = event.target.value;
  if (eventValue === "Days"){
    chartSeven.updateOptions({
      series: [{
        data:  [140, 215, 230, 300, 240, 400,240, 300, 200, 230,180, 260, 300,210, 500, 100, 50, 200,240,320, 400, 240, 610, 240, 230, 270, 300]
    }]
  
    }) 
    dataTextFive.textContent = "Data current:" + " " + "Monday - Sunday"
  }

  else if (eventValue === "Weeks"){
    chartSeven.updateOptions({
      series: [{
        data:  [140, 215, 230, 300, 240, 400,240, 300, 200, 230, 400, 260, 500,210, 190, 100, 50, 200,240,320, 400, 240, 610, 240, 750, 500, 720]
    }]
    }) 

    dataTextFive.textContent = "Data current:" + " " + "Week 1 - Week 4"
  }

  else  {
    chartSeven.updateOptions({
      series: [{
        data:[140, 215, 230, 300, 240, 400,240, 300, 200, 230, 290,180, 260, 210, 190, 500, 100, 200,240,230,320, 240, 610, 240, 230, 270, 300]
    }]
    }) 
    dataTextFive.textContent = "Data current:" + " " + "January - December"
  }

}

inlineRadioFive.addEventListener("click", onChangeDataFive);

var options = {
  series: [{
    name: "Average Power",
    data: [5, 250, 400, 350, 400, 300, 10, 700 ]
}],
  chart: {
  height: 350,
  type: 'line',
  zoom: {
    enabled: false
  }
},
dataLabels: {
  enabled: false
},
stroke: {
  curve: 'straight',
  width:1.5
},
title: {
  text: 'Average Power',
  align: 'left'
},
grid: {
  row: {
    colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
    opacity: 0.5
  },
},
xaxis: {
  categories: [1, 3, 5,10,15,20,25,30],
},
yaxis:{
  min:0,
  max:2500,
  tickAmount:10,
},
};

var chartEight = new ApexCharts(document.querySelector("#chart-analytics-six"), options);
chartEight.render();

let chartAnalyticsSix = document.querySelector("#chart-analytics-six");
let inlineRadioSix = document.querySelector(".inlineRadioSix");
let dataTextSix = document.querySelector(".data-text-six")

function onChangeDataSix (event){
  let eventValue = event.target.value;
  if (eventValue === "Days"){
    chartEight.updateOptions({
      series: [{
        data:[5, 250, 400, 350, 400, 300, 10, 700 ]
    }]
  
    }) 
    dataTextSix.textContent = "Data current:" + " " + "Monday - Sunday"
  }

  else if (eventValue === "Weeks"){
    chartEight.updateOptions({
      series: [{
        data:  [4, 350, 450, 350, 700, 250, 35, 650 ]
    }]
    }) 

    dataTextSix.textContent = "Data current:" + " " + "Week 1 - Week 4"
  }

  else  {
    chartEight.updateOptions({
      series: [{
        data:[2, 200, 390, 350, 500, 300, 15, 800 ]
    }]
    }) 
    dataTextSix.textContent = "Data current:" + " " + "January - December"
  }

}

inlineRadioSix.addEventListener("click", onChangeDataSix);

var options = {
  series: [{
    name: "Vibration",
    data: [275, 1000, 520, 1000, 515, 2000, 0, 2200, 10, 2400, 100, 1300, 1200, 1300, 1300]
}],
  chart: {
  height: 350,
  type: 'line',
  zoom: {
    enabled: false
  }
},
dataLabels: {
  enabled: false
},
stroke: {
  curve: 'smooth',
  width: 2,
  colors:'#E289F2'
},
title: {
  text: 'Vibration',
  align: 'left'
},
grid: {
  row: {
    colors: ['transparent'], // takes an array which will be repeated on columns
    opacity: 0.5
  },
},
xaxis: {
  categories: ['1', '5', '7', '9', '11', '13', '15', '18', '21', '24', '26', '27', '28', '29','30'],
}, 
yaxis:{
  min:0,
  max:2500,
  tickAmount:10,
},
};

var chartNine = new ApexCharts(document.querySelector("#chart-analytics-seven"), options);
chartNine.render();


let chartAnalyticsSeven = document.querySelector("#chart-analytics-seven");
let inlineRadioSeven = document.querySelector(".inlineRadioSeven");
let dataTextSeven = document.querySelector(".data-text-seven")

function onChangeDataSeven (event){
  let eventValue = event.target.value;
  if (eventValue === "Days"){
    chartNine.updateOptions({
      series: [{
        data:  [275, 1000, 520, 1000, 515, 2000, 0, 2200, 10, 2400, 100, 1300, 1200, 1300, 1300]
    }],
    }) 
    dataTextSeven.textContent = "Data current:" + " " + "Monday - Sunday"
  }

  else if (eventValue === "Weeks"){
    chartNine.updateOptions({
      series: [{
        data:  [215, 1000, 520, 1000, 515, 1400, 0, 1650, 10, 2000, 100, 1300, 1070, 1300, 1300]
    }],
    }) 

    dataTextSeven.textContent = "Data current:" + " " + "Week 1 - Week 4"
  }

  else  {
    chartNine.updateOptions({
      series: [{
        data:  [275, 1000, 520, 1000, 515, 2000, 0, 2200, 10, 2400, 100, 1300, 1200, 1300, 1300]
    }],
    }) 
    dataTextSeven.textContent = "Data current:" + " " + "January - December"
  }

}

inlineRadioSeven.addEventListener("click", onChangeDataSeven);

var options = {
  series: [{
  name: 'Run Hours',
  data: [12.5, 4.5, 2.5, 1, 8, 5]
}],
  chart: {
  type: 'bar',
  height: 350
},
plotOptions: {
  bar: {
    horizontal: false,
    columnWidth: '30%',
    endingShape: 'rounded',
    borderRadius: 10,
  }
},
dataLabels: {
  enabled: false
},
xaxis: {
  categories: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
},
colors:'#FB6340',
fill: {
  opacity: 1
},
yaxis:{
  min:0,
  max:15,
  tickAmount:3,
},
title: {
  text: 'Run Hours',
  align: 'left'
},
};

var chartTen = new ApexCharts(document.querySelector("#chart-analytics-eight"), options);
chartTen.render();

let runHours = document.querySelector("#run-hours");

function HourFilter (event){
  let eventValue = event.target.value;
  if (eventValue === "Past-months"){
    chartTen.updateOptions({
      series: [{
        data: [4, 9, 13, 12, 10, 14]
      }],
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'April', "May", "Jun"]
      }
    })
  }else if (eventValue === "Jan"){
    chartTen.updateOptions({
      series: [{
        data: [10, 0, 0, 0, 0, 0]
      }],
      xaxis: {
        categories: ['Jan']
      }
    })
  } else if (eventValue === "Feb"){
    chartTen.updateOptions({
      series: [{
        data: [0, 14, 0, 0, 0, 0]
      }],
      xaxis: {
        categories: ['', 'Feb']
      }
    })
  } else if (eventValue === "Mar"){
    chartTen.updateOptions({
      series: [{
        data: [0, 0, 13, 0, 0, 0]
      }],
      xaxis: {
        categories: ['', '', 'Mar']
      }
    })
  } else if (eventValue === "Apr"){
    chartTen.updateOptions({
      series: [{
        data: [0, 0, 0, 12, 0, 0]
      }],
      xaxis: {
        categories: ['', '', '', 'Apr']
      }
    })
  } else if (eventValue === "May"){
    chartTen.updateOptions({
      series: [{
        data: [0, 0, 0, 0, 11, 0]
      }],
      xaxis: {
        categories: ['', '', '', '', 'May']
      }
    })
  } else if (eventValue === "Jun"){
    chartTen.updateOptions({
      series: [{
        data: [0, 0, 0, 0, 0,15]
      }],
      xaxis: {
        categories: ['', '', '', '', '', 'Jun']
      }
    })
  } else if (eventValue === "Filter"){
    chartTen.updateOptions({
      series: [{
        data: [14, 9, 4, 2, 12, 10]
      }],
      xaxis: {
        categories: ['Jul', 'Aug', 'Sep', 'Oct', "Nov", "Dec"]
      }
    })
  } else if (eventValue === "Jul"){
    chartTen.updateOptions({
      series: [{
        data: [11, 0, 0, 0, 0, 0]
      }],
      xaxis: {
        categories: ['Jul']
      }
    })
  } else if  (eventValue === "Aug"){
    chartTen.updateOptions({
      series: [{
        data: [0, 9, 0, 0, 0, 0]
      }],
      xaxis: {
        categories: ['', 'Aug']
      }
    })
  } else if  (eventValue === "Sep"){
    chartTen.updateOptions({
      series: [{
        data: [0, 0, 4, 0, 0, 0]
      }],
      xaxis: {
        categories: ['', '', 'Sep']
      }
    })
  } else if (eventValue === "Oct"){
    chartTen.updateOptions({
      series: [{
        data: [0, 0, 0, 2, 0, 0]
      }],
      xaxis: {
        categories: ['', '', '', 'Oct']
      }
    })
  } else if (eventValue === "Nov"){
    chartTen.updateOptions({
      series: [{
        data: [0, 0, 0, 0, 14, 0]
      }],
      xaxis: {
        categories: ['', '', '','', 'Nov']
      }
    })
  } else {
    chartTen.updateOptions({
      series: [{
        data: [0, 0, 0, 0, 0, 10]
      }],
      xaxis: {
        categories: ['', '', '','','', 'Dec']
      }
    })
  }

}
runHours.addEventListener("change", HourFilter) 

var options = {
  series: [
    {
      name: "Fuel Consumption",
      data: [220, 150, 100, 100, 100, 170, 250]
    },
    {
      name: "Output Power (kw)",
      data: [150, 40, 14, 20, 20, 50, 150]
    }
  ],
  chart: {
  height: 350,
  type: 'line',
  zoom: {
    enabled: false
  }
},
colors: ['#298AFF', '#ED1C24'],
dataLabels: {
  enabled: false
},
stroke: {
  curve: 'smooth',
  width: 1.5
},
title: {
  text: 'Engine Perfomance',
  align: 'left'
},
grid: {
  row: {
    colors: ['transparent'], // takes an array which will be repeated on columns
    opacity: 0.5
  },
},
xaxis: {
  categories: [0,5,10,15,20,25,30],
  title: {
    text: 'Output Power (kw)',
    style: {
      fontSize:'14px'
    }
  }
},
yaxis:{
  min:0,
  max:250,
  tickAmount:5,
  title: {
    text: 'Fuel Consumption',
    style: {
      fontSize:'14px'
    }
  }
},
legend: {
  show: false
}

};

var chartEleven = new ApexCharts(document.querySelector("#chart-analytics-nine"), options);
chartEleven.render();

let chartAnalyticsNine = document.querySelector("#chart-analytics-nine");
let inlineRadioNine = document.querySelector(".inlineRadioNine");
let dataTextNine = document.querySelector(".data-text-nine")


function onChangeDataNine (event){
  let eventValue = event.target.value;
  if (eventValue === "Days"){
    chartEleven.updateOptions({
      series: [
        {
          name: "Fuel Consumption",
          data: [220, 150, 100, 100, 100, 170, 250]
        },
        {
          name: "Output Power (kw)",
          data: [150, 40, 14, 20, 20, 50, 150]
        }
      ],
    }) 
    dataTextNine.textContent = "Data current:" + " " + "Monday - Sunday"
  }

  else if (eventValue === "Weeks"){
    chartEleven.updateOptions({
      series: [
        {
          name: "Fuel Consumption",
          data: [200, 150, 120, 140, 150, 190, 250]
        },
        {
          name: "Output Power (kw)",
          data: [130, 30, 20, 35, 40, 70, 120]
        }
      ],
    }) 

    dataTextNine.textContent = "Data current:" + " " + "Week 1 - Week 4"
  }

  else  {
    chartEleven.updateOptions({
      series: [
        {
          name: "Fuel Consumption",
          data: [220, 150, 100, 100, 100, 170, 250]
        },
        {
          name: "Output Power (kw)",
          data: [150, 40, 14, 20, 20, 50, 150]
        }
      ],
    }) 
    dataTextNine.textContent = "Data current:" + " " + "January - December"
  }

}

inlineRadioNine.addEventListener("click", onChangeDataNine);