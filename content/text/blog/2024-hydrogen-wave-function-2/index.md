+++
title = "Hydrogen Wave Function Study Notes, part 2"
description = "Goal: Render density functions"
date = "2024-05-01"
[taxonomies]
Language=["en-US"]
tags=["code","math"]
series=["Hydrogen Wave Function"]
[extra]
image="orbital-4-1-0.png"
+++

This time I will plot cross sections of the electron density clouds.

## Bringing it all together 

The final function is simply a product of the radial component and spherical harmonics:

```python
def wavefunction(n,l,m):
    return lambda r,angle1,angle2: radialComponent(n,l)(r) * sphericalHarmonicAbsolute(l,m)(angle1,angle2)

def wavefunctionProbability(n,l,m):
    return lambda r,angle1,angle2: radialComponent(n,l)(r)**2 * sphericalHarmonicAbsolute(l,m)(angle1,angle2)**2
```

To convert cartesian coordinates (screen coordinates) to spherical (model coordinates):

```python
def cartesianToSpherical(x,y,z):
    r = lambda x,y,z: (x**2 + y**2 + z**2)**(1/2)
    theta = lambda x,y,z: atan2(y,x)
    phi = lambda x,y,z: atan2(r(x,y,0),z)
    return (r(x,y,z),theta(x,y,z),phi(x,y,z))
```

## Results

<div class="sideBySide">
{{
        figure(
                img="orbital-3-1-1.png",
                description="n=3, l=1, m=1"
        )
}}
<div>
{{
        figure(
                img="radial-3-1.png",
                description="Radial component, n=3, l=1"
        )
}}
{{
        figure(
                img="spherical-1-1.png",
                description="Spherical component, l=1, m=1"
        )
}}
</div>
</div>

<div class="sideBySide">
{{
        figure(
                img="orbital-3-2-1.png",
                description="n=3, l=2, m=1"
        )
}}
<div>
{{
        figure(
                img="radial-3-2.png",
                description="Radial component, n=3, l=2"
        )
}}
{{
        figure(
                img="spherical-2-1.png",
                description="Spherical component, l=2, m=1"
        )
}}
</div>
</div>

<div class="sideBySide">
{{
        figure(
                img="orbital-4-1-0.png",
                description="n=4, l=1, m=0"
        )
}}
<div>
{{
        figure(
                img="radial-4-1.png",
                description="Radial component, n=4, l=1"
        )
}}
{{
        figure(
                img="spherical-1-0.png",
                description="Spherical component, l=1, m=0"
        )
}}
</div>
</div>

<div class="sideBySide">
{{
        figure(
                img="orbital-5-3-0.png",
                description="n=5, l=3, m=0"
        )
}}
<div>
{{
        figure(
                img="radial-5-3.png",
                description="Radial component, n=5, l=3"
        )
}}
{{
        figure(
                img="spherical-3-0.png",
                description="Spherical component, l=3, m=0"
        )
}}
</div>
</div>

### Orbitals

{{
        figure(
                img="cross-section-1.png",
                description="Cross-sections of the orbitals for n=1"
        )
}}
{{
        figure(
                img="cross-section-2.png",
                description="Cross-sections of the orbitals for n=2"
        )
}}
{{
        figure(
                img="cross-section-3.png",
                description="Cross-sections of the orbitals for n=3"
        )
}}
{{
        figure(
                img="cross-section-4.png",
                description="Cross-sections of the orbitals for n=4"
        )
}}
{{
        figure(
                img="cross-section-5.png",
                description="Cross-sections of the orbitals for n=5"
        )
}}