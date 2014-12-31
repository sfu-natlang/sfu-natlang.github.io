---
layout: post
title: "Incremental Translation using Hierarchichal Phrase-based MT"
root: ../../
---
In the lab meeting this week, 8th of Oct, Maryam and Ramtin will give a talk about their <a href="http://www.cs.sfu.ca/~anoop/papers/pdf/lr-speech-slt2014.pdf">recent paper</a>. The meeting will be at TASC1 9408 from 1030 hours.

Abstract : Hierarchical phrase-based machine translation (Hiero) is a prominent approach for Statistical Machine Translation usually comparable to or better than conventional phrase-based systems. But Hiero typically uses the CKY decoding algorithm which requires the entire input sentence before decoding begins, as it produces the translation in a bottom-up fashion. Left-to-right (LR) decoding is a promising decoding algorithm for Hiero that produces the output translation in left to right order. In this paper we focus on simultaneous translation using the Hiero translation framework. In simultaneous translation, translations are generated incrementally as source language speech input is processed. We propose a novel approach for incremental translation by integrating segmentation and decoding in LR-Hiero. We compare two incremental decoding algorithms for LR-Hiero and present translation quality scores (BLEU) and the latency of generating translations for both decoders on audio lectures from the TED collection.
