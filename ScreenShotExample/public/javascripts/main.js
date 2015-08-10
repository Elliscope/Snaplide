var count = 1;


function capture() {
    $('#target').html2canvas({
        onrendered: function (canvas) {
            //Set hidden field's value to image data (base-64 string)
            count++;
            if(count==2){
            $("#first").hide();
            $("#third").hide();
            $("#second").show();
            }else if(count==3){
            $("#first").hide();
            $("#third").show();
            $("#second").hide();
            }
           
            $('#img_val').val(canvas.toDataURL("image/png"));
            //Submit the form manually
            document.getElementById("myForm").submit();
        }
    });
}

window.onload = function() {
	
  $("#second").hide();
  $("#third").hide();
};

