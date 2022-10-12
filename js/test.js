'use strict'

/* const salestablecontainer = document.getElementById('sales-table');
// get proof of life when inteereacting with the DOM:
console.log(salestablecontainer);

const salesTable = document.querySelector('table');
console.log(salesTable);
const salesBody = document.querySelector('table tbody');

const salesHead = document.querySelector('table thead');
const salesFoot = document.querySelector('table tfoot');
 */


// Constructor Function, a "Factory" for creating Kitten instances.

let salesPerHrArray=[];
let openHrsArray =['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
let totalSalesNum=0

function Sales(location, minCust,maxCust, avgSales) {
  // function name starts with capital letter because it's a constructor function.
  this.location = location,
  this.minCust = minCust,
  this.maxCust = maxCust,
  this.avgSales = avgSales,
  this.cities=['Seattle','Tokyo','Dubai','Paris','Lima'],
  this.randNum=function(){
    return Math.floor(Math.random()*(maxCust-minCust+1)+minCust)
  },
  this.salesNumPerHr=function(){
    return Math.floor(avgSales*this.randNum())
  }
  this.totalSales=function(){
    for(let i=0; i<openHrsArray.length; i++){ 
      return totalSalesNum+=this.salesNumPerHr();
    
    }
  }
}




// METHODS
// methods get added to the constructor's prototyp


Sales.prototype.renderTable = function() {
  let tr = document.createElement('tr');
  salesBody.appendChild(tr);
  let tdname = document.createElement('td');
  tdname.textContent = this.location;
  }


  // get the "container" for kitten profiles
  const containerElem = document.getElementById('sales-table');

  
  // each kitten profile is in an article
  const articleElem = document.createElement('article');
  containerElem.appendChild(articleElem);

  // add the article heading
  const headingElem = document.createElement('h2');
  articleElem.appendChild(headingElem);
  headingElem.textContent =' Sales Data per Store';

  
  const tableElem = document.createElement('table');
  articleElem.appendChild(tableElem);

  const thead=document.createElement('thead');
  tableElem.appendChild(thead);

  const headerRow=document.createElement('th');
    thead.appendChild(headerRow);
    headerRow.textContent = 'Store Hours';

  for(let i=0; i<openHrsArray.length; i++) {
    const headerRow=document.createElement('th');
    thead.appendChild(headerRow);
    headerRow.textContent = openHrsArray[i];
  }
  const tbodyElem = document.createElement('tbody');
  tableElem.appendChild(tbodyElem);


  Sales.prototype.render = function () { 
    const eachRow=document.createElement('tr');
    tbodyElem.appendChild(eachRow);


    const headerRow=document.createElement('th');
    tbodyElem.appendChild(headerRow);
    headerRow.textContent = this.location;
  

    for(let j=0; j<openHrsArray.length; j++){
      let salesData=document.createElement('td');
      tbodyElem.appendChild(salesData); 
      salesData.textContent=this.salesNumPerHr();
    }
  
    const totalSalesData=document.createElement('td');
    tbodyElem.appendChild(totalSalesData); 
    totalSalesData.textContent=totalSalesNum;

  
  }


  /* const openTimeCell=document.createElement('th');
  headerRow.appendChild(openTimeCell); */
 
/*   const dataRow=document.createElement('td');
  tbodyElem.appendChild(dataRow); */


const seattle = new Sales('Seattle', 23,65,6.3);
seattle.render();
const tokyo=new Sales('Tokyo',3,24,1.2)
tokyo.render();
const  dubai= new Sales('Dubai',11,38,3,7);
dubai.render();
const paris = new Sales('Paris',20,38,2.3);
paris.render();
const lima=new Sales('Lima',2,16,4.6);
lima.render();
