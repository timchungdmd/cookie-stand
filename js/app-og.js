

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


  