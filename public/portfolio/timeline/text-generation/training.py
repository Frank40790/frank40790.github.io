# Training
model = GPT()
model = model.to(DEVICE)
last_model_name, start_from = get_last_model()
if last_model_name is not None:
    print(f"Resuming From : {last_model_name}")
    model.load(f"./{last_model_name}")
print(sum(p.numel() for p in model.parameters())/1e6, 'M parameters')

# Optimizer
optimizer = torch.optim.AdamW(model.parameters(), lr=LEARNING_RATE)

for steps in range(start_from, EPOCHS + 1):
    if steps % 10 == 0:
        print(steps, end="")
    elif steps % 100 == 0:
        print("\n")
    else:
        print("-", end="")

    if steps % EVALUATION_INTERVAL == 0 or steps == EPOCHS - 1:
        losses = get_loss()
        model.save(f"model_{steps}.model")
        print(f"\nStep {steps} : Train loss {losses['train']:.4f}, Val loss {losses['val']:.4f}\n")

    # sample a batch of data
    xb, yb = get_batch('train')

    # evaluate the loss
    logits, loss = model.forward(xb, yb)
    # optimizer zero grad
    optimizer.zero_grad(set_to_none=True)
    # Backward pass
    loss.backward()
    # Optimizer step
    optimizer.step()