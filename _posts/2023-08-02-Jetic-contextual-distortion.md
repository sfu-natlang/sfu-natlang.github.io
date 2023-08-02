---
layout: post
title: "Jetic presents Contextual Distortion Reveals Constituency: Masked Language Models are Implicit Parsers"
root: ../../
---

At this week's lab meeting, Jetic will discuss the following work from ACL '23: https://aclanthology.org/2023.acl-long.285.pdf

**Abstract:** Recent advancements in pre-trained language models (PLMs) have demonstrated that these models possess some degree of syntactic aware- ness. To leverage this knowledge, we propose a novel chart-based method for extracting parse trees from masked language models (LMs) without the need to train separate parsers. Our method computes a score for each span based on the distortion of contextual representations resulting from linguistic perturbations. We de- sign a set of perturbations motivated by the linguistic concept of constituency tests, and use these to score each span by aggregating the dis- tortion scores. To produce a parse tree, we use chart parsing to find the tree with the minimum score. Our method consistently outperforms previous state-of-the-art methods on English with masked LMs, and also demonstrates su- perior performance in a multilingual setting, outperforming the state of the art in 6 out of 8 languages. Notably, although our method does not involve parameter updates or extensive hy- perparameter search, its performance can even surpass some unsupervised parsing methods that require fine-tuning. Our analysis highlights that the distortion of contextual representation resulting from syntactic perturbation can serve as an effective indicator of constituency across languages.

Wednesday, 2 Aug at 12pm

This will be a hybrid meeting at TASC1 9408. The zoom link will be posted on zulip.
