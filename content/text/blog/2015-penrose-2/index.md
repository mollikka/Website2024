+++
title = "Penrose Tiling Adventures, part 2"
description = "Curious patterns emerge from tile textures"
date = "2015-05-10"
aliases = ['/text/2015-penrose-2']
[taxonomies]
Language=["English"]
tags = ["math","code"]
series = ["Penrose Tiling Adventures"]
[extra]
image="penrose_solid.png"
+++

In [part 1](@/text/blog/2015-penrose-1/index.md) of Penrose Tiling Adventures I realized that planning a Penrose
surface manually is too much work, so I wrote some
[code](https://github.com/mollikka/Penrose) to do that for me.

{{
    figure(
        img="penrose_solid.png"
        description="----"
    )
}}



Now I can print the little pieces, and lay them out like my program tells me to.

Often when a process suddenly becomes easy, something new and unexpected also
becomes possible. This time, I realized that since I'm already rendering each tile, 
I could try applying different textures instead of solid colors.

This is how the little "batch mode" in my code looks:

```python
from model import PenroseModel
from starting_states import dart_star
from view import load_textures, draw_model

#Penrose model takes initial set of tiles as the argument. Look at starting_states.py for examples.
model = PenroseModel(dart_star())

#calculate the forth iteration
for i in range(4): model.split()

kite_texture,dart_texture = load_textures("images/kite_tex.png","images/dart_tex.png")

draw_options = {}

draw_options["dart_color"] = (0,0,128)        #rgb color of darts if using solid coloring
draw_options["dart_texture"] = dart_texture   #texture of darts if in texture mode
draw_options["kite_color"] = (128,0,0)        #rgb color of kites if using solid coloring
draw_options["kite_texture"] = kite_texture   #texture of kites if in texture mode
draw_options["drawmode"] = "solid"            #"solid" or "texture"
draw_options["background_color"] = (30,30,30) #background rgb color
```

After this I call `draw_model(surf,model,offx,offy,scale,draw_options)`, where `surf` is a Pygame Surface.

So I did that with different sketches, and the results are below. I think these
could make nice textiles.

<div class="sideBySide">
{{
        figure(
                img="penrose_kite_1.png",
                description="Kite input texture"
        )
}}
{{
        figure(
                img="penrose_dart_1.png",
                description="Dart input texture"
        )
}}
</div>

{{
        figure(
                img="penrose_out_1.png",
                description="Tiling output"
        )
}}

<div class="sideBySide">
{{
        figure(
                img="penrose_kite_2.png",
                description="Kite input texture"
        )
}}
{{
        figure(
                img="penrose_dart_2.png",
                description="Dart input texture"
        )
}}
</div>

{{
        figure(
                img="penrose_out_2.png",
                description="Tiling output"
        )
}}

<div class="sideBySide">
{{
        figure(
                img="penrose_kite_3.png",
                description="Kite input texture"
        )
}}
{{
        figure(
                img="penrose_dart_3.png",
                description="Dart input texture"
        )
}}
</div>

{{
        figure(
                img="penrose_out_3.png",
                description="Tiling output"
        )
}}

<div class="sideBySide">
{{
        figure(
                img="penrose_kite_4.png",
                description="Kite input texture"
        )
}}
{{
        figure(
                img="penrose_dart_4.png",
                description="Dart input texture"
        )
}}
</div>

{{
        figure(
                img="penrose_out_4.png",
                description="Tiling output"
        )
}}

<div class="sideBySide">
{{
        figure(
                img="penrose_kite_7.png",
                description="Kite input texture"
        )
}}
{{
        figure(
                img="penrose_dart_7.png",
                description="Dart input texture"
        )
}}
</div>

{{
        figure(
                img="penrose_out_7.png",
                description="Tiling output"
        )
}}

So that's that for now! I hope I get to produce some textiles or furniture with some of these patterns some day.

