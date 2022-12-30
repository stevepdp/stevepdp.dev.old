---
title: Games

og_title: "Games by Stephen Pearce"
og_description: "Stephen Pearce's blog. Musings on tech. Software, hardware and tales of development."

layout: category-games
type: category-games
---

<div class="games">
{% for game in site.categories.games %}
	<a href="{{game.url}}" class="games__game active" style="background-image: url({{game.og_image}});">
		<h3 class="games__desc">
		{{game.og_title}}
		</h3>
	</a>
{% endfor %}
</div>
