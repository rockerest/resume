<?php
	set_include_path('global:jquery:backbone:components:pages');
	require_once('Page.php');
	require_once('Template.php');
	
	$page = new Page('0',"Thomas Randolph - Web Developer");
	
	$page->run();

	$tmpl = new Template();
	
	$tmpl->ref = empty( $_GET['ref'] ) ? 'tom' : $_GET['ref'];
	$tmpl->page = empty( $_GET['page'] ) ? 'index' : $_GET['page'];
	$tmpl->dom = empty( $_GET['dom'] ) ? 'tr.info' : $_GET['dom'];
	
	if( $tmpl->ref == 'tom' && $tmpl->page == 'index' && $tmpl->dom == 'tr.info' )
	{
			$tmpl->linker = FALSE;
	}
	else
	{
			$tmpl->linker = TRUE;
	}
	
	//lookup
	switch($tmpl->dom)
	{
		case 'tr.info':
			$tmpl->domain = ".thomasrandolph.info/";
			break;
		case 'rwd.com':
			$tmpl->domain = ".randolphwebdevelopment.com/";
			break;
		default:
			$tmpl->domain = $tmpl->dom;
			break;
	}
	
	$tmpl->link = "http://" . $tmpl->ref . $tmpl->domain . $tmpl->page . ".php";
    $tmpl->text = $tmpl->page . " on " . $tmpl->ref . $tmpl->domain;
	
	$html = $tmpl->build('index.html');
	$css = $tmpl->build('index.css');
	$js = $tmpl->build('index.js');
	
	$appContent = array(
						'html'	=>	$html,
						'css'	=>	$css,
						'js' => $js
						);

	print $page->build($appContent);
?>