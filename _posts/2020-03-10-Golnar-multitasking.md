---
layout: post
title: "Two Papers on Multi-Task Learning"
root: ../../
---
In our lab meeting tomorrow, Golnar will discuss two papers about multi-task learning. The titles and abstract follow:

**BAM! Born-Again Multi-Task Networks for Natural Language Understanding**

**Abstract:**
It can be challenging to train multi-task neural networks that outperform or even match their single-task counterparts. To help address this, we propose using knowledge distillation where single-task models teach a multi-task model. We enhance this training with teacher annealing, a novel method that gradually transitions the model from distillation to supervised learning, helping the multi-task model surpass its single-task teachers. We evaluate our approach by multi-task fine-tuning BERT on the GLUE benchmark. Our method consistently improves over standard single-task and multi-task training.

**Soft Representation Learning for Sparse Transfer**

**Abstract**
Transfer learning is effective for improving the performance of tasks that are related, and Multi-task learning (MTL) and Cross-lingual learning (CLL) are important instances. This paper argues that hard-parameter sharing, of hard-coding layers shared across different tasks or languages, cannot generalize well, when sharing with a loosely related task. Such case, which we call sparse transfer, might actually hurt performance, a phenomenon known as negative transfer. Our contribution is using adversarial training across tasks, to “softcode” shared and private spaces, to avoid the shared space gets too sparse. In CLL, our proposed architecture considers another challenge of dealing with low-quality input.

Tuesday, Mar 10th, 09:30 a.m. TASC1 9408.
