---
layout: post
title: Left-to-Right Decoding 
---


In the lab meeting tomorrow, February 26, Maryam will talk about her ongoing work into left-to-right decoding. A short description is attached below.

>	Left-to-right (LR) decoding is a promising decoding algorithm for hierarchical phrase-based translation (Hiero). 
>	It generates the target sentence by extending the hypotheses only on the right edge.
>	LR decoding has complexity O(n^2 b) for input of n words and beam size b, compared to O(n^3) for the CKY algorithm. 
>	It requires a single language model (LM) history for each target hypothesis rather than two LM histories per hypothesis as in CKY. 
>	I will talk about an augmented LR decoding algorithm that builds on the original algorithm in Watanabe et al.,2006 . 
>	This new LR decoding algorithm uses cube pruning and provides demonstrably more efficient decoding than CKY Hiero, four times faster; and 
>	by introducing new distortion and reordering features for LR decoding, it maintains the same translation quality (as in BLEU scores) 
>	obtained phrase-based and CKY Hiero with the same translation model.
>	At the end I will discuss some reordering issues in LR-decoding and possible solutions for that.
