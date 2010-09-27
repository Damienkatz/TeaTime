function(doc, req) {
	var mustache = require("lib/mustache");
	var datez = require("lib/datez");

	if (doc.created) doc.created = datez.iCalDateString(new Date(doc.created));
	if (doc.updated) doc.updated = datez.iCalDateString(new Date(doc.updated));
	if (doc.start) doc.start = datez.iCalDateString(new Date(doc.start));
	if (doc.end) doc.end = datez.iCalDateString(new Date(doc.end));
	doc.organizer = doc.hosts[0];

	return {"headers": {"Content-Type":"text/calendar"},
		"body": mustache.to_html(this.templates.ical, doc, this.templates)};
}