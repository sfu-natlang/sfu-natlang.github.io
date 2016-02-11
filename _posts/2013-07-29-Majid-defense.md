---
layout: post
title: PhD Defense - Majid Razmara
---


**Title**: 

Leveraging Diverse Sources in Statistical Machine Translation 

**Description**:

Statistical machine translation (SMT) is often faced with the problem of having insufficient training data for many language pairs. We propose several approaches to leveraging other available sources in SMT systems to enhance the quality of translation. Particularly, we propose approaches suitable in these four scenarios:

1. when an additional parallel corpus is available;
2. when parallel corpora between the source language and a third language and between that language and the target language are available;
3. when an abundant source-language monolingual corpus is available;
4. when no additional resource is available.

In the heart of these solutions lie two novel approaches: ensemble decoding and a graph propagation approach for paraphrasing out-of-vocabulary words.

Ensemble decoding combines a number of translation systems dynamically at the decoding step. Our experimental results show that ensemble decoding outperforms various strong baselines including mixture models, the current state-of-the-art for domain adaptation in machine translation.

We extend ensemble decoding to do triangulation on-the-fly when there exist parallel corpora between the source language and one or multiple pivot languages and between those and the target language. These triangulated systems are dynamically combined together and possibly to a direct source-target system. Experiments in 12 different language pairs show significant improvements over the baselines in terms of BLEU scores.

Ensemble decoding can also be used to apply stacking to statistical machine translation. Stacking is an ensemble learning approach that enhances the bias of the models. We show that stacking can consistently and significantly improve over the conventional SMT systems in two different language pairs and three different training sizes.

In addition to ensemble decoding, we propose a novel approach to mining translations for OOV words using a monolingual corpus on the source-side language. We induce a lexicon by constructing a graph on the source language phrases and employ a graph propagation technique in order to find translations for those phrases. Experimental results in two different settings show that our graph propagation method significantly improves performance over two strong baselines under intrinsic and extrinsic evaluation metrics.

**Time**:

Monday, 29 July, 2013 at ASB 9896 from 1400 hours. 


**PhD Examining Committee**:

Dr. Anoop Sarkar, Senior Supervisor

Dr. Fred Popowich, Senior Supervisor

Dr. Greg Mori, Internal Examiner

Dr. Alon Lavie, External Examiner

Dr. Ramesh Krishnamurti, Chair


