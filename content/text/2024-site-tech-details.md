+++
title = "Technical details of this website"
description = "Static site generated using Zola"
date = "2024-01-11"
[taxonomies]
Language=["English"]
+++

This is a static html website generated using [Zola](https://www.getzola.org/). Local development has no dependencies other than Zola and a browser. The source code for the site is on [GitHub](https://github.com/mollikka/Website2024).

## Developing


Zola seems pretty easy to use and versatile for a personal blog or gallery, so I would recommend Zola for a project of similar scope to mine.
I also find the documentation comprehensive and easy to follow.

In some places Zola is a bit too opinionated for my taste, though. It seems to impose a certain structure of pages and sections due to unfortunate choices in the concepts, but [there are proposals to do something about that](https://zola.discourse.group/t/proposal-deprecate-sections/1968). I wished to create lists of pages and sections side by side (for example, a blog post that is actually a collection of smaller blog posts), but Zola's abstractions don't work very well with that. However, if you have no intention of over-designing your blog, you won't have any problem.

Performance-wise Zola is super fast, and compiles my site in less than 100ms. The development feedback is basically instant as the browser updates as soon as you save a file.

## Deploying

Currently the website is deployed by manual upload. I'm hoping to add an automatic GitHub pipeline with separate staging and production sites in the future. I will update with details if I get around to that.

## Theme

The theme and colors are custom made with some inspiration taken from [anemone](https://anemone.pages.dev/).