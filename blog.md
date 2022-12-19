---
title: Blog

og_title: "Stephen Pearce's Blog"
og_description: "Stephen Pearce's blog. Musings on tech. Software, hardware and tales of development."
og_image: "https://stevepdp.dev/assets/img/stevepdp_130x.png"

layout: category-blog
type: category-blog
---

<ul>



{% for blog in site.categories.blog %}

<li><i class="fa fa-pencil" aria-hidden="true"></i><a href="{{blog.url}}" title="Click to read the entry: {{post.title}}">{{blog.title}}</a>
<span class="postdate">
{% assign d = blog.date | date: "%-d"  %}
{{ blog.date | date: "%B" }}
{% case d %}
	{% when '1' or '21' or '31' %}{{ d }}st
	{% when '2' or '22' %}{{ d }}nd
	{% when '3' or '23' %}{{ d }}rd
	{% else %}{{ d }}th
	{% endcase %},
{{ blog.date | date: "%Y" }}.
</span></li>

{% endfor %}
</ul>




