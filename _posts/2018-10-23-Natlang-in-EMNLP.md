---
layout: post
title: "Natlang in EMNLP 2018"
root: ../../
---
In our lab meeting this week, Ashkan, Jetic, and Nishant will present their posters, and Golnar will have a talk covering the material she prepared for EMNLP 2018. Here are the titles and abstracts of their presentations:

Golnar: GraphNER: Using Corpus Level Similarities and Graph Propagation for Named Entity Recognition.

Abstract: The rapidly growing amount of research papers in computational biology makes it difficult for researchers to keep up to date on new results. The motivation behind this paper is to use natural language processing to automatically understand relevant concepts from the large amount of text data in published papers in computational biology. As a proof-of-concept, we focus on the gene mention detection task, which allows us to identify genes that are being discussed in papers, making it possible to search for concepts like genes rather than searching on words. In this paper we introduce GraphNER, a semi-supervised machine learning model for named entity recognition (NER). In particular, we use GraphNER to identify gene mentions in natural language data such as biomedical papers. It combines training data where the gene mentions are identified by human experts and unlabelled data that contains many other relevant gene mentions. The labeled and unlabeled data are linked together using similarities between n-grams that occur in the two data sources (an n-gram is a contiguous sequence of n words in the text). GraphNER uses the information gleaned from this graph, and combines it with a conditional random field (CRF) model for NER. We consider two different CRF-based NER systems on two different datasets combined with our graph model for semi-supervised learning for the task of gene mention detection. We show that GraphNER consistently improves the overall quality of gene mention detection due to its higher precision.

Ashkan: Prediction Improves Simultaneous Neural Machine Translation

Abstract : Simultaneous speech translation aims to maintain translation quality while minimizing the delay between reading input and incrementally producing the output.
We propose a new general-purpose prediction action which predicts future words in the input to improve quality and minimize delay in simultaneous translation. We train this agent using reinforcement learning with a novel reward function. Our agent with prediction has better translation quality and less delay compared to an agent-based simultaneous translation system without prediction.

Jetic: Top-down Tree Structured Decoding with Syntactic Connections for Neural Machine Translation and Parsing

Abstract: The addition of syntax-aware decoding in Neural Machine Translation (NMT) systems requires an effective tree-structured neural network, a syntax-aware attention model and a language generation model that is sensitive to sentence structure. We exploit a top-down tree-structured model called DRNN (Doubly-Recurrent Neural Networks) first proposed by Alvarez-Melis and Jaakola (2017) to create an NMT model called Seq2DRNN that combines a sequential encoder with tree-structured decoding augmented with a syntax-aware attention model. Unlike previous approaches to syntax-based NMT which use dependency parsing models our method uses constituency parsing which we argue provides useful information for translation. In addition, we use the syntactic structure of the sentence to add new connections to the tree-structured decoder neural network (Seq2DRNN+SynC). We compare our NMT model with sequential and state of the art syntax-based NMT models and show that our model produces more fluent translations with better reordering. Since our model is capable of doing translation and constituency parsing at the same time we also compare our parsing accuracy against other neural parsing models.

Nishant: Decipherment of Substitution Cipher Using Neural Language Models

Abstract: The decipherment of homophonic substitution ciphers using language models (LMs) is a well-studied task in Natural Language Processing (NLP). Previous work in this topic score short local spans of possible plaintext decipherments using n-gram LMs. The most widely used technique is the use of a beam search with n-gram LMs proposed by Nuhn et al. (2013). We propose a new approach on decipherment using a beam search algorithm that scores the entire candidate plaintext at each step with a neural LM. We augment beam search with a novel rest cost estimation that exploits the predictive power of a neural LM. This work, to our knowledge, is the first to use a large pretrained neural language model for decipherment. Our neural decipherment approach outperforms the state-of-the-art n-gram based methods on many different ciphers. On challenging ciphers such as the Beale cipher, our system reports significantly lower error rates with much smaller beam sizes.


Tuesday, October 23rd, 11:00 a.m. TASC1 9408.
