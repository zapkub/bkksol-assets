jQuery(document).ready(function(){

});

$('ul.dropdown-menu.selectpicker li').on('click', function () {
    var selectedValue = $($('select.selectpicker option')[$(this).attr('rel')]).val();
});

function sorting_subdistrict(zip,subdistrict)
{
    console.log('zip= '+zip+' subdistrict= '+subdistrict);
    if(subdistrict=='')subdistrict = '0';

    $.ajax({
        async:false,
        url: '/subdistrict/'+zip+'/'+subdistrict,
        type:"get",
        success: function(e){
            $('#subdistrict').empty().html(e);
            $('#district').empty().append("");
            $('#province').empty().append("");
        }
    });
    event.preventDefault();
}
function sorting_district(subdistrict,district)
{
    console.log('subdistrict= '+subdistrict+' distric= '+district);
    if(district=='')district = '0';
    $.ajax({
        async:false,
        url: '/district/'+subdistrict+'/'+district,
        type:"get",
        success: function(e){
            $('#district').empty().html(e);
            $('#province').empty().append("");
            //$('#amphur_id').html(e);
        }
    });
    event.preventDefault();
}

function sorting_province(district,province)
{
    if(province=='')province = '0';
    $.ajax({
        async:false,
        url: '/province/'+district+'/'+province,
        type:"get",
        success: function(e){
            $('#province').empty().html(e);
            //$('#amphur_id').html(e);
        }
    });
    event.preventDefault();
}
////////////////
function sorting_subdistrict2(zip,subdistrict)
{

    if(subdistrict=='')subdistrict = '0';
    $.ajax({
        async:false,
        url: '/subdistrict/'+zip+'/'+subdistrict,
        type:"get",
        success: function(e){
            $('#subdistrict_p').empty().html(e);
            $('#district_p').empty().append("<option value=''>กรุณาเลือกอำเภอ/เขต</option>");
            $('#province_p').empty().append("<option value=''>กรุณาเลือกจังหวัด</option>");
        }
    });
    event.preventDefault();
}
function sorting_district2(subdistrict,district)
{
    if(district=='')district = '0';
    $.ajax({
        async:false,
        url: '/district/'+subdistrict+'/'+district,
        type:"get",
        success: function(e){
            $('#district_p').empty().html(e);
            $('#province_p').empty().append("<option value=''>กรุณาเลือกจังหวัด</option>");
        }
    });
    event.preventDefault();
}

function sorting_province2(district,province)
{
    if(province=='')province = '0';
    $.ajax({
        async:false,
        url: '/province/'+district+'/'+province,
        type:"get",
        success: function(e){
            $('#province_p').empty().html(e);
        }
    });
    event.preventDefault();
}