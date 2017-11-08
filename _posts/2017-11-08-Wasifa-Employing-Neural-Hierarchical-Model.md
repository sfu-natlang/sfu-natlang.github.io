---
layout: post
title: "Wasifa's talk about Employing Neural Hierarchical Model for Abstractive Text Summarization"
root: ../../
---

Wasifa in our next lab meeting will talk about employing neural hierarchical Model for abstractive Summarization. here's the abstract her of talk:

As growth of online data in the form of news, social media, email, and text continues, automatic summarization is integral in generating a condensed form to get gist of the original text. While most of the earlier works on automatic summarization use extractive approach to identify the most important parts of the document, some of recent research works focus on the more challenging task of making the summaries more abstractive, requiring effective paraphrasing and generalization steps.
In this work, we propose an encoder-decoder attentional recurrent neural network model to achieve automatic abstractive summarization. Although most of the recently proposed methods have already used neural sequence to sequence models, two issues that still need to be addressed are- how to focus on the most important portions of the input when generating the output words and how to handle the out-of-vocabulary words not contained in the fixed-size target list. Unlike other NLP tasks like machine translation which requires encoding all input information to produce the translation, summarization needs to extract only the key information while ignoring the irrelevant portions that might degrade overall summary quality. We use a hierarchical word-to-sentence encoder to jointly learn word and sentence importance using features like- content richness, salience, and position. During decoding, attention mechanism operates at both sentence and word levels. To address the problem of unknown words, we learn a word-to-character model.

Thursday, Nov. 9, 10-11 AM, Location: TASC1 9408.