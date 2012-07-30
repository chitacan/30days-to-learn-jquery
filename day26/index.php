<?php

require 'functions.php';

connect();

if (isXHR() && isset($_POST['q'])) {
	echo json_encode( get_actors_by_last_name($_POST['q']) ); 
	return;
}

if (isset($_POST['q'])) {
	$actors = get_actors_by_last_name($_POST['q']);
}

if (isXHR() && isset($_POST['actor_id'])) {
	$info = get_actor_info( $_POST['actor_id'] );
	echo $info->film_info;
	return;
}

include 'views/index.tmpl.php';