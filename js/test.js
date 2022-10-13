'use strict'
let totalSales=[];
let salesPerHrArray=[];
let openHrsArray =['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
let totalsalesNum=0
//Sales constructor
function Sales(location, minCust,maxCust, avgSales) {
  // function name starts with capital letter because it's a constructor function.
  this.location = location,
  this.minCust = minCust,
  this.maxCust = maxCust,
  this.avgSales = avgSales,
  //randomly generated customer number between max and min
  this.randNum=function(){
    return Math.floor(Math.random()*(maxCust-minCust+1)+minCust)
  },
  //sales figure per hour avgsale * customer number every hour
  this.salesNumPerHr=function(){
    let sales=Math.floor(avgSales*this.randNum());
    return sales
  }
  }

  // get the "container" for sales table
  const containerElem = document.getElementById('sales-table');

  
  // where table will be located profile
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
  const totalSalesCol=document.createElement('th');
    thead.appendChild(totalSalesCol);
    totalSalesCol.textContent = 'Total Sales';

  const tbodyElem = document.createElement('tbody');
  tableElem.appendChild(tbodyElem);

  
  Sales.prototype.render = function () { 
    const eachRow=document.createElement('tr');
    tbodyElem.appendChild(eachRow);


    const headerRow=document.createElement('th');
    tbodyElem.appendChild(headerRow);
    headerRow.textContent = this.location;
    

    for(let j=0; j<openHrsArray.length; j++){
      totalSales.push(this.salesNumPerHr());
    }
    
    for(let j=0; j<openHrsArray.length; j++){
      let salesData=document.createElement('td');
      tbodyElem.appendChild(salesData); 
      salesData.textContent=totalSales[j];
    }
    
    for(let j=0; j<openHrsArray.length; j++){
    totalsalesNum+=totalSales[j];
    }
    const totalSalesCol=document.createElement('td');
    tbodyElem.appendChild(totalSalesCol);
    totalSalesCol.textContent = totalsalesNum;

    totalsalesNum=0
    totalSales=[];
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
