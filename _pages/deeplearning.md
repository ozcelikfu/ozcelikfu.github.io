---
layout: archive
permalink: /deep-learning/
title: "Deep Learning"
author_profile: true
header:
  image: "/images/itu3.jpeg"
---

Deep Learning Posts

{% include group-by-array collection=site.posts field="tags" %}

{% for tag in group_names %}
  {% assign posts = group_items[forloop.index0] %}
  <h2 id="{{ tag | slugify }}" class="archive__subtitle">{{ tag }}</h2>
  {% for post in posts %}
    {% include archive-single.html %}
  {% endfor %}
{% endfor %}