---
layout: post
title: Baskaran PhD Defense 
---

Baskaran Sankaran will be having his PhD defense on 22 August, Thursday, at TASC1 9204 West. The title and details are below. The defense will start at 1030 hours and everyone in the lab is requested to attend the defense.   

Title:

**Improvements in Hierarchical Phrase-Based Machine Translation**

Description:

Hierarchical phrase-based translation (Chiang, 2005; Chiang, 2007) (Hiero) is a statistical machine translation (SMT) model that encodes translation as a synchronous context-free grammar derivation between source and target language strings. Hiero models are more powerful than phrase-based models in capturing complex source-target reordering as well as discontiguous phrase pairs while being easier to estimate and decode with compared to their full syntaxbased counterparts.

In this thesis, we propose improvements to two broad aspects of the Hiero translation
pipeline: i) estimating Hiero translation model features from training data and ii) parameter tuning for discriminative log-linear models that are used to decode with such features. We use our own open-source implementation of Hiero called Kriya (Sankaran et al., 2012b) for all the experiments in this thesis. This thesis contains the following specific contributions:

• We propose new Bayesian models which are used to extract compact Hiero translation rules; we extract minimal source-target translation units, resulting in up to 57% reduction in model size while retaining the same translation performance for several language pairs (Sankaran et al., 2011; Sankaran et al., 2012a). Our models are applicable for both unary and binary Hiero grammars and our models consistently perform well compared to several other baselines. We also show that our model can be estimated in a distributed framework for variational inference (Sankaran et al., 2013a).


• We propose a novel unified-cascade framework for jointly learning alignments and the Hiero translation rules by removing the disconnect between the alignments and extracted synchronous context-free grammar. This is the first time a joint training framework is being proposed for Hiero, where we iterate the two step inference so that it learns in alternate iterations the phrase alignments and then the Hiero rules that are consistent with alignments.


• We propose several novel approaches for parameter tuning of discriminative log-linear models for SMT which can be used for jointly optimizing towards multiple evaluation metrics. We show that our methods for multi-objective tuning for SMT yield substantial gains in translation quality measured through automatic as well as human evaluations (Sankaran et al., 2013b; Duh et al., 2013).


PhD Examining Committee: 

Dr Anoop Sarkar, Senior Supervisor

Dr Greg Mori, Supervisor

Dr Gholamreza Haffari

Dr Fred Popowich, Internal Examiner

Dr David Chiang, External Examiner

Dr Arrvindh Shriraman, Chair
