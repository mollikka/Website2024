+++
title = "Hydrogen Wave Function Study Notes, part 1"
description = "Goal: Render density functions"
date = "2024-04-07"
[taxonomies]
Language=["English"]
tags=["code","math"]
series=["hydrogen-wave-function"]
[extra]
image="roadmap.jpg"
+++

I want to learn how to render hydrogen atom electron density clouds.
These are my study notes.

My background is that I took one introductory course on quantum physics at university 10 years ago. I think we solved some 1 dimensional Schrödinger problems in that class. In this project I'm not going to solve the equations myself - I just want to implement them in code.

## Exploring the Problem

A hydrogen atom is a system of one proton and one electron. The electron exists in an orbital around the proton. An orbital is somewhat analogous to an orbit - it defines the probability of finding the electron in any position around the nucleus.

In order to visualize orbitals,
I need to build a density function in polar coordinates **ψ(r,θ,φ)** (time-independent Schrödinger equation).
I also need a method for rendering density functions and/or a way to sample the density function.

## The Schrödinger Wave Function

- [LibreTexts Chemistry: The Schrödinger Wave Equation for the Hydrogen Atom](https://chem.libretexts.org/Courses/University_of_California_Davis/Chem_107B%3A_Physical_Chemistry_for_Life_Scientists/Chapters/4%3A_Quantum_Theory/4.10%3A_The_Schr%C3%B6dinger_Wave_Equation_for_the_Hydrogen_Atom) gives a product that allows us to handle radial and spherical components separately (Equation 4.10.4)

{% maths() %}
\Psi(r,\theta,\varphi)=R(r)Y(\theta,\varphi)
{% end %}

[Brant Carlson: Hydrogen atom wavefunctions](https://www.youtube.com/watch?v=DvRzdCnsiYw) gives a formula of the radial and spherical components:

{% maths() %}
\Psi_{nlm}(r,\theta,\varphi) = 
\sqrt{\left(\frac{2}{na_0}\right)^3 \frac{(n-l-1)!}{2n((n+l)!)^3} } 
e^{-\frac{r}{na_0}} 
\left(\frac{2r}{na_0}\right)^l L_{n-l-1}^{2l+1} 
\left(\frac{2r}{na_0}\right) Y_l^m(\theta,\varphi)
{% end %}

More on the Schrödinger wave equation:

- [LibreText Chemistry: The Quantum Mechanical H-atom](<https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Quantum_Chemistry_with_Applications_in_Spectroscopy_(Fleming)/06%3A_The_Hydrogen_Atom/6.02%3A_The_Quantum_Mechanical_H-atom>)
- [StudySmarter: Hydrogen Wave Function](https://www.studysmarter.co.uk/explanations/physics/quantum-physics/hydrogen-wave-function/)
- [Richard Behiel: The Hydrogen Atom, Part 2 of 3: Solving the Schrodinger Equation](https://www.youtube.com/watch?v=acN7E7AUHPk)

More on Atomic orbitals:

- [Wikipedia, Atomic orbital](https://en.m.wikipedia.org/wiki/Atomic_orbital)
- [MinutePhysics: A Better Way to Picture Atoms](https://www.youtube.com/watch?v=W2Xb2GFK2yc)

## Radial Component

The radial component **R** uses something called associated Laguerre polynomials **L**, which has a recursive definition we can implement.

{% maths() %}
R_n^l(r) = 
\sqrt{\left(\frac{2}{na_0}\right)^3 \frac{(n-l-1)!}{2n((n+l)!)^3} } 
e^{-\frac{r}{na_0}} 
\left(\frac{2r}{na_0}\right)^l L_{n-l-1}^{2l+1} 
\left(\frac{2r}{na_0}\right)
{% end %}

The recursive definition of Laguerre polynomials:

{% maths() %}
L_0^l(x)=1
{% end %}

{% maths() %}
L_1^l(x)=1 + l - x
{% end %}

{% maths() %}
L_{n+1}^l(x)=\frac{(2n + 1 + l - x) L_n^l(x) - (n+l) L_{n-1}^l(x)}{n+1}
{% end %}

Info on Laguerre polynomials:

- [Wikipedia: Laguerre polynomials](https://en.wikipedia.org/wiki/Laguerre_polynomials#Generalized_Laguerre_polynomials)

## Spherical Harmonics

The spherical harmonics **Y** are a family of functions that depend on the quantum numbers **l**, **m**.

{% maths() %}
Y_l^m(\theta,\varphi) \equiv \sqrt{\frac{2 l + 1}{4\pi} \frac{(l-m)!}{(l+m)!} } P_l^m(\cos \theta ) e^{i m \varphi}
{% end %}

Info on spherical harmonics:

- [LibreTexts Chemistry: Spherical Harmonics](https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Quantum_Chemistry_with_Applications_in_Spectroscopy_(Fleming)/05%3A_The_Rigid_Rotor_and_Rotational_Spectroscopy/5.04%3A_Spherical_Harmonics)
- [Wolfram Mathworld: Spherical Harmonic](https://mathworld.wolfram.com/SphericalHarmonic.html)

Calculating spherical harmonic functions requires something called associated Legendre polynomials **P**.

Legendre polynomials are differential equations, which are arduous to compute. However, they can also be defined in closed form using binomial coefficients, which should be much easier to implement in code.

{% maths() %}
P_l^m(x) = (-1)^m 2^l (1-x^2)^{\frac{m}{2}} \sum_{k=m}^{l} \frac{k!}{(k-m)!} x^{k-m}
\binom{l}{k}
\binom{\frac{l+k-1}{2}}{l}
{% end %}

Info on Legendre polynomials:

- [Wikipedia: Legendren polynomi](https://fi.wikipedia.org/wiki/Legendren_polynomi)
- [Wikipedia: Legendren liittofuntio](https://fi.wikipedia.org/wiki/Legendren_liittofunktio)
- [Wikipedia: Associated Legendre polynomials](https://en.wikipedia.org/wiki/Associated_Legendre_polynomials)
- [Wolfram Mathworld: Associated Legendre Polynomial](https://mathworld.wolfram.com/AssociatedLegendrePolynomial.html)

## Roadmap

1. Implement associated Laguerre polynomials
2. Use Laguerre polynomials to implement the radial component
3. Implement associated Legendre polynomials
4. Use the Legendre polynomials to implement spherical harmonics
5. Use the radial component and spherical harmonics to implement hydrogen atom wavefunctions

{{
        figure(
                img="roadmap.jpg",
                description="Roadmap",
                hidetext=true
        )
}}

6. Finally, draw heatmaps of the orbitals

## Results

I opted to write code that's easy to verify without much regard for performance at this point. If necessary, this could be improved by writing a more efficient version that runs on GPUs.

For the pictures I used Matplotlib.

### Radial

```python
def laguerre(n : int, l : int):
    if n == 0:
        return lambda x: 1
    if n == 1:
        return lambda x: (1 + l - x)
    return lambda x: ((2*n - 1 + l - x) * laguerre(n-1,l)(x) - (n-1+l)*laguerre(n-2,l)(x))/float(n)

def radialComponent(n,l):
    rho = lambda r: 2*r / (n*bohr)
    A = ((2 / (n*bohr))**3 * factorial(n-l-1) / (2*n*(factorial(n+l))))**(1/2)
    return lambda r: -A * e**(-0.5 * rho(r)) * rho(r)**l * laguerre(n-l-1, 2*l + 1)(rho(r))

def radialProbability(n,l):
    return lambda r: r**2 * radialComponent(n,l)(r)**2
```

Below we have plots showing radial probability in blue.
The rings of each orbital are clearly visible on the plots: the electron is most likely to be observed on separated bands. The x-asis is the distance from nucleus in Bohr radius units.

{{
        figure(
                img="radial-1-0.png",
                description="Radial component of the s1 orbital"
        )
}}

{{
        figure(
                img="radial-2-0.png",
                description="Radial component of the s2 orbital"
        )
}}
{{
        figure(
                img="radial-2-1.png",
                description="Radial component of the p2 orbital"
        )
}}

{{
        figure(
                img="radial-3-0.png",
                description="Radial component of the s3 orbital"
        )
}}
{{
        figure(
                img="radial-3-1.png",
                description="Radial component of the p3 orbital"
        )
}}
{{
        figure(
                img="radial-3-2.png",
                description="Radial component of the d3 orbital"
        )
}}

### Spherical

```python
def legendre(l : int, m : int):
    if abs(m) > l:
        return lambda x: 0

    if m < 0:
        return lambda x: (-1)**(-m) * factorial(l+m) / factorial(l-m) * legendre(l,-m)(x)

    binCoeffs = lambda k: binomialCoefficient(l,k) * binomialCoefficient((l+k-1)/2, l)
    
    return lambda x: (-1)**m * 2**l * (1 - x**2)**(m/2) * sumFunction( lambda k: factorial(k)/factorial(k-m) * x**(k-m) * binCoeffs(k), range(m,l+1) )

def sphericalHarmonic(l,m):
    return lambda theta: ((2*l + 1)/(4*pi) * factorial(l-m) / factorial(l+m))**(1/2) * legendre(l,m)(cos(theta))
```

Below we have plots showing angular probability in blue.

{{
        figure(
                img="spherical-0-0.png",
                description="Spherical harmonics cross-section for l=0, m=0"
        )
}}

{{
        figure(
                img="spherical-1-0.png",
                description="Spherical harmonics cross-section for l=1, m=0"
        )
}}
{{
        figure(
                img="spherical-1-1.png",
                description="Spherical harmonics cross-section for l=1, m=1"
        )
}}

{{
        figure(
                img="spherical-2-0.png",
                description="Spherical harmonics cross-section for l=2, m=0"
        )
}}
{{
        figure(
                img="spherical-2-1.png",
                description="Spherical harmonics cross-section for l=2, m=1"
        )
}}
{{
        figure(
                img="spherical-2-2.png",
                description="Spherical harmonics cross-section for l=2, m=2"
        )
}}

In the next part, I will combine the radial component with the spherical harmonics to draw orbital heatmaps.