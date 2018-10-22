---
layout: post
title: "Natlang in EMNLP 2018"
root: ../../
---
In our lab meeting this week, Ashkan, Jetic, and Nishant will present their posters, and Golnar will have a talk covering the material she prepared for EMNLP 2018. Here are the titles and abstracts of their presentations:

Golnar: In-domain Context-aware Token Embeddings Improve Biomedical Named Entity Recognition

Abstract: Rapidly expanding volume of publications in the biomedical domain makes it increasingly difficult for a timely evaluation of the latest literature. That, along with a push for automated evaluation  of  clinical  reports,  present  opportunities for effective natural language processing methods.  In this study we target the problem of named entity recognition, where texts are processed to annotate terms that are relevant  for  biomedical  studies.   Terms  of  interest  in  the  domain  include  gene  and  protein names, and cell lines and types.  Here we report on a pipeline built on Embeddings from Language Models (ELMo) and a deep learning package for natural language processing (AllenNLP). We trained context-aware token embeddings on a dataset of biomedical papers using ELMo, and incorporated these embeddings in the LSTM-CRF model used by AllenNLP for named entity recognition.  We show these representations improve named entity recognition  for  different  types  of  biomedical  named entities. We also achieve a new state of the art in gene mention detection on the BioCreative II gene mention shared task.

Ashkan: Prediction Improves Simultaneous Neural Machine Translation

Abstract : Simultaneous speech translation aims to maintain translation quality while minimizing the delay between reading input and incrementally producing the output.
We propose a new general-purpose prediction action which predicts future words in the input to improve quality and minimize delay in simultaneous translation. We train this agent using reinforcement learning with a novel reward function. Our agent with prediction has better translation quality and less delay compared to an agent-based simultaneous translation system without prediction.

Jetic: Top-down Tree Structured Decoding with Syntactic Connections for Neural Machine Translation and Parsing

Abstract: The addition of syntax-aware decoding in Neural Machine Translation (NMT) systems requires an effective tree-structured neural network, a syntax-aware attention model and a language generation model that is sensitive to sentence structure. We exploit a top-down tree-structured model called DRNN (Doubly-Recurrent Neural Networks) first proposed by Alvarez-Melis and Jaakola (2017) to create an NMT model called Seq2DRNN that combines a sequential encoder with tree-structured decoding augmented with a syntax-aware attention model. Unlike previous approaches to syntax-based NMT which use dependency parsing models our method uses constituency parsing which we argue provides useful information for translation. In addition, we use the syntactic structure of the sentence to add new connections to the tree-structured decoder neural network (Seq2DRNN+SynC). We compare our NMT model with sequential and state of the art syntax-based NMT models and show that our model produces more fluent translations with better reordering. Since our model is capable of doing translation and constituency parsing at the same time we also compare our parsing accuracy against other neural parsing models.

Nishant: Decipherment of Substitution Cipher Using Neural Language Models

Abstract: The decipherment of homophonic substitution ciphers using language models (LMs) is a well-studied task in Natural Language Processing (NLP). Previous work in this topic score short local spans of possible plaintext decipherments using n-gram LMs. The most widely used technique is the use of a beam search with n-gram LMs proposed by Nuhn et al. (2013). We propose a new approach on decipherment using a beam search algorithm that scores the entire candidate plaintext at each step with a neural LM. We augment beam search with a novel rest cost estimation that exploits the predictive power of a neural LM. This work, to our knowledge, is the first to use a large pretrained neural language model for decipherment. Our neural decipherment approach outperforms the state-of-the-art n-gram based methods on many different ciphers. On challenging ciphers such as the Beale cipher, our system reports significantly lower error rates with much smaller beam sizes.


Tuesday, October 23rd, 11:00 a.m. TASC1 9408.
