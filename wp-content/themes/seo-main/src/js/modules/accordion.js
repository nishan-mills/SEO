/**
 * Accordion
 */

export default function() {
  $('.toggle span.content-grid').click(function(e) {
    e.preventDefault();

    let $parent = $(this).parent();

    if (!$parent.hasClass('active')) {
      $('.toggle').filter('.active')
        .removeClass('active')
        .find('.answer')
        .slideUp('medium');

      $parent
        .addClass('active')
        .find('.answer').slideDown('medium');
    } else {
      $parent
        .removeClass('active')
        .find('.answer').slideUp('medium');
    }



  });

  $('li.cat-js').on('click', function() {
    $('li.cat-js').removeClass('active-selection');
    $(this).addClass('active-selection');
    var cat_class = $(this).attr('class').split(' ')[1];
    $('li.question-js').removeClass('hide');
    $('li.question-js').not("li.question-js." + cat_class).addClass('hide');
  });
}
