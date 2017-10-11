---
layout: post
title: "Ashkan and Andrei's Talk about their ongoing research"
root: ../../
---

Andrei is going to defend his thesis next week and Ashkan is planning to have his depth exam shortly afterwards. Tomorrow (October 12th), in our lab meeting, they will present what they have done so far.


Ashkan's Abstract: Studies on Machine Translation (MT) has a long history, but most of the works in this area assumes we can have access to the entire sentences. As a result, it is not practical to apply them on Real-Time Machine Translation where the objective is to start translation before receiving the full sentences. Divergent syntax of different languages makes it a great challenge for both humans and machines to start translating while new inputs are still being received.

Over the past few years, the great success of using deep neural networks in Real-Time translation systems, led this field to evolve in a completely new direction and improved the results; However, many of the problems from conventional systems remained unsolved. This talk provides a review over the latest methods of utilizing neural attention models for the task of simultaneous machine translation. 


Andrei's Abstract: Dependency parsing is an important task in NLP, and it is used in many downstream tasks for analyzing the semantic structure of sentences. Analyzing very large corpora in a reasonable amount of time, however, requires a fast parser. In this thesis we develop a transition-based dependency parser with a neural-network decision function whic outperforms spaCy, Stanford CoreNLP, and MALTParser in terms of speed while having a comparable, and in some cases better, accuracy. We also develop several variations of our model to investigate the trade-off between accuracy and speed. This leads to a model with a greatly reduced feature set which is much faster but less accurate, as well as a more complete model involving a BiLSTM simultaneously trained to produce POS tags which is more accurate, but much slower. We compare the accuracy and speed of our different parser models against the three mentioned parsers on the Penn Treebank, Universal Dependencies English, and Ontonotes datasets using two different dependency tree representations to show how our parser competes on data from very different domains. Our experimental results reveal that our main model is much faster than the 3 external parsers while also being more accurate; our reduced feature set model is significantly faster while remaining competitive in terms of accuracy; and our BiLSTM-using model is somewhat slower than CoreNLP although it is significantly more accurate. 
