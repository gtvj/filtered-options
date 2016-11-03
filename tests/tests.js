QUnit.test( "jQuery is available", function( assert ) {
    assert.ok( typeof $ === "function", "$ is available" );
});

QUnit.test( "skill_name is disabled if no skill_types are checked", function( assert ) {

    $('.skill_type').prop('checked', false);

    assert.ok( $('#skill_name').prop('disabled') === true, "skill_name is disabled" );
});


QUnit.test( "skill_name is enabled if any skill_types are checked", function( assert ) {

    $('.skill_type').click();

    assert.ok( $('#skill_name').prop('disabled') === false, "skill_name is enabled" );
});
