---
layout: page
title: Dirty Henry
permalink: /dirty_henry/
---

<ul class="post-list">
{% for post in site.posts %}
{% if post.authors contains page.title %}
<li>
  <h1>
    <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
    <div class="excerpt">
      {{ post.excerpt }}
    </div>
  </h1>
</li>
{% endif %}
{% endfor %}
</ul>
