<?php
/**
 * 
 * Template Name: Builder Page with Slider
 *
 */
get_header(); 

	//Slider selection 
	$home_slider_script = get_option(THEMESLUG.'_home_slider_script');

	if($home_slider_script=="" or $home_slider_script=="cycle"){
		get_template_part( 'slider', 'home_slider' );
	}elseif($home_slider_script=="flex"){
		get_template_part( 'flex-slider', 'home_slider' );				
	}else{
		get_template_part( 'nivo-slider', 'home_slider' );
	}

the_content(); 
get_footer();
?>