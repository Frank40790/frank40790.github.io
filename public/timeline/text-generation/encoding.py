TOKENIZER = "r50k_base"
encoding = tiktoken.get_encoding(TOKENIZER)
encode = lambda text: encoding.encode(text)
decode = lambda text: encoding.decode(text)