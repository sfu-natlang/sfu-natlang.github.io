---
layout: post
title: "All Word Embeddings from One Embedding"
root: ../../
---
At today's lab meeting, Nishant will present work that reduces the number of parameters required to store word embeddings by representing all words as transformations of a single shared vector.

**All Word Embeddings from One Embedding**
**Abstract:**
In neural network-based models for natural language processing (NLP), the largest part of the parameters often consists of word embeddings. Conventional models prepare a large embedding matrix whose size depends on the vocabulary size. Therefore, storing these models in memory and disk storage is costly. In this study, to reduce the total number of parameters, the embeddings for all words are represented by transforming a shared embedding. The proposed method, ALONE (all word embeddings from one), constructs the embedding of a word by modifying the shared embedding with a filter vector, which is word-specific but non-trainable. Then, we input the constructed embedding into a feed-forward neural network to increase its expressiveness. Naively, the filter vectors occupy the same memory size as the conventional embedding matrix, which depends on the vocabulary size. To solve this issue, we also introduce a memory-efficient filter construction approach. We indicate our ALONE can be used as word representation sufficiently through an experiment on the reconstruction of pre-trained word embeddings. In addition, we also conduct experiments on NLP application tasks: machine translation and summarization. We combined ALONE with the current state-of-the-art encoder-decoder model, the Transformer, and achieved comparable scores on WMT 2014 English-to-German translation and DUC 2004 very short summarization with less parameters.
https://arxiv.org/abs/2004.12073

Friday, 19 November at 13:30