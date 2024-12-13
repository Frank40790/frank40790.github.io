"use client";
import { usePathname } from "next/navigation";
import {
  RightPicLeftText,
  FullTextHeaders,
  Banner,
  IconListStatic,
  FullText,
  FullImage,
  MarkdownBlock,
  LeftRightImage,
  CodeBlock,
  FetchCode,
} from "../../components/page_block";


export default function Event() {
  const icons = [
    { icon: "devicon:python", name: "Python" },
    { icon: "devicon:pytorch", name: "PyTorch" },
  ];
  const pathname = usePathname();
  return (
    <>
      <title>Text Generation</title>
      <Banner textComponent="Text Generation" />

      <FullTextHeaders
        headers="What does this do?"
        textComponent={
          <>
            <div>
              Language model had gain lots of attraction in the past few years
              due to the launch of GPT models from OpenAI. Language modelling is
              a interesting field to explore, it could unlock possibilities that
              is hard to achieve in the past. While I personally had been using
              the language model from GPT-2 and GPT-3 era, I have never tried to
              build one myself, so I decided to create one while I learn the
              underlying archetecture that powers this technology.
            </div>
          </>
        }
      />

      <FullTextHeaders headers="The Archetecture" textComponent="" />

      <RightPicLeftText
        imageSrc={`${pathname}/transformer.png`}
        altText=""
        textComponent={
          <>
            <div>
              I started by looking at the full encoder-decoder transformer
              archetecture. Not understanding anything about it, the
              architecture looks very intimidating. But soon I realised that I
              am going to build a decoder only transformer, so I started to
              search up the function of each block on the decoder side, starting
              from the text encoding, embedding, multihead attention and the
              masking mechanism.
            </div>
            <div>image: (Vaswani, 2023)</div>
          </>
        }
      />
      <FullTextHeaders
        headers="Learning Journey"
        textComponent={
          <>
            <div>This is a brief summary of what I gathered</div>
            <br />
            <strong>Text Encoding</strong>
            <div>
              Starting from text encoding, after reading some resource, I found
              out that the text sequence is encoded using a tokenizer where the
              text tokens is converted into number representation. The
              positional encoding is for reserving the token&apos;s position in
              a sentence, retaining it&apos;s contextual meaning.
            </div>
            <br />
            <strong>Text Embedding</strong>
            <div>
              The numeric data for the text encoding and position encoding is
              converted into a embedding vector. The embedding model has to be
              trained while the position encoding embedding can be calculated
              using the formula below.
            </div>
            <br />
            <MarkdownBlock content="$$\text{Odd:  } PE_{\text{(position, 2i)}} = \sin{\frac{\text{position}}{10000^{\frac{2i}{\text{model dimension}}}}} $$" />
            <MarkdownBlock content="$$\text{Even: } PE_{\text{(position, 2i)}} = \cos{\frac{\text{position}}{10000^{\frac{2i}{\text{model dimension}}}}} $$" />
            <br />
            <div>
              The embedded vector of the text and positional encoding is added
              together into a joint vector, which allows for further processing
            </div>
            <FullImage
              imageSrc={`${pathname}/encoding.png`}
              altText="Encoder"
            />
            <strong>QKV</strong>
            <div>
              The vector from the embedding are duplicated into Query (Q), Key
              (K) and Value (V). The Q,K and V is passed into trainable linear
              layer, labeled as Q&apos;, K&apos;, V&apos;
            </div>
            <FullImage
              imageSrc={`${pathname}/attention.png`}
              altText="Encoder"
            />
            <strong>Multihead attention</strong>
            <div>
              Here, the Q&apos;,K&apos; and V&apos; are passed into a Multihead
              attention where they are passed into the formula, where the d
              <sub>k</sub> means (model dimension / number of attention head)
            </div>
            <MarkdownBlock content="$$ \text{softmax}(\frac{QK^T}{\sqrt{d_k}}) V $$" />

            <div>
              Then the matrix is masked so tokens will not be able to access
              future tokens
            </div>
            <LeftRightImage
              leftImageSrc={`${pathname}/masked.png`}
              leftAltText="Masked attention"
              rightImageSrc={`${pathname}/qkv_operation.png`}
              rightAltText="QKV"
            />
          </>
        }
      />

      <FullTextHeaders
        headers="The Code"
        textComponent={
          <>
            <strong>Text Encoding</strong>
            <div>
              The text encoding I used is the tiktoken from OpenAI, using the
              same encoding method as GPT-2
            </div>
            <br />
            <FetchCode url={`${pathname}/encoding.py`} />
            <br />
            <strong>Data Processing</strong>
            <div>The data is splitted into training and validation set</div>
            <br />
            <FetchCode url={`${pathname}/data_processing.py`} />
            <br />
            <strong>Multihead Attention</strong>
            <div>The multihead attention using query key and value</div>
            <br />
            <FetchCode url={`${pathname}/multihead_attention.py`} />
            <br />
            <strong>Loading Dataset</strong>
            <div>
              The dataset used in this is fineweb-edu (and some openwebtext),
              concatenating all the text together, because this is going to be a
              pretrained model
            </div>
            <br />
            <FetchCode url={`${pathname}/load_dataset.py`} />
            <br />
            <strong>Training Code</strong>
            <br />
            <br />
            <FetchCode url={`${pathname}/hyperparameter.py`} />
            <br />
            <FetchCode url={`${pathname}/training.py`} />
            <br />
          </>
        }
      />
      <FullTextHeaders
        headers="Training"
        textComponent={
          <>
            <div>
              After all those code writing, I started to train the model. I do
              not have high computational resource to train this model :( , so I
              only trained it for a few epoch on my computer&apos;s GPU, which
              took quite some time to train.
            </div>
            <div>
              These are the result of the models, where model_0002.model is
              trained for the longest
            </div>
            <br />
            <CodeBlock
              filename=""
              code={`
\`\`\`text
>>> I think
----------model_0000.model----------
[Sample 1] I think you're a bit more informative and much information about how to read a high-quality breed yourself may
[Sample 2] I think you personally do indeed. - Clean your makeup area - Having a glass painting on your hand
[Sample 3] I think we need to know the water source in your child. Adaptsication: The ability to learn
----------model_0001.model----------
[Sample 1] I think the cleaning of bags is part of a tooth and it may be as part of a block, or
[Sample 2] I think about the FDA to enter open secret territories found other plants of Central and North Carolina. These those organisms
[Sample 3] I think most Sarah this year doesn't that quite as we did with African African-Americans in poverty, but
----------model_0002.model----------
[Sample 1] I think the lead of yours is the best disaster of science fiction systems. So, what can we do
[Sample 2] I think they will be good members of you are Let go over the planet and olives. Everything in
[Sample 3] I think 5:30, or 4:37, and U G G. Lee, Martin, S.  
\`\`\`
            `}
            />
            <br />
            <div>
              The output doesn&apos;t always make sense... but given the
              computational resource, it is a ok result
            </div>
          </>
        }
      />
      <FullTextHeaders headers="What is used?" textComponent={<></>} />
      <IconListStatic icons={icons} />
      <FullTextHeaders
        headers="References"
        textComponent={
          <>
            <div className="relative before:content-['>'] before:absolute before:left-[-1em]">
              Vaswani, Ashish. Figure 1: The Transformer - model architecture. 2
              Aug. 2023. Attention Is All You Need,
              https://arxiv.org/pdf/1706.03762. Accessed 5 Dec 2024.
            </div>
            <div className="relative before:content-['>'] before:absolute before:left-[-1em]">
              Karpathy, Andrej. “Let&apos;s Build GPT: From Scratch, in Code,
              Spelled Out.” YouTube, YouTube, 17 Jan. 2023,
              www.youtube.com/watch?v=kCc8FmEb1nY.
            </div>
            <div className="relative before:content-['>'] before:absolute before:left-[-1em]">
              Karpathy, Andrej. nanoGPT, 2023,
              https://github.com/karpathy/nanoGPT.git. Accessed 2024.
            </div>
          </>
        }
      />
    </>
  );
}
