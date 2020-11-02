---
layout: post
title: "Why is Attention Not So Interpretable?"
root: ../../
---
In our lab meeting tomorrow, Jetic will introduce a paper on Attention model.

A Zoom link will be posted to Twist on the morning of the meeting. 

**Why is Attention Not So Interpretable?**

**Abstract:**
 Attention-based methods have played an important role in model interpretations, where the calculated attention weights are expected to highlight the critical parts of inputs (e.g., keywords in sentences). However, recent research points out that attention-as-importance interpretations often do not work as well as we expect. For example, learned attention weights sometimes highlight less meaningful tokens like "[SEP]", ",", and ".", and are frequently uncorrelated with other feature importance indicators like gradient-based measures. Finally, a debate on the effectiveness of attention-based interpretations has been raised. In this paper, we reveal that one root cause of this phenomenon can be ascribed to the combinatorial shortcuts, which stands for that in addition to the highlighted parts, the attention weights themselves may carry extra information which could be utilized by downstream models of attention layers. As a result, the attention weights are no longer pure importance indicators. We theoretically analyze the combinatorial shortcuts, design one intuitive experiment to demonstrate their existence, and propose two methods to mitigate this issue. Empirical studies on attention-based interpretation models are conducted, and the results show that the proposed methods can effectively improve the interpretability of attention mechanisms on a variety of datasets.

 https://arxiv.org/abs/2006.05656


Tuesday, November 3rd, 09:30 a.m.
