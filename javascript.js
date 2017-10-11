$(function() {
  $('.resultSection').hide()

  var add_option = function () {
    $('.inputs').append('<input></input>')
  }

  $('.addOption').click(add_option)
})
