//'use stricts';
//ul.appendChild(li);
//let test='boom boom pow'
//li.textContent=test;

//let sea_sale=document.createElement('article')
//li.appendChild(sea_sale);
//sea_sale.textContent='Seattle Sale Data';
/* const tablecontainer = document.getElementById('sales-table');
// get proof of life when inteereacting with the DOM:
console.log(table);

const salesTable = document.querySelector('table');
console.log(salesTable;
const kittenBody = document.querySelector('table tbody');

const salesHead = document.querySelector('table thead');
const salesFoot = document.querySelector('table tfoot');

 */


//ul.appendChild(sea_sale);
/* const cookieStand=document.getElementById('salmon-cookies');
let art=document.createElement('article');
art.textContent='Salmon Cookie Sales Numbers';
cookieStand.appendChild(art); 
let ul=document.createElement('ul');
art.appendChild(ul);
let li=document.createElement('li');


function Data(location, minCust, maxCust, openHr,){

}
function Render(){
 */

const seattle_data={
  location: 'Seattle',
  minCustHr:23,
  maxCustHr:65,
  avgSaleCust:6.3,
  totalSales:0,
  saleHr: function() {
    for (let i=0; i<14;i++){
      let time=['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
      let minCustHr=this.minCustHr;
      let maxCustHr=this.maxCustHr;
      let avgSaleCust=this.avgSaleCust
      let li=document.createElement('li');
      ul.appendChild(li);
      let numberSale=Math.floor(avgSaleCust*randomCust(minCustHr,maxCustHr));
      this.totalSales+=numberSale;
    li.textContent=time[i]+':'+numberSale+' cookies sold to '+randomCust(maxCustHr,minCustHr)+' customers.';
    }

  }
}
function randomCust(min,max){
  return Math.floor(Math.random()*(max-min+1)+min);
}
ul.textContent=seattle_data.location+' Sales'
art.appendChild(ul);
seattle_data.saleHr();
ul.appendChild(li);
li.textContent='Total :'+seattle_data.totalSales;


ul=document.createElement('ul');
art.appendChild(ul);
li=document.createElement('li');


const tokyo_data={
  location: 'Tokyo',
  minCustHr:3,
  maxCustHr:24,
  avgSaleCust:1.2,
  totalSales:0,
  saleHr: function() {
    for (let i=0; i<14;i++){
      let time=['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
      let minCustHr=this.minCustHr;
      let maxCustHr=this.maxCustHr;
      let avgSaleCust=this.avgSaleCust;
      let li=document.createElement('li');
      ul.appendChild(li);
      let numberSale=Math.floor(avgSaleCust*randomCust(minCustHr,maxCustHr));
      this.totalSales+=numberSale;
    li.textContent=time[i]+':'+numberSale+' cookies sold to '+randomCust(maxCustHr,minCustHr)+' customers.';
    }

  }
}
function randomCust(min,max){
  return Math.floor(Math.random()*(max-min+1)+min);
}
ul.textContent=tokyo_data.location+' Sales'
art.appendChild(ul);
tokyo_data.saleHr();
ul.appendChild(li);
li.textContent='Total :'+tokyo_data.totalSales;




ul=document.createElement('ul');
art.appendChild(ul);
li=document.createElement('li');


const dubai_data={
  location: 'Dubai',
  minCustHr:11,
  maxCustHr:38,
  avgSaleCust:3.7,
  totalSales:0,
  saleHr: function() {
    for (let i=0; i<14;i++){
      let time=['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
      let minCustHr=this.minCustHr;
      let maxCustHr=this.maxCustHr;
      let avgSaleCust=this.avgSaleCust;
      let li=document.createElement('li');
      ul.appendChild(li);
      let numberSale=Math.floor(avgSaleCust*randomCust(minCustHr,maxCustHr));
      this.totalSales+=numberSale;
    li.textContent=time[i]+':'+numberSale+' cookies sold to '+randomCust(maxCustHr,minCustHr)+' customers.';
    }

  }
}
function randomCust(min,max){
  return Math.floor(Math.random()*(max-min+1)+min);
}
ul.textContent=dubai_data.location+' Sales'
art.appendChild(ul);
dubai_data.saleHr();
ul.appendChild(li);
li.textContent='Total :'+dubai_data.totalSales;


ul=document.createElement('ul');
art.appendChild(ul);
li=document.createElement('li');


const paris_data={
  location: 'Paris',
  minCustHr:20,
  maxCustHr:38,
  avgSaleCust:2.3,
  totalSales:0,
  saleHr: function() {
    for (let i=0; i<14;i++){
      let time=['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
      let minCustHr=this.minCustHr;
      let maxCustHr=this.maxCustHr;
      let avgSaleCust=this.avgSaleCust;
      let li=document.createElement('li');
      ul.appendChild(li);
      let numberSale=Math.floor(avgSaleCust*randomCust(minCustHr,maxCustHr));
      this.totalSales+=numberSale;
    li.textContent=time[i]+':'+numberSale+' cookies sold to '+randomCust(maxCustHr,minCustHr)+' customers.';
    }

  }
}
function randomCust(min,max){
  return Math.floor(Math.random()*(max-min+1)+min);
}
ul.textContent=paris_data.location+' Sales'
art.appendChild(ul);
paris_data.saleHr();
ul.appendChild(li);
li.textContent='Total :'+paris_data.totalSales;



ul=document.createElement('ul');
art.appendChild(ul);
li=document.createElement('li');


const lima_data={
  location: 'Lima',
  minCustHr:2,
  maxCustHr:16,
  avgSaleCust:4.6,
  totalSales:0,
  saleHr: function() {
    for (let i=0; i<14;i++){
      let time=['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
      let minCustHr=this.minCustHr;
      let maxCustHr=this.maxCustHr;
      let avgSaleCust=this.avgSaleCust;
      let li=document.createElement('li');
      ul.appendChild(li);
      let numberSale=Math.floor(avgSaleCust*randomCust(minCustHr,maxCustHr));
      this.totalSales+=numberSale;
    li.textContent=time[i]+':'+numberSale+' cookies sold to '+randomCust(maxCustHr,minCustHr)+' customers.';
    }

  }
}
function randomCust(min,max){
  return Math.floor(Math.random()*(max-min+1)+min);
}
ul.textContent=lima_data.location+' Sales'
art.appendChild(ul);
lima_data.saleHr();
ul.appendChild(li);
li.textContent='Total :'+lima_data.totalSales;


const kittenbody=document.querySelectorAll('table tbody');
for(let i=0;i<this.likes.length;i++){
  let td=document.createElement('td');
  td.textContent=this.likes[i]
  tr.appendChild(td);}


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
