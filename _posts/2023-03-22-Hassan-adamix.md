---
layout: post
title: "On Parameter-efficient Model Tuning"
root: ../../
---
 
For this week's **online** lab meeting Hassan will present a recent paper on parameter-efficient language model tuning. Here are the title and abstract of the presentation:

##### Wang et al., "[AdaMix: Mixture-of-Adaptations for Parameter-efficient Model Tuning](https://aclanthology.org/2022.emnlp-main.388.pdf)", EMNLP 2022

**Abstract**: Standard fine-tuning of large pre-trained language models (PLMs) for downstream tasks requires updating hundreds of millions to billions of parameters, and storing a large copy of the PLM weights for every task resulting in increased cost for storing, sharing and serving the models. To address this, parameter-efficient fine-tuning (PEFT) techniques were introduced where small trainable components are injected in the PLM and updated during fine-tuning. We propose AdaMix as a general PEFT method that tunes a mixture of adaptation modules – given the underlying PEFT method of choice – introduced in each Transformer layer while keeping most of the PLM weights frozen. For instance, AdaMix can leverage a mixture of adapters like Houlsby (Houlsby et al., 2019) or a mixture of low rank decomposition matrices like LoRA (Hu et al., 2021) to improve downstream task performance over the corresponding PEFT methods for fully supervised and few-shot NLU and NLG tasks. Further, we design AdaMix such that it matches the same computational cost and the number of tunable parameters as the underlying PEFT method. By only tuning 0.1 − 0.2% of PLM parameters, we show that AdaMix outperforms SOTA parameter-efficient fine-tuning and full model fine-tuning for both NLU and NLG tasks.

[Wednesday, 22 March at 12:30](https://calndr.link/event/DE7c9Ls2Jx) -- <ins>click to add to calendar</ins>.

The zoom link will be posted on zulip.

P.S: Going forward, we'll have our lab meetings on Wednesdays, 12:30 PM.

