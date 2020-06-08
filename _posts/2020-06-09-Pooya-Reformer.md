---
layout: post
title: "Reformer: The Efficient Transformer"
root: ../../
---
In our lab meeting tomorrow, Pooya will introduce Efficient Transformer.
A Zoom link will be posted to Twist on the morning of the meeting. 

**Reformer: The Efficient Transformer**

**Abstract:**
Large Transformer models routinely achieve state-of-the-art results on a number of tasks but training these models can be prohibitively costly, especially on long sequences. We introduce two techniques to improve the efficiency of Transformers. For one, we replace dot-product attention by one that uses locality-sensitive hashing, changing its complexity from O(L2) to O(LlogL), where L is the length of the sequence. Furthermore, we use reversible residual layers instead of the standard residuals, which allows storing activations only once in the training process instead of N times, where N is the number of layers. The resulting model, the Reformer, performs on par with Transformer models while being much more memory-efficient and much faster on long sequences.


Tuesday, June 9th, 09:30 a.m.
