var datez = {
		ISODateString: function (d){
		 function pad(n){return n<10 ? '0'+n : n}
		 return d.getUTCFullYear()+'-'
					+ pad(d.getUTCMonth()+1)+'-'
					+ pad(d.getUTCDate())+'T'
					+ pad(d.getUTCHours())+':'
					+ pad(d.getUTCMinutes())+':'
					+ pad(d.getUTCSeconds())+'Z';
		},

		iCalDateString: function (d){
		 function pad(n){return n<10 ? '0'+n : n}
		 return d.getUTCFullYear()
					+ pad(d.getUTCMonth()+1)
					+ pad(d.getUTCDate())+'T'
					+ pad(d.getUTCHours())
					+ pad(d.getUTCMinutes())
					+ pad(d.getUTCSeconds())+'Z';
		}
}

// for CommonJS
if (exports) {
  exports.ISODateString = datez.ISODateString;
	exports.iCalDateString = datez.iCalDateString;
}