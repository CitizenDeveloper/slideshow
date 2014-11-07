$(document).ready(function() {
  $('.slideshow-links').on('click', 'a', function(e) {
    e.preventDefault()
    var url = $(this).attr('href')

    $.get(url, render)
  })

  function render(markdown) {
    hideIndex()
    $('#source').html(markdown)
    $('#source').show()
    remark.create()
  }

  function hideIndex() {
    $('.index').hide()
  }
})
