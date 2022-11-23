---
title: Games

og_title: "Games by Stephen Pearce"
og_image: 

layout: category-games
type: category-games
---

{% for tag in site.tags %}
{% if tag[0] == "ludum-dare" %}
<div class="tag">
<h3>{{ tag | first | replace: '-', ' ' | capitalize }}</h3>
<ul>
{% for post in tag[1] %}
<li><i class="fa fa-gamepad" aria-hidden="true"></i><a href="{{post.url}}" title="Click to read about {{post.title}}">{{post.title}}</a></li>
{% endfor %}
</ul>
</div>
{% endif %}
{% endfor %}

{% for tag in site.tags %}
{% if tag[0] == "vaporjam" %}
<div class="tag">
<h3>{{ tag | first | replace: '-', ' ' | capitalize }}</h3>
<ul>
{% for post in tag[1] %}
<li><i class="fa fa-gamepad" aria-hidden="true"></i><a href="{{post.url}}" title="Click to read about {{post.title}}">{{post.title}}</a></li>
{% endfor %}
</ul>
</div>
{% endif %}
{% endfor %}

{% for tag in site.tags %}
{% if tag[0] == "weekly-game-jam" %}
<div class="tag">
<h3>{{ tag | first | replace: '-', ' ' | capitalize }}</h3>
<ul>
{% for post in tag[1] %}
<li><i class="fa fa-gamepad" aria-hidden="true"></i><a href="{{post.url}}" title="Click to read about {{post.title}}">{{post.title}}</a></li>
{% endfor %}
</ul>
</div>
{% endif %}
{% endfor %}

{% for tag in site.tags %}
{% if tag[0] == "one-hour-game-jam" %}
<div class="tag">
<h3>{{ tag | first | replace: '-', ' ' | capitalize }}</h3>
<ul>
{% for post in tag[1] %}
<li><i class="fa fa-gamepad" aria-hidden="true"></i><a href="{{post.url}}" title="Click to read about {{post.title}}">{{post.title}}</a></li>
{% endfor %}
</ul>
</div>
{% endif %}
{% endfor %}

{% for tag in site.tags %}
{% if tag[0] == "other-and-experimental" %}
<div class="tag">
<h3>{{ tag | first | replace: '-', ' ' | capitalize }}</h3>
<ul>
{% for post in tag[1] %}
<li><i class="fa fa-gamepad" aria-hidden="true"></i><a href="{{post.url}}" title="Click to read about {{post.title}}">{{post.title}}</a></li>
{% endfor %}
</ul>
</div>
{% endif %}
{% endfor %}