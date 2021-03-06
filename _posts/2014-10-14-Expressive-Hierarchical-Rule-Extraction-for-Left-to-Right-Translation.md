---
layout: post
title: "Expressive Hierarchical Rule Extraction for Left-to-Right Translation"
root: ../../
---
In the lab meeting this week, 15th of Oct, Maryam will give a talk about <a href="http://www.cs.sfu.ca/~anoop/papers/pdf/LRHieroXtraction.pdf" >Expressive Hierarchical Rule Extraction for Left-to-Right Translation</a>. The meeting will be at TASC1 9408 from 1030 hours. Following is the abstract of the paper:

Left-to-right (LR) decoding Watanabe et al. (2006) is a promising decoding algorithm for hi- erarchical phrase-based translation (Hiero) that visits input spans in arbitrary order producing the output translation in left to right order. This leads to far fewer language model calls. But the constrained SCFG grammar used in LR-Hiero (GNF) with at most two non-terminals is unable to account for some complex phrasal reordering. Allowing more non-terminals in the rules results in a more expressive grammar. LR-decoding can be used to decode with SCFGs with more than two non-terminals, but the CKY decoders used for Hiero systems cannot deal with such expressive grammars due to a blowup in computational complexity. In this paper we present a dynamic programming algorithm for GNF rule extraction which efficiently ex- tracts sentence level SCFG rule sets with an arbitrary number of non-terminals. We analyze the performance of the obtained grammar for statistical machine translation on three language pairs.
