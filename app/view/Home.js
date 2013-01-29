Ext.define("streetmedlite.view.Home", {
	extend: 'Ext.Panel',
	xtype: 'homepanel',

	config: {
		title: 'Home',
		iconCls: 'home',
		cls: 'home',
		scrollable: true,
		styleHtmlContent:true,

         html: [
            '<img src="https://dl.dropbox.com/u/11788716/appFiles/cross_blue_circle.png"/>',
            '<h2>Street Med Lite</h2>',
            "<p>This handbook presents useful tips for staying safe and practical advice for dealing with worst case senarios at protests, demonstrations and other low resource environments.  In no way will this resource substitutes for action or street medical training.</p>",
            '<p>Version (1.0)</p>',           
        ].join("")

	}
})