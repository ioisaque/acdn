jQuery.noConflict();

//Checkboxes
jQuery(window).load(function() {
  jQuery('.right-col :checkbox').iphoneStyle({ checkedLabel: 'On', uncheckedLabel: 'Off' });
  
  var rttheme_cufon_fonts = jQuery('#rttheme_cufon_fonts:checkbox').iphoneStyle();
  var rttheme_google_fonts = jQuery('#rttheme_google_fonts:checkbox').iphoneStyle();
  
  //onchange_checkbox.attr('checked', !onchange_checkbox.is(':checked')).change();
  //onchange_checkbox.attr('value')
  
  jQuery('#rttheme_cufon_fonts:checkbox').parents("table").find(".iPhoneCheckContainer").click(function() {
    if(rttheme_google_fonts.attr('value')){
	 jQuery(rttheme_google_fonts).attr("checked", false);
	 jQuery(rttheme_google_fonts).change();
    }
  });

  jQuery('#rttheme_google_fonts:checkbox').parents("table").find(".iPhoneCheckContainer").click(function() {
    if(rttheme_cufon_fonts.attr('value')){
	 jQuery(rttheme_cufon_fonts).attr("checked", false);
	 jQuery(rttheme_cufon_fonts).change();
    }
  });
 
});


//rttheme multi select script
jQuery(document).ready(function() {
    jQuery(".multiple").asmSelect({
	    addItemTarget	: 'bottom',
	    animate		: true,
	    highlight		: true,
	    removeLabel	:'x'
    });
});


jQuery(document).ajaxSuccess(function(e, xhr, settings) {
	var widget_id_base 		= 'latest_posts';   // latest posts plugin
	var widget_id_base_2 	= 'popular_posts';   // popular posts plugin
	var widget_id_base_3 	= 'recent_posts_gallery';   // recent posts gallery plugin
    if(settings.data) { 
	 if(typeof settings.data.search == 'function') {    
	   if (settings.data){
		if(settings.data.search('action=save-widget') != -1 && ( settings.data.search('id_base=' + widget_id_base) != -1 || settings.data.search('id_base=' + widget_id_base_2) != -1  || settings.data.search('id_base=' + widget_id_base_3) != -1 ) ) {
		  var str 			= settings.data;
		  var substr   		= str.split('widget-id=');
		  var substr_2 		= substr[1].split('&id_base');
		  var thisWidtedID 	= substr_2[0];
		  
		  jQuery("select[multiple]#widget-"+thisWidtedID+"-categories").asmSelect({
			  addItemTarget	: 'bottom',
			  animate		: true,
			  highlight		: true,
			  removeLabel	:'x'
		  });
		}
	   }
	 }
    }
});



//fonts
jQuery(document).ready(function() {  

    
    jQuery(".sidebar_title").click(function () {
	 
	 var close_button = jQuery(this).find('.openclose');
	 var value=close_button.text();
	 var id =close_button.attr('class').split(' ');
	 id=id[1];
	 
	 if(value=='+'){
	  close_button.text("-"); 
	   jQuery("#"+id+" table").each(function () {
		jQuery(this).fadeIn("slow")
	   }); 
	 }else{
	   close_button.text("+");
	   jQuery("#"+id+" table").each(function () {
		jQuery(this).fadeOut("slow")
	   });	   
	 } 
    });
 
  

	 //delete
	 jQuery("#rt_sidebar_options .deleteButton").click(function(){
	   	
		 var confirm_message = confirm("Delete selected sidebar ?");
		
		 if(confirm_message){
		  jQuery(this).parents(".sidebar_div").remove();		  
		  jQuery("#rt_sidebar_options").submit();
		  return true;
		 }
		 
		 return false;
	 });
	     
	
    jQuery("#rt_sidebar_options").submit(function () {
	 var new_sidebar_name = jQuery("#rt_sidebar_options .new_sidebar .sidebar_name").attr("value");
	  
	 var sidebar_name="";
	 var content="";
	 var _Err="";
	 
	 if(jQuery("#rt_sidebar_options .new_sidebar")){
	 
		    jQuery("#rt_sidebar_options .new_sidebar .asmOptionDisabled").each(function () {
			 content=true;
		    });	
	   
		    jQuery("#rt_sidebar_options .sidebar_name.saved").each(function () {
			  
			 if(	jQuery(this).attr("value")=="" ){
			   _Err = sidebar_names_confirm;
			 }
		    });
		    
		    if(new_sidebar_name!=""){
			 sidebar_name=true; 
		    }
		    
		    if(sidebar_name!=true && content!=true && !_Err){
			 jQuery("#rt_sidebar_options .new_sidebar").remove();	
		    }
		    else if(sidebar_name!=true && content==true){
			  alert(new_sidebar_name_confirm);
			  return false;    
		    }
		    else if(sidebar_name==true && content!=true){
			  alert(new_sidebar_content_confirm);
			  return false;    
		    }
	    
		    if(_Err){
			  alert(_Err);
			  return false;    
		    }
	 }
	 
	 return true; 
    
    });
	

 
    jQuery(".fontlist").each(function () {
	 var sind =jQuery(this).val();
		if(sind){
		jQuery(this).parents("table").find("iframe").show();
		}else{
		  jQuery(this).parents("table").find("iframe").hide();
		}
    });	 
	 
	jQuery(".fontlist").change(function () {
		var classList =jQuery(this).attr('class').split(' ');
		var system= classList[1];

		var which_widget = (jQuery(this).attr('id'));
		var sind =jQuery(this).val();
		var font_face =jQuery("#"+which_widget+" option:selected").text();
		var familyName= jQuery("#"+which_widget+" option:selected").attr("class");
			if(familyName){
				familyName = familyName.split('__');
				familyName = familyName[0];
			}else{
				familyName = "";
			}

		jQuery(this).parents("table").find("iframe").attr('src',frameworkurl+'?font='+sind+'&system='+system+'&font_face='+font_face+'&family_name='+familyName+'');
		
		if(sind){
		jQuery(this).parents("table").find("iframe").show();
		}else{
		  jQuery(this).parents("table").find("iframe").hide();
		}
	});	 


});



