---
layout: post
title: "Aditi Presents on Simultaneous Neural Machine Translation"
root: ../../
---

At this week's lab meeting, Aditi will present her recent work on simulatenous machine translation.

**Abstract:** The decoder in simultaneous neural machine translation receives limited information from the source while having to balance the opposing requirements of latency versus translation quality. In this paper, we use an auxiliary target-side language model to augment the training of the decoder model. Under this notion of target adaptive training, generating rare or difficult tokens is rewarded which improves the translation quality while reducing latency. The predictions made by a language model in the decoder are combined with the traditional cross entropy loss which frees up the focus on the source side context. Our experimental results over multiple language pairs show that compared to previous state of the art methods in simultaneous translation, we can use an augmented target side context to improve BLEU scores significantly. We show improvements over the state of the art in the low latency range with lower average lagging values (faster output).

[Wednesday, 3 May at 12pm](https://calndr.link/event/XoM6TmoBHi) -- <ins>click to add to calendar</ins>.

This will be a hybrid meeting at ASB 9921. The zoom link will be posted on zulip.
