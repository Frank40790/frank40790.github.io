content = ""
dataset_iter = iter(load_dataset("HuggingFaceFW/fineweb-edu", 
                                 name="CC-MAIN-2024-10", 
                                 split="train", 
                                 streaming=True))
for index in range(0, dataset_range[1]):
    if (index < dataset_range[0]):
        _ = next(dataset_iter)
    else:
        content += (next(dataset_iter)["text"] + "\n")
print(f"Dataset of {content.count(' ') / 1e3}K word loaded") # approx