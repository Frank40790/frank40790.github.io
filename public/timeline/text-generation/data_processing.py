# Train / Validation Split Function
train_validation_split = lambda data, ratio: (data[:int(len(data)*ratio)], data[int(len(data)*ratio):])

# Encode the text & Split Train Validation Data
encoded = encode(content)
data = torch.tensor(encoded, dtype=torch.int64)
train_data, validation_data = train_validation_split(data, TRAIN_VALIDATION_SPLIT_RATIO)
print(f"Has {len(encoded) / 1e3}K {TOKENIZER} token")