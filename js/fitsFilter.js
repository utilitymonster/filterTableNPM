//fitsFilter.js

function fitsFilter(row, searchText, caseSensitive){

  if (searchText == ""){
    return true;
  }

  if (!caseSensitive) searchText = searchText.toLowerCase();

  var checkArray = ['name', 'model', 'manufacturer'];
  var filter_return = false;

  checkArray.forEach(function(checkItem){

    if (row[checkItem]) {

      var thisItem = (caseSensitive ? row[checkItem] : row[checkItem].toLowerCase());
      if (thisItem.indexOf(searchText) > -1) {
        filter_return = true;
      }
    }
  })

  return filter_return;
}

module.exports = fitsFilter;