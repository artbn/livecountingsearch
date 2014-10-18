$(document).ready(function(){
	var searchNumberPrev = 0
	var searchNumberNext = 0
	var author = ""
	var id = ""
	var link = "https://www.reddit.com/live/ta535s1hq2je/updates/"
	$('.btn').click(function(){
		var searchNumber = $(searchTB).val()
        $('<p>').text(searchNumber).prependTo('.searchResult')
		}
})
