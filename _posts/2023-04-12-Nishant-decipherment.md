---
layout: post
title: "Nishant's EACL 2023 paper on decipherment"
root: ../../
---

At this week's lab meeting, Nishant will present his recent paper accepted at EACL'23 on a novel generative transformer for decipherment:
- Nishant, Logan, and Anoop, 2023, [Decipherment as Regression: Solving Historical Substitution Ciphers by Learning Symbol Recurrence Relations](http://natlang.cs.sfu.ca/assets/decipher_eacl2023_camera_ready.pdf)

**Abstract:** Solving substitution ciphers involves mapping sequences of cipher symbols to fluent text in a target language. This has conventionally been formulated as a search problem, to find the decipherment key using a character-level language model to constrain the search space. This work instead frames decipherment as a sequence prediction task, using a Transformer-based causal language model to learn recurrences between characters in a ciphertext. We introduce a novel technique for transcribing arbitrary substitution ciphers into a common recurrence encoding. By leveraging this technique, we (i) create a large synthetic dataset of homophonic ciphers using random keys, and (ii) train a decipherment model that predicts the plaintext sequence given a recurrence-encoded ciphertext. Our method achieves strong results on synthetic 1:1 and homophonic ciphers, and cracks several real historic homophonic ciphers. Our analysis shows that the model learns recurrence relations between cipher symbols and recovers decipherment keys in its self-attention

[Wednesday, 12 April at 12pm](https://calndr.link/event/RSE2dmsDYl) -- <ins>click to add to calendar</ins>.

This will be a hybrid meeting at ASB 9921. The zoom link will be posted on zulip.
