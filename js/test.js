'use strict';

const salestablecontainer = document.getElementById/* ('sales-table');
// get proof of life when inteereacting with the DOM:
console.log(salestablecontainer);

const salesTable = document.querySelector('table');
console.log(salesTable);
const salesBody = document.querySelector('table tbody');

const salesHead = document.querySelector('table thead');
const salesFoot = document.querySelector('table tfoot');
 */


// Constructor Function, a "Factory" for creating Kitten instances.



function Sales(location, minCust,maxCust, avgSales) {
  // function name starts with capital letter because it's a constructor function.
  this.location = location,
  this.minCust = minCust,
  this.maxCust = maxCust,
  this.avgSales = avgSales,
  this.openHrsArray=['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
  this.salesPerHrArray=[],
  this.cities=['Seattle','Tokyo','Seattle','Dubai','Lima']
}


 Sales.prototype.randCustPerHr=function(){
      return Math.floor(Math.random()*(this.maxCust-this.minCust+1)+this.minCust)
 }

Sales.prototype.salsesPerHr=function(){
  for(let i=0; i<this.openHrsArray.length; i++){  
    Math.floor(this.avgSales*(Math.floor(this.randCustPerHr())))
    return salePerHrArray.push(this.salsesPerHrArray());   
  }}

// METHODS
// methods get added to the constructor's prototyp
Sales.prototype.totalSales=function(){
  for(let i=0; i<openHrsArray.length; i++){ 
  let salesPerHr=Math.floor(this.avgSales*(Math.floor(this.randCustPerHr())))
  return salePerHrArray.push(salesPerHr());

}}


Sales.prototype.renderTable = function() {
  let tr = document.createElement('tr');
  salesBody.appendChild(tr);
  let tdname = document.createElement('td');
  tdname.textContent = this.location;
  tr.appendChild(tdname);
  for (let i = 0; i < openHrArray.length; i++) {
    let td = document.createElement('td');
    td.textContent = totalSalesArray[i];
    tr.appendChild(td);
  }
}



Sales.prototype.render = function () {


  // get the "container" for kitten profiles
  const containerElem = document.getElementById('sales-table');

  // each kitten profile is in an article
  const articleElem = document.createElement('article');
  containerElem.appendChild(articleElem);

  // add the article heading
  const headingElem = document.createElement('h2');
  articleElem.appendChild(headingElem);
  headingElem.textContent = this.location+' Sales Data.';

  
  const tableElem = document.createElement('table');
  articleElem.appendChild(tableElem);

  const tbodyElem = document.createElement('tbody');
  tableElem.appendChild(tbodyElem);

  const firstCol=document.createElement('th');
  tbodyElem.appendChild(firstCol);

  for(let i=0; i<this.openHrsArray.length; i++) {
    let headerRow=document.createElement('th');
    tbodyElem.appendChild(headerRow);
    headerRow.textContent = this.openHrsArray[i];
  }

  for(let i=0; i<this.openHrsArray.length; i++) { 
    let rowData=document.createElement('td');
    tbodyElem.appendChild(rowData); 
    rowData.textContent=this.salesPerHrArray[i];

  }


  for(let i=0; i<this.cities.length; i++) {
    let headerRow=document.createElement('tr');
    tbodyElem.appendChild(headerRow);
    headerRow.textContent = this.cities[i];
  }
  const totalRow=document.createElement('tr');
  tbodyElem.appendChild(totalRow); 
  totalRow.textContent = 'Total';

  /* const openTimeCell=document.createElement('th');
  headerRow.appendChild(openTimeCell); */
 
  const dataRow=document.createElement('td');
  tbodyElem.appendChild(dataRow);

 const footerRow=document.createElement('th');
  tbodyElem.appendChild(footerRow);
  footerRow.textContent = 'Footer';




}

const seattle = new Sales('Seattle', 23,65,6.3);
seattle.totalSales();
seattle.render();
