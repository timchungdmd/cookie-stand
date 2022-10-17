"use strict";
let totalSales = [];
let salesPerHrArray = [];
let arrayOfArrays = [];
let totalsalesNum = 0; //right last column sum of each row
let columnTotal =0; //sum of each column dat

//array of store open hours
let openHrsArray = [
  "6am",
  "7am",
  "8am",
  "9am",
  "10am",
  "11am",
  "12am",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
  "6pm",
  "7pm",
]; //store open hours

//Sales constructor
function Sales(location, minCust, maxCust, avgSales) {
  // function name starts with capital letter because it's a constructor function.
  (this.location = location),
    (this.minCust = minCust),
    (this.maxCust = maxCust),
    (this.avgSales = avgSales),
    //randomly generated customer number between max and min
    (this.randNum = function () {
      return Math.floor(Math.random() * (maxCust - minCust + 1) + minCust);
    }),
    //sales figure per hour avgsale * customer number every hour
    (this.salesNumPerHr = function () {
      let sales = Math.floor(avgSales * this.randNum());
      return sales;
    });
}

// get the "container" for sales table
const containerElem = document.getElementById("sales-table");

// where the table will be located profile
const articleElem = document.createElement("article");
containerElem.appendChild(articleElem);

// add the article heading
const headingElem = document.createElement("h2");
articleElem.appendChild(headingElem);
headingElem.textContent = " Sales Data per Store";

const tableElem = document.createElement("table");
articleElem.appendChild(tableElem);

const thead = document.createElement("thead");
tableElem.appendChild(thead);
//adding store open time to headerRow//////
const headerRow = document.createElement("th");
thead.appendChild(headerRow);
headerRow.textContent = "Store Hours";
for (let i = 0; i < openHrsArray.length; i++) {
  const headerRow = document.createElement("th");
  thead.appendChild(headerRow);
  headerRow.textContent = openHrsArray[i];
} /////////////////////////////////////

//////adding last column showing total of the row////
const totalSalesCol = document.createElement("th");
thead.appendChild(totalSalesCol);
totalSalesCol.textContent = "Total Sales";
////////////////////////////////////////////

//////creating and appending body of the table//////
const tbodyElem = document.createElement("tbody");
tableElem.appendChild(tbodyElem);
////////////////////////////////////////////////

Sales.prototype.render = function () {
  const eachRow = document.createElement("tr");
  tbodyElem.appendChild(eachRow);

  const headerRow = document.createElement("th");
  tbodyElem.appendChild(headerRow);
  headerRow.textContent = this.location;

  for (let j = 0; j < openHrsArray.length; j++) {
    totalSales.push(this.salesNumPerHr());
  }
  //appending sales per hour array to arrayOfArrays array. This will contain all the sales data per hour per store in its own array
  arrayOfArrays.push(totalSales);



  for (let j = 0; j < openHrsArray.length; j++) {
    let salesData = document.createElement("td");
    salesData.id = j;
    tbodyElem.appendChild(salesData);
    salesData.textContent = totalSales[j];
  }

  for (let j = 0; j < openHrsArray.length; j++) {
    totalsalesNum += totalSales[j];
  }

  const totalSalesCol = document.createElement("td");
  tbodyElem.appendChild(totalSalesCol);
  totalSalesCol.textContent = totalsalesNum;

  

  totalsalesNum = 0;
  totalSales = [];

 
  };
  


//columnSum

  




//totl sum of each time column//

const tfooter=document.createElement('tfooter');
  tableElem.appendChild(tfooter);
  const totalRow=document.createElement('th');
  tfooter.appendChild(totalRow);
  totalRow.textContent = 'Total Sum';



  const totalsum=function(){
    let columnSum=0
    for(let x=0;x<arrayOfArrays.length;x++) {
      
      openHrsArray.id=x
      for(let y=0;y<openHrsArray.length;y++){
        arrayOfArrays.id=y
        
        columnSum=columnSum+(arrayOfArrays[x])[y];
        
      }
    }return columnSum;
  }

  for(let x=0;x<openHrsArray.length;x++){
  const dataRow=document.createElement('td');
    tableElem.appendChild(dataRow);
    dataRow.textContent=(totalsum());
  }
  
    const totalSalesColfinal = document.createElement("td");
    tableElem.appendChild(totalSalesColfinal);
    totalSalesColfinal.textContent = totalsum();



const seattle = new Sales("Seattle", 23, 65, 6.3);
seattle.render();
const tokyo = new Sales("Tokyo", 3, 24, 1.2);
tokyo.render();
const dubai = new Sales("Dubai", 11, 38, 3, 7);
dubai.render();
const paris = new Sales("Paris", 20, 38, 2.3);
paris.render();
const lima = new Sales("Lima", 2, 16, 4.6);
lima.render();

let form = document.querySelector(`form`);
console.log(form);

// 3. Declar an event handler (a function)
let handleSubmit = function (event) {
  event.preventDefault();
  console.log("the form submitted");
  console.log(event.target.location.value);

  let name = event.target.location.value;
  let avgSalePerCust = parseInt(event.target.avgSalePerCust.value);
  let minCust = parseInt(event.target.minCust.value);
  let maxCust = parseInt(event.target.maxCust.value);

  // function Sale(name, about, src, alt, likes) {
  let newstore = new Sales(name, minCust, maxCust, avgSalePerCust);
  newstore.render();
};

// 2. Add event listener
// what type of event? Submit

form.addEventListener("submit", handleSubmit);
