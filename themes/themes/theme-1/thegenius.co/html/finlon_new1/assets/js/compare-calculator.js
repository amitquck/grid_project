function emi_calculation(){var o=[];$("#compare-emi-1 table tbody tr").each(function(){var a,e,l=$(this),i=l.find(".interest-rate").data("low-interest"),n=l.find(".interest-rate").data("high-interest"),t=$("#principal-amount").val(),r=$("#loan-year").val();i&&n?(e=loancalculate(t,i,r),a=loancalculate(t,n,r),l.find(".calculated-emi").html('$<span class="low_emi">'+e+'</span> - $<span class="high_emi">'+a+"</span>")):!i&&n?(a=loancalculate(t,n,r),l.find(".calculated-emi").html('Up to $<span class="high_emi">'+a+"</span>")):i&&!n&&(e=loancalculate(t,i,r),l.find(".calculated-emi").html('$<span class="low_emi">'+e+"</span> Onwards")),i&&($emi_val_int=parseFloat(l.find(".calculated-emi .low_emi").text().replace(/,/g,"")),o.push($emi_val_int)),!i&&n&&($emi_val_int=parseFloat(l.find(".calculated-emi .high_emi").text().replace(/,/g,"")),o.push($emi_val_int))});var e=Math.min(...o);$("#compare-emi-1 table tbody tr").each(function(){var a=$(this);a.find(".calculated-emi .low_emi").text().replace(/,/g,"")!=e&&a.find(".calculated-emi .high_emi").text().replace(/,/g,"")!=e||a.addClass("lowest_emi")})}function loancalculate(a,e,l){var i=a,a=12*l,l=e/100/12,e=Math.pow(1+l,a),e=i*l*(e/(e-1)),a=a*e,a=(a-i)/a*100;return $("#tbl_int-pge").html(a.toFixed(2)+" %"),$("#tbl_loan_pge").html(100-a.toFixed(2)+" %"),e.toFixed(2).toString().replace(/,/g,"").replace(/\B(?=(\d{3})+(?!\d))/g,",")}function slider_change(){$("#finlon-principal-slide").slider({range:"min",min:3e4,max:5e5,value:5e4,step:1e3,slide:function(a,e){$("#principal-show").text(e.value),$("#principal-amount").val(e.value)},change:function(){emi_calculation()}}),$("#principal-show").text($("#finlon-principal-slide").slider("value")),$("#principal-amount").val($("#finlon-principal-slide").slider("value")),$("#finlon-year-slide1").slider({range:"min",min:2,max:60,step:1,value:3,slide:function(a,e){$("#totalyear-show").text(e.value),$("#loan-year").val(e.value)},change:function(){emi_calculation()}}),$("#totalyear-show").text($("#finlon-year-slide1").slider("value")),$("#loan-year").val($("#finlon-year-slide1").slider("value"))}function principal_value(){$text_val=$("#principal-amount").val().toString(),$new_text_val=parseInt($text_val.replace(/,/g,""));var a=$("#finlon-principal-slide").slider("option","max");$new_text_val>a&&$("#principal-amount").val(a);a=$("#finlon-principal-slide").slider("option","min");$new_text_val<a&&$("#principal-amount").val(a),$("#finlon-principal-slide").slider({range:"min",min:3e4,max:5e5,value:$new_text_val,step:1e3,slide:function(a,e){$("#principal-show").text(e.value),$("#principal-amount").val(e.value),loancalculate()}}),$("#principal-show").text($("#finlon-principal-slide").slider("value")),loancalculate()}function loan_year_value(){$loan_year1=$("#loan-year").val();var a=$("#finlon-year-slide1").slider("option","max");$loan_year1>a&&$("#loan-year").val(a);a=$("#finlon-year-slide1").slider("option","min");$loan_year1<a&&$("#loan-year").val(a),$("#finlon-year-slide1").slider({range:"min",min:2,max:60,step:1,value:$loan_year1,slide:function(a,e){$("#totalyear-show").text(e.value),$("#loan-year").val(e.value),loancalculate()}}),$("#totalyear-show").text($("#finlon-year-slide1").slider("value")),loancalculate()}function onlynumeric(a){a=a.which||a.keycode;return 48<=a&&a<=57||46==a}$(function(i){i("#compare-emi-1").length&&(i("#compare-emi-1 table tbody tr").each(function(){var a=i(this),e=a.find(".interest-rate").data("low-interest"),l=a.find(".interest-rate").data("high-interest");e&&l?a.find(".interest-rate").text(e+"% - "+l+"%"):!e&&l?a.find(".interest-rate").text("Up to "+l+"%"):e&&!l&&a.find(".interest-rate").text(e+"% Onwards"),i("#principal-amount, #loan-year").blur(function(){emi_calculation(e,l);principal_value(),loan_year_value()}),i("#principal-amount, #loan-year").on("keyup",function(a){13==a.keyCode&&(emi_calculation(e,l),principal_value(),loan_year_value())})}),emi_calculation(),slider_change())});