function(head, req) {
	var ddoc = this;
	var mustache = require("lib/mustache");
	var datez = require("lib/datez");

	var row;

	provides('ics',
		function() {
			send('BEGIN:VCALENDAR');
			send('VERSION:2.0');
			send('PRODID:http://github.com/BigBlueHat/TeaTime');
			while(row = getRow()) {
				doc = row.value;
				if (doc.created) doc.created = datez.iCalDateString(new Date(doc.created));
				if (doc.updated) doc.updated = datez.iCalDateString(new Date(doc.updated));
				if (doc.start) doc.start = datez.iCalDateString(new Date(doc.start));
				if (doc.end) doc.end = datez.iCalDateString(new Date(doc.end));
				doc.organizer = doc.hosts[0];

				send(mustache.to_html(ddoc.templates.ical, doc, ddoc.templates));
			}
			send('END:VCALENDAR');
		}
	);
}