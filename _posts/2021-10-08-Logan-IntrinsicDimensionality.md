---
layout: post
title: "Intrinsic Dimensionality Explains the Effectiveness of Language Model Fine-Tuning"
root: ../../
---
At tomorrow's lab meeting, Logan will present Aghajanyan et al. (2021), one of the winners of the ACL 2021 Outstanding Paper Award. This work extends the concept of intrinsic dimension to fine-tuning problems, and shows that tuning on as few as 200 dimensions can be effective on some tasks. This result is accompanied by applications to model compression and bounds on a model's ability to generalize.

**Intrinsic Dimensionality Explains the Effectiveness of Language Model Fine-Tuning**
Armen Aghajanyan, Sonal Gupta, Luke Zettlemoyer

**Abstract:**
Although pretrained language models can be fine-tuned to produce state-of-the-art results for a very wide range of language understanding tasks, the dynamics of this process are not well understood, especially in the low data regime. Why can we use relatively vanilla gradient descent algorithms (e.g., without strong regularization) to tune a model with hundreds of millions of parameters on datasets with only hundreds or thousands of labeled examples? In this paper, we argue that analyzing fine-tuning through the lens of intrinsic dimension provides us with empirical and theoretical intuitions to explain this remarkable phenomenon. We empirically show that common pre-trained models have a very low intrinsic dimension; in other words, there exists a low dimension reparameterization that is as effective for fine-tuning as the full parameter space. For example, by optimizing only 200 trainable parameters randomly projected back into the full space, we can tune a RoBERTa model to achieve 90% of the full parameter performance levels on MRPC. Furthermore, we empirically show that pre-training implicitly minimizes intrinsic dimension and, perhaps surprisingly, larger models tend to have lower intrinsic dimension after a fixed number of pre-training updates, at least in part explaining their extreme effectiveness. Lastly, we connect intrinsic dimensionality with low dimensional task representations and compression based generalization bounds to provide intrinsic-dimension-based generalization bounds that are independent of the full parameter count.

Friday, 8 October at 13:30
