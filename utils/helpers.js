module.exports = {
  format_date: (date) => {
    // Format date as MM/DD/YYYY
    return date.toLocaleDateString();
  },
  replace: (str, find, replace) => {
    return str.replace(new RegExp(find, 'g'), replace);
  }
};

// Handlebars.registerHelper('replace', function(str, find, replace) {
//   return str.replace(new RegExp(find, 'g'), replace);
// });
