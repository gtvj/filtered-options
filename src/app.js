(function () {

    var disableOptionIfNoTypesSelected = function () {
        var oneChecked = false;
        $('.skill_type').each(function () {
            if ($(this).prop('checked') == true) {
                oneChecked = true
            }
        });

        $('#skill_name').prop('disabled', !oneChecked);
    };

    $(document).ready(function () {
        disableOptionIfNoTypesSelected();
    });

    $('input').on('change', function () {
        disableOptionIfNoTypesSelected();
    })

})();