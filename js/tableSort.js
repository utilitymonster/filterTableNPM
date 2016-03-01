// tableSort.js

var tableSort = function(rows, sort, order){

  rows.sort(function(a,b){

    if (sort === "name") {
      return a[sort].localeCompare(b[sort]);
    }else{
      var a_sort = (a[sort] === "unknown" ? -1 : parseFloat(a[sort]));
      var b_sort = (b[sort] === "unknown" ? -1 : parseFloat(b[sort]));
      return a_sort - b_sort;
    }

  });

  if (!order) {
    rows.reverse();
  }

  return rows
  
}

module.exports = tableSort;

          