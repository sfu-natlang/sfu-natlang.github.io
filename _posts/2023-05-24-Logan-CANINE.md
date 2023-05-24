---
layout: post
title: "Logan presents CANINE: Pre-training an Efficient Tokenization-Free Encoder
for Language Representation"
root: ../../
---

At this week's lab meeting, Logan will discuss tokenization-free approaches to NLP. We will focus on [CANINE (Clark et al. 2022)](https://aclanthology.org/2022.tacl-1.5.pdf):

**Abstract:** Pipelined NLP systems have largely been superseded by end-to-end neural modeling, yet nearly all commonly-used models still require an explicit tokenization step. While recent tokenization approaches based on data-derived subword lexicons are less brittle than manually engineered tokenizers, these techniques are not equally suited to all languages, and the use of any fixed vocabulary may limit a model's ability to adapt. In this paper, we present CANINE, a neural encoder that operates directly on character sequences, without explicit tokenization or vocabulary, and a pre-training strategy that operates either directly on characters or optionally uses subwords as a soft inductive bias. To use its finer-grained input effectively and efficiently, CANINE combines downsampling, which reduces the input sequence length, with a deep transformer stack, which encodes context. CANINE outperforms a comparable mBERT model by 2.8 F1 on TyDi QA, a challenging multilingual benchmark, despite having 28% fewer model parameters. 

Time permitting, we may also discuss the [Perceiver IO](https://arxiv.org/pdf/2107.14795.pdf) architecture which offers alternative means for avoiding tokenization.

Wednesday, 24 May at 12pm

This will be a hybrid meeting at TASC1 9408. The zoom link will be posted on zulip.
