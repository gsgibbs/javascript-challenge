

// create more explicit variable
var ufoData = data;

// create tbody variable to use when appending data
var tbody = d3.select('tbody');

// append objects from data.js into new table rows inside table body
ufoData.forEach(item => {
    var tr = tbody.append('tr');
    tr.append('td').text(item.datetime);
    tr.append('td').text(item.city);
    tr.append('td').text(item.state);
    tr.append('td').text(item.country);
    tr.append('td').text(item.shape);
    tr.append('td').text(item.durationMinutes);
    tr.append('td').text(item.comments);
});

// create button variable to be used in function
var ufobutton = d3.select('#filter-btn');

// function that will get user input from form and use it to filter upon clicking button
button.on('click', function() {
    // make variables for inputs and values for date and city
    var ufodateInput = d3.select('#date-filter');
    var ufodateValue = ufodateInput.property('value');
    // var ufotateInput = d3.select('#state-filter');
    // var ufostateValue = stateInput.property('value');
    // var ufocityInput = d3.select('#city-filter');
    // var ufocityValue = cityInput.property('value');

    // use input to filter data by date
    var filtered = ufoData.filter(item => item.datetime === dateValue)
    //  && item.state === stateValue.toLowerCase() && item.city === cityValue.toLowerCase());
    // console.log(filtered);
    // clear table info before appending filtered data
    tbody.html(``);
    // adding filtered data
    filtered.forEach( item => {
        var tr = ufobody.append('tr');
        tr.append('td').text(item.datetime);
        tr.append('td').text(item.city);
        tr.append('td').text(item.state);
        tr.append('td').text(item.country);
        tr.append('td').text(item.shape);
        tr.append('td').text(item.durationMinutes);
        tr.append('td').text(item.comments);
    });
});
