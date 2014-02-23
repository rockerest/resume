<?php
	set_include_path('backbone:components:pages');
	
	require_once('Template.php');

    class Page {
		private $curr;
		private $page_title;

        public function __construct($curr, $page_title)
		{
			$this->curr = $curr;
			$this->page_title = $page_title;
        }

		public function run()
		{
        }

        public function build($appContent) {
            $tmpl = new Template();

            $tmpl->appContent = $appContent;
			$tmpl->title = $this->page_title;

            return $tmpl->build('page.html');
        }
    }
?>