//various
jQuery(document).ready(function() {
  
		jQuery(".range").rangeinput();

        //clue tips  
        jQuery('a.question').cluetip({
	        hoverClass: 'highlight',width: '250px',sticky: true,
	        mouseOutClose: true,
	       	closePosition: 'title',
	        closeText: 'x', cursor: 'help'
        });
                          
});

/*
*
*	UPLOAD MEDIA
*
*/	
 
(function($){
 
	//options upload
	$(document).on('click', '.rttheme_upload_button', function(e) { 

		var custom_uploader; 
		var $this = $(this);

		var field_id = $(this).attr("data-inputid");  
		url_field = $(this).parents("td:eq(0)").find(".upload_field");  
		this_image_holder =  $(this).parents("td:eq(0)").find(".uploaded_file");   

			e.preventDefault();

			//If the uploader object has already been created, reopen the dialog
			if (custom_uploader) {
				custom_uploader.open();
				return;
			}

			//Extend the wp.media object
			custom_uploader = wp.media.frames.file_frame = wp.media({
				title: wp.media.view.l10n.addMedia, 
				multiple: false
			});

			//When a file is selected, grab the URL and set it as the text field's value
			custom_uploader.on('select', function() {
				attachment = custom_uploader.state().get('selection').first().toJSON(); 
				$(url_field).val(attachment.url);  
 		
				if( attachment.type == "image" ){
					this_image_holder.find("img:eq(0)").attr("src",attachment.url);  
					this_image_holder.addClass("visible"); 						
				}else{
					this_image_holder.find("img:eq(0)").attr("src","");  
					this_image_holder.removeClass("visible"); 											
				}

			});

			//Open the uploader dialog
			custom_uploader.open(); 

	}); 		

	//delete
	$(document).on('click', '.uploaded_file .delete_single', function() {  
		
		url_field = $(this).parents("td:eq(0)").find(".upload_field");  
		this_image_holder =  $(this).parents("td:eq(0)").find(".uploaded_file");   
		url_field.val("");
		this_image_holder.find("img:eq(0)").attr("src",""); 
		$(this).parent(".uploaded_file").removeClass("visible");
  
	});         

	//auto select
	$('.upload_field').focus(function() {
		$(this).select();
	});

		 
})(jQuery);

// close shortcode messages
(function($){
	$(document.body).on("click",".rt-message",function() {   

		var this_holder = $(this).parents("div:eq(1)");	 
		this_holder.remove();

	});
})(jQuery);


//rttheme media upload script
jQuery(document).ready(function() {
  
  jQuery('.rt-message').live("click", function() {
    jQuery(this).parent('div').fadeOut("slow"); 
  });
    
  jQuery('.rt-message-contact-form').live("each",function() {
    jQuery(this).hide();
  });
    
});