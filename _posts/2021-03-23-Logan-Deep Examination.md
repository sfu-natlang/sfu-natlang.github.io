---
layout: post
title: "Rotate King to get Queen: Word Relationships as Orthogonal Transformations in Embedding Space"
root: ../../
---
This week, Logan will give a practice talk for his depth exam. The talk will discuss recent work on analogy tasks, with a focus on the pitfalls surrounding their use in model evaluation and interpretation. After the practice talk, we will discuss Ethayarajh 2019: Rotate King to get Queen: Word Relationships as Orthogonal Transformations in Embedding Space. This paper suggests that vector offsets are not the most appropriate way to perform analogical reasoning, and that embedding models learn more complex relations between words than can be expressed by simple vector translation. 

**Rotate King to get Queen: Word Relationships as Orthogonal Transformations in Embedding Space**

**Abstract:**
A notable property of word embeddings is that word relationships can exist as linear substructures in the embedding space. For example, ‘gender’ corresponds to v_woman - v_man and v_queen - v_king. This, in turn, allows word analogies to be solved arithmetically: v_king - v_man + v_woman = v_queen. This property is notable because it suggests that models trained on word embeddings can easily learn such relationships as geometric translations. However, there is no evidence that models exclusively represent relationships in this manner. We document an alternative way in which downstream models might learn these relationships: orthogonal and linear transformations. For example, given a translation vector for ‘gender’, we can find an orthogonal matrix R, representing a rotation and reflection, such that R(v_king) = v_queen and R(v_man) = v_woman. Analogical reasoning using orthogonal transformations is almost as accurate as using vector arithmetic; using linear transformations is more accurate than both. Our findings suggest that these transformations can be as good a representation of word relationships as translation vectors.

https://www.aclweb.org/anthology/D19-1354/

Tuesday, Mar 23rd, 09:30 a.m.
