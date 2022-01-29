---
title: Blog
layout: category-blog
type: category-blog
---

<ul>
{% for blog in site.categories.blog %}

<li><i class="fas fa-pen-alt" aria-hidden="true"></i><a href="{{blog.url}}" title="Click to read the entry: {{post.title}}">{{blog.title}}</a></li>

{% endfor %}
</ul>




