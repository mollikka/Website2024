+++
title = "Penrose Tiling Adventures, part 1"
description = "Filling an infinite plane with aperiodic stuff using simple rules"
date = "2015-03-19"
aliases = ['/text/2015-penrose-1']
[taxonomies]
Language=["English"]
tags = ["math","code"]
series = ["penrose-tiling-adventures"]
+++

A [tiling](https://en.wikipedia.org/wiki/Tessellation) is a plane that consists of infinite copies of a finite set of shapes called prototiles.
For example, a rectangular grid is a tiling of rectangular tiles. Most
commonly known tilings are periodic - they have a repeating pattern.
You can move the tiling from it's original position to certain new positions and
every point in the plane will remain identical.

[Penrose tiling](https://en.wikipedia.org/wiki/Penrose_tiling) is a
famous example of a tiling that is **not** periodic. If you move around
on the Penrose tiling plane, you will never see it reset. Finite patterns
may repeat, but you will always find new configurations that you haven't
seen before. In mathematical terms, it *lacks translational symmetry*.

Penrose P2, the most famous aperiodic tiling, has two prototiles.
The dart tile is a quadrilateral with angles 36&deg;, 216&deg;, 36&deg;
and 72&deg;.
The kite tile's angles are 72&deg;,72&deg;,72&deg; and 144&deg;.
To achieve aperiodicity, there are rules to connecting these tiles. In
my tiles, the rules are illustrated with arc trails: the arcs of adjacent
tiles must touch each other. I recommend the [Wikipedia article](https://en.wikipedia.org/Penrose_tiling) on
Penrose tiles if you're looking for more specifics.

{{
    figure(
        img="penrose_angles.png"
        description="The penrose tiles"
    )
}}

So, I wanted to play around with these things. I designed 3D models in
CAD software and with the 3D-printer I co-own with my father, we
printed a lot of these things (hundreds).

Playing with the tiles is a lot of fun, actually. I could do
(and have done) it for hours. One thing I noticed quickly is that it is
not very easy to create a tiling without holes. So while I know that an infinite
plane can be filled, there are infinite problems between here and there,
at least when using the trial and error method.

{{
    figure(
        img="penrose_hole.png"
        description="This tiling has a hole in it!"
    )
}}

Luckily, there are systematic ways to find the flawless tilings. The algorithm
I chose is called *substitution*. Each half-tile in an initial configuration is 
replaced by a set of slightly smaller tiles.

There are two rules: 

* each half-kite is replaced by a half-dart and a full-kite.
* each half-dart is replaced by a half-dart and a half-kite.

{{
    figure(
        img="penrose_kite_substitution.png"
        description="Each half-kite is replaced by a half-dart and a full-kite"
    )
}}

{{
    figure(
        img="penrose_dart_substitution.png"
        description="each half-dart is replaced by a half-dart and a half-kite"
    )
}}

Substitution can be repeated
indefinitely, creating tilings with more and more tiles. And there we go, a
valid Penrose tiling that grows limitlessly!

{{
    figure(
        img="penrose_iter0.png"
        description="Initial state"
    )
}}

{{
    figure(
        img="penrose_iter1.png"
        description="First iteration"
    )
}}

{{
    figure(
        img="penrose_iter2.png"
        description="Second iteration"
    )
}}

There was still the problem that it's hard to do these substitutions on paper
or in mind. The physical tiles are not a good tool for calculations either,
unless you're willing to make tiles of several different sizes. I didn't find
those methods very practical. Instead, I decided it was time to write some code!

The natural way to model the tiling is to use half-tiles as the basic elements,
since all substitution rules replace single half-tiles with more half-tiles.

The code to implement the tiling is actually not very complicated at all.
The program written in Python is available as a
[Github project](https://github.com/mollikka/Penrose).

Long story short, now the only limit to my tiling operation is floor space!

{{
    figure(
        img="penrose_building.png"
        description="Building a Penrose tile surface"
    )
}}

In [part 2](@/text/blog/2015-penrose-2/index.md) I will leave the physical tiles behind and look deeper into the program. I will also find some interesting patterns while playing with the code.

{% comment(date='2015-03-24') %}
*Today I gave a short presentation on my Penrose Tiling Adventures on the Aalto University course
[Crystal Flowers in Halls of Mirrors](https://noppa.aalto.fi/noppa/kurssi/mat-1.3000/etusivu). I'm a student on the course.*
{% end %}
