---
layout: post
title: "Multilingual Unsupervised Word Alignment Models and Their Application"
root: ../../
---
In our lab meeting tomorrow, Anahita will practice her thesis defence on Word Alignment.

**Multilingual Unsupervised Word Alignment Models and Their Application**

**Abstract:**
Word alignment is an essential task in natural language processing because of its critical role in training statistical machine translation (SMT) models, error analysis for neural machine translation (NMT), building bilingual lexicon, and annotation transfer. In this thesis, we explore models for word alignment, how they can be extended to incorporate linguistically-motivated alignment types, and how they can be neuralized in an end-to-end fashion. In addition to these  methodological developments, we apply our word alignment models to cross-lingual part-of-speech projection.

First, we present a new probabilistic model for word alignment where word alignments are associated with linguistically-motivated alignment types. We propose a novel task of joint prediction of word alignment and alignment types and propose novel semi-supervised learning algorithms for this task. We also solve a sub-task of predicting the alignment type given an aligned word pair.
The proposed joint generative models (alignment-type-enhanced models) significantly outperform the models without alignment types in terms of word alignment and translation quality.

Next, we present an unsupervised neural Hidden Markov Model for word alignment, where emission and transition probabilities are modeled using neural networks.  The model is simpler in structure, allows for seamless integration of additional context, and can be used in an end-to-end neural network.

Finally, we tackle the part-of-speech tagging task for the zero-resource scenario where no part-of-speech (POS) annotated training data is available. We present a cross-lingual projection approach where neural HMM aligners are used to obtain high quality word alignments between resource-poor and  resource-rich languages. Moreover, high quality neural POS taggers are used to provide annotations for the resource-rich language side of the parallel data, as well as to train a tagger on the projected data. Our experimental results on truly low-resource languages show that our methods outperform their corresponding baselines.


Tuesday, Feb 23rd, 09:30 a.m.
